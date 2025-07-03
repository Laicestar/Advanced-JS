const std = [
    {name: "John", age: 20, grade: "A"},
    {name: "Jane", age: 22, grade: "B"},
    {name: "Jim", age: 21, grade: "C"},
    {name: "Jill", age: 23, grade: "A"},
]

const names = std.map(s => s.name);
const ages = std.map(s => s.age);
console.log(names);