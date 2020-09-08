//TAB MENU
const activeClass = 'active';

function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    if (tabMenu.length && tabContent.length) {   //checking if on the actual page exists the classes
        tabContent[0].classList.add(activeClass);  //setting a defaut active class on the first item 

        function activeTab(index) {
            tabContent.forEach((section) => {  //removing active from all sections and setting active based on the index
                section.classList.remove(activeClass);
            })
            tabContent[index].classList.add(activeClass);
        }

        tabMenu.forEach((itemMenu, index) => {  //setting a click event on every item and passing index as argument
            itemMenu.addEventListener('click', () => activeTab(index));
        });
    }
}
initTabNav();

//ACCORDION LIST
function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt');
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    if (accordionList.length) {
        function activeAccordion() {
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }

        accordionList.forEach((dt) => {
            dt.addEventListener('click', activeAccordion);
        });
    }
}
initAccordion();

//Internal Links Smooth Scroll
function initSmoothScroll() {

    const internalLinks = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        //const top = section.offsetTop;  //descobrindo o valor do topo do elemento

        section.scrollIntoView({
            behavior: 'smooth',
        });

        /*alternative form
        window.scrollTo({
            top: top,
            behavior: 'smooth',
        })*/
    }

    internalLinks.forEach(link => {
        link.addEventListener('click', scrollToSection);
    })
}
initSmoothScroll();