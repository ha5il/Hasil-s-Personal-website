<?php

if ($skipCount > 0)
{
	echo ("No. of skipped data due to extra/unsufficient value = " . $skipCount . "<br /><br />The row number of CSV file is listed below:<br />");
	for ($i = 1; $i <= $skipCount; $i++)
	{
		echo ($skippedRow[$i] . "<br />");
	}
}
else echo ("<br /><br />Non of the data from CSV file is skipped!");
?>