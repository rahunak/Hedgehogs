const burger = document.querySelector('#burger');
function toggleBurger() {
    console.log('scripts enable');
    document.querySelector('.burger__content').classList.toggle('toggle_burger');
}
burger.addEventListener('click', toggleBurger);
