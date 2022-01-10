//codigo cuadrado

console.group("cuadrado")

function perimetro_cuadrado(lado){
    return lado * 4;
}


function area_cuadrado(lado){
    return lado * lado
}

console.groupEnd();

//codigo triangulo

console.group("triangulo")

function perimetro_triangulo(lado1, lado2, ladobase){
    return lado1 + lado2 + ladobase
}

function area_triangulo(ladobase, alturatriangulo){
    return (ladobase * alturatriangulo) / 2
}


console.groupEnd();

//codigo circulo

console.group("circulo")

const PI = Math.PI;

function perimetro_circulo(diametrocirculo){
    return diametrocirculo * PI
}

function area_circulo(diametrocirculo){
    const radiocirculo = diametrocirculo / 2;
    return (radiocirculo * radiocirculo) * PI;
}


console.groupEnd();

// HTML CONNECT cuadrado
function calcularperimetrocuadrado(){
    var inputc = document.getElementById("cuadrado");
    var valuec = inputc.value; 

    const perimetroc = perimetro_cuadrado(valuec);
    figure.innerHTML = "Cuadrado";
    rp.innerHTML = perimetroc + "cm.";
}

function calcularareacuadrado(){
    var inputc = document.getElementById("cuadrado");
    var valuec = inputc.value; 

    const areac = area_cuadrado(valuec);
    figure.innerHTML = "Cuadrado";
    ra.innerHTML = areac + "cm^2";
}

//HTML CONNECT triangulo

function calcularperimetrotriangulo(){
    var inputt1 = document.getElementById("triangulo1").value; var rt1 = Number(inputt1);
    var inputt2 = document.getElementById("triangulo2").value; var rt2 = Number(inputt2);
    var inputt3 = document.getElementById("triangulo3").value; var rt3 = Number(inputt3);

    const perimetrot = perimetro_triangulo(rt1, rt2, rt3);
    figure.innerHTML = "triangulo";
    rp.innerHTML = perimetrot + "cm.";
}

function calcularareatriangulo(){
    var inputt3 = document.getElementById("triangulo3").value; var rt3 = Number(inputt3);
    var inputt4 = document.getElementById("triangulo4").value; var rt4 = Number(inputt4);

    const areat = area_triangulo(rt3, rt4);
    figure.innerHTML = "triangulo";
    ra.innerHTML = areat + "cm^2";
}

//HTML CONNECT circulo

function calcularperimetrocirculo(){
    var inputCi = document.getElementById("circulo").value;
    
    var perimetroCi = perimetro_circulo(inputCi);
    var redondeo = Math.floor(perimetroCi);
    figure.innerHTML = "Circulo";
    rp.innerHTML = redondeo + "cm.";
}

function calcularareacirculo(){
    var inputCi = document.getElementById("circulo").value;
    
    var areaCi = area_circulo(inputCi);
    var redondeo = Math.floor(areaCi);
    figure.innerHTML = "Circulo";
    ra.innerHTML = redondeo + "cm^2";
}