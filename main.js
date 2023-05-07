var cifra = "";
var acumulado = 0 ;
var pantalla = document.getElementById("pantalla");
var suma_c = false;
var multi_c = false;
var primera_operacion = true;
var resta_c = false;


function DisplayNumeros(numero) {
    pantalla.value = cifra + numero;
    cifra = pantalla.value;
}

function Cancelar() {
    pantalla.value = "";
    cifra = "";
    acumulado = 0;
    suma_c = false;
    multi_c = false;
    primera_operacion = true;
    resta_c = false;
    
}

function Sumar(){
    if (resta_c) {
        acumulado = acumulado - parseInt(cifra);
        pantalla.value = acumulado;   
    }else{
    acumulado = acumulado + parseInt(cifra);
    pantalla.value = acumulado;
    }
    primera_operacion = false;
    cifra = "";
    resta_c = false;
    suma_c = true;
}

function Restar(){
    if (suma_c || primera_operacion) {
        acumulado = acumulado + parseInt(cifra);
        pantalla.value = acumulado;
        primera_operacion = false;
        multi_c = false;
    }if (multi_c) {
        acumulado = pantalla.value;
        pantalla.value = acumulado;
        multi_c = false;
    }
    else{
        acumulado = acumulado - parseInt(cifra);
        pantalla.value = acumulado;
    }
    suma_c = false;
    resta_c = true;
    cifra = "";
}

function Multiplicacion(){
    if (primera_operacion) {
        acumulado = 1;
        primera_operacion = false;
    }
    if (suma_c || resta_c) {
        acumulado = pantalla.value;
        pantalla.value = acumulado;  
        suma_c = false;
        resta_c = false;
    }else{
        acumulado = acumulado * parseInt(cifra);
        pantalla.value = acumulado;
    }
    multi_c = true;
    cifra = "";
}


function Resultado(){
    if (suma_c) {

        pantalla.value = acumulado + parseInt(cifra);
    }
    else if(resta_c){

        pantalla.value = acumulado - parseInt(cifra);

    }else if (multi_c) {

        pantalla.value = acumulado * parseInt(cifra);
    }
}


//comentarios

var input = document.getElementById("comentario_text");
var button = document.getElementById("btn_comentario");
var contedor_array = [];
var nombre = [];
var input_nombre = document.getElementById("nombre");
var contenedor = document.getElementById("comentarios");

function Comentar() {
    var comentario = input.value;
    var nombre_xd = input_nombre.value;
    contedor_array.push(comentario);
    nombre.push(nombre_xd)
    var html_inner = [];
    for(let i = 0 ; i < contedor_array.length ; i++){
        html_inner[i] =`
        <div class="card p-2 m-2">
        <i class="bi bi-file-person-fill"><b> ${nombre[i]}</b></i> > ${contedor_array[i]}
        </div>
        `
    }
    contenedor.innerHTML = html_inner;
    input.value = "";

}
