# 1 "D:\\Mixly\\testArduino\\testArduino.ino"

# 3 "D:\\Mixly\\testArduino\\testArduino.ino" 2
# 4 "D:\\Mixly\\testArduino\\testArduino.ino" 2
# 5 "D:\\Mixly\\testArduino\\testArduino.ino" 2
# 6 "D:\\Mixly\\testArduino\\testArduino.ino" 2
# 7 "D:\\Mixly\\testArduino\\testArduino.ino" 2

U8G2_SSD1306_128X64_NONAME_F_HW_I2C u8g2((&u8g2_cb_r0), 255);
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

}
