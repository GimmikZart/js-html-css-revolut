
// ricreo la funzionalità dei multi dropdown sulle varie voci di menù, su viewport largo;

// ricreo anche la funzionalità di menù hamburger a viewport più piccoli;

// $(".nav-item").siblings().toggle();


$(document).ready(function() {

  $(".nav-item").mouseenter(
    function(){
      $(this).children(".drop").toggle();
    }
  )
  $(".nav-item").mouseleave(
    function(){
      $(this).children(".drop").toggle();
    }
  )

});
