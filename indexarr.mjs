import randomInterger from "random-int";
import promptSync from "prompt-sync";

//const array1 = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//array1[0]="Sunday";
//console.log(array1[0])
//console.log(array1[3])

//console.log(array1.length);
//const daysOfweek = [];
//console.log(daysOfweek);

//daysOfweek.push("Sunday");
//daysOfweek.push("Monday")
//daysOfweek.push("Wednesday")
//daysOfweek.splice(2,0,"Tuesday")
//console.log(daysOfweek);
//const daysOfweek2 = ["Thursdar","Friday"]
//console.log(daysOfweek2);
//const allDays=(daysOfweek.concat(daysOfweek2));
//console.log(allDays);
// allDays.pop()  ... del. last value....
// allDays.shift() .. del . first value...
// allDays.splice(3,3)   del position,no.

//let findvalue = array1.find(i => i === "Sunday");
//console.log(findvalue);

//let alphabet = ["a","g","b","f","c","e","d"];
//alphabet.sort();
//console.log(alphabet);

//let number = [10,3,2,5,4,6,7,9,8,1]
//number.sort(function(a,b){return a-b});
//console.log(number);
//number.reverse(function(a,b){return a-b});
//console.log(number);

//let num1 = [6,7,9,8,1]
//let num2 = [6,7,9,8,1]
//let num3 = (num1.concat(num2))
// console.log(num3);

//const student = {
 //   rollnumber : "piaic12345",
 //   name : "owais", 
   // lastname : "hasan",
    //nic: 42101-8527388-7,
    //course : ["web 3", "metaverse"],
    //adress : {
      //  city: "karachi",
       // country: "pakistan"
 //   }

//}
//console.log(student.rollnumber);

//let isinpakistan = false;
//if (isinpakistan){
//    console.log("hello imran")
//}else {
//    console.log("hello alexander")
//}

// let percentage = prompt("whats your percentage?")
//let percentage = 90;

//if (percentage >= 90){
//    console.log("A+");
//}else if (percentage >= 80){
//    console.log("A");
//}else if (percentage >= 70){
//    console.log("B");
//}else if (percentage >= 60){
//    console.log("C");
//}else if (percentage >= 50){
//    console.log("D");
//}else{
//    console.log("fail");
//}
//let percentage = prompt("what your percentage?");
//const result = percentage >= 50 ? "passed" : "fail"
//console.log(result);

//let location = prompt("where are you?");
//switch(location){
 //   case"america":
   // console.log("hello alexander");
   // break;
   // case"china":
   // console.log("hell alexander");
    //break;
    
   // case"spain":
    //console.log("hey alexander");
    //break;
    
    //default:
    //console.log("hi alexander");
    //break;
//}


let choice = ["rock","paper","scissors"];

// this will be message shown to user.
let userPrompt = "0 for rock, 1 for paper, or 2 scissors";
let outcome = "ready to play.";

//computer choose randomly
let computerchoice = randomInterger(0, 2);
computerchoice = choice[computerchoice]

// prompt the user for input
const prompt = promptSync();

let userInput = prompt(userPrompt);
let userChoice = choice[userInput];

if (computerchoice === userChoice) {
  outcome = "Draw";
}else if (computerchoice === "rock" && userChoice === "paper"){
  outcome = "Player Win"
} else if (computerchoice === "rock" && userChoice === "scissors"){
  outcome = "Computer Win"
}  else if (computerchoice === "paper" && userChoice === "rock"){
  outcome = "Computer Win"
} else if (computerchoice === "paper" && userChoice === "scissors"){
  outcome = "Player Win"
} else if (computerchoice === "scissors" && userChoice === "rock"){
  outcome = "Player Win"
} else if (computerchoice === "scissors" && userChoice === "paper"){
  outcome = "Computer Win"
}

console.log("Computer chooses"+ computerchoice);
console.log("Computer chooses"+ userChoice);
console.log(outcome);
