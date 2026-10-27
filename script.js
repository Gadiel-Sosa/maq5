$("#btn").click(() => {
    let emailVal = $("#email").val().trim();

    if (emailVal == '') {
        alert("Escribe un correo");
        $("#email").focus();
        return false;
    }

    let expresionCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!expresionCorreo.test(emailVal)) {
        alert("Escribe un correo válido");
        $("#email").focus();
        return false;
    }

    $("#form").submit();
})