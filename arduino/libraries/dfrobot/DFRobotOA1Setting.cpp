/*!
 * @file Setting.cpp
 * @brief DFRobot's explorer OA1 Mechanical arm
 * @n CPP file for DFRobot's explorer OA1 Mechanical arm
 *
 * @copyright	[DFRobot](http://www.dfrobot.com), 2016
 * @copyright	GNU Lesser General Public License
 *
 * @author [Zc](shrimp.liu@dfrobot.com)
 * @version  V1.0
 * @date  2016-03-22
 */
#include "Arduino.h"
#include "DFRobotOA1Setting.h"

int smartFlag;
DFRobotOA1Setting :: DFRobotOA1Setting()
{
}
/*!
 *  @brief Set of mechanical arm length
 *
 *  @param MAIN_ARM_LENGTH       the main arm of the arm length
 *  @param FORE_ARM_LENGTH       the forearm length
 *  @param SUPPORT_ARM_LENGTH    the bracket arm length
 */
void DFRobotOA1Setting ::setMyarm(double MAIN_ARM,double FORE_ARM,double SUPPORT_ARM)            
{
  MAIN_ARM_LENGTH=MAIN_ARM;                          
  FORE_ARM_LENGTH=FORE_ARM;                          
  SUPPORT_ARM_LENGTH=SUPPORT_ARM;                       
}
/*!
 *  @brief The initial coordinate setting and intelligent switch Settings
 */
void DFRobotOA1Setting ::initialization(double X_COORDINATE,double Y_COORDINATE,double Z_COORDINATE,int SWITCH)       //The initial coordinate setting and intelligent switch Settings
{
  point(X_COORDINATE,Y_COORDINATE,Z_COORDINATE);
  myservoD.write(100);
  myservoF.write(90);//机械爪中间位置
  Y_Axis=Y_COORDINATE;
  Z_Axis=Z_COORDINATE;
  X_Axis=X_COORDINATE;
  smartSwitch (SWITCH);
}
/*!
 *  @brief Whether open intelligent judgment. 0----close,1----open
 */
void DFRobotOA1Setting ::smartSwitch (int SWITCH)    
{                                          
  if(SWITCH== 0)                           
  {
    smartFlag=0;
  }
  else if(SWITCH==1)
  {
    smartFlag=1;
    sensorFlag=0;
    stopFlag=0;
    flyFlag=0;
    sensorValue = 0;
  }
}
/*!
 *  @brief Servo motor interface settings
 *
 *  @param servo_ROT         pin 2
 *  @param servo_R           pin 4
 *  @param servo_L           pin 7
 *  @param servo_HAND_ROT    pin 8
 *  @param servo_HAND        pin 11
 */
void DFRobotOA1Setting ::ServoSetting()                       
{
  myservoA.attach(servo_ROT); 
  myservoB.attach(servo_R);   
  myservoC.attach(servo_L);   
  myservoD.attach(servo_HAND_ROT);  
  myservoF.attach(servo_HAND); 
}
