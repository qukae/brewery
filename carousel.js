const carousel = document.querySelector('.grid-carousel');
const slides = carousel.querySelectorAll('.grid-carousel__item');
const leftBtn = carousel.querySelector('.js-left');
const rightBtn = carousel.querySelector('.js-right');

const getOrder = (elem) => {
  const styles = getComputedStyle(elem);
  const orderValue = styles.order;
  const order = parseInt(orderValue);
  return order;
}


const moveRight = () => {
  slides.forEach((slide) => {
    order = getOrder(slide);

    if (order < slides.length) {
      slide.style.order = order +=1;
    }else {
      slide.style.order = 1;
    }

    if (order == 3) {
      slide.classList.add('featured')
    } else {
      slide.classList.remove('featured')
    }
  })
}

const moveLeft = () => {
  slides.forEach((slide) => {
    order = getOrder(slide);

    if (order > 1) {
      slide.style.order = order -=1;
    }else {
      slide.style.order = slides.length;
    }

    if (order == 3) {
      slide.classList.add('featured')
    } else {
      slide.classList.remove('featured')
    }
  })
}

rightBtn.addEventListener('click', moveRight)
leftBtn.addEventListener('click', moveLeft)