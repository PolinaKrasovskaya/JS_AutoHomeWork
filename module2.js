//11.
// Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.

// Объявлена функция calculateEngravingPrice(message, pricePerWord). Эта функция принимает строку, состоящую из слов разделённых только пробелами (параметр message) и цену гравировки одного слова (параметр pricePerWord).

// Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.
function calculateEngravingPrice(message, pricePerWord) {
  // Пиши код ниже этой строки

return message.split(' ').length*pricePerWord;

  // Пиши код выше этой строки
}

//12.
// Дополни код функции makeStringFromArray(array, delimeter) так, чтобы она возвращала в переменной string результат соединения элементов массива array c разделителем delimeter - строку.
function makeStringFromArray(array, delimeter) {
  let string;
  // Пиши код ниже этой строки
 
 string = array.join(delimeter);
 
  // Пиши код выше этой строки
  return string;
}

//13.
// Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.

// Значением параметра title будут строки, слова которых разделены только пробелами.
// Все символы slug должны быть в нижнем регистре.
// Все слова slug должна быть разделены тире.
function slugify(title) {
  // Пиши код ниже этой строки
 
  return title.toLowerCase().split(' ').join('-');

  // Пиши код выше этой строки
}

//14
// Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.

// firstTwoEls - массив из первых двух элементов.
// nonExtremeEls - массив из всех элементов кроме первого и последнего.
// lastThreeEls - массив из трёх последних элементов.
const fruits = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];
// Пиши код ниже этой строки
const firstTwoEls = fruits.slice(0,2);
const nonExtremeEls = fruits.slice(1, -1);
const lastThreeEls = fruits.slice(-3);

//15
// Дополни код так, чтобы в переменной allClients получился массив всех элементов массивов oldClients и newClients.
const oldClients = ['Манго', 'Аякс', 'Поли', 'Киви'];
const newClients = ['Персик', 'Хьюстон'];

const allClients = oldClients.concat(newClients); // Дополни эту строку


//16
// Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray. Параметр maxLength содержит максимально допустимую длину нового массива.

// Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов.

// В противном случае функция должна вернуть новый массив целиком.
function makeArray(firstArray, secondArray, maxLength) {
    // Пиши код ниже этой строки
  
return firstArray.concat(secondArray).slice(0, maxLength);
    
    // Пиши код выше этой строки
  }

//17
// Дополни цикл for так, чтобы он логировал все целые числа в диапазоне от start до end включительно.
const start = 3;
const end = 7;

for (let i = start; i <= end; i += 1) { // Дополни эту строку
  console.log(i);
}

//18
// Напиши функцию calculateTotal(number), которая принимает целое число (параметр number) и возвращает сумму всех целых чисел от единицы и до этого числа. Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.
function calculateTotal(number) {
  // Пиши код ниже этой строки
  
let sum = 0;
  for (let i = 0; i <= number; i += 1) {
    sum += i;
  }
  return sum

  // Пиши код выше этой строки
}



// 19
// Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits.
const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

for (let i = 0; i < fruits.length; i += 1) { // Дополни эту строку
  const fruit = fruits[i]; // Дополни эту строку
  console.log(fruit);
}


// 20
// Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов. 
// Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.
function calculateTotalPrice(order) {
  let total = 0;
  // Пиши код ниже этой строки
for (let i = 0; i <+ order.length; i += 1) {
  total += order[i];
}
  // Пиши код выше этой строки
  return total;
}



