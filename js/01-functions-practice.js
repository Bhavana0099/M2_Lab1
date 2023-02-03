/*eslint-env browser*/
//STEP 1

var num = parseInt(window.prompt("Enter a number"));
var halfNo;
function halfNumber(num) {
    "use strict";
    halfNo = parseFloat(num / 2); 
    window.console.log("Half of " + num + " is " +halfNo + "."); 
    return halfNo;
}
halfNumber(num);    

//STEP 2
/*
var no = parseInt(window.prompt("Enter a number"));
var squareNo;
function squareNumber(no) {
    "use strict";
    squareNo = parseInt(no * no); 
    window.console.log("The result of squaring the number " + no + " is " + squareNo + "."); 
    return squareNo;
}
squareNumber(no);
*/

//STEP 3
/*
var num1 = parseInt(window.prompt("Enter first number"));
var num2 = parseInt(window.prompt("Enter second number"));
var percent;
function percentOf(num1, num2) {
    "use strict";
    percent = (num1 * 100) / num2;
    window.console.log(num1 + " is " + percent + "% of " + num2 + ".");
    return percent;
}
percentOf(num1, num2);
*/

//STEP 4
/*
var no1 = parseInt(window.prompt("Enter first number"));
var no2 = parseInt(window.prompt("Enter second number"));
var mod;
function findModulus(no1, no2) {
    "use strict";
    mod = parseInt(no2 % no1);
    window.console.log(mod + " is the modulus of " + no1 + " and " + no2 + ".");
    return mod;
}
findModulus(no1, no2);
*/

//STEP 5
/*
var no = window.prompt("Enter the numbers seperated by commas");
no = no.split(",");
var sum = 0;
function findSum(num) {
    "use strict";
    for (var i = 0; i < no.length; i++) {
        sum += parseInt(no[i]);
    }
    window.console.log("Sum of the numbers " + no + " is " + sum + ".");
    return sum;
}
findSum(no);
*/