/*definimos una función de saludo*/
function Saludar() {
    alert("Hola mundo 2023");
}

/*Función que muestra datos*/ 
function Mostrar() {
    var nom="Kim Jiwoo";
    var edad="23";
    document.write('El nombre es: '+nom);
    document.write('<br>');
    document.write('La edad es: '+edad)
}

/*Función que ingresa datos*/
function Ingresar() {
    var nom, edad;
    nom = prompt('Ingrese su nombre: ');
    edad = prompt('Ingrese su edad: ');
    document.write('El nombre ingresado es '+nom+ ' cuya edad es de '+edad);
}

/*Función que ingresa una suma de dos variables*/
function Sumar() {
    var n1, n2, suma;
    n1 = prompt('Ingrese un número: ');
    n2 = prompt('Ingrese otro número: ');
    suma = parseInt(n1) + parseInt(n2)
    alert("La suma es: "+suma);
}

/*Función que verifica si un número positivo o negativo*/
function Verificar(){
    var n;
    n = document.getElementById('num1').value;
    if (parseInt(n)>0){
        alert("El número es positivo");
    }
    else{
        if(parseInt(n)<0){
            alert("El número es negativo");
        }
        else{
            alert("El número es neutro");
        }
        
    }
}

/*Función que muestra el resultado de una suma*/
function Resultado(){
    var n, n2,suma;
    n = document.getElementById('nume').value;
    n2 = document.getElementById('nume2').value;
    suma=parseInt(n) + parseInt(n2)
    alert("El resultado de la suma es: "+suma);
}

/*Función que muestra el resultado de una multiplicación*/
function Resultado2(){
    var n, n2,multi;
    n = document.getElementById('nume').value;
    n2 = document.getElementById('nume2').value;
    multi=parseInt(n) * parseInt(n2)
    alert("El resultado de la multiplicación es: "+multi);
}

/*Función para mostrar números pares o impares*/
function ParImpar(){
    var n;
    n = document.getElementById('nume3').value;
    if(parseInt(n)==0){
        alert("Es un número neutro");   
    }
    else{
        if(parseInt(n)%2==0){
            alert("El número " +n+ " es par");
        }
        else{
            alert("El número " +n+ " es impar")
        }
    }
}

/*Función que me permite mostrar dos números a través de una multiplicación por medio de una suma sucesiva*/
function MultiSuma(){
    var a, b, multi=0;
    a = document.getElementById('nume4').value;
    b = document.getElementById('nume5').value;
    for(x=1; x<=parseInt(b); x++){
        multi += parseInt(a);
    }
    alert("La multiplicación por sumas sucesivas es de: "+multi);
}

/*Función que me muestra un mensaje 10 veces(bucle for)*/
function Mensaje(){
    var msj="";
    msj = prompt('Ingrese un mensaje');
    for(x=1; x<=10; x++){
        document.write(msj);
        document.write('<br>')
    }
}