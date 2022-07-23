/*!
 * @file DFRobotOA1Control.h
 * @brief DFRobot's explorer OA1 Mechanical arm
 * @n Header file for DFRobot's explorer OA1 Mechanical arm
 *
 * @copyright	[DFRobot](http://www.dfrobot.com), 2016
 * @copyright	GNU Lesser General Public License
 * @n [Connection and Diagram](http://wiki.dfrobot.com.cn/index.php?title=(SKU:ROB0115)_Explorer_OA1%E6%9C%BA%E6%A2%B0%E8%87%82)
 * @author [Zc](shrimp.liu@dfrobot.com)
 * @version  V1.0
 * @date  2016-03-22
 */

#ifndef DFRobotOA1Control_h
 #define DFRobotOA1Control_h
 #include "Arduino.h"
 #include "DFRobotOA1Calculation.h" 
 #include <Servo.h>
extern double a;
extern int stopFlag;
extern long databuf[13];
/*******************************Port definitions***************************/
#define pump_EN                      6                                    //
#define servo_L                      7                                    //
#define servo_R                      4                                    //
#define servo_ROT                    2                                    //
#define servo_HAND                   11                                   //
#define servo_HAND_ROT               8                                    //
#define valve_EN                     3                                    //
#define touch_SENSOR                 10                                   //
#define pressure_SENSOR              A0                                   //

class DFRobotOA1Control
{
  public:
     DFRobotOA1Control();
     void LeftTurn();                               
     void RightTurn();                              
     void Spread();                                 
     void Shrink();                                 
     void cls();                                    
     void ope();                                   
     void rroll();                                  
     void lroll();                                 
     void up();                                     
     void down();                                  
     void xup();                                
     void xdown();                                  
     void yup();                                    
     void ydown();                               
     void remotexz();
     void remotexy();
     void pumpOn();                                 
     void pumpOff();                                
     void valveOn();                                
     void valveOff();                               
};         

#endif
