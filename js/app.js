document.querySelector('h3')
    .addEventListener('click', () => {
        document.querySelector('.first')
            .style.display = "none";
        const late = document.querySelector('.late')
            .style.display = "block";
    }
    );
document.querySelector('h4')
    .addEventListener('click', () => {
        document.querySelector('.first')
            .style.display = "none";
            const late = document.querySelector('.late')
            .style.display = "block";
    }
    );
document.querySelector('h5')
    .addEventListener('click', () => {
        document.querySelector('.first')
            .style.display = "none";
            const late = document.querySelector('.late')
            .style.display = "block";
    }
    );
document.querySelector('h6')
    .addEventListener('click', () => {
        document.querySelector('.first')
            .style.display = "none";
            const late = document.querySelector('.late')
            .style.display = "block";
    }
    );
document.querySelector('.five')
    .addEventListener('click', () => {
        document.querySelector('.first')
            .style.display = "none";
        const late = document.querySelector('.late');
            late.classList.remove('lateoff');
            late.classList.add('lateon');
    }
    );