$(".button-collapse").sideNav();
$("#myform").submit(function() {
  if (
    parseFloat(document.getElementById("mxtempr").value) <
    parseFloat(document.getElementById("mntempr").value)
  ) {
    alert("Max Temperature has to be greater than Min Temperature");
    return false;
  }
  if (
    parseFloat(document.getElementById("mxvtg").value) <
    parseFloat(document.getElementById("mnvtg").value)
  ) {
    alert("Max Voltage has to be greater than Min Voltage");
    return false;
  }
  if (
    parseFloat(document.getElementById("mxcrt").value) <
    parseFloat(document.getElementById("mncrt").value)
  ) {
    alert("Max Current has to be greater than Min Current");
    return false;
  }
  if (
    parseFloat(document.getElementById("mxspd").value) <
    parseFloat(document.getElementById("mnspd").value)
  ) {
    alert("Max Speed has to be greater than Min Speed");
    return false;
  } else {
    return true;
  }
});
function loadDefault() {
  document.getElementById("mxtempr").value = "45";
  document.getElementById("mntempr").value = "25";
  document.getElementById("mxvtg").value = "1.5";
  document.getElementById("mnvtg").value = "1.2";
  document.getElementById("mxcrt").value = "200";
  document.getElementById("mncrt").value = "100";
  document.getElementById("mxspd").value = "1100";
  document.getElementById("mnspd").value = "900";
}
function eraseDefault() {
  document.getElementById("mxtempr").value = null;
  document.getElementById("mntempr").value = null;
  document.getElementById("mxvtg").value = null;
  document.getElementById("mnvtg").value = null;
  document.getElementById("mxcrt").value = null;
  document.getElementById("mncrt").value = null;
  document.getElementById("mxspd").value = null;
  document.getElementById("mnspd").value = null;
}
