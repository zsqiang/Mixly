'use strict';

goog.provide('Blockly.Arduino.Taimaker');

goog.require('Blockly.Arduino');

Blockly.Blocks.Taimaker.TaiMaro_Define_PWM_Move_Code ='int car_PWM_LF = 0 ; int car_PWM_LB = 0 ; int car_PWM_RF = 0 ; int car_PWM_RB = 0 ;\n'
												+'long Count_LF = 0 ; long Count_LB = 0 ; long Count_RF = 0 ; long Count_RB = 0 ;\n'
												+'long Pluse_LF = 0 ;long Pluse_LB = 0 ;long Pluse_RF = 0 ;long Pluse_RB = 0 ;\n'
												+'void Code_LF(){if(car_PWM_LF >= 0){Count_LF++ ;}else{Count_LF-- ;}}\n'
												+'void Code_LB(){if(car_PWM_LB >= 0){Count_LB++ ;}else{Count_LB-- ;}}\n'
												+'void Code_RF(){if(car_PWM_RF >= 0){Count_RF++ ;}else{Count_RF-- ;}}\n'
												+'void Code_RB(){if(car_PWM_RB >= 0){Count_RB++ ;}else{Count_RB-- ;}}\n'
												+'void PWM_Output(int pwm_LF , int pwm_LB , int pwm_RF , int pwm_RB ){\n'
												+'	car_PWM_LF = pwm_LF ; car_PWM_LB = pwm_LB ; car_PWM_RF = pwm_RF ; car_PWM_RB = pwm_RB ; \n'
												+'  if(pwm_LF >= 0){\n'
												+'	digitalWrite(pin_Car_LF_DIN , 1) ;\n'
												+'	analogWrite(pin_Car_LF_PWM , pwm_LF) ;\n'
												+'  }\n'
												+'  else{\n'
												+'	digitalWrite(pin_Car_LF_DIN , 0) ;\n'
												+'	analogWrite(pin_Car_LF_PWM , -pwm_LF) ;\n'
												+'  }\n'
												+'  if(pwm_LB >= 0){\n'
												+'	digitalWrite(pin_Car_LB_DIN , 1) ;\n'
												+'	analogWrite(pin_Car_LB_PWM , pwm_LB) ;\n'
												+'  }\n'
												+'  else{\n'
												+'	digitalWrite(pin_Car_LB_DIN , 0) ;\n'
												+'	analogWrite(pin_Car_LB_PWM , -pwm_LB) ;\n'
												+'  }\n'
												+'  if(pwm_RF >= 0){\n'
												+'	digitalWrite(pin_Car_RF_DIN , 0) ;\n'
												+'	analogWrite(pin_Car_RF_PWM , pwm_RF) ;\n'
												+'  }\n'
												+'  else{\n'
												+'	digitalWrite(pin_Car_RF_DIN , 1) ;\n'
												+'	analogWrite(pin_Car_RF_PWM , -pwm_RF) ;\n'
												+'  }\n'
												+'  if(pwm_RB >= 0){\n'
												+'	digitalWrite(pin_Car_RB_DIN , 0) ;\n'
												+'	analogWrite(pin_Car_RB_PWM , pwm_RB) ;\n'
												+'  }\n'
												+'  else{\n'
												+'	digitalWrite(pin_Car_RB_DIN , 1) ;\n'
												+'	analogWrite(pin_Car_RB_PWM , -pwm_RB) ;\n'
												+'  }\n'
												+'}\n';

Blockly.Blocks.Taimaker.TaiMaro_Wait_PI_UP_Setup_Code = 'while(!Serial3.available()){\n'
														+'	Serial3.print("angle?");\n'
														+'	int i = 0 ;\n'
														+'	for(i = 0 ; i <=2 ; i++){\n'
														+'		L_Strip.setPixelColor(i, 255,0,255);\n'
														+'		L_Strip.show() ;\n'
														+'		R_Strip.setPixelColor(i, 255,0,255);\n'
														+'		R_Strip.show() ;\n'
														+'	}\n'
														+'	delay(500) ;\n'
														+'	for(i = 0 ; i <=2 ; i++){\n'
														+'		L_Strip.setPixelColor(i, 0,0,0);\n'
														+'		L_Strip.show() ;\n'
														+'		R_Strip.setPixelColor(i, 0,0,0);\n'
														+'		R_Strip.show() ;\n'
														+'	}\n'
														+'	delay(500) ;\n'
														+'}\n'
														+'int i = 0 ;\n'
														+'for(i = 0 ; i <=2 ; i++){\n'
														+'	L_Strip.setPixelColor(i, 255,0,255);\n'
														+'	L_Strip.show() ;\n'
														+'	R_Strip.setPixelColor(i, 255,0,255);\n'
														+'	R_Strip.show() ;\n'
														+'}\n'
														+'delay(3000) ;\n'
														+'for(i = 0 ; i <=2 ; i++){\n'
														+'	L_Strip.setPixelColor(i, 0,0,0);\n'
														+'	L_Strip.show() ;\n'
														+'	R_Strip.setPixelColor(i, 0,0,0);\n'
														+'	R_Strip.show() ;\n'
														+'}\n'
														+'while(Serial3.available()){\n'
														+'	char clear_Serial3 = Serial3.read() ;\n'
														+'}\n'
														+'delay(500) ;\n' ;

Blockly.Blocks.Taimaker.TaiMaro_Define_Machinery_Setup_Code =  'pinMode(pin_Car_LF_PWM ,OUTPUT) ;\n'
													+'  pinMode(pin_Car_LF_DIN ,OUTPUT) ;\n'
													+'  pinMode(pin_Car_LB_PWM ,OUTPUT) ;\n'
													+'  pinMode(pin_Car_LB_DIN ,OUTPUT) ;\n'
													+'  pinMode(pin_Car_RF_PWM ,OUTPUT) ;\n'
													+'  pinMode(pin_Car_RF_DIN ,OUTPUT) ;\n'
													+'  pinMode(pin_Car_RB_PWM ,OUTPUT) ;\n'
													+'  pinMode(pin_Car_RB_DIN ,OUTPUT) ;\n';
													
Blockly.Blocks.Taimaker.TaiMaro_Define_Interrupt_Setup_Code ='  attachInterrupt(5 , Code_LF , CHANGE) ;\n'  
													+'  attachInterrupt(1 , Code_LB , CHANGE) ;\n'
													+'  attachInterrupt(4 , Code_RF , CHANGE) ;\n'
													+'  attachInterrupt(0 , Code_RB , CHANGE) ;\n' 
													+ '  pinMode(2, INPUT_PULLUP); \n'
													+ '  pinMode(3, INPUT_PULLUP); \n'
													+ '  pinMode(18, INPUT_PULLUP); \n'
													+ '  pinMode(19, INPUT_PULLUP); \n';

