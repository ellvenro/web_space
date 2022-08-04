const scrollContainerHead = document.querySelector("header");
const scrollContainer = document.querySelector(".blocks");
const rect = scrollContainer.getBoundingClientRect();

scrollContainer.addEventListener("wheel", (evt) => {
  const rect = scrollContainer.getBoundingClientRect();
    evt.preventDefault();
    let sign = (evt.deltaY > 0) ? 1 : -1;

    if (scrollContainer.scrollLeft == 0)
    {
      scrollContainer.scrollLeft += 1;
      window.scrollTo(0, -30);
    }
    else if (scrollContainer.scrollLeft >= rect.right * 7)
    {
      scrollContainer.scrollLeft = 1;
      window.scrollTo(0, 30);
    }
    else {
      scrollContainer.scrollLeft += (sign * window.innerWidth);
    }
});

scrollContainerHead.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    window.scrollTo(0, window.innerHeight);
});
