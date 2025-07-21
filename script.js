document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('changeTextBtn');
  const messageParagraph = document.getElementById('message');

  button.addEventListener('click', function() {
    messageParagraph.textContent = "You clicked the button! This text has been updated.";
  });
});