//Initialize collapse button
$(".button-collapse").sideNav();

//Initialize slider
$(document).ready(function (){
  $('.slider').slider();
  $('.modal').modal();
  $('.collapsible').collapsible();
  $('ul.tabs').tabs();
  $('#deutsch').hide();
  $('.carousel.carousel-slider').carousel({fullWidth: true});
  $('.button-collapse').sideNav();
});


function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

var items = document.querySelectorAll(".timeline li");

// code for the isElementInViewport function

function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      items[i].classList.add("in-view");
    }
  }
}

window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);

function changeLanguage () {
  if($('#espanol').is(":visible")){
    $('#espanol').hide();
    $('#deutsch').show();
    $('#heim-title').html("Unser Heim")
  } else {
    $('#deutsch').hide();
    $('#espanol').show();
    $('#heim-title').html("Nuestro Hogar")
  }

}
