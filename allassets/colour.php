<?php
/*
to fix the theme colour just set a cookie named theme_colour with hex value without #

eg:
theme_colour = FFFFFF
				not #FFFFFF
				
The cookie setting can be done by using function setcookie in php;
but imploy js method for achieving better flow
*/
if(isset($_COOKIE["theme_colour"]))
{
    $design = $_COOKIE["theme_colour"];
}

// if random theme is required, invoke set_theme_colour(random)
// refer cookie.js file's function set_theme_colour(hexCode)

else // no cookie found so generate a random string
{
function random_color_part() {
    return str_pad( dechex( mt_rand( 0, 255 ) ), 2, '0', STR_PAD_LEFT);
}
function random_color() {
    return random_color_part() . random_color_part() . random_color_part();
}
   $design = random_color();
}
?>