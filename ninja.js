//要素の幅をアラート
// $(function () {
//   alert('横幅は' + $('.box').width() + 'です！');
// });
// カラーピッカーで取得した色を反映させよう
// $(function(){
//     $('#color-change').on("change", function(){
//       let select_color = $(this).val();
//       $('.title').css('color', select_color);
//     });
//   });
// それぞれの要素の高さを合わせる
// $(function () {
//   let max_li = 0;
//   $('li').each(function (index, el) {
//     if (max_li < $(el).height()) {
//       max_li = $(el).height();
//     }
//   });
//   $('li').height(max_li);
//   alert('縦幅は' + $('li').height() + 'です！');
// });
// クリックした番目をアラート
// $(function () {
//   $('li').on('click', function () {
//     alert($('li').index(this) + 1);
//   });
// });
// 誕生日なら祝う
// $(function () {
//   const birthday = '1990-01-25'; //ここはご自分の誕生日にする
//   $('#birthday').on('change', function () {
//     if ($(this).val() == birthday) {
//       $('h1').fadeIn();
//     }
//   });
// });
// 引数を入れて文字連結
// function naruhodo(text) {
//   return 'なるほど！' + text + 'なんですね！';
// }
// alert(naruhodo('テレビ'));
//色を取得して赤なら青に
// $(function () {
//   $('li').on('click', function () {
//     if ($(this).css('background-color') == 'rgb(255, 0, 0)') {
//       $(this).css('background-color', 'rgb(0, 0, 255)');
//     }
//   });
// });
// 引数が整数ならアラート
function ninja(target) {
  if (Number.isInteger(target)) {
    alert('this is integer');
  }
}
ninja(2);
