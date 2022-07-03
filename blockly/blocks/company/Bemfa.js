//下列三行代码,为刚需,此提供了下列所有代码的入口
'use strict';
goog.provide('Blockly.Blocks.Bemfa');//注意脚本类别及路径名称
goog.require('Blockly.Blocks');
var BoardType=[["ESP8266", "1"],["ESP32", "2"]];
var DeviceType=[[Blockly.Bemfa_Mixly_wechat_cre_config_device_name1, "002"],[Blockly.Bemfa_Mixly_wechat_cre_config_device_name2, "001"],[Blockly.Bemfa_Mixly_wechat_cre_config_device_name3, "003"],[Blockly.Bemfa_Mixly_wechat_cre_config_device_name4, "004"],[Blockly.Bemfa_Mixly_wechat_cre_config_device_name5, "005"],[Blockly.Bemfa_Mixly_wechat_cre_config_device_name6, "pic"]];
var DeviceProto=[["tcp", "3"],["mqtt", "1"],["图云", "5"]];

//设置服务器地址与端口号
Blockly.Blocks.init_Bemfa_TCP = {
  init: function() {
    this.setColour(133);
    this.appendDummyInput("")
       .appendField(Blockly.Bemfa_Mixly_tcp_Server_Config)
       this.appendDummyInput("board")
       .appendField(Blockly.Bemfa_Mixly_Board_Type).appendField(new Blockly.FieldDropdown(BoardType), "type");
    this.appendValueInput("tcp_Server")
         .setCheck(String)
         .setAlign(Blockly.ALIGN_RIGHT)
         .appendField(Blockly.Bemfa_Mixly_MQTT_SERVER_ADDR);
    this.appendValueInput("tcp_port")
       .setCheck(Number)
       .setAlign(Blockly.ALIGN_RIGHT)
       .appendField(Blockly.Bemfa_Mixly_MQTT_SERVER_PORT);
    this.appendValueInput("tcp_client_id")
       .setCheck(String)
       .setAlign(Blockly.ALIGN_RIGHT)
       .appendField(Blockly.Bemfa_Mixly_tcp_Server_uid);//开启模块右侧可连接
       this.setPreviousStatement(true, null);
       this.setNextStatement(true, null);
       this.setTooltip("");
       this.setHelpUrl(Blockly.Bemfa_Mixly_MQTT_helpurl);
  }
};

Blockly.Blocks.bemfa_tcp_sub_topic_rev_msg = {
  init: function() {
    this.appendDummyInput()
    .appendField(Blockly.Bemfa_Mixly_MQTT_Sub_Topic_Center);
    this.appendStatementInput('DO')
        .setCheck(null);
    this.appendDummyInput()
        .appendField(Blockly.Bemfa_Mixly_MQTT_msg_Rev);
    this.appendStatementInput("bemfa_function_tcp_rev_msg")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(133);
    this.setTooltip(Blockly.Bemfa_Mixly_MQTT_sub_tip);
    this.setHelpUrl(Blockly.Bemfa_Mixly_MQTT_helpurl);

  }
};
//订阅主题
Blockly.Blocks.bemfa_tcp_Sub_Topic = {
  init: function() {
    this.setColour(133);
    this.appendValueInput("tcp_sub_Topic")
         .setCheck(String)
         .setAlign(Blockly.ALIGN_RIGHT)
         .appendField(Blockly.Bemfa_Mixly_MQTT_Sub_Topic);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.MQTT_TEST_TOOLTIP);
    this.setHelpUrl(Blockly.Bemfa_Mixly_MQTT_helpurl);
  }
};




