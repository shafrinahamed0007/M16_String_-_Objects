const college = {
  name: "vnc",
  class: ["10", "11"],
  events: ["science fair", "bijoy dibos", "21 Feb"],
  unique: {
    color: "blue",
    result:{
    gpa:5,
    merit: "top"
  }
  },
  
};

college.unique.result.merit = 'super top';



console.log(college.unique.color);
console.log(college.unique.result.gpa);
console.log(college.unique.result.merit);


college.events[1] = "16 December";
console.log(college.events);

delete college.class;
console.log(college);

