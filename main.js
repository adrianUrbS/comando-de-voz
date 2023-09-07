function setup() {
    canvas = createCanvas(500, 500);
    background("blue");
}
var reconocerVoz = window.webkitSpeechRecognition
reconocimiento = new reconocerVoz()
reconocimiento.lang = "es-MX"

function iniciar() {
    reconocimiento.start();
}

reconocimiento.onresult = respuesta

function respuesta(resultados) {
    console.log(resultados)
    comando = resultados.results[0][0].transcript
    document.getElementById("resultado").innerHTML = comando
}
var comando = ""
function draw() {
    x = Math.round(Math.random() * 500);
    y = Math.round(Math.random() * 500);
    r = Math.round(Math.random() * 255);
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);
    
    fill("rgb("+r+","+g+","+b+")")
    switch (comando) {
        case "cuadrado":
            square(x, y, 40);
            comando = ""
            break;
            case "círculo" :
            circle(x,y,40);
            comando = "";
            break;
    }
}