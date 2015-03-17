var $btnShow1 = $('.btn-show1');
var $btnShow2 = $('.btn-show2');
var $btnShow3 = $('.btn-show3');
var $btnShow4 = $('.btn-show4');
var $box1 = $('.box1');
var $box2 = $('.box2');
var $box3 = $('.box3');
var $box4 = $('.box4');


$btnShow1.on('click', function () {
    $box1.toggleClass('js-btn-show1');
});

$btnShow2.on('click', function () {
    $box2.toggleClass('js-btn-show2');
});

$btnShow3.on('click', function () {
    $box3.toggleClass('js-btn-show3');
});

$btnShow4.on('click', function () {
    $box4.toggleClass('js-btn-show4');
});