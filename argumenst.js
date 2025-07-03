function add(num1, num2) {
    console.log([... arguments]);
    return num1 + num2 ;
}
const result = add(5, 10, 15, 20);
console.log(result);