$(document).ready(function(){
    let movil = isMobile();
    if(movil){
        $("#menuAdministracion").load("html/menuAdminMovil.html");   
    } else {
        $("#menuAdministracion").load("html/menuAdminLateral.html");   
    }
    $("#cabecera").load("html/cabeceraWeb.html");   
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

