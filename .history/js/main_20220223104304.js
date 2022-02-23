let paras = document.querySelectorAll('p');
paras.forEach( (item) => {
    item.classList.add('myp');

    item.addEventListener('click', (e) => {
        e.target.classList.toggle('myp');
    });

});


console.log(document.body);