let progress = document.getElementById('progress');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let circles = document.querySelectorAll('.circle');

console.log(progress);
console.log(prev);
console.log(next);
console.log(circles);

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;
    if(currentActive > circles.length) {
        currentActive = circles.length;
    }
    console.log(currentActive);
    update();
});

prev.addEventListener('click', () => {
    currentActive--;
    if(currentActive < 1) {
        currentActive = 1   ;
    }
    console.log(currentActive);
    update();
});

function update() {
    circles.forEach((circle, idx)=>{
        if(idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })

    let actives = document.querySelectorAll('.active');
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

    if(currentActive == 1) {
        prev.disabled = true;
    } else if (currentActive == circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled =false;
    }
}

