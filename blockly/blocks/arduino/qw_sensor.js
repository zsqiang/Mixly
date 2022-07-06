'use strict';

//////////////////颜色/////////////////////
goog.provide('Blockly.Blocks.Keyes_control');
Blockly.Blocks.Keyes_control.HUE = 120;

goog.provide('Blockly.Blocks.Keyes_digitalRead');
Blockly.Blocks.Keyes_digitalRead.HUE = 230;

goog.provide('Blockly.Blocks.Keyes_analogRead');
Blockly.Blocks.Keyes_analogRead.HUE = 360;

goog.provide('Blockly.Blocks.Keyes_special');
Blockly.Blocks.Keyes_special.HUE = 320;

goog.provide('Blockly.Blocks.Keyes_display');
Blockly.Blocks.Keyes_display.HUE = 275;

goog.provide('Blockly.Blocks.Keyes_communication');
Blockly.Blocks.Keyes_communication.HUE = 180;

goog.provide('Blockly.Blocks.qwdz');
Blockly.Blocks.qwdz.HUE = 40;

goog.require('Blockly.Blocks');

/////////////////模拟输出//////////////////////
Blockly.Blocks.ke_a_Write = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.Kids_anologWrite);
    //.appendField(new Blockly.FieldImage("../../media/KS0077/ks77_led3.png", 20, 20));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setAlign(Blockly.ALIGN_RIGHT)
    .setCheck(Number);
    this.appendValueInput("num", Number)
    .appendField(Blockly.Kids_value)
    .setAlign(Blockly.ALIGN_RIGHT)
    .setCheck(Number);
    
    //.appendField(new Blockly.FieldDropdown([[Blockly.ke_ON, "HIGH"], [Blockly.ke_OFF, "LOW"]]), "STAT");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};


var YF_OUTPUT_DIGITAL = [
  [Blockly.MIXLY_YF_LED_P, 'PiranhaLED'], 
  [Blockly.MIXLY_YF_BUZZER, 'Buzzer'],
  [Blockly.MIXLY_YF_FAN, 'Fan'], 
  [Blockly.MIXLY_YF_VIBRATION_MOTOR, 'VibrationMotor'],
  [Blockly.MIXLY_YF_RELAY, 'Relay']
];
// OUTPUT Digital 数字输出型模块:食人鱼LED、有源蜂鸣器Buzzer active、风扇、震动电机、继电器

//////////////////红色LED////////////////
Blockly.Blocks.ke_led_r = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.ke_red_led)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_led_red.png", 20, 20));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_STAT)
    .appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "HIGH"], [Blockly.Kids_OFF, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
//////////////////黄色LED////////////////
Blockly.Blocks.ke_led_y = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.ke_yellow_led)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_led_yellow.png", 20, 20));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_STAT)
    .appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "HIGH"], [Blockly.Kids_OFF, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
//////////////////白色LED////////////////
Blockly.Blocks.ke_led_w = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.ke_white_led)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_led_white.png", 20, 20));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_STAT)
    .appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "HIGH"], [Blockly.Kids_OFF, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
//////////////////绿色LED////////////////
Blockly.Blocks.ke_led_g = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.ke_green_led)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_led_g.png", 20, 20));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_STAT)
    .appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "HIGH"], [Blockly.Kids_OFF, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
//////////////////蓝色LED////////////////
Blockly.Blocks.ke_led_b = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.ke_blue_led)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_led_b.png", 20, 20));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_STAT)
    .appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "HIGH"], [Blockly.Kids_OFF, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks.ke_jg = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.ke_jg1)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_jg.png", 20, 20));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_STAT)
    .appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "HIGH"], [Blockly.Kids_OFF, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};


Blockly.Blocks.ke_dual = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.ke_dual_led)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_led_double.png", 20, 20));
    this.appendValueInput("PIN1", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_STAT)
    .appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "HIGH"], [Blockly.Kids_OFF, "LOW"]]), "STAT1");
    this.appendValueInput("PIN2", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_STAT)
    .appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "HIGH"], [Blockly.Kids_OFF, "LOW"]]), "STAT2");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks.ke_qcd = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_QCD)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_qcd.png", 20, 20));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_STAT)
    .appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "HIGH"], [Blockly.Kids_OFF, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

//////////////////RGB1////////////////////
Blockly.Blocks.ke_rgb1_1 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_RGB_A)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_rgb2.png", 20, 20));
    this.appendValueInput("PIN1", Number)
    .appendField("R:")
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_STAT)
    .appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "LOW"], [Blockly.Kids_OFF, "HIGH"]]), "STAT1");
    this.appendValueInput("PIN2", Number)
    .appendField("G:")
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_STAT)
    .appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "LOW"], [Blockly.Kids_OFF, "HIGH"]]), "STAT2");
    this.appendValueInput("PIN3", Number)
    .appendField("B:")
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_STAT)
    .appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "LOW"], [Blockly.Kids_OFF, "HIGH"]]), "STAT3");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};


////////////////////////rgb01///////////////////////////////////
Blockly.Blocks.ke_rgb1_2 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_RGB_A)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_rgb2.png", 20, 20));
    this.appendValueInput("R", Number)
    .appendField("R")
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("r", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("R(0~255):");
    this.appendValueInput("G", Number)
    .appendField("G")
    .setAlign(Blockly.ALIGN_RIGHT)
    .setCheck(Number);
    this.appendValueInput("g", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("G(0~255):");
    this.appendValueInput("B", Number)
    .appendField("B")
    .setAlign(Blockly.ALIGN_RIGHT)
    .setCheck(Number);
    this.appendValueInput("b", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("B(0~255):");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

//////////////////RGB2///////////////////
Blockly.Blocks.ke_rgb2_1 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_RGB_B)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_rgb2.png", 20, 20));
    this.appendValueInput("PIN1", Number)
    .appendField("R:")
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_STAT)
    .appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "HIGH"], [Blockly.Kids_OFF, "LOW"]]), "STAT1");
    this.appendValueInput("PIN2", Number)
    .appendField("G:")
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_STAT)
    .appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "HIGH"], [Blockly.Kids_OFF, "LOW"]]), "STAT2");
    this.appendValueInput("PIN3", Number)
    .appendField("B:")
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_STAT)
    .appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "HIGH"], [Blockly.Kids_OFF, "LOW"]]), "STAT3");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};


////////////////////////rgb01///////////////////////////////////
Blockly.Blocks.ke_rgb2_2 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_RGB_B)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_rgb2.png", 20, 20));
    this.appendValueInput("R", Number)
    .appendField("R")
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput("r", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("R(0~255):");
    this.appendValueInput("G", Number)
    .appendField("G")
    .setAlign(Blockly.ALIGN_RIGHT)
    .setCheck(Number);
    this.appendValueInput("g", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("G(0~255):");
    this.appendValueInput("B", Number)
    .appendField("B")
    .setAlign(Blockly.ALIGN_RIGHT)
    .setCheck(Number);
    this.appendValueInput("b", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("B(0~255):");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};


/////////////////蜂鸣器//////////////////////
Blockly.Blocks.ke_w_buzzer1 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_BUZZER1)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_buzzer_y.png", 20, 20));    
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_STAT)
    .appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "HIGH"], [Blockly.Kids_OFF, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
Blockly.Blocks.ke_w_buzzer2={
  init:function(){
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_BUZZER2)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_buzzer_w.png", 20, 20));    
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendValueInput('FREQUENCY')
    .setCheck(Number)
        //.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_FREQUENCY);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
      }
    };
    Blockly.Blocks.ke_w_buzzer3={
      init:function(){
        this.setColour(Blockly.Blocks.Keyes_control.HUE);
        this.appendDummyInput("")
        .appendField(Blockly.MIXLY_ke_BUZZER2)
        .appendField(new Blockly.FieldImage("../../media/keyes/ke_buzzer_w.png", 20, 20));    
        this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
        this.appendValueInput('FREQUENCY')
        .setCheck(Number)
        //.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_FREQUENCY);
        this.appendValueInput('DURATION')
        .setCheck(Number)
        //.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_DURATION);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
      }
    };

       //////////////////蜂鸣器//////////////////
var TONE_NOTES=[["NOTE_C3", "131"],["NOTE_D3", "147"],["NOTE_E3", "165"],["NOTE_F3", "175"],["NOTE_G3", "196"],["NOTE_A3", "220"],["NOTE_B3", "247"],
           ["NOTE_C4", "262"],["NOTE_D4", "294"],["NOTE_E4", "330"],["NOTE_F4", "349"],["NOTE_G4", "392"],["NOTE_A4", "440"],["NOTE_B4", "494"],
           ["NOTE_C5", "532"],["NOTE_D5", "587"],["NOTE_E5", "659"],["NOTE_F5", "698"],["NOTE_G5", "784"],["NOTE_A5", "880"],["NOTE_B5", "988"]];


Blockly.Blocks.ke_tone01 = {
   init: function() {
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
    this.appendDummyInput("")
        .appendField(new Blockly.FieldDropdown(TONE_NOTES), 'STAT');
    this.setOutput(true, Number);
  }
};

Blockly.Blocks.ke_buzzer={
init:function(){
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_BUZZER2)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_buzzer_w.png", 20, 20));  
    this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);
    this.appendValueInput('FREQUENCY')
        .setCheck(Number)
        //.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.kids_tone);

    //this.appendValueInput('DURATION')
        //.setCheck(Number)
        //.setAlign(Blockly.ALIGN_RIGHT)
        //.appendField(Blockly.kids_beat);
    this.appendDummyInput("")
        .appendField(Blockly.kids_beat)
        .appendField(new Blockly.FieldDropdown([["1/8", "125"],["3/8", "375"],["1/4", "250"],["3/4", "750"],["1/2", "500"],["1", "1000"]]), 'beat1');
    
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_TONE);
  }
};


///////////music////////////////////
Blockly.Blocks.ke_music = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.kids_play_tone)
        .appendField(new Blockly.FieldImage("../../media/keyes/ke_buzzer_w.png", 20, 20));
    this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);   
    this.appendDummyInput("")
        //.appendField(new Blockly.FieldDropdown([["Birthday", "Birthday"],["City of Sky", "City of Sky"],["Ode to Joy", "Ode to Joy"]]), 'play');
        .appendField(new Blockly.FieldDropdown([[Blockly.kids_Ode_to_joy, "Ode to Joy"],[Blockly.kids_birthday, "Birthday"]]), 'play');
    
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_NOTONE);
  }
};

////////////////////关闭蜂鸣器////////////////////////
Blockly.Blocks.ke_notone={
init:function(){
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.kids_notone)
        .appendField(new Blockly.FieldImage("../../media/keyes/ke_buzzer_w.png", 20, 20));
    this.appendValueInput("PIN", Number)
        .appendField(Blockly.MIXLY_PIN)
        .setCheck(Number);   
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    //this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_NOTONE);
  }
};


