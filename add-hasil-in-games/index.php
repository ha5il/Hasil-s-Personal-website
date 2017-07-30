<!DOCTYPE html>
<?php include($_SERVER['DOCUMENT_ROOT'].'/allassets/colour.php');$pageIdentifier = "GameAdd";?>
<html lang="en-NP">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
<meta name="author" content="Hasil Paudyal, hasilpaudyal@gmail.com">
<meta name="description" content="Hasil's Personal Site. Add him in different game platforms. ">
<meta name="keywords" content="Hasil, Paudyal, Google Games Hack, Personal Site, Hášíl, Páůďýál, add in games">
<link href="../allassets/icon.png" rel="shortcut icon">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/css/materialize.min.css">
<style rel="stylesheet" type="text/css" media="screen,projection">nav{font-family:'Kaushan Script',serif;<?php echo 'background:#'."$design"; ?>}@font-face{font-family:'Kaushan Script';font-style:normal;font-weight:400;src:local('Kaushan Script'),local('KaushanScript-Regular'),url(https://fonts.gstatic.com/s/kaushanscript/v5/qx1LSqts-NtiKcLw4N03IO87R-l0-Xx_7cYc0ZX1ifE.woff2) format('woff2');unicode-range:U+0100-024F,U+1E00-1EFF,U+20A0-20AB,U+20AD-20CF,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Kaushan Script';font-style:normal;font-weight:400;src:local('Kaushan Script'),local('KaushanScript-Regular'),url(https://fonts.gstatic.com/s/kaushanscript/v5/qx1LSqts-NtiKcLw4N03IEd0sm1ffa_JvZxsF_BEwQk.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2212,U+2215,U+E0FF,U+EFFD,U+F000}fonto{font-family:'Kotta One',serif}@font-face{font-family:'Kotta One';font-style:normal;font-weight:400;src:local('Kotta One'),local('KottaOne-Regular'),url(https://fonts.gstatic.com/s/kottaone/v4/UBRvabq0a_tDpOKfqIfjdRJtnKITppOI_IvcXXDNrsc.woff2) format('woff2');unicode-range:U+0100-024F,U+1E00-1EFF,U+20A0-20AB,U+20AD-20CF,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Kotta One';font-style:normal;font-weight:400;src:local('Kotta One'),local('KottaOne-Regular'),url(https://fonts.gstatic.com/s/kottaone/v4/T11KR5KX3fgZhBmu7MWXKltXRa8TVwTICgirnJhmVJw.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2212,U+2215,U+E0FF,U+EFFD,U+F000}.myloader{background:url(/allassets/preloader.gif) center center no-repeat <?php echo "#"."$design"; ?>;bottom:0;height:100%;left:0;overflow:hidden;relative:relative;right:0;top:0;width:100%;z-index:99999}footer{font-family:'Kaushan Script',serif;<?php echo 'background:#'."$design"; ?>;  position: relative;right: 0;bottom: 0;left: 0;}</style>
<title>Add Hasil in Games</title>
</head>
<body>
<div class="myloader"></div>
<?php include($_SERVER['DOCUMENT_ROOT'].'/allassets/nav.php');?>
      <fonto>
         <table class="striped centered z-depth-2">
            <thead>
               <tr class="green-text">
                  <th data-field="id">
                     <h5>Platform</h5>
                  </th>
                  <th data-field="name">
                     <h5>Username</h5>
                  </th>
                  <th data-field="link">
                     <h5>Direct link</h5>
                  </th>
                  <th data-field="note">
                     <h5>Note</h5>
                  </th>
               </tr>
            </thead>
            <tbody>
			<?php
			
			$pltform = ["Android","Ubisoft","Rovio","Miniclip","XBox Live","Playstation Network","EA Origin","Gameloft live","Rockstar","AeriaGames","MAC or iOS (Game Center)","Steam"];
			$usrname = ["-","ha5il","CraZy4gaMe","-","ha5il","HhAaSsIiLl","ha5il","hasill","Yuehoooo","hasilpaudyal","Hasil","ha5il"];
			$dctLinkOnly =["https://plus.google.com/+HasilPaudyal","https://club.ubi.com/#!/en-GB/profile/ha5il","#","http://www.miniclip.com/user/36591313/","#","https://my.playstation.com/HhAaSsIiLl","#","#","https://socialclub.rockstargames.com/member/yuehoooo","https://www.aeriagames.com/user/hasilpaudyal/","#","http://steamcommunity.com/id/hasill/"];
			$linkText =["+HasilPaudyal","Ubi's Club","-","Take me to Miniclip","-","Playstation Profile","-","-","Club Profile","My Profile","-","Link to web profile"];
			$note =["Just add me to any circle","You might add me through Uplay servies inside games","-","Add from web","-","-","Use origin desktop app or might be from game","Is not well managed","Login required","-","Apple discontinued gamecenter","-"];
			
			$strng1="<tr><td class=\"orange-text\">";
			$strng2="</td><td class=\"teal-text\">";
			$strng3="</td><td class=\"blue-text\"><a href=\"";
			$strng4="\" target=\"_blank\"><u>";
			$strng5="</u></a></td><td class=\"pink-text\">";
			$strng6="</td></tr>";
			
			for ($i=0;$i<12;$i++)
				$tabledata[$i]= $strng1 . "$pltform[$i]" . $strng2 . "$usrname[$i]" . $strng3 . "$dctLinkOnly[$i]" . $strng4 . "$linkText[$i]" . $strng5 . "$note[$i]" . $strng6;
			shuffle ($tabledata);
			for ($i=0;$i<12;$i++)
				echo $tabledata[$i];
			?>
			
            </tbody>
         </table>
      </fonto>
      <footer>
<?php include($_SERVER['DOCUMENT_ROOT'].'/allassets/footer.php');?>
      </footer>
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
      </script>
   </body>
</html>