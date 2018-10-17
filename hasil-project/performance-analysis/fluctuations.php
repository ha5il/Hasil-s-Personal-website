<?php

if ($errorCount > 0)
{
	echo ('<br />No. of fluctuations = ' . $errorCount . '<br /><br />');
	for ($i = 1; $i <= $errorCount; $i++)
	{
		echo (tostring($errorTime[$i]) . ' with Error Code ' . $errors[$i] . '<br />');
	}
}
else echo ('<br /><br />We didnot find any fluctuation as per standard parameters mentioned on data.php!');
 ?>