/*!
 * @file Calculation.cpp
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
#include "DFRobotOA1Calculation.h"
#include<math.h>
double MAIN_ARM_LENGTH;            //OA1 main arm lenghth
double FORE_ARM_LENGTH;            //OA1 fore arm lenghth
double SUPPORT_ARM_LENGTH;         //OA1 support arm lenghth
int flyFlag=0;
int stopFlag;
int sflag=1;
int flag;
int sensorFlag;
int sensorValue;
int drawflag;
Servo myservoA;   
Servo myservoB;
Servo myservoC;
Servo myservoD;
Servo myservoF;

double a,b,c,svalue,seca,secb,secc;
int insertNum,insertNum2;
DFRobotOA1Judgment judgment2;
/*!
 *  @brief get the XYZ coordinate of the point.
 *
 *  @param The inverse operation of mechanical arm,
 *
 *  @return The Rotation Angle of servos.
 */
void sinangle(double x,double y,double z)     
{
  double sin2,cos2,sin3,cos3;
  a=atan(y/x)*180/PI;
  cos3=(pow((x*cos(a/180*PI)+y*sin(a/180*PI)-SUPPORT_ARM_LENGTH),2)+pow(z,2)-MAIN_ARM_LENGTH*MAIN_ARM_LENGTH-FORE_ARM_LENGTH*FORE_ARM_LENGTH)/(2*MAIN_ARM_LENGTH*FORE_ARM_LENGTH);
  sin3=-sqrt(1-pow(cos3,2));
  c=atan2(sin3,cos3)*180/PI;
  sin2=(z*(FORE_ARM_LENGTH*cos(c/180*PI)+MAIN_ARM_LENGTH)-FORE_ARM_LENGTH*sin(c/180*PI)*(x*cos(a/180*PI)+y*sin(a/180*PI)-SUPPORT_ARM_LENGTH))/(pow((FORE_ARM_LENGTH*cos(c/180*PI)+MAIN_ARM_LENGTH),2)+FORE_ARM_LENGTH*FORE_ARM_LENGTH*pow(sin(c/180*PI),2));
  cos2=((x*cos(a/180*PI)+y*sin(a/180*PI)-SUPPORT_ARM_LENGTH)*(FORE_ARM_LENGTH*cos(c/180*PI)+MAIN_ARM_LENGTH)+FORE_ARM_LENGTH*sin(c/180*PI)*z)/(pow((FORE_ARM_LENGTH*cos(c/180*PI)+MAIN_ARM_LENGTH),2)+FORE_ARM_LENGTH*FORE_ARM_LENGTH*pow(sin(c/180*PI),2));
// b=atan ((z*(FORE_ARM_LENGTH*cos(c/180*PI)+MAIN_ARM_LENGTH)-FORE_ARM_LENGTH*sin(c/180*PI)*(x*cos(a/180*PI)+y*sin(a/180*PI)))/((x*cos(a/180*PI)+y*sin(a/180*PI))*(FORE_ARM_LENGTH*cos(c/180*PI)+MAIN_ARM_LENGTH)+FORE_ARM_LENGTH*sin(c/180*PI)*z))*180/PI;
  b=atan2(sin2,cos2)*180/PI;
  svalue=c;
  a=90-a;
  b=b;
  c=-b-c+45;
}
/*!
 *  @brief get two XYZ coordinates of the point.
 *
 *  @param The inverse operation of mechanical arm,
 *
 *  @return The Rotation Angle of each arm.
 */
