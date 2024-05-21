
function validaContacto1() {
    if (document.fcontacto.nombre.value.length == 0) {
        alert("Tiene que escribir su nombre");
        document.fcontacto.nombre.focus();
        return 0;
    }
    if (document.fcontacto.correo.value.length == 0 && document.fcontacto.telefono.value.length == 0
        && document.fcontacto.celular.value.length == 0) {
        alert("Debe registrar un dato para contactarlo");
        document.fcontacto.correo.focus();
        return 0;
    }
    else {
        if (document.fcontacto.correo.value.length > 0) {
            let cvalido = document.fcontacto.correo.value;
            if (!cvalido.includes("@")) {
                alert("Correo no valido");
                document.fcontacto.correo.focus();
                return 0;
            }
            else {
                if (!cvalido.includes(".com") && !cvalido.includes(".edu") && !cvalido.includes(".org")) {
                    alert("Correo no valido");
                    document.fcontacto.correo.focus();
                    return 0;
                }
            }
        }

        if (document.fcontacto.telefono.value.length > 0) {
            let telefono = document.fcontacto.telefono.value;
            alert("leo te" + telefono);
            telefono = validarEntero(telefono);
            alert("valido te" + telefono);
            document.fcontacto.telefono.value = telefono;
            if (telefono == "") {
                alert("Tiene que introducir un número entero en su teléfono.");
                document.fcontacto.telefono.focus();
                return 0;
            }
        }
        if (document.fcontacto.celular.value.length > 0) {
            let celular = document.fcontacto.celular.value;
            celular = validarEntero(celular);
            document.fcontacto.celular.value = telefono;
            if (celular == "") {
                alert("Tiene que introducir un número entero en su teléfono movil.");
                document.fcontacto.telefono.focus();
                return 0;
            }
        }
    }
    if (document.fcontacto.mensaje.value.length == 0) {
        alert("Tiene que escribir su consulta");
        document.fcontacto.mensaje.focus();
        return 0;
    }

    //Finalmente, si llegó hasta aqui, se envia el form.
    alert("Muchas gracias por enviar su Consulta");
    document.fcontacto.submit();
}


function validarEntero(valor) {
    //intento convertir a entero.
    //si era un entero no le afecta, si no lo era lo intenta convertir
    valor = parseInt(valor);

    //Compruebo si es un valor numérico
    if (isNaN(valor)) {
        //entonces (no es numero) devuelvo el valor cadena vacia
        return "";
    } else {
        //En caso contrario (Si era un número) devuelvo el valor
        return valor;
    }

}