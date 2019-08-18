

$(document).ready(function () {

  var correct = 0;
  var incorrect = 0;
  var missed = 0;

  var counter = 0;
  var timeDisplay;
  var intervalID;
  var userPick = []
  var q;
  var correctAnswer;


  var QuizQuestions = [

    {
      question: "You only have two body parts that never stop growing?",
      answer: ["arms legs", "fingres  toes", "nose ears", "eyes  lips"],
      correctAnswer: "nose ears"
    },

    {
      question: "There’s only one U.S. state capital without a McDonald’s?",
      answer: ["Montpelier in VT", "Madison in WI", "Helena in MT", "Albany in NY"],
      correctAnswer: "Montpelier in VT"
    },

    {
      question: "The Twitter bird actually has a name?",
      answer: ["Leo", "Larry", "Leon", "Levi"],
      correctAnswer: "Larry"
    },

    {
      question: "This animal can help predict earthquakes?",
      answer: ["Monkey", "Zebra", "Camel", "Snake"],
      correctAnswer: "Snake"
    },

    {
      question: "It Takes how many Weeks to Make a Jelly Bean ?",
      answer: ["one", "five", "nine", "three"],
      correctAnswer: "one"
    },
  ];
  //  //console.log(QuizQuestions)

  // for (var i=0; i< QuizQuestions.length; i++){
  //    userPick[i] = null;}


  //for loop to go through each question and each radio button option and display on to browser 


  function question() {
    for (var q = 0; q < QuizQuestions.length; q++) {
      var qStr = "<div class='question'>";
      qStr += "<h5>" + QuizQuestions[q].question + "</h5>";
      for (var a = 0; a < QuizQuestions[q].answer.length; a++) {
        qStr += "<label> <input type='radio' name='qt" + q + "' value='" + QuizQuestions[q].answer[a] + "'>" + QuizQuestions[q].answer[a] + "</label>";
      }
      qStr += "</div>";
      //console.log(qStr);
      $("#Quiz").append(qStr);
    }
  }

  question()

  function ShowResults() {
    var score = 0;
// stop Timer
  stop();
  var qAr = $(".question");
  for(var i = 0; i<qAr.length; i++){
    var curQ = qAr[i]; // get current question html tree in a variable
    var selectedOptText = $(curQ).find('input[name=qt'+i+']:checked').val(); // retrieve all the options from current question
    var ans=QuizQuestions[i].correctAnswer;
    if(selectedOptText== ans){
      console.log("q"+i +" is correct")
      score++;

    }else{
      console.log("q"+i +" is incorrect")
    }
  }
  var totalQ = QuizQuestions.length;
  var incorrect = totalQ - score;
  var scroreStr = "Correct : " + score + "<br>" + "Incorrect : " + incorrect;
  $("#results").html(scroreStr);  //write and show results on HTML.


  console.log("Your score is : " + score);
  return; 

    
  }

 
  

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
    $("#seconds").html("<p>you have 30 seconds to answer all questions. </p>" + number);

    if (number === 0) {

      run()

      stop()
    }
  }

  function stop() {
    clearInterval(intervalId)
  }


  $("#submit").click(function () {

    ShowResults();

    //alert(submit)
  });

  $("input").click(function () {
    userPick['this'] = this.value;
    console.log(userPick)
  });


 
  //write and show results on HTML.


  // var quizResults = $("#Results");
  // $(quizResults).append("<p>ALL DONE!</p>");
  // $(quizResults).append("<p>correct: " + correct + "</p>");
  // $(quizResults).append("<p>incorrect : " + incorrect + "</p>");
  // //$(quizResults).append("<p>Unanswered: " + missed + "</p>");

  //You must clear intervalID or it will repeat


  $(document).on("click", "#start", function () {
    run();
  });

  $(document).on("click", "#submit", function () {
    stop();
  });


}); // Document ready