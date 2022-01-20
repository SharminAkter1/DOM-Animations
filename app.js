
function myMove() {
  const animate = document.getElementById('animate');
  let pos = 0;

  const intervel = setInterval(frame, 5);

  function frame() {
    if(pos < 350) {
      pos++;
      animate.style.top = pos + 'px';
      animate.style.left = pos + 'px';

    } else {
      clearInterval(intervel);
    }
  }
}

myMove();