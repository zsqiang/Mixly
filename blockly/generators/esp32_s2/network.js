'use strict';

goog.provide('Blockly.Python.network');
goog.require('Blockly.Python');

Blockly.Python.iot_wifi_connect = function(block) {
  Blockly.Python.definitions_['import_mixgoce_do_connect'] = "from mixgoce import do_connect";  
  var username =  Blockly.Python.valueToCode(this, 'WIFINAME', Blockly.Python.ORDER_ATOMIC) ;
  var password =  Blockly.Python.valueToCode(this, 'PASSWORD', Blockly.Python.ORDER_ATOMIC) ; 
  var code='do_connect(' + username + ','  + password + ')\n';
  return code;
};