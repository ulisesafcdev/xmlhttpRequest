// intanciamos ajax
const xhr = new XMLHttpRequest(); 
const $container = document.querySelector('.container');
const $template = document.getElementById('datosList').content;
const $fragment = document.createDocumentFragment();

xhr.addEventListener('readystatechange', (e) => {

    if (xhr.readyState !== 4) return;

    if (xhr.status >= 200 && xhr.status < 300) {

        let datos = JSON.parse(xhr.responseText);
        // console.log(datos);

        datos.forEach((el) => {

            $template.querySelector('h3').textContent = el.id;
            $template.querySelector('#name').textContent = el.name;
            $template.querySelector('#user').textContent = el.username;
            $template.querySelector('#email').textContent = el.email;
            $template.querySelector('#phone').textContent = el.phone;
            $template.querySelector('#website').textContent = el.website;

            let $clone = document.importNode($template, true);

            $fragment.appendChild($clone);
            
        })

        $container.appendChild($fragment);

    }

});

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

xhr.send();