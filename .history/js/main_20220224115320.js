let paras = document.querySelectorAll('p');
paras.forEach( (item) => {
    item.classList.add('myp');

    item.addEventListener('click', (e) => {
        e.target.classList.toggle('myp');
    });

});

const first = document.images[0];
first.addEventListener('click', (e) => {
    e.target.src="https://unsplash.it/100"
});


console.log(document.body);
