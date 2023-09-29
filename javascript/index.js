// Get all of the question class elements.
const questionElements = document.querySelectorAll('.question');
// Add a click event listener to each question element.
questionElements.forEach(questionElement => {
  questionElement.addEventListener('click', function(event) {
    // Get the clicked element.
    const clickedElement = event.target;

    // Check if the clicked element is an option element.
    if (clickedElement.classList.contains('option-1')) {
      // Get the question element that contains the clicked element.
      const questionParentElement = clickedElement.closest('.question');

      // Check if the clicked element is the right answer.
      if (clickedElement.classList.contains('right')) {
        // Change the background color of the question element to green.
        questionParentElement.style.backgroundColor = 'green';
      } else {
        // Change the background color of the question element to red.
        questionParentElement.style.backgroundColor = 'red';
      }
    }
  });
});