// //                                      No1

// const students = [
//   { name: "Quincy", percent: 96 },
//   { name: "Jason", percent: 84 },
//   { name: "Alexis", percent: 100 },
//   { name: "Sam", percent: 65 },
//   { name: "Katie", percent: 90 },
//   { name: "Anna", percent: 75 },
// ];

// const baholar = students.map(student => {
//   let grade;
//   if (student.percent >= 85) grade = 5;
//   else if (student.percent >= 70) grade = 4;
//   else if (student.percent >= 60) grade = 3;
//   return { ...student, grade };
// });

// function getNamesByGrade(students, grade) {
//   return students
//     .filter(student => student.grade === grade)
//     .map(student => student.name);
// }

// console.log(baholar);

// console.log(getNamesByGrade(baholar, 5), '5 baho olganlar');
// console.log(getNamesByGrade(baholar, 4), '4 baho olganlar');
// console.log(getNamesByGrade(baholar, 3), '3 baho olganlar');


// //                                      No2

// const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

// const getCount = animals.reduce((acc, animal) => {
//   if (acc[animal]) {
//     acc[animal] = acc[animal] + 1;
//   } else {
//     acc[animal] = 1;
//   }
//   return acc;
// }, {});

// console.log(getCount);


// //                                      No3

// const nums = [1, 2, 3, 4, 5]

// const newArr = nums.map((v, i, a) => {
//   return `${v ** 2}`
// })

// console.log(newArr);


// //                                      No4

// const nums = [1, -4, 12, 0, -3, 29, -150];

// const positives = nums.filter((n) => {
//   if (n > 0) {
//     return n;
//   } else {
//     return 0;
//   }
// });

// const sum = positives.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);

// console.log(sum);


// //                                      No5

// const str = 'George Raymond Richard Martin';

// const acronym = str
//   .split(" ")
//   .map(word => word[0])
//   .join("");

// console.log(acronym);


// //                                      No6

// const Input = [
//   { name: 'John', age: 13 },
//   { name: 'Mark', age: 56 },
//   { name: 'Rachel', age: 45 },
//   { name: 'Nate', age: 67 },
//   { name: 'Jeniffer', age: 65 }
// ];

// Input.sort((a, b) => a.age - b.age);

// const youngest = Input[0].age;
// const oldest = Input[Input.length - 1].age;

// console.log(oldest - youngest);


// //                                      No7

// const massiv = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const getOdd = massiv.filter(el => el % 2 === 1);
// const getEven = massiv.filter(el => el % 2 === 0);

// console.log(...getEven, ' juftlari');
// console.log(...getOdd, ' toqlari');


// //                                      No8

// const nums = [1, 2, 3, 2, 4, 1, 5];

// const result = nums.reduce((acc, el) => {
//   if (!acc.includes(el)) {
//     acc.push(el); 
//   }
//   return acc;
// },[]);

// console.log(result);


// //                                      No9

// const products = [
//   { id: 3, name: "Phone", price: 800, rating: 4.5, discount: 10 },
//   { id: 1, name: "Laptop", price: 1200, rating: 4.7, discount: 15 },
//   { id: 2, name: "Tablet", price: 600, rating: 4.2, discount: 5 },
//   { id: 4, name: "Headphones", price: 150, rating: 4.0, discount: 20 }
// ];
// // products.sort((a, b) => a.id - b.id);
// // console.log("ID bo'yicha sortlash", products);                 //                                     ID bo'yicha sortlash

// // products.sort((a, b) => a.name.localeCompare(b.name));
// // console.log("Name alfabet bo'yicha sortlash", products);       //                                     Name alfabet bo'yicha sortlash

// // products.sort((a, b) => a.price - b.price);
// // console.log("Price bo'yicha sortlash", products);              //                                     Price bo'yicha sortlash

// // products.sort((a, b) => b.rating - a.rating);
// // console.log("Rating bo'yicha sortlash", products);             //                                     Rating bo'yicha sortlash

// products.sort((a, b) => b.discount - a.discount);
// console.log("Discount bo'yicha sortlash", products);              //                                     Discount bo'yicha sortlash


// //                                      No10

// const products = [
//   { name: "Phone", price: 800, rating: 4.5, },
//   { name: "Laptop", price: 1200, rating: 4.7 },
//   { name: "Tablet", price: 600, rating: 4.2 },
//   { name: "Headphones", price: 150, rating: 4.0 }
// ];

// products.sort((a, b) => b.rating - a.rating);
// console.log("Rating bo'yicha sortlash", products);//      Rating bo'yicha sortlash


// //                                      No11

// const products = [
//   { id: 3, name: "Phone", price: 800, rating: 4.5, discount: 10 },
//   { id: 1, name: "Laptop", price: 1200, rating: 4.7, discount: 15 },
//   { id: 2, name: "Tablet", price: 600, rating: 4.2, discount: 5 },
//   { id: 4, name: "Headphones", price: 150, rating: 4.0, discount: 20 }
// ];

// products.sort((a, b) => {
//   return a.price - b.price
// });
// console.log("Price bo'yicha eng kichigi \n", products[0]);// Price bo'yicha eng kichigini aniqlash


// //                                      No12

// const products = [
//   { id: 3, name: "Phone", price: 800, rating: 4.5, discount: 10 },
//   { id: 1, name: "Laptop", price: 1200, rating: 4.7, discount: 15 },
//   { id: 2, name: "Tablet", price: 600, rating: 4.2, discount: 5 },
//   { id: 4, name: "Headphones", price: 150, rating: 4.0, discount: 20 }
// ];

// const yigindi = products.reduce((a, b) => {
//   return a += b.price
// }, 0);

// console.log("Price bo'yicha yig'indi: ", yigindi);


// //                                      No13

