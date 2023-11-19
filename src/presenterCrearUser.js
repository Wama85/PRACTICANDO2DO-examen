import {Usuario} from "./models/Usuario";
const txtusername=document.getElementById("txtusername");
const txtreppass=document.getElementById("txtreppass");
const txtpassword=document.getElementById("txtpassword");
const detalleCatalogo = document.getElementById("contenido");
const crear = document.getElementById("btncrearuser");

detalleCatalogo.innerHTML="";
function verificarPasswordRepetida(usuario, repetirpassword){
    return usuario.getPassword()===repetirpassword;
}

function crearusuario(){
    let username=txtusername.value;
    let password=txtpassword.value;
    let repetirpassword=txtreppass.value;
    let usuario = new Usuario(username,password);
    console.log(usuario)
    if(usuario.validarCampos() && verificarPasswordRepetida(usuario,repetirpassword)){
        alert("Usuario creado con éxitosamente");
    }else{
        alert("Todos los campos son obligatorios o la contraseña no es idéntica");

    }
  }
  crear.addEventListener("click",(event)=>{
    event.preventDefault();
    crearusuario();
  });

export {crearusuario};