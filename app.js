let btnTranslate=document.querySelector("#btn-translate");
let input=document.getElementsByTagName("textarea")[0];
let output=document.getElementsByClassName("output")[0];
let serverUrl="	https://api.funtranslations.com/translate/dothraki.json"
function getTranslationURL(text){
    return serverUrl + "?" + "text="+ text 
}
const errorHandler=(error)=>{
  console.log("error occured:"+ error)
  alert("somthing wrong with server")  
}


function clickHandler(){
    // output.innerText = input.value;
    let inputText =input.value;
    fetch(getTranslationURL(inputText))
    .then(response =>response.json())
    .then(json => {
let translatedText=json.contents.translated;
output.innerText = translatedText;
    })
    .catch(errorHandler)
}
btnTranslate.addEventListener("click",clickHandler)
