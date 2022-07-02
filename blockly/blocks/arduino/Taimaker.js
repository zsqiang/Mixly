'use strict';

goog.provide('Blockly.Blocks.Taimaker');

goog.require('Blockly.Blocks');

Blockly.Blocks.Taimaker.HUE = 210;
Blockly.Blocks.Taimaker.TaiMaQueen_Expend = 300;
Blockly.Blocks.Taimaker.TaiMaco = 160;
Blockly.Blocks.Taimaker.TaiMaQueen = 100;
Blockly.Blocks.Taimaker.Programme = 260;

Blockly.Blocks.TaiMaro_Set_PWM = {
   init: function() {
    this.setColour(Blockly.Blocks.Taimaker.HUE);
    this.appendDummyInput("")
	    .appendField("设置")
        .appendField(new Blockly.FieldDropdown([["左前轮", "1"], ["左后轮", "2"],["右前轮", "3"],["右后轮", "4"]]), 'PIN') ;
    this.appendValueInput('speed')
		.setCheck(Number)
		.appendField("赋值为");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setInputsInline(true);
  }
};

Blockly.Blocks.TaiMaro_Control_Speed_Line = {
   init: function() {
    this.setColour(Blockly.Blocks.Taimaker.HUE);
    this.appendDummyInput("")
	    .appendField("麦轮小车巡线前进")
    this.appendValueInput('dis')
		.setCheck(Number)
		.appendField("cm");
    this.appendValueInput('speed')
		.setCheck(Number)
		.appendField("速度赋值为");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setInputsInline(true);
  }
};

Blockly.Blocks.TaiMaro_Move_Forward = {
   init: function() {
    this.setColour(Blockly.Blocks.Taimaker.HUE);
    this.appendDummyInput("")
	    .appendField("麦轮小车")
    this.appendValueInput('forward_Distance')
		.setCheck(Number)
		.appendField("前进");
    this.appendDummyInput("")
	    .appendField("毫米");
    this.appendValueInput('forward_Speed')
		.setCheck(Number)
		.appendField("速度赋值为");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setInputsInline(true);
  }
};

Blockly.Blocks.TaiMaro_Move_Level_Left = {
   init: function() {
    this.setColour(Blockly.Blocks.Taimaker.HUE);
    this.appendDummyInput("")
	    .appendField("麦轮小车")
    this.appendValueInput('left_Distance')
		.setCheck(Number)
		.appendField("向左平移");
    this.appendDummyInput("")
	    .appendField("毫米");
    this.appendValueInput('left_Speed')
		.setCheck(Number)
		.appendField("速度赋值为");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setInputsInline(true);
  }
};

Blockly.Blocks.TaiMaro_Move_Level_Right = {
   init: function() {
    this.setColour(Blockly.Blocks.Taimaker.HUE);
    this.appendDummyInput("")
	    .appendField("麦轮小车")
    this.appendValueInput('right_Distance')
		.setCheck(Number)
		.appendField("向右平移");
    this.appendDummyInput("")
	    .appendField("毫米");
    this.appendValueInput('right_Speed')
		.setCheck(Number)
		.appendField("速度赋值为");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setInputsInline(true);
  }
};

Blockly.Blocks.TaiMaro_Move_Back = {
   init: function() {
    this.setColour(Blockly.Blocks.Taimaker.HUE);
    this.appendDummyInput("")
	    .appendField("麦轮小车")
    this.appendValueInput('back_Distance')
		.setCheck(Number)
		.appendField("后退");
    this.appendDummyInput("")
	    .appendField("毫米");
    this.appendValueInput('back_Speed')
		.setCheck(Number)
		.appendField("速度赋值为");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setInputsInline(true);
  }
};



Blockly.Blocks.TaiMaro_Distance = {
  init: function() {
    this.setColour(Blockly.Blocks.Taimaker.HUE);
    this.appendDummyInput("")
	      .appendField("获取前进距离");
    this.setOutput(true, Number);
  }
};

Blockly.Blocks.TaiMaro_Clearmove = {
  init: function() {
    this.setColour(Blockly.Blocks.Taimaker.HUE);
    this.appendDummyInput("")
	      .appendField("清空移动距离");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
  }
};

Blockly.Blocks.TaiMaro_Level_Distance = {
  init: function() {
    this.setColour(Blockly.Blocks.Taimaker.HUE);
    this.appendDummyInput("")
	      .appendField("获取水平移动距离");
    this.setOutput(true, Number);
  }
};

Blockly.Blocks.TaiMaro_Steering_Angle = {
  init: function() {
    this.setColour(Blockly.Blocks.Taimaker.HUE);
    this.appendDummyInput("")
	      .appendField("获取转向角度");
    this.setOutput(true, Number);
  }
};


Blockly.Blocks.TaiMaro_Barrier = {
  init: function() {
    this.setColour(Blockly.Blocks.Taimaker.HUE);
    this.appendDummyInput("")
	    .appendField("激光测距模块")
	    .appendField(new Blockly.FieldDropdown([["前方避障", "1"],["左侧避障", "4"],["右侧避障", "5"],["后方避障", "6"]]), "PORT");
    this.appendValueInput('distance')
		.setCheck(Number)
		.appendField("距离");
    this.appendDummyInput("")
	    .appendField("毫米内是否存在障碍物")
	this.setOutput(true, Number);
  }
};


Blockly.Blocks.TaiMaro_Barrier_Date = {
  init: function() {
    this.setColour(Blockly.Blocks.Taimaker.HUE);
    this.appendDummyInput("")
	    .appendField("获取激光测距模块距离（毫米）")
	    .appendField(new Blockly.FieldDropdown([["前方避障", "1"],["左侧避障", "2"],["右侧避障", "3"],["后方避障", "4"]]), "PORT");
	this.setOutput(true, Number);
  }
};


Blockly.Blocks.TaiMaro_Camera = {
  init: function() {
    this.setColour(Blockly.Blocks.Taimaker.HUE);
    this.appendDummyInput("")
	      .appendField("视觉识别车道偏差角度");
    this.setOutput(true, Number);
  }
};

Blockly.Blocks.TaiMaro_Color = {
  init: function() {
    this.setColour(Blockly.Blocks.Taimaker.HUE);
    this.appendDummyInput("")
	      .appendField("颜色识别")
		  .appendField("#")
	      .appendField(new Blockly.FieldDropdown([["红", "1"],["绿", "2"],["蓝", "3"]]), "PORT");
    this.setOutput(true, Number);
  }
};

