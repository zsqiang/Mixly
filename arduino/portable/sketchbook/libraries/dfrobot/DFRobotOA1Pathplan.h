/*!
 * @file DFRobotOA1Pathplan.h
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

#ifndef DFRobotOA1Pathplan_h
 #define DFRobotOA1Pathplan_h
 #include "Arduino.h"
 #include "DFRobotOA1Judgment.h"
 #include "DFRobotOA1Control.h"
 #include "DFRobotOA1Calculation.h"
extern double X_Axis;
extern double Y_Axis;
extern double Z_Axis;
extern double X;
extern double Y;
extern double Z;
extern double KA;
extern double KB;
extern double SKB;
extern double SKA;
extern int l;
extern void point(int z,int x,int v);
extern double potx[6];
extern double poty[6];
extern double  cb[5];
extern int dg;
extern double xzx;
extern double yzy;
class DFRobotOA1Pathplan
{
  public:
     DFRobotOA1Pathplan();
     void spacearc(double x0,double y0,double z0,double x1,double y1,double z1,double x2,double y2,double z2);                   //the circular arc interpolation
     void pplanL();
     void pplan();
     
};
#endif
