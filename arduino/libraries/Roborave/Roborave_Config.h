#ifndef ROBORAVE_CONFIG_H_
#define ROBORAVE_CONFIG_H_

#define wheel_size 44
#define coder 7
#define reduction 10
#define wheel_dis 78
#define speed_level 3
#define GYRORATE (4 / 16.4 * PI / 180.0 / 1000000.0)

#if speed_level == 1
  uint8_t speed_pwm = 150;
#elif speed_level == 2
  uint8_t speed_pwm = 200;
#elif speed_level == 3
  uint8_t speed_pwm = 255; 
#endif

#endif