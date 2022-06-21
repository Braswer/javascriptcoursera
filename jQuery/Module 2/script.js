(function(){

    "use-strict";

    const tabs = document.querySelectorAll('#tabs>ul>li>a')

    tabs.forEach(tab => {
        tab.addEventListener('click', selectTab);
    })
/*     for (let tab of tabs) {
        tab.addEventListener('click', selectTab);
    } */

    function selectTab(e) {
        e.preventDefault();

        tabs.forEach(tab => {
            tab.removeAttribute('class')
        })

/*         for(let tab of tabs) {
            tab.removeAttribute('class');
        } */

        e.target.className = 'active'

        const thisTab = e.target.getAttribute('href');
        const thisContent = document.querySelector(thisTab);
        const oldContent = document.querySelector('.visible');
        oldContent.className = 'visuallyhidden';
        oldContent.addEventListener('transitionend', function() {
            oldContent.className = 'hidden';
            thisContent.className = 'visible visuallyhidden';
            setTimeout(function(){
                thisContent.classList.remove('visuallyhidden')
            }, 20)
        }, {capture:false, once:true, passive:false})
    }

}())