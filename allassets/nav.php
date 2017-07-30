<?php
$link_welcome="/";
$link_aboutme="/about-hasil/";
$link_addgames="/add-hasil-in-games/";
$link_styTch="/stay-in-touch/";
$link_writings="/hasil-writings/";
$link_vdos="/hasil-videos/";
$link_fvdos="/hasil-videos/fuchhey/";
$link_prjcts="/hasil-project/";
$link_notes="/notes/";
$link_poem="/poem/";
$link_fest_ugdi="/ritiriwaz/ugadi/";
$link_rsults="/rsults/";
$link_tcejorp="/tcejorp/";
$link_4o4="/404.php";
$link_sndy="/sndy/";

$click_welcome="";
$click_aboutme="";
$click_addgames="";
$click_styTch="";
$click_writings="";
$click_vdos="";
$click_fvdos="";
$click_prjcts="";
$click_notes="";
$click_poem="";
$click_fest_ugdi="";
$click_rsults="";
$click_tcejorp="";
$click_4o4="";
$click_sndy="";

switch ($pageIdentifier)
  {
case "Namaste":
$link_welcome="#";
$click_welcome="Materialize.toast('You are in Homepage!', 4000, 'rounded')";
  break;
  
case "AboutMe":
$link_aboutme="#";
$click_aboutme="Materialize.toast('You are viewing About Me', 4000, 'rounded')";
  break;
  
case "Prozcts":
$link_prjcts="#";
$click_prjcts="Materialize.toast('Authorization Required !', 4000, 'rounded')";
  break;
  
case "GameAdd":
$link_addgames="#";
$click_addgames="Materialize.toast('This is it !', 4000, 'rounded')";
  break;
  
case "vdos":
$link_vdos="#";
$click_vdos="Materialize.toast('You are on videos page', 4000, 'rounded')";
  break;
  
case "fchvdos":
$link_fvdos="#";
$click_fvdos="Materialize.toast('This is the page', 4000, 'rounded')";
  break;
  
case "GoodWriting":
$link_writings="#";
$click_writings="Materialize.toast('There are my writings !', 4000, 'rounded')";
  break;
  
case "ClzNots":
$link_notes="#";
$click_notes="Materialize.toast('Notes are embeded here', 4000, 'rounded')";
  break;
  
case "Poems":
$link_poem="#";
$click_poem="Materialize.toast('Read it all?', 4000, 'rounded')";
  break;
  
case "RitiUgadi":
$link_fest_ugdi="#";
$click_fest_ugdi="Materialize.toast('Happy Ugadi?', 4000, 'rounded')";
  break;
  
case "VTUrsts":
$link_rsults="#";
$click_rsults="Materialize.toast('Am not scared of my result! ', 4000, 'rounded')";
  break;
  
case "Sunshine":
$link_sndy="#";
$click_sndy="Materialize.toast('Yehi nai ho', 4000, 'rounded')";
  break;
  
case "StTch":
$link_styTch="#";
$click_styTch="Materialize.toast('Below are some options!', 4000, 'rounded')";
  break;
  
case "PProzcts":
$link_tcejorp="#";
$click_tcejorp="Materialize.toast('Projects below', 4000, 'rounded')";
  break;
  
 case "notFoundPage":
$link_4o4="#";
$click_4o4="Materialize.toast('Never Searched Never Found', 4000, 'rounded')";
  break;
  }
 ?>
