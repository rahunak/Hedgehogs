import searchTiles from './press_plus';

const leftArrow = document.querySelector('#slider__arrow_left');
const rightArrow = document.querySelector('#slider__arrow_right');
const sliderContainer = document.querySelector('#sliderContainer');
const colors = ['background_70908b', 'background_ffedcd', 'background_e2f0df'];
const names = ['Егор', 'Игорь', 'Александр', 'Матвей', 'Фёдор', 'Иван', 'Лёшка'];
let i = 0;

function createTile() {
    const tileItem = document.createElement('div');
    tileItem.classList.add('tile__item', colors[(i++) % 3]);
    tileItem.insertAdjacentHTML('beforeend', `<div class="discount">-50 %</div>
                    <div class="info">
                        <div class="info__icon"></div>
                        <div class="info_block">
                            <div class="info_block__triangle"></div>
                            <div class="syringe__block">
                                <svg width="35" height="34" class="syringe__icon" viewBox="0 0 35 34"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M27.7164 0L25.6479 2.06856L26.1869 2.60762L22.908 5.88656L24.9291 7.95369L28.2109 4.62731L30.2766 6.69444L26.9517 9.97194L29.0188 11.9945L32.2977 8.71556L32.8368 9.25462L34.9054 7.18606L27.7164 0ZM19.8102 5.03125L17.7416 7.09981L18.6861 8.04281L4.40162 22.3718L3.90712 22.8649L3.99769 23.5405L4.49075 28.1218L4.53675 28.6149L4.67044 28.7054L0 33.3773H4.08825L7.00925 30.4577L11.3649 30.9062L12.0405 30.9968L12.5336 30.5023L26.864 16.2164L27.807 17.1609L29.8741 15.0938L19.8102 5.03125ZM20.7532 10.1085L24.7969 14.1507L11.0055 27.9867L7.59144 27.5827L7.32119 27.3125L6.91725 23.8984L20.7532 10.1085Z"
                                        class="syringe__icon" />
                                </svg>

                                <p class="syringe__status info_icon_text text_white">привит</p>
                            </div>
                            <div class="likes__block">
                                <svg width="37" height="33" class="heart__icon" viewBox="0 0 37 33"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M35.7588 6.90898C35.1959 5.6057 34.3843 4.42468 33.3694 3.43203C32.3538 2.43642 31.1563 1.64522 29.8421 1.10146C28.4793 0.53538 27.0177 0.245626 25.5421 0.249022C23.4719 0.249022 21.4521 0.815917 19.6968 1.88672C19.2769 2.14287 18.8779 2.42422 18.5 2.73076C18.1221 2.42422 17.7231 2.14287 17.3032 1.88672C15.5479 0.815917 13.5281 0.249022 11.4579 0.249022C9.96719 0.249022 8.52266 0.534569 7.15791 1.10146C5.83935 1.64736 4.65098 2.43262 3.63057 3.43203C2.61434 4.42356 1.80255 5.60486 1.24121 6.90898C0.65752 8.26533 0.359375 9.70566 0.359375 11.188C0.359375 12.5863 0.644922 14.0435 1.21182 15.5258C1.68633 16.7645 2.3666 18.0495 3.23584 19.3471C4.61318 21.4005 6.50703 23.5421 8.85859 25.7131C12.7555 29.3118 16.6146 31.7977 16.7783 31.8985L17.7735 32.5368C18.2145 32.8182 18.7813 32.8182 19.2223 32.5368L20.2175 31.8985C20.3813 31.7936 24.2361 29.3118 28.1372 25.7131C30.4888 23.5421 32.3826 21.4005 33.76 19.3471C34.6292 18.0495 35.3137 16.7645 35.784 15.5258C36.3509 14.0435 36.6364 12.5863 36.6364 11.188C36.6406 9.70566 36.3425 8.26533 35.7588 6.90898ZM18.5 29.2152C18.5 29.2152 3.55078 19.6368 3.55078 11.188C3.55078 6.90898 7.09072 3.44043 11.4579 3.44043C14.5275 3.44043 17.1898 5.15371 18.5 7.65644C19.8102 5.15371 22.4725 3.44043 25.5421 3.44043C29.9093 3.44043 33.4492 6.90898 33.4492 11.188C33.4492 19.6368 18.5 29.2152 18.5 29.2152Z"
                                        class="heart__icon" />
                                </svg>

                                <p class="likes__count info_icon_text text_white">1235</p>
                            </div>
                        </div>

                    </div>

                    <div class="tile__content">
                        <div class="tile__content_block">
                            <h2 class="tile__title">Ежик “${names[(i++) % 7]}”</h2>
                            <p class="tile__description">
                                Очень любит<br class="br" />сладости. Маленький<br class="br" /> сладкоежка=) Мы <br
                                    class="br" />называем его так<br class="br" /> между собой.<br class="br" /> Ручной,
                                любит
                                внимаение
                            </p>
                            <p class="tile__price_old">3 000 ₽</p>
                            <p class="tile__price_current">1 500 ₽</p>
                        </div>
                        <div class="tile__hedgehog_image"></div>
                    </div>
                    <div class="tile__triangle">
                        <div class="tile__triangle_first"></div>

                        <div class="tile__triangle_second"></div>
                        <div class="plus_wrapper">
                            <div class="tile__plus"></div>
                        </div>
                    </div>`);
    return tileItem;
}
function slideElements(tiles, direction) {
    Array.from(tiles).map((el) => el.classList.add(`${+direction === 1 ? 'fromLeft' : 'fromRight'}`));
    tiles[1].addEventListener('animationend', () => {
        Array.from(tiles).map((el) => el.classList.remove('fromLeft', 'fromRight'));
        if (+direction === 1) {
            tiles[tiles.length - 1].remove();
        }
        if (+direction === 0) {
            tiles[0].remove();
        }
        leftArrow.disabled = false;
        rightArrow.disabled = false;
    });
}
// Памятка:
// event.target.dataset.directionToLeft === 1 (true)
// event.target.dataset.directionToLeft === 0 (false)
function addTile(event) {
    leftArrow.disabled = true;
    rightArrow.disabled = true;
    const tile = createTile();
    if (+event.target.dataset.directionToLeft === 0) {
        sliderContainer.append(tile);
    } else if (+event.target.dataset.directionToLeft === 1) {
        sliderContainer.prepend(tile);
    }
    const tiles = document.querySelectorAll('.tile__item');
    slideElements(tiles, event.target.dataset.directionToLeft);
    searchTiles();
}

leftArrow.addEventListener('click', addTile);
rightArrow.addEventListener('click', addTile);