//发布消息
Blockly.Blocks.bemfa_tcp_Pub_Topic_payload = {
  init: function() {
    this.setColour(133);
    this.appendDummyInput("")
       .appendField(Blockly.Bemfa_Mixly_MQTT_Pub_Msg)
    this.appendValueInput("pub_Topic")
         .setCheck(String)
         .setAlign(Blockly.ALIGN_RIGHT)
         .appendField(Blockly.Bemfa_Mixly_MQTT_Topic);
    this.appendValueInput("payload")
       .setCheck(String)
       .setAlign(Blockly.ALIGN_RIGHT)
       .appendField(Blockly.Bemfa_Mixly_MQTT_Msg_Payload);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.MQTT_TEST_TOOLTIP);
    this.setHelpUrl(Blockly.Bemfa_Mixly_MQTT_helpurl);
  }
};


//使用帮助
Blockly.Blocks.bemfa_tcp_help = {
  init: function() {
    this.setColour(60);
    this.appendValueInput("tcp_help")
        .setCheck(null)
        .appendField(Blockly.Bemfa_Mixly_tcp_help);
    this.setTooltip(Blockly.MQTT_TEST_TOOLTIP);
    this.setHelpUrl(Blockly.Bemfa_Mixly_MQTT_helpurl);
  }
};



//设置服务器地址与端口号
Blockly.Blocks.init_Bemfa_Mqtt = {
  init: function() {
    this.setColour(195);
    this.appendDummyInput("")
       .appendField(Blockly.Bemfa_Mixly_MQTT_Server_Config)
       this.appendDummyInput("board")
       .appendField(Blockly.Bemfa_Mixly_Board_Type).appendField(new Blockly.FieldDropdown(BoardType), "type");
    this.appendValueInput("Server")
         .setCheck(String)
         .setAlign(Blockly.ALIGN_RIGHT)
         .appendField(Blockly.Bemfa_Mixly_MQTT_SERVER_ADDR);
    this.appendValueInput("port")
       .setCheck(Number)
       .setAlign(Blockly.ALIGN_RIGHT)
       .appendField(Blockly.Bemfa_Mixly_MQTT_SERVER_PORT);
    this.appendValueInput("client_id")
       .setCheck(String)
       .setAlign(Blockly.ALIGN_RIGHT)
       .appendField(Blockly.Bemfa_Mixly_MQTT_clientID);//开启模块右侧可连接
     this.appendValueInput("username")
       .setCheck(String)
       .setAlign(Blockly.ALIGN_RIGHT)  //开启模块右侧可连接
       .appendField(Blockly.Bemfa_Mixly_MQTT_UserName);
     this.appendValueInput("password")
       .setCheck(String)
       .setAlign(Blockly.ALIGN_RIGHT)//开启模块右侧可连接
       .appendField(Blockly.Bemfa_Mixly_MQTT_User_Passwd);

       this.setPreviousStatement(true, null);
       this.setNextStatement(true, null);
       this.setTooltip("");
       this.setHelpUrl(Blockly.Bemfa_Mixly_MQTT_helpurl);
  }
};

Blockly.Blocks.bemfa_MQTT_sub_topic_rev_msg = {
  init: function() {
    this.appendDummyInput()
    .appendField(Blockly.Bemfa_Mixly_MQTT_Sub_Topic_Center);
    this.appendStatementInput('DO')
        .setCheck(null);
    this.appendDummyInput()
        .appendField(Blockly.Bemfa_Mixly_MQTT_msg_Rev);
    this.appendStatementInput("function")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(195);
    this.setTooltip(Blockly.Bemfa_Mixly_MQTT_sub_tip);
    this.setHelpUrl(Blockly.Bemfa_Mixly_MQTT_helpurl);

  }
};



//订阅主题
Blockly.Blocks.bemfa_Sub_Topic = {
  init: function() {
    this.setColour(195);
    this.appendValueInput("sub_Topic")
         .setCheck(String)
         .setAlign(Blockly.ALIGN_RIGHT)
         .appendField(Blockly.Bemfa_Mixly_MQTT_Sub_Topic);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.MQTT_TEST_TOOLTIP);
    this.setHelpUrl(Blockly.Bemfa_Mixly_MQTT_helpurl);
  }
};

