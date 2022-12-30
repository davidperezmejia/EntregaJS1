
// LOGGIN 
const usuario = prompt("Cree su nombre de usuario");
const contraseña = Number(prompt("Cree su contraseña"));
let intentos = 3;
let saldoActual;
let opcion;


for (let i = 0; i < 3; i++) {
    let user = prompt("Ingrese su usuario");
    let pass = Number(prompt("Ingrese su contraseña"));

    if (!user || !pass) {
        alert("ingresa los datos solicitados");
    } else {
        if (user == usuario && pass == contraseña) {

            alert("Bienvenido " + usuario);

            // Le pedimos al usuario que coloque el saldo actual
            saldoActual = Number(prompt("Ingrese el Saldo Actual"));
            alert("Bienvenido al Menu Principal");

            // Creamos el Menu para hacer las operaciones
            do {
                opcion = Number(prompt("Que operacion desea realizar: \n1.Consultar el saldo en la cuenta \n"
                    + "2.Depositar dinero\n"
                    + "3.Extraer dinero\n"
                    + "4.Extracción rapida\n"
                    + "5.Consultar Datos"));

                switch (opcion) {
                    case 1:
                        const aviso = consultarSaldo();
                        alert(aviso);
                        break;
                    case 2:
                        aviso = ingresarDinero();
                        alert(aviso);
                        break;
                    case 3:
                        aviso = retiroDinero();
                        alert(aviso);
                        break;
                    case 4:
                        aviso = extracionRapida();
                        alert(aviso)
                        break;
                    case 5:
                        aviso = consultarDatos();
                        alert(aviso)
                        break;
                    default:
                        alert("Ingrese una opcion correcta")

                }
            } while (opcion != 5);
        }
        alert("Usuario y/o pass incorrecto. Te quedan " + intentos + " intentos");
    }
    intentos--;
}
if (intentos <= 0) { alert("Usuario Bloqueado"); }

// Consultar Saldo
function consultarSaldo() {
    return "Su Saldo Actual es de: $" + saldoActual;
}

// Ingresar Dinero a la Cuenta
function ingresarDinero() {
    let ingreso = Number(prompt("Ingrese la cantidad de desee depositar "));
    saldoActual = (saldoActual + ingreso);
    alert("Su saldo actual es: $" + saldoActual + " , ingresó $" + ingreso);
}

// Retirar Dinero de la Cuenta
function retiroDinero() {
    let retiro = Number(prompt("Ingrese el monto que desee extraer"));
    if (retiro <= saldoActual) {
        saldoActual = (saldoActual - retiro);
        alert("Su Saldo Actual es de: $" + saldoActual + ", extrajo: $" + retiro);

    } else {
        alert("Su saldo es insuficiente");
    }
}

// Extraccion Rapida, Al usar la Extraccion Rapida, solo puede sacar un 20% del total de su Saldo
function extracionRapida() {
    let extraccion = Number(prompt("Ingrese el monto que desee extraer"));

    if (extraccion <= saldoActual * 0.2) {

        saldoActual = (saldoActual - extraccion);
        alert("Su saldo Actual es de: $" + saldoActual + ", extrajo: $" + extraccion);
    } else {
        alert("No puede extraer más del 20% del total del saldo disponible");

    }
}

// Consulta Datos
function consultarDatos() {
    alert("Su nombre de Usuario es: " + usuario);
    alert("Su Saldo Actual es de: $" + saldoActual);
}

// Primera entrega David Perez



