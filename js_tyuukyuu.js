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
// function ninja(target) {
//   if (Number.isInteger(target)) {
//     alert('this is integer');
//   }
// }
// ninja(2);

// 文字数カウント
// let ninja = 'ninjacode';
// alert(ninja.length);

// 今日の月をアラート
// let now = new Date();
// let now_month = now.getMonth() + 1;
// function month_jungle(month) {
//   if (now_month == month) {
//     alert('今月の月です');
//   } else {
//     alert('今月の月でないです');
//   }
// }

// month_jungle(5);

// 配列の末尾を取る
// let ninja = [];
// ninja = [1, 3, 5, 7];
// ninja.pop();
// alert(ninja);

// 特定文字列が含まれているか
// let target_str = 'ninjacode';
// function ninja_judge(str) {
//   if (str.indexOf(target_str) != -1) {
//     alert('include');
//   }
// }

// ninja_judge('11ninjacode1');
// indexOf:みつからなければ-1を返す

// 整数型にする
// let ninja = '１０';
// ninja = Number(ninja);
// alert(typeof ninja);

// 大文字にする
// function my_uppercase( str ){
//     alert( str.toUpperCase() );
//    }
//    my_uppercase( "ninjacode" );

// 最大値取得
// const my_array = [2, 19, 59, 203, 5];
// alert(Math.max(...my_array));

// cloneのクラスを持つhtmlをクリックすればliが複製
// $(function () {
//   $('.clone').on('click', function () {
//     let li_clone = $('li').eq(0).clone();
//     $('ul').append(li_clone);
//   });
// });

// フォーカスしたら文字を表示しよう
// $(function () {
//     ユーザーがマウスクリックやキーボードの Tab キーなどで要素を選択し、その要素がアクティブになると、focus イベントがトリガーされます。
//   $('input').focus(function () {
//     $('.anser').text($(this).val());
//   });
// });

// 横スクロール値を取得しよう
// $(function () {
//     scroll イベントを監視し、スクロールが発生した時に実行するコードを指定しています。
//   $('.x-scroll').on('scroll', function () {
//     $(this) は、イベントが発生した要素（.x-scroll）を参照します。
//     let scroll_val = $(this).scrollLeft();
//     $('.scroll-val').text(scroll_val);
//   });
// });

// li要素の最後を削除
// $(function () {
//   $('.delete').on('click', function () {
//     // let li_delete = $('li').eq(0).clone();
//     $('ul li:last-child').remove();
//   });
// });

// 要素から属性を取り除く
// $(function () {
//     // $('[data-delete]') は、data-delete 属性を持つすべての要素を選択します。
//   $('[data-delete]').on('click', function () {
//     // クリックされた要素の data-delete 属性の値を取得
//     let my_attr = $(this).attr('data-delete');
//     // [data-delete-target]属性を持つ全ての要素にmy-attrの属性に空の値を設定
//     $('[data-delete-target]').attr(my_attr, '');
//   });
// });

// 「scrollしたら」を設定しよう
// $(function(){
//     $(window).on('scroll', function(){
//      $('.scroll-val').text($(this).scrollTop());
//     });
//    });

// 要素内の最後に要素を挿入しよう
// クラス名への操作には.をつける。
// $(function () {
//   $('.add').on('click', function () {
//     $('.val').append($('input').val());
//   });
// });

// ダブルクリックでアラート;
// $(function () {
//   $('.double').on('dblclick', function () {
//     alert('double click');
//   });
// });

// 入力値が変わったら表示しよう
// $(function () {
//   $('input').on('change', function () {
//     $('.val').text($('this').val());
//   });
// });

// リサイズされたら横幅を取得しよう;
// $(function () {
//   $(window).on('resize', function () {
//     $('.val').text($(this).width());
//   });
// });
// keyがupしたら値を取得しよう;
// $(function () {
//     // keyを押してあげた時に反映。リアルタイムのある入力反映
//   $('input').on('keyup', function () {
//     $('.val').text($(this).val());
//   });
// });
