const block = document.querySelectorAll('.back'),
  blockIm = document.querySelectorAll('.back img');
let scale = -1,
  scalePrev = -1;

function animEvent()
{
  const rect = block[0].getBoundingClientRect();

  scale = 1 + 100 / rect.bottom;

  if (scale > 2)
    scale = scalePrev;

  if (window.pageYOffset == 0)
    scale = 1;

  blockIm[0].style.transform = ("scale(" + scale + ")");
  console.log(blockIm[0].style.transform);

  scalePrev = scale;
}

function animHead()
{
  const head = document.querySelectorAll('header');
  head[0].classList.remove('active');
}

setTimeout(() => {animHead()}, 1000);

window.addEventListener('scroll', animEvent);