///////////////////////继电器////////////////////////////
Blockly.Blocks.ke_relay = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_RELAY)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_relay.png", 20, 20));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_STAT)
    .appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "HIGH"], [Blockly.Kids_OFF, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

///////////////////////震动马达////////////////////////////
Blockly.Blocks.ke_v_motor = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_v_motor)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_v_motor.png", 20, 20));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_STAT)
    .appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "HIGH"], [Blockly.Kids_OFF, "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

///////////////////////扬声器模块////////////////////////////
Blockly.Blocks.ke_speaker={
  init:function(){
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
      this.appendDummyInput("")
          .appendField(Blockly.MIXLY_ke_SPEAKER)
          .appendField(new Blockly.FieldImage("../../media/keyes/ke_speaker.png", 20, 20));       
      this.appendValueInput("PIN", Number)
          .appendField(Blockly.MIXLY_PIN)
          .setCheck(Number);
      this.appendValueInput('FREQUENCY',Number)
          .setCheck(Number)
          .appendField(Blockly.MIXLY_FREQUENCY);
      this.setInputsInline(true);
      this.setPreviousStatement(true);
      this.setNextStatement(true);
    }
  };
  // Speaker - 喇叭+持续时间
  Blockly.Blocks.ke_speaker2={
  init:function(){
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
      this.appendDummyInput("")
          .appendField(Blockly.MIXLY_ke_SPEAKER)
          .appendField(new Blockly.FieldImage("../../media/keyes/ke_speaker.png", 20, 20));       
      this.appendValueInput("PIN", Number)
          .appendField(Blockly.MIXLY_PIN)
          .setCheck(Number);
      this.appendValueInput('FREQUENCY')
          .setCheck(Number)
          .appendField(Blockly.MIXLY_FREQUENCY);
      this.appendValueInput('DURATION')
          .setCheck(Number)
          .appendField(Blockly.MIXLY_DURATION);
      this.appendDummyInput("")
          .appendField(Blockly.MIXLY_DELAY_MS);
      this.setInputsInline(true);
      this.setPreviousStatement(true);
      this.setNextStatement(true);
    }
  };
  // Notone - 结束声音
  Blockly.Blocks.ke_speaker_notone={
  init:function(){
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
      this.appendValueInput("PIN", Number)
          .appendField(Blockly.MIXLY_NOTONE_PIN)
          .setCheck(Number);
      this.setInputsInline(true);
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_NOTONE);
    }
  };
  
////////////////////////电机///////////////////////////////////
Blockly.Blocks.ke_motor = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_MOTOR01)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_dianji.png", 20, 20));
    this.appendValueInput("PIN1", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField('INA')
    .appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "HIGH"], [Blockly.Kids_OFF, "LOW"]]), "STAT1");
    this.appendValueInput("PIN2", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField('INB')
    .appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "HIGH"], [Blockly.Kids_OFF, "LOW"]]), "STAT2");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

////////////////////////电机001///////////////////////////////////
Blockly.Blocks.ke_motor001 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_MOTOR01)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_dianji.png", 20, 20));
    this.appendValueInput("PIN1", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setAlign(Blockly.ALIGN_RIGHT)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField('INA')
    .appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "HIGH"], [Blockly.Kids_OFF, "LOW"]]), "STAT1");
    this.appendValueInput("PIN2", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setAlign(Blockly.ALIGN_RIGHT)
    .setCheck(Number);
    this.appendValueInput("pwmb")
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("PWMB:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

////////////////////////电机2///////////////////////////////////
Blockly.Blocks.ke_motor2 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_MOTOR)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_fs.png", 20, 20));
    this.appendValueInput("PIN1", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField('INA')
    .appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "HIGH"], [Blockly.Kids_OFF, "LOW"]]), "STAT1");
    this.appendValueInput("PIN2", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField('INB')
    .appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "HIGH"], [Blockly.Kids_OFF, "LOW"]]), "STAT2");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

////////////////////////电机002///////////////////////////////////
Blockly.Blocks.ke_motor002 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_MOTOR)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_fs.png", 20, 20));
    this.appendValueInput("PIN1", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setAlign(Blockly.ALIGN_RIGHT)
    .setCheck(Number);
    this.appendDummyInput("")
    .appendField('INA')
    .appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "HIGH"], [Blockly.Kids_OFF, "LOW"]]), "STAT1");
    this.appendValueInput("PIN2", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setAlign(Blockly.ALIGN_RIGHT)
    .setCheck(Number);
    this.appendValueInput("pwmb")
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("PWMB:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};


///////////////////////////舵机///////////////////////////////////
Blockly.Blocks.ke_servo = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_ke_SERVO)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_servo.png", 70, 32))
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendValueInput("angle", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_DEGREE_0_180);
    this.appendValueInput("time", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_DELAY+'('+Blockly.MIXLY_DELAY_MS+')');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_SERVO_MOVE);
  }
};

Blockly.Blocks.ke_servo_r = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_control.HUE);
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_ke_SERVO)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_READ_DEGREES)
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_SERVO_READ);
  }
};

/////////////////////数字传感器///////////////////////////////

///////////人体红外传感器////////////////////
Blockly.Blocks.ke_ir_g = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_digitalRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_IR_G)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_rentihongwai.png", 20, 20));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

///////////火焰传感器////////////////////

Blockly.Blocks.ke_flame = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_digitalRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_FLAME)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_fire.png", 20, 20));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

///////////霍尔传感器////////////////////
Blockly.Blocks.ke_hall = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_digitalRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_HALL)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_hall.png", 20, 20));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

///////////敲击传感器////////////////////
Blockly.Blocks.ke_crash = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_digitalRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_KNOCK)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_zhengdong.png", 20, 20));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

///////////按键传感器////////////////////
Blockly.Blocks.ke_button = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_digitalRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_BUTTON)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_button.png", 20, 20));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

///////////自锁按键传感器////////////////////
Blockly.Blocks.ke_sl_button = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_digitalRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_sl_BUTTON)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_sl_button.png", 20, 20));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};
///////////电容触摸传感器////////////////////
Blockly.Blocks.ke_tuoch = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_digitalRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_TUOCH)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_touch.png", 20, 20));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

///////////碰撞传感器////////////////////
Blockly.Blocks.ke_knock = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_digitalRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_CRASH)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_pengzhuang.png", 20, 20));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

///////////倾斜传感器////////////////////
Blockly.Blocks.ke_tilt = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_digitalRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_TILT)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_qingxie.png", 20, 20));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

///////////振动传感器////////////////////
Blockly.Blocks.ke_shake = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_digitalRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_SHAKE)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_qiaoji.png", 20, 20));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};



///////////干簧管传感器////////////////////
Blockly.Blocks.ke_reed_s = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_digitalRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_REED_S)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_ghg.png", 20, 20));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

///////////循迹传感器////////////////////
Blockly.Blocks.ke_track = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_digitalRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_TRACK)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_xunji.png", 20, 20));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

///////////避障传感器////////////////////
Blockly.Blocks.ke_avoid = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_digitalRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_AVOID)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_hongwaibz.png", 20, 20));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

///////////光折断传感器////////////////////
Blockly.Blocks.ke_light_b = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_digitalRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_LIGHT_B)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_photo.png", 20, 20));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

///////////烟雾数字传感器////////////////////
Blockly.Blocks.ke_smoke_D = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_digitalRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_SMOKE)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_gas.png", 20, 20));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

///////////酒精数字传感器////////////////////
Blockly.Blocks.ke_alcohol_D = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_digitalRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_ALCOHOL)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_alcohol.png", 20, 20));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};


///////////////////////////模拟传感器//////////////////////////
///////////模拟温度传感器///////////////
Blockly.Blocks.ke_analog_t = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_analogRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_ANALOG_T)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_mnwd.png", 20, 20));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

///////////声音传感器///////////////
Blockly.Blocks.ke_sound = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_analogRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_SOUND)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_sound.png", 20, 20));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

///////////光线传感器///////////////
Blockly.Blocks.ke_light = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_analogRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_LIGHT)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_guangmin.png", 20, 20));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

///////////紫外线传感器///////////////
Blockly.Blocks.ke_UV = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_analogRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_UV)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_UV.png", 20, 20));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

///////////压电传感器///////////////
Blockly.Blocks.ke_Piezo = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_analogRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_Piezo)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_Piezo.png", 20, 20));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

///////////电位器///////////////
Blockly.Blocks.ke_potentiometer = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_analogRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_POTENTIOMETER)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_dianweiqi.png", 20, 20));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

///////////LM35///////////////
Blockly.Blocks.ke_lm35 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_analogRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_LM35)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_lm35.png", 20, 20));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

///////////滑动电位器///////////////
Blockly.Blocks.ke_slide_potentiometer = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_analogRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_SLIDE_POTENTIOMETER)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_hddwq.png", 20, 20));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

///////////TEMT6000环境光///////////////
Blockly.Blocks.ke_temt6000 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_analogRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_TEMT6000)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_temt6000.png", 20, 20));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

///////////水蒸气传感器///////////////
Blockly.Blocks.ke_steam = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_analogRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_STEAM)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_steam.png", 20, 20));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

///////////薄膜压力传感器///////////////
Blockly.Blocks.ke_film_p = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_analogRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_FILM_P)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_tptouch.png", 20, 20));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

///////////摇杆传感器///////////////
var joystick = [
  ["x", "Lx"],
  ["y", "Ly"],
 // ["z", "Lz"],
];

Blockly.Blocks.ke_joystick = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_analogRead.HUE);
    //this.appendDummyInput("")
    this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown(joystick), "joy");
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_JOYSTICK)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_joys.png", 20, 20));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

///////////遥感按钮////////////////////
Blockly.Blocks.ke_joystick_btn = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_digitalRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_JOYSTICK_btn)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_joys.png", 20, 20));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};


///////////烟雾传感器///////////////
Blockly.Blocks.ke_smoke = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_analogRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_SMOKE)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_gas.png", 20, 20));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

///////////酒精传感器///////////////
Blockly.Blocks.ke_alcohol = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_analogRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_ALCOHOL)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_alcohol.png", 20, 20));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};



///////////火焰模拟传感器///////////////
Blockly.Blocks.ke_fire2 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_analogRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_FLAME)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_fire.png", 20, 20));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};


///////////电压传感器///////////////
Blockly.Blocks.ke_Voltage = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_analogRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_Voltage)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_Voltage.png", 20, 20));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

///////////电流传感器///////////////
Blockly.Blocks.ke_Current = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_analogRead.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_Current)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_Current.png", 20, 20));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};


///////////18B20温度模块///////////////
Blockly.Blocks.ke_18b20 = {
    init: function () {
        var UNIT = [[Blockly.MIXLY_DS18B20_C, '0'], [Blockly.MIXLY_DS18B20_F, '1']];
        this.setColour(Blockly.Blocks.Keyes_special.HUE);
        this.appendValueInput("PIN", Number)
            .appendField(Blockly.MIXLY_ke_18B20)
            .appendField(new Blockly.FieldImage("../../media/keyes/ke_18B20.png", 20, 20))
            .appendField(Blockly.Kids_pin)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField(Blockly.MIXLY_ke_18B20_R)
            .appendField(new Blockly.FieldDropdown(UNIT), "UNIT");
        this.setOutput(true, Number);
    }
};

