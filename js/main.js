/*VARIABES PARA CAPTURAR EL ID DE LOS BOTONES A LO QUE QUIERO APUNTAR*/

var btnComun = document.getElementById("btn-comun");
var btnHueco  = document.getElementById("btn-hueco");
var btnCemento = document.getElementById("btn-cemento");
var btnRetak = document.getElementById("btn-retak");

/*--------------------------------------------------------------------*/


/*VARIABLES PARA LAS RESPUESTAS DEL USUARIO*/ 

var nombre // captura el nombre del usuario
var respuesta1 // captura la respuesta del usuario
var compraComun //Captura la cantidad de ladrillos que desea comprar el usuario
var valorUsuario //Valor de cada boton con el cual se identifica cada ladrillo
var valorUsuarioPagarComun //Valor que tiene que pagar el usuario cuando haya comprado x cantidad de ladrillos * precio del ladrillo

/*---------------------------------------*/

/* CAPTURA POR MEDIO DE UNA FUNCION EL VALOR DEL BOTON CUANDO EL USUARIO DA CLICK */
btnComun.addEventListener("click", function(){
  startGame(parseInt(btnComun.value))
})

btnHueco.addEventListener("click", function(){
  startGame(parseInt(btnHueco.value))
})

btnCemento.addEventListener("click", function(){
  startGame(parseInt(btnCemento.value))
})

btnRetak.addEventListener("click", function(){
  startGame(parseInt(btnRetak.value))
})
/**=================================================================================== */

/*FUNCION (INICIO JUEGO) LA CUAL RECIBE COMO PARAMETRO EL VALOR DEL BOTON*/ 
function startGame(valorUsuario){

  let compraUsuario = valorUsuario

  switch (compraUsuario) {
    case 0:
      alert("Señor Usuario usted a decido comprar ladrillos comunes")
      nombre = prompt("Le voy a pedir el favor que me regale su nombre")
      respuesta1 = prompt(`Señor ${nombre} buenas días, los ladrillos comunes tienen un precio de $400 c/u, ¿Desea comprar algunos? (Si/No)` )
      if (respuesta1 === "si" || respuesta1 === "Si") {
        precioLadrilloComun = 400
        compraComun = prompt(`Muy bien ${nombre} cuantos ladrillos desea llevar`)
        alert(`${nombre} usted a decidido comprar ${compraComun} ladrillos por lo tanto usted debe de pagar`)
        valorUsuarioPagarComun = compraComun * precioLadrilloComun
        alert(valorUsuarioPagarComun)
        swal("Gracias por su compra", "Todo salio muy bien, que tenga un excelente día", "success")
      } else {
        swal("Upsss", "Algo salio mal...", "error")
      }
    break;
    case 1:
      alert("Señor Usuario usted a decido comprar ladrillos Huecos")
      nombre = prompt("Le voy a pedir el favor que me regale su nombre")
      respuesta1 = prompt(`Señor ${nombre} buenas días, los ladrillos huecos tienen un precio de $900 c/u, ¿Desea comprar algunos? (Si/No)` )
      if (respuesta1 === "si" || respuesta1 === "Si") {
        let precioLadrilloComun = 900
        compraComun = prompt(`Muy bien ${nombre} cuantos ladrillos desea llevar`)
        alert(`${nombre} usted a decidido comprar ${compraComun} ladrillos por lo tanto usted debe de pagar`)
        valorUsuarioPagarComun = compraComun * precioLadrilloComun
        alert(valorUsuarioPagarComun)
        swal("Gracias por su compra", "Todo salio muy bien, que tenga un excelente día", "success")
      } else {
        swal("Upsss", "Algo salio mal...", "error")
      }
      break;
    case 2:
      alert("Señor Usuario usted a decido comprar Bloques de Cemento")
      nombre = prompt("Le voy a pedir el favor que me regale su nombre")
      respuesta1 = prompt(`Señor ${nombre} buenas días, los bloques de cemento tienen un precio de $1500 c/u, ¿Desea comprar algunos? (Si/No)` )
      if (respuesta1 === "si" || respuesta1 === "Si") {
        let precioLadrilloComun = 1500
        compraComun = prompt(`Muy bien ${nombre} cuantos ladrillos desea llevar`)
        alert(`${nombre} usted a decidido comprar ${compraComun} ladrillos por lo tanto usted debe de pagar`)
        valorUsuarioPagarComun = compraComun * precioLadrilloComun
        alert(valorUsuarioPagarComun)
        swal("Gracias por su compra", "Todo salio muy bien, que tenga un excelente día", "success")
      } else {
        swal("Upsss", "Algo salio mal...", "error")
      }
      break;
    case 3:
      alert("Señor Usuario usted a decido comprar ladrillos Retak")
      nombre = prompt("Le voy a pedir el favor que me regale su nombre")
      respuesta1 = prompt(`Señor ${nombre} buenas días, los ladrillos Retak tienen un precio de $2000 c/u, ¿Desea comprar algunos? (Si/No)` )
      if (respuesta1 === "si" || respuesta1 === "Si") {
        let precioLadrilloComun = 2000
        compraComun = prompt(`Muy bien ${nombre} cuantos ladrillos desea llevar`)
        alert(`${nombre} usted a decidido comprar ${compraComun} ladrillos por lo tanto usted debe de pagar`)
        valorUsuarioPagarComun = compraComun * precioLadrilloComun
        alert(valorUsuarioPagarComun)
        swal("Gracias por su compra", "Todo salio muy bien, que tenga un excelente día", "success")
      } else {
        swal("Upsss", "Algo salio mal...", "error")
      }
    break;
    default:
      alert("Esta opcion no existe")
    break;
  }

}