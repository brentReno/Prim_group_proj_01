var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];

var employeeBonus = [];
// function that takes in an employee array
var percent;


//scope rating var




  //switches that determine base bonus based on rating
  var calculateSti = function(){
      console.log('in the CalculateSti function');
      var rating = employees[ i ] [3];
      var basePay = parseInt(employees [ i ] [ 2 ]);
      var employeeNum = (employees [ i ] [ 1 ]).length;

    //begin switch
    var stiCalc = function() {
      switch( rating ) {
          case(rating == 3):
            percent =  0.04;
            console.log(percent);
          break;
          case( rating == 4):
            percent = 0.06;
            console.log(percent);
          break;
          case( rating == 5):
            percent = 0.1;
            console.log(percent);
          break;
        }
          return percent;
      };
      console.log('after switch:',percent);
        var stiNum = stiCalc();

        if(basePay > 65000) {

        }
        if(employeeNum == 4) {

        }

  };

  for (var i = 0; i < employees.length; i++) {
    console.log(calculateSti(employees));
  }
  //if annaul income > 65,000
  //if statement about length of employent

  //if greater than 13% = 13%




//Return an Array
  //first item Employee Name
  //
