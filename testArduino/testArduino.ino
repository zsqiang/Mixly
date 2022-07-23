<<<<<<< HEAD
float tonelist[7]={1046.5,1174.7,1318.5,1396.9,1568,1760,1975.5};

<<<<<<< HEAD
#include <ESP8266WiFi.h>
#include <U8g2lib.h>
#include <Wire.h>
#include <ESP8266_Seniverse.h>
#include <SimpleTimer.h>

U8G2_SSD1306_128X64_NONAME_F_HW_I2C u8g2(U8G2_R0, U8X8_PIN_NONE);
WeatherNow weatherNow;
SimpleTimer timer;

void Simple_timer_1() {
  u8g2.firstPage();
  do
  {
    page1();
  }while(u8g2.nextPage());
}

void page1() {
  u8g2.setFont(u8g2_font_wqy12_t_gb2312);
  u8g2.setFontPosTop();
  Serial.println(weatherNow.getWeatherText());
  u8g2.setCursor(0,2);
  u8g2.print(weatherNow.getWeatherText());
  u8g2.setCursor(0,10);
  u8g2.print("1234");
}

void setup(){
  WiFi.begin("sqiang1019", "123456987.");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("Local IP:");
  Serial.print(WiFi.localIP());

  u8g2.setI2CAddress(0x3C*2);
  u8g2.begin();
  Serial.begin(9600);
  weatherNow.config("SxwtUwVUkkf4pdANp", "ip", "c", "zh-Hans");
  timer.setInterval(1000L, Simple_timer_1);

  u8g2.enableUTF8Print();

}

void loop(){
  timer.run();
=======
long musiclist[32]={1,2,3,1,1,2,3,1,3,4,5,3,4,5,5,6,5,4,3,1,5,6,5,4,3,1,2,5,1,2,5,1};

long highlist[32]={0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,0,0,-1,0};

long updownlist[32]={0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0};

float rhythmlist[32]={1,1,1,1,1,1,1,1,1,1,2,1,1,2,0.5,0.5,0.5,0.5,1,1,0.5,0.5,0.5,0.5,1,1,1,1,2,1,1,2};

volatile float speed;
volatile long updown;

void playmusic() {
  for (int i = 1; i <= 32; i = i + (1)) {
    tone(5,(tonelist[(int)(musiclist[(int)(i - 1)] - 1)] * pow(2, highlist[(int)(i - 1)])) * pow(2, (updownlist[(int)(i - 1)] + updown) / 12.0));
    delay(((1000 * (60 / speed)) * rhythmlist[(int)(i - 1)]));
    noTone(5);
    delay(10);
  }
}

=======
>>>>>>> origin/dev
void setup(){

}

void loop(){
<<<<<<< HEAD
  playmusic();
>>>>>>> origin/dev
=======
>>>>>>> origin/dev

}