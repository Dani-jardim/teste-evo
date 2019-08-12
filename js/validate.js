
//   var allDados=[];
//   allDados.push(localStorage.getItem("frm"));
//   mostrar();


//   function guardarDados(){
    
//     validate();
//     dados= [];

    
//     dados.push(document.getElementById("name-register").value);
//     dados.push ($("#email-register").val());
//     dados.push ($("#password-register").val());

//     allDados.push(dados);

//     arjson = JSON.stringify(allDados);
    
//     localStorage.setItem("frm",arjson);
//     erase();
//     mostrar();
//   }

//   function mostrar(){
    
//     campos = JSON.parse(localStorage.getItem("frm"));
//       for (x=0; x < campos.length; x++){
//         $("#table").append("<tr> <td> "+campos[x][0]+" </td> <td> "+campos[x][1]+" </td> <td> "+campos[x][2]+" </td> <button>VER</button> </tr>");
//       }
//   }

//   function validate (){
//     password = $("#password-register").val();

//   if(password.length < 8){
//     alert("A senha deve ter no minimo 8 caracteres");
//     return false;
//   }

// }

// function erase(){
//   $("name-register").val("");
//   $("email-register").val("");
//   $("password-register").val("");

// }
  