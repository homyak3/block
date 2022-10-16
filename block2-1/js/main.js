
$(".product_sliderPhoto")
    .mouseover(function(e) {
    let modal = $('#mainPhoto');
    modal.css('top', (window.innerHeight = modal.height(500)));
    modal.css('left', (window.innerHeight = modal.width(400)));
    modal.css('background', $(e.target).css('background'));
    modal.show(); 
    })