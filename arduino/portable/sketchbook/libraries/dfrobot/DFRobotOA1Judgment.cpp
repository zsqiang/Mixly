/*!
 * @file Judgment.cpp
 * @brief DFRobot's explorer OA1 Mechanical arm
 * @n CPP file for DFRobot's explorer OA1 Mechanical arm
 *
 * @copyright	[DFRobot](http://www.dfrobot.com), 2016
 * @copyright	GNU Lesser General Public License
 * @n [Connection and Diagram](http://wiki.dfrobot.com.cn/index.php?title=(SKU:ROB0115)_Explorer_OA1%E6%9C%BA%E6%A2%B0%E8%87%82)
 * @author [Zc](shrimp.liu@dfrobot.com)
 * @version  V1.0
 * @date  2016-03-22
 */
#include "Arduino.h"
#include "DFRobotOA1Judgment.h"

double X,Y,Z;
double KA,KB;
double  cb[5];
int dg;
int l=70;
DFRobotOA1Judgment :: DFRobotOA1Judgment()
{
}
/*!
 *  @brief Calculate whether there will be obstacles in the path.
 */
void DFRobotOA1Judgment::judgment()                                                 
{
      double poty31,poty41,potx31,potx41,SKA,SKB,SR,A,B,C,CB,TT;
      SR=600;                                                            
      double potx[6]={};
      double poty[6]={};
      KA=(2*Y_Axis*X_Axis+sqrt(pow(2*Y_Axis*X_Axis,2)-4*(Y_Axis*Y_Axis-l*l)*(X_Axis*X_Axis-l*l)))/(2*(Y_Axis*Y_Axis-l*l));
      KB=(2*Y_Axis*X_Axis-sqrt(pow(2*Y_Axis*X_Axis,2)-4*(Y_Axis*Y_Axis-l*l)*(X_Axis*X_Axis-l*l)))/(2*(Y_Axis*Y_Axis-l*l));
      SKA=-(1/KA);
      SKB=-(1/KB);
      //K1*(x-Y_Axis)=y-X_Axis
      //K2*(x-Y_Axis)=y-X_Axis
      poty[1]=2*KA*(KA*Y_Axis-X_Axis)/(2*(1+KA*KA));
      potx[1]=KA*poty[1]-KA*Y_Axis+X_Axis;
      //pow((x-potx1),2)+pow((y-poty1),2)=SR*SR
      poty[4]=(2*poty[1]*(pow(KA,2)+1)+sqrt(pow((2*poty[1]*(pow(KA,2)+1)),2)-4*(pow(KA,2)+1)*((pow(KA,2)+1)*pow(poty[1],2)-SR*SR)))/(2*(pow(KA,2)+1));
      potx[4]=KA*poty[4]-KA*Y_Axis+X_Axis;
      poty41=(2*poty[1]*(pow(KA,2)+1)-sqrt(pow((2*poty[1]*(pow(KA,2)+1)),2)-4*(pow(KA,2)+1)*((pow(KA,2)+1)*pow(poty[1],2)-SR*SR)))/(2*(pow(KA,2)+1));
      potx41=KA*poty41-KA*Y_Axis+X_Axis;
      //K11*(x-potx1)=y-poty1
      poty[2]=2*KB*(KB*Y_Axis-X_Axis)/(2*(1+KB*KB));
      potx[2]=KB*poty[2]-KB*Y_Axis+X_Axis;
      poty[3]=(2*poty[2]*(pow(KB,2)+1)+sqrt(pow((2*poty[2]*(pow(KB,2)+1)),2)-4*(pow(KB,2)+1)*((pow(KB,2)+1)*pow(poty[2],2)-SR*SR)))/(2*(pow(KB,2)+1));
      poty31=(2*poty[2]*(pow(KB,2)+1)-sqrt(pow((2*poty[2]*(pow(KB,2)+1)),2)-4*(pow(KB,2)+1)*((pow(KB,2)+1)*pow(poty[2],2)-SR*SR)))/(2*(pow(KB,2)+1));
      potx[3]=KB*poty[3]-KB*Y_Axis+X_Axis;
      potx31=KB*poty31-KB*Y_Axis+X_Axis;
      if((pow((potx[4]-X_Axis),2)+pow((poty[4]-Y_Axis),2))>(pow((potx41-X_Axis),2)+pow((poty41-Y_Axis),2)))
      {
          poty[4]=poty[4];
          potx[4]=potx[4];
      }
      else
      {
        poty[4]=poty41;
        potx[4]=potx41;
      }
      if((pow((potx[3]-X_Axis),2)+pow((poty[3]-Y_Axis),2))>(pow((potx31-X_Axis),2)+pow((poty31-Y_Axis),2)))
      {
          poty[3]=poty[3];
          potx[3]=potx[3];
      }
      else
      {
        poty[3]=poty31;
        potx[3]=potx31;
      }
      for(int i=1;i<4;i++){
      B=sqrt(pow((potx[i]-potx[i+1]),2)+pow((poty[i]-poty[i+1]),2));
      //B=sqrt(pow((potx1-((databuf[5]*256+databuf[6])/1.8)),2)+pow((poty1-((databuf[7]*256+databuf[8]-400)/1.8)),2));
      //C=sqrt(pow((potx2-((databuf[5]*256+databuf[6])/1.8)),2)+pow((poty2-((databuf[7]*256+databuf[8]-400)/1.8)),2));
      A=sqrt(pow((potx[i]-X),2)+pow((poty[i]-Y),2));
      C=sqrt(pow((potx[i+1]-X),2)+pow((poty[i+1]-Y),2));
      cb[i]=acos((pow(A,2)+pow(C,2)-pow(B,2))/(2*A*C))*180/PI;
      }
      B=sqrt(pow((potx[4]-potx[1]),2)+pow((poty[4]-poty[1]),2));
      A=sqrt(pow((potx[4]-X),2)+pow((poty[4]-Y),2));
      C=sqrt(pow((potx[1]-X),2)+pow((poty[1]-Y),2));
      cb[4]=acos((pow(A,2)+pow(C,2)-pow(B,2))/(2*A*C))*180/PI;
      TT=cb[1]+cb[2]+cb[3]+cb[4];
      if(abs(TT-360)<1)
      {
        dg=1;
      }
      else
      {
        dg=0;
      }     
}
/*!
 *  @brief Limit position to judge.
 */