Blockly.Blocks.TaiMaro_Color_Coordinates = {
  init: function() {
    this.setColour(Blockly.Blocks.Taimaker.HUE);
    this.appendDummyInput("")
	      .appendField("颜色识别")
		  .appendField("#")
	      .appendField(new Blockly.FieldDropdown([["红", "1"],["绿", "2"],["蓝", "3"]]), "PORT")
	      .appendField("获取")
		  .appendField("#")
	      .appendField(new Blockly.FieldDropdown([["X轴坐标", "1"],["Y轴坐标", "2"],["颜色长度", "3"],["颜色宽度", "4"],["颜色旋转角度", "5"]]), "type");
    this.setOutput(true, Number);
  }
};


Blockly.Blocks.TaiMaro_Sign_Recognition = {
  init: function() {
    this.setColour(Blockly.Blocks.Taimaker.HUE);
    this.appendDummyInput("")
	      .appendField("路标识别")
		  .appendField("#")
	      .appendField(new Blockly.FieldDropdown([["数字1", "1"],["数字2", "2"],["数字3", "3"],["左转标志", "7"],["右转标志", "8"],["自定义图像1", "4"],["自定义图像2", "5"],["自定义图像3", "6"]]), "PORT");
    this.setOutput(true, Number);
  }
};

Blockly.Blocks.TaiMaro_Finger_Recognition = {
  init: function() {
    this.setColour(Blockly.Blocks.Taimaker.HUE);
    this.appendDummyInput("")
	      .appendField("手势识别");
    this.setOutput(true, Number);
  }
};

Blockly.Blocks.TaiMaro_Polygon_Recognition = {
   init: function() {
    this.setColour(Blockly.Blocks.Taimaker.HUE);
    this.appendValueInput('Num')
		.setCheck(Number)
		.appendField("识别");
    this.appendDummyInput("")
	    .appendField("边形数量")
	this.setOutput(true, Number);
  }
};


Blockly.Blocks.TaiMaro_Side_Num = {
  init: function() {
    this.setColour(Blockly.Blocks.Taimaker.HUE);
    this.appendDummyInput("")
	      .appendField("形状识别");
    this.setOutput(true, Number);
  }
};


Blockly.Blocks.TaiMaro_Setup_IMGRANGE = {
   init: function() {
    this.setColour(Blockly.Blocks.Taimaker.HUE);
    this.appendValueInput('Num')
		.setCheck(Number)
		.appendField("设定摄像头范围参数为");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setInputsInline(true);
  }
};

Blockly.Blocks.TaiMaro_Setup_LINETHRESHOLD = {
   init: function() {
    this.setColour(Blockly.Blocks.Taimaker.HUE);
    this.appendValueInput('Num')
		.setCheck(Number)
		.appendField("设定亮度修正参数为");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setInputsInline(true);
  }
};

Blockly.Blocks.TaiMaro_Brake_Light = {
   init: function() {
    this.setColour(Blockly.Blocks.Taimaker.HUE);
    this.appendDummyInput("")
	    .appendField("刹车灯状态")
        .appendField(new Blockly.FieldDropdown([["亮", "1"],["灭", "2"]]), 'PIN') ;
    this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setInputsInline(true);
  }
};

