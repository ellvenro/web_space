const imgs = document.querySelectorAll('.imgs');

let index = -1;

function activeImg(n)
{
  for(img of imgs)
    img.classList.remove('active');
  imgs[n].classList.add('active');
}

function nextImg()
{
  if(index == imgs.length - 1)
    index = 0;
  else
    index++;
  activeImg(index);
}

setInterval(nextImg, 2500);
