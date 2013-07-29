opera.isReady(function(){
var oexOutlookOpera = window["oexOutlookOpera"] = function() {
  window.addEventListener('DOMNodeInserted', function() {
    var temp = document.getElementById("MainContent");
    if (temp != null) {
      temp.style.right = "0px";
    }
	var temp = document.getElementById("uxp_ftr_control");
	temp = temp.parentNode;
    if (temp != null) {
      temp.style.right = "0px";
    }
  }, false);
}();
});
