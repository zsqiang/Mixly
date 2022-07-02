/*!
 * @file DFRobotOA1Calculation.h
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

#ifndef DFRobotOA1Calculation_h
 #define DFRobotOA1Calculation_h
 #include "Arduino.h"
 #include "DFRobotOA1Judgment.h"
 #include <Servo.h>
extern double Z_Axis;
extern double X_Axis;
extern double Y_Axis;
extern Servo myservoA;
extern Servo myservoB;
extern Servo myservoC;
extern Servo myservoD;
extern Servo myservoF;
extern int flyFlag;
extern int sflag;
extern int stopFlag;
extern int sensorValue;
extern int sensorFlag;
extern int drawflag;
     void sinangle(double x,double y,double z);
     void angles(double x,double y,double z,double x1,double y1,double z1);
     void point(int z,int x,int v);
     void cpoint(int z,int x,int v);
     void LineMove(double x7,double y7,double z7,int v);    

#endif

