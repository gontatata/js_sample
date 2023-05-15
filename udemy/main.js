let count = 30;

// console.log("'");

// jsではキャメルケースが一般的
let tomatoCount = 0;

// オブジェクトはキーとバリューがたくさん並んでる
const coffee = {
  name: 'mocha',
  isHot: true,
  size: 350,
  nutritions: {
    calories: 430,
    sugars: 53,
  },
  aaaa: {},
};
// オブジェクトは. で出てくる。
console.log(coffee.size);
coffee.isHot = false;
console.log(coffee.isHot);
// 新しいキーを追加もできる
coffee.barista = 'kengo';
console.log(coffee);
