const readline = require('readline');


const questions = {
  0: "What's your name?",
  1: "What's an activity you like doing?",
  2: "What do you listen to while doing that?",
  };

const ans = {
  0: "",
  1: "",
  2: "",
 };
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let i = 0;

const question = function() {
//  let i = 0;
  if(i<3){
    rl.question(questions[i], (answer) => {
      ans[i] = answer;
      i++;
      question();
  });
}else {
  rl.close();
  setTimeout(() => console.log('Thank you for taking the time to complete the survey!'),1000)
}
}
question();
