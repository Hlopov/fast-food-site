const tabs = (headerSelector, tabSelector,  contentSelector, activeClass, display= 'block') => {
    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector);


    function hideTabContent(){
        content.forEach(item => {
            item.style.display ='none';
        });

        tab.forEach(item =>{
            item.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0){
        content[i].style.display = display;
        tab[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => {
        // console.log("d")
        const target = e.target;
        console.log(target.parentNode);
        if (target && 
        (target.classList.contains(tabSelector.replace(/\./, ""))|| 
        target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
            //console.log(target)
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

          
};

export default tabs;