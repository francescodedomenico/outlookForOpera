// ==UserScript==
// @name        Better Outlook
// @namespace   https://dub002.mail.live.com
// @include     http://*.mail.live.com/*
// @include     https://*.mail.live.com/*
// @version     1
// ==/UserScript==

var oexOutlookOpera = function()
{
	//jsDOMTools v0.1
	//author: Francesco De Domenico
	//website: https://github.com/frankdd89/jsDOMTools
	function removeElementByID(b){var a=document.getElementById(b);if(a!=null){a.parentNode.removeChild(a)}}function getElementByClassName(d,e){var b=document.getElementsByTagName(d);if(b!=null){for(var c=0,a=b.length;c<a;c++){if(b[c].getAttribute("class")==e){return b[c]}}}return null}function removeElementByClassName(d,e){var b=document.getElementsByTagName(d);if(b!=null){for(var c=0,a=b.length;c<a;c++){if(b[c].getAttribute("class")==e){b[c].parentNode.removeChild(b[c])}}}}function hideElementByClassName(d,e){var b=document.getElementsByTagName(d);if(b!=null){for(var c=0,a=b.length;c<a;c++){if(b[c].getAttribute("class")==e){b[c].style.visibility="hidden"}}}};
	  window.addEventListener('DOMContentLoaded', function()
	  {
		//the ... button
		var more = getElementByClassName("a","c_cmorel uxfa_ml c_ml");
	   removeElementByID("RightRailContainer");
	   var temp = document.getElementById("MainContent");
	   if(temp!=null){
			temp.style.right = "0px";
	   }
	  },false);
  
}();