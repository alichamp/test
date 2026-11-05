
const multiplyArrow = (a, b) => a * b;
const isEven = (number) => number % 2 === 0;

console.log(multiplyArrow(3, 4));
console.log(isEven(4));
console.log(isEven(5));

function countVowels(str) {
  const vowels = "aeiouyаеёиоуыэюяAEIOUYАЕЁИОУЫЭЮЯ";
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("Hello World"));

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));

function factorial(n) {
  if (!Number.isInteger(n) || n < 0) {
    return "Введите неотрицательное целое число";
  }

  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

console.log(factorial(5));

function sumTo(n) {
  if (!Number.isInteger(n) || n < 0) {
    return "Введите неотрицательное целое число";
  }

  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

console.log(sumTo(5));

function createProduct(name, price) {
  return { name, price, currency: "сом" };
}

console.log(createProduct("Телефон", 20000));

const products = [
  { name: "Ноутбук", price: 45000, inStock: true },
  { name: "Мышь", price: 800, inStock: false },
  { name: "Клавиатура", price: 2500, inStock: true },
  { name: "Монитор", price: 15000, inStock: true },
  { name: "Наушники", price: 3200, inStock: false }
];

console.log(products.map(p => p.name));
console.log(products.filter(p => p.inStock));
console.log(products.find(p => p.price > 10000));
console.log(products.reduce((acc, p) => acc + p.price, 0));
console.log(products.some(p => p.price < 1000));
console.log(products.map(p => ({ name: p.name, price: p.price })));
console.log(products.every(p => p.price > 500));
console.log(products.findIndex(p => p.name === "Монитор"));
console.log([...products].sort((a, b) => a.price - b.price));
console.log(products.filter(p => p.inStock).length);
console.log(products.map(p => `${p.name} — ${p.price} сом`));
console.log(products.reduce((max, p) => p.price > max.price ? p : max, products[0]));
console.log(products.filter(p => p.inStock).reduce((acc, p) => acc + p.price, 0));
console.log(products.map(p => ({ ...p, price: p.price * 0.9 })));
console.log(products.some(p => p.name === "Клавиатура"));

const students = [
  { name: "Айгуль", grade: 85, active: true },
  { name: "Бек", grade: 42, active: false },
  { name: "Дана", grade: 91, active: true },
  { name: "Эрлан", grade: 67, active: true },
  { name: "Мария", grade: 38, active: false }
];

console.log(students.map(s => s.name));
console.log(students.filter(s => s.grade > 60));
console.log(students.find(s => s.grade < 50));
console.log(students.reduce((acc, s) => acc + s.grade, 0) / students.length);
console.log(students.some(s => !s.active));
console.log(students.every(s => s.grade > 30));
console.log(students.map(s => `${s.name}: ${s.grade} баллов`));
console.log(students.filter(s => s.active).length);
console.log(students.reduce((max, s) => s.grade > max.grade ? s : max, students[0]));
console.log(students.filter(s => s.active).map(s => s.name));

const user = {
  id: 1,
  username: "coder_01",
  address: { city: "Бишкек", street: "Чуй 120" }
};

const {
  username,
  address: { city },
  country = "Кыргызстан"
} = user;

console.log(username, city, country);

const average = (...numbers) => {
  if (numbers.length === 0) return 0;
  return numbers.reduce((acc, n) => acc + n, 0) / numbers.length;
};

console.log(average(10, 20, 30));

const arr1 = [1, 2, 3];
const arr2 = [0, ...arr1, 4, 5, 6];

console.log(arr2);

const userCopy = { ...user, username: "coder_02" };

console.log(user, userCopy);

const settings = {
  theme: "dark",
  fontSize: 16,
  notifications: true
};

const settingsString = JSON.stringify(settings);

console.log(settingsString);

const settingsObj = JSON.parse(settingsString);

console.log(settingsObj.theme);

if (typeof localStorage !== "undefined") {
  localStorage.setItem("settings", JSON.stringify(settings));

  const lsSettings = JSON.parse(localStorage.getItem("settings"));

  console.log(lsSettings.fontSize);
} else {
  console.log("localStorage недоступен в этой среде");
}
