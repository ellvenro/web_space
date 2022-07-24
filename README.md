# Небольшая веб-страница, написанная с помощью HTML и CSS

## Сайт "Далекий космос", описывающий масштабы вселенной

Основная идея и некоторая информация взята из [статьи](https://zen.yandex.ru/media/id/61118a9e252a7425afc22df9/razmery-nashei-zemli-k-masshtabam-vselennoi-6117e93c74a4fa1687d0764e).

[dscovr](https://epic.gsfc.nasa.gov/)

[Вселенная в перспективе](https://mrvorchun.livejournal.com/3123909.html?noscroll)

Анимация загрузки страницы

```html
<!--Начальная заставка-->
<div id="circles">
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
</div>
```

Функция задержки
```js
//Функция задержки
function sleep(ms)
{
  return new Promise(
    resolve => setTimeout(resolve, ms)
  );
}
```

```js
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
```
