# Небольшая веб-страница, написанная с помощью HTML и CSS

## Содержание

1. [Сайт "Далекий космос", описывающий масштабы вселенной](#сайт)
2. [Функциональность сайта](#функциональность)
3. [Основные моменты при реализации](#реализация)  
    3.1 [Страница scale.html](#scale)  
    3.1 [Страница planets.html](#planets)  
    3.1 [Страница spacecrafts.html](#spacecrafts)

<a name="сайт"></a>
## Сайт "Далекий космос", описывающий масштабы вселенной

Сам сайт состоит из трех страниц, рассказывающих о масштабах вселенной и нашем месте в ней, объектах Солнечной системы и космических аппаратах.

При открытии сайта открывается страница _"Масштабы"_ далее с нее возможен переход на другие страницы _"Планеты"_ и _"Космические аппараты"_. Открытие всех страниц начинается с загрузки, которая плавно перетекает в заголовок. Внизу всех страниц находятся кнопка "Наверх" и блок с ссылками для переходов на другие страницы.

Сайт доступен по ссылке: https://ellvenro.github.io/wep_space/

<a name="функциональность"></a>
## Функциональность сайта

На всех страницах реализована анимация заголовка и анимация при скролле, также кнопка "Наверх" и ссылки на другие страницы.

На странице "Масштабы" в последнем блоке реализована анимация 8-ми картинок, показывающих масштабы вселенной. Основная идея и некоторая информация для страницы "Масштабы" взята из [статьи](https://zen.yandex.ru/media/id/61118a9e252a7425afc22df9/razmery-nashei-zemli-k-masshtabam-vselennoi-6117e93c74a4fa1687d0764e) и [статьи](https://mrvorchun.livejournal.com/3123909.html?noscroll).

На страницах "Планеты" и "Космические аппараты" реализована горизонтальная прокрутка, на первой сайте в конце, на второй - весь сайт, кроме заголовка. Также на странице "Космические аппараты" реализовано меню.

<a name="реализация"></a>
## Основные моменты при реализации

Для расположения объектов по горизонтали использовались каскадные таблица стилей.

```html
<!--Ссылки на другие страницы-->
<div class="links">
  <a class="link" href="planets.html">Планеты</a>
  <a class="link" href="spacecrafts.html">Космические аппараты</a>
</div>
```

```CSS
/*Ссылки на другие страницы*/
.links {
  width: 100%;
  text-align: center;
  ...
}

.links .link {
  position: relative;
  width: 25%;
  display: inline-block;
  ...
}
```

<a name="scale"></a>
### Страница scale.html

Анимация загрузки страницы реализована с помощью трех блоков _div_ имеющих круглую форму.

```html
<!--Начальная заставка-->
<div id="circles">
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
</div>
```

Для корректной загрузки была реализована функция задержки.

```js
//Функция задержки
function sleep(ms)
{
  return new Promise(
    resolve => setTimeout(resolve, ms)
  );
}
```

Сама анимация реализована с помощью скрипта с трехкратным добавлением и удалением класса _active_ к элементам загрузки.

```js
//Начальная заставка
async function animHead()
{
  //Анимация точек в начале
  const circles = document.querySelectorAll('.circle');

  //Трехкратное добавление и удаление класса active
  for(let i = 0; i < 3; i++)
  {
    circles[0].classList.add('active');
    circles[1].classList.remove('active');
    circles[2].classList.add('active');
    //Задержка между анимацией
    await sleep(300);
    circles[0].classList.remove('active');
    circles[1].classList.add('active');
    circles[2].classList.remove('active');
    //Задержка между анимацией
    await sleep(300);
  }

  //Маскировка элементов загрузки
  document.getElementById('circles').classList.add("noactive");
  //Появление основных объектов заголовка
  const head = document.querySelectorAll('header');
  head[0].classList.remove('active');
}
```

<a name="planets"></a>
### Страница planets.html

Был реализован горизонтальный скролл последнего блока страницы.

```CSS
/*Родительский блок, в котором происходит скролл*/
.block2.scroll {
  overflow: scroll;
  white-space: nowrap;
}

/*Дочерние блоки, которые выходят за границу родительского*/
.block2.scroll .left {
  display: inline-block;
  vertical-align: top;
  width: 26%;
  margin-right: 10%;
  ...
}
```

Для использования колесика мыши при скролле был написан скрипт.

```js
const scrollContainer = document.querySelector(".block2.scroll");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY * 3.5;
});
```

<a name="spacecrafts"></a>
### Страница spacecrafts.html

На странице улучшен горизонтальный скролл по сравнению с предыдущей.

Реализовано перемещение страницы к началу блоков.

Для блока заголовка реализован скролл вниз к началу блока прокрутки по горизонтали.

```js
const scrollContainerHead = document.querySelector("header");
scrollContainerHead.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    window.scrollTo(0, window.innerHeight);
});
```

Для блока с горизонтальной прокруткой реализовано возвращение к началу страницы при прокрутке блока до левого и правого краев.

```js
const scrollContainer = document.querySelector(".blocks");
const rect = scrollContainer.getBoundingClientRect();

scrollContainer.addEventListener("wheel", (evt) => {
  const rect = scrollContainer.getBoundingClientRect();
    evt.preventDefault();
    //Направление скролла
    let sign = (evt.deltaY > 0) ? 1 : -1;

    //Сдвиг к началу страницы, если блок прокручен до левого края
    if (scrollContainer.scrollLeft == 0)
    {
      scrollContainer.scrollLeft = 1;
      window.scrollTo(0, -30);
    }
    //Сдвиг к началу страницы, если блок прокручен до правого края
    else if (scrollContainer.scrollLeft > rect.right * 7 && sign == 1)
    {
      scrollContainer.scrollLeft = 1;
      window.scrollTo(0, 30);
    }
    //Горизонтальная прокрутка страницы
    else {
      scrollContainer.scrollLeft += (sign * window.innerWidth);
    }
});
```

Также на странице реализовано меню в заголовке для перехода к разным местам блока горизонтальной прокрутки.
