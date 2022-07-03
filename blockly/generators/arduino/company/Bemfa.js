
'use strict';
goog.provide('Blockly.Arduino.Mqtt');
goog.require('Blockly.Arduino');

Blockly.Arduino.init_Bemfa_TCP = function() {
  var tcp_SERVER = Blockly.Arduino.valueToCode(this, 'tcp_Server', Blockly.Arduino.ORDER_ATOMIC);
  var tcp_PORT = Blockly.Arduino.valueToCode(this, 'tcp_port', Blockly.Arduino.ORDER_ATOMIC);

  var tcp_ClientId =Blockly.Arduino.valueToCode(this, 'tcp_client_id', Blockly.Arduino.ORDER_ATOMIC);

  var type = this.getFieldValue('type');
  var bemfa_reconnet =  "";
  if(type == '1'){
    Blockly.Arduino.definitions_['include_ESP8266WiFi'] = '#include <ESP8266WiFi.h>';
  }else{
    Blockly.Arduino.definitions_['include_ESP8266WiFi'] = '#include <WiFi.h>';
    bemfa_reconnet =  "      WiFi.begin();\n";
  }
  Blockly.Arduino.definitions_['include_tcp_ESP8266WiFi_var_declare_tcp_SERVER']  = '#define TCP_SERVER_ADDR ' + tcp_SERVER+ '\n'
  +'#define TCP_SERVER_PORT "' + tcp_PORT+'"\n'
  +'#ifndef AP_CONFIG\n' 
  +'String UID = ' + tcp_ClientId +';\n'
  +'#endif\n'
  +'#define MAX_PACKETSIZE 512\n'
  +'#define KEEPALIVEATIME 30*1000\n'
  +'WiFiClient TCPclient;\n'
  +'String TcpClient_Buff = "";\n'
  +'unsigned int TcpClient_BuffIndex = 0;\n'
  +'unsigned long TcpClient_preTick = 0;\n'
  +'unsigned long preHeartTick = 0;\n'
  +'unsigned long preTCPStartTick = 0;\n'
  +'bool preTCPConnected = false;\n'
  +'bool subFlag = false;\n'
  +'void doWiFiTick();\n'
  +'void doTCPClientTick();\n'
  +'void sendtoTCPServer(String p);\n'
  +'void subTopic(String topic){\n'
  +'  String tcpTemp="";\n'
  +'  tcpTemp = "cmd=1&uid="+UID+"&topic="+topic+"\\r\\n";\n'
  +'  sendtoTCPServer(tcpTemp);\n'
  +'  tcpTemp="";\n'
  +'  Serial.print("sub topic:");Serial.println(topic);\n '
  +' }\n'
  +'void doWiFiTick(){\n'
  +' static bool taskStarted = false;\n'
  +' static uint32_t lastWiFiCheckTick = 0;\n'
  +' if ( WiFi.status() != WL_CONNECTED ) {\n'
    +'   if (millis() - lastWiFiCheckTick > 1000) {\n'
      +'     lastWiFiCheckTick = millis();\n'
      +      bemfa_reconnet
      +'  }\n'
      +' }\n'
    +' else {\n'
      +'   if (taskStarted == false) {\n'
        +'     taskStarted = true;\n'
        +'     Serial.print("Get IP Address: ");\n'
        +'      Serial.println(WiFi.localIP());\n'
        +'      startTCPClient();\n'
        +'    }\n'
        +'  }\n'
        +' }\n'
  +'void sendtoTCPServer(String p){\n'
   +'  if (!TCPclient.connected()) \n'
   +'  {\n'
    +'     Serial.println("Client is not readly");\n'
    +'      return;\n'
    +'   }\n'
    +'   TCPclient.print(p);\n'
    +'  }\n'
    +'void startTCPClient(){\n'
    +' if(TCPclient.connect(TCP_SERVER_ADDR, atoi(TCP_SERVER_PORT))){\n'
      +'   Serial.print("Connected to server:");\n'
      +'   Serial.println(TCP_SERVER_ADDR);  \n'
      +'   subFlag = true;\n'
      +'   preHeartTick = millis();\n'
      +'   TCPclient.setNoDelay(true);\n'
      +'}\n'
      +'else{\n'
        +'  Serial.print("Failed connected to server:");\n'
        +'  Serial.println(TCP_SERVER_ADDR);\n'
        +'  TCPclient.stop();\n'
        +'  preTCPConnected = false;\n'
        +' }\n'
        +' preTCPStartTick = millis();\n'
        +' }\n';

  return "  doWiFiTick();\n";
};


Blockly.Arduino.bemfa_tcp_sub_topic_rev_msg = function() {

  
  var branch = Blockly.Arduino.statementToCode(this, 'DO');
  branch = branch.replace(/(^\s*)|(\s*$)/g, "");
  var funcBranch = Blockly.Arduino.statementToCode(this, 'bemfa_function_tcp_rev_msg');
  funcBranch = funcBranch.replace(/(^\s*)|(\s*$)/g, "");

 
  Blockly.Arduino.definitions_['kinclude_tcp_ESP8266WiFi_var_declare_tcp_SERVER2'] ='void subTopicCenter(){\n'
  +' if(subFlag == true){\n'
  +'  subFlag = false;\n';
    Blockly.Arduino.definitions_['kinclude_tcp_ESP8266WiFi_var_declare_tcp_SERVER3'] = '    '+branch+'\n';
    Blockly.Arduino.definitions_['kinclude_tcp_ESP8266WiFi_var_declare_tcp_SERVER4'] = ' }\n'
    +'}\n';



Blockly.Arduino.definitions_['kinclude_tcp_ESP8266WiFi_var_declare_tcp_SERVER5'] = '  void doTCPClientTick(){\n'
  +'  if(WiFi.status() != WL_CONNECTED) return;\n'
  +'  if (!TCPclient.connected()) {\n'
    +'  if(preTCPConnected == true){\n'
      +'    preTCPConnected = false;\n'
      +'   preTCPStartTick = millis();\n'
      +'   Serial.println();\n'
      +'   Serial.println("TCP Client disconnected.");\n'
      +'  TCPclient.stop();\n'
      +' }\n'
      +'else if(millis() - preTCPStartTick > 1*1000)\n'
      +'  startTCPClient();\n'
      +'}\n'
      +'else\n'
      +'{\n'
        +' if (TCPclient.available()) {\n'
          +'   char c =TCPclient.read();\n'
          +'   TcpClient_Buff +=c;\n'
          +'  TcpClient_BuffIndex++;\n'
          +'  TcpClient_preTick = millis();\n'
          +' if(TcpClient_BuffIndex>=MAX_PACKETSIZE - 1){\n'
            +'   TcpClient_BuffIndex = MAX_PACKETSIZE-2;\n'
            +'   TcpClient_preTick = TcpClient_preTick - 200;\n'
            +' }\n'
            +'  preHeartTick = millis();\n'
            +'}\n'
            +'if(millis() - preHeartTick >= KEEPALIVEATIME){\n'
              +'  preHeartTick = millis();\n'
              +'  Serial.println("--Keep alive:");\n'
              +'  sendtoTCPServer("ping\\r\\n");\n'
              +' }\n'
              +' }\n'
              +' if((TcpClient_Buff.length() >= 1) && (millis() - TcpClient_preTick>=200))\n'
              +' {\n'
                +' TCPclient.flush();\n'
                +'  TcpClient_Buff.trim();\n'
                +'   String topic = "";\n'
                +'   String msg = "";\n'
                +'if(TcpClient_Buff.length() > 15){\n'
                  +'  int topicIndex = TcpClient_Buff.indexOf("&topic=")+7;\n'
                  +'  int msgIndex = TcpClient_Buff.indexOf("&msg=");\n'
                  +'  topic = TcpClient_Buff.substring(topicIndex,msgIndex);\n'
                  +'  msg = TcpClient_Buff.substring(msgIndex+5);\n'
                  +'}\n'
                  +funcBranch+'\n'
                  +' msg = "";\n'
                  +' topic = "";\n'
                  +'TcpClient_Buff="";\n'
                  +'TcpClient_BuffIndex = 0;\n'
                  +'}\n'
                  +'}\n';

  return "doTCPClientTick();\nsubTopicCenter();";
};




//订阅主题
Blockly.Arduino.bemfa_tcp_Sub_Topic= function() {
  var sub_topic = Blockly.Arduino.valueToCode(this, 'tcp_sub_Topic', Blockly.Arduino.ORDER_ATOMIC);
  var sub_code = ' subTopic('   +sub_topic +  ');\n';
  return sub_code;
};


