//フェードアニメーション
$(function() {
$('.fadeindown').one('inview', function(event, isInView) {
    if (isInView) {
    //表示領域に入った時
      $(this).addClass('fadeInDown');
    } else {
    //表示領域から出た時
      $(this).removeClass('fadeInDown');
    }
  });
  });