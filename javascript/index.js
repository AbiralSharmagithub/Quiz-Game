    let optionGiven = document.getElementsByClassName("option-1");
    let rightAnswer = document.getElementsByClassName("right");
    let questionAnswer = document.getElementsByClassName("question");
    let submitAnswer = document.getElementsByClassName("submit");

     for(let i=0; i < questionAnswer.length; i++) {
      for(let j=0; j < optionGiven.length; j++) {
        optionGiven[j].addEventListener("click", function () {
         if(rightAnswer[j] === optionGiven[j])
       {  
           questionAnswer[i].style.backgroundColor="green";
       }
       else
       {
           questionAnswer[i].style.backgroundColor="red";
       }
      }
     )
    }
    }
 
 // for (let i = 0; i < questionAnswer.length; i++) {
//     //Store the correct answer for the current question in a variable
//    let currentRightAnswer = rightAnswer[i];
//    for (let j = 0; j < optionGiven.length; j++) {
//      optionGiven[j].addEventListener("click", function () {
//      //   Check if the clicked option is the correct answer for this question
//        if (currentRightAnswer === optionGiven[j]) {
//       //    Change the background color of the specific question
//          questionAnswer[i].style.backgroundColor = "green";
//        } else {
//          questionAnswer[i].style.backgroundColor = "red";
//        }
//      });
//    }
//  }





