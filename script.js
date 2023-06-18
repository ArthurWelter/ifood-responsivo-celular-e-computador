const menuItens = document.querySelectorAll('.nav-menu a[href^="#"]');

menuItens.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})

function scrollToIdOnClick(event) {
    const element = event.target;
    const id = element.getAttribute('href');
    const section = document.querySelector(id).offsetTop;
    event.preventDefault();

    window.scroll({
        top: section - 80,
        behavior: "smooth"
    })
}


const elements = document.querySelectorAll('.card-cardapio p');

for (let p of elements) {
    p.innerText = p.innerText.substring(0, 85) + '...'
}


