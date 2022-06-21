// JQUERY METHOD

(function(){

    "use strict";
    
    $('ul li ul').hide();



    $('.menulink').click(function(){
        const thisMenu = $(this).next('ul');
        $('ul li ul').not(thisMenu).hide();
        thisMenu.toggle();


    /*     
        SAME AS TOGGLE

        if(thisMenu.is(':visible')){
            thisMenu.hide()
        }
        else {
            thisMenu.show()
        } */
    })

})()







/* 

JAVASCRIPT METHOD

(function(){

    "use strict";

    const submenus = document.querySelectorAll('ul li ul')
    const menulinks = document.querySelectorAll('.menulink')
    
    function hideSubmenus(){
        for (let sub of submenus) {
            sub.className = "hide-menu"
        }
    }
    
    hideSubmenus()
    
    for (let i = 0; i < menulinks.length; i++) {
        menulinks[i].addEventListener('click', function(e){
            e.preventDefault;
    
            const thisMenu = this.parentNode.querySelector('ul');
            
            if (thisMenu.classList.contains('hide-menu')) {
                hideSubmenus()
    
                thisMenu.className = "show-menu"
            }
            else {
                thisMenu.className = "hide-menu"
            }
        })
    }
})()
 */




