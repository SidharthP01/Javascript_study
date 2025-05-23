let carousel = document.getElementById('carousel');

// Label images
let i = 1;
for (let li of carousel.querySelectorAll('li')) {
  li.style.position = 'relative';
  li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
  i++;
}

// Configuration
let width = 130;
let count = 3;

let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');

let position = 0;

// Left arrow
carousel.querySelector('.prev').onclick = function () {
  position += width * count;
  position = Math.min(position, 0);
  list.style.marginLeft = position + 'px';
};

// Right arrow
carousel.querySelector('.next').onclick = function () {
  position -= width * count;
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
};
