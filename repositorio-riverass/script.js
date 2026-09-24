
const formulario = document.getElementById('miFormulario');

formulario.addEventListener('submit', function(e) {
    e.preventDefault(); 

    // 1. Ocultar todos los mensajes de error y la alerta de éxito al iniciar la revisión
    document.getElementById('errorNombre').style.display = 'none';
    document.getElementById('errorDocumento').style.display = 'none';
    document.getElementById('errorTelefono').style.display = 'none';
    document.getElementById('errorCorreo').style.display = 'none';
    document.getElementById('errorPerfil').style.display = 'none';
    document.getElementById('alertaExito').style.display = 'none';

    let todoCompleto = true;

    // 2. Revisar Nombre
    if (document.getElementById('nombre').value.trim() === '') {
        document.getElementById('errorNombre').style.display = 'block';
        todoCompleto = false;
    }

    // 3. Revisar Documento
    if (document.getElementById('documento').value.trim() === '') {
        document.getElementById('errorDocumento').style.display = 'block';
        todoCompleto = false;
    }

    // 4. Revisar Teléfono
    if (document.getElementById('telefono').value.trim() === '') {
        document.getElementById('errorTelefono').style.display = 'block';
        todoCompleto = false;
    }

    // 5. Revisar Correo
    if (document.getElementById('correo').value.trim() === '') {
        document.getElementById('errorCorreo').style.display = 'block';
        todoCompleto = false;
    }

    // 6. Revisar Perfil
    if (document.getElementById('perfil').value.trim() === '') {
        document.getElementById('errorPerfil').style.display = 'block';
        todoCompleto = false;
    }

    // 7. Si absolutamente todas las casillas tienen texto, muestra el éxito
    if (todoCompleto) {
        document.getElementById('alertaExito').style.display = 'block';
        formulario.reset(); // Limpia los campos
    }
});