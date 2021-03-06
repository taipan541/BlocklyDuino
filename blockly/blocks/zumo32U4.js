/* Generates code in Blocklyduino environment for use with Pololu Zumo 32U4 mini-sumo robot

To use Zumo 32U4 blocks in Blocklyduino you need 4 things:
1) Blocklyduino installed on your local computer (see https://github.com/BlocklyDuino/BlocklyDuino)
2) this zumo32U4.js file in Blocklyduino\blockly\blocks
3) another zumo32U4.js file (included in this repository) for building code in Blocklyduino\blockly\generators
4) add the following to the end of index.html file in Blocklyduino\blockly\apps\blocklyduino\
	<category name="Zumo">
           <block type="output_leftzmotor"></block>
           <block type="output_rightzmotor"></block>
           <block type="output_bothzmotor"></block>
           <block type="zprox_sense"></block>
		   <block type="read_prox_sense"></block>
		   <block type="line_sense"></block>
		   <block type="read_line_sense"></block>
		   <block type="battery_milivolts"></block>
           <block type="button_a"></block>
           <block type="button_b"></block>
           <block type="button_c"></block>
           <block type="led_red"></block>
           <block type="led_yellow"></block>
           <block type="led_green"></block>
           <block type="lcd_clear"></block>
           <block type="lcd_string"></block>
           <block type="lcd_number"></block>
           <block type="buzzer_play"></block>
           <block type="buzzer_stop"></block>
    </category>

Original Author jwill4
Extension Author taipan541 */

/* Credit to Fred Lin for developing the original Blocklyduino code
https://github.com/BlocklyDuino/BlocklyDuino */

'use strict';

//To support syntax defined in http://arduino.cc/en/Reference/HomePage

goog.provide('Blockly.Blocks.zumo32U4');

goog.require('Blockly.Blocks');

Blockly.Blocks['output_leftzmotor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Zumo Left Motor")
        .appendField(new Blockly.FieldDropdown([["Forward", "FORWARD"], ["Backward", "BACKWARD"]]), "Direction");
    this.appendValueInput("SPEED")
        .setCheck(null)
        .appendField("Speed");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
    this.setTooltip('Set left motor speed (0-400) and direction');
    this.setHelpUrl('https://pololu.github.io/zumo-32u4-arduino-library/class_zumo32_u4_motors.html');
  }
};

Blockly.Blocks['output_rightzmotor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Zumo Right Motor")
        .appendField(new Blockly.FieldDropdown([["Forward", "FORWARD"], ["Backward", "BACKWARD"]]), "Direction");
    this.appendValueInput("SPEED")
        .setCheck("Number")
        .appendField("Speed");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(30);
    this.setTooltip('Set left motor speed (0-400) and direction');
    this.setHelpUrl('https://pololu.github.io/zumo-32u4-arduino-library/class_zumo32_u4_motors.html');
  }
};
/* Edit both motors block here:
https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#9gd7hq
*/
Blockly.Blocks['output_bothzmotor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Zumo Both Motors");
    this.appendDummyInput()
        .appendField("Left:")
        .appendField(new Blockly.FieldDropdown([["Forward", "FORWARD"], ["Backward", "BACKWARD"]]), "Direction_L");
    this.appendValueInput("SPEED_L")
        .setCheck("Number")
        .appendField("Speed");
    this.appendDummyInput()
        .appendField("Right:")
        .appendField(new Blockly.FieldDropdown([["Forward", "FORWARD"], ["Backward", "BACKWARD"]]), "Direction_R");
    this.appendValueInput("SPEED_R")
        .setCheck("Number")
        .appendField("Speed");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
    this.setTooltip('');
    this.setHelpUrl('https://pololu.github.io/zumo-32u4-arduino-library/class_zumo32_u4_motors.html');
  }
};

