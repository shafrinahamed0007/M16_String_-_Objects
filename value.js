const person = {
    name: "Sorod Uddin",
    age: 25,
    profession: "developer",
    salary: 25000,
    married: true,
    'fav places': ['bandarban', 'sainmartin', 'kuakata']
}

person.salary = 30000;
person['age'] = 26;
person['fav places'] = ['maldives', 'bali', 'pataya'];
console.log(person);


const propName = "profession";
person[propName] = "devops";


console.log(person);