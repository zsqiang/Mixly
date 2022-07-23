// Based on the work by DFRobot

#include <Beijia_4Digital.h>
//#include <inttypes.h>

#include "Arduino.h"
//#include "Wire.h"

//                        0   1    2    3    4    5    6    7    8    9
const int Seg[ 10 ] = { 0xfc,0x60,0xda,0xf2,0x66,0xb6,0xbe,0xe0,0xfe,0xf6 };
//unsigned int Disp_Num;
unsigned char Scan_Counter = 0;
unsigned char DATA_Pin;
unsigned char CLOCK_Pin;
unsigned char LATCH_Pin;

/************************************************************************************
函数名：Tube_Scan( void )
功能：  显示2位数,每10ms向其中一位数码管发送一次数据
入口参数：num:显示的数字
返回：无
***********************************************************************************/ 
void Tube_Scan( unsigned int num )
{
  unsigned char num_low_bit = 0;
  unsigned char num_mid1_bit = 0;
  unsigned char num_mid2_bit = 0;
  unsigned char num_high_bit = 0;
  
  if( num < 10 )  //要显示的树是0-9
  {
    digitalWrite( LATCH_Pin,LOW ); //将ST_CP口上面加低电平让芯片准备好接收数据
    shiftOut( DATA_Pin,CLOCK_Pin,LSBFIRST,0xef );
    shiftOut( DATA_Pin,CLOCK_Pin,LSBFIRST,Seg[ num ] );
    digitalWrite( LATCH_Pin,HIGH );
    //Send_Data( dig[ Disp_Num ] );
    delay( 2 ); 
  }
  else if(( num < 100 )&&( num >= 10 )) //要显示的是10-99
  {
    num_low_bit = num % 10;
    num_mid1_bit = num / 10;
    Scan_Counter++;
    if( Scan_Counter == 1 )
    {  //个位数
      //Send_Data( dig[ num_low_bit ] );  //发送段码
      digitalWrite( LATCH_Pin,LOW ); //将ST_CP口上面加低电平让芯片准备好接收数据
      shiftOut( DATA_Pin,CLOCK_Pin,LSBFIRST,0xef );
      shiftOut( DATA_Pin,CLOCK_Pin,LSBFIRST,Seg[ num_low_bit ] );
      digitalWrite( LATCH_Pin,HIGH );
      delay( 1 );
    }
    else if( Scan_Counter == 2 )
    {  //十位数
      //Send_Data( dig[ num_mid1_bit ] );  //发送段码
      digitalWrite( LATCH_Pin,LOW ); //将ST_CP口上面加低电平让芯片准备好接收数据
      shiftOut( DATA_Pin,CLOCK_Pin,LSBFIRST,0xdf );
      shiftOut( DATA_Pin,CLOCK_Pin,LSBFIRST,Seg[ num_mid1_bit ] );
      digitalWrite( LATCH_Pin,HIGH );
      delay( 1 );
      Scan_Counter = 0;
     }
  }
  else if(( num < 1000 )&&( num >= 100 )) //要显示的是100-999
  {
     num_mid2_bit = num / 100;
     num_mid1_bit = ( num % 100 )/10;
     num_low_bit = ( num % 100 )%10;
     Scan_Counter++;
    if( Scan_Counter == 1 )
    {  //个位数
     // Send_Data( dig[ num_low_bit ] );  //发送段码
      digitalWrite( LATCH_Pin,LOW ); //将ST_CP口上面加低电平让芯片准备好接收数据
      shiftOut( DATA_Pin,CLOCK_Pin,LSBFIRST,0xef );
      shiftOut( DATA_Pin,CLOCK_Pin,LSBFIRST,Seg[ num_low_bit ] );
      digitalWrite( LATCH_Pin,HIGH );
      delay( 2 );
    }
    else if( Scan_Counter == 2 )
    {  //十位数
     // Send_Data( dig[ num_mid1_bit ] );  //发送段码
      digitalWrite( LATCH_Pin,LOW ); //将ST_CP口上面加低电平让芯片准备好接收数据
      shiftOut( DATA_Pin,CLOCK_Pin,LSBFIRST,0xdf );
      shiftOut( DATA_Pin,CLOCK_Pin,LSBFIRST,Seg[ num_mid1_bit ] );
      digitalWrite( LATCH_Pin,HIGH );
      delay( 2 );
    }
    else if( Scan_Counter >= 3 )
    {  //百位数
      //Send_Data( dig[ num_mid2_bit ] );  //发送段码
      digitalWrite( LATCH_Pin,LOW ); //将ST_CP口上面加低电平让芯片准备好接收数据
      shiftOut( DATA_Pin,CLOCK_Pin,LSBFIRST,0xbf );
      shiftOut( DATA_Pin,CLOCK_Pin,LSBFIRST,Seg[ num_mid2_bit ] );
      digitalWrite( LATCH_Pin,HIGH );
      delay( 2 );
      Scan_Counter = 0;
    }
  }
  else if(( num < 10000 )&&( num >= 1000 )) //要显示的是1000-9999
  {
     num_high_bit = num / 1000;
     num_mid2_bit = ( num % 1000 )/100;
     num_mid1_bit = (( num % 1000 )%100 )/10;
     num_low_bit = (( num % 1000 )%100 )%10;
     Scan_Counter++;
    if( Scan_Counter == 1 )
    {  //个位数
      //Send_Data( dig[ num_low_bit ] );  //发送段码
      digitalWrite( LATCH_Pin,LOW ); //将ST_CP口上面加低电平让芯片准备好接收数据
      shiftOut( DATA_Pin,CLOCK_Pin,LSBFIRST,0xef );
      shiftOut( DATA_Pin,CLOCK_Pin,LSBFIRST,Seg[ num_low_bit ] );
      digitalWrite( LATCH_Pin,HIGH );
      delay( 2 );
    }
    else if( Scan_Counter == 2 )
    {  //十位数
      //Send_Data( dig[ num_mid1_bit ] );  //发送段码
      digitalWrite( LATCH_Pin,LOW ); //将ST_CP口上面加低电平让芯片准备好接收数据
      shiftOut( DATA_Pin,CLOCK_Pin,LSBFIRST,0xdf );
      shiftOut( DATA_Pin,CLOCK_Pin,LSBFIRST,Seg[ num_mid1_bit ] );
      digitalWrite( LATCH_Pin,HIGH );
      delay( 2 );
    }
    else if( Scan_Counter == 3 )
    {  //百位数
      //Send_Data( dig[ num_mid2_bit ] );  //发送段码
      digitalWrite( LATCH_Pin,LOW ); //将ST_CP口上面加低电平让芯片准备好接收数据
      shiftOut( DATA_Pin,CLOCK_Pin,LSBFIRST,0xbf );
      shiftOut( DATA_Pin,CLOCK_Pin,LSBFIRST,Seg[ num_mid2_bit ] );
      digitalWrite( LATCH_Pin,HIGH );
      delay( 2 );
    }
    else if( Scan_Counter >= 4 )
    {  //千位数
     // Send_Data( dig[ num_high_bit ] );  //发送段码
      digitalWrite( LATCH_Pin,LOW ); //将ST_CP口上面加低电平让芯片准备好接收数据
      shiftOut( DATA_Pin,CLOCK_Pin,LSBFIRST,0x7f );
      shiftOut( DATA_Pin,CLOCK_Pin,LSBFIRST,Seg[ num_high_bit ] );
      digitalWrite( LATCH_Pin,HIGH );
      delay( 2 );
      Scan_Counter = 0;
    }
  }
}