/* Edit Proximity sensor block here:
https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#v7hiz7
*/
Blockly.Blocks['zprox_sense'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Zumo Proximity Sensor");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["Front_Left", "FRONT_LEFT"], ["Front_Right", "FRONT_RIGHT"], ["Side_Left", "SIDE_LEFT"], ["Side_Right", "SIDE_RIGHT"]]), "SENSOR");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(10);
    this.setTooltip('returns a reflected IR brightness level with front IR LEDS on: 4(low), 15, 32, 55, 85, 120(hi).');
    this.setHelpUrl('https://pololu.github.io/zumo-32u4-arduino-library/class_zumo32_u4_proximity_sensors.html');
  }
};
/* Edit read proximity sensor block here:
https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#9zbeff
*/
Blockly.Blocks['read_prox_sense'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Read Zumo Proximity Sensors");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(10);
    this.setTooltip('');
    this.setHelpUrl('https://pololu.github.io/zumo-32u4-arduino-library/class_zumo32_u4_proximity_sensors.html');
  }
};
/* Edit Line sensor block here:
https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#to34qt
*/
Blockly.Blocks['line_sense'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Zumo Line Sensor");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["Sensor_0", "SENSOR_0"], ["Sensor_1", "SENSOR_1"], ["Sensor_2", "SENSOR_2"], ["Sensor_3", "SENSOR_3"], ["Sensor_4", "SENSOR_4"]]), "SENSOR");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(15);
    this.setTooltip('');
    this.setHelpUrl('https://pololu.github.io/zumo-32u4-arduino-library/class_zumo32_u4_line_sensors.html');
  }
};
/* Edit Line sensor block here:
https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#kfyiky
*/
Blockly.Blocks['read_line_sense'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Read Zumo Line Sensors");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(15);
    this.setTooltip('');
    this.setHelpUrl('https://pololu.github.io/zumo-32u4-arduino-library/class_zumo32_u4_line_sensors.html');
  }
};
/* Edit Button block here:
https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#2wx7jd
*/
Blockly.Blocks['button_a'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Button A");
    this.setOutput(true, "Boolean");
    this.setColour(10);
    this.setTooltip('returns a true or false');
    this.setHelpUrl('https://pololu.github.io/zumo-32u4-arduino-library/class_zumo32_u4_button_a.html');
  }
};
Blockly.Blocks['button_b'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Button B");
    this.setOutput(true, "Boolean");
    this.setColour(10);
    this.setTooltip('returns a true or false');
    this.setHelpUrl('https://pololu.github.io/zumo-32u4-arduino-library/class_zumo32_u4_button_b.html');
  }
};
Blockly.Blocks['button_c'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Button C");
    this.setOutput(true, "Boolean");
    this.setColour(10);
    this.setTooltip('');
    this.setHelpUrl('https://pololu.github.io/zumo-32u4-arduino-library/class_zumo32_u4_button_c.html');
  }
};

/* Edit LED block here:
https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#owzhug
*/
Blockly.Blocks['led_red'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Red LED");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["On", "1"], ["Off", "0"]]), "status");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('https://pololu.github.io/zumo-32u4-arduino-library/_zumo32_u4_8h.html#ae6ec5117b26ffaaa1b81c8c8b34426e1');
  }
};

Blockly.Blocks['led_yellow'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Yellow LED");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["On", "1"], ["Off", "0"]]), "status");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('https://pololu.github.io/zumo-32u4-arduino-library/_zumo32_u4_8h.html#a7528cb14b314ccde63c94049402d01c6');
  }
};
Blockly.Blocks['led_green'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Green LED");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["On", "1"], ["Off", "0"]]), "status");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('https://pololu.github.io/zumo-32u4-arduino-library/_zumo32_u4_8h.html#a22e68694b618fe149ed42d76e96597ca');
  }
};
Blockly.Blocks['lcd_clear'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("LCD clear");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(10);
    this.setTooltip('returns a true or false');
    this.setHelpUrl('https://pololu.github.io/zumo-32u4-arduino-library/class_zumo32_u4_l_c_d.html');
  }
};
/* Edit LCD string block here: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#a7yndq
*/
Blockly.Blocks['lcd_string'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("LCD string  \"")
        .appendField(new Blockly.FieldTextInput("Hello"), "LCD_STRING")
        .appendField("\"");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(10);
    this.setTooltip('prints string to LCD screen');
    this.setHelpUrl('https://pololu.github.io/zumo-32u4-arduino-library/class_zumo32_u4_l_c_d.html');
  }
};

