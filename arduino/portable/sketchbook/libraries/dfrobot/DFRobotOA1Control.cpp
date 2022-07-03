/*!
 * @file Control.cpp
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
#include "DFRobotOA1Control.h"
#include<math.h>
double ssave,tsave;
int elbowAngle=85,clawAngle=90;
double X_Axis;
double Y_Axis;
double Z_Axis;
long databuf[13];
DFRobotOA1Control :: DFRobotOA1Control()
{
}
/*!
 *  @brief polar coordinates mechanical arm turn left.
 */
void DFRobotOA1Control ::LeftTurn()                           
{
              ssave=X_Axis;
              tsave=Y_Axis;
              X_Axis=X_Axis*cos(-0.5/180*PI)-Y_Axis*sin(-0.5/180*PI);
              Y_Axis=Y_Axis*cos(-0.5/180*PI)+X_Axis*sin(-0.5/180*PI);
              if(X_Axis<0)
              {
                stopFlag=1;
                Serial.println("stopFlag");
              }
              else
              {
                cpoint(X_Axis,Y_Axis,Z_Axis);
              }
              if(stopFlag==1)
              {
                 X_Axis=ssave;
                 Y_Axis=tsave;
              }
}
/*!
 *  @brief polar coordinates mechanical arm turn right.
 */
void DFRobotOA1Control ::RightTurn()                       
{
              ssave=X_Axis;
              tsave=Y_Axis;
              X_Axis=X_Axis*cos(0.5/180*PI)-Y_Axis*sin(0.5/180*PI);
              Y_Axis=Y_Axis*cos(0.5/180*PI)+X_Axis*sin(0.5/180*PI);
              if(X_Axis<0)
              {
                stopFlag=1;
                Serial.println("stopFlag");
              }
              else
              {
                cpoint(X_Axis,Y_Axis,Z_Axis);
              }
              if(stopFlag==1)
              {
                X_Axis=ssave;
                Y_Axis=tsave;
              }
}
/*!
 *  @brief polar coordinates mechanical arm spread.
 */
void DFRobotOA1Control ::Spread()                          
{
   X_Axis=X_Axis+sin(a/180*PI);
   Y_Axis=Y_Axis+cos(a/180*PI);
   cpoint(X_Axis,Y_Axis,Z_Axis);
   if(stopFlag==1)
   {
     X_Axis=X_Axis-sin(a/180*PI);
     Y_Axis=Y_Axis-cos(a/180*PI);
   }
}
/*!
 *  @brief polar coordinates mechanical arm shrink.
 */
void DFRobotOA1Control ::Shrink()                            
{
    X_Axis=X_Axis-sin(a/180*PI);
    Y_Axis=Y_Axis-cos(a/180*PI);
    if(X_Axis<0)
    {
       stopFlag=1;
       Serial.println("stopFlag");
    }
    else
    {
       cpoint(X_Axis,Y_Axis,Z_Axis);
    }
    if(stopFlag==1)
    {
       X_Axis=X_Axis+sin(a/180*PI);
       Y_Axis=Y_Axis+cos(a/180*PI);
    }
}
/*!
 *  @brief mechanical paw close.
 */
void DFRobotOA1Control ::cls()                           
{
  if(clawAngle<=115){
	clawAngle++; 
  }
  myservoF.write(clawAngle);
  delay(3);
}
/*!
 *  @brief mechanical paw open.
 */
void DFRobotOA1Control ::ope()                           
{
  if(clawAngle>=70){
	clawAngle--;  
  }
  myservoF.write(clawAngle);
  delay(3);
}
/*!
 *  @brief mechanical paw roll right.
 */
void DFRobotOA1Control ::rroll()                        
{
   /*
   elbowAngle++;
   if(elbowAngle>180)
   {
     stopFlag=1;
     Serial.println("stopFlag");
   }
    else
  {
   stopFlag=0;
   myservoD.write(elbowAngle);
   delay(3);
  }
  if(stopFlag==1)
  {
    elbowAngle=elbowAngle--;
  } */
  if(elbowAngle<180){
	elbowAngle++;  
  }
  myservoD.write(elbowAngle);
  delay(3);
}
/*!
 *  @brief mechanical paw roll left.
 */
void DFRobotOA1Control ::lroll()                        
{
   /*
   elbowAngle--;
   if(elbowAngle<0)
   {
     stopFlag=1;
     Serial.println("stopFlag");
   }
    else
  {
   stopFlag=0;
   myservoD.write(elbowAngle);
   delay(3);
  }
  if(stopFlag==1)
  {
    elbowAngle=elbowAngle++;
  } */
  if(elbowAngle>0){
	elbowAngle--;  
  }
  myservoD.write(elbowAngle);
  delay(3);
}
/*!
 *  @brief polar coordinates mechanical arm upward.
 */
void DFRobotOA1Control ::up()                        
{
  Z_Axis=Z_Axis+1;
  cpoint(X_Axis,Y_Axis,Z_Axis); 
  if(stopFlag==1)
    {
       Z_Axis=Z_Axis-1;
    }
}
/*!
 *  @brief polar coordinates mechanical arm dowm.
 */
