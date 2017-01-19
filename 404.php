<!DOCTYPE html>
<?php include "./allassets/colour.php"; ?>
<html lang="en-NP">
   <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" >
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no" >
      <meta name="author" content="Hasil Paudyal, hasilpaudyal@gmail.com">
      <meta name="description" content="Hasil's Personal Site. Check out to know more and contact him. ">
      <meta name="keywords" content="Hasil, Paudyal, Google Games Hack, Personal Site, Hášíl, Páůďýál">
      <link href="/allassets/icon.png" rel="shortcut icon">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/css/materialize.min.css">
      <style type="text/css" media="screen,projection" rel="stylesheet">
         nav {
         font-family: 'Kaushan Script', serif;
         <?php echo 'background:#'."$design"; ?>
         }
         @font-face {
         font-family: 'Kaushan Script';
         font-style: normal;
         font-weight: 400;
         src: local('Kaushan Script'), local('KaushanScript-Regular'), url(https://fonts.gstatic.com/s/kaushanscript/v5/qx1LSqts-NtiKcLw4N03IO87R-l0-Xx_7cYc0ZX1ifE.woff2) format('woff2');
         unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF
         }
         @font-face {
         font-family: 'Kaushan Script';
         font-style: normal;
         font-weight: 400;
         src: local('Kaushan Script'), local('KaushanScript-Regular'), url(https://fonts.gstatic.com/s/kaushanscript/v5/qx1LSqts-NtiKcLw4N03IEd0sm1ffa_JvZxsF_BEwQk.woff2) format('woff2');
         unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000
         }
         .myloader {
         background: url(/allassets/preloader.gif) center center no-repeat <?php echo "#"."$design"; ?>;
         bottom: 0;
         height: 100%;
         left: 0;
         overflow: hidden;
         position: fixed;
         right: 0;
         top: 0;
         width: 100%;
         z-index: 99999
         }
         footer{font-family:'Kaushan Script',serif;<?php echo 'background:#'."$design"; ?>; position:relative; left:0px; bottom:0px; height:50px; width:100%;z-index: 99998}
      </style>
      <title>Page not found...</title>
   </head>
   <body>
      <div class="myloader"></div>     
	  <?php
         include "./allassets/nav.html";
         ?>
      <div class="container">
         <img class="materialboxed" width="100%" src="https://firebasestorage.googleapis.com/v0/b/x8-red-freedom-c.appspot.com/o/l3vReWaeexMINrVRe.gif?alt=media&token=79109471-9325-4bf6-846b-f00acc591e7f">
      </div>
      <footer>
<?php include "./allassets/footer.php" ?>
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
         $(document).ready(function(){
         $('.materialboxed').materialbox();
         });
         
      </script>
      <!-- Google Analytics -->
      <script>
         (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
         (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
         m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
         })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
         
         ga('create', 'UA-72808058-1', 'auto');
         ga('require', 'linkid');
         ga('send', 'pageview');
         
      </script>
   </body>
</html>
<!Hasil Paudyal>
