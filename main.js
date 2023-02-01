const counter = document.querySelector('.counter');
let scale = 1;
let increasing = true;

counter.addEventListener('click', () => {

    if (increasing) {
        scale += 0.7;
        if (scale >= 4.5) {
            increasing = false;
        }
    } else {
        scale -= 0.7;
        if (scale <= 1) {
            increasing = true;
        }
    }

  counter.style.transform = `scale(${scale})`;
});