// ==UserScript==
// @include http://*.mail.live.com/*
// @include https://*.mail.live.com/*
// ==/UserScript==

var oexOutlookOpera = function()
{
	//jsDOMTools v0.1
	//author: Francesco De Domenico
	//website: https://github.com/frankdd89/jsDOMTools
	function removeElementByID(b){var a=document.getElementById(b);if(a!=null){a.parentNode.removeChild(a)}}function getElementByClassName(d,e){var b=document.getElementsByTagName(d);if(b!=null){for(var c=0,a=b.length;c<a;c++){if(b[c].getAttribute("class")==e){return b[c]}}}return null}function removeElementByClassName(d,e){var b=document.getElementsByTagName(d);if(b!=null){for(var c=0,a=b.length;c<a;c++){if(b[c].getAttribute("class")==e){b[c].parentNode.removeChild(b[c])}}}}function hideElementByClassName(d,e){var b=document.getElementsByTagName(d);if(b!=null){for(var c=0,a=b.length;c<a;c++){if(b[c].getAttribute("class")==e){b[c].style.visibility="hidden"}}}};
		//objects to have a style change
		var elements = new Array(
				"Reply",
				"DeleteMessages",
				"MarkAsJunk",
				"MarkAsNotJunk",
				"CleanUp",
				"MoveTo",
				"Categorize",
				"EmptyFolderButton",
				"Archive",
				"NewMessage"
				);
	  window.addEventListener('DOMContentLoaded', function()
	  {
		//the ... button
		var more = getElementByClassName("a","c_cmorel uxfa_ml c_ml");
		var footer = getElementByClassName("div","FooterContainer");
		if(footer!=null){
			footer.style.right = "0px";
	   }
	   var temp = document.getElementById("MainContent");
	   if(temp!=null){
			temp.style.right = "0px";
	   }
	   temp = null;
	   var temp = document.getElementById("RightRailContainer");
	   if(temp!=null){
			temp.style.visibility = "hidden";
	   }
		for (var i=0; i<elements.length; i++){
			temp = document.getElementById(elements[i]);
			if(temp != null){
				temp.style.lineHeight="43px";
				temp=null;
			}
		}
		if(more!=null)
			more.style.lineHeight="43px";
	  },false);
  
}();

