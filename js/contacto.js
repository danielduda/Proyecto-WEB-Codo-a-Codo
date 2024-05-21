"use strict";

/* instancia elementos necesarios */

const txtNombre = document.getElementById('nombre');
const txtApellido = document.getElementById('apellido');
const txtEmail = document.getElementById('email');
const txtMensaje = document.getElementById('mensaje');
const txtEnviado = document.getElementById('enviado');
const txtErrCarga = document.getElementById('error-carga');

const btn_enviar = document.querySelector('#btn-enviar');

const opc_sexo = document.getElementsByName("sexo");
const tipo_consulta = document.getElementById("tipo_consulta")
const archivo = document.getElementById('archivo');

const div_imagen = document.getElementById('div_imagen')
const id_contacto = document.getElementById('id_contacto')

let lEnvio = false

/* Asignacion de eventos al inicio de carga de la pagina */

window.addEventListener('load', e=>{

    btn_enviar.addEventListener('click', e => {
        do_enviar();
    })

})

/* valida los campos */

function do_enviar(){

	let expValEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    hide_mensajes();

    /* obtengo el valor del select */
    let cConsulta = tipo_consulta.value

    let cMensaje = ""
    let cSexo = "";
    
    for(var i = 0; i < opc_sexo.length; i++) {
        if(opc_sexo[i].checked) {
          cSexo = opc_sexo[i].value;
          break;
        }
    }

    if(txtNombre.value.length <= 0) {
        cMensaje = `Ingrese su Nombre por favor...`;
    }

    if(cMensaje.length==0 && txtApellido.value.length <= 0) {
        cMensaje = `Ingrese su Apellido por favor...`;
    }

    if(cMensaje.length==0 && !expValEmail.test(txtEmail.value)){
        cMensaje = `El e-mail ingresado NO es válido!`;
    }

    if(cMensaje.length==0 && txtMensaje.value.length <= 0 ) {
        cMensaje = `Si nos va a contactar debería dejarnos un mensaje... ;-) `;
    }

    if(cMensaje.length==0 && cSexo==""){
        cMensaje = `Por favor, diganos su sexo...`;
    }

    if(cMensaje.length==0 && cConsulta=="3" && archivo.files.length <= 0 ){
        cMensaje = `Por favor, cargue una imagen del pelo que le gustaría! `;
    }

    if(cMensaje.length > 0){
        txtErrCarga.innerText = cMensaje;
        txtErrCarga.style.display = 'block';
        return;
    }

    /* ***************************** Enviar Mensaje.... ************************* */

    lEnvio = ProcesarEnvio();

    setTimeout(MensajeFinal,3000);
}

function mostrarInputFile(){
    
    if(tipo_consulta.value=="3"){
        div_imagen.style.display="block";
    }else{
        div_imagen.style.display="None";
    }
}

function ProcesarEnvio(){

    txtEnviado.innerText = `Enviando Mensaje... espere...`;
    txtEnviado.style.display = 'block';
    return true;

}

function MensajeFinal(){

    if(lEnvio){
/*         setTimeout(hide_mensajes,5000) */
        id_contacto.style.display = 'None';
        txtEnviado.innerText = `Mensaje Enviado! Muchas gracias ${txtNombre.value} por su contacto!`;
        txtEnviado.style.paddingTop = "300px"
        txtEnviado.style.display = 'block';
        setTimeout(go_inicio, 3000)
    }else{
        txtEnviado.innerText = `ERROR! No se envio el mensaje! Vuelva a intentar por favor`;
        txtEnviado.style.display = 'block';
    }
 
}

function hide_mensajes(){
    txtErrCarga.style.display = 'none';
    txtEnviado.style.display = 'none';
}

function go_inicio(){
    window.location.href = "../index.html";
}


function validarImagen() {
    let input = document.getElementById('archivo');
    let archivo = input.files[0];

    txtErrCarga.style.display = 'None';
    
    if (archivo) {
      var nombreArchivo = archivo.name;
      var extension = nombreArchivo.split('.').pop().toLowerCase();
  
      if (extension !== 'jpg' && extension !== 'jpeg' && extension !== 'png') {
        txtErrCarga.innerText = 'Archivo inválido. Solo se permiten archivos con extensiones .jpg, .jpeg o .png';
        txtErrCarga.style.display = 'block';
        input.value = ''; 
      }
    }

  }
  