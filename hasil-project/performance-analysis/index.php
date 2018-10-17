<!DOCTYPE html>
<html>
   <head>
      <meta content="text/html; charset=UTF-8"http-equiv=Content-Type>
      <meta content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"name=viewport>
      <meta name="theme-color" content="#8e4585">
      <link href="/allassets/icon.png" rel="shortcut icon">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/css/materialize.min.css">
      <style media=screen,projection rel=stylesheet>nav{background-color:#8e4585}</style>
      <title>Select DATA.CSV for Analysis</title>
   </head>
   <body>
      <nav>
         <div class=nav-wrapper>
            <ul class="hide-on-med-and-down left">
               <li onclick="Materialize.toast('Please login', 4000, 'rounded')"><a href="#!">Electrical Performance Analysis</a></li>
               <li><a href=./sample/DATA.CSV> Download Sample CSV</a></li>
            </ul>
            <ul class=side-nav id=slide-out>
               <li onclick="Materialize.toast('Please login', 4000, 'rounded')" ><a href="#!">Electrical Performance Analysis</a>
               <li><a href=./sample/DATA.CSV> Download Sample CSV</a></li>
            </ul>
            <a href=#! class=button-collapse data-activates=slide-out><i class="fontsize mdi-navigation">Menu</i></a>
         </div>
      </nav>
      <div class=container style=text-align:center>
         <br><br><br><br>
         <h5>Select DATA.CSV obtained from SD card:</h5>
         <form action="upload.php" method="post" enctype="multipart/form-data">
            <div class="file-field input-field">
               <div class="btn">
                  <span>File</span>
                  <input type="file" name="fileToUpload" id="fileToUpload" required>
               </div>
               <div class="file-path-wrapper">
                  <input class="file-path validate" type="text">
               </div>
            </div>
            <div class="row">
               <div class="input-field col s6">
                  <input id="email" type="email" class="validate autocomplete" name="email" autocomplete="off" required>
                  <label for="email" data-error="Enter an valid Email address" data-success="Email looks fine">Email</label>
               </div>
               <div class="input-field col s6">
                  <input id="password" type="password" class="validate" name="password" required>
                  <label for="password">Password</label>
               </div>
            </div>
            <button class="btn waves-effect waves-red" type="submit" name="submit" value="Upload">Authenticate & Upload</button>
         </form>
      </div>
      <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/js/materialize.min.js"></script>
      <script>$(".button-collapse").sideNav();(function($) {
         $(function() {
           $("input.autocomplete").autocomplete({
             data: {
               'hasilpaudyal@gmail.com': './pics/Hasil.jpg',
               'neilroxtar94@gmail.com': './pics/Subharun.jpg',
               'lipikamitra2008@gmail.com': './pics/Lipika.jpg',
               'swethaanjali25@gmail.com': './pics/Sweta.jpg'
             }
           });
         });
         })(jQuery);
      </script>
   </body>
</html>