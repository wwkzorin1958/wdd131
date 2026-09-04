const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];
// for loop
for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]);
    }
};

// while loop
let i = 0;
while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]);
    }
  i++;
};

// forEach
studentReport.forEach(function(grade) {
  if (grade < LIMIT) {
    console.log(grade);
  }
});

// for...in loop
for (let grade in studentReport) {
    if (studentReport[grade] < LIMIT) {
    console.log(studentReport[grade]);
  }
}
