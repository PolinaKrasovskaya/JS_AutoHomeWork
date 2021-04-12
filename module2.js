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


//21
// Напиши функцию findLongestWord(string) 
// которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string)
// и возвращает самое длинное слово в этой строке.

//ВАРИАНТ 1
function findLongestWord(string) {
  // Пиши код ниже этой строки
let biggest = string.split(' ')[0];

  for (let i = 0; i < string.split(' ').length; i += 1) {
    if (biggest.length < string.split(' ')[i].length) {
      biggest = string.split(' ')[i];
    }
  }
  return biggest;
  
  
  //ВАРИАНТ 2
  function findLongestWord(string) {
  // Пиши код ниже этой строки

  const words = string.split(' ');
  let biggest = words[0];

  for (let i = 1; i < words.length; i += 1) {
    if (words[i].length > biggest.length) {
      biggest = words[i];
    }
  }
  return biggest;

  }
console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWord('Google do a roll'));
console.log(findLongestWord('May the force be with you'));
  
  
//   //22
//   Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала массив всех целых чисел от значения min до max.
  
  function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Пиши код ниже этой строки
  for (let i = min; i <= max; i += 1) {
    numbers.push(i);
  }
  // Пиши код выше этой строки
  return numbers;
}
  
  //23
//   Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) 
//   и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).
  function filterArray(numbers, value) {
  // Пиши код ниже этой строки
  
 const newArray = [];

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > value) {
   newArray.push(numbers[i]);
    }
 
  }
 
  return newArray;

  // Пиши код выше этой строки
}
  
  
  //24
//   Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), и проверяет есть ли такой фрукт в массиве fruits.
function checkFruit(fruit) {
  const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

  return fruits.includes(fruit); // Дополни эту строку
}
  
  //25
//   Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.
// Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. они присутствуют 
//   в обоих исходных массивах. А числа 0, 1 и 8 присутствуют только в одном из массивов.
// Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в 
//   параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.
  
  function getCommonElements(array1, array2) {
  // Пиши код ниже этой строки

const newArray = [];
  for (const element of array1) {
    if (array2.includes(element)) {
     newArray.push(element)
   }
 }
  return newArray;
  
  // Пиши код выше этой строки
}
  
  
  //26
//   Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.
 function calculateTotalPrice(order) {
  let total = 0;
  // Пиши код ниже этой строки

  for (const position of order){
    total += position
  }
  // Пиши код выше этой строки
  return total;
} 
  
  
  //27
//   Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.
  function filterArray(numbers, value) {
  // Пиши код ниже этой строки
  const filteredNumbers = [];
  
  for (const number of numbers) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
  // Пиши код выше этой строки
}
  
  //28
//   Дополни выражения остатка от деления так, чтобы код проходил тесты.
//   Объявлена переменная a.
// Значение переменной a это число 0.
// Объявлена переменная b.
// Значение переменной b это число 1.
// Объявлена переменная c.
// Значение переменной c это число 3.
// Объявлена переменная d.
// Значение переменной d это число 5.
// Объявлена переменная e.
// Значение переменной e это число 2.
  const a = 3 % 3;
const b = 4 % 3;
const c = 11 % 8;
const d = 12 % 7;
const e = 8 % 6;
  
  //29
//   Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех 
//   чётных чисел от start до end. Чётным считается число которое делится на 2 без остатка.
  
  function getEvenNumbers(start, end) {
    // Пиши код ниже этой строки

  const arrayEven = [];
  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      arrayEven.push(i);
    }
  }
    return arrayEven;
    
    // Пиши код выше этой строки
  }
  
  //30
//   Дополни код так, чтобы в переменную number записывалось первое число от start до end, которое делится на 5 без остатка.
  const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
      break;
  }
}
  
  //31
//   Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:

// возвращала первое число от start до end, которое делится на divisor без остатка;
// не использовала оператор break;
// не использовала переменную number.
  function findNumber(start, end, divisor) {
  // Пиши код ниже этой строки
 

  for (let i = start; i < end; i += 1) {
    console.log(i);
    
    if (i % divisor === 0) {
      number = i;
      return i;
    }
  }

  // Пиши код выше этой строки
}
  
  //32
//   Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива 
//   массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая 
//   true если есть и false в противном случае.
//   При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).
  
  function includes(array, value) {
  // Пиши код ниже этой строки

  for (let arr of array) {
    if (arr === value) {
      return true;
    }
}
  return false;
  
  // Пиши код выше этой строки
}
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
