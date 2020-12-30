let left = document.querySelector('.left');
let right = document.querySelector('.right');

let content = document.querySelector('.content');

left.addEventListener('mouseenter', () => content.classList.add('hover-left'));
left.addEventListener('mouseleave', () => content.classList.remove('hover-left'));

right.addEventListener('mouseenter', () => content.classList.add('hover-right'));
right.addEventListener('mouseleave', () => content.classList.remove('hover-right'));