function cookie_lang(lang)
{
  var CookieDate = new Date();
  CookieDate.setFullYear(CookieDate.getFullYear() + 4); // expires in 4 years
  document.cookie =
    "lang=" + lang + "; expires=" + CookieDate.toGMTString() + "; path=/";
  window.location.reload(); // reloads the page
}


function get_theme_colour(hexCode) // theme colour has # character which is to be removed
{
hexCode = hexCode.slice(1,7);
set_theme_colour(hexCode);
}


// if random theme is required, invoke set_theme_colour(random)
function set_theme_colour(hexCode)
{
  if (hexCode == "random")
    document.cookie =
      "theme_colour=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  else
  {
    var CookieDate = new Date();
    CookieDate.setFullYear(CookieDate.getFullYear() + 4); // expires in 4 years
    document.cookie =
      "theme_colour=" +
      hexCode +
      "; expires=" +
      CookieDate.toGMTString() +
      "; path=/";
  }
      window.location.reload(); // reloads the page

}