///////////////////////////////DHT11//////////////////////////////////
Blockly.Blocks.ke_dht11 = {
    init: function () {
        var WHAT = [[Blockly.MIXLY_DHT11_T, 'temperature'], [Blockly.MIXLY_DHT11_H, 'humidity']];
        this.setColour(Blockly.Blocks.Keyes_special.HUE);
        this.appendValueInput("PIN", Number)
            .appendField(new Blockly.FieldDropdown([['DHT11', '11'], ['DHT21', '21'], ['DHT22', '22'], ['DHT33', '33'], ['DHT44', '44']]), 'TYPE')
            .appendField(new Blockly.FieldImage("../../media/keyes/ke_dht11.png", 20, 20))
            .appendField(Blockly.MIXLY_PIN)
            .setCheck(Number);
        this.appendDummyInput("")
            .appendField(new Blockly.FieldDropdown(WHAT), "WHAT");
        this.setOutput(true, Number);
        var thisBlock = this;
        this.setTooltip(function () {
            var op = thisBlock.getFieldValue('WHAT');
            var TOOLTIPS = {
                'temperature': Blockly.MIXLY_TOOLTIP_BLOCKGROUP_GET_TEM,
                'humidity': Blockly.MIXLY_TOOLTIP_BLOCKGROUP_GET_HUM
            };
            return TOOLTIPS[op];
        });
    }
};

//DHT11温湿度传感器
Blockly.Blocks.ke_DHT = {
  init: function () {
    var WHAT = [[Blockly.MIXLY_GETTEMPERATUE, 'temperature'], [Blockly.MIXLY_GETHUMIDITY, 'humidity']];
    this.setColour(Blockly.Blocks.Keyes_special.HUE);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldDropdown([['DHT11', '11'], ['DHT21', '21'], ['DHT22', '22']]), 'TYPE')
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_dht11.png", 20, 20))
    .appendField(Blockly.MIXLY_PIN)
    .appendField(new Blockly.FieldDropdown(profile.default.digital), "PIN")
    .appendField(new Blockly.FieldDropdown(WHAT), "WHAT");
    this.setOutput(true, Number);
    var thisBlock = this;
    this.setTooltip(function () {
      var op = thisBlock.getFieldValue('WHAT');
      var TOOLTIPS = {
        'temperature': Blockly.MIXLY_TOOLTIP_BLOCKGROUP_GET_TEM,
        'humidity': Blockly.MIXLY_TOOLTIP_BLOCKGROUP_GET_HUM
      };
      return TOOLTIPS[op];
    });
  }
};

//////////BMP180高度计模块///////////////
Blockly.Blocks.ke_bmp180 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_special.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_BMP180)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_bmp180.png", 20, 20));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};

/////////////////////////////////////////////
////////////////传感器////////////////////////
/////////////////////////////////////////////


///////////ADKey///////////////
Blockly.Blocks.ke_ADKey = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_special.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.kids_ADkey)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_ADKey.png", 20, 20));
    this.appendValueInput("PIN", Number)
    .appendField(Blockly.MIXLY_PIN)
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip('');
  }
};




///////////////超声波/////////////////////////
Blockly.Blocks.ke_sr04 = {
  init: function () {
    this.setColour(Blockly.Blocks.Keyes_special.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_SR04)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_sr04.png", 20, 20));
    this.appendValueInput("PIN1", Number)
    .appendField('Trig#')
    .setCheck(Number);
    this.appendValueInput("PIN2", Number)
    .appendField('Echo#')
    .setCheck(Number);
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_CHAOSHENGBO);
  }
};



/////////////////////////////BMP280////////////////////////
var BMP280_TP = [
  [Blockly.MIXLY_ke_BMP280_T, "T"],
  [Blockly.MIXLY_ke_BMP280_A, "P"],
  [Blockly.MIXLY_ke_BMP180_H, "A"],
];
/////////////////////////////BMP280////////////////////////
Blockly.Blocks.ke_bmp280 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_special.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_BMP280)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_bmp180.png", 20, 20))
    .appendField(Blockly.Kids_iic);
    this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown(BMP280_TP), "BMP280_PIN");
    this.setInputsInline(true);
    this.setOutput(true);
   }
};

//BME280读取
Blockly.Blocks['ke_BMP280_READ'] = {
  init: function() {
   this.setColour(Blockly.Blocks.Keyes_special.HUE);
   this.appendDummyInput()
   .appendField(Blockly.MIXLY_SERIAL_READ)
   .appendField(new Blockly.FieldDropdown([ ["BMP280","bmp"], ["BME280","bme"]]), "TYPE")
   .appendField(new Blockly.FieldImage("../../media/keyes/ke_bmp280.png", 20, 20));
   this.appendValueInput("address")
   .appendField(Blockly.MIXLY_LCD_ADDRESS);
   this.appendDummyInput()
.appendField(Blockly.MIXLY_GET)
   .appendField(new Blockly.FieldDropdown([[Blockly.blynk_IOT_IR_TEMP,"readTemperature()"], [Blockly.MIXLY_Humidity,"readHumidity()"], [Blockly.MIXLY_Altitude,"readPressure()"],[ Blockly.MIXLY_HEIGHT ,"readAltitude(SEALEVELPRESSURE_HPA)"] ]), "BME_TYPE")
   this.setOutput(true, null);
   this.setTooltip("");
   this.setHelpUrl("");
 }
};

//ADXL345传感器-重力感应块-获取数据
var ADXL345_ZHOU = [
  [Blockly.MIXLY_ADXL345_X, "x"],
  [Blockly.MIXLY_ADXL345_Y, "y"],
  [Blockly.MIXLY_ADXL345_Z, "z"],
  [Blockly.MIXLY_ADXL345_XA, "xa"],
  [Blockly.MIXLY_ADXL345_YA, "ya"]
  //, [Blockly.MIXLY_ADXL345_ZA, "za"]
];
//传感器-重力感应块-获取数据
Blockly.Blocks.ke_adxl345 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_special.HUE);
    this.appendDummyInput("")
        .appendField(Blockly.MIXLY_Ke_ADXL345)
        .appendField(new Blockly.FieldImage("../../media/keyes/ke_345.png", 20, 20));
    this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown(ADXL345_ZHOU), "ADXL345_PIN");
    this.setInputsInline(true);
    this.setOutput(true);
   }
};
  

//传感器-MPU6050-获取数据
Blockly.Blocks.ke_MPU6050= {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_special.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_MPU6050)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_mpu6050.png", 20, 20));
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(new Blockly.FieldDropdown([
      [Blockly.MIXLY_Accel_X, "normAccel.XAxis"], 
      [Blockly.MIXLY_Accel_Y, "normAccel.YAxis"], 
      [Blockly.MIXLY_Accel_Z, "normAccel.ZAxis"],
      [Blockly.MIXLY_Gyro_X, "normGyro.XAxis"],
      [Blockly.MIXLY_Gyro_Y, "normGyro.YAxis"],
      [Blockly.MIXLY_Gyro_Z, "normGyro.ZAxis"],
      [Blockly.MIXLY_readTempC, "mpu.readTemperature()"]
      ]), "MPU6050_TYPE");
    this.setInputsInline(true);
    this.setOutput(true);
  }
};

//传感器-MPU6050-更新数据
Blockly.Blocks.ke_MPU6050_update= {
  init: function() {
   this.setColour(Blockly.Blocks.Keyes_special.HUE);
   this.appendDummyInput("")
   .appendField(new Blockly.FieldImage("../../media/keyes/ke_mpu6050.png", 20, 20))
   .appendField(Blockly.MIXLY_MPU6050+Blockly.MIXLY_update_data);
   this.setPreviousStatement(true);
   this.setNextStatement(true);
   this.setInputsInline(true);
 }
};


/////////////////////////////BMP180////////////////////////
var BMP180_TP = [
  [Blockly.MIXLY_ke_BMP180_T, "T"],
  [Blockly.MIXLY_ke_BMP180_A, "P"],
  [Blockly.MIXLY_ke_BMP180_H, "A"],
];
/////////////////////////////BMP180////////////////////////
Blockly.Blocks.ke_bmp180 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_special.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_BMP180)
    .appendField(Blockly.Kids_iic);
    //.appendField(new Blockly.FieldImage("../../media/keyes/ke_bmp180.png", 20, 20));
    this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown(BMP180_TP), "BMP180_PIN");
    this.setInputsInline(true);
    this.setOutput(true);
   }
};