<div class="navbar-fixed">
   <ul id="dropdown1" class="dropdown-content">
      <li><a class="waves-effect waves-yellow tooltipped" data-position="left" data-delay="50" data-tooltip="My username on different platform" href="<?php echo "$link_addgames"?>" onclick="<?php echo "$click_addgames"?>">Add me in Games</a></li>
      <li><a class="waves-effect waves-red tooltipped" data-position="left" data-delay="50" data-tooltip="View my projects" href="<?php echo "$link_prjcts"?>"onclick="<?php echo "$click_prjcts"?>">My Projects</a></li>
	  <li><a class="waves-effect waves-green tooltipped" data-position="left" data-delay="50" data-tooltip="Contact me to get all notes" href="<?php echo "$link_notes"?>"onclick="<?php echo "$click_notes"?>">Notes</a></li>
      <li class="divider"></li>
      <li><a class="waves-effect waves-teal tooltipped" data-position="left" data-delay="50" data-tooltip="Makes me more popular!" href="https://www.google.com/search?q=Hasil+Paudyal" target="_blank">Me on Google</a></li>
      <li class="divider"></li>
      <li><a class="waves-effect waves-red tooltipped" data-position="left" data-delay="50" data-tooltip="My Videos" href="<?php echo "$link_vdos"?>"onclick="<?php echo "$click_vdos"?>">Videos</a></li>
      <li><a class="waves-effect waves-green tooltipped" data-position="left" data-delay="50" data-tooltip="Bhai ko video haru" href="<?php echo "$link_fvdos"?>" onclick="<?php echo "$click_fvdos" ?>">Fuchhey</a></li>
   </ul>
   <nav>
      <a href="#" class="brand-logo" onclick="Materialize.toast('Its my name :)', 5000, 'rounded')">Hasil Paudyal</a> 
      <ul class="right hide-on-med-and-down">
         <li><a class="waves-effect waves-orange tooltipped" data-position="bottom" data-delay="50" data-tooltip="Namaste" href="<?php echo "$link_welcome" ?>" onclick="<?php echo "$click_welcome"?>">Welcome</a></li>
         <li><a class="waves-effect waves-light tooltipped" data-position="bottom" data-delay="50" data-tooltip="Wanna know more?" href="<?php echo "$link_aboutme"?> "onclick="<?php echo "$click_aboutme"?>">About Me</a></li>
         <li><a class="waves-effect waves-purple tooltipped" data-position="bottom" data-delay="50" data-tooltip="Social Circles" href="<?php echo "$link_styTch"?> "onclick="<?php echo "$click_styTch"?>">Stay in Touch</a></li>
         <li><a class="waves-effect waves-green tooltipped" data-position="bottom" data-delay="50" data-tooltip="Some Poems by me" href="<?php echo "$link_writings"?>"onclick="<?php echo "$click_writings"?>">My Writings</a></li>
         <li><a class="dropdown-button tooltipped" href="#" data-activates="dropdown1" data-position="bottom" data-delay="50" data-tooltip="More!">Even More<i class="material-icons right"><img alt="" src="/allassets/DropDown.png" width="20" height="11"></i></a></li>
      </ul>
      <ul id="slide-out" class="side-nav">
         <li><a class="waves-effect waves-orange" href="<?php echo "$link_welcome"?>"onclick="<?php echo "$click_welcome"?>">Welcome</a></li>
         <li><a class="waves-effect waves-light" href="<?php echo "$link_aboutme"?>"onclick="<?php echo "$click_aboutme"?>">About Me</a></li>
         <li><a class="waves-effect waves-purple" href="<?php echo "$link_styTch"?>"onclick="<?php echo "$click_styTch"?>">Stay in Touch</a></li>
         <li><a class="waves-effect waves-green" href="<?php echo "$link_writings"?>"onclick="<?php echo "$click_writings"?>">My Writings</a></li>
         <li><a class="waves-effect waves-yellow" href="<?php echo "$link_addgames"?>"onclick="<?php echo "$click_addgames"?>">Add me in Games</a></li>
         <li><a class="waves-effect waves-red" href="<?php echo "$link_vdos"?>"onclick="<?php echo "$click_vdos"?>">Videos</a></li>
         <li><a class="waves-effect waves-green" href="<?php echo "$link_fvdos"?>"onclick="<?php echo "$click_fvdos"?>">Fuchhey</a></li>
         <li><a class="waves-effect waves-red" href="<?php echo "$link_prjcts"?>"onclick="<?php echo "$click_prjcts"?>">My Projects</a></li>
		 <li><a class="waves-effect waves-green" href="<?php echo "$link_notes"?>"onclick="<?php echo "$click_notes"?>">Notes</a></li>
         <li><a class="waves-effect waves-teal" href="https://www.google.com/search?q=Hasil+Paudyal" target="_blank">Me on Google</a></li>
      </ul>
	 <a href="#" data-activates="slide-out" class="button-collapse"><i class="mdi-navigation fontsize">Menu</i></a> 
   </nav>
</div>