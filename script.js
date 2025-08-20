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
// }, []);

// console.log(result);


//                                      No9

const products = [
  { id: 3, name: "Phone", price: 800, rating: 4.5, discount: 10 },
  { id: 1, name: "Laptop", price: 1200, rating: 4.7, discount: 15 },
  { id: 2, name: "Tablet", price: 600, rating: 4.2, discount: 5 },
  { id: 4, name: "Headphones", price: 150, rating: 4.0, discount: 20 }
];
// products.sort((a, b) => a.id - b.id);
// console.log(...products);       //                                     ID bo'yicha sortlash

// products.sort((a, b) => a.name.localeCompare(b.name));
// console.log(...products);       //                                     Name alfabet bo'yicha sortlash

// products.sort((a, b) => a.price - b.price);
// console.log(...products);       //                                     Price bo'yicha sortlash

// products.sort((a, b) => b.rating - a.rating);
// console.log(...products);       //                                     Rating bo'yicha sortlash

products.sort((a, b) => b.discount - a.discount);
console.log(...products);       //                                        Discount bo'yicha sortlash