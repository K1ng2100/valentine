// Add interactivity to the buttons, such as playing a sound or displaying a message
const yesButton = document.querySelector('.yes-button');
const maybeButton = document.querySelector('.maybe-button');

yesButton.addEventListener('click', () => {
  alert('YES! I knew you were the one! ');
  // Play a happy sound or animation
});

maybeButton.addEventListener('click', () => {
  alert('Hmmm... I\'ll take that as a maybe for now. ');
  // Play a teasing sound or animation
});
