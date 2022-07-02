/*************************************************
项目名称：
编写人：沈元祥
时间：2017年7月18日
芯片：Mega328p
环境：ArduinoIDE
语言：C++
版本：V1.1
**************************************************/

#ifndef TIMESCHED_H
#define TIMESCHED_H

#include "Arduino.h"

#define NO_PREDELAY 0

class TimeSched {
  public:
    TimeSched(unsigned long interval, void (*function)());
    TimeSched(unsigned long prev, unsigned long interval, void (*function)());
    void reset();
    void reset(uint32_t x);
    void disable();
    void enable();
    void check();
    void setInterval(unsigned long interval);

  private:
    bool active;
    unsigned long previous;
    unsigned long interval;
    void (*execute)();
};

#endif

