// 検索窓にアニメーション
// $(function () {
//   $('input').focusin(function () {
//     $(this).attr('placeholder', 'キーワードを入力');
//   });
//   $('input').focusout(function () {
//     $(this).attr('placeholder', 'ここで検索');
//   });
// });

// 選択済みの要素の色を変更
// // jQueryのドキュメントレディイベント。ドキュメントが完全に読み込まれて準備ができたときに実行される関数
// $(function () {
//   $('select').change(function () {
//     var a = $('select option:selected').val(),
//       // bの値はクラス名
//       b = '.' + a;
//     $('.box').find(b).css('background-color', '#aaaaaa');
//     // $('.box p').not(b).css('background-color', '#dddddd'); は、.boxクラスを持つ要素の中のp要素で、b
//     // （つまり、選択されたオプションの値に対応するクラス）を持たない要素すべての背景色を#ddddddに設定します。
//     $('.box p').not(b).css('background-color', '#dddddd');
//   });
// });

// // childrenとfindを使い分けよう
// $(function () {
//   $('.box').find('div').css('background-color', 'blue');
//   //   childrenメソッドは、指定した要素の直接の子要素のみを対象とします。
//   $('.box').children('div').css('background-color', 'red');
// });

// アコーディオン作成
// $(function () {
//   $('.answer').hide();
//   $('.box .question').click(function () {
//     // クリックされた質問（this）の次の要素（つまり、対応する回答）の表示状態を切り替えます。
//     // slideToggleメソッドは、要素が表示されていれば非表示にし、非表示であれば表示します。
//     $(this).next().slideToggle();
//   });
// });

// // hoverで説明を表示しよう！
// $(function () {
//     $(".description").hide();
// マウスがホーバーした時に実行される関数
//     $(".box").hover(function () {
//       $(".description").fadeToggle();
//     });
//   });

// // 昇順に並べる
// $(function () {
//   $('button').click(function () {
//     var num1 = parseInt($('#1').val()),
//       num2 = parseInt($('#2').val()),
//       num3 = parseInt($('#3').val()),
//       numbers = [num1, num2, num3],
//       numberLength = $('input[type="number"]').length;
//     for (var i = 0; i < numberLength; i++) {
//       for (var k = i + 1; k < numberLength; k++) {
//         if (numbers[i] > numbers[k]) {
//           var save = numbers[i];
//           numbers[i] = numbers[k];
//           numbers[k] = save;
//         }
//       }
//     }
//     $('.box').text(numbers[0] + ',' + numbers[1] + ',' + numbers[2]);
//   });
// });

// // メールアドレスのバリデーション。@があるかどうかの判断
// $(function () {
//   var $error = $('.error');
//   $error.hide();
//   $('input').change(function () {
//     $error.hide();
//     var a = $('input').val().indexOf('@');
//     console.log(a);
//     if (a === -1) {
//       $error.show();
//     }
//   });
// });
