// ==UserScript==
// @name        jolla blog new comment
// @namespace   *
// @include     https://blog.jolla.com/*
// @version     1
// @grant       GM_getValue
// @grant       GM_setValue
// ==/UserScript==


var key = window.location.pathname + "---" + "lastVisit";

var lastVisit = GM_getValue(key, 0);
var now = new Date().getTime();

var a = document.getElementById('comment-wrap');
var b = a.getElementsByTagName('article');

for(i = 0; i < b.length; i++)
{
  var c = b[i].getElementsByClassName('comment_date')[0];
  var d = c.textContent.trim().replace("on ", "").replace(" at", "");
  var e = Date.parse(d);
  if (e > lastVisit)
  {
     var t = document.createTextNode("NEW");
     c.parentNode.appendChild(t);
     c.parentNode.parentNode.style.backgroundColor = '#ff6666'
  }
}

GM_setValue(key, now);
