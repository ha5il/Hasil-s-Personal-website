<?php
include ($_SERVER['DOCUMENT_ROOT'] . '/performance-analysis/erroranalysis.php');

/*
if $skipCount > 0, then some rows have to be skipped
the rows to skip are on array $skippedRow[]

Number of fluctuations from standard values as specified on data.php --> $errorCount
List of error codes are on array $errors[]
Row number of error is on array $errorRow[]

Eg.
If error is on row 4,
Fetch the error code as $errors[4]
The individual senssed parameters can be fetched as $t[4]...
*/
$errors[0] = 0; // To avoide array offset error and is useless

if ($errorCount > 0)
{
	echo ('<b>Verify the timestamp with error code to know how long the fluctuation last</b>');
	for ($i = 1; $i <= $errorCount; $i++)
	{
		if ($errors[$i] == $errors[$i - 1]) continue;
		/* Now analyse the error, continue above skips the same adjacent error code
		Error codes starts from row 2
		temperature --> $t[row]			Error Code Description
		voltage     --> $v[row]			3 --> High
		current     --> $c[row]			2 --> Normal
		speed       --> $s[row]			1 --> Low
		*/
		echo ('<b><h5>' . tostring($errorTime[$i]) . '</h5></b>');
		analysePerformance($errors[$i]);
		echo ('<br />');
	}
}
else echo ("<br /><br />Didn't find any Fluctuation as per parameters mentioned in data.php!");
?>