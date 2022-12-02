var birthdate = document.querySelector("#birthdate-input");
var checkButton = document.querySelector("#check-button");
var results = document.querySelector("#results");

function clickHandler (){
    console.log(birthdate.value); //
    var date = birthdate.value.split("-");
    var day = Number(date[2]);
    var month = Number(date[1]);
    var year = Number(date[0]);
    console.log(day , month , year ) //

}








checkButton.addEventListener("click",clickHandler)