/********************************************
TIME - 时钟模块
  - DS3231
  - DS1307
*********************************************/
  // DS3231 real time clock  -- 设置时间
  Blockly.Blocks.ke_ds3231_SetTime = {
    init: function() {
      this.setColour(Blockly.Blocks.Keyes_special.HUE);
      this.appendDummyInput()
          .appendField(Blockly.MIXLY_ke_DS3231)
          .appendField(new Blockly.FieldImage("../../media/keyes/ke_ds3231.png", 20, 20))
          .appendField(Blockly.MIXLY_ke_DS3231_SET_TIME);
      this.appendValueInput("year")
          .setCheck(Number).setAlign(Blockly.ALIGN_RIGHT)
          .appendField(Blockly.MIXLY_ke_YEAR);
      this.appendValueInput("month")
          .setCheck(Number).setAlign(Blockly.ALIGN_RIGHT)
          .appendField(Blockly.MIXLY_ke_MONTH);
      this.appendValueInput("day")
          .setCheck(Number).setAlign(Blockly.ALIGN_RIGHT)
          .appendField(Blockly.MIXLY_ke_DAY);
      this.appendValueInput("hour")
          .setCheck(Number).setAlign(Blockly.ALIGN_RIGHT)
          .appendField(Blockly.MIXLY_ke_HOUR);
      this.appendValueInput("minute")
          .setCheck(Number).setAlign(Blockly.ALIGN_RIGHT)
          .appendField(Blockly.MIXLY_ke_MINUTE);
      this.appendValueInput("second")
          .setCheck(Number).setAlign(Blockly.ALIGN_RIGHT)
          .appendField(Blockly.MIXLY_ke_SECOND);
      this.setOutput(false, Number);
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setInputsInline(true);
    }
  };
  
  // DS3231 real time clock  -- 设置当前时间
  Blockly.Blocks.ke_ds3231_SetTime2 = {
    init: function() {
      this.setColour(Blockly.Blocks.Keyes_special.HUE);
      this.appendDummyInput()
          .appendField(Blockly.MIXLY_ke_DS3231)
          .appendField(new Blockly.FieldImage("../../media/keyes/ke_ds3231.png", 20, 20))
          .appendField(Blockly.MIXLY_ke_DS3231_SET_TIME)
          .appendField(Blockly.MIXLY_ke_DS3231_SET_TIME2);
      this.setOutput(false, Number);
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setInputsInline(true);
    }
  };
  
  // DS3231 real time clock  -- 获取时间
  Blockly.Blocks.ke_ds3231_GetTime = {
    init: function() {
      this.setColour(Blockly.Blocks.Keyes_special.HUE);
      this.appendDummyInput()
          .appendField(Blockly.MIXLY_ke_DS3231)
          .appendField(new Blockly.FieldImage("../../media/keyes/ke_ds3231.png", 20, 20))
          .appendField(Blockly.MIXLY_ke_DS3231_GET_TIME)
          .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_ke_YEAR, "Year"], 
              [Blockly.MIXLY_ke_MONTH, "Month"],[Blockly.MIXLY_ke_DAY, "Day"],
              [Blockly.MIXLY_ke_HOUR, "Hour"],[Blockly.MIXLY_ke_MINUTE, "Minute"],
              [Blockly.MIXLY_ke_SECOND, "Second"],[Blockly.MIXLY_ke_DAYOFWEEK, "DayOfWeek"]]), "TIME_TYPE");
      this.setOutput(true, Number);
      this.setInputsInline(true);
    }
  };


  // DS1307 real time clock  -- 设置时间
  Blockly.Blocks.ke_ds1307_SetTime = {
    init: function() {
      this.setColour(Blockly.Blocks.Keyes_special.HUE);
      this.appendDummyInput()
          .appendField(Blockly.MIXLY_ke_DS1307)
          .appendField(new Blockly.FieldImage("../../media/keyes/ke_1307.png", 20, 20))
          .appendField(Blockly.MIXLY_ke_DS3231_SET_TIME);
      this.appendValueInput("year")
          .setCheck(Number).setAlign(Blockly.ALIGN_RIGHT)
          .appendField(Blockly.MIXLY_ke_YEAR);
      this.appendValueInput("month")
          .setCheck(Number).setAlign(Blockly.ALIGN_RIGHT)
          .appendField(Blockly.MIXLY_ke_MONTH);
      this.appendValueInput("day")
          .setCheck(Number).setAlign(Blockly.ALIGN_RIGHT)
          .appendField(Blockly.MIXLY_ke_DAY);
      this.appendValueInput("hour")
          .setCheck(Number).setAlign(Blockly.ALIGN_RIGHT)
          .appendField(Blockly.MIXLY_ke_HOUR);
      this.appendValueInput("minute")
          .setCheck(Number).setAlign(Blockly.ALIGN_RIGHT)
          .appendField(Blockly.MIXLY_ke_MINUTE);
      this.appendValueInput("second")
          .setCheck(Number).setAlign(Blockly.ALIGN_RIGHT)
          .appendField(Blockly.MIXLY_ke_SECOND);
      this.setOutput(false, Number);
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setInputsInline(true);
    }
  };
  
  // DS1307 real time clock  -- 设置当前时间
  Blockly.Blocks.ke_ds1307_SetTime2 = {
    init: function() {
      this.setColour(Blockly.Blocks.Keyes_special.HUE);
      this.appendDummyInput()
          .appendField(Blockly.MIXLY_ke_DS1307)
          .appendField(new Blockly.FieldImage("../../media/keyes/ke_1307.png", 20, 20))
          .appendField(Blockly.MIXLY_ke_DS3231_SET_TIME)
          .appendField(Blockly.MIXLY_ke_DS3231_SET_TIME2);
      this.setOutput(false, Number);
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setInputsInline(true);
    }
  };
  
  // DS1307 real time clock  -- 获取时间
  Blockly.Blocks.ke_ds1307_GetTime = {
    init: function() {
      this.setColour(Blockly.Blocks.Keyes_special.HUE);
      this.appendDummyInput()
          .appendField(Blockly.MIXLY_ke_DS1307)
          .appendField(new Blockly.FieldImage("../../media/keyes/ke_1307.png", 20, 20))
          .appendField(Blockly.MIXLY_ke_DS3231_GET_TIME)
          .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_ke_YEAR, "Year"], 
              [Blockly.MIXLY_ke_MONTH, "Month"],[Blockly.MIXLY_ke_DAY, "Day"],
              [Blockly.MIXLY_ke_HOUR, "Hour"],[Blockly.MIXLY_ke_MINUTE, "Minute"],
              [Blockly.MIXLY_ke_SECOND, "Second"],[Blockly.MIXLY_ke_DAYOFWEEK, "DayOfWeek"]]), "TIME_TYPE");
      this.setOutput(true, Number);
      this.setInputsInline(true);
    }
  };
  
///////////旋转编码器////////////////////
Blockly.Blocks.ke_rotation_button = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_special.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_ROT)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_rotaration.png", 20, 20));
    this.appendValueInput("button", Number)
    .appendField(Blockly.Kids_rot)
    .setCheck(Number);
    
    this.setOutput(true, Boolean);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};


/*var rot = [
  ["right", "R"],
  ["left", "L"],
  ["button", "B"],
];*/

///////////旋转编码器////////////////////
Blockly.Blocks.ke_rotation_right = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_special.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_ROT)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_rotaration.png", 20, 20));
   // this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldDropdown(rot), "rot");
    this.appendDummyInput()
        .appendField(Blockly.Kids_rot_count)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldTextInput('i'), 'VAR');
    this.appendValueInput("DAT", Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("DAT")
    .setCheck(Number);
    this.appendValueInput("CLK", Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("CLK")
    .setCheck(Number);
    //this.appendValueInput("button", Number)
   // .appendField("SW")
  //  .setCheck(Number);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(false);
    this.setTooltip('');
    var thisBlock = this;
    this.setTooltip(function() {
      return Blockly.Msg.CONTROLS_FOR_TOOLTIP.replace('%1',
          thisBlock.getFieldValue('VAR'));
    });
  },
  getVars: function() {
    return [this.getFieldValue('VAR')];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setTitleValue(newName, 'VAR');
    }
  }
};

/////////////////pca9685////////////////////////////
Blockly.Blocks.ke_pca9685 = {
    init: function () {
        this.setColour(Blockly.Blocks.Keyes_special.HUE);
        this.appendDummyInput("")
            .appendField("pca9685")
            .appendField(new Blockly.FieldImage("../../media/keyes/ke_pca9685.png", 70, 40));
         
        this.appendValueInput("pin")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("pin0~15");
        this.appendValueInput("pwm")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_ke_angle);
        
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};

///////////////////////////红外测温传感器/////////////////

//初始化MLX90614红外测温传感器
Blockly.Blocks.mlx90614_init= {
  init: function() { 
      this.setColour(Blockly.Blocks.Keyes_special.HUE);
      this.appendValueInput("mlx90614_address")
          .setCheck(null)  
          .appendField(Blockly.MIXLY_SETUP+" MLX90614"+Blockly.MLX90614_TYPE)
          .appendField(new Blockly.FieldImage("../../media/keyes/ke_90614.png", 20, 20))
          .appendField(Blockly.MIXLY_LCD_ADDRESS);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip("");
  }
};


//MLX90614获取数据
Blockly.Blocks.mlx90614_get_data= {
  init: function() { 
       this.setColour(Blockly.Blocks.Keyes_special.HUE);
       var type = [
    [Blockly.MLX90614_TARGET_OBJECT_TEMP+"(℃)","readObjectTempC"],
    [Blockly.MLX90614_TARGET_OBJECT_TEMP+"(℉)","readObjectTempF"],
    [Blockly.MLX90614_AMBIENT_TEMP+"(℃)","readAmbientTempC"],
    [Blockly.MLX90614_AMBIENT_TEMP+"(℉)","readAmbientTempF"]];
       this.appendDummyInput()  
          .appendField("MLX90614"+Blockly.MLX90614_TYPE)
          .appendField(new Blockly.FieldImage("../../media/keyes/ke_90614.png", 20, 20))
          .appendField(Blockly.MIXLY_GET)
          .appendField(new Blockly.FieldDropdown(type), "mlx90614_data");
       this.setInputsInline(true);
       this.setOutput(true, null);
       this.setTooltip(Blockly.MIXLY_TOOLTIP_MLX90614_GET_DATA);
  }
};
///////////////////////////颜色传感器/////////////////
//传感器-颜色识别-获取数据
var TCS34725_GETRGB = [
  [Blockly.Msg.COLOUR_RGB_RED, "getR()"],
  [Blockly.Msg.COLOUR_RGB_GREEN, "getG()"],
  [Blockly.Msg.COLOUR_RGB_BLUE, "getB()"]
  ];
  
  var DF_TCS34725_COLOR = [
  [Blockly.Msg.COLOUR_RGB_RED, "tcs34725.getRedToGamma()"],
  [Blockly.Msg.COLOUR_RGB_GREEN, "tcs34725.getGreenToGamma()"],
  [Blockly.Msg.COLOUR_RGB_BLUE, "tcs34725.getBlueToGamma()"],
  ];
  
  Blockly.Blocks.TCS34725_Get_RGB = {
    init: function() {
      this.setColour(Blockly.Blocks.Keyes_special.HUE);
      this.appendDummyInput("")
      .appendField(new Blockly.FieldImage("../../media/keyes/ke_34725.png", 20, 20))
      .appendField(Blockly.TCS34725_Get_RGB)
      .appendField(new Blockly.FieldDropdown(DF_TCS34725_COLOR), "DF_TCS34725_COLOR");
      this.setInputsInline(true);
      this.setOutput(true);
    }
  };
Blockly.Blocks.TCS34725_Get_RGB = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_special.HUE);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_34725.png", 20, 20))
    .appendField(Blockly.TCS34725_Get_RGB)
    .appendField(new Blockly.FieldDropdown(DF_TCS34725_COLOR), "DF_TCS34725_COLOR");
    this.setInputsInline(true);
    this.setOutput(true);
  }
};

///////////////////////////MAX3010X心率传感器/////////////////
var ke_MAX30102_TYPE = [
  ["温度(℃)", "particleSensor.readTemperature()"],
  ["温度(℉))", "particleSensor.readTemperatureF()"],
  ["红光", "particleSensor.getRed()"],
  ["红外光", "particleSensor.getIR()"],
  ["绿光", "particleSensor.getGreen()"],
  ];
  
  Blockly.Blocks.ke_MAX3010X_Value= {
    init: function() {
      this.setColour(Blockly.Blocks.Keyes_special.HUE);
      this.appendDummyInput("")
      .appendField(new Blockly.FieldImage("../../media/keyes/ke_34725.png", 20, 20))
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(new Blockly.FieldDropdown(ke_MAX30102_TYPE), "MAX3010X_TYPE");
      this.setInputsInline(true);
      this.setOutput(true);
      this.setTooltip();
    }
  };
  
  Blockly.Blocks.ke_MAX3010X_HR = {
    init: function () {
      this.setColour(Blockly.Blocks.Keyes_special.HUE);
      this.appendDummyInput("")
          .appendField(new Blockly.FieldImage("../../media/keyes/ke_34725.png", 20, 20))
          .appendField(new Blockly.FieldTextInput('Bmp_value'), 'VAR')
      this.appendStatementInput('DO');
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setInputsInline(true);
         // this.setTooltip(Blockly.MIXLY_IR_RECIEVE_TOOLTIP);
       },
       getVars: function () {
        return [this.getFieldValue('VAR')];
      },
      renameVar: function (oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
          this.setTitleValue(newName, 'VAR');
        }
      }
    };

