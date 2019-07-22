/*java script код для чекбокса*/
function clickCheck() {
    if(checkbox.checked){
        alert("выбран ");
    }else{
        alert("невыбран ");
    }
}
var checkbox= document.getElementById("one");
checkbox.onchange=clickCheck;
/*java script код для радио кнопки*/

function clickRadio() {
    var radioTag= document.getElementsByName("radioX");
    for(var i=0; i<radioTag.length; i++){

        if(radioTag[i].checked){
            alert("выбран "+  ++i + " элемент");
        }
    }

}
var buttonClick = document.getElementById("button__radio");
buttonClick.onclick = clickRadio;


