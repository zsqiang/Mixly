/*!
 * @file Pathplan.cpp
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
#include "DFRobotOA1Pathplan.h"

double ppotx,ppoty,xzx,yzy;
DFRobotOA1Pathplan :: DFRobotOA1Pathplan()
{
}
/*!
 *  @brief the circular arc interpolation.
 */
void DFRobotOA1Pathplan ::spacearc(double x0,double y0,double z0,double x1,double y1,double z1,double x2,double y2,double z2)                     
{
  double a00,a01,a02,a10,a11,a12,a20,a21,a22,b0,b1,b2,xc,yc,zc,n1,n2,r,m1,m2,m3,m4,A,D,Dx,Dy,Dz,u,v,w,u1,v1,w1,G,E,H,mi,ni,li,zi,xi,yi;
  int N;
  float S,S1;
    a00=2*(x0-x1);
    a01=2*(y0-y1);
    a02=2*(z0-z1);
    a10=2*(x1-x2);
    a11=2*(y1-y2);
    a12=2*(z1-z2);
    a20=a02*(a02*a11-a01*a12)/8;
    a21=a02*(a00*a12-a02*a10)/8;
    a22=-(a00*(a02*a11-a01*a12)+a01*(a00*a12-a02*a10))/8;
    b0=((pow(x0,2)+pow(y0,2)+pow(z0,2))-(pow(x1,2)+pow(y1,2)+pow(z1,2)));
    b1=((pow(x1,2)+pow(y1,2)+pow(z1,2))-(pow(x2,2)+pow(y2,2)+pow(z2,2)));
    b2=a20*x0+a21*y0+a22*z0;
    if(a12==0&&a02==0)
    {
        D=(a00*a11)-(a01*a10);
        Dx=(b0*a11)-(a01*b1);
        Dy=(a00*b1)-(b0*a10);
        Dz=0;
    }
    else if(a01==0&&a11==0)
    {
      D=(a00*a12)-(a02*a10);
      Dx=(b0*a12)-(a02*b1);
      Dy=0;
      Dz=(a00*b1)-(b0*a10);
    }
    else if(a00==0&&a10==0)
    {
      D=(a01*a12)-(a02*a11);
      Dx=0;
      Dy=(b0*a12)-(a02*b1);
      Dz=(a01*b1)-(b0*a11);
    }
    else
    {
       D=(a00*a11*a22+a01*a12*a20+a02*a10*a21)-(a02*a11*a20+a12*a21*a00+a22*a01*a10);
       Dx=(b0*a11*a22+a01*a12*b2+a02*b1*a21)-(a02*a11*b2+a12*a21*b0+a22*a01*b1);
       Dy=(a00*b1*a22+b0*a12*a20+a02*a10*b2)-(a02*b1*a20+a12*b2*a00+a22*b0*a10);
       Dz=(a00*a11*b2+a01*b1*a20+b0*a10*a21)-(b0*a11*a20+b1*a21*a00+b2*a01*a10);
    }
   xc=Dx/D;
   yc=Dy/D;
   zc=Dz/D;
   r=sqrt(pow((x0-xc),2)+pow((y0-yc),2)+pow((z0-zc),2));
   u=((y1-y0)*(z2-z1))-((z1-z0)*(y2-y1));
   v=((z1-z0)*(x2-x1))-((x1-x0)*(z2-z1));
   w=((x1-x0)*(y2-y1))-((y1-y0)*(x2-x1));
   u1=((y0-yc)*(z2-z0))-((z0-zc)*(y2-y0));
   v1=((z0-zc)*(x2-x0))-((x0-xc)*(z2-z0));
   w1=((x0-xc)*(y2-y0))-((y0-yc)*(x2-x0));
   G=1/sqrt(1+pow((1/r),2));
   S=asin(1/r);
   E=1/(r*sqrt(pow(u,2)+pow(v,2)+pow(w,2)));
   H=u*u1+v*v1+w*w1;
   if(H>0&&H==0)
   {
     S1=2*asin(sqrt(pow((x2-x0),2)+pow((y2-y0),2)+pow((z2-z0),2))/(2*r));
   }
   else
   {
     S1=2*PI-2*asin(sqrt(pow((x2-x0),2)+pow((y2-y0),2)+pow((z2-z0),2))/(2*r));
   }
   N=(S1/S)+1;
   point(y0,x0,z0);
   Z_Axis=z0;
   X_Axis=y0;
   Y_Axis=x0;
   for(int i=1;i<N;i++)
   {
       zi=Z_Axis;
       yi=X_Axis;
       xi=Y_Axis;
       mi=v*(zi-zc)-w*(yi-yc);
       ni=w*(xi-xc)-u*(zi-zc);
       li=u*(yi-yc)-v*(xi-xc);
       Y_Axis=xc+G*(Y_Axis+E*mi-xc);
       X_Axis=yc+G*(X_Axis+E*ni-yc);
       Z_Axis=zc+G*(Z_Axis+E*li-zc);
       point(X_Axis,Y_Axis,Z_Axis);
       if(abs(X_Axis-y2)<1&&abs(Y_Axis-x2)<1)
       {
         break;
       }
}
   point(y2,x2,z2);
    /*Serial.print("S      ");
    Serial.println(S);
    Serial.print("S1      ");
    Serial.println(S1);
    Serial.print("N      ");
    Serial.println(N);*/
}
/*!
 *  @brief Calculated to be hindered and the automatically calculated an ARC path.
 */
