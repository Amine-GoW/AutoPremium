const botonVerCoches= document.getElementById("verCoches");
function Mover(){
    const seccion= document.getElementById("coches");
    seccion.scrollIntoView();
}
botonVerCoches.addEventListener("click",Mover);

const btnMasInfo = document.querySelectorAll(".masInfo");

btnMasInfo.forEach(btn => {
    btn.addEventListener("click", function () {
        const tarjeta = this.closest(".contenedorGira");
        tarjeta.classList.toggle("giro");
    });
});