Blockly.Blocks.TaiMaro_Turn_Light = {
	init: function() {
    this.setColour(Blockly.Blocks.Taimaker.HUE);
    this.appendDummyInput("")
        .appendField("设置灯带")
        .appendField("#")
        .appendField(new Blockly.FieldDropdown([["左侧灯带", "1"],["右侧灯带", "2"]]), "PIN")
    this.appendValueInput("LightNum", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("彩灯号");
	this.appendValueInput("R", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("R");
	this.appendValueInput("G", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("G");
	this.appendValueInput("B", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("B");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
  }
};





Blockly.Blocks.TaiMaro_MPU6050 = {
  init: function() {
    this.setColour(Blockly.Blocks.Taimaker.HUE);
    this.appendDummyInput("")
	    .appendField("陀螺仪 获取Z轴角速度")
	    .appendField("数值");
    this.setOutput(true, Number);
  }
};

Blockly.Blocks.TaiMaro_Speak = {
   init: function() {
    this.setColour(Blockly.Blocks.Taimaker.HUE);
    this.appendDummyInput("")
	    .appendField("播放音频")
    this.appendValueInput('sound_num')
		.setCheck(Number)
		.appendField("音频号");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setInputsInline(true);
  }
};

Blockly.Blocks.TaiMaQueen_Set_PWM = {
   init: function() {
    this.setColour(Blockly.Blocks.Taimaker.TaiMaQueen);
    this.appendDummyInput("")
	    .appendField("设置")
        .appendField(new Blockly.FieldDropdown([["左前轮", "1"], ["左后轮", "2"],["右前轮", "3"],["右后轮", "4"]]), 'PIN') ;
    this.appendValueInput('speed')
		.setCheck(Number)
		.appendField("赋值为");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setInputsInline(true);
  }
};

Blockly.Blocks.TaiMaQueen_Servo = {
   init: function() {
    this.setColour(Blockly.Blocks.Taimaker.TaiMaQueen);
    this.appendValueInput('angle')
		.setCheck(Number)
		.appendField("舵机角度设置为");
    this.appendDummyInput("")
	    .appendField("度")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setInputsInline(true);
  }
};

Blockly.Blocks.TaiMaQueen_Fan = {
   init: function() {
    this.setColour(Blockly.Blocks.Taimaker.TaiMaQueen);
    this.appendDummyInput("")
	    .appendField("风扇状态")
        .appendField(new Blockly.FieldDropdown([["转动", "1"],["停止", "2"]]), 'state') ;
    this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setInputsInline(true);
  }
};

Blockly.Blocks.TaiMaQueen_Start_Buzzer = {
   init: function() {
    this.setColour(Blockly.Blocks.Taimaker.TaiMaQueen);
    this.appendValueInput('frequency')
		.setCheck(Number)
		.appendField("播放声音 频率为");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setInputsInline(true);
  }
};

Blockly.Blocks.TaiMaQueen_Stop_Buzzer = {
   init: function() {
    this.setColour(Blockly.Blocks.Taimaker.TaiMaQueen);
    this.appendDummyInput("")
	      .appendField("结束声音");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setInputsInline(true);
  }
};

Blockly.Blocks.TaiMaQueen_1602LCD_Show = {
  init: function() {
    this.setColour(Blockly.Blocks.Taimaker.TaiMaQueen);
	this.appendValueInput("text1", String)
        .setCheck(String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("LCD显示 打印第一行\n");
	this.appendValueInput("text2", String)
        .setCheck(String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("打印第二行");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setInputsInline(true);
  }
};

Blockly.Blocks.TaiMaQueen_1602LCD_Clear = {
  init: function() {
    this.setColour(Blockly.Blocks.Taimaker.TaiMaQueen);
    this.appendDummyInput("")
	    .appendField("LCD显示 清屏")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setInputsInline(true);
  }
};
	
Blockly.Blocks.TaiMaQueen_Brake_Light = {
   init: function() {
    this.setColour(Blockly.Blocks.Taimaker.TaiMaQueen);
    this.appendDummyInput("")
	    .appendField("刹车灯")
        .appendField(new Blockly.FieldDropdown([["左", "1"],["右", "2"]]), 'PIN') ;
    this.appendDummyInput("")
	    .appendField("状态为")
        .appendField(new Blockly.FieldDropdown([["亮", "1"],["灭", "2"]]), 'state') ;
    this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setInputsInline(true);
  }
};

Blockly.Blocks.TaiMaQueen_Gray = {
  init: function() {
    this.setColour(Blockly.Blocks.Taimaker.TaiMaQueen);
    this.appendDummyInput("")
	    .appendField("灰度模块 获取")
	    .appendField(new Blockly.FieldDropdown([["1", "1"],["2", "2"],["3", "3"],["4", "4"],["5", "5"]]), "PIN")
	    .appendField("号管脚数值");
	this.setOutput(true, Number);
  }
};

Blockly.Blocks.TaiMaQueen_Fire = {
  init: function() {
    this.setColour(Blockly.Blocks.Taimaker.TaiMaQueen);
    this.appendDummyInput("")
	    .appendField("火焰模块 获取")
	    .appendField(new Blockly.FieldDropdown([["1", "1"],["2", "2"],["3", "3"],["4", "4"],["5", "5"]]), "PIN")
	    .appendField("号管脚数值");
	this.setOutput(true, Number);
  }
};

Blockly.Blocks.TaiMaQueen_Sound = {
   init: function() {
    this.setColour(Blockly.Blocks.Taimaker.TaiMaQueen);
    this.appendDummyInput("")
	      .appendField("获取外界音量");
    this.setOutput(true, Number);
   }
};

Blockly.Blocks.TaiMaQueen_Ultrasonic = {
   init: function() {
    this.setColour(Blockly.Blocks.Taimaker.TaiMaQueen);
    this.appendDummyInput("")
	      .appendField("获取超声波检测到的距离");
    this.setOutput(true, Number);
   }
};

Blockly.Blocks.TaiMaQueen_MPU9250 = {
  init: function() {
    this.setColour(Blockly.Blocks.Taimaker.TaiMaQueen);
    this.appendDummyInput("")
	    .appendField("陀螺仪 获取")
	    .appendField(new Blockly.FieldDropdown([["X轴加速度", "1"],["Y轴加速度", "2"],["Z轴加速度", "3"],["X轴角速度", "4"],["Y轴角速度", "5"],["Z轴角速度", "6"]]), "PIN")
	    .appendField("数值");
	this.setOutput(true, Number);
  }
};

Blockly.Blocks.TaiMaQueen_Self_Locking_Button = {
  init: function() {
    this.setColour(Blockly.Blocks.Taimaker.TaiMaQueen);
    this.appendDummyInput("")
	    .appendField("获取自锁按键状态")
	this.setOutput(true, Number);
  }
};
Blockly.Blocks.TaiMaQueen_Initialize_Gray = {
   init: function() {
    this.setColour(Blockly.Blocks.Taimaker.TaiMaQueen);
    this.appendDummyInput("")
	      .appendField("自动检测灰度并设定阈值");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setInputsInline(true);
  }
};
Blockly.Blocks.TaiMaQueen_Get_Gray_Threshold_value = {
  init: function() {
    this.setColour(Blockly.Blocks.Taimaker.TaiMaQueen);
    this.appendDummyInput("")
	    .appendField("获取")
	    .appendField(new Blockly.FieldDropdown([["1", "1"],["2", "2"],["3", "3"],["4", "4"],["5", "5"]]), "PIN")
	    .appendField("号灰度检测的阈值");
	this.setOutput(true, Number);
  }
};

Blockly.Blocks.Roborave_test = {
   init: function() {
	this.setColour(210);
    this.appendDummyInput("")
	    .appendField("小车")
	this.appendValueInput('distance')
		.setCheck(Number)
		.appendField("前进")
	this.appendDummyInput("")
	    .appendField("毫米");
	this.appendDummyInput("")
	    .appendField("方向")
        .appendField(new Blockly.FieldDropdown([["向左", "-1"],["向右", "1"]]), 'PIN') ;
	this.appendValueInput('angle')
		.setCheck(Number)
		.appendField("角度为");
	this.appendDummyInput("")
	    .appendField("度")
        
    this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setInputsInline(true);
  }
};

//Blockly.Blocks.TaiMaQueen_8_16_Matrix_Show = {
//   init: function() {
//	this.setColour(210);
//    this.appendDummyInput("")
//	    .appendField("点阵屏图案显示")
//	this.appendValueInput('left_Array')
//		.setCheck(Number)
//	this.appendValueInput('right_Array')
//		.setCheck(Number)
 //   this.setPreviousStatement(true);
//    this.setNextStatement(true);
//	this.setInputsInline(true);
//  }
//};

Blockly.Blocks.TaiMaQueen_8_16_Matrix_Show = {
  init: function() {
	this.setColour(Blockly.Blocks.Taimaker.TaiMaco);
    this.appendDummyInput("").appendField("8X16点阵屏 显示").appendField(new Blockly.FieldTextInput("emoji"), "VAR");
	this.appendDummyInput("").appendField("显示前清屏").appendField(new Blockly.FieldCheckbox("TRUE"), "is_Clear_8_16");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a11").appendField(new Blockly.FieldCheckbox("FALSE"), "a21").appendField(new Blockly.FieldCheckbox("FALSE"), "a31").appendField(new Blockly.FieldCheckbox("FALSE"), "a41").appendField(new Blockly.FieldCheckbox("FALSE"), "a51").appendField(new Blockly.FieldCheckbox("FALSE"), "a61").appendField(new Blockly.FieldCheckbox("FALSE"), "a71").appendField(new Blockly.FieldCheckbox("FALSE"), "a81").appendField("|").appendField(new Blockly.FieldCheckbox("FALSE"), "b11").appendField(new Blockly.FieldCheckbox("FALSE"), "b21").appendField(new Blockly.FieldCheckbox("FALSE"), "b31").appendField(new Blockly.FieldCheckbox("FALSE"), "b41").appendField(new Blockly.FieldCheckbox("FALSE"), "b51").appendField(new Blockly.FieldCheckbox("FALSE"), "b61").appendField(new Blockly.FieldCheckbox("FALSE"), "b71").appendField(new Blockly.FieldCheckbox("FALSE"), "b81");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a12").appendField(new Blockly.FieldCheckbox("FALSE"), "a22").appendField(new Blockly.FieldCheckbox("FALSE"), "a32").appendField(new Blockly.FieldCheckbox("FALSE"), "a42").appendField(new Blockly.FieldCheckbox("FALSE"), "a52").appendField(new Blockly.FieldCheckbox("FALSE"), "a62").appendField(new Blockly.FieldCheckbox("FALSE"), "a72").appendField(new Blockly.FieldCheckbox("FALSE"), "a82").appendField("|").appendField(new Blockly.FieldCheckbox("FALSE"), "b12").appendField(new Blockly.FieldCheckbox("FALSE"), "b22").appendField(new Blockly.FieldCheckbox("FALSE"), "b32").appendField(new Blockly.FieldCheckbox("FALSE"), "b42").appendField(new Blockly.FieldCheckbox("FALSE"), "b52").appendField(new Blockly.FieldCheckbox("FALSE"), "b62").appendField(new Blockly.FieldCheckbox("FALSE"), "b72").appendField(new Blockly.FieldCheckbox("FALSE"), "b82");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a13").appendField(new Blockly.FieldCheckbox("FALSE"), "a23").appendField(new Blockly.FieldCheckbox("FALSE"), "a33").appendField(new Blockly.FieldCheckbox("FALSE"), "a43").appendField(new Blockly.FieldCheckbox("FALSE"), "a53").appendField(new Blockly.FieldCheckbox("FALSE"), "a63").appendField(new Blockly.FieldCheckbox("FALSE"), "a73").appendField(new Blockly.FieldCheckbox("FALSE"), "a83").appendField("|").appendField(new Blockly.FieldCheckbox("FALSE"), "b13").appendField(new Blockly.FieldCheckbox("FALSE"), "b23").appendField(new Blockly.FieldCheckbox("FALSE"), "b33").appendField(new Blockly.FieldCheckbox("FALSE"), "b43").appendField(new Blockly.FieldCheckbox("FALSE"), "b53").appendField(new Blockly.FieldCheckbox("FALSE"), "b63").appendField(new Blockly.FieldCheckbox("FALSE"), "b73").appendField(new Blockly.FieldCheckbox("FALSE"), "b83");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a14").appendField(new Blockly.FieldCheckbox("FALSE"), "a24").appendField(new Blockly.FieldCheckbox("FALSE"), "a34").appendField(new Blockly.FieldCheckbox("FALSE"), "a44").appendField(new Blockly.FieldCheckbox("FALSE"), "a54").appendField(new Blockly.FieldCheckbox("FALSE"), "a64").appendField(new Blockly.FieldCheckbox("FALSE"), "a74").appendField(new Blockly.FieldCheckbox("FALSE"), "a84").appendField("|").appendField(new Blockly.FieldCheckbox("FALSE"), "b14").appendField(new Blockly.FieldCheckbox("FALSE"), "b24").appendField(new Blockly.FieldCheckbox("FALSE"), "b34").appendField(new Blockly.FieldCheckbox("FALSE"), "b44").appendField(new Blockly.FieldCheckbox("FALSE"), "b54").appendField(new Blockly.FieldCheckbox("FALSE"), "b64").appendField(new Blockly.FieldCheckbox("FALSE"), "b74").appendField(new Blockly.FieldCheckbox("FALSE"), "b84");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a15").appendField(new Blockly.FieldCheckbox("FALSE"), "a25").appendField(new Blockly.FieldCheckbox("FALSE"), "a35").appendField(new Blockly.FieldCheckbox("FALSE"), "a45").appendField(new Blockly.FieldCheckbox("FALSE"), "a55").appendField(new Blockly.FieldCheckbox("FALSE"), "a65").appendField(new Blockly.FieldCheckbox("FALSE"), "a75").appendField(new Blockly.FieldCheckbox("FALSE"), "a85").appendField("|").appendField(new Blockly.FieldCheckbox("FALSE"), "b15").appendField(new Blockly.FieldCheckbox("FALSE"), "b25").appendField(new Blockly.FieldCheckbox("FALSE"), "b35").appendField(new Blockly.FieldCheckbox("FALSE"), "b45").appendField(new Blockly.FieldCheckbox("FALSE"), "b55").appendField(new Blockly.FieldCheckbox("FALSE"), "b65").appendField(new Blockly.FieldCheckbox("FALSE"), "b75").appendField(new Blockly.FieldCheckbox("FALSE"), "b85");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a16").appendField(new Blockly.FieldCheckbox("FALSE"), "a26").appendField(new Blockly.FieldCheckbox("FALSE"), "a36").appendField(new Blockly.FieldCheckbox("FALSE"), "a46").appendField(new Blockly.FieldCheckbox("FALSE"), "a56").appendField(new Blockly.FieldCheckbox("FALSE"), "a66").appendField(new Blockly.FieldCheckbox("FALSE"), "a76").appendField(new Blockly.FieldCheckbox("FALSE"), "a86").appendField("|").appendField(new Blockly.FieldCheckbox("FALSE"), "b16").appendField(new Blockly.FieldCheckbox("FALSE"), "b26").appendField(new Blockly.FieldCheckbox("FALSE"), "b36").appendField(new Blockly.FieldCheckbox("FALSE"), "b46").appendField(new Blockly.FieldCheckbox("FALSE"), "b56").appendField(new Blockly.FieldCheckbox("FALSE"), "b66").appendField(new Blockly.FieldCheckbox("FALSE"), "b76").appendField(new Blockly.FieldCheckbox("FALSE"), "b86");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a17").appendField(new Blockly.FieldCheckbox("FALSE"), "a27").appendField(new Blockly.FieldCheckbox("FALSE"), "a37").appendField(new Blockly.FieldCheckbox("FALSE"), "a47").appendField(new Blockly.FieldCheckbox("FALSE"), "a57").appendField(new Blockly.FieldCheckbox("FALSE"), "a67").appendField(new Blockly.FieldCheckbox("FALSE"), "a77").appendField(new Blockly.FieldCheckbox("FALSE"), "a87").appendField("|").appendField(new Blockly.FieldCheckbox("FALSE"), "b17").appendField(new Blockly.FieldCheckbox("FALSE"), "b27").appendField(new Blockly.FieldCheckbox("FALSE"), "b37").appendField(new Blockly.FieldCheckbox("FALSE"), "b47").appendField(new Blockly.FieldCheckbox("FALSE"), "b57").appendField(new Blockly.FieldCheckbox("FALSE"), "b67").appendField(new Blockly.FieldCheckbox("FALSE"), "b77").appendField(new Blockly.FieldCheckbox("FALSE"), "b87");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a18").appendField(new Blockly.FieldCheckbox("FALSE"), "a28").appendField(new Blockly.FieldCheckbox("FALSE"), "a38").appendField(new Blockly.FieldCheckbox("FALSE"), "a48").appendField(new Blockly.FieldCheckbox("FALSE"), "a58").appendField(new Blockly.FieldCheckbox("FALSE"), "a68").appendField(new Blockly.FieldCheckbox("FALSE"), "a78").appendField(new Blockly.FieldCheckbox("FALSE"), "a88").appendField("|").appendField(new Blockly.FieldCheckbox("FALSE"), "b18").appendField(new Blockly.FieldCheckbox("FALSE"), "b28").appendField(new Blockly.FieldCheckbox("FALSE"), "b38").appendField(new Blockly.FieldCheckbox("FALSE"), "b48").appendField(new Blockly.FieldCheckbox("FALSE"), "b58").appendField(new Blockly.FieldCheckbox("FALSE"), "b68").appendField(new Blockly.FieldCheckbox("FALSE"), "b78").appendField(new Blockly.FieldCheckbox("FALSE"), "b88");
    
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip();
  }
};

Blockly.Blocks.TaiMaQueen_8_16_Matrix_Clear = {
  init: function() {
    this.setColour(Blockly.Blocks.Taimaker.TaiMaco);
    this.appendDummyInput("")
	    .appendField("8X16点阵屏 清屏")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setInputsInline(true);
  }
};



Blockly.Blocks.TaiMaQueen_8_16_Matrix_Char_Show = {
  init: function() {
    this.setColour(Blockly.Blocks.Taimaker.TaiMaco);
    this.appendValueInput("char1",String)
		.setCheck(String)
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField("8X16点阵屏 显示");
    this.appendValueInput("char2",String)
		.setCheck(String)
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setInputsInline(true);
  }
};


Blockly.Blocks.TaiMaQueen_Temperature_Humidity = {
  init: function() {
    this.setColour(Blockly.Blocks.Taimaker.TaiMaQueen_Expend);
    this.appendDummyInput("")
	    .appendField("温湿度模块 获取")
	    .appendField(new Blockly.FieldDropdown([["温度", "1"],["湿度", "2"]]), "state")
	this.setOutput(true, Number);
  }
};

Blockly.Blocks.TaiMaQueen_Smoke = {
  init: function() {
    this.setColour(Blockly.Blocks.Taimaker.TaiMaQueen_Expend);
    this.appendDummyInput("")
	    .appendField("获取烟雾模块信息")
	this.setOutput(true, Number);
  }
};
Blockly.Blocks.TaiMaQueen_Human_Body_Infrared = {
  init: function() {
    this.setColour(Blockly.Blocks.Taimaker.TaiMaQueen_Expend);
    this.appendDummyInput("")
	    .appendField("获取人体红外模块信息")
	this.setOutput(true, Number);
  }
};

Blockly.Blocks.TaiMaQueen_Infrared = {
  init: function() {
    this.setColour(Blockly.Blocks.Taimaker.TaiMaQueen_Expend);
    this.appendDummyInput("")
	    .appendField("红外测距模块 获取")
	    .appendField(new Blockly.FieldDropdown([["左侧", "1"],["右侧", "2"]]), "state")
	    .appendField("数值")
	this.setOutput(true, Number);
  }
};


Blockly.Blocks.TaiMaQueen_Turn_Light = {
	init: function() {
    this.setColour(Blockly.Blocks.Taimaker.TaiMaQueen_Expend);
    this.appendDummyInput("")
        .appendField("设置")
        .appendField(new Blockly.FieldDropdown([["左侧", "1"],["右侧", "2"]]), "PIN")
    this.appendDummyInput("")
        .appendField("转向灯");
	this.appendValueInput("R", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("R");
	this.appendValueInput("G", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("G");
	this.appendValueInput("B", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("B");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
  }
};


Blockly.Blocks.TaiMaQueen_Photoresistance = {
  init: function() {
    this.setColour(Blockly.Blocks.Taimaker.TaiMaQueen_Expend);
    this.appendDummyInput("")
	    .appendField("光敏模块 获取")
	    .appendField(new Blockly.FieldDropdown([["左侧", "1"],["右侧", "2"]]), "state")
	    .appendField("数值")
	this.setOutput(true, Number);
  }
};

Blockly.Blocks.TaiMaQueen_Speak = {
   init: function() {
    this.setColour(Blockly.Blocks.Taimaker.TaiMaQueen_Expend);
    this.appendDummyInput("")
	    .appendField("语音模块")
    this.appendValueInput('sound_num')
		.setCheck(Number)
		.appendField("音频号");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setInputsInline(true);
  }
};

Blockly.Blocks.TaiMaco_Movement = {
   init: function() {
    this.setColour(Blockly.Blocks.Taimaker.TaiMaco);
    this.appendValueInput('left_Speed',Number)
        .appendField("左轮速度(-100到100)")
		.setCheck(Number);
    this.appendValueInput('right_Speed',Number)
        .appendField("右轮速度(-100到100)")
		.setCheck(Number);
    this.appendValueInput('movement_Time',Number)
        .appendField(new Blockly.FieldCheckbox("TRUE"), "MT")
        .appendField("持续时间")
		.setCheck(Number)
        .appendField("(秒)");
    this.appendDummyInput("")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "is_Light")
        .appendField("灯光同步")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setInputsInline(false);
  }
};

Blockly.Blocks.TaiMaco_Set_PWM = {
   init: function() {
    this.setColour(Blockly.Blocks.Taimaker.TaiMaco);
    this.appendDummyInput("")
	    .appendField("设置")
        .appendField(new Blockly.FieldDropdown([["左轮", "1"], ["右轮", "2"]]), 'PIN') ;
    this.appendValueInput('speed')
		.setCheck(Number)
		.appendField("速度(-100到100)");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setInputsInline(true);
  }
};

var TONE_NOTES=[["低1", "261"],["低2", "293"],["低3", "329"],["低4", "349"],["低5", "392"],["低6", "440"],["低7", "493"],
           ["中1", "523"],["中2", "587"],["中3", "659"],["中4", "698"],["中5", "784"],["中6", "880"],["中7", "987"],
           ["高1", "1046"],["高2", "1174"],["高3", "1318"],["高4", "1396.8"],["高5", "1568"],["高6", "1760"],["高7", "1975"]];

Blockly.Blocks.TaiMaco_Start_Notes = {
   init: function() {
    this.setColour(Blockly.Blocks.Taimaker.TaiMaco);
    this.appendDummyInput("")
	    .appendField("蜂鸣器发声")
        .appendField(new Blockly.FieldDropdown(TONE_NOTES), 'STATE') ;
    this.appendValueInput('time')
		.setCheck(Number)
		.appendField("持续");
    this.appendDummyInput("")
	    .appendField("秒");
	this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setInputsInline(true);
  }
};
Blockly.Blocks.TaiMaco_Start_Notes_Beats = {
   init: function() {
    this.setColour(Blockly.Blocks.Taimaker.TaiMaco);
    this.appendDummyInput("")
	    .appendField("蜂鸣器发声")
        .appendField(new Blockly.FieldDropdown(TONE_NOTES), 'STATE') ;
    this.appendDummyInput("")
	    .appendField("节拍为")
		.appendField(new Blockly.FieldDropdown([["1/4音符", "2"],["1/8音符", "1"],["1/2音符", "4"],["全音符", "8"]]), "note");
	this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setInputsInline(true);
  }
};

Blockly.Blocks.TaiMaco_Start_Buzzer = {
   init: function() {
    this.setColour(Blockly.Blocks.Taimaker.TaiMaco);
    this.appendValueInput('frequency')
		.setCheck(Number)
		.appendField("播放声音 频率为");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setInputsInline(true);
  }
};

Blockly.Blocks.TaiMaco_Stop_Buzzer = {
   init: function() {
    this.setColour(Blockly.Blocks.Taimaker.TaiMaco);
    this.appendDummyInput("")
	      .appendField("结束声音");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setInputsInline(true);
  }
};


Blockly.Blocks.TaiMaco_Sound = {
   init: function() {
    this.setColour(Blockly.Blocks.Taimaker.TaiMaco);
    this.appendDummyInput("")
	    .appendField("播放音频")
    this.appendValueInput('sound_num')
		.setCheck(Number)
		.appendField("音频号");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setInputsInline(true);
  }
};



Blockly.Blocks.TaiMaco_Light_Control = {
    init: function () {
        this.setColour(Blockly.Blocks.Taimaker.TaiMaco);
		this.appendDummyInput("")
			.appendField("设置")
			.appendField(new Blockly.FieldDropdown([["左转向灯", "1"],["右转向灯", "2"],["左刹车灯", "3"],["右刹车灯", "4"],["车顶灯", "5"]]), "PIN")
        this.appendDummyInput("")
			.appendField("颜色")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldColour("#ff0000"), "RGB_LED_COLOR");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};


Blockly.Blocks.TaiMaco_Turn_Light = {
  init: function() {
    this.setColour(Blockly.Blocks.Taimaker.TaiMaco);
    this.appendDummyInput("")
        .appendField("设置")
        .appendField(new Blockly.FieldDropdown([["左转向灯", "1"],["右转向灯", "2"],["左刹车灯", "3"],["右刹车灯", "4"],["车顶灯", "5"]]), "PIN")
    this.appendDummyInput("")
        .appendField("颜色");
	this.appendValueInput("R", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("R");
	this.appendValueInput("G", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("G");
	this.appendValueInput("B", Number)
        .setCheck(Number)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("B");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setInputsInline(true);
  }
};


Blockly.Blocks.TaiMaco_Infrared = {
  init: function() {
    this.setColour(Blockly.Blocks.Taimaker.TaiMaco);
    this.appendDummyInput("")
	    .appendField("获取")
	    .appendField(new Blockly.FieldDropdown([["左侧", "1"],["右侧", "2"]]), "state")
	    .appendField("红外测距传感器返回值(0到1023)")
	this.setOutput(true, Number);
  }
};


Blockly.Blocks.TaiMaco_Gray = {
  init: function() {
    this.setColour(Blockly.Blocks.Taimaker.TaiMaco);
    this.appendDummyInput("")
	    .appendField("获取左起第")
	    .appendField(new Blockly.FieldDropdown([["1", "1"],["2", "2"],["3", "3"],["4", "4"]]), "PIN")
	    .appendField("个灰度传感器返回值(0到1023)");
	this.setOutput(true, Number);
  }
};


Blockly.Blocks.TaiMaco_Ultrasonic = { 
   init: function() {
    this.setColour(Blockly.Blocks.Taimaker.TaiMaco);
    this.appendDummyInput("")
	      .appendField("获取超声测距传感器返回值(单位厘米)");
    this.setOutput(true, Number);
   }
};


Blockly.Blocks.TaiMaco_Self_Locking_Button = {
  init: function() {
    this.setColour(Blockly.Blocks.Taimaker.TaiMaco);
    this.appendDummyInput("")
	    .appendField("获取自锁按键状态");
	this.setOutput(true, Number);
  }
};


//红外接收模块
Blockly.Blocks.TaiMaco_IR_Control = {
	init: function() {
		this.setColour(Blockly.Blocks.Taimaker.TaiMaco);
		this.appendDummyInput("")
			.appendField("接收到红外信号值:")
			.appendField(new Blockly.FieldTextInput('IR_value'), 'VAR');
		this.appendStatementInput('DO')
			.appendField('');
		this.setPreviousStatement(true);
		this.setNextStatement(true);
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

Blockly.Blocks.TaiMaco_Initialize_Gray = {
   init: function() {
    this.setColour(Blockly.Blocks.Taimaker.TaiMaco);
    this.appendDummyInput("")
	      .appendField("设定灰度传感器阈值");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setInputsInline(true);
  }
};

Blockly.Blocks.TaiMaco_Get_Gray_Threshold_value = {
  init: function() {
    this.setColour(Blockly.Blocks.Taimaker.TaiMaco);
    this.appendDummyInput("")
	    .appendField("获取左起第")
	    .appendField(new Blockly.FieldDropdown([["1", "1"],["2", "2"],["3", "3"],["4", "4"]]), "PIN")
	    .appendField("个灰度传感器检测的阈值");
	this.setOutput(true, Number);
  }
};

Blockly.Blocks.TaiMaco_Gray_Crossing = {
   init: function() {
    this.setColour(Blockly.Blocks.Taimaker.TaiMaco);
	this.appendValueInput("speed", Number)
	    .appendField("以")
        .setCheck(Number);
    this.appendDummyInput("")
	    .appendField("速度(0到100)巡线找到并穿过")
	    .appendField(new Blockly.FieldDropdown([["左侧", "1"],["右侧", "2"]]), "state")
	    .appendField("路口后停止");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setInputsInline(true);
  }
};


Blockly.Blocks.TaiMaco_Gray_Time = {
   init: function() {
    this.setColour(Blockly.Blocks.Taimaker.TaiMaco);
	this.appendValueInput("speed", Number)
	    .appendField("以")
        .setCheck(Number);
	this.appendValueInput("Time", Number)
	    .appendField("速度(0到100)巡线")
        .setCheck(Number);
    this.appendDummyInput("")
	      .appendField("秒后停止");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setInputsInline(true);
  }
};

Blockly.Blocks.TaiMaco_Gray_Turn = {
   init: function() {
    this.setColour(Blockly.Blocks.Taimaker.TaiMaco);
	this.appendValueInput("speed_L", Number)
	    .appendField("以左轮速度")
        .setCheck(Number);
	this.appendValueInput("speed_R", Number)
	    .appendField("右轮速度")
        .setCheck(Number);
    this.appendDummyInput("")
	    .appendField("(-100到100)转弯，转到下一条线后停止");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setInputsInline(true);
  }
};

Blockly.Blocks.TaiMaco_Gray_Condition = {
   init: function() {
    this.setColour(Blockly.Blocks.Taimaker.TaiMaco);
	this.appendValueInput("speed", Number)
	    .appendField("以")
        .setCheck(Number);
	this.appendValueInput('BOOL')
        .setCheck([Number,Boolean])
        .appendField("速度(0到100)巡线直到满足条件");
    this.appendDummyInput("")
	      .appendField("后停止");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setInputsInline(true);
  }
};


Blockly.Blocks.Programme_Segment_Show = {
  init: function() {
    this.setColour(Blockly.Blocks.Taimaker.Programme);
    this.appendDummyInput("")
	    .appendField("数码管 I2C地址为")
	    .appendField(new Blockly.FieldDropdown([["000", "1"],["001", "2"],["010", "3"],["011", "4"],["100", "5"],["101", "6"],["110", "7"],["111", "8"],]), "PIN");
	this.appendValueInput("text1", String)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("显示");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setInputsInline(true);
  }
};

Blockly.Blocks.Programme_Servo = {
   init: function() {
    this.setColour(Blockly.Blocks.Taimaker.Programme);
    this.appendDummyInput("")
	    .appendField("舵机 管脚")
	    .appendField(new Blockly.FieldDropdown([["0", "0"],["1", "1"],["2", "2"],["3", "3"],["4", "4"],["5", "5"],["6", "6"],["7", "7"],["8", "8"],["9", "9"],["10", "10"],["11", "11"],["12", "12"],["13", "13"],["A0", "A0"],["A1", "A1"],["A2", "A2"],["A3", "A3"],["A4", "A4"],["A5", "A5"],]), "PIN");
    this.appendValueInput('angle')
		.setCheck(Number)
		.appendField("角度(0到270)设置为");
    this.appendDummyInput("")
	    .appendField("度")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setInputsInline(true);
  }
};

Blockly.Blocks.Programme_TicoServo = {
   init: function() {
    this.setColour(Blockly.Blocks.Taimaker.Programme);
    this.appendValueInput('angle')
		.setCheck(Number)
		.appendField("舵机角度设置为");
    this.appendDummyInput("")
	    .appendField("度")
    this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setInputsInline(true);
  }
};

Blockly.Blocks.TaiMaco_PS2_Baud_Rate = {
  init: function() {
    this.setColour(Blockly.Blocks.Taimaker.TaiMaco);
    this.appendDummyInput("")
	    .appendField("设定PS2手柄 波特率为")
		.appendField("#")
	    .appendField(new Blockly.FieldDropdown([["57600", "7"],["38400", "6"],["28800", "5"],["19200", "4"],["14400", "3"],["9600", "2"],["4800", "1"]]), "addr");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setInputsInline(true);
  }
};

Blockly.Blocks.TaiMaco_PS2_Control = {
  init: function() {
    this.setColour(Blockly.Blocks.Taimaker.TaiMaco);
    this.appendDummyInput("")
	    .appendField("获取PS2手柄数据 波特率为")
	    .appendField(new Blockly.FieldDropdown([["57600", "57600"],["38400", "38400"],["28800", "28800"],["19200", "19200"],["14400", "14400"],["9600", "9600"],["4800", "4800"]]), "addr");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
	this.setInputsInline(true);
  }
};

Blockly.Blocks.TaiMaco_PS2_Control_Remote_Sensing_CMD = {
  init: function() {
    this.setColour(Blockly.Blocks.Taimaker.TaiMaco);
    this.appendDummyInput("")
	      .appendField("获取PS2手柄")
		  .appendField("#")
	      .appendField(new Blockly.FieldDropdown([["左摇杆X轴", "1"],["左摇杆Y轴", "2"],["右摇杆X轴", "3"],["右摇杆Y轴", "4"]]), "PORT")
	      .appendField("数据");
    this.setOutput(true, Number);
  }
};
Blockly.Blocks.TaiMaco_PS2_Control_Button_CMD = {
  init: function() {
    this.setColour(Blockly.Blocks.Taimaker.TaiMaco);
    this.appendDummyInput("")
	      .appendField("获取PS2手柄按键数据");
    this.setOutput(true, Number);
  }
};

Blockly.Blocks.Programme_Sign_Recognition = {
  init: function() {
    this.setColour(Blockly.Blocks.Taimaker.Programme);
    this.appendDummyInput("")
	      .appendField("路标识别")
		  .appendField("#")
	      .appendField(new Blockly.FieldDropdown([["数字1", "1"],["数字2", "2"],["数字3", "3"],["左转标志", "7"],["右转标志", "8"],["自定义图像1", "4"],["自定义图像2", "5"],["自定义图像3", "6"]]), "PORT");
    this.setOutput(true, Number);
  }
};

Blockly.Blocks.Programme_Face_Recognition = {
  init: function() {
    this.setColour(Blockly.Blocks.Taimaker.Programme);
    this.appendDummyInput("")
	      .appendField("人脸识别")
	this.setOutput(true, Number);
  }
};

Blockly.Blocks.Programme_Color_Sensor = {
  init: function() {
    this.setColour(Blockly.Blocks.Taimaker.Programme);
    this.appendDummyInput("")
	      .appendField("颜色传感器获取")
		  .appendField("#")
	      .appendField(new Blockly.FieldDropdown([["红色", "1"],["绿色", "2"],["蓝色", "3"]]), "PORT")
		  .appendField("数值");
    this.setOutput(true, Number);
  }
};


Blockly.Blocks.Programme_8_8_Matrix_Show = {
  init: function() {
	this.setColour(Blockly.Blocks.Taimaker.Programme);
    this.appendDummyInput("").appendField("8X8点阵屏 显示").appendField(new Blockly.FieldTextInput("emoji"), "VAR");
	this.appendDummyInput("").appendField("显示前清屏").appendField(new Blockly.FieldCheckbox("TRUE"), "is_Clear_8_16")
		.appendField("地址为")
	    .appendField(new Blockly.FieldDropdown([["000", "0"],["001", "1"],["010", "2"],["011", "3"],["100", "4"],["101", "5"],["110", "6"],["111", "7"]]), "PORT");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a12").appendField(new Blockly.FieldCheckbox("FALSE"), "a22").appendField(new Blockly.FieldCheckbox("FALSE"), "a32").appendField(new Blockly.FieldCheckbox("FALSE"), "a42").appendField(new Blockly.FieldCheckbox("FALSE"), "a52").appendField(new Blockly.FieldCheckbox("FALSE"), "a62").appendField(new Blockly.FieldCheckbox("FALSE"), "a72").appendField(new Blockly.FieldCheckbox("FALSE"), "a82");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a13").appendField(new Blockly.FieldCheckbox("FALSE"), "a23").appendField(new Blockly.FieldCheckbox("FALSE"), "a33").appendField(new Blockly.FieldCheckbox("FALSE"), "a43").appendField(new Blockly.FieldCheckbox("FALSE"), "a53").appendField(new Blockly.FieldCheckbox("FALSE"), "a63").appendField(new Blockly.FieldCheckbox("FALSE"), "a73").appendField(new Blockly.FieldCheckbox("FALSE"), "a83");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a14").appendField(new Blockly.FieldCheckbox("FALSE"), "a24").appendField(new Blockly.FieldCheckbox("FALSE"), "a34").appendField(new Blockly.FieldCheckbox("FALSE"), "a44").appendField(new Blockly.FieldCheckbox("FALSE"), "a54").appendField(new Blockly.FieldCheckbox("FALSE"), "a64").appendField(new Blockly.FieldCheckbox("FALSE"), "a74").appendField(new Blockly.FieldCheckbox("FALSE"), "a84");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a15").appendField(new Blockly.FieldCheckbox("FALSE"), "a25").appendField(new Blockly.FieldCheckbox("FALSE"), "a35").appendField(new Blockly.FieldCheckbox("FALSE"), "a45").appendField(new Blockly.FieldCheckbox("FALSE"), "a55").appendField(new Blockly.FieldCheckbox("FALSE"), "a65").appendField(new Blockly.FieldCheckbox("FALSE"), "a75").appendField(new Blockly.FieldCheckbox("FALSE"), "a85");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a16").appendField(new Blockly.FieldCheckbox("FALSE"), "a26").appendField(new Blockly.FieldCheckbox("FALSE"), "a36").appendField(new Blockly.FieldCheckbox("FALSE"), "a46").appendField(new Blockly.FieldCheckbox("FALSE"), "a56").appendField(new Blockly.FieldCheckbox("FALSE"), "a66").appendField(new Blockly.FieldCheckbox("FALSE"), "a76").appendField(new Blockly.FieldCheckbox("FALSE"), "a86");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a17").appendField(new Blockly.FieldCheckbox("FALSE"), "a27").appendField(new Blockly.FieldCheckbox("FALSE"), "a37").appendField(new Blockly.FieldCheckbox("FALSE"), "a47").appendField(new Blockly.FieldCheckbox("FALSE"), "a57").appendField(new Blockly.FieldCheckbox("FALSE"), "a67").appendField(new Blockly.FieldCheckbox("FALSE"), "a77").appendField(new Blockly.FieldCheckbox("FALSE"), "a87");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a18").appendField(new Blockly.FieldCheckbox("FALSE"), "a28").appendField(new Blockly.FieldCheckbox("FALSE"), "a38").appendField(new Blockly.FieldCheckbox("FALSE"), "a48").appendField(new Blockly.FieldCheckbox("FALSE"), "a58").appendField(new Blockly.FieldCheckbox("FALSE"), "a68").appendField(new Blockly.FieldCheckbox("FALSE"), "a78").appendField(new Blockly.FieldCheckbox("FALSE"), "a88");
    this.appendDummyInput("").appendField(new Blockly.FieldCheckbox("FALSE"), "a11").appendField(new Blockly.FieldCheckbox("FALSE"), "a21").appendField(new Blockly.FieldCheckbox("FALSE"), "a31").appendField(new Blockly.FieldCheckbox("FALSE"), "a41").appendField(new Blockly.FieldCheckbox("FALSE"), "a51").appendField(new Blockly.FieldCheckbox("FALSE"), "a61").appendField(new Blockly.FieldCheckbox("FALSE"), "a71").appendField(new Blockly.FieldCheckbox("FALSE"), "a81");
    
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setTooltip();
  }
};
