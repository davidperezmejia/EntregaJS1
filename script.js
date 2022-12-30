let user = prompt("Ingrese Nombre del estudiante");
alert("Bienvenido " + user);
alert ("Calcularemos tu notas de estudios")

let nota1 = parseInt(prompt("Ingresar primera nota"));
let nota2 = parseInt(prompt("Ingresar segunda nota"));
let nota3 = parseInt(prompt("Ingresar tercera nota"));
let promedio =(nota1 + nota2 + nota3) /3;
let proRound = Math.round(promedio)
if(proRound >= 50){
    alert("Su calificación es de : " + proRound + " Aprobó.");
}
else{
    alert ("Su calificación es de : " + proRound + " Reprobó.");
}
let nivelar = parseInt(prompt("Desea hacer un examen adicional?  1.Si  -  2.No"))
if (nivelar === 1) {

    let addNota = parseInt(prompt("Ingrese la nueva nota:"))
    resultadoTotal = addNota+proRound
    alert("Su calificación es de : " + proRound + resultadoTotal + " Aprobó.");
    
         } else {  
            (nivelar === 2)
            alert("Su calificación es de : " + proRound + " Reprobó.");
        }

// Primera entrega David Perez



