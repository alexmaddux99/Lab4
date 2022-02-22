let paras = document.querySelectorAll('p');
paras.forEach( (item) => {
    item.classList.add('myp');

    addEventListener('click', (e) => {
        e.target.classList.toggle('myp');
    });

});


console.log(paras);