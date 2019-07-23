
// questions and answer 
// game will start once the player has clicked on the start  Button. 

// set  a Timer 
// questions and answers (set radio butons for answers) 
// player can select only one answer
// after the time resets 40 sec
//palyer can see results
//


var wins = 0;
var lost = 0;

let QuizQuestions = [
   { question1: "You only have two body parts that never stop growing?" ,
     answers:   [ "arms and legs", "fingures and toes", "nose and ears", "eyes and lips"], 
     correctAnswer:"nose and ears" },
    
   { question2: "There’s only one U.S. state capital without a McDonald’s?" ,
     answers:   [ "Montpelier in VT", "Albany in NY", "Madison in WI", "Helena in MT" ],
     correctAnswer:"Montpelier in VT"  },
   

   { question3: "Is the Most Common Letter and Appears in 11 Percent of All English Words?" ,
     answers:   [ "C", "A", "M", "E" ], 
     correctAnswer:"E"  },

   { question4: "This animal can help predict earthquakes?" ,
     answers:   [ "snake", "dog", "monkey", "zebra" ], 
     correctAnswer:"snake"  },

   { question5: "The Twitter bird actually has a name" ,
     answers:   [ "James", "Sue", "Peter", "Larry" ], 
     correctAnswer:"Larry"  },

];  //console.log(QuizQuestions)  
     
     function questions(){

       for ( q=0; q< QuizQuestions.length; q++){
      
          $("#quiz").append("<h5>"+QuizQuestions[q].Questions + "</h5>");
            
             console.log(QuizQuestions)     
     
        for (a=0; a< QuizQuestions[q].answer.length; a++) {

           $("#quiz").append("<label> <input type='radio' name= " 
           + QuizQuestions[q].question + " value=" + QuizQuestions[q].answers[j] 
           +  " </input>" + QuizQuestions[q].answers[a] + "</label>");
        
        }};  console.log(QuizQuestions)  
    
      }

      




















