#ifndef CONFIG_H_
#define CONFIG_H_

#define MOTORPIN 10
#define SERVOPIN 11

//mm
#define WHEELSIZE 60
#define GYRORATE (4 / 16.4 * PI / 180.0 / 1000000.0)

#define pin_Car_LF_PWM 6
#define pin_Car_LF_DIN 22
#define pin_Car_LB_PWM 5
#define pin_Car_LB_DIN 25
#define pin_Car_RF_PWM 7
#define pin_Car_RF_DIN 23
#define pin_Car_RB_PWM 4
#define pin_Car_RB_DIN 24

#define F_laser_ranging 80
#define FL_laser_ranging 81
#define FR_laser_ranging 82
#define L_laser_ranging 83
#define R_laser_ranging 84
#define B_laser_ranging 85

#define distance_Range 120
//coder count / circle
#define CODERCOUNT 14
#define TOOTHED 300

//us
#define CODERCYCLE 20000

//cm/s
#define SPEED 35

#define MESSAGENUM 8

#define LEFT_FRONT 1
#define LEFT_BACK 0

#define RIGHT_FRONT 0
#define RIGHT_BACK 1

#define MOTOR_SPEED 90

#endif
