
function clickCheck() {
    if(checkbox.checked){
        alert("выбран ");
    }else{
        alert("невыбран ");
    }
}
var checkbox= document.getElementById("one");
checkbox.onchange=clickCheck;

