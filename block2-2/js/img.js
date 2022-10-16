$(document).ready(function(){
   $("a.url").hover(function() {
    $("a.url img").animate({width:"150px", height:"150px"}, 700);
    },
    function(){
     $(".url img").animate({width:"100px", height:"100px"}, 1400);
    }
  );
});
