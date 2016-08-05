var quiz = {
"name": 'Superman Hero Name Quiz',
"description":'How many superheroes can you name?',
"questionStem": 'What is the real name of ',
"questions":[
  {"question": "Superman ", "answer": "Clark Kent"},
  {"question": "Wonderwoman ", "answer": "Diana Price"},
  {"question": "Batman ", "answer": "Bruce Wayne"}
  ]
}


var $question = document.getElementById('question');
var $feedback = document.getElementById("feedback");
var $score    = document.getElementById("score");
var $start    = document.getElementById("button");
var $form     = document.getElementById("answer");

$start.addEventListener('click', function( ) {play(quiz) }, false)

function update(element, content, klass) {
  var p = element.firstChild || document.createElement('p');

    p.textContent= content;
    element.appendChild(p);
    if(klass) {
      p.className = klass;
    }
}

var points = 0
update($score,points,)

function play(quiz){
  var i=0;
  choose(question);
  gameOver();

function chooseQuestion() {
  var question =
  quiz.questions[i].question;
  ask(question);
}
function ask(question) {
  update($question, quiz.)
}
}

function ask(question) {
  update($question, quiz.questionStem + question)
  return prompt("Enter your answer:  ");
}

function check(answer){
 if (answer === quiz.questions[i].answer) {
   update($feedback, "Correct", "right");
   points ++;
   update($score, points)
 } else {
   update($feedback, "Wrong!", "wrong");
  }

}

function gameOver() {
  update($question, "Game Over! You scored    " +  points + "points  ");
}

}
