<!DOCTYPE html>
<?php include($_SERVER['DOCUMENT_ROOT'].'/allassets/colour.php');$pageIdentifier = "whyGoogle";?>
<html lang="en-NP">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
<meta name="author" content="Hasil Paudyal, hasilpaudyal@gmail.com">
<meta name="description" content="Hasil's Personal Site. Check out to know more and contact him. ">
<meta name="keywords" content="Hasil, Paudyal, Google Games Hack, Personal Site, Hášíl, Páudýál">
<link href="/allassets/icon.png" rel="shortcut icon">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/css/materialize.min.css">
<style rel="stylesheet" type="text/css" media="screen,projection">.fontsize{font-size:20px!important}nav{font-family:'Kaushan Script',serif;<?php echo 'background:#'."$design"; ?>}@font-face{font-family:'Kaushan Script';font-style:normal;font-weight:400;src:local('Kaushan Script'),local('KaushanScript-Regular'),url(https://fonts.gstatic.com/s/kaushanscript/v5/qx1LSqts-NtiKcLw4N03IO87R-l0-Xx_7cYc0ZX1ifE.woff2) format('woff2');unicode-range:U+0100-024F,U+1E00-1EFF,U+20A0-20AB,U+20AD-20CF,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Kaushan Script';font-style:normal;font-weight:400;src:local('Kaushan Script'),local('KaushanScript-Regular'),url(https://fonts.gstatic.com/s/kaushanscript/v5/qx1LSqts-NtiKcLw4N03IEd0sm1ffa_JvZxsF_BEwQk.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2212,U+2215,U+E0FF,U+EFFD,U+F000}.myloader{background:url(/allassets/preloader.gif) center center no-repeat  <?php echo "#"."$design"; ?>;bottom:0;height:100%;left:0;overflow:hidden;position:fixed;right:0;top:0;width:100%;z-index:99999}footer{font-family:'Kaushan Script',serif;<?php echo 'background:#'."$design"; ?>;position:fixed;left:0px;bottom:0px;width:100%;z-index:999}</style>
      <style type="text/css"> * {margin:0; padding:0; text-indent:0; }
         .s1 { color: #646464; font-family:"Comic Sans MS"; font-style: normal; font-weight: normal; text-decoration: none; font-size: 28pt; }
         .s2 { color: #646464; font-family:"Comic Sans MS"; font-style: italic; font-weight: normal; text-decoration: none; font-size: 20.5pt; }
         p { color: #646464; font-family:"Comic Sans MS"; font-style: normal; font-weight: normal; text-decoration: none; font-size: 12pt; margin:0pt; }
         .s3 { color: #646464; font-family:"Comic Sans MS"; font-style: normal; font-weight: normal; text-decoration: none; font-size: 14pt; }
         .s4 { color: #646464; font-family:"Comic Sans MS"; font-style: normal; font-weight: bold; text-decoration: none; font-size: 11pt; }
         .s5 { color: #646464; font-family:"Comic Sans MS"; font-style: normal; font-weight: normal; text-decoration: none; font-size: 11pt; }
         h1 { color: #646464; font-family:"Comic Sans MS"; font-style: normal; font-weight: bold; text-decoration: none; font-size: 14pt; }
         h2 { color: #646464; font-family:"Comic Sans MS"; font-style: normal; font-weight: bold; text-decoration: none; font-size: 12pt; }
         .a { color: #646464; font-family:"Comic Sans MS"; font-style: normal; font-weight: normal; text-decoration: none; font-size: 12pt; }
      </style>
<title>Recruitment Drive</title>
</head>
<body>
<div class="myloader"> </div>
<?php include($_SERVER['DOCUMENT_ROOT'].'/allassets/nav.php');?>
<?php
if (isset($_POST["token"]))
{
	$token=strtoupper($_POST["token"]);
	date_default_timezone_set('Asia/Kolkata');
	$date = date('d-m-y');
	if ($token == "NKAML")
	{
		$txt = $date . " Valid Token: " . $token;
		file_put_contents('log.txt', $txt . PHP_EOL, FILE_APPEND | LOCK_EX);
		
		echo('<div class="container">
		
		<div class="card-panel hoverable">
         <div class="row">
            <div class="col s12 m6">
               <div class="card white">
                  <div class="card-content green-text" style="text-align:center">
                     <div><iframe width=100% height="315" src="https://www.youtube.com/embed/TXio18MZF4Q" frameborder="4" allowfullscreen></iframe></div>
                     <span class="card-title" > Play Achievements Unlocker </span>
                     <p>An automatic PHP based script to unlock Google Play Games achievements.</p>
                  </div>
               </div>
            </div>
            <div class="col s12 m6">
               <div class="card white">
                  <div class="card-content green-text" style="text-align:center">
                     <div><iframe width=100% height="315" src="https://www.youtube.com/embed/F98bvPg0xmI" frameborder="4" allowfullscreen></iframe></div>
                     <span class="card-title" > Facebook Poker </span>
                     <p>Just repeating the poke command from two different accounts.</p>
                  </div>
               </div>
            </div>
			
			<div class="col s12 m12">
               <div class="card white">
                  <div class="card-content green-text" style="text-align:center">
                     <span class="card-title" > What else have I done? </span>
                     <h2>PRDC MiPower Crack.</h2>
					 <p>MiPower is an C# based software developed by PRDC (Bangalore, India) for simulation of electrical power transmission and distrubution. I have created a fake server on my website to bypass its license check!</p>
					 <center><img class="materialboxed" src="./img1.jpg" width="80%"/></center>
					 <br>
					 <p>The subscription period ends at 2032</p><br>
					 <center><img class="materialboxed" src="./img2.jpg" width="80%"/></center>
                  </div>
               </div>
            </div>
		 </div>
        </div>
		
		<div class="col s12 m12">
               <div class="card white">
                  <div class="card-content green-text" style="text-align:center">
                     <span class="card-title" > What else have I done? </span>
                     <h2>Fixolla delivery app</h2>
			<p>This app is for Fixolla delivery agents to collect/verify phone information while pickup/delivery.</p><br>
			<div class="row">
			
        <div class="col s12 m4">
      <img class="materialboxed" src="./fix1.jpeg" width="80%"/>
	</div>
<div class="col s12 m4">
      <img class="materialboxed" src="./fix2.jpeg" width="80%"/>
	</div>
<div class="col s12 m4">
      <img class="materialboxed" src="./fix3.jpeg" width="80%"/>
	</div>	
	</div>
                  </div>
               </div>
            </div>
		

		<div class="col s12 m12">
               <div class="card white">
                  <div class="card-content green-text" style="text-align:center">
                     <span class="card-title" > What else have I done? </span>
                     <h2>Motor Analyser</h2>
			<p>Realtime status of a motor (temperature, speed, voltage, etc) is transmitted using bluetooth to mobile phone and simultaneously logged using Arduino to SD card. Later this raw data is analysed using PHP or console applcation to know/predict if any fault is present.</p>
			<br>
			<p>The source code is availale in my github account <a href="https://github.com/ha5il/Electrical-Performance-Analyzer" target="_blank">here...</a></p>
			
                  </div>
               </div>
            </div>
		
		
		

		</div>
        </div>
  
		
		</div><br><br><br><br><br><br><br>'
		);

	}
	
	else
	{
		$txt = $date . " Invalid Token: " . $token;
		file_put_contents('log.txt', $txt . PHP_EOL, FILE_APPEND | LOCK_EX);

		echo('<br><br><div class="container"><form action="./" class="col s12" method="post">
<div class="col input-field s6"><input type="text" name="token" required><label>What is your valid token? </label></div>
<center><button class="col btn green waves-effect waves-red" type="submit">Allow me</button></center>
<br><br>
</form></div>');
	}
}
else 
{
echo('<br><br><div class="container"><form action="./" class="col s12" method="post">
<div class="col input-field s6"><input type="text" name="token" required><label>What is your token? </label></div>
<center><button class="col btn green waves-effect waves-red" type="submit">Allow me</button></center>
<br><br>
</form></div>');
}
	?>

<?php include($_SERVER['DOCUMENT_ROOT'].'/allassets/footer.php');?>
      
      <script src="https://code.jquery.com/jquery-2.2.1.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/js/materialize.min.js"></script>
      <script>
         $(window).load(function() {
         $(".myloader").delay(100).fadeOut(1400)
         }), $(".button-collapse").sideNav({
         menuWidth: 190,
         edge: "left",
         closeOnClick: !0
         }), $(document).ready(function() {
         $(".tooltipped").tooltip({
         delay: 50
         })
         }); 
         $(document).ready(function(){
         $('.materialboxed').materialbox();

         });
      </script>
   </body>
</html>