Blockly.Arduino.TaiMaro_Set_PWM = function() {
	Blockly.Arduino.definitions_['TaiMaro_Define_Config'] = '#include "config.h"';
	Blockly.Arduino.definitions_['TaiMaro_Define_PWM_Move_Code'] = Blockly.Blocks.Taimaker.TaiMaro_Define_PWM_Move_Code ;
	Blockly.Arduino.definitions_['TaiMaro_Define_PWM_function'] = 'void Set_PWM(int pwm_Num , int pwm){\n'
														+'	if(pwm >= 255) pwm = 255 ;\n'
														+'	if(pwm <= -255) pwm = -255 ;\n'
														+'	switch(pwm_Num){\n'
														+'		case 1 : if(pwm >= 0){\n'
														+'					digitalWrite(pin_Car_LF_DIN , 1) ;\n'
														+'					analogWrite(pin_Car_LF_PWM , pwm) ;\n'
														+'				}\n'
														+'				else{\n'
														+'					digitalWrite(pin_Car_LF_DIN , 0) ;\n'
														+'					analogWrite(pin_Car_LF_PWM , -pwm) ;\n'
														+'				} ; car_PWM_LF = pwm ;break ;\n'
														+'		case 2 : if(pwm >= 0){\n'
														+'					digitalWrite(pin_Car_LB_DIN , 1) ;\n'
														+'					analogWrite(pin_Car_LB_PWM , pwm) ;\n'
														+'				}\n'
														+'				else{\n'
														+'					digitalWrite(pin_Car_LB_DIN , 0) ;\n'
														+'					analogWrite(pin_Car_LB_PWM , -pwm) ;\n'
														+'				} ; car_PWM_LB = pwm ;break ;\n'
														+'		case 3 : if(pwm >= 0){\n'
														+'					digitalWrite(pin_Car_RF_DIN , 0) ;\n'
														+'					analogWrite(pin_Car_RF_PWM , pwm) ;\n'
														+'				}\n'
														+'				else{\n'
														+'					digitalWrite(pin_Car_RF_DIN , 1) ;\n'
														+'					analogWrite(pin_Car_RF_PWM , -pwm) ;\n'
														+'				} ; car_PWM_RF = pwm ;break ;\n'
														+'		case 4 : if(pwm >= 0){\n'
														+'					digitalWrite(pin_Car_RB_DIN , 0) ;\n'
														+'					analogWrite(pin_Car_RB_PWM , pwm) ;\n'
														+'				}\n'
														+'				else{\n'
														+'					digitalWrite(pin_Car_RB_DIN , 1) ;\n'
														+'					analogWrite(pin_Car_RB_PWM , -pwm) ;\n'
														+'				} ; car_PWM_RB = pwm ;break ;\n'
														+'	}\n'
														+'}\n'
	Blockly.Arduino.setups_['TaiMaro_Define_Machinery_Setup_Code'] = Blockly.Blocks.Taimaker.TaiMaro_Define_Machinery_Setup_Code ;
	var PIN = this.getFieldValue('PIN') ;
	var pwm=Blockly.Arduino.valueToCode(this, 'speed', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var code = 'Set_PWM('+PIN+','+pwm+');\n' ;
	return code ;
}


Blockly.Arduino.TaiMaro_Control_Speed_Line = function() {
	Blockly.Arduino.definitions_['TaiMaro_Define_Config'] = '#include "config.h"';
	Blockly.Arduino.definitions_['TaiMaro_Define_Turn_Light'] = '#include <Adafruit_NeoPixel.h>\n'
														+'Adafruit_NeoPixel L_Strip = Adafruit_NeoPixel(3, 10, NEO_GRB + NEO_KHZ800);\n'
														+'Adafruit_NeoPixel R_Strip = Adafruit_NeoPixel(3, 9, NEO_GRB + NEO_KHZ800);\n'
	Blockly.Arduino.definitions_['TaiMaro_Define_Arduino'] = '#include "Arduino.h"' ;
	Blockly.Arduino.definitions_['TaiMaro_Define_PWM_Move_Code'] = Blockly.Blocks.Taimaker.TaiMaro_Define_PWM_Move_Code ;
	Blockly.Arduino.definitions_['TaiMaro_Define_PI_Angle'] = 'int Get_PI_Angle(){\n'
												+'	while(Serial3.available()){Serial3.read();}\n'
												+'	Serial3.print("angle?") ;\n'
												+'	uint32_t t=millis() ;\n'
												+'	while(!Serial3.available()){\n'
												+'		if(millis()-t>1000)	break;\n'
												+'	}\n'
												+'	String get_PI_Angle = "" ; \n'
												+'	while(Serial3.available()){\n'
												+'		get_PI_Angle += (char)Serial3.read() ;\n'
												+'		delayMicroseconds(100) ;\n'
												+'	}\n'
												+'	return get_PI_Angle.toInt() ;\n'
												+'	}\n';
	Blockly.Arduino.definitions_['TaiMaro_Define_Line_Forward_Value_Code'] = 'float kp = 0.8, kd = 0.2;\n'
																			+'boolean motor_lf_state, motor_lb_state, motor_rf_state, motor_rb_state;\n'
																			+'int lf_error, lb_error, rf_error, rb_error;\n'
																			+'float lf_error_i, lb_error_i, rf_error_i, rb_error_i;\n'
																			+'int glovar_speed = 0;\n';
	Blockly.Arduino.definitions_['TaiMaro_Define_Line_Forward_Function'] = 	'void line_forward(int dis, int speed, boolean state) {\n'
																	+'  int angle = Get_PI_Angle() * map(dis, 0, 15, 1, 1.5);\n'
																	+'  speed = constrain(speed, 0, 15);\n'
																	+'  digitalWrite(pin_Car_RB_DIN, RIGHT_FRONT);\n'
																	+'  digitalWrite(pin_Car_RF_DIN, RIGHT_FRONT);\n'
																	+'  digitalWrite(pin_Car_LB_DIN, LEFT_FRONT);\n'
																	+'  digitalWrite(pin_Car_LF_DIN, LEFT_FRONT);\n'
																	+'  motor_lf_state = true;\n'
																	+'  motor_rf_state = true;\n'
																	+'  motor_lb_state = true;\n'
																	+'  motor_rb_state = true;\n'
																	+'  uint32_t pre_Count_LF = Count_LF;\n'
																	+'  uint32_t pre_Count_LB = Count_LB;\n'
																	+'  uint32_t pre_Count_RF = Count_RF;\n'
																	+'  uint32_t pre_Count_RB = Count_RB;\n'
																	+'  uint32_t dis_coder_count = dis * 10 / 60.0 / PI * 14 * 298;\n'
																	+'  float l_coder_count = (speed + speed * (angle / 40.0)) * 10 / 60.0 / PI * 14 * 298 / 20;\n'
																	+'  float r_coder_count = (speed - speed * (angle / 40.0)) * 10 / 60.0 / PI * 14 * 298 / 20;\n'
																	+'  Serial.print(l_coder_count);\n'
																	+'  Serial.print(r_coder_count);\n'
																	+'  uint32_t current_coder_count = (Count_LF + Count_LB + Count_RF + Count_RB) / 4;\n'
																	+'  dis_coder_count = dis_coder_count + current_coder_count;\n'
																	+'  if(glovar_speed != speed) {\n'
																	+'	glovar_speed = speed;\n'
																	+'	lf_error_i = 0;\n'
																	+'	lb_error_i = 0;\n'
																	+'	rf_error_i = 0;\n'
																	+'	rb_error_i = 0;\n'
																	+'  }\n'
																	+'  int init_pwm = map(speed * 10, 0, MOTOR_SPEED * PI, 0, 255);\n'
																	+'  uint32_t t1 = millis();\n'
																	+'  Serial.println();\n'
																	+'  while(current_coder_count <= dis_coder_count) {\n'
																	+'	if(millis() - t1 >= 50) {\n'
																	+'	  lf_error = l_coder_count - (Count_LF - pre_Count_LF);\n'
																	+'	  lb_error = l_coder_count - (Count_LB - pre_Count_LB);\n'
																	+'	  rf_error = r_coder_count - (Count_RF - pre_Count_RF);\n'
																	+'	  rb_error = r_coder_count - (Count_RB - pre_Count_RB);\n'
																	+'	  pre_Count_LF = Count_LF;\n'
																	+'	  pre_Count_LB = Count_LB;\n'
																	+'	  pre_Count_RF = Count_RF;\n'
																	+'	  pre_Count_RB = Count_RB;\n'
																	+'	  t1 = millis();\n'
																	+'	  lf_error_i += lf_error;\n'
																	+'	  lb_error_i += lb_error;\n'
																	+'	  rf_error_i += rf_error;\n'
																	+'	  rb_error_i += rb_error;\n'
																	+'	  lf_error_i = constrain(lf_error_i, -10000, 10000);\n'
																	+'	  lb_error_i = constrain(lb_error_i, -10000, 10000);\n'
																	+'	  rf_error_i = constrain(rf_error_i, -10000, 10000);\n'
																	+'	  rb_error_i = constrain(rb_error_i, -10000, 10000);\n'
																	+'	  car_PWM_LF = constrain(init_pwm + kp * lf_error + kd * lf_error_i, 0, 255);\n'
																	+'	  car_PWM_LB = constrain(init_pwm + kp * lb_error + kd * lb_error_i, 0, 255);\n'
																	+'	  car_PWM_RF = constrain(init_pwm + kp * rf_error + kd * rf_error_i, 0, 255);\n'
																	+'	  car_PWM_RB = constrain(init_pwm + kp * rb_error + kd * rb_error_i, 0, 255);\n'
																	+'	  analogWrite(pin_Car_LF_PWM, car_PWM_LF);\n'
																	+'	  analogWrite(pin_Car_LB_PWM, car_PWM_LB);\n'
																	+'	  analogWrite(pin_Car_RF_PWM, car_PWM_RF);\n'
																	+'	  analogWrite(pin_Car_RB_PWM, car_PWM_RB);\n'
																	+'	}\n'
																	+'	current_coder_count = (Count_LF + Count_LB + Count_RF + Count_RB) / 4;\n'
																	+'  }\n'
																	+'  if(state) {\n'
																	+'	digitalWrite(pin_Car_RB_DIN, RIGHT_BACK);\n'
																	+'	digitalWrite(pin_Car_RF_DIN, RIGHT_BACK);\n'
																	+'	digitalWrite(pin_Car_LB_DIN, LEFT_BACK);\n'
																	+'	digitalWrite(pin_Car_LF_DIN, LEFT_BACK);\n'
																	+'	analogWrite(pin_Car_LF_PWM, init_pwm);\n'
																	+'	analogWrite(pin_Car_LB_PWM, init_pwm);\n'
																	+'	analogWrite(pin_Car_RF_PWM, init_pwm);\n'
																	+'	analogWrite(pin_Car_RB_PWM, init_pwm);\n'
																	+'	delay(20);\n'
																	+'	analogWrite(pin_Car_LF_PWM, 0);\n'
																	+'	analogWrite(pin_Car_LB_PWM, 0);\n'
																	+'	analogWrite(pin_Car_RF_PWM, 0);\n'
																	+'	analogWrite(pin_Car_RB_PWM, 0);\n'
																	+' }\n'
																	+'}\n'
	Blockly.Arduino.setups_['TaiMaro_Define_Machinery_Setup_Code'] = Blockly.Blocks.Taimaker.TaiMaro_Define_Machinery_Setup_Code ;
	Blockly.Arduino.setups_['TaiMaro_Define_PI_Setup_Code'] = 'Serial3.begin(115200);';
	Blockly.Arduino.setups_['TaiMaro_Define_Turn_Light_Setup_Code'] = '  L_Strip.begin();\n'
																+'  L_Strip.show();\n'
																+'  R_Strip.begin();\n'
																+'  R_Strip.show();\n';
	Blockly.Arduino.setups_['TaiMaro_Define_Wait_PI_UP_Setup_Code'] = Blockly.Blocks.Taimaker.TaiMaro_Wait_PI_UP_Setup_Code ;
	Blockly.Arduino.setups_['TaiMaro_Define_Interrupt_Setup_Code'] =Blockly.Blocks.Taimaker.TaiMaro_Define_Interrupt_Setup_Code ;
	var dis = Blockly.Arduino.valueToCode(this, 'dis', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var speed = Blockly.Arduino.valueToCode(this, 'speed', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var code = 'line_forward('+dis+','+speed+',false);\n' ;
	return code ;
}



Blockly.Arduino.TaiMaro_Move_Forward = function() {
	Blockly.Arduino.definitions_['TaiMaro_Define_Config'] = '#include "config.h"';
	Blockly.Arduino.definitions_['TaiMaro_Define_PWM_Move_Code'] = Blockly.Blocks.Taimaker.TaiMaro_Define_PWM_Move_Code ;
	Blockly.Arduino.definitions_['TaiMaro_Define_PWM_Forward'] ='void Go_Forward(double distance , int speed_PWM){\n'
														+'	if(speed_PWM < 0) speed_PWM = -speed_PWM ;\n'
														+'  Pluse_LF = Count_LF ;\n'
														+'  Pluse_LB = Count_LB ;\n'
														+'  Pluse_RF = Count_RF ;\n'
														+'  Pluse_RB = Count_RB ;\n'
														+'  long current_Pluse_LF = 0 ;\n'
														+'  long current_Pluse_LB = 0 ;\n'
														+'  long current_Pluse_RF = 0 ;\n'
														+'  long current_Pluse_RB = 0 ;\n'
														+'  int pwm_LF = 0 ; int pwm_LB = 0 ; int pwm_RF = 0 ; int pwm_RB = 0 ;\n'
														+'  double count = distance * ((TOOTHED * CODERCOUNT) / (WHEELSIZE * PI)) ;\n'
														+'  Serial.println(count) ;\n'
														+'  while((current_Pluse_LF+current_Pluse_LB+current_Pluse_RF+current_Pluse_RB)/4 <= count){\n'
														+'	current_Pluse_LF = Count_LF - Pluse_LF ;\n'
														+'	current_Pluse_LB = Count_LB - Pluse_LB ;\n'
														+'	current_Pluse_RF = Count_RF - Pluse_RF ;\n'
														+'	current_Pluse_RB = Count_RB - Pluse_RB ;\n'
														+'	pwm_LF = constrain(speed_PWM - (current_Pluse_LF - current_Pluse_RF) - (current_Pluse_LF - current_Pluse_LB), 0, 255) ;\n'
														+'	pwm_LB = constrain(speed_PWM - (current_Pluse_LB - current_Pluse_RB) - (current_Pluse_LB - current_Pluse_LF), 0, 255) ;\n'
														+'	pwm_RF = constrain(speed_PWM - (current_Pluse_RF - current_Pluse_LF) - (current_Pluse_RF - current_Pluse_RB), 0, 255) ;\n'
														+'	pwm_RB = constrain(speed_PWM - (current_Pluse_RB - current_Pluse_LB) - (current_Pluse_RB - current_Pluse_RF), 0, 255) ;\n'
														+'	PWM_Output(pwm_LF , pwm_LB , pwm_RF , pwm_RB) ;\n'
														+'  }\n'
														+'  if(distance > 10){\n'
														+'	PWM_Output(-255 , -255 , -255 , -255) ;\n'
														+'	delay(10) ;\n'
														+'  }\n'
														+'  PWM_Output(0 , 0 , 0 , 0) ;\n'
														+'}\n'
	Blockly.Arduino.setups_['TaiMaro_Define_Machinery_Setup_Code'] = Blockly.Blocks.Taimaker.TaiMaro_Define_Machinery_Setup_Code ;
	Blockly.Arduino.setups_['TaiMaro_Define_Interrupt_Setup_Code'] =Blockly.Blocks.Taimaker.TaiMaro_Define_Interrupt_Setup_Code ;
	var distance = Blockly.Arduino.valueToCode(this, 'forward_Distance', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var speed = Blockly.Arduino.valueToCode(this, 'forward_Speed', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var code = 'Go_Forward('+distance+','+speed+');\n' ;
	return code ;
}

Blockly.Arduino.TaiMaro_Move_Level_Left = function() {
	Blockly.Arduino.definitions_['TaiMaro_Define_Config'] = '#include "config.h"';
	Blockly.Arduino.definitions_['TaiMaro_Define_PWM_Move_Code'] = Blockly.Blocks.Taimaker.TaiMaro_Define_PWM_Move_Code ;
	Blockly.Arduino.definitions_['TaiMaro_Define_PWM_Level_Left'] ='void Go_Level_Left(double distance , int speed_PWM){\n'
														+'	if(speed_PWM < 0) speed_PWM = -speed_PWM ;\n'
														+'  Pluse_LF = Count_LF ;\n'
														+'  Pluse_LB = Count_LB ;\n'
														+'  Pluse_RF = Count_RF ;\n'
														+'  Pluse_RB = Count_RB ;\n'
														+'  long current_Pluse_LF = 0 ;\n'
														+'  long current_Pluse_LB = 0 ;\n'
														+'  long current_Pluse_RF = 0 ;\n'
														+'  long current_Pluse_RB = 0 ;\n'
														+'  int pwm_LF = 0 ; int pwm_LB = 0 ; int pwm_RF = 0 ; int pwm_RB = 0 ;\n'
														+'  double count = distance * ((TOOTHED * CODERCOUNT) / (WHEELSIZE * PI)) ;\n'
														+'  Serial.println(count) ;\n'
														+'  while((-current_Pluse_LF + current_Pluse_LB + current_Pluse_RF - current_Pluse_RB)/4 <= count){\n'
														+'	current_Pluse_LF = Count_LF - Pluse_LF ;\n'
														+'	current_Pluse_LB = Count_LB - Pluse_LB ;\n'
														+'	current_Pluse_RF = Count_RF - Pluse_RF ;\n'
														+'	current_Pluse_RB = Count_RB - Pluse_RB ;\n'
														+'	pwm_LF = constrain(speed_PWM - (-current_Pluse_LF - current_Pluse_RF) - (-current_Pluse_LF - current_Pluse_LB), 0, 255) ;\n'
														+'	pwm_LB = constrain(speed_PWM - (current_Pluse_LB + current_Pluse_RB) - (current_Pluse_LB + current_Pluse_LF), 0, 255) ;\n'
														+'	pwm_RF = constrain(speed_PWM - (current_Pluse_RF + current_Pluse_LF) - (current_Pluse_RF + current_Pluse_RB), 0, 255) ;\n'
														+'	pwm_RB = constrain(speed_PWM - (-current_Pluse_RB - current_Pluse_LB) - (-current_Pluse_RB - current_Pluse_RF), 0, 255) ;\n'
														+'	PWM_Output(-pwm_LF , pwm_LB , pwm_RF , -pwm_RB) ;\n'
														+'  }\n'
														+'  if(distance > 10){\n'
														+'	PWM_Output(255 , -255 , -255 , 255) ;\n'
														+'	delay(10) ;\n'
														+'  }\n'
														+'  PWM_Output(0 , 0 , 0 , 0) ;\n'
														+'}\n'
	Blockly.Arduino.setups_['TaiMaro_Define_Machinery_Setup_Code'] = Blockly.Blocks.Taimaker.TaiMaro_Define_Machinery_Setup_Code ;
	Blockly.Arduino.setups_['TaiMaro_Define_Interrupt_Setup_Code'] =Blockly.Blocks.Taimaker.TaiMaro_Define_Interrupt_Setup_Code ;
	var distance = Blockly.Arduino.valueToCode(this, 'left_Distance', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var speed = Blockly.Arduino.valueToCode(this, 'left_Speed', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var code = 'Go_Level_Left('+distance+','+speed+');\n' ;
	return code ;
}

Blockly.Arduino.TaiMaro_Move_Level_Right = function() {
	Blockly.Arduino.definitions_['TaiMaro_Define_Config'] = '#include "config.h"';
	Blockly.Arduino.definitions_['TaiMaro_Define_PWM_Move_Code'] = Blockly.Blocks.Taimaker.TaiMaro_Define_PWM_Move_Code ;
	Blockly.Arduino.definitions_['TaiMaro_Define_PWM_Level_Right'] ='void Go_Level_Right(double distance , int speed_PWM){\n'
														+'	if(speed_PWM < 0) speed_PWM = -speed_PWM ;\n'
														+'  Pluse_LF = Count_LF ;\n'
														+'  Pluse_LB = Count_LB ;\n'
														+'  Pluse_RF = Count_RF ;\n'
														+'  Pluse_RB = Count_RB ;\n'
														+'  long current_Pluse_LF = 0 ;\n'
														+'  long current_Pluse_LB = 0 ;\n'
														+'  long current_Pluse_RF = 0 ;\n'
														+'  long current_Pluse_RB = 0 ;\n'
														+'  int pwm_LF = 0 ; int pwm_LB = 0 ; int pwm_RF = 0 ; int pwm_RB = 0 ;\n'
														+'  double count = distance * ((TOOTHED * CODERCOUNT) / (WHEELSIZE * PI)) ;\n'
														+'  Serial.println(count) ;\n'
														+'  while((current_Pluse_LF-current_Pluse_LB-current_Pluse_RF+current_Pluse_RB)/4 <= count){\n'
														+'	current_Pluse_LF = Count_LF - Pluse_LF ;\n'
														+'	current_Pluse_LB = Count_LB - Pluse_LB ;\n'
														+'	current_Pluse_RF = Count_RF - Pluse_RF ;\n'
														+'	current_Pluse_RB = Count_RB - Pluse_RB ;\n'
														+'	pwm_LF = constrain(speed_PWM - (current_Pluse_LF + current_Pluse_RF) - (current_Pluse_LF + current_Pluse_LB), 0, 255) ;\n'
														+'	pwm_LB = constrain(speed_PWM - (-current_Pluse_LB - current_Pluse_RB) - (-current_Pluse_LB - current_Pluse_LF), 0, 255) ;\n'
														+'	pwm_RF = constrain(speed_PWM - (-current_Pluse_RF - current_Pluse_LF) - (-current_Pluse_RF - current_Pluse_RB), 0, 255) ;\n'
														+'	pwm_RB = constrain(speed_PWM - (current_Pluse_RB + current_Pluse_LB) - (current_Pluse_RB + current_Pluse_RF), 0, 255) ;\n'
														+'	PWM_Output(pwm_LF , -pwm_LB , -pwm_RF , pwm_RB) ;\n'
														+'  }\n'
														+'  if(distance > 10){\n'
														+'	PWM_Output(-255 , 255 , 255 , -255) ;\n'
														+'	delay(10) ;\n'
														+'  }\n'
														+'  PWM_Output(0 , 0 , 0 , 0) ;\n'
														+'}\n'
	Blockly.Arduino.setups_['TaiMaro_Define_Machinery_Setup_Code'] = Blockly.Blocks.Taimaker.TaiMaro_Define_Machinery_Setup_Code ;
	Blockly.Arduino.setups_['TaiMaro_Define_Interrupt_Setup_Code'] =Blockly.Blocks.Taimaker.TaiMaro_Define_Interrupt_Setup_Code ;
	var distance = Blockly.Arduino.valueToCode(this, 'right_Distance', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var speed = Blockly.Arduino.valueToCode(this, 'right_Speed', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var code = 'Go_Level_Right('+distance+','+speed+');\n' ;
	return code ;
}

Blockly.Arduino.TaiMaro_Move_Back = function() {
	Blockly.Arduino.definitions_['TaiMaro_Define_Config'] = '#include "config.h"';
	Blockly.Arduino.definitions_['TaiMaro_Define_PWM_Move_Code'] = Blockly.Blocks.Taimaker.TaiMaro_Define_PWM_Move_Code ;
	Blockly.Arduino.definitions_['TaiMaro_Define_PWM_Back'] ='void Go_Back(double distance , int speed_PWM){\n'
														+'	if(speed_PWM < 0) speed_PWM = -speed_PWM ;\n'
														+'  Pluse_LF = Count_LF ;\n'
														+'  Pluse_LB = Count_LB ;\n'
														+'  Pluse_RF = Count_RF ;\n'
														+'  Pluse_RB = Count_RB ;\n'
														+'  long current_Pluse_LF = 0 ;\n'
														+'  long current_Pluse_LB = 0 ;\n'
														+'  long current_Pluse_RF = 0 ;\n'
														+'  long current_Pluse_RB = 0 ;\n'
														+'  int pwm_LF = 0 ; int pwm_LB = 0 ; int pwm_RF = 0 ; int pwm_RB = 0 ;\n'
														+'  double count = distance * ((TOOTHED * CODERCOUNT) / (WHEELSIZE * PI)) ;\n'
														+'  Serial.println(count) ;\n'
														+'  while(-(current_Pluse_LF+current_Pluse_LB+current_Pluse_RF+current_Pluse_RB)/4 <= count){\n'
														+'	current_Pluse_LF = Count_LF - Pluse_LF ;\n'
														+'	current_Pluse_LB = Count_LB - Pluse_LB ;\n'
														+'	current_Pluse_RF = Count_RF - Pluse_RF ;\n'
														+'	current_Pluse_RB = Count_RB - Pluse_RB ;\n'
														+'	pwm_LF = constrain(speed_PWM + (current_Pluse_LF - current_Pluse_RF) + (current_Pluse_LF - current_Pluse_LB), 0, 255) ;\n'
														+'	pwm_LB = constrain(speed_PWM + (current_Pluse_LB - current_Pluse_RB) + (current_Pluse_LB - current_Pluse_LF), 0, 255) ;\n'
														+'	pwm_RF = constrain(speed_PWM + (current_Pluse_RF - current_Pluse_LF) + (current_Pluse_RF - current_Pluse_RB), 0, 255) ;\n'
														+'	pwm_RB = constrain(speed_PWM + (current_Pluse_RB - current_Pluse_LB) + (current_Pluse_RB - current_Pluse_RF), 0, 255) ;\n'
														+'	PWM_Output(-pwm_LF , -pwm_LB , -pwm_RF , -pwm_RB) ;\n'
														+'  }\n'
														+'  if(distance > 10){\n'
														+'	PWM_Output(255 , 255 , 255 , 255) ;\n'
														+'	delay(10) ;\n'
														+'  }\n'
														+'  PWM_Output(0 , 0 , 0 , 0) ;\n'
														+'}\n'
	Blockly.Arduino.setups_['TaiMaro_Define_Machinery_Setup_Code'] = Blockly.Blocks.Taimaker.TaiMaro_Define_Machinery_Setup_Code ;
	Blockly.Arduino.setups_['TaiMaro_Define_Interrupt_Setup_Code'] =Blockly.Blocks.Taimaker.TaiMaro_Define_Interrupt_Setup_Code ;
	var distance = Blockly.Arduino.valueToCode(this, 'back_Distance', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var speed = Blockly.Arduino.valueToCode(this, 'back_Speed', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var code = 'Go_Back('+distance+','+speed+');\n' ;
	return code ;
}


Blockly.Arduino.TaiMaro_Distance = function() {
	Blockly.Arduino.definitions_['TaiMaro_Define_Config'] = '#include "config.h"';
	Blockly.Arduino.definitions_['TaiMaro_Define_PWM_Move_Code'] = Blockly.Blocks.Taimaker.TaiMaro_Define_PWM_Move_Code ;
	Blockly.Arduino.definitions_['TaiMaro_Define_Distance'] = 'double get_Distance(){\n'
														+'	double distance = 0 ;\n'
														+'	distance = (Count_LB + Count_LF + Count_RF + Count_RB)/4 ;\n'
														+'	distance = distance * (((WHEELSIZE / 10.0) * PI) / (TOOTHED * CODERCOUNT)) ;\n' 
														+'	return distance ;\n'
														+'}\n' ;
	Blockly.Arduino.setups_['TaiMaro_Define_Machinery_Setup_Code'] = Blockly.Blocks.Taimaker.TaiMaro_Define_Machinery_Setup_Code ;
	Blockly.Arduino.setups_['TaiMaro_Define_Interrupt_Setup_Code'] =Blockly.Blocks.Taimaker.TaiMaro_Define_Interrupt_Setup_Code ;
	var code = 'get_Distance()' ;
	return [code , Blockly.Arduino.ORDER_ATOMIC] ;	
}

Blockly.Arduino.TaiMaro_Clearmove = function(){
	Blockly.Arduino.definitions_['TaiMaro_Define_Config'] = '#include "config.h"';
	Blockly.Arduino.definitions_['TaiMaro_Define_PWM_Move_Code'] = Blockly.Blocks.Taimaker.TaiMaro_Define_PWM_Move_Code ;
	Blockly.Arduino.definitions_['TaiMaro_Define_Clearmove'] = 'void Clear_Move(){\n'
														+'	Count_LB = 0 ;\n'
														+'	Count_LF = 0 ;\n'
														+'	Count_RB = 0 ;\n'
														+'	Count_RF = 0 ;\n'
														+'}\n' ;
	Blockly.Arduino.setups_['TaiMaro_Define_Machinery_Setup_Code'] = Blockly.Blocks.Taimaker.TaiMaro_Define_Machinery_Setup_Code ;
	Blockly.Arduino.setups_['TaiMaro_Define_Interrupt_Setup_Code'] =Blockly.Blocks.Taimaker.TaiMaro_Define_Interrupt_Setup_Code ;
	var code = 'Clear_Move() ;\n' ;
	return code ;
}

Blockly.Arduino.TaiMaro_Level_Distance = function(){
	Blockly.Arduino.definitions_['TaiMaro_Define_Config'] = '#include "config.h"';
	Blockly.Arduino.definitions_['TaiMaro_Define_PWM_Move_Code'] = Blockly.Blocks.Taimaker.TaiMaro_Define_PWM_Move_Code ;
	Blockly.Arduino.definitions_['TaiMaro_Define_Level_Distance'] = 'double get_Leveldistance(){\n'
														+'	double distance = 0 ;\n'
														+'	distance = (-Count_LB + Count_LF - Count_RF + Count_RB)/4 ;\n'
														+'	distance = distance * (((WHEELSIZE / 10.0) * PI) / (TOOTHED * CODERCOUNT)) ;\n' 
														+'	return distance ;\n'
														+'}\n' ;
	Blockly.Arduino.setups_['TaiMaro_Define_Machinery_Setup_Code'] = Blockly.Blocks.Taimaker.TaiMaro_Define_Machinery_Setup_Code ;
	Blockly.Arduino.setups_['TaiMaro_Define_Interrupt_Setup_Code'] =Blockly.Blocks.Taimaker.TaiMaro_Define_Interrupt_Setup_Code ;
	var code = 'get_Leveldistance()' ;
	return [code , Blockly.Arduino.ORDER_ATOMIC] ;	
}

Blockly.Arduino.TaiMaro_Steering_Angle = function(){
	Blockly.Arduino.definitions_['TaiMaro_Define_Config'] = '#include "config.h"';
	Blockly.Arduino.definitions_['TaiMaro_Define_PWM_Move_Code'] = Blockly.Blocks.Taimaker.TaiMaro_Define_PWM_Move_Code ;
	Blockly.Arduino.definitions_['TaiMaro_Define_Steering_Angle'] = 'double get_Steering_Angle(){\n'
														+'	double angle = 0 ;\n'
														+'	angle = (Count_LF + Count_LB - Count_RF - Count_RB)/4 ;\n'
														+'	angle = (((angle * (((WHEELSIZE / 10.0) * PI) / (TOOTHED * CODERCOUNT))) * (2.635/sqrt(13))) / (21.8 * PI)) * 360;\n' 
														+'	Serial.println(angle) ;\n'
														+'	return angle ;\n'
														+'}\n' ;
	Blockly.Arduino.setups_['TaiMaro_Define_Machinery_Setup_Code'] = Blockly.Blocks.Taimaker.TaiMaro_Define_Machinery_Setup_Code ;
	Blockly.Arduino.setups_['TaiMaro_Define_Interrupt_Setup_Code'] =Blockly.Blocks.Taimaker.TaiMaro_Define_Interrupt_Setup_Code ;
	var code = 'get_Steering_Angle()' ;
	return [code , Blockly.Arduino.ORDER_ATOMIC] ;	
}

Blockly.Arduino.TaiMaro_Barrier = function() {
	Blockly.Arduino.definitions_['TaiMaro_Define_Wire'] = '#include "Wire.h"';
	Blockly.Arduino.definitions_['TaiMaro_Var_Define_Car_Barrier']  ='unsigned short lenth_val = 0;\n'
																+'unsigned char i2c_rx_buf[16];\n'
																+'void SensorRead(unsigned char addr,unsigned char* datbuf,unsigned char cnt , int i2c_addr) \n'
																+'{\n'
																+'  unsigned short result=0;\n'
																+'  Wire.beginTransmission(i2c_addr);\n'
																+'  Wire.write(byte(addr)); \n'
																+'  Wire.endTransmission();\n'
																+'  Wire.requestFrom(i2c_addr, cnt);\n'
																+'  if (cnt <= Wire.available()) { \n'
																+'	*datbuf++ = Wire.read();  \n'
																+'	*datbuf++ = Wire.read();\n'
																+'  }\n'
																+'}\n'
																+'boolean Get_Barrier(int i2c_addr,int distance){\n'
																+'switch(i2c_addr){\n'
																+'	case 1 : i2c_addr = 80 ; break ;\n'
																+'	case 2 : i2c_addr = 81 ; break ;\n'
																+'	case 3 : i2c_addr = 82 ; break ;\n'
																+'	case 4 : i2c_addr = 83 ; break ;\n'
																+'	case 5 : i2c_addr = 84 ; break ;\n'
																+'	case 6 : i2c_addr = 85 ; break ;\n'
																+'}\n'
																+'  SensorRead(0x00,i2c_rx_buf,2 , i2c_addr);\n'
																+'  lenth_val=i2c_rx_buf[0];\n'
																+'  lenth_val=lenth_val<<8;\n'
																+'  lenth_val|=i2c_rx_buf[1];\n'
																+'  if(lenth_val <= distance){\n'
																+'    return true ;\n'
																+'  }\n'
																+'  else{\n'
																+'	  return false;\n'
																+'	}\n'
																+'}\n' ;
	var setup_code = 'Wire.begin();' ;
	Blockly.Arduino.setups_['TaiMaro_Define_Barrier_Setup_Code'] = setup_code ;
	var distance=Blockly.Arduino.valueToCode(this, 'distance', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var PORT = this.getFieldValue('PORT') ;
	var code = 'Get_Barrier('+PORT+','+distance+')';
	return [code , Blockly.Arduino.ORDER_ATOMIC] ;
}

Blockly.Arduino.TaiMaro_Barrier_Date = function() {
	Blockly.Arduino.definitions_['TaiMaro_Define_Wire'] = '#include "Wire.h"';
	Blockly.Arduino.definitions_['TaiMaro_Var_Define_Car_Barrier_Date']  ='int SensorRead(unsigned char addr,unsigned char cnt , int i2c_addr) \n'
																+'{\n'
																+'  unsigned short result=0;\n'
																+'  Wire.beginTransmission(i2c_addr);\n'
																+'  Wire.write(byte(addr)); \n'
																+'  Wire.endTransmission();\n'
																+'  Wire.requestFrom(i2c_addr, cnt);\n'
																+'	return Wire.read() << 8 | Wire.read(); \n'
																+'}\n'
																+'int Get_Barrier(int i2c_addr){\n'
																+'switch(i2c_addr){\n'
																+'	case 1 : i2c_addr = 80 ; break ;\n'
																+'	case 2 : i2c_addr = 83 ; break ;\n'
																+'	case 3 : i2c_addr = 84 ; break ;\n'
																+'	case 4 : i2c_addr = 85 ; break ;\n'
																+'}\n'
																+'  return SensorRead(0x00 ,2 , i2c_addr);\n'
																+'}\n' ;
	var setup_code = 'Wire.begin();' ;
	Blockly.Arduino.setups_['TaiMaro_Define_Barrier_Setup_Code'] = setup_code ;
	var PORT = this.getFieldValue('PORT') ;
	var code = 'Get_Barrier('+PORT+')';
	return [code , Blockly.Arduino.ORDER_ATOMIC] ;
}


Blockly.Arduino.TaiMaro_Camera = function() {
	Blockly.Arduino.definitions_['TaiMaro_Define_Turn_Light'] = '#include <Adafruit_NeoPixel.h>\n'
														+'Adafruit_NeoPixel L_Strip = Adafruit_NeoPixel(3, 10, NEO_GRB + NEO_KHZ800);\n'
														+'Adafruit_NeoPixel R_Strip = Adafruit_NeoPixel(3, 9, NEO_GRB + NEO_KHZ800);\n'
	Blockly.Arduino.definitions_['TaiMaro_Define_Arduino'] = '#include "Arduino.h"' ;
	Blockly.Arduino.definitions_['TaiMaro_Define_PI_Angle'] = 'int Get_PI_Angle(){\n'
												+'	while(Serial3.available()){Serial3.read();}\n'
												+'	Serial3.print("angle?") ;\n'
												+'	uint32_t t=millis() ;\n'
												+'	while(!Serial3.available()){\n'
												+'		if(millis()-t>1000)	break;\n'
												+'	}\n'
												+'	String get_PI_Angle = "" ; \n'
												+'	while(Serial3.available()){\n'
												+'		get_PI_Angle += (char)Serial3.read() ;\n'
												+'		delayMicroseconds(100) ;\n'
												+'	}\n'
												+'	return get_PI_Angle.toInt() ;\n'
												+'	}\n';
	Blockly.Arduino.setups_['TaiMaro_Define_PI_Setup_Code'] = 'Serial3.begin(115200);';
	Blockly.Arduino.setups_['TaiMaro_Define_Turn_Light_Setup_Code'] = '  L_Strip.begin();\n'
																+'  L_Strip.show();\n'
																+'  R_Strip.begin();\n'
																+'  R_Strip.show();\n';
	Blockly.Arduino.setups_['TaiMaro_Define_Wait_PI_UP_Setup_Code'] = Blockly.Blocks.Taimaker.TaiMaro_Wait_PI_UP_Setup_Code ;
	var code = 'Get_PI_Angle()';
	return [code , Blockly.Arduino.ORDER_ATOMIC] ;
}

Blockly.Arduino.TaiMaro_Color = function() {
	Blockly.Arduino.definitions_['TaiMaro_Define_Turn_Light'] = '#include <Adafruit_NeoPixel.h>\n'
														+'Adafruit_NeoPixel L_Strip = Adafruit_NeoPixel(3, 10, NEO_GRB + NEO_KHZ800);\n'
														+'Adafruit_NeoPixel R_Strip = Adafruit_NeoPixel(3, 9, NEO_GRB + NEO_KHZ800);\n'
	Blockly.Arduino.definitions_['TaiMaro_Define_Arduino'] = '#include "Arduino.h"' ;
	Blockly.Arduino.definitions_['TaiMaro_Define_Color'] = 'boolean get_Color(int color_PIN){\n'
													+'	while(Serial3.available()){Serial3.read();}\n'
													+'	switch(color_PIN){\n'
													+'		case 1 : Serial3.print("color?mutli 27 140 107 197 255 177") ; break ;\n' 
													+'		case 2 : Serial3.print("color?mutli 27 0 87 197 110 197") ; break ;\n'
													+'		case 3 : Serial3.print("color?mutli 27 97 0 197 167 110") ; break ;\n' 
													+'	}\n'
													+'	int error_Count = 0 ;\n'
													+'	while(error_Count<=5){\n'
													+'		uint32_t t = millis();\n' 
													+'		while(!Serial3.available()) {\n' 
													+'			if(millis() - t > 200)\n' 
													+'		  		break;\n' 
													+'		}\n' 
													+'		String cmd = "";\n' 
													+'		while(Serial3.available()) {\n' 
													+'			cmd += (char)Serial3.read();\n' 
													+'			delayMicroseconds(100);\n' 
													+'		}\n' 
													+'		if(cmd.length() <= 3){\n'
													+'			error_Count++ ;\n'
													+'		}\n'
													+'		else{\n'
													+'			error_Count = 0;\n'
													+'			if(cmd == "None") {\n' 
													+'				return false;\n' 
													+'			}\n' 
													+'			while(cmd.length() > 0) {\n' 
													+'				if(cmd.substring(0, cmd.indexOf(" ")).toInt() <= 110 && cmd.substring(0, cmd.indexOf(" ")).toInt() >= 50) {\n' 
													+'		  			return true;\n' 
													+'				}\n' 
													+'				cmd = cmd.substring(cmd.indexOf(";") + 1, cmd.length());\n' 
													+'			}\n' 
													+'			return false;\n' 
													+'		}\n'
													+'	}\n'
													+'	return false;\n'
													+'}\n';
	Blockly.Arduino.setups_['TaiMaro_Define_PI_Setup_Code'] = 'Serial3.begin(115200);';
	Blockly.Arduino.setups_['TaiMaro_Define_Turn_Light_Setup_Code'] = '  L_Strip.begin();\n'
																+'  L_Strip.show();\n'
																+'  R_Strip.begin();\n'
																+'  R_Strip.show();\n';
	Blockly.Arduino.setups_['TaiMaro_Define_Wait_PI_UP_Setup_Code'] = Blockly.Blocks.Taimaker.TaiMaro_Wait_PI_UP_Setup_Code ;
	var PORT = this.getFieldValue('PORT') ;
	var code = 'get_Color('+PORT+')' ;
	return [code , Blockly.Arduino.ORDER_ATOMIC] ;
}


Blockly.Arduino.TaiMaro_Color_Coordinates = function() {
	Blockly.Arduino.definitions_['TaiMaro_Define_Turn_Light'] = '#include <Adafruit_NeoPixel.h>\n'
														+'Adafruit_NeoPixel L_Strip = Adafruit_NeoPixel(3, 10, NEO_GRB + NEO_KHZ800);\n'
														+'Adafruit_NeoPixel R_Strip = Adafruit_NeoPixel(3, 9, NEO_GRB + NEO_KHZ800);\n'
	Blockly.Arduino.definitions_['TaiMaro_Define_Arduino'] = '#include "Arduino.h"' ;
	Blockly.Arduino.definitions_['TaiMaro_Define_Color'] = 'long color_MAX_Waiting_Time = 0 ;\n'
													+'	int color_MAX_Data[5] = {0,0,0,0,0} ;\n'
													+'	int color_MAX_cmd_Flag = 0 ;\n'
													+'int get_Color_Coordinates(int color_PIN , int coordinates_Type){\n'
													+'	if(millis() - color_MAX_Waiting_Time >= 10){\n'
													+'		while(Serial3.available()){Serial3.read();}\n'
													+'		switch(color_PIN){\n'
													+'			case 1 : Serial3.print("color?max 27 140 107 197 255 177") ; break ;\n' 
													+'			case 2 : Serial3.print("color?max 27 0 87 197 110 197") ; break ;\n'
													+'			case 3 : Serial3.print("color?max 27 97 0 197 167 110") ; break ;\n' 
													+'		}\n'
													+'		int error_Count = 0 ;\n'
													+'		while(error_Count<=5){\n'
													+'			uint32_t t = millis();\n' 
													+'			while(!Serial3.available()) {\n' 
													+'				if(millis() - t > 200)\n' 
													+'			  		break;\n' 
													+'			}\n' 
													+'			String cmd = "";\n' 
													+'			while(Serial3.available()) {\n' 
													+'				cmd += (char)Serial3.read();\n' 
													+'				delayMicroseconds(100);\n' 
													+'			}\n' 
													+'			color_MAX_Waiting_Time = millis() ;\n'
													+'			if(cmd.length() <= 3){\n'
													+'				error_Count++ ;\n'
													+'			}\n'
													+'			else{\n'
													+'				error_Count = 0;\n'
													+'				if(cmd == "None") {\n' 
													+'					int i = 0 ;\n'	
													+'					for(i = 0 ; i<=4 ; i++){\n'
													+'						color_MAX_Data[i] = 0 ; \n'
													+'					}\n'												
													+'				}\n' 
													+'				color_MAX_Data[0] = cmd.substring(0,cmd.indexOf(" ")).toInt();\n' 
													+'				cmd = cmd.substring(cmd.indexOf(" ") + 1, cmd.length());\n' 
													+'				color_MAX_Data[1] = cmd.substring(0,cmd.indexOf(",")).toInt();\n' 
													+'				cmd = cmd.substring(cmd.indexOf(",") + 1, cmd.length());\n' 
													+'				color_MAX_Data[2] = cmd.substring(0,cmd.indexOf(" ")).toInt();\n' 
													+'				cmd = cmd.substring(cmd.indexOf(" ") + 1, cmd.length());\n' 
													+'				color_MAX_Data[3] = cmd.substring(0,cmd.indexOf(",")).toInt();\n' 
													+'				cmd = cmd.substring(cmd.indexOf(",") + 1, cmd.length());\n' 
													+'				color_MAX_Data[4] = cmd.substring(0,cmd.indexOf(";")).toInt();\n' 
													+'				return color_MAX_Data[coordinates_Type-1] ;\n'
													+'			}\n'
													+'		}\n'
													+'		int i = 0 ;\n'	
													+'		for(i = 0 ; i<=4 ; i++){\n'
													+'			color_MAX_Data[i] = 0 ; \n'
													+'		}\n'
													+'	}\n'
													+'	return color_MAX_Data[coordinates_Type-1] ;\n'
													+'}\n';
	Blockly.Arduino.setups_['TaiMaro_Define_PI_Setup_Code'] = 'Serial3.begin(115200);';
	Blockly.Arduino.setups_['TaiMaro_Define_Turn_Light_Setup_Code'] = '  L_Strip.begin();\n'
																+'  L_Strip.show();\n'
																+'  R_Strip.begin();\n'
																+'  R_Strip.show();\n';
	Blockly.Arduino.setups_['TaiMaro_Define_Wait_PI_UP_Setup_Code'] = Blockly.Blocks.Taimaker.TaiMaro_Wait_PI_UP_Setup_Code ;
	var PORT = this.getFieldValue('PORT') ;
	var type = this.getFieldValue('type') ;
	var code = 'get_Color_Coordinates('+PORT+','+type+')';
	return [code , Blockly.Arduino.ORDER_ATOMIC] ;
}

Blockly.Arduino.TaiMaro_Sign_Recognition = function() {
	Blockly.Arduino.definitions_['TaiMaro_Define_Turn_Light'] = '#include <Adafruit_NeoPixel.h>\n'
														+'Adafruit_NeoPixel L_Strip = Adafruit_NeoPixel(3, 10, NEO_GRB + NEO_KHZ800);\n'
														+'Adafruit_NeoPixel R_Strip = Adafruit_NeoPixel(3, 9, NEO_GRB + NEO_KHZ800);\n'
	Blockly.Arduino.definitions_['TaiMaro_Define_Time_Interruption'] = '#include "TimeSched.h"';
	Blockly.Arduino.definitions_['TaiMaro_Define_Arduino'] = '#include "Arduino.h"' ;
	
	Blockly.Arduino.definitions_['TaiMaro_Define_Guidepost'] = 'boolean Get_Guidepost(int guidepost_PIN){\n'
													+'	while(Serial3.available()){Serial3.read();}\n'
													+'	Serial3.print("sign?");\n'
													+'	int error_Count = 0 ;\n'
													+'	while(error_Count<=5){\n'
													+'		uint32_t t = millis();\n' 
													+'		while(!Serial3.available()) {\n' 
													+'			if(millis() - t > 1000)\n' 
													+'		  		break;\n' 
													+'		}\n' 
													+'		String cmd = "";\n' 
													+'		while(Serial3.available()) {\n' 
													+'			cmd += (char)Serial3.read();\n' 
													+'			delayMicroseconds(100);\n' 
													+'		}\n' 
													+'		if(cmd.length() <= 3){\n'
													+'			error_Count++ ;\n'
													+'		}\n'
													+'		else{\n'
													+'			error_Count = 0;\n'
													+'			if(cmd == "None") {\n' 
													+'				return false;\n' 
													+'			}\n' 
													+'			int which_Sign = cmd.substring(0, cmd.indexOf(",")).toInt() ;\n'
													+'			switch(guidepost_PIN){\n'
													+'				case 1 : if(which_Sign == 5){return true ;}else{return false ;} break ;\n'
													+'				case 2 : if(which_Sign == 6){return true ;}else{return false ;} break ;\n'
													+'				case 3 : if(which_Sign == 7){return true ;}else{return false ;} break ;\n'
													+'				case 4 : if(which_Sign == 8){return true ;}else{return false ;} break ;\n'
													+'				case 5 : if(which_Sign == 3){return true ;}else{return false ;} break ;\n'
													+'				case 6 : if(which_Sign == 4){return true ;}else{return false ;} break ;\n'
													+'				case 7 : if(which_Sign == 1){return true ;}else{return false ;} break ;\n'
													+'				case 8 : if(which_Sign == 2){return true ;}else{return false ;} break ;\n'
													+'				default : return false ; break ;\n'
													+'			}\n' 
													+'		}\n' 
													+'		return false;\n' 
													+'	}\n'
													+'	return false;\n'
													+'}\n';
	Blockly.Arduino.setups_['TaiMaro_Define_PI_Setup_Code'] = 'Serial3.begin(115200);';
	Blockly.Arduino.setups_['TaiMaro_Define_Turn_Light_Setup_Code'] = '  L_Strip.begin();\n'
																+'  L_Strip.show();\n'
																+'  R_Strip.begin();\n'
																+'  R_Strip.show();\n';
	Blockly.Arduino.setups_['TaiMaro_Define_Wait_PI_UP_Setup_Code'] = Blockly.Blocks.Taimaker.TaiMaro_Wait_PI_UP_Setup_Code ;
	Blockly.Arduino.setups_['TaiMaro_Define_Wait_Sign_Setup_Code'] = 'Serial3.print("init_sign_model") ; \n'
																	+'while(!Serial3.available()){\n'
																	+'	int i = 0 ;\n'
																	+'	for(i = 0 ; i <=2 ; i++){\n'
																	+'		L_Strip.setPixelColor(i, 0,255,255);\n'
																	+'		L_Strip.show() ;\n'
																	+'		R_Strip.setPixelColor(i, 0,255,255);\n'
																	+'		R_Strip.show() ;\n'
																	+'	}\n'
																	+'	delay(500) ;\n'
																	+'	for(i = 0 ; i <=2 ; i++){\n'
																	+'		L_Strip.setPixelColor(i, 0,0,0);\n'
																	+'		L_Strip.show() ;\n'
																	+'		R_Strip.setPixelColor(i, 0,0,0);\n'
																	+'		R_Strip.show() ;\n'
																	+'	}\n'
																	+'	delay(500) ;}\n'
	var PORT = this.getFieldValue('PORT') ;
	var code = 'Get_Guidepost('+PORT+')' ;
	return [code , Blockly.Arduino.ORDER_ATOMIC] ;
}

Blockly.Arduino.TaiMaro_Finger_Recognition = function() {
	Blockly.Arduino.definitions_['TaiMaro_Define_Turn_Light'] = '#include <Adafruit_NeoPixel.h>\n'
														+'Adafruit_NeoPixel L_Strip = Adafruit_NeoPixel(3, 10, NEO_GRB + NEO_KHZ800);\n'
														+'Adafruit_NeoPixel R_Strip = Adafruit_NeoPixel(3, 9, NEO_GRB + NEO_KHZ800);\n';
	Blockly.Arduino.definitions_['TaiMaro_Define_Time_Interruption'] = '#include "TimeSched.h"';
	Blockly.Arduino.definitions_['TaiMaro_Define_Arduino'] = '#include "Arduino.h"' ;
	Blockly.Arduino.definitions_['TaiMaro_Define_Finger_Recognition'] = 'int Get_Finger_Number(){\n'
																		+'	while(Serial3.available()){Serial3.read();}\n'
																		+'	Serial3.print("hand?") ;\n'
																		+'	uint32_t t = millis();\n' 
																		+'	while(!Serial3.available()) {\n' 
																		+'		if(millis() - t > 200)\n' 
																		+'	  		break;\n' 
																		+'	}\n' 
																		+'	String cmd = "";\n' 
																		+'	while(Serial3.available()) {\n' 
																		+'		cmd += (char)Serial3.read();\n' 
																		+'		delayMicroseconds(100);\n' 
																		+'	}\n' 
																		+'	return cmd.toInt() ;\n'
																		+'}\n';
	Blockly.Arduino.setups_['TaiMaro_Define_PI_Setup_Code'] = 'Serial3.begin(115200);';
	Blockly.Arduino.setups_['TaiMaro_Define_Turn_Light_Setup_Code'] = '  L_Strip.begin();\n'
																+'  L_Strip.show();\n'
																+'  R_Strip.begin();\n'
																+'  R_Strip.show();\n';
	Blockly.Arduino.setups_['TaiMaro_Define_Wait_PI_UP_Setup_Code'] = Blockly.Blocks.Taimaker.TaiMaro_Wait_PI_UP_Setup_Code ;
	var code = 'Get_Finger_Number()';
	return [code , Blockly.Arduino.ORDER_ATOMIC] ;
	
}

Blockly.Arduino.TaiMaro_Polygon_Recognition = function() {
	Blockly.Arduino.definitions_['TaiMaro_Define_Turn_Light'] = '#include <Adafruit_NeoPixel.h>\n'
														+'Adafruit_NeoPixel L_Strip = Adafruit_NeoPixel(3, 10, NEO_GRB + NEO_KHZ800);\n'
														+'Adafruit_NeoPixel R_Strip = Adafruit_NeoPixel(3, 9, NEO_GRB + NEO_KHZ800);\n';
	Blockly.Arduino.definitions_['TaiMaro_Define_Time_Interruption'] = '#include "TimeSched.h"';
	Blockly.Arduino.definitions_['TaiMaro_Define_Arduino'] = '#include "Arduino.h"' ;
	Blockly.Arduino.definitions_['TaiMaro_Define_Finger_Recognition'] = 'int Get_Polygon_Number(int polygon_Type){\n'
																		+'	while(Serial3.available()){Serial3.read();}\n'
																		+'	Serial3.print("shape?mutli ") ;\n'
																		+'	Serial3.print(polygon_Type) ;\n'
																		+'	uint32_t t = millis();\n' 
																		+'	while(!Serial3.available()) {\n' 
																		+'		if(millis() - t > 200)\n' 
																		+'	  		break;\n' 
																		+'	}\n' 
																		+'	String cmd = "";\n' 
																		+'	while(Serial3.available()) {\n' 
																		+'		cmd += (char)Serial3.read();\n' 
																		+'		delayMicroseconds(100);\n' 
																		+'	}\n' 
																		+'	return cmd.toInt() ;\n'
																		+'}\n';
	Blockly.Arduino.setups_['TaiMaro_Define_PI_Setup_Code'] = 'Serial3.begin(115200);';
	Blockly.Arduino.setups_['TaiMaro_Define_Turn_Light_Setup_Code'] = '  L_Strip.begin();\n'
																+'  L_Strip.show();\n'
																+'  R_Strip.begin();\n'
																+'  R_Strip.show();\n';
	Blockly.Arduino.setups_['TaiMaro_Define_Wait_PI_UP_Setup_Code'] = Blockly.Blocks.Taimaker.TaiMaro_Wait_PI_UP_Setup_Code ;
	var Num = Blockly.Arduino.valueToCode(this, 'Num', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var code = 'Get_Polygon_Number('+Num+')';
	return [code , Blockly.Arduino.ORDER_ATOMIC] ;
	
}


Blockly.Arduino.TaiMaro_Side_Num = function() {
	Blockly.Arduino.definitions_['TaiMaro_Define_Turn_Light'] = '#include <Adafruit_NeoPixel.h>\n'
														+'Adafruit_NeoPixel L_Strip = Adafruit_NeoPixel(3, 10, NEO_GRB + NEO_KHZ800);\n'
														+'Adafruit_NeoPixel R_Strip = Adafruit_NeoPixel(3, 9, NEO_GRB + NEO_KHZ800);\n';
	Blockly.Arduino.definitions_['TaiMaro_Define_Time_Interruption'] = '#include "TimeSched.h"';
	Blockly.Arduino.definitions_['TaiMaro_Define_Arduino'] = '#include "Arduino.h"' ;
	Blockly.Arduino.definitions_['TaiMaro_Define_Finger_Recognition'] = 'int Get_Side_Number(){\n'
																		+'	while(Serial3.available()){Serial3.read();}\n'
																		+'	Serial3.print("shape?max 0") ;\n'
																		+'	uint32_t t = millis();\n' 
																		+'	while(!Serial3.available()) {\n' 
																		+'		if(millis() - t > 200)\n' 
																		+'	  		break;\n' 
																		+'	}\n' 
																		+'	String cmd = "";\n' 
																		+'	while(Serial3.available()) {\n' 
																		+'		cmd += (char)Serial3.read();\n' 
																		+'		delayMicroseconds(100);\n' 
																		+'	}\n' 
																		+'	return cmd.toInt() ;\n'
																		+'}\n';
	Blockly.Arduino.setups_['TaiMaro_Define_PI_Setup_Code'] = 'Serial3.begin(115200);';
	Blockly.Arduino.setups_['TaiMaro_Define_Turn_Light_Setup_Code'] = '  L_Strip.begin();\n'
																+'  L_Strip.show();\n'
																+'  R_Strip.begin();\n'
																+'  R_Strip.show();\n';
	Blockly.Arduino.setups_['TaiMaro_Define_Wait_PI_UP_Setup_Code'] = Blockly.Blocks.Taimaker.TaiMaro_Wait_PI_UP_Setup_Code ;
	var Num = Blockly.Arduino.valueToCode(this, 'Num', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var code = 'Get_Side_Number()';
	return [code , Blockly.Arduino.ORDER_ATOMIC] ;
	
}


Blockly.Arduino.TaiMaro_Setup_IMGRANGE = function() {
	Blockly.Arduino.definitions_['TaiMaro_Define_Turn_Light'] = '#include <Adafruit_NeoPixel.h>\n'
														+'Adafruit_NeoPixel L_Strip = Adafruit_NeoPixel(3, 10, NEO_GRB + NEO_KHZ800);\n'
														+'Adafruit_NeoPixel R_Strip = Adafruit_NeoPixel(3, 9, NEO_GRB + NEO_KHZ800);\n';
	Blockly.Arduino.definitions_['TaiMaro_Define_Time_Interruption'] = '#include "TimeSched.h"';
	Blockly.Arduino.definitions_['TaiMaro_Define_Arduino'] = '#include "Arduino.h"' ;
	Blockly.Arduino.setups_['TaiMaro_Define_PI_Setup_Code'] = 'Serial3.begin(115200);';
	Blockly.Arduino.setups_['TaiMaro_Define_Turn_Light_Setup_Code'] = '  L_Strip.begin();\n'
																+'  L_Strip.show();\n'
																+'  R_Strip.begin();\n'
																+'  R_Strip.show();\n';
	Blockly.Arduino.setups_['TaiMaro_Define_Wait_PI_UP_Setup_Code'] = Blockly.Blocks.Taimaker.TaiMaro_Wait_PI_UP_Setup_Code ;
	var Num = Blockly.Arduino.valueToCode(this, 'Num', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var code = 'Serial3.print("IMGRANGE='+Num+'") ; delay(1000) ;\n'
	return code ;
	
}

Blockly.Arduino.TaiMaro_Setup_LINETHRESHOLD = function() {
	Blockly.Arduino.definitions_['TaiMaro_Define_Turn_Light'] = '#include <Adafruit_NeoPixel.h>\n'
														+'Adafruit_NeoPixel L_Strip = Adafruit_NeoPixel(3, 10, NEO_GRB + NEO_KHZ800);\n'
														+'Adafruit_NeoPixel R_Strip = Adafruit_NeoPixel(3, 9, NEO_GRB + NEO_KHZ800);\n';
	Blockly.Arduino.definitions_['TaiMaro_Define_Time_Interruption'] = '#include "TimeSched.h"';
	Blockly.Arduino.definitions_['TaiMaro_Define_Arduino'] = '#include "Arduino.h"' ;
	Blockly.Arduino.setups_['TaiMaro_Define_PI_Setup_Code'] = 'Serial3.begin(115200);';
	Blockly.Arduino.setups_['TaiMaro_Define_Turn_Light_Setup_Code'] = '  L_Strip.begin();\n'
																+'  L_Strip.show();\n'
																+'  R_Strip.begin();\n'
																+'  R_Strip.show();\n';
	Blockly.Arduino.setups_['TaiMaro_Define_Wait_PI_UP_Setup_Code'] = Blockly.Blocks.Taimaker.TaiMaro_Wait_PI_UP_Setup_Code ;
	var Num = Blockly.Arduino.valueToCode(this, 'Num', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var code = 'Serial3.print("LINETHRESHOLD='+Num+'") ; delay(1000) ;\n'
	return code ;
	
}

Blockly.Arduino.TaiMaro_Brake_Light = function() {
	Blockly.Arduino.definitions_['TaiMaro_Define_Brake_Light'] = 'void Stop_Light(int stoplight_PIN){\n'
														+'	if(stoplight_PIN == 1){\n'
														+'	  digitalWrite(A3 , HIGH) ;\n'
														+'	  digitalWrite(11 , HIGH) ;\n'
														+'	}\n'
														+'	else{\n'
														+'	  digitalWrite(A3 , LOW) ;\n'
														+'	  digitalWrite(11 , LOW) ;\n'
														+'	}\n'
														+'}\n';	
	var PIN = this.getFieldValue('PIN') ;
	var code = 'Stop_Light('+PIN+');' ;
	return code ;
}

Blockly.Arduino.TaiMaro_Turn_Light = function() {
	Blockly.Arduino.definitions_['TaiMaro_Define_Turn_Light'] = '#include <Adafruit_NeoPixel.h>\n'
														+'Adafruit_NeoPixel L_Strip = Adafruit_NeoPixel(3, 10, NEO_GRB + NEO_KHZ800);\n'
														+'Adafruit_NeoPixel R_Strip = Adafruit_NeoPixel(3, 9, NEO_GRB + NEO_KHZ800);\n'
	Blockly.Arduino.definitions_['TaiMaro_Define_Turn_Light_Function'] = 'void turnlight(int turnlight_PIN ,int turnlight_Num, int R , int G , int B){\n'
																+'	if(turnlight_PIN == 1){\n'
																+'		L_Strip.setPixelColor(turnlight_Num, R,G,B);\n'
																+'		L_Strip.show() ;\n'
																+'	}\n'
																+'	else{\n'
																+'		R_Strip.setPixelColor(turnlight_Num, R,G,B);\n'
																+'		R_Strip.show() ;\n'
																+'	}\n'
																+'}\n';
	Blockly.Arduino.setups_['TaiMaro_Define_Turn_Light_Setup_Code'] = '  L_Strip.begin();\n'
																+'  L_Strip.show();\n'
																+'  R_Strip.begin();\n'
																+'  R_Strip.show();\n';
	var PIN = this.getFieldValue('PIN') ;
	var LightNum=Blockly.Arduino.valueToCode(this, 'LightNum', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var R=Blockly.Arduino.valueToCode(this, 'R', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var G=Blockly.Arduino.valueToCode(this, 'G', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var B=Blockly.Arduino.valueToCode(this, 'B', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var code = 'turnlight('+PIN+','+LightNum+','+R+','+G+','+B+');\n' ;
	return code ;
}

Blockly.Arduino.TaiMaro_MPU6050 = function() {
	Blockly.Arduino.definitions_['TaiMaro_Define_Config'] = '#include "config.h"';
	Blockly.Arduino.definitions_['TaiMaro_Define_Wire'] = '#include <Wire.h>';
	Blockly.Arduino.definitions_['TaiMaro_Define_WriteMPUReg_Function'] ='uint32_t previousTime = 0;\n'
																		+'int32_t delta = 0;\n'
																		+'float z_angle = 0;\n'
																		+'void WriteMPUReg(int nReg,unsigned char nVal) {\n'
																		+'Wire.beginTransmission(0x68);\n'
																		+'Wire.write(nReg);\n'
																		+'Wire.write(nVal);\n'
																		+'Wire.endTransmission(true);\n'
																		+'}\n'
	
	Blockly.Arduino.definitions_['TaiMaro_Define_AccGyr_init_Function'] = 'void AccGyr_init() {\n'
																+'WriteMPUReg(0x6B,0x80);\n'
																+'delay(50);\n'
																+'WriteMPUReg(0x6B,0x03);\n'
																+'WriteMPUReg(0x1A,0x03);\n'
																+'WriteMPUReg(0x1B,0x18);\n'
																+'WriteMPUReg(0x1C,0x10);\n'
																+'WriteMPUReg(0x24,0x0D);\n'
																+'}\n'
																+'int readGyrZ() {\n'
																+'Wire.beginTransmission(0x68);\n'
																+'Wire.write(0x47);\n'
																+'Wire.requestFrom(0x68, 2, true);\n'
																+'Wire.endTransmission(true);\n'
																+'return (Wire.read() << 8 | Wire.read());\n'
																+'}\n'					
	var setup_code = 'Wire.begin();\n'
					+'Wire.setClock(100000);\n';
	Blockly.Arduino.setups_['TaiMaro_Define_Barrier_Setup_Code'] = setup_code ;
	Blockly.Arduino.setups_['TaiMaro_Define_MPU6050_Setup_Code'] ='	delay(3000) ;\n'
																+'  AccGyr_init();\n'
																+'  for(int i = 0; i < 100; i++) {readGyrZ();}\n'
																+'  for(int i = 0; i < 100; i++) {delta += readGyrZ();}\n'
																+'  delta = delta / 100;\n'
																+'  delay(1000);\n';
	var code = '((readGyrZ() - delta) * GYRORATE * 180 / PI / 4)';
	return [code , Blockly.Arduino.ORDER_ATOMIC] ;
}



Blockly.Arduino.TaiMaro_Speak = function() {
	Blockly.Arduino.definitions_['TaiMaro_Define_Turn_Light'] = '#include <Adafruit_NeoPixel.h>\n'
														+'Adafruit_NeoPixel L_Strip = Adafruit_NeoPixel(3, 10, NEO_GRB + NEO_KHZ800);\n'
														+'Adafruit_NeoPixel R_Strip = Adafruit_NeoPixel(3, 9, NEO_GRB + NEO_KHZ800);\n'
	Blockly.Arduino.definitions_['TaiMaro_Define_Time_Interruption'] = '#include "TimeSched.h"';
	Blockly.Arduino.definitions_['TaiMaro_Define_Arduino'] = '#include "Arduino.h"' ;
	Blockly.Arduino.setups_['TaiMaro_Define_PI_Setup_Code'] = 'Serial3.begin(115200);';
	Blockly.Arduino.setups_['TaiMaro_Define_Turn_Light_Setup_Code'] = '  L_Strip.begin();\n'
																+'  L_Strip.show();\n'
																+'  R_Strip.begin();\n'
																+'  R_Strip.show();\n';
	Blockly.Arduino.setups_['TaiMaro_Define_Wait_PI_UP_Setup_Code'] = Blockly.Blocks.Taimaker.TaiMaro_Wait_PI_UP_Setup_Code ;
	var sound_num = Blockly.Arduino.valueToCode(this, 'sound_num', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var code = 'Serial3.print("SOUND='+sound_num+'");\n' ;
	return code ;
}



Blockly.Blocks.Taimaker.TaiMaQueen_Define_Machinery_Setup_Code =  'pinMode(pin_Car_LF_PWM ,OUTPUT) ;\n'
													+'  pinMode(pin_Car_LF_DIN ,OUTPUT) ;\n'
													+'  pinMode(pin_Car_LB_PWM ,OUTPUT) ;\n'
													+'  pinMode(pin_Car_LB_DIN ,OUTPUT) ;\n'
													+'  pinMode(pin_Car_RF_PWM ,OUTPUT) ;\n'
													+'  pinMode(pin_Car_RF_DIN ,OUTPUT) ;\n'
													+'  pinMode(pin_Car_RB_PWM ,OUTPUT) ;\n'
													+'  pinMode(pin_Car_RB_DIN ,OUTPUT) ;\n'
													+'	while(!digitalRead(self_Locking_Button_PIN)){}\n';
													


Blockly.Arduino.TaiMaQueen_Set_PWM = function() {
	Blockly.Arduino.definitions_['TaiMaQueen_Define_Config'] = '#include "TaiMaQueen_Config.h"';
	Blockly.Arduino.definitions_['TaiMaQueen_Define_PWM_Function'] = 'void Set_PWM(int pwm_Num , int pwm){\n'
														+'	if(pwm >= 255){\n'
														+'		pwm = 255 ;\n'
														+'	}\n'
														+'	else if(pwm <= -255){\n'
														+'		pwm = -255 ;\n'
														+'	}\n'
														+'	switch(pwm_Num){\n'
														+'		case 1 : if(pwm >= 0){\n'
														+'					digitalWrite(pin_Car_LF_DIN , 0) ;\n'
														+'					analogWrite(pin_Car_LF_PWM , pwm) ;\n'
														+'				}\n'
														+'				else{\n'
														+'					digitalWrite(pin_Car_LF_DIN , 1) ;\n'
														+'					analogWrite(pin_Car_LF_PWM , -pwm) ;\n'
														+'				} ; break ;\n'
														+'		case 2 : if(pwm >= 0){\n'
														+'					digitalWrite(pin_Car_LB_DIN , 0) ;\n'
														+'					analogWrite(pin_Car_LB_PWM , pwm) ;\n'
														+'				}\n'
														+'				else{\n'
														+'					digitalWrite(pin_Car_LB_DIN , 1) ;\n'
														+'					analogWrite(pin_Car_LB_PWM , -pwm) ;\n'
														+'				} ; break ;\n'
														+'		case 3 : if(pwm >= 0){\n'
														+'					digitalWrite(pin_Car_RF_DIN , 1) ;\n'
														+'					analogWrite(pin_Car_RF_PWM , pwm) ;\n'
														+'				}\n'
														+'				else{\n'
														+'					digitalWrite(pin_Car_RF_DIN , 0) ;\n'
														+'					analogWrite(pin_Car_RF_PWM , -pwm) ;\n'
														+'				} ; break ;\n'
														+'		case 4 : if(pwm >= 0){\n'
														+'					digitalWrite(pin_Car_RB_DIN , 1) ;\n'
														+'					analogWrite(pin_Car_RB_PWM , pwm) ;\n'
														+'				}\n'
														+'				else{\n'
														+'					digitalWrite(pin_Car_RB_DIN , 0) ;\n'
														+'					analogWrite(pin_Car_RB_PWM , -pwm) ;\n'
														+'				} ; break ;\n'
														+'	}\n'
														+'}\n'
	Blockly.Arduino.setups_['TaiMaQueen_Define_Machinery_Setup_Code'] = Blockly.Blocks.Taimaker.TaiMaQueen_Define_Machinery_Setup_Code ;
	var PIN = this.getFieldValue('PIN') ;
	var pwm=Blockly.Arduino.valueToCode(this, 'speed', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var code = 'Set_PWM('+PIN+','+pwm+');\n' ;
	return code ;
}

Blockly.Arduino.TaiMaQueen_Servo = function() {
	Blockly.Arduino.definitions_['TaiMaQueen_Define_Config'] = '#include "TaiMaQueen_Config.h"';
	Blockly.Arduino.definitions_['TaiMaQueen_Define_Servo'] = '#include "Servo.h"';
	Blockly.Arduino.definitions_['TaiMaQueen_Define_Myse'] = 'Servo myse ;' ;
	Blockly.Arduino.setups_['TaiMaQueen_Define_Servo_Setup_Code'] = 'myse.attach(servo_PIN) ;\n';
	var angle=Blockly.Arduino.valueToCode(this, 'angle', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var code = 'myse.write('+angle+');\n' ;
	return code ;
}

Blockly.Arduino.TaiMaQueen_Fan = function() {
	Blockly.Arduino.definitions_['TaiMaQueen_Define_Config'] = '#include "TaiMaQueen_Config.h"';
	Blockly.Arduino.definitions_['TaiMaQueen_Define_Fan_Function'] = 'void Fan(int is_Run){\n'
																	+'  if(is_Run == 1){\n'
																	+'	digitalWrite(fan_PWM_Anode , HIGH) ;\n'
																	+'	digitalWrite(fan_PWM_Cathode , LOW) ;\n'
																	+'  }\n'
																	+'  else{\n'
																	+'	digitalWrite(fan_PWM_Anode , LOW) ;\n'
																	+'	digitalWrite(fan_PWM_Cathode , LOW) ;\n'
																	+'  }\n'
																	+'}\n' ;
	Blockly.Arduino.setups_['TaiMaQueen_Fan_Setup_Code'] = 'pinMode(fan_PWM_Anode, OUTPUT) ;\n'
															+'pinMode(fan_PWM_Cathode, OUTPUT) ;\n';
	var State = this.getFieldValue('state') ;
	var code = 'Fan('+State+');\n' ;
	return code ;
}

Blockly.Arduino.TaiMaQueen_Fan = function() {
	Blockly.Arduino.definitions_['TaiMaQueen_Define_Config'] = '#include "TaiMaQueen_Config.h"';
	Blockly.Arduino.definitions_['TaiMaQueen_Define_Fan_Function'] = 'void Fan(int is_Run){\n'
																	+'  if(is_Run == 1){\n'
																	+'	digitalWrite(fan_PWM_Anode , HIGH) ;\n'
																	+'	digitalWrite(fan_PWM_Cathode , LOW) ;\n'
																	+'  }\n'
																	+'  else{\n'
																	+'	digitalWrite(fan_PWM_Anode , LOW) ;\n'
																	+'	digitalWrite(fan_PWM_Cathode , LOW) ;\n'
																	+'  }\n'
																	+'}\n' ;
	Blockly.Arduino.setups_['TaiMaQueen_Fan_Setup_Code'] = 'pinMode(fan_PWM_Anode, OUTPUT) ;\n'
															+'pinMode(fan_PWM_Cathode, OUTPUT) ;\n';
	var State = this.getFieldValue('state') ;
	var code = 'Fan('+State+');\n' ;
	return code ;
}

Blockly.Arduino.TaiMaQueen_Start_Buzzer = function() {
	Blockly.Arduino.definitions_['TaiMaQueen_Define_Config'] = '#include "TaiMaQueen_Config.h"';
	Blockly.Arduino.setups_['TaiMaQueen_Buzzer_Setup_Code'] = 'pinMode(buzzer_PIN , OUTPUT) ;\n' ;
	var frequency=Blockly.Arduino.valueToCode(this, 'frequency', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var code = 'tone(buzzer_PIN,'+frequency+');\n' ;
	return code ;
}

Blockly.Arduino.TaiMaQueen_Stop_Buzzer = function() {
	Blockly.Arduino.definitions_['TaiMaQueen_Define_Config'] = '#include "TaiMaQueen_Config.h"';
	Blockly.Arduino.setups_['TaiMaQueen_Buzzer_Setup_Code'] = 'pinMode(buzzer_PIN , OUTPUT) ;\n' ;
	var code = 'noTone(buzzer_PIN);\n' ;
	return code ;
}


Blockly.Arduino.TaiMaQueen_1602LCD_Show = function() {
	Blockly.Arduino.definitions_['TaiMaQueen_Define_I2C'] = '#include<Wire.h>\n' ;
	Blockly.Arduino.definitions_['TaiMaQueen_Define_1602LCD'] = '#include"LiquidCrystal_I2C.h"\n'
																+'LiquidCrystal_I2C lcd(0x00,16,2) ;\n';
	Blockly.Arduino.setups_['TaiMaQueen_I2C_Setup_Code'] = 'Wire.begin() ;\n' ;
	Blockly.Arduino.setups_['TaiMaQueen_1602LCD_Setup_Code'] = 	'Wire.beginTransmission(0x3f);\n'
																+'uint8_t lcd_address = 0x3F ;\n'
																+'if(Wire.endTransmission() == 0){ lcd_address = 0x3F;}\n'
																+'else{\n'
																+'	Wire.beginTransmission(0x27);\n'
																+'	if(Wire.endTransmission() == 0){lcd_address = 0x27 ;}\n'
																+'	else{\n'
																+'		Wire.beginTransmission(0x22);\n'
																+'		if(Wire.endTransmission() == 0){lcd_address = 0x22 ;}\n'
																+'	}\n'
																+'}\n'
																+'lcd.set_addr(lcd_address);\n'
																+'lcd.init() ;\n'
																+'lcd.backlight() ;\n' ;

	var text1 = Blockly.Arduino.valueToCode(this, 'text1', Blockly.Arduino.ORDER_ATOMIC) || '\"\"';
	var text2 = Blockly.Arduino.valueToCode(this, 'text2', Blockly.Arduino.ORDER_ATOMIC) || '\"\"';
	var code ='lcd.setCursor(0 , 0) ; \n'
				+'lcd.print('+text1+') ; \n'
				+'lcd.setCursor(0 , 1) ; \n'
				+'lcd.print('+text2+') ; \n' ;
	return code ;
}

Blockly.Arduino.TaiMaQueen_1602LCD_Clear = function() {
	Blockly.Arduino.definitions_['TaiMaQueen_Define_I2C'] = '#include<Wire.h>\n' ;
	Blockly.Arduino.definitions_['TaiMaQueen_Define_1602LCD'] = '#include"LiquidCrystal_I2C.h"\n'
																+'LiquidCrystal_I2C lcd(0x3F,16,2) ;\n' ;
	Blockly.Arduino.setups_['TaiMaQueen_I2C_Setup_Code'] = 'Wire.begin() ;\n' ;
	Blockly.Arduino.setups_['TaiMaQueen_1602LCD_Setup_Code'] = 	'Wire.beginTransmission(0x3f);\n'
																+'uint8_t lcd_address = 0x3F ;\n'
																+'if(Wire.endTransmission() == 0){ lcd_address = 0x3F;}\n'
																+'else{\n'
																+'	Wire.beginTransmission(0x27);\n'
																+'	if(Wire.endTransmission() == 0){lcd_address = 0x27 ;}\n'
																+'	else{\n'
																+'		Wire.beginTransmission(0x22);\n'
																+'		if(Wire.endTransmission() == 0){lcd_address = 0x22 ;}\n'
																+'	}\n'
																+'}\n'
																+'lcd.set_addr(lcd_address);\n'
																+'lcd.init() ;\n'
																+'lcd.backlight() ;\n' ;
	var code = 'lcd.clear() ;\n';
	return code ;
}

Blockly.Arduino.TaiMaQueen_Brake_Light = function() {
	Blockly.Arduino.definitions_['TaiMaQueen_Define_Config'] = '#include "TaiMaQueen_Config.h"';
	Blockly.Arduino.definitions_['TaiMaQueen_Define_Brake_Light_Function'] = 'void Stop_Light(int stop_Light_PIN , int stop_Light_State){\n'
														+'	if(stop_Light_PIN == 1){\n'
														+'		stop_Light_PIN = left_Stop_Light_PIN ;\n'
														+'	}\n'
														+'	else{\n'
														+'		stop_Light_PIN = right_Stop_Light_PIN ;\n'
														+'	}\n'
														+'	if(stop_Light_State == 1){\n'
														+'	  digitalWrite(stop_Light_PIN , HIGH) ;\n'
														+'	}\n'
														+'	else{\n'
														+'	  digitalWrite(stop_Light_PIN , LOW) ;\n'
														+'	}\n'
														+'}\n';	
	var PIN = this.getFieldValue('PIN') ;
	var State = this.getFieldValue('state') ;
	var code = 'Stop_Light('+PIN+','+State+');' ;
	return code ;
}

Blockly.Arduino.TaiMaQueen_Gray = function() {
	Blockly.Arduino.definitions_['TaiMaQueen_Define_Config'] = '#include "TaiMaQueen_Config.h"';
	Blockly.Arduino.definitions_['TaiMaQueen_Define_Gray_Function'] = 'int Gray(int PIN){\n'
															+'	switch(PIN){\n'
															+'		case 1 : return analogRead(gray_L1_PIN) ; break ;\n'
															+'		case 2 : return analogRead(gray_L2_PIN) ; break ;\n'
															+'		case 3 : return analogRead(gray_M_PIN) ; break ;\n'
															+'		case 4 : return analogRead(gray_R2_PIN) ; break ;\n'
															+'		case 5 : return analogRead(gray_R1_PIN) ; break ;\n'
															+'	}\n'
															+'}\n'
	var PIN = this.getFieldValue('PIN') ;
	var code = 'Gray('+PIN+')' ;
	return [code , Blockly.Arduino.ORDER_ATOMIC] ;	
}

Blockly.Arduino.TaiMaQueen_Fire = function() {
	Blockly.Arduino.definitions_['TaiMaQueen_Define_Config'] = '#include "TaiMaQueen_Config.h"';
	Blockly.Arduino.definitions_['TaiMaQueen_Define_Fire_Function'] = 'int Fire(int PIN){\n'
															+'	switch(PIN){\n'
															+'		case 1 : return analogRead(fire_L1_PIN) ; break ;\n'
															+'		case 2 : return analogRead(fire_L2_PIN) ; break ;\n'
															+'		case 3 : return analogRead(fire_M_PIN) ; break ;\n'
															+'		case 4 : return analogRead(fire_R2_PIN) ; break ;\n'
															+'		case 5 : return analogRead(fire_R1_PIN) ; break ;\n'
															+'	}\n'
															+'}\n'
	var PIN = this.getFieldValue('PIN') ;
	var code = 'Fire('+PIN+')' ;
	return [code , Blockly.Arduino.ORDER_ATOMIC] ;	
}

Blockly.Arduino.TaiMaQueen_Sound = function() {
	Blockly.Arduino.definitions_['TaiMaQueen_Define_Config'] = '#include "TaiMaQueen_Config.h"';
	var code = 'analogRead(sound_PIN)' ;
	return [code , Blockly.Arduino.ORDER_ATOMIC] ;	
}

Blockly.Arduino.TaiMaQueen_Ultrasonic = function() {
	Blockly.Arduino.definitions_['TaiMaQueen_Define_Config'] = '#include "TaiMaQueen_Config.h"';
	Blockly.Arduino.definitions_['TaiMaQueen_Define_Ultrasonic_Function'] = 'double Ultrasonic(){\n'
																	+'  double distance = 0 ;\n'
																	+'  digitalWrite(TrigPin, LOW);\n'
																	+'  delayMicroseconds(2);\n'
																	+'  digitalWrite(TrigPin, HIGH);\n'
																	+'  delayMicroseconds(10);\n'
																	+'  digitalWrite(TrigPin, LOW);\n'
																	+'  distance = pulseIn(EchoPin, HIGH) / 58.00;\n'
																	+'  return distance ;\n'
																	+'}\n' ;
	Blockly.Arduino.setups_['TaiMaQueen_Ultrasonic_Setup_Code'] = 'pinMode(TrigPin, OUTPUT);\n'
																	+'pinMode(EchoPin, INPUT);\n'
	var code = 'Ultrasonic()' ;
	return [code , Blockly.Arduino.ORDER_ATOMIC] ;	
}

Blockly.Arduino.TaiMaQueen_MPU9250 = function() {
	Blockly.Arduino.definitions_['TaiMaQueen_Define_I2C'] = '#include<Wire.h>\n' ;
	Blockly.Arduino.definitions_['TaiMaQueen_Define_MPU9250'] = '#include <FaBo9Axis_MPU9250.h>\n' 
																+'FaBo9Axis fabo_9axis;\n' ;
	Blockly.Arduino.definitions_['TaiMaQueen_Define_MPU9250_Function'] = 'float Get_MPU9250(int PIN){\n'
															+'  float ax,ay,az;\n'
															+'  float gx,gy,gz;\n'
															+'  fabo_9axis.readAccelXYZ(&ax,&ay,&az);\n'
															+'  fabo_9axis.readGyroXYZ(&gx,&gy,&gz);\n'
															+'	switch(PIN){\n'
															+'		case 1 : return ax ; break ;\n'
															+'		case 2 : return ay ; break ;\n'
															+'		case 3 : return az ; break ;\n'
															+'		case 4 : return gx ; break ;\n'
															+'		case 5 : return gy ; break ;\n'
															+'		case 6 : return gz ; break ;\n'
															+'	}\n'
															+'}\n';
	Blockly.Arduino.setups_['TaiMaQueen_MPU9250_Setup_Code'] = '  if (fabo_9axis.begin()) {\n'
																+'	Serial.println("configured FaBo 9Axis I2C Brick");\n'
																+'  }\n'
																+'	else {\n'
																+'	Serial.println("device error");\n'
																+'	while(1);\n'
																+'  }\n' ;
	var PIN = this.getFieldValue('PIN') ;
	var code = 'Get_MPU9250('+PIN+')' ;
	return [code , Blockly.Arduino.ORDER_ATOMIC] ;	
}

Blockly.Arduino.TaiMaQueen_Self_Locking_Button = function() {
	Blockly.Arduino.definitions_['TaiMaQueen_Define_Config'] = '#include "TaiMaQueen_Config.h"';
	var code = 'digitalRead(self_Locking_Button_PIN)' ;
	return [code , Blockly.Arduino.ORDER_ATOMIC] ;	
}

Blockly.Blocks.Roborave_Define_Setup_Code =  'delay(100);\n'
													+'  Wire.begin();\n'
													+'  pinMode(4, OUTPUT);\n'
													+'  pinMode(5, OUTPUT);\n'
													+'  pinMode(6, OUTPUT);\n'
													+'  pinMode(7, OUTPUT);\n'
													+'  Serial.begin(115200);\n'
													+'  digitalWrite(4, LOW);\n'
													+'  digitalWrite(5, LOW);\n'
													+'  digitalWrite(6, LOW);\n'
													+'  digitalWrite(7, LOW);\n'
													+'  pinMode(2, INPUT_PULLUP);\n'
													+'  pinMode(3, INPUT_PULLUP);\n'
													+'  attachInterrupt(digitalPinToInterrupt(2), left_count, RISING);\n'
													+'  attachInterrupt(digitalPinToInterrupt(3), right_count, RISING);\n'
													+'  AccGyr_init();\n'
													+'  for(int i = 0; i < 100; i++) {delta += readGyrZ();}\n'
													+'  delta = delta / 100;\n'
													+'  delay(3000);\n'
													+'  previousTime = micros();\n';
													

Blockly.Arduino.Roborave_test = function() {
	Blockly.Arduino.definitions_['Roborave_Define_Config'] = '#include "Roborave_Config.h"';
	Blockly.Arduino.definitions_['Roborave_Define_Wire'] = '#include "Wire.h"';
	Blockly.Arduino.definitions_['Roborave_Define_WriteMPUReg_Function'] = 'static int32_t leftCount = 0;\n'
																	+'static int32_t rightCount = 0;\n'
																	+'uint32_t previousTime = 0;\n'
																	+'int32_t delta = 0;\n'
																	+'float z_angle = 0;\n'
																	+'float kp = 4;\n'
																	+'float ki = 0.04;\n'
																	+'float kd = 3.6;\n'
																	+'int pre_degree = 0;\n'
																	+'void WriteMPUReg(int nReg,unsigned char nVal) {\n'
																	+'Wire.beginTransmission(0x68);\n'
																	+'Wire.write(nReg);\n'
																	+'Wire.write(nVal);\n'
																	+'Wire.endTransmission(true);\n'
																	+'}\n'
	
	Blockly.Arduino.definitions_['Roborave_Define_AccGyr_init_Function'] = 'void AccGyr_init() {\n'
																+'WriteMPUReg(0x6B,0x80);\n'
																+'delay(50);\n'
																+'WriteMPUReg(0x6B,0x03);\n'
																+'WriteMPUReg(0x1A,0x03);\n'
																+'WriteMPUReg(0x1B,0x18);\n'
																+'WriteMPUReg(0x1C,0x10);\n'
																+'WriteMPUReg(0x24,0x0D);\n'
																+'}\n'
																+'int readGyrZ() {\n'
																+'Wire.beginTransmission(0x68);\n'
																+'Wire.write(0x47);\n'
																+'Wire.requestFrom(0x68, 2, true);\n'
																+'Wire.endTransmission(true);\n'
																+'return (Wire.read() << 8 | Wire.read());\n'
																+'}\n'
	Blockly.Arduino.definitions_['Roborave_Define_count_Function'] = 'void left_count() {leftCount++;}\n'
															+'void right_count() {rightCount++;}\n'
															+'float I = 0;\n'
															+'float last = 0;\n'
	
	Blockly.Arduino.definitions_['Roborave_Define_Forward_Function'] = 'void forward(uint32_t distance, float degree) {\n'
														+'	int a = degree - pre_degree;\n'
														+'	pre_degree = degree;\n'
														+'	int32_t count = (distance / (PI * (wheel_size + 0.0))) * reduction * coder;\n'
														+'	if(a >= 0) {\n'
														+'		while(rightCount < count) {\n'
														+'		uint32_t currentTime = micros();\n'
														+'		uint32_t dTime = currentTime - previousTime;\n'
														+'		previousTime = currentTime;\n'
														+'		z_angle += ((readGyrZ() - delta) * GYRORATE * dTime * 180 / PI / 4);\n'
														+'		float error = degree + z_angle;\n'
														+'		float P = error * kp;\n'
														+'		I += error;\n'
														+'		I = constrain(I, -1000, 1000);\n'
														+'		float D = (last - error) * kd;\n'
														+'		last = error;\n'
														+'		int pwm = P + I * ki + D;\n'
														+'		int left_pwm = constrain(speed_pwm + pwm, -170, speed_pwm);\n'
														+'		int right_pwm = constrain(speed_pwm - pwm, -170, speed_pwm);\n'
														+'		if(left_pwm >= 0) {digitalWrite(4, 1);analogWrite(5, left_pwm);}\n'
														+'		else {digitalWrite(4, 0);analogWrite(5, -left_pwm);}\n'
														+'		if(right_pwm >= 0) {digitalWrite(7, 1);analogWrite(6, right_pwm);}\n'
														+'		else {digitalWrite(7, 0);analogWrite(6, -right_pwm);}\n'
														+'		}\n'
														+'			digitalWrite(4, LOW);\n'
														+'			digitalWrite(5, LOW);\n'
														+'			digitalWrite(6, LOW);\n'
														+'			digitalWrite(7, LOW);\n'
														+'		leftCount = 0;\n'
														+'		rightCount = 0;\n'
														+'		} else {\n'
														+'		while(leftCount < count) {\n'
														+'			uint32_t currentTime = micros();\n'
														+'			uint32_t dTime = currentTime - previousTime;\n'
														+'			previousTime = currentTime;\n'
														+'			z_angle += ((readGyrZ() - delta) * GYRORATE * dTime * 180 / PI / 4);\n'
														+'			float error = degree + z_angle;\n'
														+'			float P = error * kp;\n'
														+'			I += error;\n'
														+'			I = constrain(I, -1000, 1000);\n'
														+'			float D = (last - error) * kd;\n'
														+'			last = error;\n'
														+'			int pwm = P + I * ki + D;\n'
														+'			int left_pwm = constrain(speed_pwm + pwm, -170, speed_pwm);\n'
														+'			int right_pwm = constrain(speed_pwm - pwm, -170, speed_pwm);\n'
														+'			if(left_pwm >= 0) {digitalWrite(4, 1);analogWrite(5, left_pwm);\n'
														+'			} else {digitalWrite(4, 0);analogWrite(5, -left_pwm);}\n'
														+'			if(right_pwm >= 0) {digitalWrite(7, 1);analogWrite(6, right_pwm);\n'
														+'			} else {digitalWrite(7, 0);analogWrite(6, -right_pwm);}\n'
														+'			}\n'
														+'			digitalWrite(4, LOW);\n'
														+'			digitalWrite(5, LOW);\n'
														+'			digitalWrite(6, LOW);\n'
														+'			digitalWrite(7, LOW);\n'
														+'			leftCount = 0;\n'
														+'			rightCount = 0;\n'
														+'			}\n'
														+'			}\n'
	Blockly.Arduino.setups_['Roborave_Define_Setup_Code'] = Blockly.Blocks.Roborave_Define_Setup_Code ;
	
	
	
	var distance = Blockly.Arduino.valueToCode(this, 'distance', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var angle = Blockly.Arduino.valueToCode(this, 'angle', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var PIN = this.getFieldValue('PIN') ;
	var code = 'forward('+distance+','+PIN+'*'+angle+');\n' ;
	return code ;
}


Blockly.Arduino.TaiMaQueen_8_16_Matrix_Show = function() {
  var varName = this.getFieldValue('VAR');
  var a = new Array();
  var b = new Array() ;
  for (var i = 1; i < 9; i++) {
	a[i] = new Array();
	b[i] = new Array();
	for (var j = 1; j < 9; j++) {
	  a[i][j] = (this.getFieldValue('a' + i + j) == "TRUE") ? 1 : 0;
	  b[i][j] = (this.getFieldValue('b' + i + j) == "TRUE") ? 1 : 0;
	}
  }
  var code_l = '{';
  var code_r = '{';
  for (var i = 1; i < 9; i++) {
	var tmp_l = "" ;
	var tmp_r = "" ;
	for (var j = 1; j < 9; j++) {
	  tmp_l += a[i][j];
	  tmp_r += b[i][j];
	}
	tmp_l = (parseInt(tmp_l, 2)).toString(16)
	tmp_r = (parseInt(tmp_r, 2)).toString(16)
	if (tmp_l.length == 1) tmp_l = "0" + tmp_l;
	if (tmp_r.length == 1) tmp_r = "0" + tmp_r;
	code_l += '0x' + tmp_l + ((i != 8) ? ',' : '');
	code_r += '0x' + tmp_r + ((i != 8) ? ',' : '');
  }
  code_l += '};';
  code_r += '};';
  //Blockly.Arduino.definitions_[this.id] = "byte LedArray_"+clearString(this.id)+"[]="+code;
  Blockly.Arduino.definitions_[varName+'l'] = "uint8_t " + varName + "l[8]=" + code_l;
  Blockly.Arduino.definitions_[varName+'r'] = "uint8_t " + varName + "r[8]=" + code_r;
  
	Blockly.Arduino.definitions_['TaiMaQueen_Define_clear_Array'] = 'uint8_t  clear_Array[8] = {0x00 , 0x00 , 0x00 , 0x00 , 0x00 , 0x00 , 0x00 , 0x00} ;\n' ;
	Blockly.Arduino.definitions_['TaiMaQueen_Define_I2C'] = '#include<Wire.h>\n' ;
	Blockly.Arduino.definitions_['TaiMaQueen_Define_Matrix'] = '#include <Adafruit_GFX.h>\n'
																	+'#include "Adafruit_LEDBackpack.h"\n';
	Blockly.Arduino.definitions_['TaiMaQueen_Define_8_16_Matrix']='Adafruit_8x16minimatrix matrix = Adafruit_8x16minimatrix();\n';
	Blockly.Arduino.setups_['TaiMaQueen_Setup_8_16_Matrix'] = '  matrix.begin(0x70);\n'
															+'	matrix.drawBitmap(0, 0, clear_Array, 8, 8, LED_ON);\n'
															+'	matrix.writeDisplay();\n'
															+'  matrix.drawBitmap(0, 8, clear_Array, 8, 8, LED_ON);\n'
															+'	matrix.writeDisplay();\n' ;
	var is_Clear = (this.getFieldValue('is_Clear_8_16') == "TRUE") ? 1 : 0;
	//Blockly.Arduino.definitions_['LEDArray'] = 'uint8_t  LEDArray[8];';
	//  var code='Matrix_'+SDA+'_'+SCL+'.clear()dotMatrix;\n';
	//var code='';
	//code+='for(int i=0; i<8; i++)\n';
	//code+='{\n'
	//code+='  LEDArray[i]='+dotMatrixArray+'[i];\n';
	//code+='  for(int j=7; j>=0; j--)\n'
	//code+='  {\n'
	//code+='    if((LEDArray[i]&0x01)>0)\n';
	//code+='    '+ matrixName +'.drawPixel(j, i,LED_ON);\n';
	//code+='    LEDArray[i] = LEDArray[i]>>1;\n';
	//code+='  }  \n'
	//code+='}\n'
	//code+= matrixName+'.writeDisplay();\n'
	var code = '	if('+is_Clear+'){\n'
				+'		matrix.clear();\n'
				+'	}\n'
				+'	matrix.drawBitmap(0, 0, '+varName+'l, 8, 8, LED_ON);\n'
				+'	matrix.writeDisplay();\n'
				+'  matrix.drawBitmap(0, 8, '+varName+'r, 8, 8, LED_ON);\n'
				+'	matrix.writeDisplay();\n' ;
	return code;
};



Blockly.Arduino.TaiMaQueen_8_16_Matrix_Char_Show = function() {
	Blockly.Arduino.definitions_['TaiMaQueen_Define_clear_Array'] = 'uint8_t  clear_Array[8] = {0x00 , 0x00 , 0x00 , 0x00 , 0x00 , 0x00 , 0x00 , 0x00} ;\n' ;
	Blockly.Arduino.definitions_['TaiMaQueen_Define_char_Show_Array'] = 'uint8_t numb_Show_1[8]={0x00,0x00,0x42,0xfe,0x02,0x00,0x00,0x00} ;\n' 
																	+'uint8_t numb_Show_2[8]={0x00,0x42,0x86,0x8a,0x92,0x62,0x00,0x00};\n'
																	+'uint8_t numb_Show_3[8]={0x00,0x84,0x82,0xa2,0xd2,0x8c,0x00,0x00};\n'
																	+'uint8_t numb_Show_4[8]={0x00,0x18,0x28,0x48,0xfe,0x08,0x00,0x00};\n'
																	+'uint8_t numb_Show_5[8]={0x00,0xe4,0xa2,0xa2,0xa2,0x9c,0x00,0x00};\n'
																	+'uint8_t numb_Show_6[8]={0x00,0x3c,0x52,0x92,0x92,0x0c,0x00,0x00};\n'
																	+'uint8_t numb_Show_7[8]={0x00,0x80,0x8e,0x90,0xa0,0xc0,0x00,0x00};\n'
																	+'uint8_t numb_Show_8[8]={0x00,0x6c,0x92,0x92,0x92,0x6c,0x00,0x00};\n'
																	+'uint8_t numb_Show_9[8]={0x00,0x60,0x92,0x92,0x94,0x78,0x00,0x00};\n'
																	+'uint8_t numb_Show_0[8]={0x00,0x7c,0x8a,0x92,0xa2,0x7c,0x00,0x00};\n' 
																	+'uint8_t char_Show_A[8]={0x00,0x7e,0x88,0x88,0x88,0x7e,0x00,0x00};\n'
																	+'uint8_t char_Show_B[8]={0x00,0xfe,0x92,0x92,0x92,0x6c,0x00,0x00};\n'
																	+'uint8_t char_Show_C[8]={0x00,0x7c,0x82,0x82,0x82,0x44,0x00,0x00};\n'
																	+'uint8_t char_Show_D[8]={0x00,0xfe,0x82,0x82,0x44,0x38,0x00,0x00};\n'
																	+'uint8_t char_Show_E[8]={0x00,0xfe,0x92,0x92,0x92,0x82,0x00,0x00};\n'
																	+'uint8_t char_Show_F[8]={0x00,0xfe,0x90,0x90,0x90,0x80,0x00,0x00};\n'
																	+'uint8_t char_Show_G[8]={0x00,0x7c,0x82,0x92,0x92,0x5e,0x00,0x00};\n'
																	+'uint8_t char_Show_H[8]={0x00,0xfe,0x10,0x10,0x10,0xfe,0x00,0x00};\n'
																	+'uint8_t char_Show_I[8]={0x00,0x00,0x82,0xfe,0x82,0x00,0x00,0x00};\n'
																	+'uint8_t char_Show_J[8]={0x00,0x04,0x02,0x82,0xfc,0x80,0x00,0x00};\n'
																	+'uint8_t char_Show_K[8]={0x00,0xfe,0x10,0x28,0x44,0x82,0x00,0x00};\n'
																	+'uint8_t char_Show_L[8]={0x00,0xfe,0x02,0x02,0x02,0x02,0x00,0x00};\n'
																	+'uint8_t char_Show_M[8]={0x00,0xfe,0x40,0x30,0x40,0xfe,0x00,0x00};\n'
																	+'uint8_t char_Show_N[8]={0x00,0xfe,0x20,0x10,0x08,0xfe,0x00,0x00};\n'
																	+'uint8_t char_Show_O[8]={0x00,0x7c,0x82,0x82,0x82,0x7c,0x00,0x00};\n'
																	+'uint8_t char_Show_P[8]={0x00,0xfe,0x90,0x90,0x90,0x60,0x00,0x00};\n'
																	+'uint8_t char_Show_Q[8]={0x00,0x7c,0x82,0x8a,0x84,0x7a,0x00,0x00};\n'
																	+'uint8_t char_Show_R[8]={0x00,0xfe,0x90,0x98,0x94,0x62,0x00,0x00};\n'
																	+'uint8_t char_Show_S[8]={0x00,0x62,0x92,0x92,0x92,0x8c,0x00,0x00};\n'
																	+'uint8_t char_Show_T[8]={0x00,0x80,0x80,0xfe,0x80,0x80,0x00,0x00};\n'
																	+'uint8_t char_Show_U[8]={0x00,0xfc,0x02,0x02,0x02,0xfc,0x00,0x00};\n'
																	+'uint8_t char_Show_V[8]={0x00,0xf8,0x04,0x02,0x04,0xf8,0x00,0x00};\n'
																	+'uint8_t char_Show_W[8]={0x00,0xfc,0x02,0x1c,0x02,0xfc,0x00,0x00};\n'
																	+'uint8_t char_Show_X[8]={0x00,0xc6,0x28,0x10,0x28,0xc6,0x00,0x00};\n'
																	+'uint8_t char_Show_Y[8]={0x00,0xe0,0x10,0x0e,0x10,0xe0,0x00,0x00};\n'
																	+'uint8_t char_Show_Z[8]={0x00,0x86,0x8a,0x92,0xa2,0xc2,0x00,0x00};\n';
	Blockly.Arduino.definitions_['TaiMaQueen_Define_I2C'] = '#include<Wire.h>\n' ;
	Blockly.Arduino.definitions_['TaiMaQueen_Define_Matrix'] = '#include <Adafruit_GFX.h>\n'
																	+'#include "Adafruit_LEDBackpack.h"\n' ;
	Blockly.Arduino.definitions_['TaiMaQueen_Define_8_16_Matrix']='Adafruit_8x16minimatrix matrix = Adafruit_8x16minimatrix();\n';
	Blockly.Arduino.definitions_['TaiMaQueen_Define_8_16_Matrix_Char'] = 'void Miatrix_Char_Show(String which_Char_L , String which_Char_R ){\n'
																		+'	matrix.clear();\n'
																		+'	uint8_t matrix_Show_Char_Array_L[8] ={0x00 ,0x00 ,0x00 ,0x00 ,0x00 ,0x00 ,0x00 ,0x00} ; \n'
																		+'	uint8_t matrix_Show_Char_Array_R[8] ={0x00 ,0x00 ,0x00 ,0x00 ,0x00 ,0x00 ,0x00 ,0x00} ; \n'
																		+'	int i = 0 ; \n'
																		+'	for(i= 0 ; i <= 7 ; i++){\n'
																		+'		if(which_Char_L == "0"){matrix_Show_Char_Array_L[i] = numb_Show_0[i] ;}\n'
																		+'		else if(which_Char_L == "1"){matrix_Show_Char_Array_L[i] = numb_Show_1[i] ;}\n'
																		+'		else if(which_Char_L == "2"){matrix_Show_Char_Array_L[i] = numb_Show_2[i] ;}\n'
																		+'		else if(which_Char_L == "3"){matrix_Show_Char_Array_L[i] = numb_Show_3[i] ;}\n'
																		+'		else if(which_Char_L == "4"){matrix_Show_Char_Array_L[i] = numb_Show_4[i] ;}\n'
																		+'		else if(which_Char_L == "5"){matrix_Show_Char_Array_L[i] = numb_Show_5[i] ;}\n'
																		+'		else if(which_Char_L == "6"){matrix_Show_Char_Array_L[i] = numb_Show_6[i] ;}\n'
																		+'		else if(which_Char_L == "7"){matrix_Show_Char_Array_L[i] = numb_Show_7[i] ;}\n'
																		+'		else if(which_Char_L == "8"){matrix_Show_Char_Array_L[i] = numb_Show_8[i] ;}\n'
																		+'		else if(which_Char_L == "9"){matrix_Show_Char_Array_L[i] = numb_Show_9[i] ;}\n'
																		+'		else if(which_Char_L == "A" || which_Char_L == "a" || which_Char_L == "65"){matrix_Show_Char_Array_L[i] = char_Show_A[i] ;}\n'
																		+'		else if(which_Char_L == "B" || which_Char_L == "b" || which_Char_L == "66"){matrix_Show_Char_Array_L[i] = char_Show_B[i] ;}\n'
																		+'		else if(which_Char_L == "C" || which_Char_L == "c" || which_Char_L == "67"){matrix_Show_Char_Array_L[i] = char_Show_C[i] ;}\n'
																		+'		else if(which_Char_L == "D" || which_Char_L == "d" || which_Char_L == "68"){matrix_Show_Char_Array_L[i] = char_Show_D[i] ;}\n'
																		+'		else if(which_Char_L == "E" || which_Char_L == "e" || which_Char_L == "69"){matrix_Show_Char_Array_L[i] = char_Show_E[i] ;}\n'
																		+'		else if(which_Char_L == "F" || which_Char_L == "f" || which_Char_L == "70"){matrix_Show_Char_Array_L[i] = char_Show_F[i] ;}\n'
																		+'		else if(which_Char_L == "G" || which_Char_L == "g" || which_Char_L == "71"){matrix_Show_Char_Array_L[i] = char_Show_G[i] ;}\n'
																		+'		else if(which_Char_L == "H" || which_Char_L == "h" || which_Char_L == "72"){matrix_Show_Char_Array_L[i] = char_Show_H[i] ;}\n'
																		+'		else if(which_Char_L == "I" || which_Char_L == "i" || which_Char_L == "73"){matrix_Show_Char_Array_L[i] = char_Show_I[i] ;}\n'
																		+'		else if(which_Char_L == "J" || which_Char_L == "j" || which_Char_L == "74"){matrix_Show_Char_Array_L[i] = char_Show_J[i] ;}\n'
																		+'		else if(which_Char_L == "K" || which_Char_L == "k" || which_Char_L == "75"){matrix_Show_Char_Array_L[i] = char_Show_K[i] ;}\n'
																		+'		else if(which_Char_L == "L" || which_Char_L == "l" || which_Char_L == "76"){matrix_Show_Char_Array_L[i] = char_Show_L[i] ;}\n'
																		+'		else if(which_Char_L == "M" || which_Char_L == "m" || which_Char_L == "77"){matrix_Show_Char_Array_L[i] = char_Show_M[i] ;}\n'
																		+'		else if(which_Char_L == "N" || which_Char_L == "n" || which_Char_L == "78"){matrix_Show_Char_Array_L[i] = char_Show_N[i] ;}\n'
																		+'		else if(which_Char_L == "O" || which_Char_L == "o" || which_Char_L == "79"){matrix_Show_Char_Array_L[i] = char_Show_O[i] ;}\n'
																		+'		else if(which_Char_L == "P" || which_Char_L == "p" || which_Char_L == "80"){matrix_Show_Char_Array_L[i] = char_Show_P[i] ;}\n'
																		+'		else if(which_Char_L == "Q" || which_Char_L == "q" || which_Char_L == "81"){matrix_Show_Char_Array_L[i] = char_Show_Q[i] ;}\n'
																		+'		else if(which_Char_L == "R" || which_Char_L == "r" || which_Char_L == "82"){matrix_Show_Char_Array_L[i] = char_Show_R[i] ;}\n'
																		+'		else if(which_Char_L == "S" || which_Char_L == "s" || which_Char_L == "83"){matrix_Show_Char_Array_L[i] = char_Show_S[i] ;}\n'
																		+'		else if(which_Char_L == "T" || which_Char_L == "t" || which_Char_L == "84"){matrix_Show_Char_Array_L[i] = char_Show_T[i] ;}\n'
																		+'		else if(which_Char_L == "U" || which_Char_L == "u" || which_Char_L == "85"){matrix_Show_Char_Array_L[i] = char_Show_U[i] ;}\n'
																		+'		else if(which_Char_L == "V" || which_Char_L == "v" || which_Char_L == "86"){matrix_Show_Char_Array_L[i] = char_Show_V[i] ;}\n'
																		+'		else if(which_Char_L == "W" || which_Char_L == "w" || which_Char_L == "87"){matrix_Show_Char_Array_L[i] = char_Show_W[i] ;}\n'
																		+'		else if(which_Char_L == "X" || which_Char_L == "x" || which_Char_L == "88"){matrix_Show_Char_Array_L[i] = char_Show_X[i] ;}\n'
																		+'		else if(which_Char_L == "Y" || which_Char_L == "y" || which_Char_L == "89"){matrix_Show_Char_Array_L[i] = char_Show_Y[i] ;}\n'
																		+'		else if(which_Char_L == "Z" || which_Char_L == "z" || which_Char_L == "90"){matrix_Show_Char_Array_L[i] = char_Show_Z[i] ;}\n'
																		+'		if(which_Char_R == "0"){matrix_Show_Char_Array_R[i] = numb_Show_0[i] ;}\n'
																		+'		else if(which_Char_R == "1"){matrix_Show_Char_Array_R[i] = numb_Show_1[i] ;}\n'
																		+'		else if(which_Char_R == "2"){matrix_Show_Char_Array_R[i] = numb_Show_2[i] ;}\n'
																		+'		else if(which_Char_R == "3"){matrix_Show_Char_Array_R[i] = numb_Show_3[i] ;}\n'
																		+'		else if(which_Char_R == "4"){matrix_Show_Char_Array_R[i] = numb_Show_4[i] ;}\n'
																		+'		else if(which_Char_R == "5"){matrix_Show_Char_Array_R[i] = numb_Show_5[i] ;}\n'
																		+'		else if(which_Char_R == "6"){matrix_Show_Char_Array_R[i] = numb_Show_6[i] ;}\n'
																		+'		else if(which_Char_R == "7"){matrix_Show_Char_Array_R[i] = numb_Show_7[i] ;}\n'
																		+'		else if(which_Char_R == "8"){matrix_Show_Char_Array_R[i] = numb_Show_8[i] ;}\n'
																		+'		else if(which_Char_R == "9"){matrix_Show_Char_Array_R[i] = numb_Show_9[i] ;}\n'
																		+'		else if(which_Char_R == "A" || which_Char_R == "a" || which_Char_R == "65"){matrix_Show_Char_Array_R[i] = char_Show_A[i] ;}\n'
																		+'		else if(which_Char_R == "B" || which_Char_R == "b" || which_Char_R == "66"){matrix_Show_Char_Array_R[i] = char_Show_B[i] ;}\n'
																		+'		else if(which_Char_R == "C" || which_Char_R == "c" || which_Char_R == "67"){matrix_Show_Char_Array_R[i] = char_Show_C[i] ;}\n'
																		+'		else if(which_Char_R == "D" || which_Char_R == "d" || which_Char_R == "68"){matrix_Show_Char_Array_R[i] = char_Show_D[i] ;}\n'
																		+'		else if(which_Char_R == "E" || which_Char_R == "e" || which_Char_R == "69"){matrix_Show_Char_Array_R[i] = char_Show_E[i] ;}\n'
																		+'		else if(which_Char_R == "F" || which_Char_R == "f" || which_Char_R == "70"){matrix_Show_Char_Array_R[i] = char_Show_F[i] ;}\n'
																		+'		else if(which_Char_R == "G" || which_Char_R == "g" || which_Char_R == "71"){matrix_Show_Char_Array_R[i] = char_Show_G[i] ;}\n'
																		+'		else if(which_Char_R == "H" || which_Char_R == "h" || which_Char_R == "72"){matrix_Show_Char_Array_R[i] = char_Show_H[i] ;}\n'
																		+'		else if(which_Char_R == "I" || which_Char_R == "i" || which_Char_R == "73"){matrix_Show_Char_Array_R[i] = char_Show_I[i] ;}\n'
																		+'		else if(which_Char_R == "J" || which_Char_R == "j" || which_Char_R == "74"){matrix_Show_Char_Array_R[i] = char_Show_J[i] ;}\n'
																		+'		else if(which_Char_R == "K" || which_Char_R == "k" || which_Char_R == "75"){matrix_Show_Char_Array_R[i] = char_Show_K[i] ;}\n'
																		+'		else if(which_Char_R == "L" || which_Char_R == "l" || which_Char_R == "76"){matrix_Show_Char_Array_R[i] = char_Show_L[i] ;}\n'
																		+'		else if(which_Char_R == "M" || which_Char_R == "m" || which_Char_R == "77"){matrix_Show_Char_Array_R[i] = char_Show_M[i] ;}\n'
																		+'		else if(which_Char_R == "N" || which_Char_R == "n" || which_Char_R == "78"){matrix_Show_Char_Array_R[i] = char_Show_N[i] ;}\n'
																		+'		else if(which_Char_R == "O" || which_Char_R == "o" || which_Char_R == "79"){matrix_Show_Char_Array_R[i] = char_Show_O[i] ;}\n'
																		+'		else if(which_Char_R == "P" || which_Char_R == "p" || which_Char_R == "80"){matrix_Show_Char_Array_R[i] = char_Show_P[i] ;}\n'
																		+'		else if(which_Char_R == "Q" || which_Char_R == "q" || which_Char_R == "81"){matrix_Show_Char_Array_R[i] = char_Show_Q[i] ;}\n'
																		+'		else if(which_Char_R == "R" || which_Char_R == "r" || which_Char_R == "82"){matrix_Show_Char_Array_R[i] = char_Show_R[i] ;}\n'
																		+'		else if(which_Char_R == "S" || which_Char_R == "s" || which_Char_R == "83"){matrix_Show_Char_Array_R[i] = char_Show_S[i] ;}\n'
																		+'		else if(which_Char_R == "T" || which_Char_R == "t" || which_Char_R == "84"){matrix_Show_Char_Array_R[i] = char_Show_T[i] ;}\n'
																		+'		else if(which_Char_R == "U" || which_Char_R == "u" || which_Char_R == "85"){matrix_Show_Char_Array_R[i] = char_Show_U[i] ;}\n'
																		+'		else if(which_Char_R == "V" || which_Char_R == "v" || which_Char_R == "86"){matrix_Show_Char_Array_R[i] = char_Show_V[i] ;}\n'
																		+'		else if(which_Char_R == "W" || which_Char_R == "w" || which_Char_R == "87"){matrix_Show_Char_Array_R[i] = char_Show_W[i] ;}\n'
																		+'		else if(which_Char_R == "X" || which_Char_R == "x" || which_Char_R == "88"){matrix_Show_Char_Array_R[i] = char_Show_X[i] ;}\n'
																		+'		else if(which_Char_R == "Y" || which_Char_R == "y" || which_Char_R == "89"){matrix_Show_Char_Array_R[i] = char_Show_Y[i] ;}\n'
																		+'		else if(which_Char_R == "Z" || which_Char_R == "z" || which_Char_R == "90"){matrix_Show_Char_Array_R[i] = char_Show_Z[i] ;}\n'
																		+'	}\n'
																		+'	matrix.clear();\n'
																		+'	matrix.drawBitmap(0, 0, matrix_Show_Char_Array_L , 8, 8, LED_ON);\n'
																		+'	matrix.drawBitmap(0, 8, matrix_Show_Char_Array_R , 8, 8, LED_ON);\n'
																		+'	matrix.writeDisplay();\n'
																		+'}\n';
	Blockly.Arduino.setups_['TaiMaQueen_Setup_8_16_Matrix'] = '  matrix.begin(0x70);\n'
															+'	matrix.drawBitmap(0, 0, clear_Array, 8, 8, LED_ON);\n'
															+'	matrix.writeDisplay();\n'
															+'  matrix.drawBitmap(0, 8, clear_Array, 8, 8, LED_ON);\n'
															+'	matrix.writeDisplay();\n' ;
	var text1 = Blockly.Arduino.valueToCode(this, 'char1', Blockly.Arduino.ORDER_ATOMIC) || '\"\"';
	var text2 = Blockly.Arduino.valueToCode(this, 'char2', Blockly.Arduino.ORDER_ATOMIC) || '\"\"';
	var code = 'Miatrix_Char_Show('+text1+','+text2+');\n';
	return code ;
};

Blockly.Arduino.TaiMaQueen_8_16_Matrix_Clear = function() {
	Blockly.Arduino.definitions_['TaiMaQueen_Define_clear_Array'] = 'uint8_t  clear_Array[8] = {0x00 , 0x00 , 0x00 , 0x00 , 0x00 , 0x00 , 0x00 , 0x00} ;\n' ;
	Blockly.Arduino.definitions_['TaiMaQueen_Define_I2C'] = '#include<Wire.h>\n' ;
	Blockly.Arduino.definitions_['TaiMaQueen_Define_Matrix'] = '#include <Adafruit_GFX.h>\n'
																	+'#include "Adafruit_LEDBackpack.h"\n';
	Blockly.Arduino.definitions_['TaiMaQueen_Define_8_16_Matrix']='Adafruit_8x16minimatrix matrix = Adafruit_8x16minimatrix();\n';
	Blockly.Arduino.setups_['TaiMaQueen_Setup_8_16_Matrix'] = '  matrix.begin(0x70);\n'
															+'	matrix.drawBitmap(0, 0, clear_Array, 8, 8, LED_ON);\n'
															+'	matrix.writeDisplay();\n'
															+'  matrix.drawBitmap(0, 8, clear_Array, 8, 8, LED_ON);\n'
															+'	matrix.writeDisplay();\n' ;
	var code = '	matrix.clear();\n'
			+'	matrix.drawBitmap(0, 0, clear_Array, 8, 8, LED_ON);\n'
			+'	matrix.writeDisplay();\n'
			+'  matrix.drawBitmap(0, 8, clear_Array, 8, 8, LED_ON);\n'
			+'	matrix.writeDisplay();\n' ;
	return code ;
};

Blockly.Arduino.TaiMaQueen_Temperature_Humidity = function() {
	Blockly.Arduino.definitions_['TaiMaQueen_Define_Temperature_Humidity_Function'] ='#include "DHT.h"\n'
															+'#define DHTPIN 12\n' 
															+'#define DHTTYPE DHT11 \n'
															+'DHT dht(DHTPIN, DHTTYPE);\n'
															+'double temperature_Humidity(int state){\n'
															+'	switch(state){\n'
															+'		case 1 : return dht.readTemperature() ; break ;\n'
															+'		case 2 : return dht.readHumidity() ; break ;\n'
															+'	}\n'
															+'}\n';
	Blockly.Arduino.setups_['TaiMaQueen_Temperature_Humidity_Setup_Code'] = 'dht.begin() ;\n';
	var state = this.getFieldValue('state') ;
	var code = 'temperature_Humidity('+state+')' ;
	return [code , Blockly.Arduino.ORDER_ATOMIC] ;	
}

Blockly.Arduino.TaiMaQueen_Smoke = function() {
	var code = 'analogRead(A1)' ;
	return [code , Blockly.Arduino.ORDER_ATOMIC] ;	
}

Blockly.Arduino.TaiMaQueen_Human_Body_Infrared = function() {
	var code = 'digitalRead(A2)' ;
	return [code , Blockly.Arduino.ORDER_ATOMIC] ;	
}

Blockly.Arduino.TaiMaQueen_Infrared = function() {
	Blockly.Arduino.definitions_['TaiMaQueen_Define_Infrared_Function'] = 'int Infrared(int state){\n'
															+'	switch(state){\n'
															+'		case 1 : return analogRead(A13) ; break ;\n'
															+'		case 2 : return analogRead(A15) ; break ;\n'
															+'	}\n'
															+'}\n'
	var state = this.getFieldValue('state') ;
	var code = 'Infrared('+state+')' ;
	return [code , Blockly.Arduino.ORDER_ATOMIC] ;	
}

Blockly.Arduino.TaiMaQueen_Turn_Light = function() {
	Blockly.Arduino.definitions_['TaiMaQueen_Define_Turn_Light'] = '#include <Adafruit_NeoPixel.h>\n'
														+'Adafruit_NeoPixel Strip = Adafruit_NeoPixel(2, A11, NEO_GRB + NEO_KHZ800);\n'
	Blockly.Arduino.definitions_['TaiMaco_Define_Turn_Light_Function'] = 'void turnlight(int turnlight_PIN , int R , int G , int B){\n'
																+'	if(turnlight_PIN == 1){\n'
																+'		Strip.setPixelColor(0, R,G,B);\n'
																+'		Strip.show() ;\n'
																+'	}\n'
																+'	else{\n'
																+'		Strip.setPixelColor(1, R,G,B);\n'
																+'		Strip.show() ;\n'
																+'	}\n'
																+'}\n';
	Blockly.Arduino.setups_['TaiMaQueen_Define_Turn_Light_Setup_Code'] = '  Strip.begin();\n'
																+'  Strip.show();\n';
	var PIN = this.getFieldValue('PIN') ;
	var R=Blockly.Arduino.valueToCode(this, 'R', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var G=Blockly.Arduino.valueToCode(this, 'G', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var B=Blockly.Arduino.valueToCode(this, 'B', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var code = 'turnlight('+PIN+','+R+','+G+','+B+');\n' ;
	return code ;
}

Blockly.Arduino.TaiMaQueen_Photoresistance = function() {
	Blockly.Arduino.definitions_['TaiMaQueen_Define_Photoresistance_Function'] = 'int Photoresistance(int state){\n'
															+'	switch(state){\n'
															+'		case 1 : return analogRead(A12) ; break ;\n'
															+'		case 2 : return analogRead(A14) ; break ;\n'
															+'	}\n'
															+'}\n'
	var state = this.getFieldValue('state') ;
	var code = 'Photoresistance('+state+')' ;
	return [code , Blockly.Arduino.ORDER_ATOMIC] ;	
}



Blockly.Arduino.TaiMaQueen_Speak = function(){
	Blockly.Arduino.definitions_['TaiMaQueen_Define_DFRobotDFPlayerMini'] = '#include "DFRobotDFPlayerMini.h"\n'
																	+'DFRobotDFPlayerMini myDFPlayer;\n';
	Blockly.Arduino.setups_['TaiMaQueen_Define_Mp3_Setup_Code'] =   'Serial2.begin(9600) ;\n'
															+'  Serial.begin(115200);\n'
															+'  Serial.println();\n'
															+'  Serial.println(F("DFRobot DFPlayer Mini Demo"));\n'
															+'  Serial.println(F("Initializing DFPlayer ... (May take 3~5 seconds)"));\n'
															+'  if (!myDFPlayer.begin(Serial2)) {  \n'
															+'	Serial.println(F("Unable to begin:"));\n'
															+'	Serial.println(F("1.Please recheck the connection!"));\n'
															+'	Serial.println(F("2.Please insert the SD card!"));\n'
															+'	while(true);\n'
															+'  }\n'
															+'  Serial.println(F("DFPlayer Mini online."));\n'
															+'  myDFPlayer.volume(30);\n' ;
	var sound_num = Blockly.Arduino.valueToCode(this, 'sound_num', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var code = 'myDFPlayer.play('+sound_num+');\n' ;
	return code ;
}


Blockly.Arduino.TaiMaQueen_Initialize_Gray = function() {
	Blockly.Arduino.definitions_['TaiMaQueen_Define_Config'] = '#include "TaiMaQueen_Config.h"';
	Blockly.Arduino.definitions_['Define_EEPROM'] = '#include<EEPROM.h>\n'
	Blockly.Arduino.definitions_['TaiMaQueen_Define_I2C'] = '#include<Wire.h>\n' ;
	Blockly.Arduino.definitions_['TaiMaQueen_Define_1602LCD'] = '#include"LiquidCrystal_I2C.h"\n'
																+'LiquidCrystal_I2C lcd(0x00,16,2) ;\n' ;
	Blockly.Arduino.definitions_['Define_TaiMaQueen_Initialize_Gray_Function'] = 'void TaiMaQueen_Initialize_Gray(){\n'
																	+'	int threshold_value_1 = 255 ;\n'
																	+'	int threshold_value_2 = 255 ;\n'
																	+'	int threshold_value_3 = 255 ;\n'
																	+'	int threshold_value_4 = 255 ;\n'
																	+'	int threshold_value_5 = 255 ;\n'
																	+'	long black_value_1 = 0 ;\n'
																	+'	long black_value_2 = 0 ;\n'
																	+'	long black_value_3 = 0 ;\n'
																	+'	long black_value_4 = 0 ;\n'
																	+'	long black_value_5 = 0 ;\n'
																	+'	long white_value_1 = 0 ;\n'
																	+'	long white_value_2 = 0 ;\n'
																	+'	long white_value_3 = 0 ;\n'
																	+'	long white_value_4 = 0 ;\n'
																	+'	long white_value_5 = 0 ;\n'
																	+'	lcd.setCursor(0 , 0) ;\n'
																	+'	lcd.print("Put the car in") ;\n'
																	+'	lcd.setCursor(0 , 1) ;\n'
																	+'	lcd.print("the black area") ;\n'
																	+'	long i = 0 ; \n'
																	+'	delay(300) ;\n'
																	+'	while(!digitalRead(self_Locking_Button_PIN)){}\n'
																	+'	delay(300) ;\n'
																	+'	lcd.clear() ;\n'
																	+'	lcd.setCursor(0 , 0) ;\n'
																	+'	lcd.print("Scanning...") ;\n'
																	+'	lcd.setCursor(0 , 1) ;\n'
																	+'	lcd.print("") ;\n'
																	+'	while(i<=5000){\n'
																	+'		black_value_1 +=  analogRead(gray_L1_PIN) ;\n'
																	+'		black_value_2 +=  analogRead(gray_L2_PIN) ;\n'
																	+'		black_value_3 +=  analogRead(gray_M_PIN) ;\n'
																	+'		black_value_4 +=  analogRead(gray_R2_PIN) ;\n'
																	+'		black_value_5 +=  analogRead(gray_R1_PIN) ;\n'
																	+'		i++ ;\n'
																	+'	}\n'
																	+'	black_value_1 = black_value_1 / i ;\n'
																	+'	black_value_2 = black_value_2 / i ;\n'
																	+'	black_value_3 = black_value_3 / i ;\n'
																	+'	black_value_4 = black_value_4 / i ;\n'
																	+'	black_value_5 = black_value_5 / i ;\n'
																	+'	int average_black_value = (black_value_1 + black_value_2 + black_value_3 + black_value_4 + black_value_5)/5 ;\n'
																	+'	lcd.clear() ;\n'
																	+'	lcd.setCursor(0 , 0) ;\n'
																	+'	lcd.print("Completed") ;\n'
																	+'	lcd.setCursor(0 , 1) ;\n'
																	+'	lcd.print("Average:"+String(average_black_value)) ;\n'
																	+'	while(digitalRead(self_Locking_Button_PIN)){}\n'
																	+'	lcd.clear() ;\n'
																	+'	lcd.setCursor(0 , 0) ;\n'
																	+'	lcd.print("Put the car in") ;\n'
																	+'	lcd.setCursor(0 , 1) ;\n'
																	+'	lcd.print("the white area") ;\n'
																	+'	i = 0 ;\n'
																	+'	delay(300) ;\n'
																	+'	while(!digitalRead(self_Locking_Button_PIN)){}\n'
																	+'	delay(300) ;\n'
																	+'	lcd.clear() ;\n'
																	+'	lcd.setCursor(0 , 0) ;\n'
																	+'	lcd.print("Scanning...") ;\n'
																	+'	lcd.setCursor(0 , 1) ;\n'
																	+'	lcd.print("") ;\n'
																	+'	while(i<=5000){\n'
																	+'		white_value_1 +=  analogRead(gray_L1_PIN) ;\n'
																	+'		white_value_2 +=  analogRead(gray_L2_PIN) ;\n'
																	+'		white_value_3 +=  analogRead(gray_M_PIN) ;\n'
																	+'		white_value_4 +=  analogRead(gray_R2_PIN) ;\n'
																	+'		white_value_5 +=  analogRead(gray_R1_PIN) ;\n'
																	+'		i++ ;\n'
																	+'	}\n'
																	+'	white_value_1 = white_value_1 / i ;\n'
																	+'	white_value_2 = white_value_2 / i ;\n'
																	+'	white_value_3 = white_value_3 / i ;\n'
																	+'	white_value_4 = white_value_4 / i ;\n'
																	+'	white_value_5 = white_value_5 / i ;\n'
																	+'	int average_white_value = (white_value_1 + white_value_2 + white_value_3 + white_value_4 + white_value_5)/5 ;\n'
																	+'	lcd.clear() ;\n'
																	+'	lcd.setCursor(0 , 0) ;\n'
																	+'	lcd.print("Completed") ;\n'
																	+'	lcd.setCursor(0 , 1) ;\n'
																	+'	lcd.print("Average:"+String(average_white_value)) ;\n'
																	+'	while(digitalRead(self_Locking_Button_PIN)){}\n'
																	+'	threshold_value_1 = map((black_value_1 + white_value_1)/2+((white_value_1-black_value_1)/6) , 0 , 1023 , 0 , 255);\n'
																	+'	threshold_value_2 = map((black_value_2 + white_value_2)/2+((white_value_1-black_value_1)/6) , 0 , 1023 , 0 , 255);\n'
																	+'	threshold_value_3 = map((black_value_3 + white_value_3)/2+((white_value_1-black_value_1)/6) , 0 , 1023 , 0 , 255);\n'
																	+'	threshold_value_4 = map((black_value_4 + white_value_4)/2+((white_value_1-black_value_1)/6) , 0 , 1023 , 0 , 255);\n'
																	+'	threshold_value_5 = map((black_value_5 + white_value_5)/2+((white_value_1-black_value_1)/6) , 0 , 1023 , 0 , 255);\n'
																	+'	EEPROM.write(1 , threshold_value_1) ;\n'
																	+'	EEPROM.write(2 , threshold_value_2) ;\n'
																	+'	EEPROM.write(3 , threshold_value_3) ;\n'
																	+'	EEPROM.write(4 , threshold_value_4) ;\n'
																	+'	EEPROM.write(5 , threshold_value_5) ;\n'
																	+'	average_white_value = (threshold_value_1 + threshold_value_2 + threshold_value_3 + threshold_value_4 + threshold_value_5)/5 ;\n'
																	+'	average_black_value = map(average_white_value , 0,255,0,1023) ;\n'
																	+'	lcd.clear() ;\n'
																	+'	lcd.setCursor(0 , 0) ;\n'
																	+'	lcd.print("Setup Completed") ;\n'
																	+'	lcd.setCursor(0 , 1) ;\n'
																	+'	lcd.print("Average:"+String(average_black_value)) ;\n'
																	+'	while(1) ;\n'
																	+'}\n' ;
	Blockly.Arduino.setups_['TaiMaQueen_I2C_Setup_Code'] = 'Wire.begin() ;\n' ;
	Blockly.Arduino.setups_['TaiMaQueen_1602LCD_Setup_Code'] = 	'Wire.beginTransmission(0x3f);\n'
																+'uint8_t lcd_address = 0x3F ;\n'
																+'if(Wire.endTransmission() == 0){ lcd_address = 0x3F;}\n'
																+'else{\n'
																+'	Wire.beginTransmission(0x27);\n'
																+'	if(Wire.endTransmission() == 0){lcd_address = 0x27 ;}\n'
																+'	else{\n'
																+'		Wire.beginTransmission(0x22);\n'
																+'		if(Wire.endTransmission() == 0){lcd_address = 0x22 ;}\n'
																+'	}\n'
																+'}\n'
																+'lcd.set_addr(lcd_address);\n'
																+'lcd.init() ;\n'
																+'lcd.backlight() ;\n' ;
	var code = 'TaiMaQueen_Initialize_Gray();\n'
	return code ;
}


Blockly.Arduino.TaiMaQueen_Get_Gray_Threshold_value = function() {
	Blockly.Arduino.definitions_['Define_EEPROM'] = '#include<EEPROM.h>\n'
	Blockly.Arduino.definitions_['TaiMaQueen_Define_Gray_Threshold_value'] = 'int gray_Threshold_value_1 = 0 ;\n'
																		+'int gray_Threshold_value_2 = 0 ;\n'
																		+'int gray_Threshold_value_3 = 0 ;\n'
																		+'int gray_Threshold_value_4 = 0 ;\n'
																		+'int gray_Threshold_value_5 = 0 ;\n';
	Blockly.Arduino.setups_['TaiMaQueen_Define_Gray_Threshold_value_Setup_Code'] = '	gray_Threshold_value_1 = EEPROM.read(1) ;\n'
																				+'	gray_Threshold_value_2 = EEPROM.read(2) ;\n'
																				+'	gray_Threshold_value_3 = EEPROM.read(3) ;\n'
																				+'	gray_Threshold_value_4 = EEPROM.read(4) ;\n'
																				+'	gray_Threshold_value_5 = EEPROM.read(5) ;\n'
																				+'	gray_Threshold_value_1 = map(gray_Threshold_value_1 , 0 , 255 , 0 ,1023) ;\n'
																				+'	gray_Threshold_value_2 = map(gray_Threshold_value_2 , 0 , 255 , 0 ,1023) ;\n'
																				+'	gray_Threshold_value_3 = map(gray_Threshold_value_3 , 0 , 255 , 0 ,1023) ;\n'
																				+'	gray_Threshold_value_4 = map(gray_Threshold_value_4 , 0 , 255 , 0 ,1023) ;\n' 
																				+'	gray_Threshold_value_5 = map(gray_Threshold_value_5 , 0 , 255 , 0 ,1023) ;\n' ;
	var PIN = this.getFieldValue('PIN') ;
	var code = 'gray_Threshold_value_'+PIN ;
	return [code , Blockly.Arduino.ORDER_ATOMIC] ;		
}

Blockly.Arduino.TaiMaco_Movement = function() {
	Blockly.Arduino.definitions_['TaiMaco_Movement'] = 'void Movement_Control(int left_Speed , int right_Speed , double movement_Time , boolean is_Light){\n'
													+'	left_Speed = constrain(left_Speed , -100 , 100);\n'
													+'	right_Speed = constrain(right_Speed , -100 , 100);\n'
													+'	left_Speed = map(left_Speed , -100 , 100 , -255 , 255) ;\n'
													+'	right_Speed = map(right_Speed , -100 , 100 , -255 , 255) ;\n'
													+'	if(left_Speed >= 0){\n'
													+'		digitalWrite(4 , 1) ;\n'
													+'		analogWrite(5 , left_Speed) ;\n'
													+'	}\n'
													+'	else{\n'
													+'		digitalWrite(4 , 0) ;\n'
													+'		analogWrite(5 , -left_Speed) ;\n'
													+'	} ; \n'
													+'	if(right_Speed >= 0){\n'
													+'		digitalWrite(7 , 0) ;\n'
													+'		analogWrite(6 , right_Speed) ;\n'
													+'	}\n'
													+'	else{\n'
													+'		digitalWrite(7 , 1) ;\n'
													+'		analogWrite(6 , -right_Speed) ;\n'
													+'	} ; \n'
													+'	if(movement_Time >= 0){\n'
													+'		if(is_Light){\n'
													+'			long light_Time = millis() ;\n'
													+'			while(millis()-light_Time <= (movement_Time * 1000)){\n'
													+'				if(((millis()-light_Time)/300)%2 == 0){\n'
													+'					if(left_Speed - right_Speed >= 20){\n'
													+'						Strip.setPixelColor(7, 255,255,0);\n'
													+'						Strip.show() ;\n'
													+'						Strip.setPixelColor(2, 255,255,0);\n'
													+'						Strip.show() ;\n'
													+'					}\n'
													+'					else if(left_Speed - right_Speed <= -20){\n'
													+'						Strip.setPixelColor(6, 255,255,0);\n'
													+'						Strip.show() ;\n'
													+'						Strip.setPixelColor(3, 255,255,0);\n'
													+'						Strip.show() ;\n'
													+'					}\n'
													+'				}\n'
													+'				else{\n'
													+'					Strip.setPixelColor(2, 0,0,0);\n'
													+'					Strip.show() ;\n'
													+'					Strip.setPixelColor(3, 0,0,0);\n'
													+'					Strip.show() ;\n'
													+'					Strip.setPixelColor(6, 0,0,0);\n'
													+'					Strip.show() ;\n'
													+'					Strip.setPixelColor(7, 0,0,0);\n'
													+'					Strip.show() ;\n'
													+'				}\n'
													+'			}\n'
													+'		}\n'
													+'		else{delay(movement_Time*1000) ;}\n'
													+'		digitalWrite(4 , 1) ;\n'
													+'		analogWrite(5 , 0) ;\n'
													+'		digitalWrite(7 , 1) ;\n'
													+'		analogWrite(6 , 0) ;\n'
													+'		Strip.setPixelColor(2, 0,0,0);\n'
													+'		Strip.show() ;\n'
													+'		Strip.setPixelColor(3, 0,0,0);\n'
													+'		Strip.show() ;\n'
													+'		Strip.setPixelColor(6, 0,0,0);\n'
													+'		Strip.show() ;\n'
													+'		Strip.setPixelColor(7, 0,0,0);\n'
													+'		Strip.show() ;\n'
													+'	}\n'
													+'	else{\n'
													+'		if(left_Speed - right_Speed >= 20){\n'
													+'			Strip.setPixelColor(7, 255,255,0);\n'
													+'			Strip.show() ;\n'
													+'			Strip.setPixelColor(2, 255,255,0);\n'
													+'			Strip.show() ;\n'
													+'		}\n'
													+'		else if(left_Speed - right_Speed <= -20){\n'
													+'			Strip.setPixelColor(6, 255,255,0);\n'
													+'			Strip.show() ;\n'
													+'			Strip.setPixelColor(3, 255,255,0);\n'
													+'			Strip.show() ;\n'
													+'		}\n'
													+'	}\n'
													+'}\n';
	Blockly.Arduino.definitions_['TaiMaQueen_Define_Turn_Light'] = '#include <Adafruit_NeoPixel.h>\n'
														+'Adafruit_NeoPixel Strip = Adafruit_NeoPixel(8, 13, NEO_GRB + NEO_KHZ800);\n'
	Blockly.Arduino.setups_['TaiMaQueen_Define_Turn_Light_Setup_Code'] = '  Strip.begin();\n'
																+'  Strip.show();\n';
	Blockly.Arduino.setups_['TaiMaco_Define_Machinery_Setup_Code'] = '	pinMode(4 , OUTPUT) ;\n'
																		+'	pinMode(5 , OUTPUT) ;\n'
																		+'	pinMode(6 , OUTPUT) ;\n'
																		+'	pinMode(7 , OUTPUT) ;\n';
	var movement_Time = 0;
	if((this.getFieldValue('MT') == "TRUE") ? 1 : 0){
		movement_Time = Blockly.Arduino.valueToCode(this, 'movement_Time', Blockly.Arduino.ORDER_ATOMIC) || '0';
	}
	else{
		movement_Time = -1;
	}
	var is_Light = (this.getFieldValue('is_Light') == "TRUE") ? 1 : 0 ;
	var left_Speed = Blockly.Arduino.valueToCode(this, 'left_Speed', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var right_Speed = Blockly.Arduino.valueToCode(this, 'right_Speed', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var code = 'Movement_Control('+left_Speed+','+right_Speed+','+movement_Time+','+is_Light+');\n' ;
	return code ;
}

Blockly.Arduino.TaiMaco_Set_PWM = function() {
	Blockly.Arduino.definitions_['TaiMaco_Define_PWM_Function'] = 'void Set_PWM(int pwm_Num , int pwm){\n'
														+'	pwm = constrain(pwm , -100 , 100);\n'
														+'	pwm = map(pwm , -100 , 100 , -255 , 255) ;\n'
														+'	switch(pwm_Num){\n'
														+'		case 1 : if(pwm >= 0){\n'
														+'					digitalWrite(4 , 1) ;\n'
														+'					analogWrite(5 , pwm) ;\n'
														+'				}\n'
														+'				else{\n'
														+'					digitalWrite(4 , 0) ;\n'
														+'					analogWrite(5 , -pwm) ;\n'
														+'				} ; break ;\n'
														+'		case 2 : if(pwm >= 0){\n'
														+'					digitalWrite(7 , 0) ;\n'
														+'					analogWrite(6 , pwm) ;\n'
														+'				}\n'
														+'				else{\n'
														+'					digitalWrite(7 , 1) ;\n'
														+'					analogWrite(6 , -pwm) ;\n'
														+'				} ; break ;\n'
														+'	}\n'
														+'}\n'
	Blockly.Arduino.setups_['TaiMaco_Define_Machinery_Setup_Code'] = '	pinMode(4 , OUTPUT) ;\n'
																		+'	pinMode(5 , OUTPUT) ;\n'
																		+'	pinMode(6 , OUTPUT) ;\n'
																		+'	pinMode(7 , OUTPUT) ;\n';
	var PIN = this.getFieldValue('PIN') ;
	var pwm=Blockly.Arduino.valueToCode(this, 'speed', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var code = 'Set_PWM('+PIN+','+pwm+');\n' ;
	return code ;
}

Blockly.Arduino.TaiMaco_Start_Notes = function() {
	Blockly.Arduino.setups_['TaiMaco_Buzzer_Setup_Code'] = 'pinMode(8 , OUTPUT) ;\n' ;
	var STATE = this.getFieldValue('STATE') ;
	var time=Blockly.Arduino.valueToCode(this, 'time', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var code = 'tone(8,'+STATE+'); delay('+time+'*1000) ;noTone(8) ;\n' ;
	return code ;
}

Blockly.Arduino.TaiMaco_Start_Notes_Beats = function() {
	Blockly.Arduino.setups_['TaiMaco_Buzzer_Setup_Code'] = 'pinMode(8 , OUTPUT) ;\n' ;
	var STATE = this.getFieldValue('STATE') ;
	var note = this.getFieldValue('note') ;
	var code = 'tone(8,'+STATE+'); delay('+note+'*250) ;noTone(8) ;\n' ;
	return code ;
}

Blockly.Arduino.TaiMaco_Start_Buzzer = function() {
	Blockly.Arduino.setups_['TaiMaco_Buzzer_Setup_Code'] = 'pinMode(8 , OUTPUT) ;\n' ;
	var frequency=Blockly.Arduino.valueToCode(this, 'frequency', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var code = 'tone(8,'+frequency+');\n' ;
	return code ;
}

Blockly.Arduino.TaiMaco_Stop_Buzzer = function() {
	Blockly.Arduino.setups_['TaiMaco_Buzzer_Setup_Code'] = 'pinMode(8 , OUTPUT) ;\n' ;
	var code = 'noTone(8);\n' ;
	return code ;
}


Blockly.Arduino.TaiMaco_Sound = function(){
	Blockly.Arduino.definitions_['TaiMaco_Define_DFRobotDFPlayerMini'] = '#include "DFRobotDFPlayerMini.h"\n'
																	+'DFRobotDFPlayerMini myDFPlayer;\n';
	Blockly.Arduino.definitions_['TaiMaco_Define_SoftwareSerial'] = '#include <SoftwareSerial.h>\n'
	Blockly.Arduino.definitions_['TaiMaco_Define_MP3_SoftwareSerial'] = 'SoftwareSerial MP3Serial(3,2); \n'
	Blockly.Arduino.setups_['TaiMaco_Define_Mp3_Setup_Code'] = 'MP3Serial.begin(9600) ;\n'
																  +'Serial.begin(115200);\n'
																  +'Serial.println();\n'
																  +'Serial.println(F("DFRobot DFPlayer Mini Demo"));\n'
																  +'Serial.println(F("Initializing DFPlayer ... (May take 3~5 seconds)"));\n'
																  +'if (!myDFPlayer.begin(MP3Serial)) {\n'
																+'	Serial.println(F("Unable to begin:"));\n'
																+'	Serial.println(F("1.Please recheck the connection!"));\n'
																+'	Serial.println(F("2.Please insert the SD card!"));\n'
																+'// 	while(true);\n'
																+'  }\n'
																+'  Serial.println(F("DFPlayer Mini online."));\n'
																+'  myDFPlayer.volume(30);\n';
	var sound_num = Blockly.Arduino.valueToCode(this, 'sound_num', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var code = 'myDFPlayer.play('+sound_num+');\n' ;
	return code ;
}


Blockly.Arduino.TaiMaco_Light_Control = function() {
	Blockly.Arduino.definitions_['TaiMaQueen_Define_Turn_Light'] = '#include <Adafruit_NeoPixel.h>\n'
														+'Adafruit_NeoPixel Strip = Adafruit_NeoPixel(8, 13, NEO_GRB + NEO_KHZ800);\n'
	Blockly.Arduino.definitions_['TaiMaco_Define_Light_Control_Function'] = 'void Light_Control(int turnlight_PIN , int R , int G , int B){\n'
																+'	switch(turnlight_PIN){\n'
																+'		case 1 : Strip.setPixelColor(6, R,G,B);Strip.show() ; break ;\n'
																+'		case 2 : Strip.setPixelColor(7, R,G,B);Strip.show() ; break ;\n'
																+'		case 3 : Strip.setPixelColor(3, R,G,B);Strip.show() ; break ;\n'
																+'		case 4 : Strip.setPixelColor(2, R,G,B);Strip.show() ; break ;\n'
																+'		case 5 : Strip.setPixelColor(0, R,G,B);Strip.setPixelColor(1, R,G,B);Strip.setPixelColor(4, R,G,B);Strip.setPixelColor(5, R,G,B);Strip.show() ; break ;\n'
																+'	}\n'
																+'}\n';
	Blockly.Arduino.setups_['TaiMaQueen_Define_Turn_Light_Setup_Code'] = '  Strip.begin();\n'
																+'  Strip.show();\n';
	var PIN = this.getFieldValue('PIN') ;
	var colour_rgb_led_color = this.getFieldValue('RGB_LED_COLOR');
	var color = goog.color.hexToRgb(colour_rgb_led_color);
	var code = 'Light_Control('+PIN+','+color+');\n' ;
	return code ;
}


Blockly.Arduino.TaiMaco_Turn_Light = function() {
	Blockly.Arduino.definitions_['TaiMaQueen_Define_Turn_Light'] = '#include <Adafruit_NeoPixel.h>\n'
														+'Adafruit_NeoPixel Strip = Adafruit_NeoPixel(8, 13, NEO_GRB + NEO_KHZ800);\n'
	Blockly.Arduino.definitions_['TaiMaco_Define_Turn_Light_Function'] = 'void turnlight(int turnlight_PIN , int R , int G , int B){\n'
																+'	switch(turnlight_PIN){\n'
																+'		case 1 : Strip.setPixelColor(6, R,G,B);Strip.show() ; break ;\n'
																+'		case 2 : Strip.setPixelColor(7, R,G,B);Strip.show() ; break ;\n'
																+'		case 3 : Strip.setPixelColor(3, R,G,B);Strip.show() ; break ;\n'
																+'		case 4 : Strip.setPixelColor(2, R,G,B);Strip.show() ; break ;\n'
																+'		case 5 : Strip.setPixelColor(0, R,G,B);Strip.setPixelColor(1, R,G,B);Strip.setPixelColor(4, R,G,B);Strip.setPixelColor(5, R,G,B);Strip.show() ; break ;\n'
																+'	}\n'
																+'}\n';
	Blockly.Arduino.setups_['TaiMaQueen_Define_Turn_Light_Setup_Code'] = '  Strip.begin();\n'
																+'  Strip.show();\n';
	var PIN = this.getFieldValue('PIN') ;
	var R=Blockly.Arduino.valueToCode(this, 'R', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var G=Blockly.Arduino.valueToCode(this, 'G', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var B=Blockly.Arduino.valueToCode(this, 'B', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var code = 'turnlight('+PIN+','+R+','+G+','+B+');\n' ;
	return code ;
}

Blockly.Arduino.TaiMaco_Infrared = function() {
	Blockly.Arduino.definitions_['TaiMaco_Define_Infrared_Function'] = 'int Infrared(int state){\n'
															+'	switch(state){\n'
															+'		case 1 : return analogRead(A1) ; break ;\n'
															+'		case 2 : return analogRead(A0) ; break ;\n'
															+'	}\n'
															+'}\n';
	var state = this.getFieldValue('state') ;
	var code = 'Infrared('+state+')' ;
	return [code , Blockly.Arduino.ORDER_ATOMIC] ;	
}


Blockly.Arduino.TaiMaco_Gray = function() {
	Blockly.Arduino.definitions_['TaiMaco_Define_Gray_Function'] = 'int Gray(int PIN){\n'
															+'	switch(PIN){\n'
															+'		case 1 : return analogRead(A2) ; break ;\n'
															+'		case 2 : return analogRead(A3) ; break ;\n'
															+'		case 3 : return analogRead(A6) ; break ;\n'
															+'		case 4 : return analogRead(A7) ; break ;\n'
															+'	}\n'
															+'}\n';
	var PIN = this.getFieldValue('PIN') ;
	var code = 'Gray('+PIN+')' ;
	return [code , Blockly.Arduino.ORDER_ATOMIC] ;	
}


Blockly.Arduino.TaiMaco_Ultrasonic = function() {
	Blockly.Arduino.definitions_['TaiMaco_Define_Ultrasonic_Function'] = 'double Ultrasonic(){\n'
																	+'  double distance = 0 ;\n'
																	+'  digitalWrite(12, LOW);\n'
																	+'  delayMicroseconds(2);\n'
																	+'  digitalWrite(12, HIGH);\n'
																	+'  delayMicroseconds(10);\n'
																	+'  digitalWrite(12, LOW);\n'
																	+'  distance = pulseIn(11, HIGH) / 58.00;\n'
																	+'  return distance ;\n'
																	+'}\n' ;
	Blockly.Arduino.setups_['TaiMaco_Ultrasonic_Setup_Code'] = 'pinMode(12, OUTPUT);\n'
																	+'pinMode(11, INPUT);\n'
	var code = 'Ultrasonic()' ;
	return [code , Blockly.Arduino.ORDER_ATOMIC] ;	
}


Blockly.Arduino.TaiMaco_Self_Locking_Button = function() {
	var code = 'digitalRead(9)' ;
	return [code , Blockly.Arduino.ORDER_ATOMIC] ;	
}


Blockly.Arduino.TaiMaco_IR_Control = function() {
    var variable = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    Blockly.Arduino.definitions_['var_declare' + variable] = 'long ' + variable + ';';
	Blockly.Arduino.definitions_['define_TaiMaco_IR_config'] = '#include <IRremote.h>';
	Blockly.Arduino.definitions_['var_ir_recv_PIN_INFRARED'] = 'IRrecv IR_irrecv(10);\n decode_results IR_results;\n ';
    Blockly.Arduino.setups_['setup_ir_recv_PIN_INFRARED'] = 'IR_irrecv.enableIRIn();';
	var variable = Blockly.Arduino.variableDB_.getName(this.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
	var branch = Blockly.Arduino.statementToCode(this, 'DO');
	var code="if (IR_irrecv.decode(&IR_results)) {\n"
    code += '  '+variable+'=IR_results.value;\n';
    code += branch;
    code +='  IR_irrecv.resume();\n'
    code +='}\n';
    return code;
}

Blockly.Arduino.TaiMaco_Initialize_Gray = function() {
	Blockly.Arduino.definitions_['Define_EEPROM'] = '#include<EEPROM.h>\n'
	Blockly.Arduino.definitions_['TaiMaQueen_Define_I2C'] = '#include<Wire.h>\n' ;
	Blockly.Arduino.definitions_['TaiMaQueen_Define_Matrix'] = '#include <Adafruit_GFX.h>\n'
																	+'#include "Adafruit_LEDBackpack.h"\n';
	Blockly.Arduino.definitions_['TaiMaQueen_Define_8_16_Matrix']='Adafruit_8x16minimatrix matrix = Adafruit_8x16minimatrix();\n';
	Blockly.Arduino.definitions_['TaiMaQueen_Define_clear_Array'] = 'uint8_t  clear_Array[8] = {0x00 , 0x00 , 0x00 , 0x00 , 0x00 , 0x00 , 0x00 , 0x00} ;\n' ;
	Blockly.Arduino.definitions_['TaiMaQueen_Define_char_Show_Array'] = 'uint8_t numb_Show_1[8]={0x00,0x00,0x42,0xfe,0x02,0x00,0x00,0x00} ;\n' 
																	+'uint8_t numb_Show_2[8]={0x00,0x42,0x86,0x8a,0x92,0x62,0x00,0x00};\n'
																	+'uint8_t numb_Show_3[8]={0x00,0x84,0x82,0xa2,0xd2,0x8c,0x00,0x00};\n'
																	+'uint8_t numb_Show_4[8]={0x00,0x18,0x28,0x48,0xfe,0x08,0x00,0x00};\n'
																	+'uint8_t numb_Show_5[8]={0x00,0xe4,0xa2,0xa2,0xa2,0x9c,0x00,0x00};\n'
																	+'uint8_t numb_Show_6[8]={0x00,0x3c,0x52,0x92,0x92,0x0c,0x00,0x00};\n'
																	+'uint8_t numb_Show_7[8]={0x00,0x80,0x8e,0x90,0xa0,0xc0,0x00,0x00};\n'
																	+'uint8_t numb_Show_8[8]={0x00,0x6c,0x92,0x92,0x92,0x6c,0x00,0x00};\n'
																	+'uint8_t numb_Show_9[8]={0x00,0x60,0x92,0x92,0x94,0x78,0x00,0x00};\n'
																	+'uint8_t numb_Show_0[8]={0x00,0x7c,0x8a,0x92,0xa2,0x7c,0x00,0x00};\n' 
																	+'uint8_t char_Show_A[8]={0x00,0x7e,0x88,0x88,0x88,0x7e,0x00,0x00};\n'
																	+'uint8_t char_Show_B[8]={0x00,0xfe,0x92,0x92,0x92,0x6c,0x00,0x00};\n'
																	+'uint8_t char_Show_C[8]={0x00,0x7c,0x82,0x82,0x82,0x44,0x00,0x00};\n'
																	+'uint8_t char_Show_D[8]={0x00,0xfe,0x82,0x82,0x44,0x38,0x00,0x00};\n'
																	+'uint8_t char_Show_E[8]={0x00,0xfe,0x92,0x92,0x92,0x82,0x00,0x00};\n'
																	+'uint8_t char_Show_F[8]={0x00,0xfe,0x90,0x90,0x90,0x80,0x00,0x00};\n'
																	+'uint8_t char_Show_G[8]={0x00,0x7c,0x82,0x92,0x92,0x5e,0x00,0x00};\n'
																	+'uint8_t char_Show_H[8]={0x00,0xfe,0x10,0x10,0x10,0xfe,0x00,0x00};\n'
																	+'uint8_t char_Show_I[8]={0x00,0x00,0x82,0xfe,0x82,0x00,0x00,0x00};\n'
																	+'uint8_t char_Show_J[8]={0x00,0x04,0x02,0x82,0xfc,0x80,0x00,0x00};\n'
																	+'uint8_t char_Show_K[8]={0x00,0xfe,0x10,0x28,0x44,0x82,0x00,0x00};\n'
																	+'uint8_t char_Show_L[8]={0x00,0xfe,0x02,0x02,0x02,0x02,0x00,0x00};\n'
																	+'uint8_t char_Show_M[8]={0x00,0xfe,0x40,0x30,0x40,0xfe,0x00,0x00};\n'
																	+'uint8_t char_Show_N[8]={0x00,0xfe,0x20,0x10,0x08,0xfe,0x00,0x00};\n'
																	+'uint8_t char_Show_O[8]={0x00,0x7c,0x82,0x82,0x82,0x7c,0x00,0x00};\n'
																	+'uint8_t char_Show_P[8]={0x00,0xfe,0x90,0x90,0x90,0x60,0x00,0x00};\n'
																	+'uint8_t char_Show_Q[8]={0x00,0x7c,0x82,0x8a,0x84,0x7a,0x00,0x00};\n'
																	+'uint8_t char_Show_R[8]={0x00,0xfe,0x90,0x98,0x94,0x62,0x00,0x00};\n'
																	+'uint8_t char_Show_S[8]={0x00,0x62,0x92,0x92,0x92,0x8c,0x00,0x00};\n'
																	+'uint8_t char_Show_T[8]={0x00,0x80,0x80,0xfe,0x80,0x80,0x00,0x00};\n'
																	+'uint8_t char_Show_U[8]={0x00,0xfc,0x02,0x02,0x02,0xfc,0x00,0x00};\n'
																	+'uint8_t char_Show_V[8]={0x00,0xf8,0x04,0x02,0x04,0xf8,0x00,0x00};\n'
																	+'uint8_t char_Show_W[8]={0x00,0xfc,0x02,0x1c,0x02,0xfc,0x00,0x00};\n'
																	+'uint8_t char_Show_X[8]={0x00,0xc6,0x28,0x10,0x28,0xc6,0x00,0x00};\n'
																	+'uint8_t char_Show_Y[8]={0x00,0xe0,0x10,0x0e,0x10,0xe0,0x00,0x00};\n'
																	+'uint8_t char_Show_Z[8]={0x00,0x86,0x8a,0x92,0xa2,0xc2,0x00,0x00};\n';
	Blockly.Arduino.setups_['TaiMaQueen_Setup_8_16_Matrix'] = '  matrix.begin(0x70);\n'
															+'	matrix.drawBitmap(0, 0, clear_Array, 8, 8, LED_ON);\n'
															+'	matrix.writeDisplay();\n'
															+'  matrix.drawBitmap(0, 8, clear_Array, 8, 8, LED_ON);\n'
															+'	matrix.writeDisplay();\n' ;
	Blockly.Arduino.definitions_['Define_Initialize_Gray_Function'] = 'void TaiMaco_Initialize_Gray(){\n'
																	+'	int threshold_value_1 = 255 ;\n'
																	+'	int threshold_value_2 = 255 ;\n'
																	+'	int threshold_value_3 = 255 ;\n'
																	+'	int threshold_value_4 = 255 ;\n'
																	+'	long black_value_1 = 0 ;\n'
																	+'	long black_value_2 = 0 ;\n'
																	+'	long black_value_3 = 0 ;\n'
																	+'	long black_value_4 = 0 ;\n'
																	+'	long white_value_1 = 0 ;\n'
																	+'	long white_value_2 = 0 ;\n'
																	+'	long white_value_3 = 0 ;\n'
																	+'	long white_value_4 = 0 ;\n'
																	+'	matrix.clear();\n'
																	+'	matrix.drawBitmap(0, 0, char_Show_B, 8, 8, LED_ON);\n'
																	+'	matrix.drawBitmap(0, 8, numb_Show_0, 8, 8, LED_ON);\n'
																	+'	matrix.writeDisplay();\n'
																	+'	long i = 0 ; \n'
																	+'	delay(300) ;\n'
																	+'	while(!digitalRead(9)){}\n'
																	+'	delay(300) ;\n'
																	+'	long scan_Time_Initial = 0 ;\n'
																	+'	int scan_Time_sec = 0 ;\n'
																	+'	while(digitalRead(9)){\n'
																	+'		while(scan_Time_sec < 5){\n'
																	+'			scan_Time_Initial = millis() ;\n'
																	+'			while(millis()-scan_Time_Initial <= 1000){\n'
																	+'				black_value_1 +=  analogRead(A2) ;\n'
																	+'				black_value_2 +=  analogRead(A3) ;\n'
																	+'				black_value_3 +=  analogRead(A6) ;\n'
																	+'				black_value_4 +=  analogRead(A7) ;\n'
																	+'				i++ ;\n'
																	+'			}\n'
																	+'			scan_Time_sec++ ;\n'
																	+'			matrix.clear();\n'
																	+'			switch(scan_Time_sec){\n'
																	+'				case 0 : matrix.drawBitmap(0, 0, char_Show_B, 8, 8, LED_ON); matrix.drawBitmap(0, 8, numb_Show_0, 8, 8, LED_ON); break ;\n'
																	+'				case 1 : matrix.drawBitmap(0, 0, char_Show_B, 8, 8, LED_ON); matrix.drawBitmap(0, 8, numb_Show_1, 8, 8, LED_ON); break ;\n'
																	+'				case 2 : matrix.drawBitmap(0, 0, char_Show_B, 8, 8, LED_ON); matrix.drawBitmap(0, 8, numb_Show_2, 8, 8, LED_ON); break ;\n'
																	+'				case 3 : matrix.drawBitmap(0, 0, char_Show_B, 8, 8, LED_ON); matrix.drawBitmap(0, 8, numb_Show_3, 8, 8, LED_ON); break ;\n'
																	+'				case 4 : matrix.drawBitmap(0, 0, char_Show_B, 8, 8, LED_ON); matrix.drawBitmap(0, 8, numb_Show_4, 8, 8, LED_ON); break ;\n'
																	+'				case 5 : matrix.drawBitmap(0, 0, char_Show_B, 8, 8, LED_ON); matrix.drawBitmap(0, 8, numb_Show_5, 8, 8, LED_ON); break ;\n'
																	+'			}\n'
																	+'			matrix.writeDisplay();\n'
																	+'		}\n'
																	+'	}\n'
																	+'	black_value_1 = black_value_1 / i ;\n'
																	+'	black_value_2 = black_value_2 / i ;\n'
																	+'	black_value_3 = black_value_3 / i ;\n'
																	+'	black_value_4 = black_value_4 / i ;\n'
																	+'	matrix.clear();\n'
																	+'	matrix.drawBitmap(0, 0, char_Show_W, 8, 8, LED_ON);\n'
																	+'	matrix.writeDisplay();\n'
																	+'	matrix.drawBitmap(0, 8, numb_Show_0, 8, 8, LED_ON);\n'
																	+'	matrix.writeDisplay();\n'
																	+'	i = 0 ;\n'
																	+'	delay(300) ;\n'
																	+'	while(!digitalRead(9)){}\n'
																	+'	delay(300) ;\n'
																	+'	scan_Time_Initial = 0 ;\n'
																	+'	scan_Time_sec = 0 ;\n'
																	+'	while(digitalRead(9)){\n'
																	+'		while(scan_Time_sec < 5){\n'
																	+'			scan_Time_Initial = millis() ;\n'
																	+'			while(millis()-scan_Time_Initial <= 1000){\n'
																	+'				white_value_1 +=  analogRead(A2) ;\n'
																	+'				white_value_2 +=  analogRead(A3) ;\n'
																	+'				white_value_3 +=  analogRead(A6) ;\n'
																	+'				white_value_4 +=  analogRead(A7) ;\n'
																	+'				i++ ;\n'
																	+'			}\n'
																	+'			scan_Time_sec++ ;\n'
																	+'			matrix.clear();\n'
																	+'			switch(scan_Time_sec){\n'
																	+'				case 0 : matrix.drawBitmap(0, 0, char_Show_W, 8, 8, LED_ON); matrix.drawBitmap(0, 8, numb_Show_0, 8, 8, LED_ON); break ;\n'
																	+'				case 1 : matrix.drawBitmap(0, 0, char_Show_W, 8, 8, LED_ON); matrix.drawBitmap(0, 8, numb_Show_1, 8, 8, LED_ON); break ;\n'
																	+'				case 2 : matrix.drawBitmap(0, 0, char_Show_W, 8, 8, LED_ON); matrix.drawBitmap(0, 8, numb_Show_2, 8, 8, LED_ON); break ;\n'
																	+'				case 3 : matrix.drawBitmap(0, 0, char_Show_W, 8, 8, LED_ON); matrix.drawBitmap(0, 8, numb_Show_3, 8, 8, LED_ON); break ;\n'
																	+'				case 4 : matrix.drawBitmap(0, 0, char_Show_W, 8, 8, LED_ON); matrix.drawBitmap(0, 8, numb_Show_4, 8, 8, LED_ON); break ;\n'
																	+'				case 5 : matrix.drawBitmap(0, 0, char_Show_W, 8, 8, LED_ON); matrix.drawBitmap(0, 8, numb_Show_5, 8, 8, LED_ON); break ;\n'
																	+'			}\n'
																	+'			matrix.writeDisplay();\n'
																	+'		}\n'
																	+'	}\n'
																	+'	white_value_1 = white_value_1 / i ;\n'
																	+'	white_value_2 = white_value_2 / i ;\n'
																	+'	white_value_3 = white_value_3 / i ;\n'
																	+'	white_value_4 = white_value_4 / i ;\n'
																	+'	threshold_value_1 = map((black_value_1 + white_value_1)/2-(black_value_1 - white_value_1)/6 , 0 , 1023 , 0 , 255);\n'
																	+'	threshold_value_2 = map((black_value_2 + white_value_2)/2-(black_value_2 - white_value_2)/6 , 0 , 1023 , 0 , 255);\n'
																	+'	threshold_value_3 = map((black_value_3 + white_value_3)/2-(black_value_3 - white_value_3)/6 , 0 , 1023 , 0 , 255);\n'
																	+'	threshold_value_4 = map((black_value_4 + white_value_4)/2-(black_value_4 - white_value_4)/6 , 0 , 1023 , 0 , 255);\n'
																	+'	EEPROM.write(1 , threshold_value_1) ;\n'
																	+'	EEPROM.write(2 , threshold_value_2) ;\n'
																	+'	EEPROM.write(3 , threshold_value_3) ;\n'
																	+'	EEPROM.write(4 , threshold_value_4) ;\n'
																	+'	matrix.clear();\n'
																	+'	matrix.drawBitmap(0, 0, char_Show_O, 8, 8, LED_ON);\n'
																	+'	matrix.writeDisplay();\n'
																	+'	matrix.drawBitmap(0, 8, char_Show_K, 8, 8, LED_ON);\n'
																	+'	matrix.writeDisplay();\n'
																	+'	while(1) ;\n'
																	+'}\n' ;
	var code = 'TaiMaco_Initialize_Gray();\n'
	return code ;
}

Blockly.Arduino.TaiMaco_Get_Gray_Threshold_value = function() {
	Blockly.Arduino.definitions_['Define_EEPROM'] = '#include<EEPROM.h>\n'
	Blockly.Arduino.definitions_['TaiMaco_Define_Gray_Threshold_value'] = 'int gray_Threshold_value_1 = 0 ;\n'
																		+'int gray_Threshold_value_2 = 0 ;\n'
																		+'int gray_Threshold_value_3 = 0 ;\n'
																		+'int gray_Threshold_value_4 = 0 ;\n';
	Blockly.Arduino.setups_['TaiMaco_Define_Gray_Threshold_value_Setup_Code'] = '	gray_Threshold_value_1 = EEPROM.read(1) ;\n'
																				+'	gray_Threshold_value_2 = EEPROM.read(2) ;\n'
																				+'	gray_Threshold_value_3 = EEPROM.read(3) ;\n'
																				+'	gray_Threshold_value_4 = EEPROM.read(4) ;\n'
																				+'	gray_Threshold_value_1 = map(gray_Threshold_value_1 , 0 , 255 , 0 ,1023) ;\n'
																				+'	gray_Threshold_value_2 = map(gray_Threshold_value_2 , 0 , 255 , 0 ,1023) ;\n'
																				+'	gray_Threshold_value_3 = map(gray_Threshold_value_3 , 0 , 255 , 0 ,1023) ;\n'
																				+'	gray_Threshold_value_4 = map(gray_Threshold_value_4 , 0 , 255 , 0 ,1023) ;\n' ;
	var PIN = this.getFieldValue('PIN') ;
	var code = 'gray_Threshold_value_'+PIN ;
	return [code , Blockly.Arduino.ORDER_ATOMIC] ;		
}
Blockly.Arduino.TaiMaco_Gray_Condition = function() {
	Blockly.Arduino.definitions_['Define_EEPROM'] = '#include<EEPROM.h>\n'
	Blockly.Arduino.definitions_['TaiMaco_Define_Gray_Threshold_value'] = 'int gray_Threshold_value_1 = 0 ;\n'
																		+'int gray_Threshold_value_2 = 0 ;\n'
																		+'int gray_Threshold_value_3 = 0 ;\n'
																		+'int gray_Threshold_value_4 = 0 ;\n';
	Blockly.Arduino.definitions_['TaiMaco_Define_PWM_Function'] = 'void Set_PWM(int pwm_Num , int pwm){\n'
														+'	pwm = constrain(pwm , -100 , 100);\n'
														+'	pwm = map(pwm , -100 , 100 , -255 , 255) ;\n'
														+'	switch(pwm_Num){\n'
														+'		case 1 : if(pwm >= 0){\n'
														+'					digitalWrite(4 , 1) ;\n'
														+'					analogWrite(5 , pwm) ;\n'
														+'				}\n'
														+'				else{\n'
														+'					digitalWrite(4 , 0) ;\n'
														+'					analogWrite(5 , -pwm) ;\n'
														+'				} ; break ;\n'
														+'		case 2 : if(pwm >= 0){\n'
														+'					digitalWrite(7 , 0) ;\n'
														+'					analogWrite(6 , pwm) ;\n'
														+'				}\n'
														+'				else{\n'
														+'					digitalWrite(7 , 1) ;\n'
														+'					analogWrite(6 , -pwm) ;\n'
														+'				} ; break ;\n'
														+'	}\n'
														+'}\n';
	Blockly.Arduino.definitions_['TaiMaco_Define_Gray_Line_Function'] = 'void Gray_Line(int speed_PWM){\n'
														+'	boolean turn_flag_l = false ;\n'
														+'	boolean turn_flag_r = false ;\n'
														+'	speed_PWM = constrain(speed_PWM , 0 , 255);\n'
														+'	if(analogRead(2) <= gray_Threshold_value_1){Set_PWM(1 , -speed_PWM) ;Set_PWM(2 , speed_PWM) ;delay(70) ; turn_flag_l = true ;}\n'
														+'	else if(analogRead(7) <= gray_Threshold_value_4){Set_PWM(1 , speed_PWM) ;Set_PWM(2 , -speed_PWM) ;delay(70) ;  turn_flag_r = true ;}\n'
														+'	else if(analogRead(3) <= gray_Threshold_value_2){Set_PWM(1 , 0) ;Set_PWM(2 , speed_PWM) ; turn_flag_l = false ;}\n'
														+'	else if(analogRead(6) <= gray_Threshold_value_3){Set_PWM(1 , speed_PWM) ;Set_PWM(2 , 0) ; turn_flag_r = false ;}\n'
														+'	else if(!(turn_flag_l||turn_flag_r)){Set_PWM(1 , speed_PWM) ;Set_PWM(2 , speed_PWM) ;}\n'
														+'}\n';
	Blockly.Arduino.setups_['TaiMaco_Define_Gray_Threshold_value_Setup_Code'] = '	gray_Threshold_value_1 = EEPROM.read(1) ;\n'
																				+'	gray_Threshold_value_2 = EEPROM.read(2) ;\n'
																				+'	gray_Threshold_value_3 = EEPROM.read(3) ;\n'
																				+'	gray_Threshold_value_4 = EEPROM.read(4) ;\n'
																				+'	gray_Threshold_value_1 = map(gray_Threshold_value_1 , 0 , 255 , 0 ,1023) ;\n'
																				+'	gray_Threshold_value_2 = map(gray_Threshold_value_2 , 0 , 255 , 0 ,1023) ;\n'
																				+'	gray_Threshold_value_3 = map(gray_Threshold_value_3 , 0 , 255 , 0 ,1023) ;\n'
																				+'	gray_Threshold_value_4 = map(gray_Threshold_value_4 , 0 , 255 , 0 ,1023) ;\n' ;
	Blockly.Arduino.setups_['TaiMaco_Define_Machinery_Setup_Code'] = '	pinMode(4 , OUTPUT) ;\n'
																		+'	pinMode(5 , OUTPUT) ;\n'
																		+'	pinMode(6 , OUTPUT) ;\n'
																		+'	pinMode(7 , OUTPUT) ;\n';
	var order = Blockly.Arduino.ORDER_UNARY_PREFIX;
	var argument0 = Blockly.Arduino.valueToCode(this, 'BOOL', order) || 'false';
	var pwm=Blockly.Arduino.valueToCode(this, 'speed', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var code = '	while(!'+argument0+'){Gray_Line('+pwm+');}\n'
				+'	Set_PWM(1,0) ;Set_PWM(2 , 0) ;\n' ;
	return code ;
}
Blockly.Arduino.TaiMaco_Gray_Time = function() {
	Blockly.Arduino.definitions_['Define_EEPROM'] = '#include<EEPROM.h>\n'
	Blockly.Arduino.definitions_['TaiMaco_Define_Gray_Threshold_value'] = 'int gray_Threshold_value_1 = 0 ;\n'
																		+'int gray_Threshold_value_2 = 0 ;\n'
																		+'int gray_Threshold_value_3 = 0 ;\n'
																		+'int gray_Threshold_value_4 = 0 ;\n';
	Blockly.Arduino.definitions_['TaiMaco_Define_PWM_Function'] = 'void Set_PWM(int pwm_Num , int pwm){\n'
														+'	pwm = constrain(pwm , -100 , 100);\n'
														+'	pwm = map(pwm , -100 , 100 , -255 , 255) ;\n'
														+'	switch(pwm_Num){\n'
														+'		case 1 : if(pwm >= 0){\n'
														+'					digitalWrite(4 , 1) ;\n'
														+'					analogWrite(5 , pwm) ;\n'
														+'				}\n'
														+'				else{\n'
														+'					digitalWrite(4 , 0) ;\n'
														+'					analogWrite(5 , -pwm) ;\n'
														+'				} ; break ;\n'
														+'		case 2 : if(pwm >= 0){\n'
														+'					digitalWrite(7 , 0) ;\n'
														+'					analogWrite(6 , pwm) ;\n'
														+'				}\n'
														+'				else{\n'
														+'					digitalWrite(7 , 1) ;\n'
														+'					analogWrite(6 , -pwm) ;\n'
														+'				} ; break ;\n'
														+'	}\n'
														+'}\n';
	Blockly.Arduino.definitions_['TaiMaco_Define_Gray_Line_Time_Function'] = 'void Gray_Line_Time(int speed_PWM , double get_Time){\n'
														+'	boolean turn_flag_l = false ;\n'
														+'	boolean turn_flag_r = false ;\n'
														+'	get_Time = get_Time * 1000 ;\n'
														+'	if(get_Time<=0) get_Time = 0 ;\n'
														+'	speed_PWM = constrain(speed_PWM , 0 , 255) ;\n'
														+'	long count_Time = millis() ;\n'
														+'	while(millis() - count_Time <= get_Time){\n'
														+'		if(analogRead(2) <= gray_Threshold_value_1){Set_PWM(1 , -speed_PWM) ;Set_PWM(2 , speed_PWM) ;delay(70) ; turn_flag_l = true ;}\n'
														+'		else if(analogRead(7) <= gray_Threshold_value_4){Set_PWM(1 , speed_PWM) ;Set_PWM(2 , -speed_PWM) ;delay(70) ;  turn_flag_r = true ;}\n'
														+'		else if(analogRead(3) <= gray_Threshold_value_2){Set_PWM(1 , 0) ;Set_PWM(2 , speed_PWM) ; turn_flag_l = false ;}\n'
														+'		else if(analogRead(6) <= gray_Threshold_value_3){Set_PWM(1 , speed_PWM) ;Set_PWM(2 , 0) ; turn_flag_r = false ;}\n'
														+'		else if(!(turn_flag_l||turn_flag_r)){Set_PWM(1 , speed_PWM) ;Set_PWM(2 , speed_PWM) ;}\n'
														+'	}\n'
														+'	Set_PWM(1 , -100) ;Set_PWM(2 , -100) ;\n'
														+'	delay(10) ;\n'
														+'	Set_PWM(1 , 0) ;Set_PWM(2 , 0) ;\n'
														+'}\n';
	Blockly.Arduino.setups_['TaiMaco_Define_Gray_Threshold_value_Setup_Code'] = '	gray_Threshold_value_1 = EEPROM.read(1) ;\n'
																				+'	gray_Threshold_value_2 = EEPROM.read(2) ;\n'
																				+'	gray_Threshold_value_3 = EEPROM.read(3) ;\n'
																				+'	gray_Threshold_value_4 = EEPROM.read(4) ;\n'
																				+'	gray_Threshold_value_1 = map(gray_Threshold_value_1 , 0 , 255 , 0 ,1023) ;\n'
																				+'	gray_Threshold_value_2 = map(gray_Threshold_value_2 , 0 , 255 , 0 ,1023) ;\n'
																				+'	gray_Threshold_value_3 = map(gray_Threshold_value_3 , 0 , 255 , 0 ,1023) ;\n'
																				+'	gray_Threshold_value_4 = map(gray_Threshold_value_4 , 0 , 255 , 0 ,1023) ;\n' ;
	Blockly.Arduino.setups_['TaiMaco_Define_Machinery_Setup_Code'] = '	pinMode(4 , OUTPUT) ;\n'
																		+'	pinMode(5 , OUTPUT) ;\n'
																		+'	pinMode(6 , OUTPUT) ;\n'
																		+'	pinMode(7 , OUTPUT) ;\n';
	var get_Time=Blockly.Arduino.valueToCode(this, 'Time', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var pwm=Blockly.Arduino.valueToCode(this, 'speed', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var code = 'Gray_Line_Time('+pwm+','+get_Time+');\n';
	return code ;
}

Blockly.Arduino.TaiMaco_Gray_Turn = function() {
	Blockly.Arduino.definitions_['Define_EEPROM'] = '#include<EEPROM.h>\n'
	Blockly.Arduino.definitions_['TaiMaco_Define_Gray_Threshold_value'] = 'int gray_Threshold_value_1 = 0 ;\n'
																		+'int gray_Threshold_value_2 = 0 ;\n'
																		+'int gray_Threshold_value_3 = 0 ;\n'
																		+'int gray_Threshold_value_4 = 0 ;\n';
	Blockly.Arduino.definitions_['TaiMaco_Define_PWM_Function'] = 'void Set_PWM(int pwm_Num , int pwm){\n'
														+'	pwm = constrain(pwm , -100 , 100);\n'
														+'	pwm = map(pwm , -100 , 100 , -255 , 255) ;\n'
														+'	switch(pwm_Num){\n'
														+'		case 1 : if(pwm >= 0){\n'
														+'					digitalWrite(4 , 1) ;\n'
														+'					analogWrite(5 , pwm) ;\n'
														+'				}\n'
														+'				else{\n'
														+'					digitalWrite(4 , 0) ;\n'
														+'					analogWrite(5 , -pwm) ;\n'
														+'				} ; break ;\n'
														+'		case 2 : if(pwm >= 0){\n'
														+'					digitalWrite(7 , 0) ;\n'
														+'					analogWrite(6 , pwm) ;\n'
														+'				}\n'
														+'				else{\n'
														+'					digitalWrite(7 , 1) ;\n'
														+'					analogWrite(6 , -pwm) ;\n'
														+'				} ; break ;\n'
														+'	}\n'
														+'}\n';
	Blockly.Arduino.definitions_['TaiMaco_Define_Gray_Line_Turn_Function'] = 'void Gray_Line_Turn(int speed_PWM_L , int speed_PWM_R){\n'
														+'	speed_PWM_L = constrain(speed_PWM_L , -100 , 100) ;\n'
														+'	speed_PWM_R = constrain(speed_PWM_R , -100 , 100) ;\n'
														+'	if(speed_PWM_L - speed_PWM_R <= 0){\n'
														+'		Set_PWM(1 , speed_PWM_L) ;Set_PWM(2 , speed_PWM_R) ;\n'
														+'		while(!(analogRead(2) <= gray_Threshold_value_1)){}\n'
														+'		while(!(analogRead(6) <= gray_Threshold_value_3)){}\n'
														+'		Set_PWM(1 , 100) ;Set_PWM(2 , -100) ;\n'
														+'		delay(10) ;\n'
														+'		Set_PWM(1 , -speed_PWM_L) ;Set_PWM(2 , -speed_PWM_R) ;\n'
														+'		while(!(analogRead(3) <= gray_Threshold_value_2)){}\n'
														+'		Set_PWM(1 , -100) ;Set_PWM(2 , 100) ;\n'
														+'		delay(10) ;\n'
														+'		Set_PWM(1 , 0) ;Set_PWM(2 , 0) ;\n'
														+'	}\n'
														+'	else{\n' 
														+'		Set_PWM(1 , speed_PWM_L) ;Set_PWM(2 , speed_PWM_R) ;\n'
														+'		while(!(analogRead(7) <= gray_Threshold_value_4)){}\n'
														+'		while(!(analogRead(3) <= gray_Threshold_value_2)){}\n'
														+'		Set_PWM(1 , -100) ;Set_PWM(2 , 100) ;\n'
														+'		delay(10) ;\n'
														+'		Set_PWM(1 , -speed_PWM_L) ;Set_PWM(2 , -speed_PWM_R) ;\n'
														+'		while(!(analogRead(6) <= gray_Threshold_value_3)){}\n'
														+'		Set_PWM(1 , 100) ;Set_PWM(2 , -100) ;\n'
														+'		delay(10) ;\n'
														+'		Set_PWM(1 , 0) ;Set_PWM(2 , 0) ;\n'
														+'	}\n'
														+'}\n';
	Blockly.Arduino.setups_['TaiMaco_Define_Gray_Threshold_value_Setup_Code'] = '	gray_Threshold_value_1 = EEPROM.read(1) ;\n'
																				+'	gray_Threshold_value_2 = EEPROM.read(2) ;\n'
																				+'	gray_Threshold_value_3 = EEPROM.read(3) ;\n'
																				+'	gray_Threshold_value_4 = EEPROM.read(4) ;\n'
																				+'	gray_Threshold_value_1 = map(gray_Threshold_value_1 , 0 , 255 , 0 ,1023) ;\n'
																				+'	gray_Threshold_value_2 = map(gray_Threshold_value_2 , 0 , 255 , 0 ,1023) ;\n'
																				+'	gray_Threshold_value_3 = map(gray_Threshold_value_3 , 0 , 255 , 0 ,1023) ;\n'
																				+'	gray_Threshold_value_4 = map(gray_Threshold_value_4 , 0 , 255 , 0 ,1023) ;\n' ;
	Blockly.Arduino.setups_['TaiMaco_Define_Machinery_Setup_Code'] = '	pinMode(4 , OUTPUT) ;\n'
																		+'	pinMode(5 , OUTPUT) ;\n'
																		+'	pinMode(6 , OUTPUT) ;\n'
																		+'	pinMode(7 , OUTPUT) ;\n';
	var pwm_L=Blockly.Arduino.valueToCode(this, 'speed_L', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var pwm_R=Blockly.Arduino.valueToCode(this, 'speed_R', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var code = 'Gray_Line_Turn('+pwm_L+','+pwm_R+');\n';
	return code ;
}

Blockly.Arduino.TaiMaco_Gray_Crossing = function() {
	Blockly.Arduino.definitions_['Define_EEPROM'] = '#include<EEPROM.h>\n'
	Blockly.Arduino.definitions_['TaiMaco_Define_Gray_Threshold_value'] = 'int gray_Threshold_value_1 = 0 ;\n'
																		+'int gray_Threshold_value_2 = 0 ;\n'
																		+'int gray_Threshold_value_3 = 0 ;\n'
																		+'int gray_Threshold_value_4 = 0 ;\n';
	Blockly.Arduino.definitions_['TaiMaco_Define_PWM_Function'] = 'void Set_PWM(int pwm_Num , int pwm){\n'
														+'	pwm = constrain(pwm , -100 , 100);\n'
														+'	pwm = map(pwm , -100 , 100 , -255 , 255) ;\n'
														+'	switch(pwm_Num){\n'
														+'		case 1 : if(pwm >= 0){\n'
														+'					digitalWrite(4 , 1) ;\n'
														+'					analogWrite(5 , pwm) ;\n'
														+'				}\n'
														+'				else{\n'
														+'					digitalWrite(4 , 0) ;\n'
														+'					analogWrite(5 , -pwm) ;\n'
														+'				} ; break ;\n'
														+'		case 2 : if(pwm >= 0){\n'
														+'					digitalWrite(7 , 0) ;\n'
														+'					analogWrite(6 , pwm) ;\n'
														+'				}\n'
														+'				else{\n'
														+'					digitalWrite(7 , 1) ;\n'
														+'					analogWrite(6 , -pwm) ;\n'
														+'				} ; break ;\n'
														+'	}\n'
														+'}\n';
	Blockly.Arduino.definitions_['TaiMaco_Define_Gray_Line_Crossing_Function'] = 'void Gray_Line_Crossing(int speed_PWM , int which_Side){\n'
														+'	boolean turn_flag = false ;\n'
														+'	speed_PWM = constrain(speed_PWM , 0 , 255) ;\n'
														+'	if(which_Side == 1){\n'
														+'		while(!(analogRead(2) <= gray_Threshold_value_1 && analogRead(3) <= gray_Threshold_value_2)){\n'
														+'			if(analogRead(2) <= gray_Threshold_value_1){Set_PWM(1 , -speed_PWM) ;Set_PWM(2 , speed_PWM) ; turn_flag = true ;}\n'
														+'			else if(analogRead(7) <= gray_Threshold_value_4){Set_PWM(1 , speed_PWM) ;Set_PWM(2 , -speed_PWM) ; turn_flag = true ;}\n'
														+'			else if(analogRead(3) <= gray_Threshold_value_2){Set_PWM(1 , 0) ;Set_PWM(2 , speed_PWM) ; turn_flag = false ;}\n'
														+'			else if(analogRead(6) <= gray_Threshold_value_3){Set_PWM(1 , speed_PWM) ;Set_PWM(2 , 0) ; turn_flag = false ;}\n'
														+'			else if(!turn_flag){Set_PWM(1 , speed_PWM) ;Set_PWM(2 , speed_PWM) ;}\n'
														+'		}\n'
														+'	}\n'
														+'	else{\n' 
														+'		while(!(analogRead(6) <= gray_Threshold_value_3 && analogRead(7) <= gray_Threshold_value_4)){\n'
														+'			if(analogRead(2) <= gray_Threshold_value_1){Set_PWM(1 , -speed_PWM) ;Set_PWM(2 , speed_PWM) ; turn_flag = true ;}\n'
														+'			else if(analogRead(7) <= gray_Threshold_value_4){Set_PWM(1 , speed_PWM) ;Set_PWM(2 , -speed_PWM) ; turn_flag = true ;}\n'
														+'			else if(analogRead(3) <= gray_Threshold_value_2){Set_PWM(1 , 0) ;Set_PWM(2 , speed_PWM) ; turn_flag = false ;}\n'
														+'			else if(analogRead(6) <= gray_Threshold_value_3){Set_PWM(1 , speed_PWM) ;Set_PWM(2 , 0) ; turn_flag = false ;}\n'
														+'			else if(!turn_flag){Set_PWM(1 , speed_PWM) ;Set_PWM(2 , speed_PWM) ;}\n'
														+'		}\n'
														+'	}\n'
														+'	while(analogRead(2) <= gray_Threshold_value_1 || analogRead(7) <= gray_Threshold_value_4){\n'
														+'		Set_PWM(1 , speed_PWM) ;Set_PWM(2 , speed_PWM) ;\n'
														+'	}\n'
														+'	delay(50) ;\n'
														+'	Set_PWM(1,-100) ;Set_PWM(2,-100) ;\n'
														+'	delay(10) ;\n'
														+'	Set_PWM(1,0) ; Set_PWM(2,0) ;\n'
														+'}\n';
	Blockly.Arduino.setups_['TaiMaco_Define_Gray_Threshold_value_Setup_Code'] = '	gray_Threshold_value_1 = EEPROM.read(1) ;\n'
																				+'	gray_Threshold_value_2 = EEPROM.read(2) ;\n'
																				+'	gray_Threshold_value_3 = EEPROM.read(3) ;\n'
																				+'	gray_Threshold_value_4 = EEPROM.read(4) ;\n'
																				+'	gray_Threshold_value_1 = map(gray_Threshold_value_1 , 0 , 255 , 0 ,1023) ;\n'
																				+'	gray_Threshold_value_2 = map(gray_Threshold_value_2 , 0 , 255 , 0 ,1023) ;\n'
																				+'	gray_Threshold_value_3 = map(gray_Threshold_value_3 , 0 , 255 , 0 ,1023) ;\n'
																				+'	gray_Threshold_value_4 = map(gray_Threshold_value_4 , 0 , 255 , 0 ,1023) ;\n' ;
	Blockly.Arduino.setups_['TaiMaco_Define_Machinery_Setup_Code'] = '	pinMode(4 , OUTPUT) ;\n'
																		+'	pinMode(5 , OUTPUT) ;\n'
																		+'	pinMode(6 , OUTPUT) ;\n'
																		+'	pinMode(7 , OUTPUT) ;\n';
	var state = this.getFieldValue('state') ;
	var pwm=Blockly.Arduino.valueToCode(this, 'speed', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var code = 'Gray_Line_Crossing('+pwm+','+state+');\n';
	return code ;
}


Blockly.Arduino.Programme_Segment_Show = function() {
	Blockly.Arduino.definitions_['TaiMaQueen_Define_I2C'] = '#include<Wire.h>\n' ;
	Blockly.Arduino.definitions_['TaiMaQueen_Define_Matrix'] = '#include <Adafruit_GFX.h>\n'
																	+'#include "Adafruit_LEDBackpack.h"\n' ;
	var PIN = this.getFieldValue('PIN') ;
	Blockly.Arduino.definitions_['TaiMaQueen_Define_7_Segment'+PIN+'_Matrix'] = 'Adafruit_7segment segment_7'+PIN+' = Adafruit_7segment();\n' ;
	Blockly.Arduino.definitions_['TaiMaQueen_Define_7_Segment'+PIN+'_Matrix_Function'] = 'void Segment'+PIN+'_Show(String get_7_Segment_Num){\n'
																						+'	  boolean is_Colon_On = false ;\n'
																						+'	  int sequence_Number = 0 ;\n'
																						+'	  int Num_List[4] = {-1 , -1 , -1 , -1} ;\n'
																						+'	  boolean point_List[4] = {false , false , false , false} ;\n'
																						+'	  for(int i = 0 ; i <= get_7_Segment_Num.length() ; i++){\n'
																						+'		if(get_7_Segment_Num[i] >= \'0\' && get_7_Segment_Num[i] <= \'9\'){\n'
																						+'		  Num_List[sequence_Number] = (int)get_7_Segment_Num[i] - 48 ; \n'
																						+'		  sequence_Number++ ;\n'
																						+'		}\n'
																						+'		if(get_7_Segment_Num[i] == \'.\'){\n'
																						+'		  point_List[sequence_Number-1] = true ; \n'
																						+'		}\n'
																						+'	  }\n'
																						+'	  int right_Quantity = 0 ;\n'
																						+'	  for(int i = 0 ; i<= 3 ; i++){\n'
																						+'		if(Num_List[i] == -1){\n'
																						+'		  right_Quantity = 4-i ;\n'
																						+'		  break ;\n'
																						+'		}\n'
																						+'	  }\n'
																						+'	  if(get_7_Segment_Num == ""){\n'
																						+'		  segment_7'+PIN+'.writeDigitNum(0, -1 , false);\n'
																						+'		  segment_7'+PIN+'.writeDigitNum(1, -1 , false);\n'
																						+'		  segment_7'+PIN+'.drawColon(false);\n'
																						+'		  segment_7'+PIN+'.writeDigitNum(3, -1 , false);\n'
																						+'		  segment_7'+PIN+'.writeDigitNum(4, -1 , false);\n'
																						+'		  segment_7'+PIN+'.writeDisplay();\n'
																						+'	  }\n'
																						+'	  else if(right_Quantity == 4){\n'
																						+'		segment_7'+PIN+'.print(10000, DEC);\n'
																						+'		segment_7'+PIN+'.writeDisplay();\n'
																						+'	  }\n'
																						+'	  else{\n'
																						+'		if(right_Quantity > 0){\n'
																						+'		  for(int i = 3 ; i-right_Quantity >= 0 ; i--){\n'
																						+'			Num_List[i] = Num_List[i-right_Quantity] ;\n'
																						+'			Num_List[i-right_Quantity] = -1 ;\n'
																						+'			point_List[i] = point_List[i-right_Quantity] ;\n'
																						+'			point_List[i-right_Quantity] = false ;\n'
																						+'		  }\n'
																						+'		}\n'
																						+'		if(get_7_Segment_Num.indexOf(":") >= 0){is_Colon_On = true ;}\n'
																						+'		  segment_7'+PIN+'.writeDigitNum(0, Num_List[0] , point_List[0]);\n'
																						+'		  segment_7'+PIN+'.writeDigitNum(1, Num_List[1] , point_List[1]);\n'
																						+'		  segment_7'+PIN+'.drawColon(is_Colon_On);\n'
																						+'		  segment_7'+PIN+'.writeDigitNum(3, Num_List[2] , point_List[2]);\n'
																						+'		  segment_7'+PIN+'.writeDigitNum(4, Num_List[3] , point_List[3]);\n'
																						+'		  segment_7'+PIN+'.writeDisplay();\n'
																						+'	  }\n'
																						+'	}\n';
	Blockly.Arduino.setups_['TaiMaQueen_7_Segment'+PIN+'_Setup_Code'] = 	'Serial.begin(9600) ;\n'
																			+'switch('+PIN+'){\n'
																			+'	case 1 : segment_7'+PIN+'.begin(0x70); break ;\n' 
																			+'	case 2 : segment_7'+PIN+'.begin(0x71); break ;\n' 
																			+'	case 3 : segment_7'+PIN+'.begin(0x72); break ;\n' 
																			+'	case 4 : segment_7'+PIN+'.begin(0x73); break ;\n' 
																			+'	case 5 : segment_7'+PIN+'.begin(0x74); break ;\n' 
																			+'	case 6 : segment_7'+PIN+'.begin(0x75); break ;\n' 
																			+'	case 7 : segment_7'+PIN+'.begin(0x76); break ;\n' 
																			+'	case 8 : segment_7'+PIN+'.begin(0x77); break ;\n'
																			+'}\n'
																			+'Segment'+PIN+'_Show("") ; \n';

	var text1 = Blockly.Arduino.valueToCode(this, 'text1', Blockly.Arduino.ORDER_ATOMIC) || '\"\"';
	var code ='Segment'+PIN+'_Show(String('+text1+')) ; \n';
	return code ;
}

Blockly.Arduino.Programme_Servo = function() {
	var PIN = this.getFieldValue('PIN') ;
	Blockly.Arduino.definitions_['Programme_Define_Adafruit_Servo'] = '#include <Servo.h>';
	Blockly.Arduino.definitions_['Programme_Define_Myse_'+PIN] = 'Servo myse_'+PIN+' ;' ;
	Blockly.Arduino.setups_['Programme_Define_Servo_'+PIN+'_Setup_Code'] = 'myse_'+PIN+'.attach('+PIN+') ;\n';
	var angle=Blockly.Arduino.valueToCode(this, 'angle', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var code = 'myse_'+PIN+'.write(map('+angle+',0,270,0,180));\n' ;
	return code ;
}

Blockly.Arduino.Programme_TicoServo = function() {
	Blockly.Arduino.definitions_['Programme_Define_Adafruit_TiCoServo'] = '#include <Adafruit_TiCoServo.h>';
	Blockly.Arduino.definitions_['Programme_Define_Myse'] = 'Adafruit_TiCoServo myse ;' ;
	Blockly.Arduino.setups_['Programme_Define_Servo_Setup_Code'] = 'myse.attach(9,500,2500) ;\n';
	var angle=Blockly.Arduino.valueToCode(this, 'angle', Blockly.Arduino.ORDER_ATOMIC) || '0';
	var code = 'myse.write(map('+angle+',0,270,500,2500));\n' ;
	return code ;
}

Blockly.Arduino.TaiMaco_PS2_Baud_Rate = function() {
	Blockly.Arduino.definitions_['TaiMaco_Define_SoftwareSerial'] = '#include <SoftwareSerial.h>\n';
	Blockly.Arduino.definitions_['TaiMaco_Define_MP3_SoftwareSerial'] = 'SoftwareSerial mySerial(3,2); \n';
	var addr = this.getFieldValue('addr') ;
	Blockly.Arduino.setups_['TaiMaco_Define_PS2_Baud_Rate_Setup_Code'] = 'mySerial.begin(9600) ;\n'
																		+'delay(5000);\n'
																		+'mySerial.print("'+addr+'");\n'
																		+'delay(2000);\n'
																		+'tone(8,261); delay(2*250) ;noTone(8);\n';
	var code = '' ;
	return code;
}

Blockly.Arduino.TaiMaco_PS2_Control = function() {
	Blockly.Arduino.definitions_['TaiMaco_Define_SoftwareSerial'] = '#include <SoftwareSerial.h>\n';
	Blockly.Arduino.definitions_['TaiMaco_Define_MP3_SoftwareSerial'] = 'SoftwareSerial mySerial(3,2); \n';
	Blockly.Arduino.definitions_['TaiMaco_Define_PS2_Control_Function'] ='String PS2_CMD = "" ;\n' 
																		+'char PS2_Button_CMD = \'N\';\n'
																		+'int PS2_Left_X_Remote_Sensing_CMD = 128;\n'
																		+'int PS2_Left_Y_Remote_Sensing_CMD = 128;\n'
																		+'int PS2_Right_X_Remote_Sensing_CMD = 128;\n'
																		+'int PS2_Right_Y_Remote_Sensing_CMD = 128;\n'
																		+'void Get_PS2_Control(){\n'
																		+'  if(mySerial.available()){\n'
																		+'		String PS2_CMD = "" ;\n'
																		+'		while(mySerial.available()){\n'
																		+'	  	PS2_CMD += (char)mySerial.read() ;\n'
																		+'	  	delayMicroseconds(200) ;\n'
																		+'		}\n'
																		+'		if(PS2_CMD[0] == \'W\'){\n'
																		+'			PS2_Left_Y_Remote_Sensing_CMD = PS2_CMD.substring(1,PS2_CMD.length()).toInt();\n'
																		+'		}\n'
																		+'		else if(PS2_CMD[0] == \'P\'){\n'
																		+'	  		PS2_Left_X_Remote_Sensing_CMD = PS2_CMD.substring(1,PS2_CMD.length()).toInt();\n'
																		+'		}\n'
																		+'		else if(PS2_CMD[0] == \'Q\'){\n'
																		+'	  		PS2_Right_Y_Remote_Sensing_CMD = PS2_CMD.substring(1,PS2_CMD.length()).toInt();\n'
																		+'		}\n'
																		+'		else if(PS2_CMD[0] == \'S\'){\n'
																		+'	  		PS2_Right_X_Remote_Sensing_CMD = PS2_CMD.substring(1,PS2_CMD.length()).toInt();\n'
																		+'		}\n'
																		+'		else{\n'
																		+'	  		PS2_Button_CMD = PS2_CMD[0] ;\n'
																		+'  	}\n'
																		+'	}\n'
																		+'}\n';
	var addr = this.getFieldValue('addr') ;
	Blockly.Arduino.setups_['TaiMaco_Define_SoftwareSerial_Setup_Code'] = 'mySerial.begin('+addr+') ;\n' ;
	var code = 'Get_PS2_Control();\n' ;
	return code;
}


Blockly.Arduino.TaiMaco_PS2_Control_Remote_Sensing_CMD = function() {
	Blockly.Arduino.definitions_['TaiMaco_Define_SoftwareSerial'] = '#include <SoftwareSerial.h>\n';
	Blockly.Arduino.definitions_['TaiMaco_Define_MP3_SoftwareSerial'] = 'SoftwareSerial mySerial(3,2); \n';
	Blockly.Arduino.definitions_['TaiMaco_Define_PS2_Control_Function'] ='String PS2_CMD = "" ;\n' 
																		+'char PS2_Button_CMD = \'N\';\n'
																		+'int PS2_Left_X_Remote_Sensing_CMD = 128;\n'
																		+'int PS2_Left_Y_Remote_Sensing_CMD = 128;\n'
																		+'int PS2_Right_X_Remote_Sensing_CMD = 128;\n'
																		+'int PS2_Right_Y_Remote_Sensing_CMD = 128;\n'
																		+'void Get_PS2_Control(){\n'
																		+'  if(mySerial.available()){\n'
																		+'		String PS2_CMD = "" ;\n'
																		+'		while(mySerial.available()){\n'
																		+'	  	PS2_CMD += (char)mySerial.read() ;\n'
																		+'	  	delayMicroseconds(200) ;\n'
																		+'		}\n'
																		+'		if(PS2_CMD[0] == \'W\'){\n'
																		+'			PS2_Left_Y_Remote_Sensing_CMD = PS2_CMD.substring(1,PS2_CMD.length()).toInt();\n'
																		+'		}\n'
																		+'		else if(PS2_CMD[0] == \'P\'){\n'
																		+'	  		PS2_Left_X_Remote_Sensing_CMD = PS2_CMD.substring(1,PS2_CMD.length()).toInt();\n'
																		+'		}\n'
																		+'		else if(PS2_CMD[0] == \'Q\'){\n'
																		+'	  		PS2_Right_Y_Remote_Sensing_CMD = PS2_CMD.substring(1,PS2_CMD.length()).toInt();\n'
																		+'		}\n'
																		+'		else if(PS2_CMD[0] == \'S\'){\n'
																		+'	  		PS2_Right_X_Remote_Sensing_CMD = PS2_CMD.substring(1,PS2_CMD.length()).toInt();\n'
																		+'		}\n'
																		+'		else{\n'
																		+'	  		PS2_Button_CMD = PS2_CMD[0] ;\n'
																		+'  	}\n'
																		+'	}\n'
																		+'}\n';
	Blockly.Arduino.definitions_['TaiMaco_Define_PS2_Control_Remote_Sensing_Function'] = 'int Get_PS2_Control_Remote_Sensing_CMD(int port){\n'
																						+'	switch(port){\n'
																						+'		case 1 : return PS2_Left_X_Remote_Sensing_CMD ; \n'
																						+'		case 2 : return PS2_Left_Y_Remote_Sensing_CMD ; \n'
																						+'		case 3 : return PS2_Right_X_Remote_Sensing_CMD ; \n'
																						+'		case 4 : return PS2_Right_Y_Remote_Sensing_CMD ; \n'
																						+'	}\n'
																						+'	return 0 ;\n'
																						+'}\n' ;
	var PORT = this.getFieldValue('PORT') ;
	var code = 'Get_PS2_Control_Remote_Sensing_CMD('+PORT+')';
	return [code , Blockly.Arduino.ORDER_ATOMIC];
}


Blockly.Arduino.TaiMaco_PS2_Control_Button_CMD = function() {
	Blockly.Arduino.definitions_['TaiMaco_Define_SoftwareSerial'] = '#include <SoftwareSerial.h>\n';
	Blockly.Arduino.definitions_['TaiMaco_Define_MP3_SoftwareSerial'] = 'SoftwareSerial mySerial(3,2); \n';
	Blockly.Arduino.definitions_['TaiMaco_Define_PS2_Control_Function'] ='String PS2_CMD = "" ;\n' 
																		+'char PS2_Button_CMD = \'N\';\n'
																		+'int PS2_Left_X_Remote_Sensing_CMD = 128;\n'
																		+'int PS2_Left_Y_Remote_Sensing_CMD = 128;\n'
																		+'int PS2_Right_X_Remote_Sensing_CMD = 128;\n'
																		+'int PS2_Right_Y_Remote_Sensing_CMD = 128;\n'
																		+'void Get_PS2_Control(){\n'
																		+'  if(mySerial.available()){\n'
																		+'		String PS2_CMD = "" ;\n'
																		+'		while(mySerial.available()){\n'
																		+'	  	PS2_CMD += (char)mySerial.read() ;\n'
																		+'	  	delayMicroseconds(200) ;\n'
																		+'		}\n'
																		+'		if(PS2_CMD[0] == \'W\'){\n'
																		+'			PS2_Left_Y_Remote_Sensing_CMD = PS2_CMD.substring(1,PS2_CMD.length()).toInt();\n'
																		+'		}\n'
																		+'		else if(PS2_CMD[0] == \'P\'){\n'
																		+'	  		PS2_Left_X_Remote_Sensing_CMD = PS2_CMD.substring(1,PS2_CMD.length()).toInt();\n'
																		+'		}\n'
																		+'		else if(PS2_CMD[0] == \'Q\'){\n'
																		+'	  		PS2_Right_Y_Remote_Sensing_CMD = PS2_CMD.substring(1,PS2_CMD.length()).toInt();\n'
																		+'		}\n'
																		+'		else if(PS2_CMD[0] == \'S\'){\n'
																		+'	  		PS2_Right_X_Remote_Sensing_CMD = PS2_CMD.substring(1,PS2_CMD.length()).toInt();\n'
																		+'		}\n'
																		+'		else{\n'
																		+'	  		PS2_Button_CMD = PS2_CMD[0] ;\n'
																		+'  	}\n'
																		+'	}\n'
																		+'}\n';
	var code = 'PS2_Button_CMD';
	return [code , Blockly.Arduino.ORDER_ATOMIC];
}

Blockly.Arduino.Programme_Sign_Recognition = function() {
	Blockly.Arduino.definitions_['TaiMaro_Define_Arduino'] = '#include "Arduino.h"' ;
	
	Blockly.Arduino.definitions_['Programme_Define_Guidepost'] = 'boolean Get_Guidepost(int guidepost_PIN){\n'
													+'	while(Serial.available()){Serial.read();}\n'
													+'	Serial.print("sign?");\n'
													+'	int error_Count = 0 ;\n'
													+'	while(error_Count<=5){\n'
													+'		uint32_t t = millis();\n' 
													+'		while(!Serial.available()) {\n' 
													+'			if(millis() - t > 1000)\n' 
													+'		  		break;\n' 
													+'		}\n' 
													+'		String cmd = "";\n' 
													+'		while(Serial.available()) {\n' 
													+'			cmd += (char)Serial.read();\n' 
													+'			delayMicroseconds(100);\n' 
													+'		}\n' 
													+'		if(cmd.length() <= 3){\n'
													+'			error_Count++ ;\n'
													+'		}\n'
													+'		else{\n'
													+'			error_Count = 0;\n'
													+'			if(cmd == "None") {\n' 
													+'				return false;\n' 
													+'			}\n' 
													+'			int which_Sign = cmd.substring(0, cmd.indexOf(",")).toInt() ;\n'
													+'			switch(guidepost_PIN){\n'
													+'				case 1 : if(which_Sign == 5){return true ;}else{return false ;} break ;\n'
													+'				case 2 : if(which_Sign == 6){return true ;}else{return false ;} break ;\n'
													+'				case 3 : if(which_Sign == 7){return true ;}else{return false ;} break ;\n'
													+'				case 4 : if(which_Sign == 8){return true ;}else{return false ;} break ;\n'
													+'				case 5 : if(which_Sign == 3){return true ;}else{return false ;} break ;\n'
													+'				case 6 : if(which_Sign == 4){return true ;}else{return false ;} break ;\n'
													+'				case 7 : if(which_Sign == 1){return true ;}else{return false ;} break ;\n'
													+'				case 8 : if(which_Sign == 2){return true ;}else{return false ;} break ;\n'
													+'				default : return false ; break ;\n'
													+'			}\n' 
													+'		}\n' 
													+'		return false;\n' 
													+'	}\n'
													+'	return false;\n'
													+'}\n';
	Blockly.Arduino.setups_['Programme_Define_PI_Setup_Code'] = 'Serial.begin(115200);';
	Blockly.Arduino.setups_['Programme_Define_Wait_PI_UP_Setup_Code'] = 'while(!Serial.available()){\n'
																	+'	Serial.print("angle?");\n'
																	+'	delay(500) ;\n'
																	+'}\n'
																	+'while(Serial.available()){\n'
																	+'	char clear_Serial3 = Serial.read() ;\n'
																	+'}\n'
																	+'delay(500) ;\n' 
																	+'Serial.print("init_sign_model") ; \n'
																	+'delay(500) ;\n' 
																	+'while(!Serial.available()){\n'
																	+'}\n'
																	+'while(Serial.available()){\n'
																	+'	char clear_Serial = Serial.read() ;\n'
																	+'}\n'
																	+'delay(500) ;\n' ;
	var PORT = this.getFieldValue('PORT') ;
	var code = 'Get_Guidepost('+PORT+')' ;
	return [code , Blockly.Arduino.ORDER_ATOMIC] ;
}

Blockly.Arduino.Programme_Face_Recognition = function() {
	Blockly.Arduino.definitions_['TaiMaro_Define_Arduino'] = '#include "Arduino.h"' ;
	
	Blockly.Arduino.definitions_['Programme_Define_Face'] = 'boolean Get_Face(){\n'
													+'	while(Serial.available()){Serial.read();}\n'
													+'	Serial.print("face?");\n'
													+'	int error_Count = 0 ;\n'
													+'	while(error_Count<=5){\n'
													+'		uint32_t t = millis();\n' 
													+'		while(!Serial.available()) {\n' 
													+'			if(millis() - t > 1000)\n' 
													+'		  		break;\n' 
													+'		}\n' 
													+'		String cmd = "";\n' 
													+'		while(Serial.available()) {\n' 
													+'			cmd += (char)Serial.read();\n' 
													+'			delayMicroseconds(100);\n' 
													+'		}\n' 
													+'		if(cmd.length() <= 3){\n'
													+'			error_Count++ ;\n'
													+'		}\n'
													+'		else{\n'
													+'			error_Count = 0;\n'
													+'			if(cmd == "None") {\n' 
													+'				return false;\n' 
													+'			}\n' 
													+'			else{\n'
													+'				return true ;\n'
													+'			}\n' 	
													+'		}\n' 
													+'		return false;\n' 
													+'	}\n'
													+'	return false;\n'
													+'}\n';
	Blockly.Arduino.setups_['Programme_Define_PI_Setup_Code'] = 'Serial.begin(115200);';
	Blockly.Arduino.setups_['Programme_Define_Wait_PI_UP_Setup_Code'] = 'while(!Serial.available()){\n'
																	+'	Serial.print("angle?");\n'
																	+'	delay(500) ;\n'
																	+'}\n'
																	+'while(Serial.available()){\n'
																	+'	char clear_Serial3 = Serial.read() ;\n'
																	+'}\n'
																	+'delay(500) ;\n' 
																	+'Serial.print("init_sign_model") ; \n'
																	+'delay(500) ;\n' 
																	+'while(!Serial.available()){\n'
																	+'}\n'
																	+'while(Serial.available()){\n'
																	+'	char clear_Serial = Serial.read() ;\n'
																	+'}\n'
																	+'delay(500) ;\n' ;
	var code = 'Get_Face()' ;
	return [code , Blockly.Arduino.ORDER_ATOMIC] ;
}

Blockly.Arduino.Programme_8_8_Matrix_Show = function() {
  var varName = this.getFieldValue('VAR');
  var port = this.getFieldValue('PORT');
  var a = new Array();
  for (var i = 1; i < 9; i++) {
	a[i] = new Array();
	for (var j = 1; j < 9; j++) {
	  a[i][j] = (this.getFieldValue('a' + i + j) == "TRUE") ? 1 : 0;
	}
  }
  var code_led = '{';
  for (var i = 1; i < 9; i++) {
	var tmp = "" ;
	for (var j = 1; j < 9; j++) {
	  tmp += a[i][j];
	}
	tmp = (parseInt(tmp, 2)).toString(16)
	if (tmp.length == 1) tmp = "0" + tmp;
	code_led += '0x' + tmp + ((i != 8) ? ',' : '');
  }
  code_led += '};';
  //Blockly.Arduino.definitions_[this.id] = "byte LedArray_"+clearString(this.id)+"[]="+code;
  Blockly.Arduino.definitions_[varName] = "uint8_t " + varName + "[8]=" + code_led;
	Blockly.Arduino.definitions_['TaiMaQueen_Define_clear_Array'] = 'uint8_t  clear_Array[8] = {0x00 , 0x00 , 0x00 , 0x00 , 0x00 , 0x00 , 0x00 , 0x00} ;\n' ;
	Blockly.Arduino.definitions_['TaiMaQueen_Define_I2C'] = '#include<Wire.h>\n' ;
	Blockly.Arduino.definitions_['TaiMaQueen_Define_Matrix'] = '#include <Adafruit_GFX.h>\n'
																	+'#include "Adafruit_LEDBackpack.h"\n';
	Blockly.Arduino.definitions_['TaiMaQueen_Define_8_16_Matrix_'+port]='Adafruit_8x8matrix matrix_'+port+' = Adafruit_8x8matrix();\n';
	Blockly.Arduino.setups_['Programme_8_8_Matrix_'+port] = '  matrix_'+port+'.begin(0x7'+port+');\n'
															+'  matrix_'+port+'.drawBitmap(0, 0, clear_Array, 8, 8, LED_ON);\n'
															+'	matrix_'+port+'.writeDisplay();\n' ;
	var is_Clear = (this.getFieldValue('is_Clear_8_16') == "TRUE") ? 1 : 0;
	//Blockly.Arduino.definitions_['LEDArray'] = 'uint8_t  LEDArray[8];';
	//  var code='Matrix_'+SDA+'_'+SCL+'.clear()dotMatrix;\n';
	//var code='';
	//code+='for(int i=0; i<8; i++)\n';
	//code+='{\n'
	//code+='  LEDArray[i]='+dotMatrixArray+'[i];\n';
	//code+='  for(int j=7; j>=0; j--)\n'
	//code+='  {\n'
	//code+='    if((LEDArray[i]&0x01)>0)\n';
	//code+='    '+ matrixName +'.drawPixel(j, i,LED_ON);\n';
	//code+='    LEDArray[i] = LEDArray[i]>>1;\n';
	//code+='  }  \n'
	//code+='}\n'
	//code+= matrixName+'.writeDisplay();\n'
	var code = '	if('+is_Clear+'){\n'
				+'		matrix_'+port+'.clear();\n'
				+'	}\n'
				+'  matrix_'+port+'.drawBitmap(0, 0, '+varName+', 8, 8, LED_ON);\n'
				+'	matrix_'+port+'.writeDisplay();\n' ;
	return code;
};


Blockly.Arduino.Programme_Color_Sensor = function() {
	Blockly.Arduino.definitions_['Programme_Define_Color_Sensor_value'] = '#define color_Sensor_S0     7\n'
																		+'#define color_Sensor_S1     6\n'
																		+'#define color_Sensor_S2     5\n'
																		+'#define color_Sensor_S3     4\n'
																		+'#define color_Sensor_LED    3\n'
																		+'#define color_Sensor_OUT    2 \n'
																		+'volatile int color_Sensor_Count = 0;\n';
	Blockly.Arduino.definitions_['Programme_Define_Color_Sensor_Interrupt_Function'] = 'void Color_Sensor_Count_Function(){color_Sensor_Count++;}\n'
	Blockly.Arduino.definitions_['Programme_Define_Color_Sensor_Function'] = 'int Get_Color_Sensor_Data(int port){\n'
																			+'	switch(port){\n'
																			+'		case 1 : digitalWrite(color_Sensor_S2 , LOW) ;digitalWrite(color_Sensor_S3 , LOW) ;  ;color_Sensor_Count = 0 ; delay(1000) ; return color_Sensor_Count ;\n'
																			+'		case 2 : digitalWrite(color_Sensor_S2 , HIGH) ;digitalWrite(color_Sensor_S3 , HIGH) ;  ;color_Sensor_Count = 0 ; delay(1000) ; return color_Sensor_Count ;\n'
																			+'		case 3 : digitalWrite(color_Sensor_S2 , LOW) ;digitalWrite(color_Sensor_S3 , HIGH) ;  ;color_Sensor_Count = 0 ; delay(1000) ; return color_Sensor_Count ;\n'
																			+'	}\n'
																			+'	return 0 ;\n'
																			+'}\n' ;
	Blockly.Arduino.setups_['Programme_Define_Color_Sensor_Setup_Code'] = '  pinMode(color_Sensor_S0, OUTPUT);\n'
																			+'  pinMode(color_Sensor_S1, OUTPUT);\n'
																			+'  pinMode(color_Sensor_S2, OUTPUT);\n'
																			+'  pinMode(color_Sensor_S3, OUTPUT);\n'
																			+'  pinMode(color_Sensor_LED, OUTPUT);\n'
																			+'  pinMode(color_Sensor_OUT, INPUT); \n'
																			+'  digitalWrite(color_Sensor_S0, LOW);\n'
																			+'  digitalWrite(color_Sensor_S1, HIGH); \n'
																			+'  digitalWrite(color_Sensor_LED,HIGH) ;\n'
																			+'  attachInterrupt(0, Color_Sensor_Count_Function, RISING);\n';	
	var PORT = this.getFieldValue('PORT') ;
	var code = 'Get_Color_Sensor_Data('+PORT+')'
	return [code , Blockly.Arduino.ORDER_ATOMIC] ;
}
