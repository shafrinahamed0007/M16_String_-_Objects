const school = 'RAJ UK Uttara Model School';
console.log(school);
console.log(school.toUpperCase());
console.log(school.toLowerCase());

const subject = "Chemistry";
const book = "chemistry";

if(subject.toLowerCase() === book.toLowerCase()){
    console.log("I am reading book, aibar porikkhai fatai felmu");
}else{
    console.log("Hudai hudai prista ultrai ar vaat khaoyar jonno ");
}

const drink = "water";
const liquid = '  water ';

if(drink.trim === liquid.trim){
    console.log("Pani er opor naam life");
}else{
    console.log("somudre pani ase khaite pari na");
}