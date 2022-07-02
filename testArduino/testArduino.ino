
#include <Servo.h>

Servo servo_2;

float checkdistance_A4_A5() {
  digitalWrite(A4, LOW);
  delayMicroseconds(2);
  digitalWrite(A4, HIGH);
  delayMicroseconds(10);
  digitalWrite(A4, LOW);
  float distance = pulseIn(A5, HIGH) / 58.00;
  delay(10);
  return distance;
}

void setup(){
  pinMode(A4, OUTPUT);
  pinMode(A5, INPUT);
  Serial.begin(9600);
  pinMode(6, OUTPUT);
  pinMode(5, OUTPUT);
  pinMode(3, OUTPUT);
  servo_2.attach(2);
}

void loop(){
  int item = checkdistance_A4_A5();
  Serial.println(item);
  if (item < 30 && item >= 20) {
    digitalWrite(6,LOW);
    digitalWrite(5,LOW);
    analogWrite(3,(map(item, 30, 20, 0, 255)));

  } else if (item < 20 && item >= 10) {
    digitalWrite(6,LOW);
    digitalWrite(3,HIGH);
    analogWrite(5,(map(item, 20, 10, 0, 255)));
  } else if (item < 10 && item >= 5) {
    digitalWrite(5,HIGH);
    digitalWrite(3,HIGH);
    analogWrite(6,(map(item, 10, 5, 0, 255)));
    servo_2.write(180);
    delay(0);
  } else if (item > 30) {
    digitalWrite(3,LOW);
    digitalWrite(5,LOW);
    digitalWrite(6,LOW);
    servo_2.write(0);
    delay(0);
  }

}