///////////////////////////手势识别传感器/////////////////    
//传感器-手势识别-获取数据
Blockly.Blocks.ke_Gesture_APDS = {
  init: function() {
    var ke_APDS_PIN1 = [
  ["A4", "A4"]
];

var ke_APDS_PIN2 = [
  ["A5", "A5"]
];
    
    this.setColour(Blockly.Blocks.Keyes_special.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.ke_Gesture_APDS)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_Gesture_APDS.png", 20, 20)); //图片
    this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField("SDA#").appendField(new Blockly.FieldDropdown(ke_APDS_PIN1), "APDS_PIN1");
    this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField("SCL#").appendField(new Blockly.FieldDropdown(ke_APDS_PIN2), "APDS_PIN2");
    this.setInputsInline(true);
    this.setOutput(true);
   }
};

////////////////////////显示屏///////////////////////
////////////////////////////////////////////////////

//////////////////RGB灯////////////////////////////
Blockly.Blocks.ke_rgb2812 = {
    init: function () {
        this.setColour(Blockly.Blocks.Keyes_display.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.MIXLY_ke_2812RGB)
            .appendField(new Blockly.FieldImage("../../media/keyes/ke_rgb2812.png", 20, 20));
         this.appendValueInput("PIN", Number)
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_PIN);
        this.appendValueInput("num01")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_ke_Count);
        this.appendValueInput("red")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("R:");
        this.appendValueInput("green")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("G:");
        this.appendValueInput("blue")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("B:");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};


//TM1650 4 digital display  -- 初始化
Blockly.Blocks.ke_4digitdisplay_init = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
      this.appendDummyInput("")
          .appendField(Blockly.MIXLY_ke_4DIGITDISPLAY+"")
          .appendField(new Blockly.FieldImage("../../media/keyes/ke_shumaguan.png", 84, 32))
          .appendField(Blockly.MIXLY_SETUP)
      this.appendValueInput("PIN1")
          .setCheck(Number)
          .setAlign(Blockly.ALIGN_RIGHT)
          // .appendField(Blockly.YF_TM1637_INIT)
          .appendField("CLK")
          .appendField(Blockly.MIXLY_PIN);
      this.appendValueInput("PIN2")
          .setCheck(Number)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField("DIO")
          .appendField(Blockly.MIXLY_PIN);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
  }
};

// TM1650 4 digital display  -- 开关 清屏
Blockly.Blocks.ke_4digitdisplay_power = {
  init: function () {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
      this.appendDummyInput()
          .appendField(Blockly.MIXLY_ke_4DIGITDISPLAY+"")
          .appendField(new Blockly.FieldImage("../../media/keyes/ke_shumaguan.png", 84, 32))
          .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_LCD_STAT_ON, "displayOn"], 
              [Blockly.MIXLY_LCD_STAT_OFF, "displayOff"], [Blockly.MIXLY_LCD_STAT_CLEAR, "clear"]]), "STAT");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
  }
};
// TM1650 4 digital display  -- 显示字符串
Blockly.Blocks.ke_4digitdisplay_displayString = {
  init: function () {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
      this.appendDummyInput()
          .appendField(Blockly.MIXLY_ke_4DIGITDISPLAY + "")
          .appendField(new Blockly.FieldImage("../../media/keyes/ke_shumaguan.png", 84, 32))
      this.appendValueInput("VALUE", String)
          .setCheck([String,Number])
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(Blockly.MIXLY_YF_4DIGITDISPLAY_DISPLAYSTRING);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
  }
};
// TM1650 4 digital display  -- 显示数字
Blockly.Blocks.ke_4digitdisplay_displayNumber = {
  init: function () {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
      this.appendDummyInput()
          .appendField(Blockly.MIXLY_ke_4DIGITDISPLAY + "")
          .appendField(new Blockly.FieldImage("../../media/keyes/ke_shumaguan.png", 84, 32));
      this.appendValueInput("VALUE")
          .setCheck(Number)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(Blockly.MIXLY_YF_4DIGITDISPLAY_DISPLAYNUMBER);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip("支持类型:int、float、double");
  }
};
// TM1650 4 digital display  -- 小数点显示
Blockly.Blocks.ke_4digitdisplay_showDot = {
  init: function () {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
      this.appendDummyInput()
          .appendField(Blockly.MIXLY_ke_4DIGITDISPLAY + "")
          .appendField(new Blockly.FieldImage("../../media/keyes/ke_shumaguan.png", 84, 32));
      this.appendValueInput('DOTNUM')
          .appendField(Blockly.MIXLY_ke_4DIGITDISPLAY_NOMBER1);
          //.appendField(new Blockly.FieldDropdown([["1", "0"], ["2", "1"], ["3", "2"], ["4", "3"]]), "NO")
      this.appendDummyInput()
          .appendField(Blockly.MIXLY_ke_4DIGITDISPLAY_NOMBER2)
          .appendField(Blockly.MIXLY_ke_4DIGITDISPLAY_DOT)
          .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_4DIGITDISPLAY_ON, "true"], 
              [Blockly.MIXLY_4DIGITDISPLAY_OFF, "false"]]), "STAT");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip("数字模式小数点:1~4");
  }
};

// TM1650 4 digital display  -- 设置亮度
Blockly.Blocks.ke_4digitdisplay_Brightness = {
init: function() {
  this.setColour(Blockly.Blocks.Keyes_display.HUE);
  this.appendDummyInput()
      .appendField(Blockly.MIXLY_ke_4DIGITDISPLAY + "")
      .appendField(new Blockly.FieldImage("../../media/keyes/ke_shumaguan.png", 84, 32));
  this.appendValueInput('brightness')
      .appendField(Blockly.MIXLY_ke_4DIGITDISPLAY_BRIGHTNESS);
  this.appendDummyInput("")
      .appendField(Blockly.MIXLY_ke_4DIGITDISPLAY_BRIGHTNESS_RANGE);
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setInputsInline(true);
  this.setTooltip("亮度等级范围:1~8");
}
};

// TM1650 4 digital display  -- 时钟模式
Blockly.Blocks.ke_4digitdisplay_Time = {
init: function() {
  this.setColour(Blockly.Blocks.Keyes_display.HUE);
  this.appendDummyInput()
      .appendField(Blockly.MIXLY_ke_4DIGITDISPLAY + "")
      .appendField(new Blockly.FieldImage("../../media/keyes/ke_shumaguan_time.png", 84, 32));
  this.appendValueInput('time_hour')
      .appendField(Blockly.MIXLY_ke_4DIGITDISPLAY_TIME_HOUR);
  this.appendValueInput('time_minute')
      .appendField(Blockly.MIXLY_ke_4DIGITDISPLAY_TIME_MINUTE);
  this.appendDummyInput()
      .appendField(Blockly.MIXLY_ke_4DIGITDISPLAY_TIME_SECOND)
      .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_ke_TIME_SEC_ON, "displaySEC_ON"], 
          [Blockly.MIXLY_ke_TIME_SEC_BLINK, "displaySEC_BLINK"], 
          [Blockly.MIXLY_ke_TIME_SEC_OFF, "displaySEC_OFF"]]), "STAT");
  this.setPreviousStatement(true);
  this.setNextStatement(true);
  this.setInputsInline(true);
}
};

