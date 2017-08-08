<html>
   <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/css/materialize.min.css">
   </head>
   <body>
   <div class="container">
      <button class="btn blue waves-effect waves-green" onClick="cookie_lang('en')">English</button>
      <button class="btn blue waves-effect waves-green" onClick="cookie_lang('np')">Nepali</button>
      <button class="btn blue waves-effect waves-green" onClick="cookie_lang('in_hi')">Hindi</button>
      <button class="btn blue waves-effect waves-green" onClick="cookie_lang('in_ta')">Tamil</button>
      <button class="btn blue waves-effect waves-green" onClick="cookie_lang('in_tel')">Telugu</button>
      <button class="btn blue waves-effect waves-green" onClick="cookie_lang('in_urd')">Urdu</button>
      <button class="btn blue waves-effect waves-green" onClick="cookie_lang('in_ben')">Bengali</button>
      <button class="btn blue waves-effect waves-green" onClick="cookie_lang('arb')">Arabic</button>
      <button class="btn blue waves-effect waves-green" onClick="cookie_lang('grmn')">German</button>
      <button class="btn blue waves-effect waves-green" onClick="cookie_lang('frn')">French</button>
      <button class="btn blue waves-effect waves-green" onClick="cookie_lang('spsh')">Spanish</button>
      <button class="btn blue waves-effect waves-green" onClick="cookie_lang('ita')">Italian</button>
      <button class="btn blue waves-effect waves-green" onClick="cookie_lang('dth')">Dutch</button>
      <button class="btn blue waves-effect waves-green" onClick="cookie_lang('trk')">Turkish</button>
      <button class="btn blue waves-effect waves-green" onClick="cookie_lang('pol')">Polish</button>
      <button class="btn blue waves-effect waves-green" onClick="cookie_lang('grk')">Greek</button>
      <button class="btn blue waves-effect waves-green" onClick="cookie_lang('pro')">Portugese</button>
      <button class="btn blue waves-effect waves-green" onClick="cookie_lang('cro')">Croatian</button>
      <button class="btn blue waves-effect waves-green" onClick="cookie_lang('alb')">Albanian</button>
      <button class="btn blue waves-effect waves-green" onClick="cookie_lang('ser')">Serbian</button>
      <button class="btn blue waves-effect waves-green" onClick="cookie_lang('bug')">Bulgarian</button>
      <button class="btn blue waves-effect waves-green" onClick="cookie_lang('rom')">Romanian</button>
      <button class="btn blue waves-effect waves-green" onClick="cookie_lang('hun')">Hungarian</button>
      <button class="btn blue waves-effect waves-green" onClick="cookie_lang('nor')">Norwegian</button>
      <button class="btn blue waves-effect waves-green" onClick="cookie_lang('per')">Persian</button>
      <button class="btn blue waves-effect waves-green" onClick="cookie_lang('jpn')">Japanese</button>
      <button class="btn blue waves-effect waves-green" onClick="cookie_lang('vtn')">Vietnamese</button>
      <button class="btn blue waves-effect waves-green" onClick="cookie_lang('czh')">Czech</button>
	  <br>
	  <br>
      <input id="background-color" type="color" value="#ff0000" onchange="javascript:get_theme_colour(document.getElementById('background-color').value);">
      <button class="btn blue waves-effect waves-green" onClick="set_theme_colour('random')">Random Colour</button>
	  <br>
	  <br>
<?php if ($_COOKIE["lang"] == "np") echo "स्वागतम";
else if ($_COOKIE["lang"] == "in_hi") echo "स्वागत हे";
else if ($_COOKIE["lang"] == "in_ta") echo "வரவேற்பு";
else if ($_COOKIE["lang"] == "in_tel") echo "స్వాగత";
else if ($_COOKIE["lang"] == "in_urd") echo "خوش آمدید";
else if ($_COOKIE["lang"] == "in_ben") echo "স্বাগত";
else if ($_COOKIE["lang"] == "arb") echo "أهلا بك";
else if ($_COOKIE["lang"] == "grmn") echo "Herzlich Willkommen";
else if ($_COOKIE["lang"] == "frn") echo "Bienvenue";
else if ($_COOKIE["lang"] == "spsh") echo "Bienvenido";
else if ($_COOKIE["lang"] == "ita") echo "Benvenuto";
else if ($_COOKIE["lang"] == "dth") echo "Welkom";
else if ($_COOKIE["lang"] == "trk") echo "Hoşgeldiniz";
else if ($_COOKIE["lang"] == "pol") echo "Witamy";
else if ($_COOKIE["lang"] == "grk") echo "καλως ΗΡΘΑΤΕ";
else if ($_COOKIE["lang"] == "pro") echo "bem vinda";
else if ($_COOKIE["lang"] == "cro") echo "Dobrodošli";
else if ($_COOKIE["lang"] == "alb") echo "i mirëpritur";
else if ($_COOKIE["lang"] == "ser") echo "Добродошли";
else if ($_COOKIE["lang"] == "bug") echo "добре дошли";
else if ($_COOKIE["lang"] == "rom") echo "Bine ati venit";
else if ($_COOKIE["lang"] == "hun") echo "Üdvözöljük";
else if ($_COOKIE["lang"] == "nor") echo "Velkommen";
else if ($_COOKIE["lang"] == "per") echo "خوش آمدی";
else if ($_COOKIE["lang"] == "jpn") echo "ようこそ";
else if ($_COOKIE["lang"] == "vtn") echo "Chào mừng";
else if ($_COOKIE["lang"] == "czh") echo "Vítejte";
else echo "Welcome";?>
	  <br>
	  <br>
	  <center><p> Current language is set to: <?php echo $_COOKIE["lang"];?> </p>
	  <p> Current theme is set to: <?php echo $_COOKIE["theme_colour"];?> </p></center>
	  </div>
	  
      <script src="https://code.jquery.com/jquery-2.2.1.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/js/materialize.min.js"></script>
      <script src="/allassets/js/cookie.js"></script>
   </body>
</html>