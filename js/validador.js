function validacion(){
        var nombre = document.getElementById("nombre").value;
        var telefono = document.getElementById("telefono").value;
        var dia = document.getElementById("dia").value;
        var mes = document.getElementById("mes").value;
        var ano = document.getElementById("ano").value;
        var mayor = document.getElementById("mayor").checked;
        if (nombre == ""){
        alert("Por favor ingrese un nombre");
        return false;
        }
        if (telefono == ""){
        alert("Por favor ingrese un telefono");
        return false;
        }
        if (dia == ""){
        alert("Por favor ingrese una fecha de nacimiento");
        return false;
        }
        if(!mayor){
          alert("Confirme mayoría de edad");
          return false;
        }
        if ((nombre != "") && (telefono != "") && (dia != "")){
        Swal.fire(
          'Muy bien!',
          'Completaste el formulario kawai!',
          'success pink!s'
        )
        return false;
        }

}
