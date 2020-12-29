let body = document.querySelector('body');

for(let i = 1; i <= 100; i++) {

    let content = document.createElement('div');
    content.classList.add('content');
    content.innerHTML = `Content#${i}`;
    body.appendChild(content);
}

let contents = document.querySelectorAll('.content');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {

    let triggerBottom = window.innerHeight / 5 * 4;

    contents.forEach(cont => {

        let contTop = cont.getBoundingClientRect().top;

        if(contTop < triggerBottom) {
            cont.classList.add('show');
        } else {
            cont.classList.remove('show');
        }
    })
}