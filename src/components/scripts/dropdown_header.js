/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
const triangle = document.querySelector('#icon__triangle');
function myFunction() {
    console.log('myDropdown');
    document.getElementById('myDropdown').classList.toggle('show');
    triangle.classList.toggle('rotate_90deg');
}
document.querySelector('#header__dropdown').addEventListener('click', myFunction);

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropdown__btn')) {
        triangle.classList.toggle('rotate_90deg');
        const dropdowns = document.getElementsByClassName('dropdown__content');
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};
