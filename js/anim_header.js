const back = document.querySelectorAll('.back'),
  logo = document.getElementById('logo'),
  text_header = document.getElementById('text_header'),
  backIm = document.querySelectorAll('.back img');

let scale = -1, scalePrev = -1,
  trl = -1, trlPrev = -1, lop = 0;

//Функция задержки
function sleep(ms)
{
  return new Promise(
    resolve => setTimeout(resolve, ms)
  );
}

//Начальная заставка
async function animHead()
{
  //Анимация точек в начате
  const circles = document.querySelectorAll('.circle');

  for(let i = 0; i < 3; i++)
  {
    circles[0].classList.add('active');
    circles[1].classList.remove('active');
    circles[2].classList.add('active');
    await sleep(300);
    circles[0].classList.remove('active');
    circles[1].classList.add('active');
    circles[2].classList.remove('active');
    await sleep(300);
  }

  //Появление основных объектов заголовка
  document.querySelectorAll('.circles')[0].classList.add("noactive");
  const head = document.querySelectorAll('header');
  head[0].classList.remove('active');
}

//Анимация заголовка при скролле
function animEvent()
{
  const rect = back[0].getBoundingClientRect();

  scale = 1 + 100 / rect.bottom;
  trl = scale * 5;
  lop = 100 / rect.bottom;

  if (scale > 2 || rect.bottom < 0)
  {
    scale = scalePrev;
    trl = trlPrev;
    lop = 0;
  }

  if (window.pageYOffset == 0)
  {
    scale = 1;
    trl = 0;
    lop = 1;
  }

  backIm[0].style.transform = ("scale(" + scale + ")");
  logo.style.transform = ("translate(" + trl + "vw, " + trl + "vw" + ")");
  logo.style.opacity = text_header.style.opacity = lop;
  text_header.style.transform = ("translate(" + -trl + "vw, " + -trl + "vw" + ")");

  scalePrev = scale;
  trlPrev = trl;
}


animHead();
window.addEventListener('scroll', animEvent);
