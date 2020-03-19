function guardarDatos() {
          localStorage.nombre = document.getElementById("nombres").value;
          localStorage.identificacion = document.getElementById("identificacion").value;
          localStorage.edad = document.getElementById("edad").value;
          localStorage.correo = document.getElementById("correo").value;
          localStorage.estadocivil = document.getElementById("estadocivil").value;
          localStorage.telefono = document.getElementById("telefono").value;
          localStorage.perfil = document.getElementById("perfil").value;
          localStorage.infoacademica = document.getElementById("infoacademica").value;
          localStorage.infoocupasional = document.getElementById("infoocupasional").value;
        }

       function recuperarDatos() {
          if ((localStorage.nombre != undefined) && (localStorage.identificacion != undefined) && (localStorage.edad != undefined) && (localStorage.correo != undefined) 
            && (localStorage.estadocivil != undefined) && (localStorage.telefono != undefined) && (localStorage.perfil != undefined) && (localStorage.infoacademica != undefined) && (localStorage.infoocupasional != undefined))  {
         document.getElementById("recuperar").innerHTML = "Nombres y Apellidos: " + localStorage.nombre + " identificacion: " + localStorage.identificacion + " edad: " + localStorage.edad + " correo: " + localStorage.correo + " estadocivil: " + localStorage.estadocivil + " telefono: " + localStorage.telefono + " perfil: " + localStorage.perfil + " Información academica: " + localStorage.infoacademica + " Información Profesional: " + localStorage.infoocupasional;
         } else {
        document.getElementById("recuperar").innerHTML = "No se ha podido recuperar la informacion de tu hoja de vida";
       }
      }    