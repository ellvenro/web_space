const back = document.querySelectorAll('.back'),
  logo = document.querySelectorAll('.logo'),
  intro = document.getElementById('intro'),
  backIm = document.querySelectorAll('.back img');

let op = 1, opPrev = 1;

//Анимация заголовка при скролле
function animEvent()
{
  const rect = back[0].getBoundingClientRect();

  op = 100 / rect.bottom;

  if (op < 0 || rect.bottom < 0 || op > opPrev)
  {
    op = opPrev;
  }

  if (window.pageYOffset == 0)
  {
    op = 1;
  }

  back[0].style.opacity = op;
  logo[0].style.opacity = op;
  intro.style.opacity = op;

  opPrev = op;
}

window.addEventListener('scroll', animEvent);