// const products = [
//   { id: 3, name: "Phone", price: 800, rating: 4.5, discount: 10 },
//   { id: 1, name: "Laptop", price: 1200, rating: 4.7, discount: 15 },
//   { id: 2, name: "Tablet", price: 600, rating: 4.2, discount: 5 },
//   { id: 4, name: "Headphones", price: 150, rating: 4.0, discount: 20 }
// ];

// const productNames = products.map(product => {
//   return product.name
// });

// console.log("Faqt name lar : ",productNames);


// //                                      No14

// const products = [
//   { id: 3, name: "Phone", price: 800, rating: 4.5, discount: 10 },
//   { id: 5, name: "Laptop", price: 1200, rating: 4.7, discount: 15 },
//   { id: 2, name: "Tablet", price: 600, rating: 4.2, discount: 5 },
//   { id: 4, name: "Headphones", price: 150, rating: 4.0, discount: 20 }
// ];

// const foundProduct = products.find(product => {
//   return product.id === 5
// });

// if (foundProduct) {
//   console.log("ID ga teng bolgan nom: ", foundProduct.name);
// } else {
//   console.log("Bunday id yo'q!");
// }


// //                                      No15

// let products = [
//   { id: 6, name: "Smarthpone", price: 12000, rating: 4.5, discount: 20, },
//   { id: 2, name: "Acer", price: 10000, rating: 4.3, discount: 10, },
//   { id: 1, name: "Mac book", price: 17000, rating: 4.7, discount: 40, },
//   { id: 4, name: "HP", price: 21000, rating: 4.1, discount: 30, },
//   { id: 5, name: "Dell", price: 35000, rating: 4.9, discount: 30, },
// ];
// const foundProduct = products.filter(product => product.id !== 4);

// console.log("ID 4 ga teng bolgan product o'chirildi ", foundProduct);


// //                                      No16

// let satr = "eshmat222";

// const a = satr.split("");

// const foundProduct = a.every(ch =>
//   (ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z")
// );

// console.log("Berilgan satr faqatgina harflardan iborat: ", foundProduct);


// //                                      No17

// const massiv = [false, 1, 10, "", null, "abdulaziz", 1.13, 0];

// function getTruthyFalsy(arr) {
//   const truthy = arr.filter(Boolean);
//   const falsy = arr.filter(a => !a);
//   return { truthy, falsy };
// }

// console.log(getTruthyFalsy(massiv));


// //                                      No18

// const satr = `Men Abdulaziz Programmerman`

// const a = satr.split(" ");

// const newArr = a.map(v => {
//   return v.length
// });

// console.log(newArr);


// //                                      No19

// const satr = `Men Abdulaziz Programmerman`

// const a = satr.split("");

// const newArr = a.some(v => {
//   return v === ' '
// });

// console.log(newArr);


// //                                      No20

// function getNewObj(obj) {
//   return Object.entries(obj).map(([key, value]) => key + value);
// }

// const input = {
//   a: 2,
//   b: 5,
//   c: 7
// }

// console.log(getNewObj(input));


// //                                      No21

// const son = 123456789

// function getRecursiveFunc(n) {
//   if (n === 0) return 0;
//   return (n % 10) + getRecursiveFunc(Math.floor(n / 10))
// }

// console.log(getRecursiveFunc(son));


// //                                      No22

// const pupils = [
//   { name: "Elbek", protcent: 95, },
//   { name: "Zafar", protcent: 78, },
//   { name: "Aziz", protcent: 83, },
//   { name: "Jasur", protcent: 88, },
//   { name: "Bobur", protcent: 66, },
//   { name: "Kamron", protcent: 75, },
// ];

// const avarage = pupils.reduce((sum, pupil) => sum + pupil.protcent, 0) / pupils.length;

// const updated = pupils.map(pupil => {
//   return {
//     ...pupil,
//     avarage_protcent: avarage,
//   };
// });

// console.log(updated);


// //                                      No23

// const pupils = [
//   { name: "Elbek", protcent: 95, },
//   { name: "Zafar", protcent: 78, },
//   { name: "Aziz", protcent: 83, },
//   { name: "Jasur", protcent: 88, },
//   { name: "Bobur", protcent: 66, },
//   { name: "Kamron", protcent: 75, },
// ];

// const updated = pupils.map(pupil => {
//   return {
//     ...pupil,
//     grade: pupil.protcent >= 90 ? 5 :
//       pupil.protcent >= 80 ? 4 :
//         pupil.protcent >= 70 ? 3 : 2
//   };
// });

// console.log(updated);


// //                                      No24

// const pupils = [
//   { name: "Elbek", protcent: 95, },
//   { name: "Zafar", protcent: 78, },
//   { name: "Aziz", protcent: 83, },
//   { name: "Jasur", protcent: 88, },
//   { name: "Bobur", protcent: 66, },
//   { name: "Kamron", protcent: 75, },
// ];

// const updated = pupils.map(pupil => {
//   return {
//     ...pupil,
//     isPassed: pupil.protcent >= 70
//   };
// });

// console.log(updated);


// //                                      No25

// const pupils = [
//   { name: "Elbek", protcent: 95, },
//   { name: "Zafar", protcent: 78, },
//   { name: "Aziz", protcent: 83, },
//   { name: "Jasur", protcent: 88, },
//   { name: "Bobur", protcent: 66, },
//   { name: "Kamron", protcent: 75, },
// ];

// const result = pupils.reduce((acc, pupil) => {
//   if (pupil.protcent >= 70) {
//     acc.passed += 1;
//   } else {
//     acc.notpassed += 1;
//   }
//   return acc;
// }, { passed: 0, notpassed: 0 });

// console.log(`O'tganlar soni: ${result.passed}`);
// console.log(`O'tmaganlar soni: ${result.notpassed}`);
