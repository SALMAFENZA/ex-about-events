let weightresultJs = document.getElementById('weightresult');
let heightResultJs = document.getElementById('heightresult');
let resultJs = document.getElementById('resultHtml');
let buttonJs = document.getElementById('buttonHtml');

function calculadora(weightresultJs, heightResultJs ){
    let resultado = weightresultJs / (heightResultJs * heightResultJs)
    return resultado;
}

buttonJs.addEventListener(`click`, e =>{
    let total;
weightresultJs = weightresultJs.value;
heightResultJs = heightResultJs.value;
total = calculadora(weightresultJs, heightResultJs)
console.log (total)
resultJs.innerHTML += total;
})

