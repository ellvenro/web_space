const imgs = document.querySelectorAll('.img_anim');
const texts = document.querySelectorAll('.text_anim');

let index = -1;
let indexPrev = -1;

function activeImg(n, np)
{
  for(img of imgs)
  {
    img.classList.remove('active');
    img.classList.remove('noactive');
  }
  imgs[n].classList.add('active');

  if (np != imgs.length - 1)
    imgs[np].classList.add('noactive');
  else
  {
    for(text of texts)
      text.classList.remove('active');
  }
  texts[n].classList.add('active');
}

function nextImg()
{
  if(index == imgs.length - 1)
    index = 0;
  else
    index++;

  indexPrev = index-1;
  if(indexPrev == -1)
    indexPrev = imgs.length - 1;

  activeImg(index, indexPrev);
}

setInterval(nextImg, 3500);
