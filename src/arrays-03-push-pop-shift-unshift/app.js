// const numbers = [1, 2, 3];
// console.log(numbers);

// // const moreNumbers = Array(5, 2);
// // console.log(moreNumbers);

// // const yetMoreNumbers = Array.of(1, 2);
// // console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const hobbies = ['Cooking', 'Sports'];
// const personalData = [30, 'Max', {moreDetail: []}];

// const analyticsData = [[1, 1.6], [-5.4, 2.1]];

// for (const data of analyticsData) {
//   for (const dataPoint of data) {
//     console.log(dataPoint);
//   }
// }

// console.log(personalData[1]);

const hobbies = ["Sports", "Cooking"];
console.log("Array Before Operation : " + hobbies);
hobbies.push("Reading");
console.log("Array After Push(Reading) Operation : " + hobbies);
hobbies.unshift("Coding");
console.log("Array After Unshift (Coding) Operation : " + hobbies);
const poppedValue = hobbies.pop();
console.log("Array After pop Operation : " + hobbies);
hobbies.shift();
console.log("Array After Shift Operation : " + hobbies);
