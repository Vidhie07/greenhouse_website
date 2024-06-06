window.addEventListener('scroll', function() {
    var blankElement = document.querySelector('.blank');
    var scrollPosition = window.scrollY;

   
    var triggerPosition = 200;
    if (scrollPosition > triggerPosition) {
        blankElement.classList.add('active');
    } else {
        blankElement.classList.remove('active');
    }
});
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    var transitionText = document.querySelector('.heading-super');
    var underline = document.querySelector('.underline');
  
    // Calculate the threshold point
    var threshold = windowHeight / 2;
  
    if (scrollPosition > threshold) {
      transitionText.style.left = '0';
      underline.style.display = 'none'; 
    } else {
      transitionText.style.left = '-100%'; 
      underline.style.display = 'block'; 
    }
  });
  
  
  
