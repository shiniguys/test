

const body = document.getElementsByTagName('BODY')[0],
  header = body.querySelector('.header'),
  main = body.querySelector('.main');


if (header) {

  const burger = header.querySelector('.burger'),
    span1 = header.querySelector('.burger-span1'),
    span2 = header.querySelector('.burger-span2'),
    span3 = header.querySelector('.burger-span3'),
    navi = header.querySelector('.navigation__list');



  burger.addEventListener('click', () => {
    span1.classList.toggle('active');
    span2.classList.toggle('active');
    span3.classList.toggle('active');
    navi.classList.toggle('active');
    body.classList.toggle('hidden');
  })

  main.addEventListener('click', () => {
    span1.classList.remove('active');
    span2.classList.remove('active');
    span3.classList.remove('active');
    navi.classList.remove('active');
    body.classList.remove('hidden');
  })

  function scrollTo(element) {
    window.scroll({
      left: 0, 
      top: element.offsetTop, 
      behavior: 'smooth'
    })
  }
  
  var button = document.querySelector('.header__span');
  var footer = document.querySelector('.contacts__container ');
  
  button.addEventListener('click', () => {
    scrollTo(footer);
    span1.classList.remove('active');
    span2.classList.remove('active');
    span3.classList.remove('active');
    navi.classList.remove('active');
    body.classList.remove('hidden');
  })


  
}

document.addEventListener('DOMContentLoaded', function () {
  var slider = new SimpleAdaptiveSlider('.slider', {
    autoplay: true,
    interval: 10000,
  });
});