void DFRobotOA1Judgment::Limitjudgment()                                          
{
  if(30<abs(svalue)<160)
        {       
    if(20<b&&b<130&&20<c&&c<130)
    {
      stopFlag=0; 
      b=b;
      c=c;
    }
    else if(b<20||c<20||b>130||c>130)
    {
      if(b<20)
      {
        stopFlag=1;
      }
      if(c<20)
      {
        stopFlag=1;
      }
      if(b>130)
      {
        stopFlag=1;
      }
      if(c>130)
      {
        stopFlag=1;
      }
    }
    }
  else
  {
    stopFlag=1;
  }  
}
/*!
 *  @brief Limit position to judge.
 */
void DFRobotOA1Judgment::LimitjudgmentC()                                          
{
if(45<abs(svalue)&&abs(svalue)<170)
    {       
    if(20<b&&b<145&&20<c&&c<155&&0<=a&&a<=180)
    {
      stopFlag=0; 
      b=b;
      c=c;
      a=a;
    }
    else if(b<20||c<20||b>145||c>155)
    {
      if(b<20)
      {
        stopFlag=1;
      }
      if(c<20)
      {
        stopFlag=1;
      }
      if(b>145)
      {
        stopFlag=1;
      }
      if(c>155)
      {
        stopFlag=1;
      }
    }
    }
  else if(170<abs(svalue)||abs(svalue)<45)
  {
    stopFlag=1;
  }
  else if(a<5&&a>175)
  {
    stopFlag=1;
  }
}
