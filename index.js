var absolutePositionSet = false;

function moveButton() {
    var button = document.getElementById('movingButton');
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;

    // Calculate random positions
    var randomX = Math.floor(Math.random() * (screenWidth - button.offsetWidth));
    var randomY = Math.floor(Math.random() * (screenHeight - button.offsetHeight));

    // Set new positions
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
  }
  
  function setAbsolutePosition() {
    var uniqueElement = document.getElementById('movingButton');
    if (!absolutePositionSet) {
        uniqueElement.classList.add('absolutePosition');
        absolutePositionSet = true;
    }
}