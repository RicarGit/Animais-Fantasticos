//TAB MENU
const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section')

if (tabMenu.length && tabContent.length) {   //checking if on the actual page exists the classes
    tabContent[0].classList.add('active');  //setting a defaut active class on the first item 

    function activeTab(index) {
        tabContent.forEach((section) => {  //removing active from all sections and setting active based on the index
            section.classList.remove('active')
        })
        tabContent[index].classList.add('active')
    }

    tabMenu.forEach((itemMenu, index) => {  //setting a click event on every item and passing index as argument
        itemMenu.addEventListener('click', () => activeTab(index))
    });
}

//ACCORDION LIST