//连接状态
Blockly.Blocks.bemfa_Mqtt_Connect_stat = {
  init: function() {
    this.setColour(195);
    this.appendDummyInput("")
       .appendField(Blockly.Bemfa_Mixly_MQTT_Server_Connect)
    //this.setPreviousStatement(true, null);
    //this.setNextStatement(true, null);
    this.setOutput(true, Boolean);
    this.setTooltip(Blockly.MQTT_TEST_TOOLTIP);
    this.setHelpUrl(Blockly.Bemfa_Mixly_MQTT_helpurl);
  }
};

//发布消息
Blockly.Blocks.bemfa_Pub_Topic_payload = {
  init: function() {
    this.setColour(195);
    this.appendDummyInput("")
       .appendField(Blockly.Bemfa_Mixly_MQTT_Pub_Msg)
    this.appendValueInput("pub_Topic")
         .setCheck(String)
         .setAlign(Blockly.ALIGN_RIGHT)
         .appendField(Blockly.Bemfa_Mixly_MQTT_Topic);
    this.appendValueInput("payload")
        .setCheck(String)
       .setAlign(Blockly.ALIGN_RIGHT)
       .appendField(Blockly.Bemfa_Mixly_MQTT_Msg_Payload);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.MQTT_TEST_TOOLTIP);
    this.setHelpUrl(Blockly.Bemfa_Mixly_MQTT_helpurl);
  }
};




//使用帮助
Blockly.Blocks.bemfa_mqtt_help = {
  init: function() {
    this.setColour(60);
    this.appendValueInput("mqtt_help")
        .setCheck(null)
        .appendField(Blockly.Bemfa_Mixly_tcp_help);
    this.setTooltip(Blockly.MQTT_TEST_TOOLTIP);
    this.setHelpUrl(Blockly.Bemfa_Mixly_MQTT_helpurl);
  }
};

Blockly.Blocks.bemfa_wechat01 = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Bemfa_Mixly_wechat_sendmsg_type1);
        this.appendDummyInput("board")
        .appendField(Blockly.Bemfa_Mixly_Board_Type).appendField(new Blockly.FieldDropdown(BoardType), "type");
    this.appendValueInput("buid")
         .setCheck(String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Bemfa_Mixly_tcp_Server_uid );
    this.appendValueInput("devicename")
         .setCheck(String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Bemfa_Mixly_wechat_device_name);
    this.appendValueInput("devicemsg")
         .setCheck(String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Bemfa_Mixly_wechat_msg);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.bemfa_wechat02 = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Bemfa_Mixly_wechat_sendmsg_type2);
        this.appendDummyInput("board")
        .appendField(Blockly.Bemfa_Mixly_Board_Type).appendField(new Blockly.FieldDropdown(BoardType), "type");
    this.appendValueInput("buid")
         .setCheck(String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Bemfa_Mixly_tcp_Server_uid );
    this.appendValueInput("devicename")
         .setCheck(String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Bemfa_Mixly_wechat_device_name);
    this.appendValueInput("devicemsg")
         .setCheck(String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Bemfa_Mixly_wechat_msg);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks.bemfa_wechat03 = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Bemfa_Mixly_wechat_commsg_text);
    this.appendDummyInput("board")
        .appendField(Blockly.Bemfa_Mixly_Board_Type).appendField(new Blockly.FieldDropdown(BoardType), "type");
    this.appendValueInput("buid")
         .setCheck(String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Bemfa_Mixly_tcp_Server_uid );
    this.appendValueInput("devicemsg")
         .setCheck(String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Bemfa_Mixly_wechat_msg);
    
    this.appendValueInput("devicetime")
        .setCheck(Boolean)
       .setAlign(Blockly.ALIGN_RIGHT)
       .appendField(Blockly.Bemfa_Mixly_wechat_show_time);
        

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks.bemfa_wechat04 = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Bemfa_Mixly_wechat_commsg_card);
    this.appendDummyInput("board")
        .appendField(Blockly.Bemfa_Mixly_Board_Type).appendField(new Blockly.FieldDropdown(BoardType), "type");
    this.appendValueInput("buid")
         .setCheck(String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Bemfa_Mixly_tcp_Server_uid );
    this.appendValueInput("msgtitle")
         .setCheck(String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Bemfa_Mixly_wechat_msg_title);
    this.appendValueInput("devicemsg")
         .setCheck(String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Bemfa_Mixly_wechat_msg);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//使用帮助
