$(document).ready(function(){
    let movil = isMobile();
    let ancho = $( window ).width();

    if(movil && ancho<=980){
        $("#menuAdministracion").load("html/menuAdminMovil.html");   
    } else {
        $("#menuAdministracion").load("html/menuAdminLateral.html");   
    }
    if(movil && ancho<=980){
        $("#cabecera").load("html/cabeceraWebMovil.html");  
        $("#ventanaModal").load("html/modalInicioSesion.html");  
        $("#ventanaModalUsuario").load("html/modalUsuario.html");  
    } else {
        $("#cabecera").load("html/cabeceraWeb.html");  
        $("#ventanaModal").load("html/modalInicioSesion.html");  
        $("#ventanaModalUsuario").load("html/modalUsuario.html");  
    }
})

function isMobile() {
    try{ 
        document.createEvent("TouchEvent"); 
        return true; 
    }
    catch(e){ 
        return false;
    }
}

