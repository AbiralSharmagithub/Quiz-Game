const allQuestions = [
    {
      "question": "What does HTML stand for?",
      "options": [
        "Hyper Text Markup Language",
        "Happy To Make Lunch",
        "High Tech Magic Language",
        "Helpful Texting Message Language"
      ],
      "correctAnswer": "Hyper Text Markup Language"
    },
    {
        "question": "What is JavaScript mainly used for on websites?",
       "options": [
          "Making the website look pretty",
          "Adding interactivity and animations",
          "Sending emails",
          "Ordering pizza online"
        ],
        "correctAnswer": "Adding interactivity and animations"
      },
      {
        "question": "What do we call a box where you can type words or numbers on a website?",
        "options": [
          "Texty Box",
          "Input Field",
          "Talky Box",
          "Number Machine"
        ],
        "correctAnswer": "Input Field"
      },
      {
        "question": "Which of these is not a color?",
        "options": [
          "Red",
          "Green",
          "JavaScript",
          "Blue"
        ],
        "correctAnswer": "JavaScript"
      },
      {
        "question": "What do we use to make a website's text bigger or smaller?",
        "options": [
          "Zoom In and Out buttons",
          "A magic wand",
          "JavaScript spells",
          "Font size settings"
        ],
        "correctAnswer": "Font size settings"
      },
      {
        "question": "Which symbol is used to write a comment in JavaScript?",
        "options": [
          "# This is a comment",
          " This is a comment",
          "** This is a comment",
          "## This is a comment"
        ],
        "correctAnswer": "// This is a comment"
      },
      {
        "question": "What do we call a list that shows information in order?",
        "options": [
          "Shopping list",
          "Array",
          "Number party",
          "Text zoo"
        ],
        "correctAnswer": "Array"
      },
      {
        "question": "What is the result of 5 + 3?",
        "options": [
          "53",
          "8",
          "35",
          "58"
        ],
        "correctAnswer": "8"
      },
      {
        "question": "What do we call a word that means the same as another word?",
        "options": [
          "Synonym",
          "Antonym",
          "Homonym",
          "Pseudonym"
        ],
        "correctAnswer": "Synonym"
      },
      {
        "question": "Which animal is known for its long neck?",
        "options": [
          "Elephant",
          "Giraffe",
          "Hippo",
          "Kangaroo"
        ],
        "correctAnswer": "Giraffe"
      }
  
  ];   
const Questions = [
    // Your questions data here...
  ];
  
  const questionList = document.querySelector(".question-list");
  let score = 0; // Initialize the score
  
  allQuestions.forEach((question, index) => {
    const listItem = document.createElement("div");
    listItem.classList.add("question");
    listItem.innerHTML = `
      <p class="question-No">${index + 1}. ${question.question}</p>
      <form class="fill">
        ${question.options.map((option, optionIndex) => `
          <label>
            <input type="radio" name="answer-${index}" class="option-${optionIndex + 1}" value="${option}">
            ${option}
          </label><br>
        `).join('')}
        <input type="submit" value="Submit" class="submit">
      </form>
    `;
  
    questionList.appendChild(listItem);
  
    // Add a click event listener to the form (quiz question)
    const form = listItem.querySelector("form");
  
    // Define the event handler function for this specific question
    function handleQuestionSubmission(event) {
      event.preventDefault(); // Prevent form submission
  
      // Get the selected option
      const selectedOption = form.querySelector(`input[name="answer-${index}"]:checked`);
      if (!selectedOption) {
        alert("Please select an answer before submitting.");
        return; // Exit function if no option is selected
      }
  
      // Get the correct answer from the question data
      const correctAnswer = question.correctAnswer;
  
      // Check if the selected option is correct
      if (selectedOption.value === correctAnswer) {
        // Change background color to green for correct answer
        listItem.style.backgroundColor = "green";
        listItem.innerHTML = '<p>Correct! Well done You got plus one!,Now move to the next question.</p>';
        // Increment the score for a correct answer
        score +=1;
  
        // Update the score display on the page
        document.getElementById("add-score").textContent = score;
      } else {
        // Change background color to red for wrong answer
        listItem.style.backgroundColor = "red";
        listItem.innerHTML = '<p>Sorry!Incorrect.plz refresh the browser to play this quiz again.</p>';
      }
  
      // Remove the event listener to prevent multiple submissions for the same question
      form.removeEventListener("submit", handleQuestionSubmission);
    }
  
    // Add the event listener for this question
    form.addEventListener("submit", handleQuestionSubmission);
  });
  