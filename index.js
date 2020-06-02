var map1 = new Map();
var map2 = new Map();
var map3 = new Map();

var arrFirm = [];
var arrGoods = [];
var arrPrice = [];
var arrTime = [];


var obj_1 = new Object();
var obj_2 = new Object();
var obj_3 = new Object();
var obj_4 = new Object();


map1.set('Nike', 'Air Force');  // Назва виробник
map1.set('Adidas', 'Superstar');
map1.set('Puma', 'Astro');
map1.set('Reebok', 'Revenge');

map2.set(750, 'Nike');  // Цена виробник
map2.set(450, 'Adidas');
map2.set(1200, 'Puma');
map2.set(800, 'Reebok');

map3.set(2, 'Nike'); // Цена виробник
map3.set(4, 'Adidas');
map3.set(9, 'Puma');
map3.set(3, 'Reebok');

map1.forEach((value, key) => {
  arrGoods.push(value);
  arrFirm.push(key);
});

map2.forEach((value,key) => {
  arrPrice.push(key)
});

map3.forEach((value,key) => {
  arrTime.push(key)
});

function max(myArray) {
  var index = 0;
  var min = myArray[0];
  var max = min;
  for (i = 0; i < myArray.length; ++i) {
    if (myArray[i] > max) {
      max = myArray[i];
      index = i;
    }  
  }
  return index;
}
function min(myArray) {
  var index = 0;
  var min = myArray[0];
  for (i = 0; i < myArray.length; i++) {
    if (myArray[i] < min) {
      min = myArray[i];
      index = i;}
    
  }
  return index;
}
var min1 = min(arrPrice);
var min2 = min(arrTime);
var max1 = max(arrPrice);
var max2 = max(arrTime);

obj_1[arrGoods[min1]] = `Цена:${arrPrice[min1]}, Производитель: ${arrFirm[min1]}, Время доставки: ${arrTime[min1]}`;
obj_2[arrGoods[min2]] = `Цена:${arrPrice[min2]}, Производитель: ${arrFirm[min2]}, Время доставки: ${arrTime[min2]}`;
obj_3[arrGoods[max1]] = `Цена:${arrPrice[max1]}, Производитель:${arrFirm[max1]}, Время доставки: ${arrTime[max1]}`;
obj_4[arrGoods[max2]] = `Цена:${arrPrice[max2]}, Производитель: ${arrFirm[max2]}, Время доставки: ${arrTime[max2]}`;

console.log(obj_1);
console.log(obj_2);
console.log(obj_3);
console.log(obj_4);

