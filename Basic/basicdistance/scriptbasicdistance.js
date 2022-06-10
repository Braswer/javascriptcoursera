(function(){
    "use strict";

    document.getElementById('convert').addEventListener('submit', function(e) {

        e.preventDefault();

        const distance = parseFloat(document.getElementById('distance').value);
        const answerBox = document.getElementById('answer')

        if ( distance ) {
            const kilometers = (distance * 1.609344).toFixed(3);

            answerBox.innerHTML = `<h2>${distance} miles are equivalent to ${kilometers} kilometers</h2>`
        }
        else {
            answerBox.innerHTML = "<h2>I ask you for a number and this is not</h2>"
        }
    })
})();