void DFRobotOA1Pathplan ::pplan()
{
   double pk,PL,xzx1,yzy1,xzx2,yzy2;
   if((pow((Y-poty[1]),2)+pow((X-potx[1]),2))>(pow((Y-poty[2]),2)+pow((X-potx[2]),2)))
        {
          ppotx=potx[2];
          ppoty=poty[2];
          pk=SKB;
        }
        else
        {
          ppotx=potx[1];
          ppoty=poty[1];
          pk=SKA;
        }
        yzy1=sqrt(pow(PL,2)/(pow(pk,2)+1));
        xzx1=pk*yzy1;
        yzy2=-sqrt(pow(PL,2)/(pow(pk,2)+1));
        xzx2=pk*yzy2;
        if((pow((yzy1-ppoty),2)+pow((xzx1-ppotx),2))>(pow((yzy2-ppoty),2)+pow((xzx2-ppotx),2)))
        {
           yzy=yzy2;
           xzx=xzx2;
        }
        else
        {
           yzy=yzy1;
           xzx=xzx1;
        }
}
/*!
 *  @brief Calculated to be hindered and the automatically calculated an alternative line path.
 */
 void DFRobotOA1Pathplan ::pplanL()
{
   double KZ,ppotx1,ppoty1,ppotx2,ppoty2,ppotx3,ppoty3,K3,K4;
  //     X Y Z
   point(X_Axis,Y_Axis,Z_Axis);
   K3=(2*Y*X+sqrt(pow(2*Y*X,2)-4*(Y*Y-l*l)*(X*X-l*l)))/(2*(Y*Y-l*l));
   K4=(2*Y*X-sqrt(pow(2*Y*X,2)-4*(Y*Y-l*l)*(X*X-l*l)))/(2*(Y*Y-l*l));
   if(K3>=0)
   {
     K3=K3;
     K4=K4;
   }
   else
   {
     KZ=K4;
     K4=K3;
     K3=KZ;
   }
   if(KA>=0)
   {
     KA=KA;
     KB=KB;
   }
   else
   {
     KZ=KB;
     KB=KA;
     KA=KZ;
   }
   ppoty=(KA*Y_Axis-X_Axis-K4*Y+X)/(KA-K4);
   ppotx=K4*(ppoty-Y)+X;
   ppoty1=(KB*Y_Axis-X_Axis-K3*Y+X)/(KB-K3);
   ppotx1=K3*(ppoty1-Y)+X;
   ppoty2=(KA*Y_Axis-X_Axis-K3*Y+X)/(KA-K3);
   ppotx2=K3*(ppoty2-Y)+X;
   ppoty3=(KB*Y_Axis-X_Axis-K4*Y+X)/(KB-K4);
   ppotx3=K4*(ppoty3-Y)+X;
   if(ppotx>0)
   {
       if(pow(ppoty,2)<pow(Y,2)&&pow(ppoty,2)<pow(Y_Axis,2))
     {
        ppotx=ppotx;
        ppoty=ppoty;
     }
   }
    if(ppotx1>0)
   {
        if(pow(ppoty1,2)<pow(Y,2)&&pow(ppoty1,2)<pow(Y_Axis,2))
     {
       ppotx=ppotx1;
       ppoty=ppoty1;
     }
   }
    if(ppotx2>0)
   {
           if(pow(ppoty2,2)<pow(Y,2)&&pow(ppoty2,2)<pow(Y_Axis,2))
     {
       ppotx=ppotx2;
       ppoty=ppoty2;
     }
   }
    if(ppotx3>0)
   {
         if(pow(ppoty3,2)<pow(Y,2)&&pow(ppoty3,2)<pow(Y_Axis,2))
     {
       ppotx=ppotx3;
       ppoty=ppoty3;
     }
   }
   if(ppoty==0)
   {
     yzy=ppoty;
     xzx=ppotx+40;
   }
   else
   {
     yzy=sqrt((pow((sqrt(pow(ppotx,2)+pow(ppoty,2))+40),2))/(pow((ppotx/ppoty),2)+1));
     if(ppotx/ppoty<0)
     {
       yzy=-yzy;
     }
     xzx=(ppotx/ppoty)*yzy;
   }
}

