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

function yippee() {
    var text = document.getElementById('main heading');
    var uniqueElement = document.getElementById('movingButton');
    var image = document.getElementById('main img');
    var button = document.getElementById('yes');
    text.textContent = 'yippee! I like you too :-)';
    image.src = 'https://media.istockphoto.com/id/1307507771/photo/two-small-striped-domestic-kittens-sleeping-hugging-each-other-at-home-lying-on-bed-white.jpg?s=612x612&w=0&k=20&c=3k2NzD2a9jFZkw86kVo2Te6cNhev38AQ95FxR9fFeXU=';
    uniqueElement.hidden = true;
    button.hidden = true;
}   