Blockly.Blocks['lcd_number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("LCD number");
    this.appendValueInput("lcd_number")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(10);
    this.setTooltip('prints number to LCD screen');
    this.setHelpUrl('https://pololu.github.io/zumo-32u4-arduino-library/class_zumo32_u4_l_c_d.html');
  }
};
/* Edit LCD string block here: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#mkpfvz
*/
Blockly.Blocks['lcd_string_location'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("LCD  \"")
        .appendField(new Blockly.FieldTextInput("Hello"), "LCD_STRING")
        .appendField("\"")
        .appendField("at column")
        .appendField(new Blockly.FieldDropdown([["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"]]), "COLUMN")
        .appendField("row")
        .appendField(new Blockly.FieldDropdown([["0", "0"], ["1", "1"]]), "ROW");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(10);
    this.setTooltip('Prints text at target location on LCD');
    this.setHelpUrl('https://pololu.github.io/zumo-32u4-arduino-library/class_zumo32_u4_l_c_d.html');
  }
};
/* Edit LCD string block here: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#9erx46
*/
Blockly.Blocks['lcd_location'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("LCD go to column")
        .appendField(new Blockly.FieldDropdown([["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"]]), "COLUMN")
        .appendField("row")
        .appendField(new Blockly.FieldDropdown([["0", "0"], ["1", "1"]]), "ROW");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(10);
    this.setTooltip('Moves the cursor according to the location specified.');
    this.setHelpUrl('https://pololu.github.io/zumo-32u4-arduino-library/class_zumo32_u4_l_c_d.html');
  }
};

/* Edit buzzer block here:
https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#cz56ke
*/
Blockly.Blocks['buzzer_play'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Zumo Play Buzzer");
    this.appendDummyInput()
        .appendField("Note")
        .appendField(new Blockly.FieldDropdown([["C", "C"], ["C#", "C_SHARP"], ["Db", "D_FLAT"], ["D", "D"], ["D#", "D_SHARP"], ["Eb", "E_FLAT"], ["E", "E"], ["F", "F"], ["F#", "F_SHARP"], ["Gb", "G_FLAT"], ["G", "G"], ["G#", "G_SHARP"], ["Ab", "A_FLAT"], ["A", "A"], ["A#", "A_SHARP"], ["Bb", "B_FLAT"], ["B", "B"], ["Silent", "SILENT"]]), "NOTE");
    this.appendValueInput("OCTAVE")
        .setCheck("Number")
        .appendField("octave");
    this.appendValueInput("DURATION")
        .setCheck("Number")
        .appendField("duration (seconds)");
    this.appendValueInput("VOLUME")
        .setCheck("Number")
        .appendField("volume");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
    this.setTooltip('Plays the buzzer according to its Note, Octave, Duration, Volume');
    this.setHelpUrl('https://pololu.github.io/zumo-32u4-arduino-library/class_zumo32_u4_buzzer.html');
  }
};
/* Edit buzzer block here:
https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#fwdedx
*/
Blockly.Blocks['buzzer_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Zumo Stop Buzzer");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
    this.setTooltip('Stops playing the buzzer.');
    this.setHelpUrl('https://pololu.github.io/zumo-32u4-arduino-library/class_zumo32_u4_buzzer.html');
  }
};

Blockly.Blocks['battery_milivolts'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Read Battery Milivolts")
        .appendField(new Blockly.FieldVariable("batteryLevel"), "batteryLevel");
    this.setOutput(true, "uint16_t");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};