// Characteristics to display
var characteristics = ['DESIGNER', 'DEVELOPPER', 'PROBLEM SOLVER', 'MINIMALIST LOVER', 'PASSIONATE', 'PATIENT', 'HONEST', 'OPTIMISTIC', 'CURIOUS', 'DYNAMIC'];

textSequence(0);
function textSequence(i) {

    if (characteristics.length > i) {
        setTimeout(function() {
            document.getElementById("sequence").innerHTML = characteristics[i];
            textSequence(++i);
        }, 300); 
        //Timer (in milliseconds)
    // Loop system
    } else if (characteristics.length == i) { 
        textSequence(0);
    }

}

