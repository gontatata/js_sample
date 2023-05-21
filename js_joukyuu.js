// liタグの横幅を足してみよう
// $(function () {
//   let li_total = 0;
//   $('li').each(function (index, el) {
//     if (index !== 2) {
//       li_total += $(el).width();
//     }
//   });
//   $('.anser').text(li_total);
// });

// 配列から二桁の要素だけ抜き出そう
// let ninja=[2,34,561,5,14]
// 配列から何かしらの条件で絞った配列を作る場合にはfilterを使います
// let futaketa=ninja.filter((item) => {
//     return String(item).length == 2;
//    });
// alert(futaketa);

// 配列が全て数値かを判断しよう
// const ninja = [5, '6', 3];
// const judge = ninja.every((item) => {
//   // 各々の値がnumber(整数)かどうかの真偽地を返す
//   console.log(typeof item);
//   return typeof item == 'number';
// });
// alert(judge);

// // 文字数をカウントする関数を作ろう;
// function ninja(str) {
//   if (str.length >= 5) {
//     return true;
//   }
//   return false;
//   //   return str.length >= 5 ? true: false;
// }
// alert(ninja('aaaa'));

// // 配列に含まれているかを判断する関数を作ろう;
// const fruit = ['りんご', 'みかん', 'バナナ'];
// function judge(str) {
//   return fruit.indexOf(str) >= 0 ? true : false;
// }

// alert(judge('みかん'));

// // 配列を結合する関数を作ろう
// const my_array = ['忍者', 'CO', 'DE'];
// // const my_array = [3, 2, 1];

// function ninja(my_array) {
//   let res = null;

//   const array_string = my_array.every((item) => {
//     return typeof item == 'string';
//   });

//   if (array_string) {
//     res = my_array.join('');
//   } else {
//     // reduceメソッドは、配列の各要素に対して指定されたコールバック関数を適用し、単一の値にまとめるために使用されます。このコードでは、与えられたコールバック関数
//     // は2つの引数 p（累積値）と c（現在の要素）を受け取り、それらを合計した結果を返します。
//     res = my_array.reduce(function (p, c) {
//       return p + c;
//     });
//   }
//   return res;
// }
// alert(ninja(my_array));
