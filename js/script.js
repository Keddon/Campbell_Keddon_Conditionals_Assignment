/**
 * Created by Keddon Campbell on 2/19/15 Conditionals Assignment.
 */

var userInput = [0,0,0,0,0];
var firstResults = 0;
var runCalc = 0;
var secondCalc;
var secondGoAround;
var firstNumber = (userInput[0] = prompt("This calculator allow you to calculate up to three(3) at a time \n What is your first number?"));
if (userInput[0] != Number(firstNumber)){
    alert("We're sorry, but "+ userInput[0] + " is not a number");
    console.log("We're sorry, but "+ userInput[0] + " is not a number");
}else if (userInput[0] == ""){
    console.log("Nothing was entered..")
}
var firstOperator = (userInput[1] = prompt("Ok, so your first number is "+ userInput[0] +". What is your operator \n type'/' to divide. \n type '*' to multiply. \n type '+' to add. \n type '-' to subtract."));
if (userInput[1] == "") {
    console.log("Nothing was entered... ");
}else if (firstOperator === "/"){
    console.log("Ok lets Divide");
    runCalc = 1;
}else if (firstOperator === "+"){
    console.log("Ok lets Add");
    runCalc = 2;
}else if (firstOperator === "-"){
    console.log("Ok lets Subtract");
    runCalc = 3
}else if (firstOperator === "*"){
    console.log("Ok lets Multiply");
    runCalc = 4
}else {
    console.log("That was not a valid operator")
}

var secondNumber = (userInput[2] = prompt("What is the number you would like "+ userInput[0] + " to be "+ firstOperator +" by?"));
if (userInput[2] != Number(secondNumber)) {
    alert("We're sorry, but "+ userInput[2] + " is not a number");
    console.log("We're sorry, but "+ userInput[2] + " is not a number");
}else if (userInput[2] == "") {
    console.log("Nothing was entered..");
}

if (runCalc == 1){
    firstResults = (firstNumber / secondNumber)
}else if (runCalc == 2) {
    firstResults = (firstNumber + secondNumber)
}else if (runCalc == 3) {
    firstResults = (firstNumber - secondNumber)
}else if (runCalc == 4) {
    firstResults = (firstNumber * secondNumber)
}else {
    console.log("I am surprised that this code did not work after all the hours placed into perfecting it.")
}

secondGoAround = confirm("Would you like to add another operation to the equation :"+ firstNumber + firstOperator+ secondNumber+ " ? \n Click OK to add another operation, \n Click Cancel to calculate results. ");

(secondGoAround == true) ? (secondCalc = prompt("Ok so what is your second operator? \n type'/' to divide. \n type '*' to multiply. \n type '+' to add. \n type '-' to subtract.")) : (console.log(firstResults));






