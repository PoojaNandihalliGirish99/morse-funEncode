var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var output = document.querySelector("#txt-output");

var url = "https://api.funtranslations.com/translate/morse.json";
function constructUrl(input) {
    return url + "?" + "text=" + input;
}

function clickEventHandler(){
    var text = txtInput.value;
    fetch(constructUrl(text))
        .then(response => response.json())
        .then(data => {
            var translated = data.contents.translated;
            output.innerText = translated;
        }).catch(errorHandler);
}
function errorHandler(error) {
    console.log("error : " , error);
}

btnTranslate.addEventListener("click", clickEventHandler);