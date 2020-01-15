function changeColor() {
    var inputColor = document.getElementById("getColor").value;
    console.log(inputColor);

    //MOŻNA INACZEJ OCZYWIŚCIE
    //var c = document.getElementById("getColor");
    //var b = c.value;
    //console.log(b);

    var elem = document.getElementById("lista");
    elem.style.color = inputColor;
}


function postNewElement() {

    var myOl = document.getElementById("lista");
    console.log(myOl)

    var newLi = document.createElement("li");
    console.log(newLi)

    var inputValue = document.getElementById("getValue").value;

    console.log(inputValue)

    newLi.innerHTML = inputValue;

    console.log(newLi.innerHTML)

    myOl.appendChild(newLi)

    // ŻEBY DODAĆ PRZED CZYMŚ
    //var lista = document.getElementById("ostatnia");
    //console.log(lista.innerHTML)
    //myOl.insertBefore(newLi, lista); - tu przed czymś



}