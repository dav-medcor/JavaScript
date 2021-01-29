/* Se crearán varios eventos: cuando se haga click sobre el botón guardar aparecerá un alert;
Cuando hagamos foco sobre el input del nombre el fondo será de un color y cuando se lo quitemos, de otro.
Dependiendo si escribimos una vocal o una consonante en 
el segundo input su contenido será de un color distinto. */

document.querySelector("#boton").addEventListener ("click", function displayAlert(){
    alert ("Los cambios se guardarán y no porán ser modificados más adelante")
})

const inputName = document.querySelector("#focus")
inputName.addEventListener ("focus", function changeColor(){
    inputName.style.backgroundColor = "#fff666";
})

inputName.addEventListener ("focusout", function changeColorOut(){
    inputName.style.backgroundColor = "#FFFFFF";
})

const inputRandom = document.querySelector ("#random");
inputRandom.addEventListener ("keypress", comprobarLetra);
function comprobarLetra (event) {
    const letra = event.which;
    if (letra === 97 || letra === 101 || letra === 105 || letra === 111 ||letra === 117) {
        inputRandom.style.backgroundColor = "#fff666";
    } else {
        inputRandom.style.backgroundColor = "#32a836";
    }
};
