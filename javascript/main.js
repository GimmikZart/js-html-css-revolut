
// ricreo la funzionalità dei multi dropdown sulle varie voci di menù, su viewport largo;

// ricreo anche la funzionalità di menù hamburger a viewport più piccoli;

// $(".nav-item").siblings().toggle();



$(document).ready(function() {

  alert($(".drop").siblings().length);

  $(".nav-item").mouseenter(
    function(){
      $(".drop").siblings().toggle();
    }
  )
    
});
