// ==UserScript==
// @name        jolla blog new comment
// @namespace   *
// @include     https://blog.jolla.com/*
// @version     1
// @grant       GM_getValue
// @grant       GM_setValue
// ==/UserScript==


var key = window.location.pathname + "---" + "latestComment";

var latestComment = GM_getValue(key, 0);
var newLatestComment = latestComment;

var a = document.getElementById('comment-wrap');
var b = a.getElementsByTagName('article');

for(i = 0; i < b.length; i++)
{
  var c = b[i].getElementsByClassName('comment_date')[0];
  var d = c.textContent.trim().replace("on ", "").replace(" at", "");
  var e = Date.parse(d);

  if (e > newLatestComment)
  {
      newLatestComment = e;
  }
  
  if (e > latestComment)
  {
     //var t = document.createTextNode("NEW");
     //c.parentNode.appendChild(t);
     c.parentNode.parentNode.style.backgroundColor = '#ff6666'
  }
}

GM_setValue(key, newLatestComment);
