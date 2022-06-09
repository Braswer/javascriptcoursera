(function(){
    "use strict";

    let convertType = "miles";
    const heading = document.querySelector('h1');
    const intro = document.querySelector('p');
    const answerBox = document.getElementById('answer');
    const form = document.getElementById('convert');

    document.addEventListener('keydown', function(e){
        var key = e.key

        if ( key === "k") {
            convertType = 'kilometers';
            heading.innerHTML = "Kilometers to Miles Converter";
            intro.innerHTML = "Type in a number of kilometers and click the button to convert the distance to miles."
        }
        else if ( key === "m") {
            convertType = 'miles';
            heading.innerHTML = "MILES TO KILOMETERS CONVERTER";
            intro.innerHTML = "Type in a number of miles and click the button to convert the distance to kilometers."
        }
    })

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const distance = parseFloat(document.getElementById('distance').value);

        if (distance) {
            if ( convertType == "miles") {
                const kilometers = (distance * 1.609344).toFixed(3);
                answerBox.innerHTML = `<h2>${distance} miles are equivalent to ${kilometers} kilometers</h2>`
            }

            else {
                const miles = (distance * 0.621371).toFixed(3);
                answerBox.innerHTML = `<h2>${distance} kilometers are equivalent to ${miles} miles</h2>`
            }
        }

        else {
            answerBox.innerHTML = "<h2>I ask you for a number and this is not</h2>"
        }
        
    })

/*     const answerBox = document.getElementById('answer')

    function miltokil() {

        const distance = parseFloat(document.getElementById('distance').value);

        if ( distance ) {

            const kilometers = (distance * 1.609344).toFixed(3);

            answerBox.innerHTML = `<h2>${distance} miles are equivalent to ${kilometers} kilometers</h2>`
        }
        else {
            answerBox.innerHTML = "<h2>I ask you for a number and this is not</h2>"
        }
    }

    function kiltomil() {
        const distance = parseFloat(document.getElementById('distance').value);

        if ( distance ) {

            const miles = (distance * 1.609344).toFixed(3);

            answerBox.innerHTML = `<h2>${distance} kilometers are equivalent to ${miles} miles</h2>`
        }
        else {
            answerBox.innerHTML = "<h2>I ask you for a number and this is not</h2>"
        }
    }

    document.getElementById('convert').addEventListener('submit', function(e) {
        e.preventDefault();

        miltokil()
    }) */
})();