/*
Blockly.Blocks.ke_display_TM1637_init = {
    init: function () {
      this.setColour(Blockly.Blocks.Keyes_display.HUE);
      this.appendDummyInput("")
      .appendField(Blockly.MIXLY_4DIGITDISPLAY_TM1637_INIT)
      .appendField(new Blockly.FieldImage("../../media/keyes/ke_shumaguan.png", 20, 20))
      .appendField('CLK')
      .appendField(Blockly.MIXLY_PIN)
      .appendField(new Blockly.FieldDropdown(profile.default.digital), "CLK")
      .appendField('DIO')
      .appendField(Blockly.MIXLY_PIN)
      .appendField(new Blockly.FieldDropdown(profile.default.digital), "DIO");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
      this.setTooltip(Blockly.MIXLY_4DIGITDISPLAY_TM1637_TIP);
      this.setHelpUrl('');
//    this.setFieldValue("2", "CLK");
 //   this.setFieldValue("4", "DIO");
}
};

Blockly.Blocks.ke_display_TM1637_displyPrint = {
  init: function () {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendValueInput("VALUE")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_shumaguan.png", 20, 20))
    .appendField(Blockly.MIXLY_4DIGITDISPLAY + " TM1637"+Blockly.Msg.OLEDDISPLAY);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.MIXLY_4DIGITDISPLAY_TM1637_DISPLAYSTRING_TIP);
  }
};
var display_Time_Point = [
[Blockly.MIXLY_4DIGITDISPLAY_ON, "true"],
[Blockly.MIXLY_4DIGITDISPLAY_OFF, "false"]
];

Blockly.Blocks.ke_display_TM1637_displayTime = {
  init: function () {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_shumaguan.png", 20, 20))
    .appendField(Blockly.MIXLY_4DIGITDISPLAY + " TM1637"+Blockly.MIXLY_SHOW_FACE_TIME);
    this.appendValueInput("hour")
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_HOUR);
    this.appendValueInput("minute")
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_MINUTE);
     //  .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_ON, "displayOn"], [Blockly.MIXLY_OFF, "displayOff"], [Blockly.MIXLY_LCD_STAT_CLEAR, "clear"]]), "STAT");
    this.appendDummyInput("").appendField(Blockly.MIXLY_DISPLAY_TM1637_Time_Point).appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_ON, "true"], [Blockly.MIXLY_OFF, "false"]]), "STAT");
    
    
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.MIXLY_4DIGITDISPLAY_TM1637_DISPLAYTIME_TOOLTIP);
  }
};

Blockly.Blocks.ke_display_TM1637_Brightness = {
  init: function () {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput("")
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_shumaguan.png", 20, 20))
    .appendField(Blockly.MIXLY_4DIGITDISPLAY + " TM1637"+Blockly.MIXLY_MICROBIT_JS_MONITOR_SET_BRIGHTNESS);
    
    this.appendValueInput("Brightness")
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT);
    this.setTooltip(Blockly.MIXLY_4DIGITDISPLAY_4DIGITDISPLAY_BRIGHTNESS_TOOLTIP);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip(Blockly.MIXLY_TOOPTIP_4DIGITDISPLAY_TM1637_BRIGHTNESS);
  }
};

Blockly.Blocks.ke_display_TM1637_clearDisplay = {
  init: function () {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
     this.appendDummyInput()
     .appendField(new Blockly.FieldImage("../../media/keyes/ke_shumaguan.png", 20, 20))
    .appendField(Blockly.MIXLY_4DIGITDISPLAY + " TM1637")
    
    .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_LCD_STAT_CLEAR, "clear"],[Blockly.MIXLY_LCD_STAT_BLINK, "blink"],[Blockly.MIXLY_ON, "on"], [Blockly.MIXLY_OFF, "off"], ]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.MIXLY_4DIGITDISPLAY_TM1637_CLEARDISPLAY);
  }
};

/////////////////////TM1637数码管初始化//放弃//////////////////////////////////
Blockly.Blocks.ke_tm1637_init = {
    init: function () {
        this.setColour(Blockly.Blocks.Keyes_display.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.ke_TM1637)
            .appendField(new Blockly.FieldImage("../../media/keyes/ke_shumaguan.png", 20, 20));
        this.appendValueInput("PIN1", Number)
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("#CLK:");
        this.appendValueInput("PIN2", Number)
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("#DIO:");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        //this.setTooltip(Blockly.MIXLY_4DIGITDISPLAY_TM1637_TIP);
        //this.setHelpUrl('');
    }
};

//////////////////TM1637数码自定义显示////////////////////////////
Blockly.Blocks.ke_tm1637_dy = {
    init: function () {
        this.setColour(Blockly.Blocks.Keyes_display.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.ke_TM1637)
            .appendField(new Blockly.FieldImage("../../media/keyes/ke_shumaguan.png", 20, 20));
  
        this.appendValueInput("num")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.ke_value);
   
        this.appendValueInput("weishu")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.ke_ws);
        this.appendValueInput("wei")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.ke_begin);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};

//////////////////TM1637数码自定义显示是否填充////////////////////////////
Blockly.Blocks.ke_tm1637_tc = {
    init: function () {
        this.setColour(Blockly.Blocks.Keyes_display.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.ke_TM1637)
            .appendField(new Blockly.FieldImage("../../media/keyes/ke_shumaguan.png", 20, 20));
  
        this.appendValueInput("num")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.ke_value);
   
        this.appendValueInput('0and1')
            .setCheck([Number,Boolean])
            .appendField(Blockly.ke_fill0);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};

//////////////////TM1637数码管亮度////////////////////////////
Blockly.Blocks.ke_tm1637_ld = {
    init: function () {
        this.setColour(Blockly.Blocks.Keyes_display.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.ke_TM1637)
            .appendField(new Blockly.FieldImage("../../media/keyes/ke_shumaguan.png", 20, 20));
  
        this.appendValueInput("num")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.ke_light);
   
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};

//////////////////TM1637数码管是否隐藏////////////////////////////
Blockly.Blocks.ke_tm1637_yc = {
    init: function () {
        this.setColour(Blockly.Blocks.Keyes_display.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.ke_TM1637)
            .appendField(new Blockly.FieldImage("../../media/keyes/ke_shumaguan.png", 20, 20));
  
        this.appendValueInput('BOOL')
            .setCheck([Number,Boolean])
            .appendField(Blockly.ke_XY);
   
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};

//////////////////TM1637数码管是否显示冒号////////////////////////////
Blockly.Blocks.ke_tm1637_mh = {
    init: function () {
        this.setColour(Blockly.Blocks.Keyes_display.HUE);
        this.appendDummyInput("")
            .appendField(Blockly.ke_TM1637)
            .appendField(new Blockly.FieldImage("../../media/keyes/ke_shumaguan.png", 20, 20));
        this.appendValueInput("num1")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.ke_L);
        this.appendValueInput('BOOL')
            .setCheck([Number,Boolean])
            .appendField(Blockly.ke_MH);
        this.appendValueInput("num2")
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.ke_R);
   
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
    }
};
*/
/////////////////////8*8点阵/////////////////////

Blockly.Blocks.ke_matrix_init = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput("").appendField(Blockly.MIXLY_DISPLAY_MATRIX_INIT).appendField(new Blockly.FieldImage("../../media/keyes/ke_matrix.png", 70, 32));
    this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(new Blockly.FieldTextInput('myMatrix'), 'matrixName');
    this.appendValueInput("address", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("address:");
    this.appendValueInput("PIN1").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField("SDA#");
    this.appendValueInput("PIN2").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField("SCL#"); 
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
//   this.setTooltip("display_点阵屏初始化");
   }
};


//执行器_点阵屏显示_画点变量
var ke_DrawPixel_NUM = [
  [Blockly.MIXLY_4DIGITDISPLAY_ON, "1"],
  [Blockly.MIXLY_4DIGITDISPLAY_OFF, "0"]
];

//执行器_点阵屏显示_画点显示
Blockly.Blocks.ke_Matrix_POS = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput("").appendField(new Blockly.FieldTextInput('myMatrix'), 'matrixName').appendField(Blockly.MIXLY_DISPLAY_MATRIX_SHOW);
    this.appendValueInput("XVALUE").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.MIXLY_DISPLAY_MATRIX_X);
    this.appendValueInput("YVALUE").setCheck(Number).setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.MIXLY_DISPLAY_MATRIX_Y);
    this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.MIXLY_DISPLAY_MATRIX_SHOWPOINT).appendField(new Blockly.FieldDropdown(ke_DrawPixel_NUM), "DrawPixel_TYPE");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    //this.setTooltip(Blockly.MIXLY_DISPLAY_MATRIX_SHOWPOINT_TOOLTIP);
  }
};
//执行器_点阵屏显示_旋转变量
var ke_Rotation_NUM = [
  ["0°", "0"],
  ["-90°", "1"],
  ["+90°", "3"],
  ["180°", "2"]
];

//执行器_点阵屏显示_显示旋转
Blockly.Blocks.ke_Matrix_Rotation = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput("").appendField(new Blockly.FieldTextInput('myMatrix'), 'matrixName').appendField(Blockly.MIXLY_DISPLAY_MATRIX_SHOW);
    this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.MIXLY_DISPLAY_MATRIX_ROTATE).appendField(new Blockly.FieldDropdown(ke_Rotation_NUM), "Rotation_TYPE");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
 //   this.setTooltip("");
  }
};
//执行器_点阵屏显示_字符显示
Blockly.Blocks.ke_matrix_text={
  init:function(){
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput("").appendField(new Blockly.FieldTextInput('myMatrix'), 'matrixName').appendField(Blockly.MIXLY_DISPLAY_MATRIX_SHOW);
    this.appendValueInput("TEXT", String).setCheck([Number, String]).setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.ke_string);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    //this.setTooltip("");
  }
};
//执行器_点阵屏显示_显示图案
Blockly.Blocks.ke_matrix1 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput("").appendField(new Blockly.FieldTextInput('myMatrix'), 'matrixName').appendField(Blockly.MIXLY_DISPLAY_MATRIX_SHOW).appendField(new Blockly.FieldImage("../../media/keyes/ke_matrix.png", 70, 32));
    this.appendValueInput("LEDArray").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.MIXLY_DISPLAY_MATRIX_PICARRAY);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip();
  }
};
//执行器_点阵屏显示_图案数组
Blockly.Blocks.ke_matrix2 = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput("").appendField(Blockly.MIXLY_DISPLAY_MATRIX_ARRAYVAR).appendField(new Blockly.FieldTextInput("LedArray1"), "VAR");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a81").appendField(new Blockly.FieldCheckbox("FALSE"), "a82").appendField(new Blockly.FieldCheckbox("FALSE"), "a83").appendField(new Blockly.FieldCheckbox("FALSE"), "a84").appendField(new Blockly.FieldCheckbox("FALSE"), "a85").appendField(new Blockly.FieldCheckbox("FALSE"), "a86").appendField(new Blockly.FieldCheckbox("FALSE"), "a87").appendField(new Blockly.FieldCheckbox("FALSE"), "a88");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a71").appendField(new Blockly.FieldCheckbox("FALSE"), "a72").appendField(new Blockly.FieldCheckbox("FALSE"), "a73").appendField(new Blockly.FieldCheckbox("FALSE"), "a74").appendField(new Blockly.FieldCheckbox("FALSE"), "a75").appendField(new Blockly.FieldCheckbox("FALSE"), "a76").appendField(new Blockly.FieldCheckbox("FALSE"), "a77").appendField(new Blockly.FieldCheckbox("FALSE"), "a78");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a61").appendField(new Blockly.FieldCheckbox("FALSE"), "a62").appendField(new Blockly.FieldCheckbox("FALSE"), "a63").appendField(new Blockly.FieldCheckbox("FALSE"), "a64").appendField(new Blockly.FieldCheckbox("FALSE"), "a65").appendField(new Blockly.FieldCheckbox("FALSE"), "a66").appendField(new Blockly.FieldCheckbox("FALSE"), "a67").appendField(new Blockly.FieldCheckbox("FALSE"), "a68");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a51").appendField(new Blockly.FieldCheckbox("FALSE"), "a52").appendField(new Blockly.FieldCheckbox("FALSE"), "a53").appendField(new Blockly.FieldCheckbox("FALSE"), "a54").appendField(new Blockly.FieldCheckbox("FALSE"), "a55").appendField(new Blockly.FieldCheckbox("FALSE"), "a56").appendField(new Blockly.FieldCheckbox("FALSE"), "a57").appendField(new Blockly.FieldCheckbox("FALSE"), "a58");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a41").appendField(new Blockly.FieldCheckbox("FALSE"), "a42").appendField(new Blockly.FieldCheckbox("FALSE"), "a43").appendField(new Blockly.FieldCheckbox("FALSE"), "a44").appendField(new Blockly.FieldCheckbox("FALSE"), "a45").appendField(new Blockly.FieldCheckbox("FALSE"), "a46").appendField(new Blockly.FieldCheckbox("FALSE"), "a47").appendField(new Blockly.FieldCheckbox("FALSE"), "a48");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a31").appendField(new Blockly.FieldCheckbox("FALSE"), "a32").appendField(new Blockly.FieldCheckbox("FALSE"), "a33").appendField(new Blockly.FieldCheckbox("FALSE"), "a34").appendField(new Blockly.FieldCheckbox("FALSE"), "a35").appendField(new Blockly.FieldCheckbox("FALSE"), "a36").appendField(new Blockly.FieldCheckbox("FALSE"), "a37").appendField(new Blockly.FieldCheckbox("FALSE"), "a38");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a21").appendField(new Blockly.FieldCheckbox("FALSE"), "a22").appendField(new Blockly.FieldCheckbox("FALSE"), "a23").appendField(new Blockly.FieldCheckbox("FALSE"), "a24").appendField(new Blockly.FieldCheckbox("FALSE"), "a25").appendField(new Blockly.FieldCheckbox("FALSE"), "a26").appendField(new Blockly.FieldCheckbox("FALSE"), "a27").appendField(new Blockly.FieldCheckbox("FALSE"), "a28");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a11").appendField(new Blockly.FieldCheckbox("FALSE"), "a12").appendField(new Blockly.FieldCheckbox("FALSE"), "a13").appendField(new Blockly.FieldCheckbox("FALSE"), "a14").appendField(new Blockly.FieldCheckbox("FALSE"), "a15").appendField(new Blockly.FieldCheckbox("FALSE"), "a16").appendField(new Blockly.FieldCheckbox("FALSE"), "a17").appendField(new Blockly.FieldCheckbox("FALSE"), "a18");
    this.setOutput(true, Number);
    //this.setTooltip();
  }
};