void angles(double x,double y,double z,double next_x,double next_y,double next_z)          
{ 
  double sin2,secsin2,seccos2,cos2,sin3,secsin3,seccos3,cos3,VarA,VarB,VarC,secVarA,secVarB,secVarC,i,j,k;
  VarA=atan(y/x)*180/PI;
  secVarA=atan(next_y/next_x)*180/PI;
  cos3=(pow((x*cos(VarA/180*PI)+y*sin(VarA/180*PI)-SUPPORT_ARM_LENGTH),2)+pow((z-SUPPORT_ARM_LENGTH),2)-MAIN_ARM_LENGTH*MAIN_ARM_LENGTH-FORE_ARM_LENGTH*FORE_ARM_LENGTH)/(2*MAIN_ARM_LENGTH*FORE_ARM_LENGTH);
  seccos3=(pow((next_x*cos(secVarA/180*PI)+next_y*sin(secVarA/180*PI)-SUPPORT_ARM_LENGTH),2)+pow((next_z-SUPPORT_ARM_LENGTH),2)-MAIN_ARM_LENGTH*MAIN_ARM_LENGTH-FORE_ARM_LENGTH*FORE_ARM_LENGTH)/(2*MAIN_ARM_LENGTH*FORE_ARM_LENGTH);
  sin3=-sqrt(1-pow(cos3,2));
  secsin3=-sqrt(1-pow(seccos3,2));
  VarC=atan2(sin3,cos3)*180/PI;
  secVarC=atan2(secsin3,seccos3)*180/PI;
  sin2=((z-SUPPORT_ARM_LENGTH)*(FORE_ARM_LENGTH*cos(VarC/180*PI)+MAIN_ARM_LENGTH)-FORE_ARM_LENGTH*sin(VarC/180*PI)*(x*cos(VarA/180*PI)+y*sin(VarA/180*PI)-SUPPORT_ARM_LENGTH))/(pow((FORE_ARM_LENGTH*cos(VarC/180*PI)+MAIN_ARM_LENGTH),2)+FORE_ARM_LENGTH*FORE_ARM_LENGTH*pow(sin(VarC/180*PI),2));
  secsin2=((next_z-SUPPORT_ARM_LENGTH)*(FORE_ARM_LENGTH*cos(secVarC/180*PI)+MAIN_ARM_LENGTH)-FORE_ARM_LENGTH*sin(secVarC/180*PI)*(next_x*cos(secVarA/180*PI)+next_y*sin(secVarA/180*PI)-SUPPORT_ARM_LENGTH))/(pow((FORE_ARM_LENGTH*cos(secVarC/180*PI)+MAIN_ARM_LENGTH),2)+FORE_ARM_LENGTH*FORE_ARM_LENGTH*pow(sin(secVarC/180*PI),2));
  cos2=((x*cos(VarA/180*PI)+y*sin(VarA/180*PI)-SUPPORT_ARM_LENGTH)*(FORE_ARM_LENGTH*cos(VarC/180*PI)+MAIN_ARM_LENGTH)+FORE_ARM_LENGTH*sin(VarC/180*PI)*(z-SUPPORT_ARM_LENGTH))/(pow((FORE_ARM_LENGTH*cos(VarC/180*PI)+MAIN_ARM_LENGTH),2)+FORE_ARM_LENGTH*FORE_ARM_LENGTH*pow(sin(VarC/180*PI),2));
  seccos2=((next_x*cos(secVarA/180*PI)+next_y*sin(secVarA/180*PI)-SUPPORT_ARM_LENGTH)*(FORE_ARM_LENGTH*cos(secVarC/180*PI)+MAIN_ARM_LENGTH)+FORE_ARM_LENGTH*sin(secVarC/180*PI)*(next_z-SUPPORT_ARM_LENGTH))/(pow((FORE_ARM_LENGTH*cos(secVarC/180*PI)+MAIN_ARM_LENGTH),2)+FORE_ARM_LENGTH*FORE_ARM_LENGTH*pow(sin(secVarC/180*PI),2));
// b=atan ((z*(FORE_ARM_LENGTH*cos(c/180*PI)+MAIN_ARM_LENGTH)-FORE_ARM_LENGTH*sin(c/180*PI)*(x*cos(a/180*PI)+y*sin(a/180*PI)))/((x*cos(a/180*PI)+y*sin(a/180*PI))*(FORE_ARM_LENGTH*cos(c/180*PI)+MAIN_ARM_LENGTH)+FORE_ARM_LENGTH*sin(c/180*PI)*z))*180/PI;
  VarB=atan2(sin2,cos2)*180/PI;
// secb=atan2((next_z*(FORE_ARM_LENGTH*cos(c11/180*PI)+MAIN_ARM_LENGTH)-FORE_ARM_LENGTH*sin(c11/180*PI)*(next_x*cos(a11/180*PI)+next_y*sin(a11/180*PI)))/((next_x*cos(a11/180*PI)+next_y*sin(a11/180*PI))*(FORE_ARM_LENGTH*cos(c11/180*PI)+MAIN_ARM_LENGTH)+FORE_ARM_LENGTH*sin(c11/180*PI)*next_z))*180/PI;
  secVarB=atan2(secsin2,seccos2)*180/PI;
   i=isnan(secVarA);
   j=isnan(secVarB);
   k=isnan(secVarC);
  if(i==1||j==1||k==1)
  {
    flag=1;
  }
  else
  {
    a=VarA+90;
    seca=secVarA+90;
    b=VarB;
    c=-VarB-VarC+45;
    secb=secVarB;
    secc=-secVarB-secVarC+45;
  }
} 
/*!
 *  @brief Point positioning.
 */
void point(int X_COORDINATE,int Y_COORDINATE,int Z_COORDINATE)                      
{
    int f,g,n;
    sinangle(X_COORDINATE,Y_COORDINATE,Z_COORDINATE);
    judgment2.Limitjudgment();
    n=(a*11)+500;
    f=(b*11)+500;
    g=(c*11)+500;
     myservoA.writeMicroseconds(n);
     myservoB.writeMicroseconds(f);
     myservoC.writeMicroseconds(g);
     delay(1);
     if(sensorFlag==1)
  {
     if(sensorValue>180)
     {
       digitalWrite(6, LOW);   
     } 
     else if(sensorValue<180)
     {
       digitalWrite(6, HIGH); 
     }
  } 
}
/*!
 *  @brief Determine the limits of point positioning.
 */