Blockly.Blocks.bemfa_wechat_help = {
  init: function() {
    this.setColour(15);
    this.appendValueInput("wechat_help")
        .setCheck(null)
        .appendField(Blockly.Bemfa_Mixly_tcp_help);
    this.setTooltip(Blockly.MQTT_TEST_TOOLTIP);
    this.setHelpUrl(Blockly.Bemfa_Mixly_MQTT_helpurl);
  }
};

Blockly.Blocks.bemfa_wechat_config_airkiss = {
  init: function() {
    this.setColour(300);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/bemfa/wechat/airkiss.jpg", 70, 70)).appendField(Blockly.Bemfa_Mixly_wechat_cre_config_airkiss);
    this.appendDummyInput("board")
    .appendField(Blockly.Bemfa_Mixly_Board_Type).appendField(new Blockly.FieldDropdown(BoardType), "type");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip();
    this.setHelpUrl();
  }
};


Blockly.Blocks.bemfa_wechat_config_airkiss_applus = {
  init: function() {
    this.setColour(300);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/bemfa/wechat/airkiss.jpg", 70, 70)).appendField(Blockly.Bemfa_Mixly_wechat_cre_config_airkiss_plus);
    this.appendDummyInput("board")
        .appendField(Blockly.Bemfa_Mixly_Board_Type).appendField(new Blockly.FieldDropdown(BoardType), "type");
    this.appendDummyInput("deviceType")
    .appendField(Blockly.Bemfa_Mixly_wechat_cre_config_topic_Type).appendField(new Blockly.FieldDropdown(DeviceType), "deviceType");
    this.appendDummyInput("deviceProto")
    .appendField(Blockly.Bemfa_Mixly_wechat_cre_config_topic_proto).appendField(new Blockly.FieldDropdown(DeviceProto), "deviceProto");
    this.appendValueInput("bemfa_wechat_airkiss_get_uid")
         .setCheck(String)
         .setAlign(Blockly.ALIGN_RIGHT)
         .appendField(Blockly.Bemfa_Mixly_wechat_cre_config_uid);
    this.appendValueInput("bemfa_wechat_airkiss_get_topic")
         .setCheck(String)
         .setAlign(Blockly.ALIGN_RIGHT)
         .appendField(Blockly.Bemfa_Mixly_wechat_cre_config_topic);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip();
    this.setHelpUrl();
  }
};



Blockly.Blocks.bemfa_wechat_config_ap = {
  init: function() {
    this.setColour(300);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/bemfa/wechat/ap.png", 70, 70)).appendField(Blockly.Bemfa_Mixly_wechat_cre_config_ap);   
    this.appendDummyInput("board")
        .appendField(Blockly.Bemfa_Mixly_Board_Type).appendField(new Blockly.FieldDropdown(BoardType), "type");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip();
    this.setHelpUrl();
  }
};

Blockly.Blocks.bemfa_wechat_config_applus = {
  init: function() {
    this.setColour(300);
    this.appendDummyInput("").appendField(new Blockly.FieldImage("../../media/bemfa/wechat/ap.png", 70, 70)).appendField(Blockly.Bemfa_Mixly_wechat_cre_config_applus);
    this.appendDummyInput("board")
        .appendField(Blockly.Bemfa_Mixly_Board_Type).appendField(new Blockly.FieldDropdown(BoardType), "type");
    this.appendDummyInput("deviceType")
    .appendField(Blockly.Bemfa_Mixly_wechat_cre_config_topic_Type).appendField(new Blockly.FieldDropdown(DeviceType), "deviceType");
    this.appendDummyInput("deviceProto")
    .appendField(Blockly.Bemfa_Mixly_wechat_cre_config_topic_proto).appendField(new Blockly.FieldDropdown(DeviceProto), "deviceProto");
    this.appendValueInput("bemfa_wechat_ap_get_uid")
         .setCheck(String)
         .setAlign(Blockly.ALIGN_RIGHT)
         .appendField(Blockly.Bemfa_Mixly_wechat_cre_config_uid);
    this.appendValueInput("bemfa_wechat_ap_get_topic")
         .setCheck(String)
         .setAlign(Blockly.ALIGN_RIGHT)
         .appendField(Blockly.Bemfa_Mixly_wechat_cre_config_topic);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip();
    this.setHelpUrl();
  }
};

