/*************************************************
项目名称：
编写人：沈元祥
时间：2017年7月18日
芯片：Mega328p
环境：ArduinoIDE
语言：C++
版本：V1.1
**************************************************/

#include "TimeSched.h"

TimeSched::TimeSched(unsigned long intervl, void (*function)()) {
  active = true;
  previous = 0;
  interval = intervl;
  execute = function;
}

TimeSched::TimeSched(unsigned long prev, unsigned long intervl, void (*function)()) {
  active = true;
  previous = prev;
  interval = intervl;
  execute = function;
}

void TimeSched::reset() {
  previous = micros();
}

void TimeSched::reset(uint32_t x) {
  previous = micros() - x;
}

void TimeSched::disable() {
  active = false;
}

void TimeSched::enable() {
  active = true;
}

void TimeSched::check() {
  if(active && (micros() - previous) >= interval) {
    previous = micros();
    execute();
  }
}

void TimeSched::setInterval(unsigned long intervl) {
  interval = intervl;
}

