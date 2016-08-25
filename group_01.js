var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];

var employeeBonus = [];
// function that takes in an employee array

var i = 3;
var  percent = 0;


var calculateSTI = function() {
  switch( employees[i][3] ) {
    case(3):
        percent =  0.04;
        console.log(percent);
      break;
      case(4):
        percent = 0.06;
        console.log(percent);
      break;
      case(5):
        percent = 0.1;
        console.log(percent);
      break;
  }
console.log(percent);

if( employees[i][1].length == 4) {
  percent += 0.05;
  }
console.log(percent);

if( parseInt(employees[i][2]) > 65000) {
  percent -= 0.01;
}
console.log(percent);

if( percent > 0.13) {
  percent = 0.13;
}
console.log(percent);
};

calculateSTI();
var bonus = parseInt(employees[i][2]) * percent;
console.log('Bonus is', bonus);
var roundedBonus = Math.round(bonus);
console.log('rounded bonus:', roundedBonus);
var adjSalary = bonus + parseInt(employees[i][2]);
console.log(adjSalary); 
