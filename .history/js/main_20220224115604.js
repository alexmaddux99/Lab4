let paras = document.querySelectorAll('p');
paras.forEach( (item) => {
    item.classList.add('myp');

    item.addEventListener('click', (e) => {
        e.target.classList.toggle('myp');
    });

});

const first = document.images[0];
first.addEventListener('click', (e) => {
    e.target.src="https://unsplash.it/199"
});


console.log(document.body);

console.log(document.querySelector('area1').parentElement);

console.log(document.querySelector('area1'.childNodes));

console.log(document.querySelector('area1').children);