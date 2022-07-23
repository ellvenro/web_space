const imgs = document.querySelectorAll('.img_long4');

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
