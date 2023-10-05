const leftCurtain = document.getElementById('leftCurtain');
const rightCurtain = document.getElementById('rightCurtain');
const animateButton = document.getElementById('animateButton');

let isOpen = false;

animateButton.addEventListener('click', () => {
  if (isOpen) {
    leftCurtain.style.transform = 'translateX(0)';
    rightCurtain.style.transform = 'translateX(0)';
  } else {
    leftCurtain.style.transform = 'translateX(-40%)';
    rightCurtain.style.transform = 'translateX(40%)';
  }
  isOpen = !isOpen;
});
