# 1 "D:\\下载\\Mixly-master\\testArduino\\testArduino.ino"

# 3 "D:\\下载\\Mixly-master\\testArduino\\testArduino.ino" 2

Servo servo_2;

float checkdistance_A4_A5() {
  digitalWrite(A4, 0x0);
  delayMicroseconds(2);
  digitalWrite(A4, 0x1);
  delayMicroseconds(10);
  digitalWrite(A4, 0x0);
  float distance = pulseIn(A5, 0x1) / 58.00;
  delay(10);
  return distance;
}

void setup(){
  pinMode(A4, 0x1);
  pinMode(A5, 0x0);
  Serial.begin(9600);
  pinMode(6, 0x1);
  pinMode(5, 0x1);
  pinMode(3, 0x1);
  servo_2.attach(2);
}

void loop(){
  int item = checkdistance_A4_A5();
  Serial.println(item);
  if (item < 30 && item >= 20) {
    digitalWrite(6,0x0);
    digitalWrite(5,0x0);
    analogWrite(3,(map(item, 30, 20, 0, 255)));

  } else if (item < 20 && item >= 10) {
    digitalWrite(6,0x0);
    digitalWrite(3,0x1);
    analogWrite(5,(map(item, 20, 10, 0, 255)));
  } else if (item < 10 && item >= 5) {
    digitalWrite(5,0x1);
    digitalWrite(3,0x1);
    analogWrite(6,(map(item, 10, 5, 0, 255)));
    servo_2.write(180);
    delay(0);
  } else if (item > 30) {
    digitalWrite(3,0x0);
    digitalWrite(5,0x0);
    digitalWrite(6,0x0);
    servo_2.write(0);
    delay(0);
  }

}