//恢复出厂
Blockly.Blocks.bemfa_wechat_reBegin = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Bemfa_Mixly_wechat_del_config);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
    this.setTooltip(Blockly.MQTT_TEST_TOOLTIP);
    this.setHelpUrl(Blockly.Bemfa_Mixly_MQTT_helpurl);
  }
};

//使用帮助
Blockly.Blocks.bemfa_wechat_config_help = {
  init: function() {
    this.setColour(300);
    this.appendValueInput("bemfa_wechat_config_help")
        .setCheck(null)
        .appendField(Blockly.Bemfa_Mixly_tcp_help);
    this.setTooltip(Blockly.MQTT_TEST_TOOLTIP);
    this.setHelpUrl(Blockly.Bemfa_Mixly_MQTT_helpurl);
  }
};



//设置服务器地址与端口号
Blockly.Blocks.init_Bemfa_ESP_cam = {
  init: function() {
    this.setColour(345);
    this.appendDummyInput("")
       .appendField(Blockly.Bemfa_Push_Cam_Esp32cam_pic);

    this.appendValueInput("esp32cam_client_id")
       .setCheck(String)
       .setAlign(Blockly.ALIGN_RIGHT)
       .appendField(Blockly.Bemfa_Mixly_tcp_Server_uid);//开启模块右侧可连接
    this.appendValueInput("esp32cam_topic_id")
       .setCheck(String)
       .setAlign(Blockly.ALIGN_RIGHT)
       .appendField(Blockly.Bemfa_Mixly_picture_Topic);//开启模块右侧可连接

       this.appendValueInput("bemfa_push_cam_wechat_msg")
       .setCheck(String)
       .setAlign(Blockly.ALIGN_RIGHT)
       .appendField(Blockly.Bemfa_Push_Cam_Wechat_Msg);//开启模块右侧可连接


       this.appendValueInput("bemfa_push_cam_wechat_cam_msg")
       .setCheck(String)
       .setAlign(Blockly.ALIGN_RIGHT)
       .appendField(Blockly.Bemfa_Push_Cam_Wechat_Msg_Cam);//开启模块右侧可连接

       this.appendValueInput("bemfa_push_cam_wechat_cam_path")
       .setCheck(String)
       .setAlign(Blockly.ALIGN_RIGHT)
       .appendField(Blockly.Bemfa_Push_Cam_User_Path);//开启模块右侧可连接

       this.appendDummyInput()
       .appendField(Blockly.Bemfa_Push_Cam_Esp32cam_pic_ok);

       this.appendStatementInput("bemfa_function_pic_rev")
        .setCheck(null);

        this.setInputsInline(false);

       this.setPreviousStatement(true, null);
       this.setNextStatement(true, null);
       this.setTooltip("");
       this.setHelpUrl(Blockly.Bemfa_Mixly_MQTT_helpurl);
  }
};


//使用帮助
Blockly.Blocks.bemfa_wechat_esp32cam_config_help = {
  init: function() {
    this.setColour(300);
    this.appendValueInput("bemfa_wechat_esp32cam_config_help")
        .setCheck(null)
        .appendField(Blockly.Bemfa_Mixly_tcp_help);
    this.setTooltip(Blockly.MQTT_TEST_TOOLTIP);
    this.setHelpUrl(Blockly.Bemfa_Mixly_MQTT_helpurl);
  }
};

