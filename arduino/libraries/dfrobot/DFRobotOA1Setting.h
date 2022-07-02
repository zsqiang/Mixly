/*!
 * @file DFRobotOA1Setting.h
 * @brief DFRobot's explorer OA1 Mechanical arm
 * @n Header file for DFRobot's explorer OA1 Mechanical arm
 *
 * @copyright	[DFRobot](http://www.dfrobot.com), 2016
 * @copyright	GNU Lesser General Public License
 *
 * @author [Zc](shrimp.liu@dfrobot.com)
 * @version  V1.0
 * @date  2016-03-22
 */
 #include "Arduino.h"
 #include "DFRobotOA1Calculation.h"
 
#ifndef DFRobotOA1Setting_h
 #define DFRobotOA1Setting_h

extern double MAIN_ARM_LENGTH;
extern double FORE_ARM_LENGTH; 
extern double SUPPORT_ARM_LENGTH;
extern void point(int z,int x,int v);
extern double Y_Axis;
extern double X_Axis;
extern double Z_Axis;
extern int smartFlag;
class DFRobotOA1Setting
{
  public:
     DFRobotOA1Setting();
     void setMyarm(double MAIN_ARM,double FORE_ARM,double SUPPORT_ARM);                                         
     void initialization(double X_COORDINATE,double Y_COORDINATE,double Z_COORDINATE,int SWITCH);               
     void smartSwitch (int SWITCH);                                                                             
     void ServoSetting();
};
#endif
