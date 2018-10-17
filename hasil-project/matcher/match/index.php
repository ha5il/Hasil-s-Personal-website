<?php

$gotMatch = false;
$proceedMatch = false;
$Number = $_GET["phone"];

//firstly check if he or she has submitted the crush or not!

if (($handle = fopen("../crushes.csv", "r")) !== FALSE)
{
	while (($data = fgetcsv($handle, ",")) !== FALSE)
	{
		if ($Number == $data[1])
		{
			$proceedMatch = true;
		}
	}
	fclose($handle);
}

if (!$proceedMatch)
{
	echo ("Save your crush first!");
	exit();
}

if (($handle1 = fopen("../crushes.csv", "r")) !== FALSE)
{
	while (($data1 = fgetcsv($handle1, ",")) !== FALSE)
	{
		if ($Number == $data1[2])
		{
			// some one has crush on current user; now check if current user has crush on same someone or not!
			// $data1[1] is number of someone and $data1[0] is name of someone
			echo ("^_^ "); //Someone do have crush on you on our database.
			
			// open the same csv file again and proceed
			if (($handle2 = fopen("../crushes.csv", "r")) !== FALSE)
			{
				while (($data2 = fgetcsv($handle2, ",")) !== FALSE)
				{
					if ($data2[2] == $data1[1])
					{
						echo ("Your matching crush is $data1[0] with number $data1[1]!");
						$gotMatch = true;
					}
				}
				fclose($handle2);
			}
		}
	}
	fclose($handle1);
}

if (!$gotMatch) echo ("Sorry you don't have both side matching crush!");

?>