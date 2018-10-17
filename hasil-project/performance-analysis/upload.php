<?php
/*
login_error 			0 --> All OK
						1 --> Incorrect password
						2 --> Incorrect guest password
*/
$target_dir = "./";
$filename = basename($_FILES["fileToUpload"]["name"]);
$target_file = $target_dir . $filename;
$uploadOk = 1;
switch ($_POST["email"])
{
case 'hasilpaudyal@gmail.com':
	$user = 'Hasil';
	if ($_POST["password"] != 'aaaa') $login_error = 1;
	else $login_error = 0;
	break;

case 'neilroxtar94@gmail.com':
	$user = 'Subharun';
	if ($_POST["password"] != 'aaaa') $login_error = 1;
	else $login_error = 0;
	break;

case 'lipikamitra2008@gmail.com':
	$user = 'Lipika';
	if ($_POST["password"] != 'aaaa') $login_error = 1;
	else $login_error = 0;
	break;

case 'swethaanjali25@gmail.com':
	$user = 'Swetha';
	if ($_POST["password"] != 'aaaa') $login_error = 1;
	else $login_error = 0;
	break;

default:
	$user = 'Guest';
	if ($_POST["password"] != 'gguueesstt') $login_error = 2;
	$login_error = 0;
}

if ($login_error == 1) echo 'Incorrect password for ' . $user;
else if ($login_error == 2) echo 'Incorrect Guest password!';
else
{

	// Check File Name

	if ($filename != "DATA.CSV")
	{
		echo "Sorry, only DATA.CSV file is allowed.";
		$uploadOk = 0;
	}

	// if everything is ok, try to upload file

	else
	{

		// Delete DATA.CSV

		unlink($_SERVER['DOCUMENT_ROOT'] . '/performance-analysis/DATA.CSV');
		if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file))
		{ 
		$initialized_min_max = 0;

if (($handle = fopen("DATA.CSV", "r")) !== FALSE)
	{
	while (($data = fgetcsv($handle, ",")) !== FALSE)
		{
		$num = count($data); // Counting the number of data and it has to be 5
		if ($num == 5)
			{
			if ($data[0] != 'Time')
				{
				if ($initialized_min_max == 0)
					{

					// Finding max and min values as uploaded on CSV

					$app_max_temp = $app_min_temp = $data[1];
					$app_max_vtg = $app_min_vtg = $data[2];
					$app_max_crt = $app_min_crt = $data[3];
					$app_max_spd = $app_min_spd = $data[4];
					$initialized_min_max = 1;
					}

				if ($data[1] > $app_max_temp) $app_max_temp = $data[1];
				  else if ($data[1] < $app_min_temp) $app_min_temp = $data[1];
				  
				if ($data[2] > $app_max_vtg) $app_max_vtg = $data[2];
				  else if ($data[2] < $app_min_vtg) $app_min_vtg = $data[2];
				  
				if ($data[3] > $app_max_crt) $app_max_crt = $data[3];
				  else if ($data[3] < $app_min_crt) $app_min_crt = $data[3];
				  
				if ($data[4] > $app_max_spd) $app_max_spd = $data[4];
				  else if ($data[4] < $app_min_spd) $app_min_spd = $data[4];
				}
			}
		}

	fclose($handle);
	}

		include ($_SERVER['DOCUMENT_ROOT'] . '/performance-analysis/form.html');}
		else
		{
			echo "Sorry, there was an error uploading your file.";
		}
	}
}

?>