//执行器_点阵屏显示_清除屏幕
Blockly.Blocks.ke_matrix_clear = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput("").appendField(new Blockly.FieldTextInput('myMatrix'), 'matrixName').appendField(Blockly.MIXLY_DISPLAY_MATRIX_SHOW);
    this.appendDummyInput("").setAlign(Blockly.ALIGN_RIGHT).appendField(Blockly.MIXLY_DISPLAY_MATRIX_CLEAR);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    //this.setTooltip();
  }
};

///////////////////1602LCD无IIC//////////////////////
/*Blockly.Blocks.ke_1602lcd_w = {
  init: function() {
      this.setColour(Blockly.Blocks.Keyes_display.HUE);
      this.appendDummyInput("")
          .appendField("LCD1602")
          .appendField(new Blockly.FieldImage("../../media/keyes/ke_lcd1602.png", 70, 32));
    this.appendValueInput("TEXT1", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        //.appendField(new Blockly.FieldTextInput('mylcd'), 'VAR')
        .appendField(Blockly.MIXLY_LCD_PRINT1);
    this.appendValueInput("TEXT2", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_LCD_PRINT2);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};
*/


///////////////////1602LCD_init//////////////////////
Blockly.Blocks.ke_1602lcd_init = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendValueInput("address", Number)
        //.setCheck(Number)
        //.setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_SETUP)
        .appendField(Blockly.Kids_lcd_p)
        .appendField(new Blockly.FieldDropdown([['1602','16,2'],['2004','20,4']]),'TYPE')
        .appendField(Blockly.Kids_shilihua)
        .appendField(new Blockly.FieldTextInput('mylcd'), 'VAR')
        .appendField(Blockly.Kids_iic_pin)
        //.appendField("address:");
        
        //.setCheck(Number)
        //.setAlign(Blockly.ALIGN_RIGHT)
        //.appendField("address:");
        .appendField(Blockly.MIXLY_LCD_ADDRESS);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
  }
};


Blockly.Blocks.ke_1602lcd = {
  init: function() {
      this.setColour(Blockly.Blocks.Keyes_display.HUE);
      this.appendDummyInput("")
          .appendField(Blockly.MIXLY_DF_LCD)
          .appendField(new Blockly.FieldImage("../../media/keyes/ke_lcd1602.png", 70, 32));
    this.appendValueInput("TEXT", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
       // .appendField(Blockly.MIXLY_DF_LCD)
        
        .appendField(new Blockly.FieldTextInput('mylcd'), 'VAR')
        .appendField(Blockly.MIXLY_LCD_PRINT1);
    this.appendValueInput("TEXT2", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_LCD_PRINT2);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks.ke_1602lcd_print2 = {
  init: function() {
      this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendValueInput("row", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_DF_LCD)
        .appendField(new Blockly.FieldTextInput('mylcd'), 'VAR')
        .appendField(Blockly.MIXLY_LCD_ROW);
    this.appendValueInput("column", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_LCD_COLUMN);
    this.appendValueInput("TEXT", String)
        .setCheck([String,Number])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.MIXLY_LCD_PRINT);
    this.setPreviousStatement(true, null);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
  }
};




///////////////////1602LCD//////////////////////
/*Blockly.Blocks.ke_1602lcd = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_1602LCD)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_lcd1602.png", 70, 32));
    this.appendValueInput("TEXT1", String)
    .setCheck([String,Number])
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_ke_print1);
    this.appendValueInput("TEXT2", String)
    .setCheck([String,Number])
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_ke_print2)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};*/

Blockly.Blocks.ke_1602lcd_left = {
  init: function() {
      this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Kids_lcd_left)
        .appendField(new Blockly.FieldTextInput('mylcd'), 'VAR');
        
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks.ke_1602lcd_right = {
  init: function() {
      this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput()
        .appendField(Blockly.Kids_lcd_right)
        .appendField(new Blockly.FieldTextInput('mylcd'), 'VAR');
        
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks.ke_1602lcd_clear = {
  init: function() {
      this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput()
        .appendField(Blockly.MIXLY_DF_LCD)
        .appendField(new Blockly.FieldTextInput('mylcd'), 'VAR')
        .appendField(new Blockly.FieldDropdown([[Blockly.MIXLY_LCD_STAT_ON, "display"], [Blockly.MIXLY_LCD_STAT_OFF, "noDisplay"], [Blockly.MIXLY_LCD_STAT_CURSOR, "cursor"], [Blockly.MIXLY_LCD_STAT_NOCURSOR, "noCursor"], [Blockly.MIXLY_LCD_STAT_BLINK, "blink"], [Blockly.MIXLY_LCD_STAT_NOBLINK, "noBlink"], [Blockly.MIXLY_LCD_STAT_CLEAR, "clear"], [Blockly.MIXLY_LCD_NOBACKLIGHT, "noBacklight"], [Blockly.MIXLY_LCD_BACKLIGHT, "backlight"]]), "STAT");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

 //128X32 LCD display  -- 初始化
  
  Blockly.Blocks.lcd128_init = {
  init: function() {
      this.appendDummyInput("")
          .appendField(new Blockly.FieldImage("../../media/keyes/12832.png", 84, 32))
          .appendField(Blockly.MIXLY_LCD128_SETUP);
      this.setColour(Blockly.Blocks.Keyes_display.HUE);     
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
  }
}; 

//128X32 LCD display 显示第几行第几列  
  Blockly.Blocks.lcd128_cursor = {
    init: function() {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput("")
      .appendField(Blockly.MIXLY_LCD128_CURSOR)
      .appendField(new Blockly.FieldImage("../../media/keyes/12832.png", 84, 32));
    this.appendValueInput("row", Number)  //数字输入和上面的图片分开写
      .setCheck(Number)  //少了这个
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.MIXLY_LCD_ROW);
    this.appendValueInput("col", Number)
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.MIXLY_LCD_COLUMN);
    this.setPreviousStatement(true, null);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    }
  };


 //128X32 LCD display 显示字符  
  Blockly.Blocks.lcd128_string = {
    init:function(){
      this.setColour(Blockly.Blocks.Keyes_display.HUE);
      this.appendDummyInput("")
          .appendField(Blockly.MIXLY_DISPLAY_STRING)
          .appendField(new Blockly.FieldImage("../../media/keyes/12832.png", 84, 32));
      this.appendValueInput("string", String)
          .setCheck([Number, String])
          .setAlign(Blockly.ALIGN_RIGHT);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(true);
    }
  };
     

 //128X32 LCD display 画点坐标 
  Blockly.Blocks.lcd128_pixel = {
    init: function () {
        this.setColour(Blockly.Blocks.Keyes_display.HUE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("../../media/keyes/12832.png", 84, 32))
            .appendField(Blockly.MIXLY_ke_LCD128_PIXLE);
        this.appendValueInput("row", Number)
            .setCheck()
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput("col", Number)
            .setCheck()
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
  };


 //128X32 LCD display 删除点坐标
  Blockly.Blocks.lcd128_d_pixel = {
    init: function () {
        this.setColour(Blockly.Blocks.Keyes_display.HUE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("../../media/keyes/12832.png", 84, 32))
            .appendField(Blockly.MIXLY_ke_LCD128_D);  
        this.appendValueInput("row", Number)
            .setCheck()
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendValueInput("col", Number)
            .setCheck()
            .setAlign(Blockly.ALIGN_RIGHT);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);  
    }
  };
  
   //128X32 LCD display 清屏
  Blockly.Blocks.lcd128_clear = {
    init: function() {
      this.setColour(Blockly.Blocks.Keyes_display.HUE);
      this.appendDummyInput("")
          .appendField(Blockly.MIXLY_LCD128_CLEAR)
          .appendField(new Blockly.FieldImage("../../media/keyes/12832.png", 84, 32));
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
    }
};

///////////////////LCD1602清屏///////////////////////
/*Blockly.Blocks.ke_1602lcd_clear = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput("")
    .appendField("1602LCD_clear")
    //.appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "HIGH"], [Blockly.Kids_OFF, "LOW"]]), "STAT");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};*/


/////////////////2004LCD//////////////////////
Blockly.Blocks.ke_2004lcd = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_2004LCD)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_lcd2004.png", 70, 32));
    this.appendValueInput("TEXT1", String)
    .setCheck([String,Number])
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_ke_print1);
    this.appendValueInput("TEXT2", String)
    .setCheck([String,Number])
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_ke_print2)
    this.appendValueInput("TEXT3", String)
    .setCheck([String,Number])
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_ke_print3);
    this.appendValueInput("TEXT4", String)
    .setCheck([String,Number])
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_ke_print4)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};


///////////////////OLED_init///////////////////////
Blockly.Blocks.ke_OLED_init = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.ke_oled_init)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_oled.png", 70, 32))
    .appendField(Blockly.Kids_iic_pin);
    //.appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "HIGH"], [Blockly.Kids_OFF, "LOW"]]), "STAT");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

///////////////////OLED_piexl///////////////////////
Blockly.Blocks.ke_OLED_piexl = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.ke_oled_piexl);
    this.appendValueInput("val_x", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_x);
    this.appendValueInput("val_y", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_y);
    //.appendField(new Blockly.FieldImage("../../media/keyes/ke_oled.png", 70, 32))
    //.appendField(Blockly.Kids_iic_pin);
    //.appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "HIGH"], [Blockly.Kids_OFF, "LOW"]]), "STAT");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

///////////////////OLED_line///////////////////////
Blockly.Blocks.ke_OLED_line = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.ke_oled_line)
    .appendField(Blockly.ke_oled_cong);
    this.appendValueInput("val_x1", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_x);
    this.appendValueInput("val_y1", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_y);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_dao);
    this.appendValueInput("val_x2", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_x);
    this.appendValueInput("val_y2", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_y);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};


///////////////////OLED_rect///////////////////////
Blockly.Blocks.ke_OLED_rect = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.ke_oled_rect);
    this.appendDummyInput("")
    .appendField(Blockly.ke_oled_kai);
    this.appendValueInput("val_x1", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_x);
    this.appendValueInput("val_y1", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_y);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_chang);
    this.appendValueInput("val_x2", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_x);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_kuan);
    this.appendValueInput("val_y2", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_y);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

///////////////////OLED_fullrect///////////////////////
Blockly.Blocks.ke_OLED_fullrect = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.ke_oled_fil_lrect);
    this.appendDummyInput("")
    .appendField(Blockly.ke_oled_kai);
    this.appendValueInput("val_x1", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_x);
    this.appendValueInput("val_y1", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_y);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_chang);
    this.appendValueInput("val_x2", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_x);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_kuan);
    this.appendValueInput("val_y2", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_y);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};



