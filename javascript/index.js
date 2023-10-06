const questionList = document.querySelector(".question-list");
let add = 0; // Initialize the score
let sub = 0;
// Fetch the JSON data
fetch('./Json/display.json') // Adjust the path to your JSON file as needed
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Now, you have the JSON data in the "data" variable
    // You can use "data" to create your quiz or perform other operations
    console.log(data); // For testing purposes

    // Define "allQuestions" using the fetched data
    const allQuestions = data;

    // Continue with creating the quiz interface
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
          // Change background color to green for the correct answer
          listItem.style.backgroundColor = "green";
          listItem.innerHTML = '<p>Correct! Well done. You got plus one! Now move to the next question.</p>';
          // Increment the score for a correct answer
          add += 1;

          // Update the score display on the page
          document.getElementById("add-score").textContent = add;
        } else {
          // Change background color to red for a wrong answer
          listItem.style.backgroundColor = "red";
          listItem.innerHTML = '<p>Sorry! Incorrect. Please refresh the browser to play this quiz again.</p>';
          sub += 1;
          // Update the score display on the page
          document.getElementById("sub-score").textContent = sub;
        }

        // Remove the event listener to prevent multiple submissions for the same question
        form.removeEventListener("submit", handleQuestionSubmission);
      }

      // Add the event listener for this question
      form.addEventListener("submit", handleQuestionSubmission);
    });
  })
  .catch(error => {
    console.error('Error fetching JSON data:', error);
  });
