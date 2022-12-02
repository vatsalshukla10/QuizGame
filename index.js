var readlineSync = require("readline-sync");
var userName = readlineSync.question("what is you name");
console.log("welcome "+ userName +" to the quiz game");

var score = 0;

function play(question, answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer == answer){
    console.log("Right");
    console.log("--------------------");
    score = score+1;
  }
  else{
    console.log("wrong");
    console.log("--------------------");
  } }

var questions = [{
  question : "Where is Taj mahal?",
  answer : "agra"
},{
  question : "What is the capital of india?",
  answer : "new delhi"
},{
  question : "Who founded Brahmo Samaj?",
  answer : "raja ram mohan roy"  
},{
  question : "What Does IPO stands for?",
  answer : "initial public offering"
},{
  question : "For which club messi play?",
  answer : "psgg"
} ];

for(i=0;i<questions.length;i++){
var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}
console.log("your score out 5 is "+ score);
console.log("now bakre go and eat sacchi's pussy , sacchi will love it");

 