void cpoint(int X_COORDINATE,int Y_COORDINATE,int Z_COORDINATE)                
{
    int f,g,n;
    sinangle(X_COORDINATE,Y_COORDINATE,Z_COORDINATE);
    judgment2.LimitjudgmentC();
     if(stopFlag==0)
     {
    n=(a*11)+500;
    f=(b*11)+500;
    g=(c*11)+500;
     myservoA.writeMicroseconds(n);
     myservoB.writeMicroseconds(f);
     myservoC.writeMicroseconds(g);
     delayMicroseconds(800);
     }
     else if(stopFlag==1)
     {
         Serial.println("stopFlag");
     }
     if(sensorFlag==1)
    {
       if(sensorValue>180)
       {
            digitalWrite(6, LOW);   
       } 
       else if(sensorValue<180)
       {
           digitalWrite(6, HIGH); 
       }
    } 
}
/*!
 *  @brief Get the next and moving straight to the XYZ coordinates coordinates.
 */
void LineMove(double next_x,double next_y,double next_z,int v)    
{
  double l,f,r,i,u,dx,dy,dz,ddx,ddy,ddz;
  int n,m;
  m=4;
  angles(X_Axis,Y_Axis,Z_Axis,next_x,next_y,next_z);
if(flag==0)
  {
     l=abs(a-seca);
     f=abs(b-secb);
     r=abs(c-secc);
     l=l*11;
     f=f*11;
     r=r*11;
    if(l!=0,r==0,f==0)
  {
     n=l/m;
  }
  if(l==0&&r!=0&&f!=0)
  {
    if(r>=f)
    {
      n=r/m;            //k/n!
    }
    else if(r<f)
    {
      n=f/m;   //j/n!
    }
  }
  else if(r==0&&l!=0&&f!=0)
  {
     if(l>=f)
    {
      n=l/m;            //k/n!
    }
    else
    {
      n=f/m;   //j/n!
    } 
  }
  else if(f==0&&l!=0&&r!=0)
  {
     if(l>=r)
    {
      n=l/m;            //k/n!
    }
    else
    {
      n=r/m;   //j/n!
    }  
  }
  else if(l!=0&&r!=0&&f!=0)
  {
    if(l>=r)
    {
      if(l>=f)
      {
        n=l/m;      
      }
      else if(l<f)
      {
        n=f/m;
      }
    }
    else if(l<r)
    {
      if(r>=f)
      {
        n=r/m;
      }
      else if(r<f)
      {
        n=f/m;
      }
    }
  }
  if(n>5)
      {
        insertNum=n/2+1;
      }
      else
      {
        insertNum2=n;
      }
  dx=next_x-X_Axis;
  dy=next_y-Y_Axis;
  dz=next_z-Z_Axis; 
   if(insertNum2==0&&insertNum!=0)
  {
    ddx=dx/n;
    ddy=dy/n;
    ddz=dz/n;
    point(X_Axis,Y_Axis,Z_Axis+(20*flyFlag*drawflag));
     for(int i=1;i<=insertNum-1;i++)
    {
       X_Axis=X_Axis+ddx*2;
       Y_Axis=Y_Axis+ddy*2;
       Z_Axis=Z_Axis+ddz*2; 
       point(X_Axis,Y_Axis,Z_Axis+(20*flyFlag*drawflag));
       delay(v+flyFlag*5);
    }   
     point(next_x,next_y,next_z+(20*flyFlag*drawflag));
     if(flyFlag*drawflag*sflag==1)
      {
          delay(300);
          for(i=0;i<=20;i++)
          {
            point(X_Axis,Y_Axis,Z_Axis+20-i);
            delay(10);
          }
          flyFlag=0;
      }
    insertNum=0;
    insertNum2=0;
  }  
  else if(insertNum2==0,insertNum==0)
  {
    ddx=0;
    ddy=0;
    ddz=0;
     for(i=0;i<=insertNum;i++)
    {
       point(X_Axis,Y_Axis,Z_Axis+(20*flyFlag*drawflag));
    }
    if(flyFlag*drawflag*sflag==1)
      {
          delay(300);
          for(i=0;i<=20;i++)
          {
            point(X_Axis,Y_Axis,Z_Axis+20-i);
            delay(10);
          }
          flyFlag=0;
      }
    insertNum=0;
    insertNum2=0;
  }    
  else if(insertNum2!=0,insertNum=0)
  {
    ddx=dx/insertNum2;
    ddy=dy/insertNum2;
    ddz=dz/insertNum2;
    insertNum=insertNum2;
      for(i=0;i<=insertNum;i++)
    {
       X_Axis=X_Axis+ddx*i;
       Y_Axis=Y_Axis+ddy*i;
       Z_Axis=Z_Axis+ddz*i;
       point(X_Axis,Y_Axis,Z_Axis+(20*flyFlag*drawflag));  
       delay(v+flyFlag*5);
    }
    if(flyFlag*drawflag*sflag==1)
      {
          delay(300);
          for(i=0;i<=20;i++)
          {
            point(X_Axis,Y_Axis,Z_Axis+20-i);
            delay(10);
          }
          flyFlag=0;
      }
  }  
      X_Axis=next_x;
      Y_Axis=next_y;
      Z_Axis=next_z;
}
           else if(flag==1)
           {
             flag=0;
             point(X_Axis,Y_Axis,Z_Axis);
           }
           if(sflag==1){
           Serial.println("ok");
           }
}
