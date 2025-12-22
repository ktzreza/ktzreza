const selectElement = selector => {
    
    let element = document.querySelector(selector);
    if (element) {
        return element;
    } else {
        console.log('Make sure your selector is correct!')
    }
}

const body = selectElement('body');
console.log(body)

//Toggle menu
const nav = selectElement('nav')
function toggleMenu() {
    const menuOpenIcon = selectElement('#menu-open-icon');
    const menuCloseIcon = selectElement('#menu-close-icon');
    const activateBackground = document.body;
    menuOpenIcon.addEventListener('click', () => {
        menuOpenIcon.classList.toggle('activated');
        nav.classList.toggle('activated');
        activateBackground.classList.toggle('activated')
    })

    menuCloseIcon.addEventListener('click', () => {
        menuOpenIcon.classList.toggle('activated');
        nav.classList.toggle('activated');
        activateBackground.classList.toggle('activated')

    })
}

toggleMenu();


//toggle dropdown menu

function dropdownMenu() {    
    const dropdownMenuHeader = document.querySelectorAll('.dropdown-menu-header');
    const dropdownContainer = document.querySelectorAll('.dropdown-menu')
    dropdownMenuHeader.forEach(dropdownHeader => {
        dropdownHeader.addEventListener('click', () => {
            dropdownHeader.parentElement.classList.toggle('show-or-hide');
            dropdownHeader.nextElementSibling.classList.toggle('slide-dropdown-menu')
        
    })})
    
    
    // const arrowIconDown = selectElement('.arrow-icon-down');
    // const arrowIconUp = selectElement('.arrow-icon-up');
    
}

dropdownMenu();