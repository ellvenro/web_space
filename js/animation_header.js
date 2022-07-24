const back = document.querySelectorAll('.back'),
  backIm = document.querySelectorAll('.back img');
let scale = -1,
  scalePrev = -1;
var intervalID = null;

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
  document.getElementById('circles').classList.add("noactive");
  const head = document.querySelectorAll('header');
  head[0].classList.remove('active');
}

//Анимация заголовка при скролле
function animEvent()
{
  const rect = back[0].getBoundingClientRect();

  scale = 1 + 100 / rect.bottom;

  if (scale > 2 || rect.bottom < 0)
    scale = scalePrev;

  if (window.pageYOffset == 0)
    scale = 1;

  backIm[0].style.transform = ("scale(" + scale + ")");
  scalePrev = scale;
}

//Анимация дребезга
async function animRattling()
{
  console.log("инт1");
  //document.getElementById('text_header').style.transform = ("scale(" + 1.1 + ") translateX(0vw) translateY(-5vw)");
  //document.getElementById('logo').
  backIm[0].style.transform = ("scale(1.5)");
  await sleep(1000);
  backIm[0].style.transform = ("scale(1)");
  console.log("инт2");
}

animHead();
sleep(3000);
window.addEventListener('scroll', animEvent);
