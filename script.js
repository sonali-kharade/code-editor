function run(){
    let htmlCode = document.getElementById('html');

    let cssCode = document.getElementById('css');

    let jsCode = document.getElementById('js');

    let output = document.getElementById('output');

    output.contentDocument.body.innerHTML = htmlCode.value + "<style>"+ cssCode.value + "</style>";

    output.contentWindow.eval(jsCode.value);
}

let click1 = document.querySelector("#click1");

click1.addEventListener("click", ()=>{
     let html = document.querySelector("#html");
     html.classList.toggle("height");

});

let click2 = document.querySelector("#click2");

click2.addEventListener("click", ()=>{
     let css = document.querySelector("#css");
     css.classList.toggle("height");

});

let click3 = document.querySelector("#click3");

click3.addEventListener("click", ()=>{
     let js = document.querySelector("#js");
     js.classList.toggle("height");

})