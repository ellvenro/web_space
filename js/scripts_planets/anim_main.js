var cont = new Set([
    ...document.querySelector('.block1').children,
    ...document.querySelector('.block2').children,
    ...document.querySelector('.block1.dop').children,
    ...document.querySelector('.block2.scroll').children
]);
cont.add(document.querySelector('.long'));
cont.add(document.querySelector('#front1'));
cont.add(document.querySelector('#front2'));

window.onload = function() {
  for (item of cont)
  {
    item.style.transform = ("scale(0.8) translateY(10vh)");
    item.style.opacity = 0;
    item.style.transition = 1 + "s";
  }
}

function appearance() {
  for (item of cont)
  {
    const rect = item.getBoundingClientRect();
    if (rect.top < 2 * window.innerHeight / 2)
    {
      item.style.transform = ("scale(1) translateY(0)");
      item.style.opacity = 1;
    }
  }
}

window.addEventListener('scroll', appearance);
