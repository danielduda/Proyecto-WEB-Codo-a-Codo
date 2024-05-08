"use strict";

/* instancia elementos necesarios */

const txtNombre = document.getElementById('nombre');
const txtApellido = document.getElementById('apellido');
const txtEmail = document.getElementById('email');
const txtMensaje = document.getElementById('mensaje');
const txtEnviado = document.getElementById('enviado');
const txtErrCarga = document.getElementById('error-carga');


const btn_enviar = document.querySelector('#btn-enviar');

let lHizoClick = false;

/* Asignacion de eventos al inicio de carga de la pagina */

window.addEventListener('load', e=>{

    btn_enviar.addEventListener('click', e => {
        do_enviar();
    })

})

/* valida los campos */

function do_enviar(){

	let expValEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    hide_error();

    let cMensaje = ""

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

    if(cMensaje.length > 0){
        txtErrCarga.innerText = cMensaje;
        txtErrCarga.style.display = 'block';
        return;
    }

    /* Enviar Mensaje.... */

    txtEnviado.innerText = `Mensaje Enviado! Muchas gracias ${txtNombre.value} por su contacto!`;
    txtEnviado.style.display = 'block';

}


function hide_error(){
    txtErrCarga.style.display = 'none';
    txtEnviado.style.display = 'none';
}