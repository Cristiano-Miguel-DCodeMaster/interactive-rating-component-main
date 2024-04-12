const button = document.querySelector('button');
const number = document.querySelector('span');
const lateoff = document.querySelector('.lateoff');
var one = false,two = false,three = false,four = false,five = false;
document.querySelector('h3')
    .addEventListener('click', () => {
        one = true;
        document.querySelector('h3')
            .style.backgroundColor = "hsla(217, 12%, 63%, 0.719)";
        document.querySelector('h3')
            .style.color = "var(--White)";
        number.innerHTML = "1";
    }
    );
document.querySelector('h4')
    .addEventListener('click', () => {
        two = true;
        document.querySelector('h4')
            .style.backgroundColor = "hsla(217, 12%, 63%, 0.719)";
        document.querySelector('h4')
            .style.color = "var(--White)";
        number.innerHTML = "2";
    }
    );
document.querySelector('h5')
    .addEventListener('click', () => {
        three = true;
        document.querySelector('h5')
            .style.backgroundColor = "hsla(217, 12%, 63%, 0.719)";
        document.querySelector('h5')
            .style.color = "var(--White)";
        number.innerHTML = "3";
    }
    );
document.querySelector('h6')
    .addEventListener('click', () => {
        four = true;
        document.querySelector('h6')
            .style.backgroundColor = "var(--LightGrey)";
        document.querySelector('h6')
            .style.color = "var(--White)";
        number.innerHTML = "4";
    }
    );
document.querySelector('.five')
    .addEventListener('click', () => {
        five = true;
        document.querySelector('.five')
            .style.backgroundColor = "var(--Orange)";
        document.querySelector('.five')
            .style.color = "var(--White)";
        number.innerHTML = "5";
    }
);
button.addEventListener('click', () => {
    if (one || two || three || four || five) {
        document.querySelector('.first').style.display = "none";
        lateoff.classList.remove('lateoff');
        lateoff.classList.add('lateon');
    } else {
        alert('Please Rate us');
    }
    })