<html>
   <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" >
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no" >
	  
     <!-- <link href="/assets/logo.png" rel="shortcut icon"> -->
	 
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/css/materialize.min.css">
      <link href="https://fonts.googleapis.com/css?family=Eagle+Lake" rel="stylesheet">
      <style type="text/css" media="screen,projection" rel="stylesheet"> body {font-family: 'Eagle Lake', cursive; } nav {background-color: #1372a9}</style>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Riyan Energy Management</title>
   </head>
   <body>
      <nav>
         <div class="nav-wrapper">
            <a href="#!" class="brand-logo right"><img src="/assets/logo.png" style="height:65px;"></img></a>
            <ul class="left hide-on-med-and-down">
               <li><a href="/contact_us/">Contact Us</a></li>
               <li><a href="/join_now/">Join Now</a></li>
               <li class="active"><a href="#!">Demand</a></li>
            </ul>
            <ul id="slide-out" class="side-nav">
               <li><a href="#!">Demand</a></li>
               <li><a href="/join_now/">Join Now</a></li>
               <li><a href="/contact_us/">Contact Us</a></li>
            </ul>
            <a href="#" data-activates="slide-out" class="button-collapse"><i class="mdi-navigation fontsize">Other Pages</i></a> 
         </div>
      </nav>
      <div class="container">
       <!--  <img src="/assets/back.jpg" style="width: 100%"></img> -->
	   <center><h5>The data above shows the sure peak and off peak hours.</h5></center>
         <table class="striped centered z-depth-2">
            <thead>
               <tr class="green-text">
                  <th data-field="id">
                     <h5>S.No.</h5>
                  </th>
                  <th data-field="name">
                     <h5>Date</h5>
                  </th>
                  <th data-field="link">
                     <h5>Peak Hours</h5>
                  </th>
                  <th data-field="note">
                     <h5>Off Peak Hours</h5>
                  </th>
               </tr>
            </thead>
            <tbody>
						<?php
			 include($_SERVER['DOCUMENT_ROOT'].'/project/rk/data.php');


			
			$strng1="<tr><td class=\"orange-text\">";
			$strng2="</td><td class=\"teal-text\">";
			$strng3="</td><td class=\"blue-text\">";
			$strng4="</td><td class=\"pink-text\">";
			$strng5="</td></tr>";
			
			for ($i=0;$i<$num_of_data;$i++)
				$tabledata[$i]= $strng1 . "$serial[$i]" . $strng2 . "$date[$i]" . $strng3 . "$peaktime[$i]" . $strng4 . "$offpeak[$i]" . $strng5;
			
			for ($i=0;$i<$num_of_data;$i++)
				echo $tabledata[$i];
			?>
			
            </tbody>
         </table>
		 
        
		
		
      </div>
      <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/js/materialize.min.js"></script>
      <script>    $(".button-collapse").sideNav();</script>
   </body>
</html>