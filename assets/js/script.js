window.onload = () => {
  const slider = document.getElementById('slider');
  const sliderDots = document.getElementById('slider-dots');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');
  const dots = sliderDots.querySelectorAll('.dots_item');

  const getActiveElement = () => {
    const activeSlide = slider.querySelector('.active');
    const activeSlideDot = sliderDots.querySelector('.active');

    return {activeSlide, activeSlideDot};
  }

  const setActiveElement = (id) => {
    const activeSlide = slider.querySelector(`[data-id="${id}"]`);
    const activeSlideDot = sliderDots.querySelector(`[data-id="${id}"]`);

    activeSlide.classList.add('active');
    activeSlideDot.classList.add('active');
  } 

  const slideItem = e => {
    const {activeSlide, activeSlideDot} = getActiveElement();
    const activeId = Number(activeSlide.dataset.id);

    activeSlide.classList.remove('active');
    activeSlideDot.classList.remove('active');

    if (e.target.classList.contains('next')) {
      const targetId = activeId >= dots.length ? 1 : activeId + 1;
      setActiveElement(targetId);
    }

    if (e.target.classList.contains('prev')) {
     const targetId = activeId === 1 ? dots.length : activeId - 1;
     setActiveElement(targetId)
    }
  }

  dots.forEach(dot => {
    dot.addEventListener('click', e => {
      const targetId = e.target.dataset.id;
      const {activeSlide, activeSlideDot} = getActiveElement();
      const activeId = Number(activeSlide.dataset.id);

      activeSlide.classList.remove('active');
      activeSlideDot.classList.remove('active');
      setActiveElement(targetId);
    });
  })

  prev.addEventListener('click', slideItem);
  next.addEventListener('click', slideItem);
}


//

/*var slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("item");
  var dots = document.getElementsByClassName("slider-dots_item");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
      slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}
*/
