function limpiar() {
    document.getElementById("miFormulario").reset();
}

function sumar(){
    let x = parseInt(document.getElementById("valor1").value);
    let y = parseInt(document.getElementById("valor2").value);
    document.getElementById("el-resultado").innerHTML = x+y; 
}

function resta(){
    let x = parseInt(document.getElementById("valor1").value);
    let y = parseInt(document.getElementById("valor2").value);
    document.getElementById("el-resultado").innerHTML = x-y; 
}

function multiplicacion(){
    let x = parseInt(document.getElementById("valor1").value);
    let y = parseInt(document.getElementById("valor2").value);
    document.getElementById("el-resultado").innerHTML = x*y; 
}

function dividir(){
    let x = parseInt(document.getElementById("valor1").value);
    let y = parseInt(document.getElementById("valor2").value);
    document.getElementById("el-resultado").innerHTML = x/y; 
}