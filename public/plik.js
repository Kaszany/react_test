

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