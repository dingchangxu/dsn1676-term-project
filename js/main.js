var $boxShow = $('.toggle');
var $box = $('.box');

$boxShow.on('click', function () {
    $box.toggleClass('box-show');
});