///////////////////OLED_roundrect///////////////////////
Blockly.Blocks.ke_OLED_roundrect = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.ke_oled_r_rect);
    this.appendDummyInput("")
    .appendField(Blockly.ke_oled_kai);
    this.appendValueInput("val_x1", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_x);
    this.appendValueInput("val_y1", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_y);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_chang);
    this.appendValueInput("val_x2", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_x);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_kuan);
    this.appendValueInput("val_y2", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_y);
    this.appendValueInput("val_round", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_radius);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};


///////////////////OLED_fullroundrect///////////////////////
Blockly.Blocks.ke_OLED_fullroundrect = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.ke_oled_r_fill_rect);
    this.appendDummyInput("")
    .appendField(Blockly.ke_oled_kai);
    this.appendValueInput("val_x1", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_x);
    this.appendValueInput("val_y1", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_y);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_chang);
    this.appendValueInput("val_x2", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_x);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_kuan);
    this.appendValueInput("val_y2", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_y);
    this.appendValueInput("val_round", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_radius);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};



///////////////////OLED_circle///////////////////////
Blockly.Blocks.ke_OLED_circle = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.ke_oled_circle);
    this.appendValueInput("val_x1", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_x);
    this.appendValueInput("val_y1", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_y);
    
    this.appendValueInput("val_circle", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_circle_radius);
    
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

///////////////////OLED_fullcircle///////////////////////
Blockly.Blocks.ke_OLED_fullcircle = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.ke_oled_fill_circle);
    this.appendValueInput("val_x1", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_x);
    this.appendValueInput("val_y1", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_y);
    
    this.appendValueInput("val_circle", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_circle_radius);
    
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

///////////////////OLED_三角形///////////////////////
Blockly.Blocks.ke_OLED_triangle = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.ke_oled_triangle)
    .appendField(Blockly.ke_oled_angle1);
    this.appendValueInput("val_x1", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_x);
    this.appendValueInput("val_y1", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_y);

    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_angle2);
    this.appendValueInput("val_x2", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_x);
    this.appendValueInput("val_y2", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_y);

    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_angle3);
    this.appendValueInput("val_x3", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_x);
    this.appendValueInput("val_y3", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_y);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};



///////////////////OLED_填充三角形///////////////////////
Blockly.Blocks.ke_OLED_fulltriangle = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.ke_oled_fill_triangle)
    .appendField(Blockly.ke_oled_angle1);
    this.appendValueInput("val_x1", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_x);
    this.appendValueInput("val_y1", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_y);

    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_angle2);
    this.appendValueInput("val_x2", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_x);
    this.appendValueInput("val_y2", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_y);

    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_angle3);
    this.appendValueInput("val_x3", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_x);
    this.appendValueInput("val_y3", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_y);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

///////////////////OLED_string///////////////////////
Blockly.Blocks.ke_OLED_string = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.ke_oled_string1);
    this.appendValueInput("size", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.Kids_size);
    this.appendDummyInput("")
    .appendField(Blockly.ke_oled_weizhi);
    this.appendValueInput("val_x1", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_x);
    this.appendValueInput("val_y1", Number)
    .setCheck(Number);
    this.appendDummyInput("")
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_y);
    this.appendValueInput("TEXT1", String)
    .setCheck([String,Number])
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.ke_oled_print);
    //.appendField(new Blockly.FieldImage("../../media/keyes/ke_oled.png", 70, 32))
    //.appendField(Blockly.Kids_iic_pin);
    //.appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "HIGH"], [Blockly.Kids_OFF, "LOW"]]), "STAT");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};


////////////////////OLED////////////////////////
Blockly.Blocks.ke_oled = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_OLED);
    

    this.appendValueInput("size", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.Kids_size);
 
    this.appendValueInput("TEXT1", String)
    .setCheck([String,Number])
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_ke_print1);
    this.appendValueInput("TEXT2", String)
    .setCheck([String,Number])
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_ke_print2);
    this.appendValueInput("TEXT3", String)
    .setCheck([String,Number])
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_ke_print3);
    this.appendValueInput("TEXT4", String)
    .setCheck([String,Number])
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField(Blockly.MIXLY_ke_print4);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

///////////////////OLED清屏///////////////////////
Blockly.Blocks.ke_oled_clear = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_display.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.ke_oled_clear)
    //.appendField(new Blockly.FieldDropdown([[Blockly.Kids_ON, "HIGH"], [Blockly.Kids_OFF, "LOW"]]), "STAT");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};


/////////////////////////////通讯/////////////////////////////////////////////

////////////////红外接收////////////////////////////
//红外接收模块
Blockly.Blocks.ke_ir_r = {
    init: function () {
        this.setColour(Blockly.Blocks.Keyes_communication.HUE);
        this.appendValueInput("PIN", Number)
            .appendField(new Blockly.FieldTextInput('ir_rec'), 'VAR')
            .appendField(Blockly.MIXLY_ke_IR_R)
            .appendField(new Blockly.FieldImage("../../media/keyes/ke_irr.png", 70, 32))
            .appendField(Blockly.MIXLY_PIN)
            .setCheck(Number);
        this.appendStatementInput('DO')
            .appendField(Blockly.MIXLY_ke_read);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setTooltip(Blockly.MIXLY_IR_RECIEVE_TOOLTIP);
    },
    getVars: function () {
        return [this.getFieldValue('VAR')];
    },
    renameVar: function (oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
            this.setTitleValue(newName, 'VAR');
        }
    }
};

////////////////////红外发射/////////////////////
Blockly.Blocks.ke_ir_s = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_communication.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_ke_IR_E)
    .appendField(new Blockly.FieldImage("../../media/keyes/ke_irs.png", 20, 20));
    
    this.appendValueInput("num1", Number)
    .setCheck(Number)
    .setAlign(Blockly.ALIGN_RIGHT)
    .appendField("Send");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};


//////////////////////RFID////////////////////////////
Blockly.Blocks.rc522_i2c_init = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_communication.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_rc522_iic_init)
    .appendField(new Blockly.FieldImage("../../media/keyes/rc522_iic.png", 60, 40));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
  }
};

Blockly.Blocks.rc522_i2c_read = {
  init: function() {
    this.setColour(Blockly.Blocks.Keyes_communication.HUE);
    this.appendDummyInput("")
    .appendField(Blockly.MIXLY_rc522_iic_read)
    .appendField(new Blockly.FieldImage("../../media/keyes/rc522_iic.png", 60, 40));
    this.setOutput(true, Number);
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

//////////////////////蓝牙////////////////////////////
Blockly.Blocks.ke_bluetooth = {
  init: function () {
    this.setColour(Blockly.Blocks.Keyes_communication.HUE);
    this.appendValueInput("PIN1", Number)
      .appendField(new Blockly.FieldTextInput('val'), 'VAL')
      .appendField(Blockly.MIXLY_ke_BLUETOOTH)
      .appendField(new Blockly.FieldImage("../../media/keyes/ke_bluetooth.png", 70, 32))
      .appendField("RX:")
      .setCheck(Number);
    this.appendValueInput("PIN2", Number)
      .appendField("TX:")
      .setCheck(Number);
    this.appendStatementInput('DO')
      .appendField(Blockly.MIXLY_ke_read);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip("bluetooth");
  },
  getVars: function () {
    return [this.getFieldValue('VAL')];
  },
  renameVar: function (oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAL'))) {
      this.setTitleValue(newName, 'VAL');
    }
  }
};

// 5路循迹传感器 QTR-5RC 初始化

Blockly.Blocks.qwdz_5rc_init = {
  init: function () {
    this.setColour(Blockly.Blocks.qwdz.HUE);
    this.appendDummyInput("")
      .appendField("循迹初始化");
    this.appendValueInput("PINIR1", Number)
      .appendField('IR1')
      .setCheck(Number);
    this.appendValueInput("PINIR2", Number)
      .appendField('IR2')
      .setCheck(Number);
    this.appendValueInput("PINIR3", Number)
      .appendField('IR3')
      .setCheck(Number);
    this.appendValueInput("PINIR4", Number)
      .appendField('IR4')
      .setCheck(Number);
    this.appendValueInput("PINIR5", Number)
      .appendField('IR5')
      .setCheck(Number);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip("5路循迹模块初始化");
  }, getVars: function () {
    return [this.getFieldValue('VAR')];
  }, renameVar: function (oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setTitleValue(newName, 'VAR');
    }
  }
};

// 5路循迹传感器 QTR-5RC 校准
Blockly.Blocks.yf_qtr_5rc_calibrate = {
  init: function () {
    this.setColour(Blockly.Blocks.qwdz.HUE);
    this.appendDummyInput("")
      .appendField("循迹校准");
    // .appendField(new Blockly.FieldImage("./libraries/ThirdParty/YFRobot/media/yfrobot/yf_ultrasonic_04.png", 70, 32))
    // .appendField(" ")
    // .appendField(new Blockly.FieldTextInput('qtr'), 'VAR');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip("循迹校准:将传感器置于最亮和最暗的环境中");
  }
};

// 5路循迹传感器 QTR-5RC 读取传感器
Blockly.Blocks.yf_qtr_5rc_readLineBlack = {
  init: function () {
    this.setColour(Blockly.Blocks.qwdz.HUE);
    this.appendDummyInput("")
      .appendField("循迹读取传感器");
    // .appendField(new Blockly.FieldImage("./libraries/ThirdParty/YFRobot/media/yfrobot/yf_ultrasonic_04.png", 70, 32))
    // .appendField(" ")
    // .appendField(new Blockly.FieldTextInput('qtr'), 'VAR');
    this.appendDummyInput("")
      .appendField(" ")
      .appendField(new Blockly.FieldTextInput('sensorValues'), 'VARVALUE');
    this.setInputsInline(true);
    this.setOutput(true, Number);
    this.setTooltip("sensorValues[5]，校准后使用;0-最大反射率，1000-最小反射率。");
  }
};

// 5路循迹传感器 QTR-5RC 读取传感器(无需校准，读原始传感器值)
Blockly.Blocks.yf_qtr_5rc_readWithoutCalibrate = {
  init: function () {
    this.setColour(Blockly.Blocks.qwdz.HUE);
    this.appendDummyInput("")
      .appendField("循迹读取传感器原始值（0~2500）");
    // .appendField(new Blockly.FieldImage("./libraries/ThirdParty/YFRobot/media/yfrobot/yf_ultrasonic_04.png", 70, 32))
    // .appendField(" ")
    // .appendField(new Blockly.FieldTextInput('qtr'), 'VAR');
    this.appendDummyInput("")
      .appendField(" ")
      .appendField(new Blockly.FieldTextInput('sensorValues'), 'VARVALUE');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setInputsInline(true);
    this.setTooltip("sensorValues[5]，无需校准读原始传感器值;0-最大反射率，2500-最小反射率。");
  }
};

