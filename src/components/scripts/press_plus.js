const goodsCount = document.querySelector('#goods__count');

function addToBasket() {
    goodsCount.innerHTML = +goodsCount.innerHTML + 1;
}

function searchTiles() {
    const arrPlus = document.querySelectorAll('.tile__plus');
    Array.from(arrPlus).map((el) => el.addEventListener('click', addToBasket));
}
searchTiles();
