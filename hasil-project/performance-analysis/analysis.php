<?php
$row = 1;

// Fetching the Standard Values

$temperature_max = $_POST["mxtempr"];
$voltage_max = $_POST["mxvtg"];
$current_max = $_POST["mxcrt"];
$speed_max = $_POST["mxspd"];
$temperature_min = $_POST["mntempr"];
$voltage_min = $_POST["mnvtg"];
$current_min = $_POST["mncrt"];
$speed_min = $_POST["mnspd"];

// Main Program

$skipCount = 0;
$errorCount = 0;

if (($handle = fopen("DATA.CSV", "r")) !== FALSE)
{
	while (($data = fgetcsv($handle, ",")) !== FALSE)
	{
		$num = count($data); // Counting the number of data and it has to be 5
		if ($num != 5)
		{
			$skipCount++;
			$skippedRow[$skipCount] = $row;
			$row++;
			continue;
		}

		// Do the analysis as data is always 5

		if ($data[0] == 'Time')
		{
			$row++;
			continue;
		}

		// Recording Time

		$time[$row] = $data[0];

		// Ferching error code of Temperature, Voltage, Current and Speed
$t[$row] = single_error_code ($data[1], $temperature_max, $temperature_min);
$v[$row] = single_error_code ($data[2], $voltage_max, $voltage_min);
$c[$row] = single_error_code ($data[3], $current_max, $current_min);
$s[$row] = single_error_code ($data[4], $speed_max, $speed_min);

		if ($t[$row] . $v[$row] . $c[$row] . $s[$row] != 2222) // if all parameters aren't normal i.e., 2222
		{
			$errorCount++;
			$errorTime[$errorCount] = $time[$row];
			$errors[$errorCount] = $t[$row] . $v[$row] . $c[$row] . $s[$row];
		}

		$row++;
	}

	fclose($handle);
}

function single_error_code ($analyser, $maxi, $mini)
{
	if ($analyser == 0) return 0;
	else if ($analyser > $maxi) return 3;
	else if ($analyser < $mini) return 1;
	else return 2;
}

function tostring($data)
{
	$splitted = array_map('intval', str_split($data, 2));
	if ($splitted[3] < 10) $splitted[3] = '0' . $splitted[3];
	if ($splitted[4] < 10) $splitted[4] = '0' . $splitted[4];
	if ($splitted[5] < 10) $splitted[5] = '0' . $splitted[5];
	if ($splitted[6] < 10) $splitted[6] = '0' . $splitted[6]; // Converted to double digit
	return ("$splitted[3] " . tomonth($splitted[2]) . " $splitted[0]" . "$splitted[1]" . ' at ' . "$splitted[4]" . ':' . "$splitted[5]" . ":" . "$splitted[6]");
}

function tomonth($mnth)
{
	if ($mnth == '01') return 'January';
	else
	if ($mnth == '02') return 'February';
	else
	if ($mnth == '03') return 'March';
	else
	if ($mnth == '04') return 'April';
	else
	if ($mnth == '05') return 'May';
	else
	if ($mnth == '06') return 'June';
	else
	if ($mnth == '07') return 'July';
	else
	if ($mnth == '08') return 'August';
	else
	if ($mnth == '09') return 'September';
	else
	if ($mnth == '10') return 'Octuber';
	else
	if ($mnth == '11') return 'November';
	else
	if ($mnth == '12') return 'December';
}
?>
<!DOCTYPE html>
 <html>
   <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" >
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no" >
	  <link href="/allassets/icon.png" rel="shortcut icon">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/css/materialize.min.css">
      <style type="text/css" media="screen,projection" rel="stylesheet"> nav {background-color: #8E4585}</style>
	  <meta name="theme-color" content="#8e4585">
      <title>Performance Analysis</title>
   </head>
  <body>
      <nav>
         <div class="nav-wrapper">
            <ul class="left hide-on-med-and-down">
               <li class="tooltipped" data-position="bottom" data-delay="50" data-tooltip="Analyse New Data!"><a href="/performance-analysis/">Electrical Performance Analysis</a></li>
               <li class="tooltipped" data-position="bottom" data-delay="50" data-tooltip="Analyse same CSV with different parameters!"><a onclick="goBack()">Re-Analyse</a></li>
            </ul>
            <ul id="slide-out" class="side-nav">
               <li><a href="/performance-analysis/">Analyse New Data</a></li>
               <li><a onclick="goBack()">Re-Analyse with different parameters</a></li>
            </ul>
            <a href="#" data-activates="slide-out" class="button-collapse"><i class="mdi-navigation fontsize">Menu</i></a> 
         </div>
      </nav>
	  
	    <div class="container" style="text-align:center">
	   <center><h4><?php if ($row == 1) echo ("Error in DATA.CSV, make sure it exists!"); else echo ("DATA.CSV successfully processed!");?></h4></center>
	  
	              <div class="card-panel hoverable">
               <div class="row">
                  <div class="col s12">
                     <ul class="tabs">
                        <li class="tab col s3 tooltipped" data-position="bottom" data-delay="50" data-tooltip="Analysis Report"><a href="#report"><b>Brief Report</b></a></li>
                        <li class="tab col s3 tooltipped" data-position="bottom" data-delay="50" data-tooltip="All Fluctuations Found"><a href="#fluctuations"><b>All Fluctuations</b></a></li>
                        <li class="tab col s3 tooltipped" data-position="bottom" data-delay="50" data-tooltip="Skips on CSV file"><a href="#skips"><b>Skips</b></a></li>
						<li class="tab col s3 tooltipped" data-position="bottom" data-delay="50" data-tooltip="Our Project Module"><a href="#module"><b>About project</b></a></li>
                     </ul>
                  </div>
               </div>
<div id="report">
<?php
 include ($_SERVER['DOCUMENT_ROOT'] . '/performance-analysis/report.php');
?>
</div>
<div id="fluctuations">
<?php
include ($_SERVER['DOCUMENT_ROOT'] . '/performance-analysis/fluctuations.php');
?>
</div>
<div id="skips">
<?php
include ($_SERVER['DOCUMENT_ROOT'] . '/performance-analysis/skips.php');
?>
</div>
<div id="module">

<iframe src="/performance-analysis/about_project.html" width="100%" height="2500px" frameBorder="0"> </iframe>
</div>
 </div>
      <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/js/materialize.min.js"></script>
      <script>$(".button-collapse").sideNav();  $(document).ready(function(){
    $('ul.tabs').tabs();
  });
  function goBack() {
    window.history.back();
}
</script>
  

   </body>
</html>