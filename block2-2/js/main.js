$('.product__minus').click(function () {
     let $input = $(this).parent().find('#product_count');
     let count = parseInt($input.val()) - 1;
     count = count < 1 ? 1 : count;
     $input.val(count);
});
$('.product__plus').click(function () {
     let $input = $(this).parent().find('#product_count');
     $input.val(parseInt($input.val()) + 1);
});
$(".product_sliderPhoto")
    .mouseover(function(e) {
    let modal = $('#mainPhoto');
    modal.css('top', (window.innerHeight = modal.height(500)));
    modal.css('left', (window.innerHeight = modal.width(400)));
    modal.css('background', $(e.target).css('background'));
    modal.show(); 
    })