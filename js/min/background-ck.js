$(document).ready(function(){function e(){$("#menu").toggleClass("is-visible"),$("#menu-screen").toggleClass("is-visible")}function a(){var e=new Date;e=e.getDate()+"/"+(e.getMonth()+1)+"/"+e.getFullYear();var a;if(null===localStorage.getItem(e)){localStorage.clear();var t=new Image;t.crossOrigin="",t.src="https://unsplash.it/1920/1080/?random",t.onload=function(){var l=document.createElement("canvas");l.width=1920,l.height=1080,document.body.appendChild(l);var o=l.getContext("2d");o.drawImage(t,0,0),a=l.toDataURL("image/jpeg"),localStorage.setItem(e,a),$("body").css("background-image","url("+a+")")}}else a=localStorage.getItem(e),$("body").css("background-image","url("+a+")")}a(),$("#change-wallpaper").click(function(t){localStorage.clear(),$("body").removeAttr("style"),a(),e(),t.preventDefault()})});