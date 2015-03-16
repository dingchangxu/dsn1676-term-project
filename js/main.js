var $btnShow = $('.btn-show');
var $box1 = $('.box1');



$btnShow.on('click', function () {
    $box1.toggleClass('js-btn-show');
});