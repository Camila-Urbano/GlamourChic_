
const cita = document.querySelector(".cita");
const x = document.querySelector(".fa-xmark");
const agenda = document.querySelector(".agendar");
const icon_cita = document.getElementById("icon_agenda");


agenda.onclick = () =>
{
    cita.style.display = "grid";
}

icon_cita.onclick = () =>
{
    cita.style.display = "grid";
}

x.onclick = () =>
{
    cita.style.display = "none";
}

function validarFormulario() 
{
    var checkbox = document.getElementById('acepto_checkbox');
    var nombre = document.getElementsByName('nombre_completo')[0].value;
    var correo = document.getElementsByName('correo')[0].value;
    var coment = document.getElementsByName('ayuda')[0].value;

    if (nombre.trim() === "" || correo.trim() === "" || coment.trim() === "") 
    {
        alert("Por favor, completa todos los campos.");
        return false; // Evita que se envíe el formulario
    }

    if (!checkbox.checked) 
    {
        alert("Debes aceptar el tratamiento de tus datos.");
        return false; // Evita que se envíe el formulario
    }
    
    location.reload();

    // Mostrar un mensaje de confirmación
    alert("Los datos se han enviado correctamente.");

    return false; // Evita que se envíe el formulario
}