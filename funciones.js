const formulario = document.getElementById('miFormulario');
const nombre = document.getElementById('nombre');
const documento = document.getElementById('documento');
const telefono = document.getElementById('telefono');
const correo = document.getElementById('correo');
const perfil = document.getElementById('perfil');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Opcional: Recorte automático si se pasa de 500 caracteres en el perfil
if (perfil) {
    perfil.addEventListener('input', () => {
        if (perfil.value.length > 500) {
            perfil.value = perfil.value.substring(0, 500);
        }
    });
}

// Validación al enviar el formulario
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    let todoCorrecto = true;

    // 1. Validar Nombre
    if (nombre.value.trim() === "") {
        document.getElementById('errorNombre').style.display = 'block';
        nombre.style.borderColor = '#f87171';
        todoCorrecto = false;
    } else {
        document.getElementById('errorNombre').style.display = 'none';
        nombre.style.borderColor = 'rgba(250, 204, 21, 0.2)';
    }

    // 2. Validar Documento
    if (documento && documento.value.trim() === "") {
        document.getElementById('errorDocumento').style.display = 'block';
        documento.style.borderColor = '#f87171';
        todoCorrecto = false;
    } else if (documento) {
        document.getElementById('errorDocumento').style.display = 'none';
        documento.style.borderColor = 'rgba(250, 204, 21, 0.2)';
    }

    // 3. Validar Teléfono
    if (telefono && telefono.value.trim() === "") {
        document.getElementById('errorTelefono').style.display = 'block';
        telefono.style.borderColor = '#f87171';
        todoCorrecto = false;
    } else if (telefono) {
        document.getElementById('errorTelefono').style.display = 'none';
        telefono.style.borderColor = 'rgba(250, 204, 21, 0.2)';
    }

    // 4. Validar Correo
    if (correo.value.trim() === "" || !emailRegex.test(correo.value.trim())) {
        document.getElementById('errorCorreo').style.display = 'block';
        correo.style.borderColor = '#f87171';
        todoCorrecto = false;
    } else {
        document.getElementById('errorCorreo').style.display = 'none';
        correo.style.borderColor = 'rgba(250, 204, 21, 0.2)';
    }

    // 5. Validar Perfil Profesional (mínimo 10 caracteres)
    if (perfil && perfil.value.trim().length < 10) {
        document.getElementById('errorPerfil').style.display = 'block';
        perfil.style.borderColor = '#f87171';
        todoCorrecto = false;
    } else if (perfil) {
        document.getElementById('errorPerfil').style.display = 'none';
        perfil.style.borderColor = 'rgba(250, 204, 21, 0.2)';
    }

    // Respuesta de Éxito
    if (todoCorrecto) {
        document.getElementById('alertaExito').style.display = 'block';
        formulario.reset();
        
        // Ocultar alerta de éxito después de 5 segundos
        setTimeout(() => {
            document.getElementById('alertaExito').style.display = 'none';
        }, 5000);
    }
});