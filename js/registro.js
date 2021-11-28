function guardar() {
    debugger;
    var name = $.trim($("#nombre").val());
    var email = $.trim($("#email").val());
    var password = $.trim($("#password").val());
    var cfpassword = $.trim($("#cfpassword").val());
    if (name != "" && email != "" && password != "" && cfpassword != "") {
        if (password != cfpassword) {
            alert("Las password no coinciden");
                $("#cfpassword").focus();
        } else {
            $.ajax({
                url: 'http://localhost:8070/api/user/new',
                data: JSON.stringify({
                    "email": email,
                    "password": password,
                    "name": name
                }),
                type: 'POST',
                contentType: 'application/json',
                //dataType: 'json',
                error: function (result) { alert('Error: Ver log para detalles.'); console.log(result); },
                success: function (respuesta) {
                    /*console.log(respuesta);
                    if (respuesta.id == null) {
                        alert("No fue posible crear la cuenta.")
                        //$("#nombre").focus();
                        //$("#email").focus();
                    } else {*/
                        alert('Cuenta creada de forma correcta.');
                        
                        $("#formf").trigger("reset");
                    //$(':input').val('');
                    //$("#nombre").focus();
                }

            });
        }
        return false;
    }

}

function login(){
    var email= $.trim($("#email").val());
    var password= $.trim($("#password").val());
    if(email != "" && password != ""){
        $.ajax({
            url: 'http://localhost:8070/api/user/'+email+"/"+password,
            type: 'GET',
            contentType: 'application/json',
            dataType: 'json',
            error: function (result) { alert('Error: Ver log para detalles.'); console.log(result); },
            success: function (respuesta) {
                console.log(respuesta);
                if (respuesta.id == null) {
                    alert("No existe un usuario con estos datos.")
                } else {
                    alert('Bienvenido '+respuesta.name);
                }
                $(':input').val('');
                $("#email").focus();
            }           
        });
        
        return false;       
    }   
}




















































/*function registro() {
    var name = $("#nombre").val()
    var email = $("#email").val()
    var password = $("#password").val()
    var cfpassword = $("#cfpassword").val()
    console.log(name);
    /*if(name==""){
        name.
    }
    if (password != cfpassword) {
        alert("EL PASSWORD NO COINCIDE")
        $("#cfpassword").focus();
    } else {
        $.ajax({
            url: 'http://localhost:8080/api/user/new',
            data: JSON.stringify({
                "email": email,
                "password": password,
                "name": name
            }),
            type: 'POST',
            contentType: 'application/json',
            dataType: 'json',
            error: function (result) { alert('Error: Ver log para detalles.'); console.log(result); },
            success: function (respuesta) {
                console.log(respuesta);
                if (respuesta.id == null) {
                    alert("El nombre y correo ya existe")
                } else {

                    alert('Te has registrado correctamente.');
                }
            }
            /*data : {
                //id : $("#id").val(),
                email : email,
                password : password,
                name : name
            },
            type : 'POST',
            datatype : 'json',
            success: function (respuesta, textStatus, xhr) {
                //$("#resultado").empty();
                //$("#id").val("");
                $("#nombre").val("");
                $("#email").val("");
                $("#password").val("");
                $("#cfpassword").val("");
                //consultarCliente();
                console.log(respuesta);
            },
            error: function (xhr, status) {
                alert('Ha sucedido un problema, ' + xhr.status);
            },
            complete: function (xhr, status) {
                alert('Registro guardado, ' + xhr.status);
            }
        });
    }
    $.ajax({
        url: 'http://localhost:8080/api/user/new',
        data : {
            //id : $("#id").val(),
            email : $("#nombre").val(),
            password : $("#valor").val(),
            name : $("#fecha").val(),
            descripcion : $("#desc").val(),
            nombre_usuario : $("#user").val() },
        type : 'POST',
        datatype : 'json',
    }
}*/

/*$("#btn").click(function(){
    alert("hola");
    /*if($.trim($("#nombre").val())==""){
        $("#nombre").attr("required", true);
    }*/


//});


/*$("#guardar").click(function () {
    alert("hola");
    if($.trim($("#emailRegistro").val()) == "" || $.trim($("#usuarioRegistro").val()) == "" || $.trim($("#contrasenaRegistro").val()) == "" || $.trim($("#contrasenaRegistro2").val()) == ""){
        alert("Por favor ingrese todos los campos");
    }else{
        if($("#contrasenaRegistro").val() == $("#contrasenaRegistro2").val()){
            let datos = {
                email: $("#emailRegistro").val(),
                password: $("#contrasenaRegistro").val(),
                name: $("#usuarioRegistro").val()
            }
            $.ajax({
                url:"http://localhost:8080/api/user/new",
                method:"POST",
                dataType:"json",
                data:JSON.stringify(datos),
                contentType:"application/json",
                Headers:{
                    "Content-Type":"application/json"
                },
                statusCode: {
                    201: function(response){
                        console.log(response);
                    }
                }
            });
        }else{
            alert("Las contraseñas no coinciden");
        }
    }
});*/