//发布消息
Blockly.Arduino.bemfa_tcp_Pub_Topic_payload= function() {
  var pub_topic = Blockly.Arduino.valueToCode(this, 'pub_Topic', Blockly.Arduino.ORDER_ATOMIC);
  var msg = Blockly.Arduino.valueToCode(this, 'payload', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['jnclude_tcp_ESP8266WiFi_var_declare_publishMsg'] = 'void publishMsg(String topic,String msg){\n'
   + ' String tcpTemp="";\n'
   +'  tcpTemp = "cmd=2&uid="+UID+"&topic="+topic+"&msg="+msg+"\\r\\n";\n'
   +'  sendtoTCPServer(tcpTemp);\n'
   +'  tcpTemp="";\n'
   +'  Serial.println("A message has been published");\n'
   +'  }\n';


   var pub_code = 'publishMsg('   +pub_topic +  ', '   +msg +  ');\n';
   return pub_code;
};

//使用帮助
Blockly.Arduino.bemfa_tcp_help= function() {
  Blockly.Arduino.setups_['bemfa_setup_tcp_help'] = 'Serial.println("help url: https://bemfa.com/m/tcp.html");';
   return "";
};








Blockly.Arduino.init_Bemfa_Mqtt = function() {
  var SERVER = Blockly.Arduino.valueToCode(this, 'Server', Blockly.Arduino.ORDER_ATOMIC);
  var PORT = Blockly.Arduino.valueToCode(this, 'port', Blockly.Arduino.ORDER_ATOMIC);

  var type = this.getFieldValue('type');
  var bemfa_reconnet =  "";
  if(type == '1'){
    Blockly.Arduino.definitions_['include_ESP8266WiFi'] = '#include <ESP8266WiFi.h>';
 
  }else{
    Blockly.Arduino.definitions_['include_ESP8266WiFi'] = '#include <WiFi.h>';
    bemfa_reconnet =  "    if(! WiFi.isConnected()) {WiFi.begin();}\n";
  }
  var ClientId =Blockly.Arduino.valueToCode(this, 'client_id', Blockly.Arduino.ORDER_ATOMIC);
  var UserName=Blockly.Arduino.valueToCode(this, 'username', Blockly.Arduino.ORDER_ATOMIC);
  var PassWord =Blockly.Arduino.valueToCode(this, 'password', Blockly.Arduino.ORDER_ATOMIC);



  Blockly.Arduino.definitions_['include_PubsubCliet'] = '#include <PubSubClient.h>\n'
  +'WiFiClient espClient;\n'
  +'PubSubClient  client(espClient);\n'
  +'#ifndef AP_CONFIG\n' 
  +'String UID = ' + ClientId +';\n'
  +'#endif\n'
  +'const char* UserName = ' + UserName +';\n'
  +'const char* PassWord = ' + PassWord +';\n'
  +'bool subTopicCenterFlag = false;\n'
  +'unsigned long bemfa_mqtt_current_millis;\n'
  +'unsigned long bemfa_mqtt_last_re_millis = 0;\n'
  +'void reConnect() {\n'
  +' if (!client.connected()) {\n'
  +'   if(client.connect(UID.c_str(),UserName,PassWord)){\n'
  +'     Serial.println("connected");\n'
  +'     subTopicCenterFlag = true;\n'
  +'    } else {\n'
  +'    bemfa_mqtt_current_millis = millis();\n'
  +'    if (bemfa_mqtt_current_millis - bemfa_mqtt_last_re_millis > 2000) { \n'
  +'      bemfa_mqtt_last_re_millis = millis();\n'
  +'      Serial.println(" try again reconnect");\n'
  +       bemfa_reconnet
  +'    }\n'
  +'    }\n'

  +' }\n'
  +'}\n';
  Blockly.Arduino.setups_['setup_initMqtt'] = 'client.setServer('+SERVER+', '   +PORT+  ');';
  return "reConnect();\nclient.loop();";
};

//订阅主题
Blockly.Arduino.bemfa_Sub_Topic= function() {
  var sub_topic = Blockly.Arduino.valueToCode(this, 'sub_Topic', Blockly.Arduino.ORDER_ATOMIC);

  if(sub_topic.substring(0,1) != "\""){
    sub_topic = sub_topic+'.c_str()'
  }

  var sub_code = '  Serial.print("sub topic:");Serial.println('+sub_topic+');\n  client.subscribe('   +sub_topic +  ');\n';
  return sub_code;
};


Blockly.Arduino.bemfa_MQTT_sub_topic_rev_msg = function() {


  Blockly.Arduino.setups_['wsetup_initClient'] ='client.setCallback(callback);';

  var branch = Blockly.Arduino.statementToCode(this, 'DO');
  branch = branch.replace(/(^\s*)|(\s*$)/g, "");

    Blockly.Arduino.definitions_['kinclude_tcp_ESP8266WiFi_var_declare_tcp_SERVERmqtt4'] ='void subMqttTopicCenter() {\n'
    +'  if(subTopicCenterFlag == true){\n'
    +'      subTopicCenterFlag = false;\n'
    Blockly.Arduino.definitions_['kinclude_tcp_ESP8266WiFi_var_declare_tcp_SERVERmqtt5'] = '    '+branch+'\n';
    Blockly.Arduino.definitions_['kinclude_tcp_ESP8266WiFi_var_declare_tcp_SERVERmqtt6'] ='}}\n';



  var branch = Blockly.Arduino.statementToCode(this, 'function');
  branch = branch.replace(/(^\s*)|(\s*$)/g, "");
  Blockly.Arduino.definitions_['kinclude_tcp_ESP8266WiFi_var_declare_tcp_SERVERmqtt7'] ='void callback(char* rtopic, byte* payload, unsigned int length) {\n'
  +' String msg = "";\n'
  +' String topic = rtopic;\n'
  +' for (int i = 0; i < length; i++) {\n'
  +'    msg += (char)payload[i];\n'
  +' }\n  '
  +branch+'\n'
  +' msg = "";\n'
  +' topic = "";\n'
  +' }\n';
  return "   subMqttTopicCenter();";
};




 Blockly.Arduino.bemfa_Mqtt_Connect_stat =function(){
  var code = 'client.connected()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


//发布消息
Blockly.Arduino.bemfa_Pub_Topic_payload= function() {
  var pub_topic = Blockly.Arduino.valueToCode(this, 'pub_Topic', Blockly.Arduino.ORDER_ATOMIC);
  if(pub_topic.indexOf("\"")<0){
    pub_topic = pub_topic+".c_str()";
  }
  var msg = Blockly.Arduino.valueToCode(this, 'payload', Blockly.Arduino.ORDER_ATOMIC);

  var pub_code = 'client.publish('   +pub_topic +  ', '   +msg +  ');\nSerial.println("A message has been published");\n';
  return pub_code;
};


//使用帮助
Blockly.Arduino.bemfa_mqtt_help= function() {
  Blockly.Arduino.setups_['bemfa_setup_mqtt_help'] = 'Serial.println("help url: https://bemfa.com/m/mqtt.html");';
  return "";
};

/***************/
Blockly.Arduino.bemfa_wechat01= function() {

  var type = this.getFieldValue('type');
  if(type == '1'){
    Blockly.Arduino.definitions_['include_ESP8266WiFi'] = '#include <ESP8266WiFi.h>';
    Blockly.Arduino.definitions_['include_ESP8266WiFi2'] = '#include <ESP8266HTTPClient.h>';
  }else{
    Blockly.Arduino.definitions_['include_ESP8266WiFi'] = '#include <WiFi.h>';
    Blockly.Arduino.definitions_['include_ESP8266WiFi2'] = '#include <HTTPClient.h>';
  }
  Blockly.Arduino.definitions_['include_var_declare_bemfa_WiFiClient']  = 'WiFiClient client_bemfa_wechat;';
  Blockly.Arduino.definitions_['include_var_declare_bemfa_HTTPClient']  = 'HTTPClient http_bemfa_wechat;';
  Blockly.Arduino.definitions_['define_include_var_declare_bemfa_HTTPClient2']  = 'int httpCode = 0;';


  //var value_buid = this.getFieldValue('buid');
  //var value_buid2 = this.getFieldValue('buid');
  var value_buid = Blockly.Arduino.valueToCode(this, 'buid', Blockly.Arduino.ORDER_ATOMIC);
  var value_devicename = Blockly.Arduino.valueToCode(this, 'devicename', Blockly.Arduino.ORDER_ATOMIC);
  var value_devicemsg = Blockly.Arduino.valueToCode(this, 'devicemsg', Blockly.Arduino.ORDER_ATOMIC);
  if(value_buid.substring(0,1) == "\""){
    value_buid = value_buid.replace(/^\"|\"$/g,'')
  }else{
    value_buid = "\"+"+value_buid+"+\"";
  }
  value_buid = value_buid.trim();
  if(value_devicename.substring(0,1) == "\""){
    value_devicename = value_devicename.replace(/^\"|\"$/g,'')
  }else{
    value_devicename = "\"+"+value_devicename+"+\"";
  }
  value_devicename = value_devicename.trim();

  if(value_devicemsg.substring(0,1) == "\""){
    value_devicemsg = value_devicemsg.replace(/^\"|\"$/g,'')
  }else{
    value_devicemsg = "\"+"+value_devicemsg+"+\"";
  }
  value_devicemsg = value_devicemsg.trim();

  if(value_devicemsg == ""){
    value_devicemsg = "空";
  }
  if(value_devicename == ""){
    value_devicename = "空";
  }



  // TODO: Assemble JavaScript into code variable.
  var code = 'http_bemfa_wechat.begin(client_bemfa_wechat,"http://api.bemfa.com/api/wechat/v1/weget.php?type=1&uid='  +value_buid +'&device='+value_devicename+'&msg='+value_devicemsg+'");\n'
  + 'httpCode = http_bemfa_wechat.GET();\n'
  + 'if (httpCode > 0) {\n'
    + '  String payload = http_bemfa_wechat.getString();\n'
    + '  Serial.println(payload);\n'
    + '}\n'
    + 'http_bemfa_wechat.end();\n';
    return code;
};

Blockly.Arduino.bemfa_wechat02= function() {

  var type = this.getFieldValue('type');
  if(type == '1'){
    Blockly.Arduino.definitions_['include_ESP8266WiFi'] = '#include <ESP8266WiFi.h>';
    Blockly.Arduino.definitions_['include_ESP8266WiFi2'] = '#include <ESP8266HTTPClient.h>';
  }else{
    Blockly.Arduino.definitions_['include_ESP8266WiFi'] = '#include <WiFi.h>';
    Blockly.Arduino.definitions_['include_ESP8266WiFi2'] = '#include <HTTPClient.h>';
  }
  Blockly.Arduino.definitions_['include_var_declare_bemfa_WiFiClient']  = 'WiFiClient client_bemfa_wechat;';
  Blockly.Arduino.definitions_['include_var_declare_bemfa_HTTPClient']  = 'HTTPClient http_bemfa_wechat;';
  Blockly.Arduino.definitions_['define_include_var_declare_bemfa_HTTPClient2']  = 'int httpCode = 0;';


  var value_buid = Blockly.Arduino.valueToCode(this, 'buid', Blockly.Arduino.ORDER_ATOMIC);
  var value_devicename = Blockly.Arduino.valueToCode(this, 'devicename', Blockly.Arduino.ORDER_ATOMIC);
  var value_devicemsg = Blockly.Arduino.valueToCode(this, 'devicemsg', Blockly.Arduino.ORDER_ATOMIC);

  if(value_buid.substring(0,1) == "\""){
    value_buid = value_buid.replace(/^\"|\"$/g,'')
  }else{
    value_buid = "\"+"+value_buid+"+\"";
  }
  value_buid = value_buid.trim();

  if(value_devicename.substring(0,1) == "\""){
    value_devicename = value_devicename.replace(/^\"|\"$/g,'')
  }else{
    value_devicename = "\"+"+value_devicename+"+\"";
  }
  value_devicename = value_devicename.trim();

  if(value_devicemsg.substring(0,1) == "\""){
    value_devicemsg = value_devicemsg.replace(/^\"|\"$/g,'')
  }else{
    value_devicemsg = "\"+"+value_devicemsg+"+\"";
  }
  value_devicemsg = value_devicemsg.trim();

  if(value_devicemsg == ""){
    value_devicemsg = "空";
  }
  if(value_devicename == ""){
    value_devicename = "空";
  }



  // TODO: Assemble JavaScript into code variable.
  var code = 'http_bemfa_wechat.begin(client_bemfa_wechat,"http://api.bemfa.com/api/wechat/v1/weget.php?type=2&uid='   +value_buid +'&device='+value_devicename+'&msg='+value_devicemsg+'");\n'
  + 'httpCode = http_bemfa_wechat.GET();\n'
  + 'if (httpCode > 0) {\n'
    + '  String payload = http_bemfa_wechat.getString();\n'
    + '  Serial.println(payload);\n'
    + '}\n'
    + 'http_bemfa_wechat.end();\n';
    return code;
};

Blockly.Arduino.bemfa_wechat03= function() {

  var type = this.getFieldValue('type');
  if(type == '1'){
    Blockly.Arduino.definitions_['include_ESP8266WiFi'] = '#include <ESP8266WiFi.h>';
    Blockly.Arduino.definitions_['include_ESP8266WiFi2'] = '#include <ESP8266HTTPClient.h>';
  }else{
    Blockly.Arduino.definitions_['include_ESP8266WiFi'] = '#include <WiFi.h>';
    Blockly.Arduino.definitions_['include_ESP8266WiFi2'] = '#include <HTTPClient.h>';
  }
  Blockly.Arduino.definitions_['include_var_declare_bemfa_WiFiClient']  = 'WiFiClient client_bemfa_wechat;';
  Blockly.Arduino.definitions_['include_var_declare_bemfa_HTTPClient']  = 'HTTPClient http_bemfa_wechat;';



  var value_buid = Blockly.Arduino.valueToCode(this, 'buid', Blockly.Arduino.ORDER_ATOMIC);
  var value_devicetime = Blockly.Arduino.valueToCode(this, 'devicetime', Blockly.Arduino.ORDER_ATOMIC);
  var value_devicemsg = Blockly.Arduino.valueToCode(this, 'devicemsg', Blockly.Arduino.ORDER_ATOMIC);

  if(value_devicetime == "false"){
    var value_deviceFlag = 0;
  }else{
    var value_deviceFlag = 1;
  }

  if(value_buid.substring(0,1) == "\""){
    value_buid = value_buid.replace(/^\"|\"$/g,'')
  }else{
    value_buid = "\"+"+value_buid+"+\"";
  }
  value_buid = value_buid.trim();

  if(value_devicemsg.substring(0,1) == "\""){
    value_devicemsg = value_devicemsg.replace(/^\"|\"$/g,'')
  }else{
    value_devicemsg = "\"+"+value_devicemsg+"+\"";
  }
  value_devicemsg = value_devicemsg.trim();

  if(value_devicemsg == ""){
    value_devicemsg = "空";
  }



  // TODO: Assemble JavaScript into code variable.
  var code = 'http_bemfa_wechat.begin(client_bemfa_wechat,"http://go.bemfa.com/v1/sendwechat?uid='   +value_buid +'&msg='+value_devicemsg+'&time='+value_deviceFlag+'");\n'
  + 'httpCode = http_bemfa_wechat.GET();\n'
  + 'if (httpCode > 0) {\n'
    + '  String payload = http_bemfa_wechat.getString();\n'
    + '  Serial.println(payload);\n'
    + '}\n'
    + 'http_bemfa_wechat.end();\n';
    return code;
};

Blockly.Arduino.bemfa_wechat04= function() {

  var type = this.getFieldValue('type');
  if(type == '1'){
    Blockly.Arduino.definitions_['include_ESP8266WiFi'] = '#include <ESP8266WiFi.h>';
    Blockly.Arduino.definitions_['include_ESP8266WiFi2'] = '#include <ESP8266HTTPClient.h>';
  }else{
    Blockly.Arduino.definitions_['include_ESP8266WiFi'] = '#include <WiFi.h>';
    Blockly.Arduino.definitions_['include_ESP8266WiFi2'] = '#include <HTTPClient.h>';
  }
  Blockly.Arduino.definitions_['include_var_declare_bemfa_WiFiClient']  = 'WiFiClient client_bemfa_wechat;';
  Blockly.Arduino.definitions_['include_var_declare_bemfa_HTTPClient']  = 'HTTPClient http_bemfa_wechat;';
  Blockly.Arduino.definitions_['define_include_var_declare_bemfa_HTTPClient2']  = 'int httpCode = 0;';

  var value_buid = Blockly.Arduino.valueToCode(this, 'buid', Blockly.Arduino.ORDER_ATOMIC);
  var value_msgtitle = Blockly.Arduino.valueToCode(this, 'msgtitle', Blockly.Arduino.ORDER_ATOMIC);
  var value_devicemsg = Blockly.Arduino.valueToCode(this, 'devicemsg', Blockly.Arduino.ORDER_ATOMIC);


  if(value_buid.substring(0,1) == "\""){
    value_buid = value_buid.replace(/^\"|\"$/g,'')
  }else{
    value_buid = "\"+"+value_buid+"+\"";
  }
  value_buid = value_buid.trim();

  if(value_msgtitle.substring(0,1) == "\""){
    value_msgtitle = value_msgtitle.replace(/^\"|\"$/g,'')
  }else{
    value_msgtitle = "\"+"+value_msgtitle+"+\"";
  }
  value_msgtitle = value_msgtitle.trim();

  if(value_devicemsg.substring(0,1) == "\""){
    value_devicemsg = value_devicemsg.replace(/^\"|\"$/g,'')
  }else{
    value_devicemsg = "\"+"+value_devicemsg+"+\"";
  }
  value_devicemsg = value_devicemsg.trim();

  if(value_devicemsg == ""){
    value_devicemsg = "空";
  }
  if(value_msgtitle == ""){
    value_msgtitle = "空";
  }

  // TODO: Assemble JavaScript into code variable.
  var code = 'http_bemfa_wechat.begin(client_bemfa_wechat,"http://go.bemfa.com/v1/sendwechatcard?uid='   +value_buid+'&title='+value_msgtitle+'&msg='+value_devicemsg+'");\n'
  + 'httpCode = http_bemfa_wechat.GET();\n'
  + 'if (httpCode > 0) {\n'
    + '  String payload = http_bemfa_wechat.getString();\n'
    + '  Serial.println(payload);\n'
    + '}\n'
    + 'http_bemfa_wechat.end();\n';
    return code;
};

//使用帮助
Blockly.Arduino.bemfa_wechat_help= function() {
  Blockly.Arduino.setups_['bemfa_setup_wechat_help'] = 'Serial.println("help url: https://bemfa.com/m/we.html");';
  return "";
};



//airkiss
Blockly.Arduino.bemfa_wechat_config_airkiss= function() {

  var type = this.getFieldValue('type');
  if(type == '1'){
    var wifimode = "WiFi.mode(WIFI_STA);\n  WiFi.disconnect();\n"
    Blockly.Arduino.definitions_['define_include_ESP8266WiFi'] = '#include <ESP8266WiFi.h>';
  }else{
    var wifimode = "WiFi.mode(WIFI_AP_STA);\nWiFi.disconnect(true,true);\n"
    Blockly.Arduino.definitions_['define_include_ESP8266WiFi'] = '#include <WiFi.h>';
  }
  Blockly.Arduino.definitions_['define_include_var_declare_bemfa_wechat_config_airkiss']  = '#include <EEPROM.h>\n'
  + '#include <Ticker.h>\n'
  + '#define HOST_NAME  "bemfa"\n'
  + 'char config_flag = 0;\n'
  + '#define MAGIC_NUMBER 0xAA\n'
  + 'struct config_type\n'
  + '{\n'
    + '  char stassid[32];\n'
    + '  char stapsw[64];\n'
    +'   char cuid[40];\n' 
    +'   char ctopic[32];\n' 
    + '  uint8_t reboot;\n'
    + '  uint8_t magic;\n'
    + '};\n'
    + 'config_type config;\n'
    + 'void doSmartconfig();\n'
    + 'void saveConfig();\n'
    + 'void initWiFi();\n'
    + 'void loadConfig();\n'
    + 'void restoreFactory();\n'
    + 'void waitKey();\n'
    + 'void doSmartconfig()\n'
    + '{\n'
      + '  Serial.print(" Smartconfig begin,Waiting for WeChat Config.....");\n'
      + '  '+wifimode+'\n'
      + '   WiFi.beginSmartConfig();\n'
      + '   int cnt = 0;\n'
      + '  while (!WiFi.smartConfigDone()) {\n'
        + '   delay(500);\n'
          + '   cnt++;\n'
          + '    if (cnt >= 360) {\n'
            + '    return;\n'
            + '    }\n'
            + '  }\n'
            + '   if (WiFi.smartConfigDone()) {\n'
            + '   strcpy(config.stassid, WiFi.SSID().c_str());\n'
            + '   strcpy(config.stapsw, WiFi.psk().c_str());\n'
            + '   config.magic = 0xAA;\n'
            + '   saveConfig();\n'
            + '   }\n'
            + '}\n'
            + 'void saveConfig()\n'
            + '{  \n'
              + ' int rand_key;\n'
              + ' uint8_t mac[6];\n'
              + ' WiFi.macAddress(mac);\n'
              + ' config.reboot = 0;\n'
              + ' EEPROM.begin(512);\n'
              + ' uint8_t *p = (uint8_t*)(&config);\n'
              + ' for (int i = 0; i < sizeof(config); i++)\n'
              + ' {\n'
                + '   EEPROM.write(i, *(p + i));\n'
                + ' }\n'
                + ' EEPROM.commit();\n'
                + ' }\n'
                + ' Ticker delayTimer;\n'
                + ' void delayRestart(float t) {\n'
                  + ' delayTimer.attach(t, []() {\n'
                    + ' ESP.restart();\n'
                    + ' });\n'
                    + ' }\n'
                    + 'void initWiFi()\n'
                    + '{\n'
                      + '  char temp[32];\n'
                      + '  uint8_t mac[6];\n'
                      + '  WiFi.macAddress(mac);\n'
                      + '  sprintf(temp, "%s_%02X%02X%02X", HOST_NAME, mac[3], mac[4], mac[5]);\n'
                      + ' WiFi.hostname(temp);\n'
                      + ' if(WiFi.status() != WL_CONNECTED){\n'
                      + ' '+wifimode+'\n'
                        + '   WiFi.begin(config.stassid, config.stapsw);//连接路由器\n'
                        + ' }\n'
                        + ' int connAttempts = 0;\n'
                        + ' while (WiFi.status() != WL_CONNECTED) {//检查是否连接成功\n'
                          + '   delay(500);\n'
                          + '   Serial.print(".");\n'
                          + '   connAttempts++;if (connAttempts > 30)break;\n'
                          + ' }\n'
                          + ' Serial.println("config over");\n'
                          + ' WiFi.softAP(temp);\n'
                          + ' }\n'
                          + ' uint8_t *p = (uint8_t*)(&config);\n'
                          + ' void loadConfig()\n'
                          + ' {\n'
                            + ' uint8_t mac[6];\n'
                            + ' WiFi.macAddress(mac);\n'
                            + ' EEPROM.begin(512);\n'
                            + ' for (int i = 0; i < sizeof(config); i++)\n'
                            + '   {\n'
                              + '   *(p + i) = EEPROM.read(i);\n'
                              + ' }\n'
                              + ' config.reboot = config.reboot + 1;\n'
                              + ' if(config.reboot>=4){\n'
                                + '    restoreFactory();\n'
                                + ' }\n'
                                + ' if(config.magic != 0xAA){\n'
                                  + '   config_flag = 1;\n'
                                  + ' }\n'
                                  + ' EEPROM.begin(512);\n'
                                  + ' for (int i = 0; i < sizeof(config); i++){\n'
                                    + '   EEPROM.write(i, *(p + i));\n'
                                    + ' }\n'
                                    + '  EEPROM.commit();\n'
                                    + ' delay(2000);\n'
                                    + ' EEPROM.begin(512);\n'
                                    + ' config.reboot = 0;\n'
                                    + ' for (int i = 0; i < sizeof(config); i++){\n'
                                      + '  EEPROM.write(i, *(p + i));\n'
                                      + ' }\n'
                                      + ' EEPROM.commit();\n'
                                      + ' delay(2000);\n'
                                      + ' }\n'
                                      + ' void restoreFactory()\n'
                                      + ' {\n'
                                        + ' Serial.println("Restore Factory....... ");\n'
                                        + ' config.magic = 0x00;\n'
                                        + ' strcpy(config.stassid, "");\n'
                                        + ' strcpy(config.stapsw, "");\n'
                                        + ' strcpy(config.cuid, "");\n'
                                        + ' strcpy(config.ctopic, "");\n'
                                        + ' config.magic = 0x00;\n'
                                        + ' saveConfig();\n'
                                        + ' delayRestart(1);\n'
                                        + ' while (1) {\n'
                                          + '  delay(100);\n'
                                          + ' }\n'
                                          + ' }\n'
                                          + ' void waitKey()\n'
                                          + ' {  \n'
                                            + '   if(config_flag == 1){\n'
                                              + '        doSmartconfig();\n' 
                                              + '     }\n'
                                              + '  }\n';

  Blockly.Arduino.setups_['bemfa_setup_wechat_wifi_config'] = 'loadConfig();\n'
 +'  waitKey();\n'
 +'  initWiFi();\n';
  return "";
};


//airkiss
Blockly.Arduino.bemfa_wechat_config_airkiss_applus= function() {

  var type = this.getFieldValue('type');
  if(type == '1'){
    var wifimode = "WiFi.mode(WIFI_STA);\nWiFi.disconnect();\n"
    Blockly.Arduino.definitions_['define_include_ESP8266WiFi'] = '#include <ESP8266WiFi.h>';
    Blockly.Arduino.definitions_['define_include_ESP8266WiFi2'] = '#include <ESP8266HTTPClient.h>';
  }else{
    var wifimode = "WiFi.mode(WIFI_AP_STA);\nWiFi.disconnect(true,true);\n"
    Blockly.Arduino.definitions_['define_include_ESP8266WiFi'] = '#include <WiFi.h>';
    Blockly.Arduino.definitions_['define_include_ESP8266WiFi2'] = '#include <HTTPClient.h>';
  }



  var deviceProto = this.getFieldValue('deviceProto');
  
  var deviceType = this.getFieldValue('deviceType');
  if(deviceType == "001"){
    var deviceTypeName = "插座";
  }else if(deviceType == "002"){
    var deviceTypeName = "灯";
  }else if(deviceType == "003"){
    var deviceTypeName = "风扇";
  }else if(deviceType == "004"){
    var deviceTypeName = "传感器";
  }else if(deviceType == "005"){
    var deviceTypeName = "空调";
  }else if(deviceType == "pic"){
    deviceProto = 5;
    var deviceTypeName = "图片";
  }
  if(deviceType == 5){
    var deviceTypeName = "图片";
  }


  var apuid = Blockly.Arduino.valueToCode(this, 'bemfa_wechat_ap_get_uid', Blockly.Arduino.ORDER_ATOMIC);
  var aptopic = Blockly.Arduino.valueToCode(this, 'bemfa_wechat_ap_get_topic', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['define_include_var_declare_bemfa_HTTPClient2']  = 'int httpCode = 0;';
  Blockly.Arduino.definitions_['define_include_var_declare_bemfa_wechat_config_airkiss_plus']  = '#include <EEPROM.h>\n' 
  +'#include <Ticker.h>\n' 
  +'#include <ArduinoJson.h>\n' 
  +'WiFiClient client_bemfa_WiFiClient;\n' 
  +'HTTPClient http_bemfa_HTTPClient;\n' 
  +'#define AP_CONFIG "ok"\n' 
  +'String UID = "";\n' 
  +'String wxTopic="";\n' 
  +'#define HOST_NAME  "bemfa"\n' 
  +'char config_flag = 0;\n' 
  +'#define MAGIC_NUMBER 0xAA\n' 
  +'struct config_type\n' 
  +'{\n' 
    +' char stassid[32];\n' 
    +' char stapsw[64];\n' 
    +' char cuid[40];\n' 
    +' char ctopic[32];\n' 
    +' uint8_t reboot;\n' 
    +' uint8_t magic;\n' 
  +'};\n' 
  +'config_type config;\n' 
  +'void doSmartconfig();\n' 
  +'void saveConfig();\n' 
  +'void initWiFi();\n' 
  +'void loadConfig();\n' 
  +'void restoreFactory();\n' 
  +'void waitKey();\n' 
  +'void doSmartconfig(){\n' 
    +'  Serial.print(" Smartconfig begin,Waiting for WeChat Config.....");\n' 
    + '  '+wifimode+'\n'
    +'  WiFi.beginSmartConfig();\n' 
    +'  int cnt = 0;\n' 
    +'  while (!WiFi.smartConfigDone()) {\n' 
      +'  delay(500);\n'  
        +'  cnt++;\n' 
        +'  if (cnt >= 360) {\n' 
          +'    return;\n' 
          +'  }\n' 
          +' }\n' 
          +'  if (WiFi.smartConfigDone()) {\n' 
          +'    strcpy(config.stassid, WiFi.SSID().c_str());\n' 
          +'    strcpy(config.stapsw, WiFi.psk().c_str());\n' 
          +'    config.magic = 0xAA;\n' 
          +'    saveConfig();\n' 
          +'  }\n'
          +'}\n' 
          +'void saveConfig(){\n' 
            +'   int rand_key;\n' 
            +'   uint8_t mac[6];\n' 
            +'   WiFi.macAddress(mac);\n' 
            +'   config.reboot = 0;\n' 
            +'   EEPROM.begin(512);\n' 
            +'   uint8_t *p = (uint8_t*)(&config);\n' 
            +'   for (int i = 0; i < sizeof(config); i++)\n' 
            +'   {\n' 
              +'     EEPROM.write(i, *(p + i));\n' 
              +'  }\n' 
              +'   EEPROM.commit();\n' 
              +'   }\n' 
+'   Ticker delayTimer;\n' 
+'   void delayRestart(float t) {\n' 
  +'   delayTimer.attach(t, []() {\n' 
    +'   ESP.restart();\n' 
    +'  });\n' 
    +'}\n' 
    +'void initWiFi(){\n' 
      +'    char temp[32];\n' 
      +'    uint8_t mac[6];\n' 
      +'    WiFi.macAddress(mac);\n' 
      +'    sprintf(temp, "%s_%02X%02X%02X", HOST_NAME, mac[3], mac[4], mac[5]);\n' 
      +'    WiFi.hostname(temp);\n' 
      +'    if(WiFi.status() != WL_CONNECTED){\n' 
      +'    '+wifimode+'\n'
        +'      WiFi.begin(config.stassid, config.stapsw);//连接路由器\n' 
        +'   }\n' 
        +'  int connAttempts = 0;\n'
        +'  while (WiFi.status() != WL_CONNECTED) {//检查是否连接成功\n'
          +'     delay(500);\n' 
          +'     Serial.print(".");\n' 
          +'     connAttempts++;if (connAttempts > 30)break;\n'
          +'   }\n' 
          +'    Serial.println("config over");\n' 
          +'    WiFi.softAP(temp);\n' 
          +'}\n' 
          +'uint8_t *p = (uint8_t*)(&config);\n' 
          +'void loadConfig()\n' 
          +'{\n' 
            +'      uint8_t mac[6];\n' 
            +'      WiFi.macAddress(mac);\n' 
            +'      EEPROM.begin(512);\n' 
            +'      for (int i = 0; i < sizeof(config); i++)\n' 
            +'        {\n' 
              +'        *(p + i) = EEPROM.read(i);\n' 
              +'      }\n' 
              +'      config.reboot = config.reboot + 1;\n' 
              +'      if(config.reboot>=4){\n' 
                +'         restoreFactory();\n' 
                +'     }\n' 
                +'     if(config.magic != 0xAA){\n' 
                  +'       config_flag = 1;\n' 
                  +'     }\n' 
                  +'     EEPROM.begin(512);\n' 
                  +'     for (int i = 0; i < sizeof(config); i++){\n' 
                    +'       EEPROM.write(i, *(p + i));\n' 
                    +'     }\n' 
                    +'       EEPROM.commit();\n' 
                    +'     delay(2000);\n' 
                    +'     EEPROM.begin(512);\n' 
                    +'      config.reboot = 0;\n' 
                    +'      for (int i = 0; i < sizeof(config); i++){\n' 
                      +'        EEPROM.write(i, *(p + i));\n' 
                      +'     }\n' 
                      +'    EEPROM.commit();\n' 
                      +'    delay(2000);\n' 
                      +'}\n' 
                      +'void restoreFactory(){\n' 
                        +'     Serial.println("Restore Factory....... ");\n' 
                        +'     config.magic = 0x00;\n' 
                        +'      strcpy(config.stassid, "");\n' 
                        +'     strcpy(config.stapsw, "");\n' 
                        +'      strcpy(config.cuid, "");\n' 
                        +'     strcpy(config.ctopic, "");\n' 
                        +'     config.magic = 0x00;\n' 
                        +'     saveConfig();\n' 
                        +'     delayRestart(1);\n' 
                        +'     while (1) {\n' 
                          +'        delay(100);\n' 
                          +'    }\n' 
                          +'}\n' 
                          +'void waitKey()\n' 
                          +'{\n' 
                            +'   if(config_flag == 1){\n' 
                              +'       doSmartconfig();\n' 
                              +'     }\n' 
                              +'}\n' 
                              +'void getUid(String mac){\n' 
                                +'     String topic = mac + \"'+deviceType+'\";\n' 
                                +'     if (strcmp(config.cuid, "") == 0){\n'      
                                  +'         http_bemfa_HTTPClient.begin(client_bemfa_WiFiClient,\"http://api.bemfa.com/api/device/v1/airkiss/?topic=\"+topic+\"&version='+deviceProto+'");\n' 
                                  +'         httpCode = http_bemfa_HTTPClient.GET();\n' 
                                  +'         if (httpCode > 0) {\n' 
                                    +'           String payload = http_bemfa_HTTPClient.getString();\n' 
                                    +'           StaticJsonDocument<200> doc;            //json数据解析\n' 
                                    +'           DeserializationError error = deserializeJson(doc, payload);\n' 
                                    +'           if (error) {\n' 
                                      +'             Serial.print(F("deserializeJson() failed: "));\n' 
                                      +'              Serial.println(error.c_str());\n' 
                                      +'           }\n' 
                                      +'           String code = doc["code"];\n' 
                                      +'           if(code == "5723200"){\n' 
                                        +'             String docUID = doc["uid"];\n' 
                                        +'            strcpy(config.cuid, docUID.c_str());\n' 
                                        +'            strcpy(config.ctopic, topic.c_str());\n' 
                                        +'           saveConfig();\n' 
                                        +'         }else{\n' 
                                          +'           Serial.println(" config ERROR.........");\n' 
                                          +'          }\n' 
                                          +'          http_bemfa_HTTPClient.end();\n' 
                                          +'      }\n' 
                                          +'    }\n' 
                                          +'    if (strcmp(config.ctopic, "") == 0){\n' 
                                            +'      wxTopic = topic;\n' 
                                            +'    }else{\n' 
                                              +'    wxTopic = config.ctopic;\n' 
                                              +'  }\n' 
                                              +'  UID = config.cuid;   \n'  
                                              +'}';

  Blockly.Arduino.setups_['bemfa_setup_wechat_wifi_airkiss_config_plus'] = '  String topic = WiFi.macAddress().substring(8);//取mac地址做主题用\n' 
  +'  topic.replace(":", "");//去掉:号\n' 
  +'  loadConfig();//加载存储的数据\n' 
  +'  waitKey();//检查是否需要airkiss配网\n' 
  +'  initWiFi();//初始化wifi信息，并连接路由器网络\n' 
  +'  getUid(topic);//获取密钥\n';
  return "";
};


//airkiss
Blockly.Arduino.bemfa_wechat_config_ap= function() {

  var type = this.getFieldValue('type');
  if(type == '1'){
    var wifimode = "WiFi.mode(WIFI_STA);\nWiFi.disconnect();\n"
    Blockly.Arduino.definitions_['define_include_ESP8266WiFi1'] = '#include <ESP8266WiFi.h>';

  }else{
    var wifimode = "WiFi.mode(WIFI_AP_STA);\nWiFi.disconnect(true,true);\n"
    Blockly.Arduino.definitions_['define_include_ESP8266WiFi1'] = '#include <WiFi.h>';
    
  }
  Blockly.Arduino.definitions_['define_include_var_declare_bemfa_wechat_config_airkiss']  = '#include <WiFiUDP.h>\n'
  +'#include <ArduinoJson.h>\n' 
  +'#include <EEPROM.h>\n' 
  +'#include <Ticker.h>\n' 
  +'char config_flag = 0;//判断是否配网\n' 
  +'#define MAGIC_NUMBER 0xAA //判断是否配网\n' 
  +'struct config_type\n' 
  +'{\n' 
    +'   char stassid[32];\n' 
    +'   char stapsw[16];\n' 
    +'   char cuid[40];\n' 
    +'   char ctopic[32];\n' 
    +'   uint8_t reboot;\n' 
    +'   uint8_t magic;\n' 
    +' };\n' 
    +' config_type config;\n' 
    +' char packetBuffer[255]; //发送数据包\n' 
    +' WiFiUDP Udp;\n' 
    +' uint8_t *p = (uint8_t*)(&config);\n' 
    +' void loadConfig()\n' 
    +' {\n' 
      +'   uint8_t mac[6];\n' 
      +'  WiFi.macAddress(mac);\n' 
      +'   EEPROM.begin(512);\n' 
      +'  for (int i = 0; i < sizeof(config); i++)\n' 
      +'   {\n' 
        +'     *(p + i) = EEPROM.read(i);\n' 
        +'  }\n' 
        +' config.reboot = config.reboot + 1;\n' 
        +' if(config.reboot>=4){\n' 
          +'   restoreFactory();\n' 
          +'  }\n' 
          +' if(config.magic != 0xAA){\n' 
            +'   config_flag = 1;\n' 
            +' }\n' 
            +' EEPROM.begin(512);\n' 
            +' for (int i = 0; i < sizeof(config); i++){\n' 
              +'   EEPROM.write(i, *(p + i));\n' 
              +' }\n' 
              +' EEPROM.commit();\n' 
              +'  delay(2000);\n' 
              +' EEPROM.begin(512);\n' 
              +' config.reboot = 0;\n' 
              +' for (int i = 0; i < sizeof(config); i++){\n' 
                +'   EEPROM.write(i, *(p + i));\n' 
                +' }\n' 
                +' EEPROM.commit();\n' 
                +' }\n' 
                +' void restoreFactory()\n' 
                +' {\n' 
                  +'   Serial.println(" Restore Factory....... ");\n' 
                  +'  config.magic = 0x00;\n' 
                  +'  strcpy(config.stassid, "");\n' 
                  +'  strcpy(config.stapsw, "");\n' 
                  +'  strcpy(config.cuid, "");\n' 
                  +'  strcpy(config.ctopic, "");\n' 
                  +'  config.magic = 0x00;\n' 
                  +'   saveConfig();\n' 
                  +'   delayRestart(1);\n' 
                  +'    while (1) {\n' 
                    +'   delay(100);\n' 
                    +' }\n' 
                    +' }\n' 
                    +' void saveConfig()\n' 
                    +'  {\n' 
                      +'   config.reboot = 0;\n' 
                      +'   EEPROM.begin(512);\n' 
                      +'   uint8_t *p = (uint8_t*)(&config);\n' 
                      +'   for (int i = 0; i < sizeof(config); i++)\n' 
                      +'    {\n' 
                        +'     EEPROM.write(i, *(p + i));\n' 
                        +'  }\n' 
                        +'  EEPROM.commit();\n' 
                        +' }\n' 
                        +' Ticker delayTimer;\n' 
                        +' void delayRestart(float t) {\n' 
                          +'  delayTimer.attach(t, []() {\n' 
                            +'    ESP.restart();\n' 
                            +'  });\n' 
                            +' }\n' 
                            +' void apConfig(String mac){\n' 
                              +'  if(config_flag == 1){\n' 
                              +'        String soft_ap_ssid = "bemfa_"+mac;\n'
                              +'        WiFi.softAP(soft_ap_ssid.c_str());\n'  
                                +'      Udp.begin(8266);\n' 
                                +'      Serial.println("Started Ap Config...");\n' 
                                +'  }\n' 
                                +' while(config_flag){//如果未配网，开启AP配网，并接收配网信息\n' 
                                  +'       int packetSize = Udp.parsePacket();\n' 
                                  +'       if (packetSize) {\n' 
                                    +'        IPAddress remoteIp = Udp.remoteIP();\n' 
                                    +'         int len = Udp.read(packetBuffer, 255);\n' 
                                    +'         if (len > 0) {\n' 
                                      +'          packetBuffer[len] = 0;\n' 
                                      +'       }\n' 
                                      +'       StaticJsonDocument<200> doc;\n' 
                                      +'       DeserializationError error = deserializeJson(doc, packetBuffer);\n' 
                                      +'       if (error) {\n' 
                                        +'       return;\n' 
                                        +'       }\n' 
                                        +' int cmdType = doc["cmdType"].as<int>();;\n' 
                                        +' const char* ssid = doc["ssid"];\n' 
                                        +' const char* password = doc["password"];\n' 
                                        +' if (cmdType == 1) {\n' 
                                          +'  config_flag = 0;\n' 
                                          +'  strcpy(config.stassid, ssid);\n' 
                                          +'  strcpy(config.stapsw, password);\n' 
                                          +'  config.reboot = 0;\n' 
                                          +'  config.magic = 0xAA;\n' 
                                          +'  saveConfig();\n' 
                                          +'  //收到信息，并回复\n' 
                                          +'  String  ReplyBuffer = "{\\"cmdType\\":2}";\n' 
                                          +'  Udp.beginPacket(Udp.remoteIP(), Udp.remotePort());\n' 
                                          +'  Udp.print(ReplyBuffer);\n' 
                                          +'  Udp.endPacket();\n' 
                                          +'  WiFi.softAPdisconnect(true);\n' 
                                          +' }\n' 
                                          +' }\n' 
                                          +' }\n' 
                                          +' Serial.println(" config over");\n' 
                                          +' }\n';

  Blockly.Arduino.setups_['bemfa_setup_wechat_wifi_apconfig'] = 'String topic = WiFi.macAddress().substring(8);//取mac地址做主题用\n' 
  +'  topic.replace(":", "");//去掉:号\n' 
  +'  loadConfig();//加载存储的数据\n' 
  +'  apConfig(topic);//加载ap\n' 
  +'    '+wifimode+'\n'
  +'  WiFi.begin(config.stassid, config.stapsw);//连接路由器\n'
  +'  int connAttempts = 0;\n'  
  +'  while (WiFi.status() != WL_CONNECTED) {//检查是否连接成功\n' 
    +'    delay(500);\n'
    +'    Serial.print(".");\n'
    +'    connAttempts++;if (connAttempts > 30)break;\n' 
    +'  }\n';
  return "";
};

//airkiss
Blockly.Arduino.bemfa_wechat_config_applus= function() {

  var type = this.getFieldValue('type');
  if(type == '1'){
    var wifimode = "WiFi.mode(WIFI_STA);\nWiFi.disconnect();\n"
    Blockly.Arduino.definitions_['define_include_ESP8266WiFi1'] = '#include <ESP8266WiFi.h>';
  }else{
    var wifimode = "WiFi.mode(WIFI_AP_STA);\nWiFi.disconnect(true,true);\n"
    Blockly.Arduino.definitions_['define_include_ESP8266WiFi1'] = '#include <WiFi.h>';
  }
  var deviceProto = this.getFieldValue('deviceProto');
  
  var deviceType = this.getFieldValue('deviceType');
  if(deviceType == "001"){
    var deviceTypeName = "插座";
  }else if(deviceType == "002"){
    var deviceTypeName = "灯";
  }else if(deviceType == "003"){
    var deviceTypeName = "风扇";
  }else if(deviceType == "004"){
    var deviceTypeName = "传感器";
  }else if(deviceType == "005"){
    var deviceTypeName = "空调";
  }else if(deviceType == "005"){
    var deviceTypeName = "空调";
  }else if(deviceType == "pic"){
    deviceProto = 5;
    var deviceTypeName = "图片";
  }
  if(deviceType == 5){
    var deviceTypeName = "图片";
  }



  var apuid = Blockly.Arduino.valueToCode(this, 'bemfa_wechat_ap_get_uid', Blockly.Arduino.ORDER_ATOMIC);
  var aptopic = Blockly.Arduino.valueToCode(this, 'bemfa_wechat_ap_get_topic', Blockly.Arduino.ORDER_ATOMIC);

  Blockly.Arduino.definitions_['define_include_var_declare_bemfa_wechat_config_airkiss']  = '#include <WiFiUDP.h>\n' 
  +'#include <ArduinoJson.h>\n' 
  +'#include <EEPROM.h>\n' 
  +'#include <Ticker.h>\n'
  +'char config_flag = 0;//判断是否配网\n' 
  +'#define MAGIC_NUMBER 0xAA //判断是否配网\n' 
  +'String aptype = "'+deviceType+'";//001插座类型，002灯类型，003风扇类型，，004传感器，，005空调\n' 
  +'String UID ="";\n' 
  +'#define AP_CONFIG "ok"\n'
  +'String APtopic="";\n' 
  +'struct config_type\n' 
  +'{\n' 
    +'  char stassid[32];\n' 
    +'  char stapsw[16];\n' 
    +'  char cuid[40];\n' 
    +'  char ctopic[32];\n' 
    +'  uint8_t reboot;\n' 
    +'  uint8_t magic;\n' 
    +'};\n' 
    +'config_type config;\n' 
    +'char packetBuffer[255]; //发送数据包\n' 
    +'WiFiUDP Udp;\n' 
    +'uint8_t *p = (uint8_t*)(&config);\n' 
    +'void loadConfig()\n' 
    +'{\n' 
      +'  uint8_t mac[6];\n' 
      +'  WiFi.macAddress(mac);\n' 
      +'  EEPROM.begin(512);\n' 
      +'  for (int i = 0; i < sizeof(config); i++)\n' 
      +'  {\n' 
        +'    *(p + i) = EEPROM.read(i);\n' 
        +'  }\n' 
        +' config.reboot = config.reboot + 1;\n' 
        +' if(config.reboot>=4){\n' 
          +'  restoreFactory();\n' 
          +'   }\n' 
          +'if(config.magic != 0xAA){\n' 
            +'  config_flag = 1;\n' 
            +'}\n' 
            +'EEPROM.begin(512);\n' 
            +'for (int i = 0; i < sizeof(config); i++){\n' 
              +'  EEPROM.write(i, *(p + i));\n' 
              +'}\n' 
              +'EEPROM.commit();\n' 
              +'delay(2000);\n' 
              +'EEPROM.begin(512);\n' 
              +'config.reboot = 0;\n' 
              +'for (int i = 0; i < sizeof(config); i++){\n' 
                +' EEPROM.write(i, *(p + i));\n' 
                +'}\n' 
                +'EEPROM.commit();\n' 
                +'}\n' 
                +'void restoreFactory()\n' 
                +'{\n' 
                  +'  Serial.println(" Restore Factory....... ");\n' 
                  +'  config.magic = 0x00;\n' 
                  +'  strcpy(config.stassid, "");\n' 
                  +'  strcpy(config.stapsw, "");\n' 
                  +'  strcpy(config.cuid, "");\n' 
                  +'  strcpy(config.ctopic, "");\n' 
                  +'  config.magic = 0x00;\n' 
                  +'  saveConfig();\n' 
                  +'  delayRestart(1);\n' 
                  +'   while (1) {\n' 
                    +'    delay(100);\n' 
                    +'  }\n' 
                    +'}\n' 
                    +'void saveConfig()\n' 
                    +'{\n' 
                      +' config.reboot = 0;\n' 
                      +' EEPROM.begin(512);\n' 
                      +' uint8_t *p = (uint8_t*)(&config);\n' 
                      +' for (int i = 0; i < sizeof(config); i++)\n' 
                      +'  {\n' 
                        +'    EEPROM.write(i, *(p + i));\n' 
                        +' }\n' 
                        +' EEPROM.commit();\n' 
                        +'}\n' 
                        +'Ticker delayTimer;\n' 
                        +'void delayRestart(float t) {\n' 
                          +' delayTimer.attach(t, []() {\n' 
                            +'   ESP.restart();\n' 
                            +'  });\n' 
                            +' }\n' 
                            +'void apConfig(String mac){\n' 
                              +'  if(config_flag == 1){\n' 
                                +'      String soft_ap_ssid = "bemfa_"+mac;\n'
                                +'      WiFi.softAP(soft_ap_ssid.c_str());\n'  
                                +'      Udp.begin(8266);\n' 
                                +'      Serial.println("Started Ap Config...");\n' 
                                +' }\n' 
                                +' String topic = mac+aptype;\n' 
                                +' while(config_flag){//如果未配网，开启AP配网，并接收配网信息\n' 
                                  +'    int packetSize = Udp.parsePacket();\n' 
                                  +'    if (packetSize) {\n' 
                                    +'      IPAddress remoteIp = Udp.remoteIP();\n' 
                                    +'      int len = Udp.read(packetBuffer, 255);\n' 
                                    +'      if (len > 0) {\n' 
                                    +'       packetBuffer[len] = 0;\n' 
                                    +'      }\n' 
                                      +'     StaticJsonDocument<200> doc;\n' 
                                      +'     DeserializationError error = deserializeJson(doc, packetBuffer);\n' 
                                      +'     if (error) {\n' 
                                        +'     Serial.println(error.f_str());\n' 
                                        +'     return;\n' 
                                        +'   }\n' 
                                        +'  int cmdType = doc["cmdType"].as<int>();;\n' 
                                        +'  const char* ssid = doc["ssid"];\n' 
                                        +'  const char* password = doc["password"];\n' 
                                        +'  const char* token = doc["token"];\n' 
                                        +'  Serial.println(cmdType);\n' 
                                        +'  if (cmdType == 1) {\n' 
                                          +'    config_flag = 0;\n' 
                                          +'    strcpy(config.stassid, ssid);\n' 
                                          +'    strcpy(config.stapsw, password);\n' 
                                          +'    strcpy(config.cuid, token);\n' 
                                          +'    config.reboot = 0;\n' 
                                          +'    config.magic = 0xAA;\n' 
                                          +'    saveConfig();\n' 
                                          +'    //收到信息，并回复\n' 
                                          +'    String  ReplyBuffer = "{\\"cmdType\\":2,\\"productId\\":\\""+topic+"\\",\\"deviceName\\":\\"'+deviceTypeName+'\\",\\"protoVersion\\":\\"'+deviceProto+'\\"}";\n' 
                                          +'    Udp.beginPacket(Udp.remoteIP(), Udp.remotePort());\n' 
                                          +'    Udp.print(ReplyBuffer);\n' 
                                          +'    Udp.endPacket();\n' 
                                          +'    WiFi.softAPdisconnect(true);\n' 
                                          +'  }\n' 
                                          +' }\n' 
                                          +' }\n' 
                                          +'UID = config.cuid;\n' 
                                          +'APtopic = topic;\n' 
                                          +'}\n';

  Blockly.Arduino.setups_['bemfa_setup_wechat_wifi_apconfig'] = 'String topic = WiFi.macAddress().substring(8);//取mac地址做主题用\n' 
  +'  topic.replace(":", "");//去掉:号\n' 
  +'  loadConfig();//加载存储的数据\n' 
  +'  apConfig(topic);//加载ap\n' 
  +'    '+wifimode+'\n'
  +'  WiFi.begin(config.stassid, config.stapsw);//连接路由器\n'
  +'  int connAttempts = 0;\n'
  +'  while (WiFi.status() != WL_CONNECTED) {//检查是否连接成功\n' 
    +'    delay(500);\n' 
    +'    Serial.print(".");\n' 
    +'    connAttempts++;if (connAttempts > 30)break;\n' 
    +'  }\n';
  return "";
};

//恢复出厂
Blockly.Arduino.bemfa_wechat_reBegin= function() {
  var code = 'Serial.println(" Restore Factory....... ");\n' 
  +'  config.magic = 0x00;\n' 
  +'  strcpy(config.stassid, "");\n' 
  +'  strcpy(config.stapsw, "");\n' 
  +'  strcpy(config.cuid, "");\n' 
  +'  strcpy(config.ctopic, "");\n' 
  +'  config.magic = 0x00;\n' 
  +'  saveConfig();\n' 
  +'  delayRestart(1);\n' 
  return code;
};



//使用帮助
Blockly.Arduino.bemfa_wechat_config_help= function() {
  Blockly.Arduino.setups_['bemfa_setup_wechat_help'] = 'Serial.println("help url: https://bemfa.com/m/m.html");';
  return "";
};



//esp32 拍照上传
Blockly.Arduino.init_Bemfa_ESP_cam= function() {

  var bemfa_uid = Blockly.Arduino.valueToCode(this, 'esp32cam_client_id', Blockly.Arduino.ORDER_ATOMIC);
  var bemfa_topic_id = Blockly.Arduino.valueToCode(this, 'esp32cam_topic_id', Blockly.Arduino.ORDER_ATOMIC);
  var bemfa_wechat_msg =Blockly.Arduino.valueToCode(this, 'bemfa_push_cam_wechat_msg', Blockly.Arduino.ORDER_ATOMIC);
  var bemfa_wechat_msg_cam = Blockly.Arduino.valueToCode(this, 'bemfa_push_cam_wechat_cam_msg', Blockly.Arduino.ORDER_ATOMIC);
  var bemfa_wechat_cam_path =Blockly.Arduino.valueToCode(this, 'bemfa_push_cam_wechat_cam_path', Blockly.Arduino.ORDER_ATOMIC);

 

  if(bemfa_wechat_msg == '"空"'){
    bemfa_wechat_msg = '""';
  }
  if(bemfa_wechat_msg_cam == '"空"'){
    bemfa_wechat_msg_cam = '""';
  }
  if(bemfa_wechat_cam_path == '"空"'){
    bemfa_wechat_cam_path = '""';
  }

  if(bemfa_uid.substring(0,1) != "\""){
    bemfa_uid = bemfa_uid+'.c_str()'
  }
  if(bemfa_topic_id.substring(0,1) != "\""){
    bemfa_topic_id = bemfa_topic_id+'.c_str()'
  }
  if(bemfa_wechat_msg.substring(0,1) != "\""){
    bemfa_wechat_msg = bemfa_wechat_msg+'.c_str()'
  }
  if(bemfa_wechat_msg_cam.substring(0,1) != "\""){
    bemfa_wechat_msg_cam = bemfa_wechat_msg_cam+'.c_str()'
  }
  if(bemfa_wechat_cam_path.substring(0,1) != "\""){
    bemfa_wechat_cam_path = bemfa_wechat_cam_path+'.c_str()'
  }




  var funcBranch = Blockly.Arduino.statementToCode(this, 'bemfa_function_pic_rev');
  funcBranch = funcBranch.replace(/(^\s*)|(\s*$)/g, "");


  Blockly.Arduino.definitions_['define_include_var_declare_bemfa_cam_pic1'] = '#include "esp_http_client.h"';
  Blockly.Arduino.definitions_['include_var_declare_bemfa_cam_pic']  = '#include "esp_camera.h"\n' 
  +'#include "esp_camera.h"\n' 
  +'#include <WiFi.h>\n' 
  +'#include <ArduinoJson.h>\n' 
  +'static String httpResponseString;\n'  
  +'#define PWDN_GPIO_NUM     32\n' 
  +'#define RESET_GPIO_NUM    -1\n' 
  +'#define XCLK_GPIO_NUM      0\n' 
  +'#define SIOD_GPIO_NUM     26\n' 
  +'#define SIOC_GPIO_NUM     27\n' 
  +'#define Y9_GPIO_NUM       35\n' 
  +'#define Y8_GPIO_NUM       34\n' 
  +'#define Y7_GPIO_NUM       39\n' 
  +'#define Y6_GPIO_NUM       36\n' 
  +'#define Y5_GPIO_NUM       21\n' 
  +'#define Y4_GPIO_NUM       19\n' 
  +'#define Y3_GPIO_NUM       18\n' 
  +'#define Y2_GPIO_NUM        5\n' 
  +'#define VSYNC_GPIO_NUM    25\n' 
  +'#define HREF_GPIO_NUM     23\n' 
  +'#define PCLK_GPIO_NUM     22\n'; 

  Blockly.Arduino.setups_['bemfa_setup_bemfa_cam_pic'] = 'camera_config_t configCam;\n' 
  +'  configCam.ledc_channel = LEDC_CHANNEL_0;\n' 
  +'  configCam.ledc_timer = LEDC_TIMER_0;\n' 
  +'  configCam.pin_d0 = Y2_GPIO_NUM;\n' 
  +'  configCam.pin_d1 = Y3_GPIO_NUM;\n' 
  +'  configCam.pin_d2 = Y4_GPIO_NUM;\n' 
  +'  configCam.pin_d3 = Y5_GPIO_NUM;\n' 
  +'  configCam.pin_d4 = Y6_GPIO_NUM;\n' 
  +'  configCam.pin_d5 = Y7_GPIO_NUM;\n' 
  +'  configCam.pin_d6 = Y8_GPIO_NUM;\n' 
  +'  configCam.pin_d7 = Y9_GPIO_NUM;\n' 
  +'  configCam.pin_xclk = XCLK_GPIO_NUM;\n' 
  +'  configCam.pin_pclk = PCLK_GPIO_NUM;\n' 
  +'  configCam.pin_vsync = VSYNC_GPIO_NUM;\n' 
  +'  configCam.pin_href = HREF_GPIO_NUM;\n' 
  +'  configCam.pin_sscb_sda = SIOD_GPIO_NUM;\n' 
  +'  configCam.pin_sscb_scl = SIOC_GPIO_NUM;\n' 
  +'  configCam.pin_pwdn = PWDN_GPIO_NUM;\n' 
  +'  configCam.pin_reset = RESET_GPIO_NUM;\n' 
  +'  configCam.xclk_freq_hz = 20000000;\n' 
  +'  configCam.pixel_format = PIXFORMAT_JPEG;\n' 
  +'  if (psramFound()) {\n' 
    +'    configCam.frame_size = FRAMESIZE_UXGA;\n' 
    +'    configCam.jpeg_quality = 10;\n' 
    +'    configCam.fb_count = 2;\n' 
    +'  } else {\n' 
      +'    configCam.frame_size = FRAMESIZE_SVGA;\n' 
      +'    configCam.jpeg_quality = 12;\n' 
      +'    configCam.fb_count = 1;\n' 
      +'  }\n' 
      +'  esp_err_t err = esp_camera_init(&configCam);\n' 
      +'  if (err != ESP_OK) {\n' 
        +'    Serial.printf("Camera init failed with error 0x%x", err);\n' 
        +'    return;\n' 
        +'  }\n';
Blockly.Arduino.definitions_['kinclude_var_declare_bemfa_cam_pic2']  = 'esp_err_t _http_event_handler(esp_http_client_event_t *evt)\n'
+'{\n'
  +'  if (evt->event_id == HTTP_EVENT_ON_DATA)\n'
  +'   {\n'
    +'       httpResponseString.concat((char *)evt->data);\n'
    +'   }\n'
    +'    return ESP_OK;\n'
    +'}\n'
    +'static esp_err_t take_send_photo()\n'
    +'{\n'
    +'   if(! WiFi.isConnected()) {\n'
      +'        WiFi.begin();\n'
      +'  }\n'
      +'  Serial.println("Taking picture...");\n'
      +'  camera_fb_t * fb = NULL;\n'
      +'  esp_err_t res = ESP_OK;\n'
      +'  fb = esp_camera_fb_get();\n'
      +'  if (!fb) {\n'
        +'    Serial.println("Camera capture failed");\n'
        +'    return ESP_FAIL;\n'
        +'  }\n'
        +'  httpResponseString.clear();\n'
        +'  esp_http_client_handle_t http_client;\n'
        +'  esp_http_client_config_t config_client = {0};\n'
        +'  config_client.url = "http://images.bemfa.com/upload/v1/upimages.php";\n'
        +'  config_client.event_handler = _http_event_handler;\n'
        +'  config_client.method = HTTP_METHOD_POST;\n'
        +'  http_client = esp_http_client_init(&config_client);\n'
        +'  esp_http_client_set_post_field(http_client, (const char *)fb->buf, fb->len);//设置http发送的内容和长度\n'
        +'  esp_http_client_set_header(http_client, "Content-Type", "image/jpg"); //设置http头部字段\n'
        +'  esp_http_client_set_header(http_client, "Authorization", '+bemfa_uid+');        //设置http头部字段\n'
        +'  esp_http_client_set_header(http_client, "Authtopic", '+bemfa_topic_id+');          //设置http头部字段\n'
        +'  esp_http_client_set_header(http_client, "wechatmsg", '+bemfa_wechat_msg+');      //设置http头部字段\n'
        +'  esp_http_client_set_header(http_client, "wecommsg", '+bemfa_wechat_msg_cam+');        //设置http头部字段\n'
        +'  esp_http_client_set_header(http_client, "picpath", '+bemfa_wechat_cam_path+');          //设置http头部字段\n'
        +'  esp_err_t err = esp_http_client_perform(http_client);//发送http请求\n'
        +' if (err == ESP_OK) {\n'
          +'   //json数据解析\n'
          +'    StaticJsonDocument<200> doc;\n'
          +'    DeserializationError error = deserializeJson(doc, httpResponseString);\n'
          +'    if (error) {\n'
            +'       Serial.print(F("deserializeJson() failed: "));\n'
            +'       Serial.println(error.c_str());\n'
            +'     }\n'
            +'     String url = doc["url"];\n'
            +'     '+funcBranch+'\n'
            +'    }\n'
            +'    esp_http_client_cleanup(http_client);\n'
            +'    esp_camera_fb_return(fb);   \n'   
            +'}\n';
  

  return "take_send_photo();";
};



//使用帮助
Blockly.Arduino.bemfa_wechat_esp32cam_config_help= function() {
  Blockly.Arduino.setups_['bemfa_wechat_esp32cam_config_help'] = 'Serial.println("help url: https://bemfa.com/m/c.html");';
  return "";
};


