<?php

/*
	$eachCode[0] --> Temperature				3 --> High
	$eachCode[1] --> Voltage 					2 --> Normal
	$eachCode[2] --> Couuent					1 --> Low
	$eachCode[3] --> Speed						0 --> No Supply
*/

function analysePerformance($dataCode)
{
	$eachCode = array_map('intval', str_split($dataCode));
	
	// Check if supply is given?
	if ($eachCode[1] == 0) echo ('<br /> Motor is turned off. We didnot find any supply voltage.');
	else
	{
		 // Checking Temperature
		 if ($eachCode[0] == 1) echo ('<br /> The motor might be running in a colder environment, better performance will be seen once it heats up.');
    else if ($eachCode[0] == 3) echo ('<br /> The motor got overheat at this moment, please use a better cooling system.');
	
		 // Checking Voltage
		 if ($eachCode[1] == 1) echo ('<br />There is a dip in supply voltage, please use voltage booster unit.');
    else if ($eachCode[1] == 3) echo ('<br />The supply is higher than permitted limit, please use a stabilizer.');
	
		 // Checking Current and Speed
		 if ($eachCode[2] == 3 && $eachCode[3] == 1) echo ('<br />We found high current with low speed, probably due to overload or insufficient lubricant.');
	else if ($eachCode[2] == 3 && $eachCode[3] == 0) echo ('<br />We found high current with zero speed due to blocked rotor.');
	echo ('<br /><br />');
	}
}

?>