const person = {
    name: "Sorod Uddin",
    age: 25,
    profession: "developer",
    salary: 25000,
    married: true,
    'fav places': ['bandarban', 'sainmartin', 'kuakata']
}


// dot notation
// console.log(person.name);
const income = person.salary;
// console.log(income);


// bracket notation
console.log(person['age']);

const boyos = person['age'];
console.log(boyos);

console.log(person["fav places"]);

const keyName = 'profession';
console.log(person[keyName]);
