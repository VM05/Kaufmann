const burger = document.querySelector('.burger');
const modal = document.querySelector('.info-usuario');
const cerrar = document.querySelector('.cerrar');
const interno = document.querySelector('.main-interno');

burger.addEventListener('click',mostrarModal)
cerrar.addEventListener('click',cerrarModal)

function mostrarModal(e){
    e.preventDefault();
    modal.style.display = "flex";
    interno.style.position = "fixed";
    
}

function cerrarModal(e){
    e.preventDefault();
    modal.style.display = "none";
    interno.style.position = "static";


}