$(document).ready(function(){$(".parallax-layer").parallax({mouseport:$(".jumbotron")}),$(".plans_slider").cycle({fx:"fade",pager:"#nav",timeout:4e3,next:".p_next",prev:".p_prev"}),$(".promo-slider").cycle({fx:"fade",timeout:3e3,pager:"#content-block-9__nav"}),$("a.header-navigation__link").click(function(e){var n=$(this).attr("href"),o=$(n).offset().top;$("html, body").animate({scrollTop:o},1e3),e.preventDefault()});var e=$("form"),n={init:function(){this.listeners()},listeners:function(){e.on("submit",n.submitForm),e.on("keydown","input, textarea",n.removeError)},submitForm:function(e){var o=$(this),t=o.find('button[type="submit"]');return n.validateForm(o)===!1?(e.preventDefault(),!1):void t.attr("disabled","disabled")},validateForm:function(e){var n=e.find("input:not(.novalid), textarea:not(.novalid)"),o=!0;return $.each(n,function(e,n){var t=$(n),a=t.val();0===a.length?(t.parent().addClass("has-error").removeClass("has-success"),o=!1):t.parent().addClass("has-success").removeClass("has-error")}),o},removeError:function(){$(this).removeClass("has-error")}};n.init(),$(window).on("scroll",function(){var e=$(window).scrollTop();console.log(e),e>=500&&$(".content-block-1").addClass("fadeInUp"),e>=1300&&($(".title--content-block-2").addClass("fadeInUp"),$(".content-block-2__logo").addClass("fadeInUp")),e>=1500&&$(".content-block-3").addClass("fadeInUp"),e>=1700&&$(".content-block-4").addClass("fadeInUp"),e>=2300&&($(".content-block-5__picture").addClass("fadeInLeft"),$(".content-block-5__lists").addClass("fadeInRight")),e>=3100&&$(".title--content-block-6").addClass("fadeInUp"),e>=3300&&$(".content-block-7").addClass("fadeInUp")}),$(function(){function e(){var e=new google.maps.LatLng(41.717213,44.788041),o={center:e,zoom:17,scrollwheel:!1,mapTypeId:google.maps.MapTypeId.ROADMAP};n=new google.maps.Map(document.getElementById("map"),o);var t=new google.maps.Marker({position:e,icon:image}),a=new google.maps.InfoWindow({content:"point1"});t.setMap(n),a.open(n,t),google.maps.event.addListener(t,"click",function(){a.open(n,t)})}var n;image=new google.maps.MarkerImage("img/map-point1@2x.png",null,null,null,new google.maps.Size(24,44)),document.getElementById("map")&&(google.maps.event.addDomListener(window,"load",e),google.maps.event.addDomListener(window,"resize",function(){var e=n.getCenter();google.maps.event.trigger(n,"resize"),n.setCenter(e)}))}),$(function(){function e(){var e=new google.maps.LatLng(41.717213,44.788041),o={center:e,zoom:17,scrollwheel:!1,mapTypeId:google.maps.MapTypeId.ROADMAP};n=new google.maps.Map(document.getElementById("footer__map"),o);var t=new google.maps.Marker({position:e,icon:image}),a=new google.maps.InfoWindow({content:"point1"});t.setMap(n),a.open(n,t),google.maps.event.addListener(t,"click",function(){a.open(n,t)})}var n;image=new google.maps.MarkerImage("img/map-point1@2x.png",null,null,null,new google.maps.Size(24,44)),document.getElementById("footer__map")&&(google.maps.event.addDomListener(window,"load",e),google.maps.event.addDomListener(window,"resize",function(){var e=n.getCenter();google.maps.event.trigger(n,"resize"),n.setCenter(e)}))})});