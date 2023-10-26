function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';

    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    
    return color;
  }
  
  var wheel = document.querySelector('.wheel');
  
  wheel.addEventListener('animationiteration', function() {
    var randomColor = getRandomColor();
    wheel.style.backgroundColor = randomColor;
  });  