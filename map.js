const num = [2,3,4,5,6,7,8,9,10];

// const square1 = [];
// for (let index = 0; index < num.length; index++) {
//     const element = num[index];
//     const square = element * element;
//     square1.push(square);
// }



// const double =num.map(function (element) {
//     const square = element * element;
//     return square;
// })

const double = num.map(x => x * x );

const bigger = num.filter(x => x > 6);
const isThere = num.find(x => x > 4);
console.log(bigger);

console.log(double);
console.log(isThere);