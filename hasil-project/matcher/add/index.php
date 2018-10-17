<?php

$Name = $_GET["name"];
$Number = $_GET["phone"];
$Crush_Number = $_GET["match"];

if ($Name == "") exit("Name Missing!");
if ($Number == "") exit("Number Missing!");
if ($Crush_Number == "") exit("Crush Number Missing!");
if ($Number == $Crush_Number) exit("Wow you have crush on yourself!");

// check if the same number already exists

if (($handle1 = fopen("../crushes.csv", "r")) !== FALSE)
{
	while (($data1 = fgetcsv($handle1, ",")) !== FALSE)
	{
		if ($Number == $data1[1])
		{
			echo ('You have already set your crush!');
			exit();
		}
	}
	fclose($handle1);
}

file_put_contents('../crushes.csv', "$Name,$Number,$Crush_Number" . PHP_EOL, FILE_APPEND | LOCK_EX);
echo ('Data Saved!');

?>