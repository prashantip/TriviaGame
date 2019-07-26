
// questions and answer 
// game will start once the player has clicked on the start  Button. 

// set  a Timer 
// questions and answers (set radio butons for answers) 
//loop Q & A
// player can select only one answer
// after the time resets 30 sec
//palyer can see results
//

$(document).ready(function(){

var correct = 0;
var incorrect = 0;
var missed = 0;
var time = 0;
var counter = 0;
var timeDisplay;
var IntervalID;
var userPick =[];

var QuizQuestions = [

  {question: "You only have two body parts that never stop growing?",
    answer: ["arms and legs","fingres and toes", "nose and ears","eyes and lips"],
    corretAnswer:2, },

    { question: "There’s only one U.S. state capital without a McDonald’s?",
    answer: ["Montpelier in VT","Madison in WI", "Helena in MT","Albany in NY"],
    corretAnswer: 0},

    { question: "The Twitter bird actually has a name?",
    answer: ["Leo","Larry", "Leon","Levi"],
    corretAnswer: 1},

    { question: "This animal can help predict earthquakes?",
    answer: ["Monkey", "Zebra","Camel","Snake"],
    corretAnswer: 3},

    { question: "The only letters that don’t appear on the periodic table are ?",
    answer: ["B & U","S & R", "J & Q","L & F"],
    corretAnswer: 2},  
  ];
   //console.log(QuizQuestions)

  for (var i=0; i< QuizQuestions.length; i++){
     userPick[i] = null;}
   

   //for loop to go through each question and each radio button option and display on to browser 

   function question(){
   for (var q=0; q<QuizQuestions.length; q++){
    $("#Quiz").append("<h5>"+ QuizQuestions[q].question+"</5>");
    
  
  for (var a=0; a < QuizQuestions[q].answer.length; a++){
    $("#Quiz").append("<lable> <input type='radio' name=" 
    + QuizQuestions[q].question +"value =" + QuizQuestions[q].answer[a] 
    + "</input>" +QuizQuestions[q].answer[a] + "</label>");
   }
     $("#Quiz").append("<br/><br>")
     
  }
  }   
      question()
 
     

 //start the game

   var number = 3;
   
   var intervalId;
   
   $("#start").on("click", run);
   
   number = 30
   function run() {
     clearInterval(intervalId);
     intervalId = setInterval(decrement, 1000);

   }
   //  The decrement function.
   function decrement() {
     //  Decrease number by one.
     number--;
     //  Show the number in the #show-number tag.
     $("#seconds").html("<p>There are five questions</p>" + number);
    
     if (number === 0) { 

    run()
   
    stop()
   

     }
   }
  
   function stop(){
   clearInterval(intervalId)
   }

     

// }

//    }


//  $("#start").click(function(){
//    IntervalID = setInterval(decrement,1000);
//   question();
//   $("#start").hide();
//   writeSubmitButton();

  // $("#Submit").click(function (){
  // showResults();
  // //alert(submit)
  // });

   $("input").click(function(){
     userPick[this.name]=this.value;

  });

// //  });

 function writeSubmitButton(){
    // $("#Submit").append("<button id='SubmitQuiz' class='btn btn-primary btn-lg'>Submit</button>")
     $("#Submit").click(function (){
      showResults();
      //alert(submit)
      });
 }   //console.log()



// function decrement(){
//   counter--;
//   $("#timeRemainning").html("<h2><mark>"+ counter +"seconds Remaining.</mark></h2>");
//   showResults()

// }






//write and show results on HTML.
function ShowResults(){
    $("#Quiz").hide();
    $("#timeRemaining").hide();
    $("#Submit").hide();

    //correct= $("QuizQuestions[q].CorrectAnswer").val();

  //  userPick = $("radioReader[r]").val();

  //  console.log(userPick);


    for (q=0; q < QuizQuestions.length; q++){

      if(QuizQuestions[q].answer == userPick) {
        correct ++;
      }

      else if (userPick[i] == null){
        missed ++;
     }

      else{
        incorrect ++;
      }
    } 
  }

// var radioReader = [];

// var Array = [0,1,2,3];
// function pushArray(){
//   var placeholder= $( "input[type=radio][name="+ Array[i] +"]:checked" ).val();
//   for (i=0; i<nameArray.length; i++){
//   radioReader.push(placeholder);
//   }

// ShowResults();
// }

var quizResults = $("#Results");
$(quizResults).append("<p>ALL DONE!</p>");
$(quizResults).append("<p>Correct Answers: " + correct + "</p>");
$(quizResults).append("<p>Incorrect Answers: " + incorrect + "</p>");
$(quizResults).append("<p>Unanswered: " + missed + "</p>");

//You must clear intervalID or it will repeat
clearInterval(intervalID);


}); 