void DFRobotOA1Control ::down()                      
{
  Z_Axis=Z_Axis-1;
  cpoint(X_Axis,Y_Axis,Z_Axis); 
  if(stopFlag==1)
    {
       Z_Axis=Z_Axis+1;
    }
}
/*!
 *  @brief cartesian coordinate to the upward translation.
 */
void DFRobotOA1Control ::xup()                      
{
  X_Axis=X_Axis+1;
  cpoint(X_Axis,Y_Axis,Z_Axis); 
  if(stopFlag==1)
  {
    X_Axis=X_Axis-1;
  }       
}
/*!
 *  @brief cartesian coordinate to the down translation.
 */
void DFRobotOA1Control ::xdown()                  
{
  X_Axis=X_Axis-1;
  if(X_Axis<0)
  {
    stopFlag=1;
    Serial.println("stopFlag");
  }
  else
  {
    cpoint(X_Axis,Y_Axis,Z_Axis); 
  }
  if(stopFlag==1)
  {
    X_Axis=X_Axis+1;
  }       
}
/*!
 *  @brief cartesian coordinate to the left translation.
 */
void DFRobotOA1Control::yup()                         
{
   Y_Axis++;
   cpoint(X_Axis,Y_Axis,Z_Axis);
   if(stopFlag==1)
   {
     Y_Axis=Y_Axis-1;
   }  
}
/*!
 *  @brief cartesian coordinate to the right translation.
 */
void DFRobotOA1Control ::ydown()                    
{
  Y_Axis--;
  cpoint(X_Axis,Y_Axis,Z_Axis);
  if(stopFlag==1)
  {
    Y_Axis=Y_Axis+1;
  }             
  }
/*!
 *  @brief In the xy plane movement.
 */
void DFRobotOA1Control ::remotexy()
{
  int pn=-1;
  double ra;
  ra=atan((databuf[10]-127)/(databuf[9]-127))*180/PI;
  if(databuf[9]-127<0)
  {
      pn=1;
  }
  if(databuf[10]-127>100&&databuf[9]-127<10&&-10<databuf[9]-127)
  {
       xup(); 
  }
  else if(databuf[10]-127<-100&&databuf[9]-127<10&&-10<databuf[9]-127)
  {
      xdown();
  }
  else if(databuf[9]-127<-100&&databuf[10]-127<10&&-10<databuf[10]-127)
  {
      yup();
  }
  else if(databuf[9]-127>100&&databuf[10]-127<10&&-10<databuf[10]-127)
  {
      ydown();
  }
  else 
  {
      X_Axis=X_Axis-2*sin(ra/180*PI)*pn; 
      Y_Axis=Y_Axis+2*cos(ra/180*PI)*pn;
      cpoint(X_Axis,Y_Axis,Z_Axis);
      if(stopFlag==1)
      {
       X_Axis=X_Axis+2*sin(ra/180*PI)*pn;
       Y_Axis=Y_Axis-2*cos(ra/180*PI)*pn;
      } 
  }  
  databuf[9]=127;
  databuf[10]=127;
}
/*!
 *  @brief In the xz plane movement.
 */
void DFRobotOA1Control ::remotexz()
{
  int pn=-1;
  double ra;
  ra=atan((databuf[12]-127)/(databuf[11]-127))*180/PI;
  if(databuf[11]-127<0)
  {
      pn=1;
  }
  if(databuf[12]-127>100&&databuf[11]-127<10&&-10<databuf[11]-127)
  {
       up(); 
  }
  else if(databuf[12]-127<-100&&databuf[11]-127<10&&-10<databuf[11]-127)
  {
      down();
  }
  else if(databuf[11]-127<-100&&databuf[12]-127<10&&-10<databuf[12]-127)
  {
      yup();
  }
  else if(databuf[11]-127>100&&databuf[12]-127<10&&-10<databuf[12]-127)
  {
      ydown();
  }
  else 
  {
      Z_Axis=Z_Axis-2*sin(ra/180*PI)*pn; 
      Y_Axis=Y_Axis+2*cos(ra/180*PI)*pn;
      cpoint(X_Axis,Y_Axis,Z_Axis);
      if(stopFlag==1)
      {
        Z_Axis=Z_Axis+2*sin(ra/180*PI)*pn;
        Y_Axis=Y_Axis-2*cos(ra/180*PI)*pn;
      } 
  }  
  databuf[11]=127;
  databuf[12]=127;
}
/*!
 *  @brief Open air pump.
 */
void DFRobotOA1Control ::pumpOn()                
{
  digitalWrite(pump_EN, HIGH);
}
/*!
 *  @brief close air pump.
 */
void DFRobotOA1Control ::pumpOff()                
{
  digitalWrite(pump_EN, LOW);
}
/*!
 *  @brief Open air valve.
 */
void DFRobotOA1Control ::valveOn()                
{
  digitalWrite(valve_EN, HIGH);
}
/*!
 *  @brief close air valve.
 */
void DFRobotOA1Control ::valveOff()                
{
  digitalWrite(valve_EN, LOW);
}
