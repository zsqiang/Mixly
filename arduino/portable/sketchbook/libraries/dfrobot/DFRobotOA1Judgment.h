/*!
 * @file DFRobotOA1Judgment.h
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

 #include "Arduino.h"
 #include "DFRobotOA1Control.h"
#include "DFRobotOA1Calculation.h"
#include<math.h>
#ifndef DFRobotOA1Judgment_h
 #define DFRobotOA1Judgment_h
extern double X_Axis;
extern double Y_Axis;
extern double Z_Axis;
extern double svalue;

extern double b;
extern double c;
class DFRobotOA1Judgment
{
  public:
     DFRobotOA1Judgment();
     void judgment();                        //Determine whether there is a block
     void Limitjudgment();
     void LimitjudgmentC();
};
#endif
