let myinp = document.querySelector("input");

myinp.oninput = function () {
    let color = myinp.value;
    myinp.style.borderColor = myinp.value;
    
}