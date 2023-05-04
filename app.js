var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var output = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/ferb-latin.json";

function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text;
}

// error handling
function errorHandler(error) {
  console.log("error occured", error);
  alert(
    "Something went wrong with the server! Please try again after sometime"
  );
}

function clickHandler() {
  var inputText = txtInput.value; // taking input

  // calling server for processing
  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText; // to give output
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);
