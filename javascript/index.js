// Get all of the question class elements.
const questionElements = document.querySelectorAll('.question');

// Add a click event listener to each question element.
questionElements.forEach(questionElement => {
  questionElement.addEventListener('click', function(event) {
    // Get the clicked element.
    const clickedElement = event.target;

    // Check if the clicked element is an option element.
    if (clickedElement.classList.contains('option-1')) {
      // Add a class to mark the option as selected.
      clickedElement.classList.add('selected');
    }
  });
});
let count = 0;
// Add a click event listener to the submit buttons.
const submitButtons = document.querySelectorAll('.submit');
submitButtons.forEach(submitButton => {
  submitButton.addEventListener('click', function(event) {
    // Prevent the default form submission behavior.
    event.preventDefault();

    // Get the parent question element of the clicked submit button.
    const questionParentElement = event.target.closest('.question'); 
    // Check if the selected option is the correct answer.
    const selectedOption = questionParentElement.querySelector('.selected');
    if ( selectedOption.classList.contains('right')) {
        //change the score at the top
        count +=1;
        document.getElementById("add-score").innerHTML= count;
      // Change the background color of the question element to green.
      questionParentElement.style.backgroundColor = 'green';
      questionParentElement.innerHTML = '<p>Correct! Well done You got plus one!,Now move to the next question.</p>';
    } else {
      // Change the background color of the question element to red.
      questionParentElement.style.backgroundColor = 'red';
      questionParentElement.innerHTML = '<p>Sorry!Incorrect.plz refresh the browser to play this quiz again.</p>';
     
    }
    }
  );
});
