const botonVerCoches= document.getElementById("verCoches");
function Mover(){
    const seccion= document.getElementById("coches");
    seccion.scrollIntoView();
}
botonVerCoches.addEventListener("click",Mover);

const btnMasInfo = document.querySelectorAll(".masInfo");
let cont=0;
btnMasInfo.forEach(btn => {
    btn.addEventListener("click", function () {
        const tarjeta = this.closest(".contenedorGira");
        if(!tarjeta.classList.contains("giro")){
            cont++;
            document.getElementById("vistos").innerHTML="Coches vistos: "+cont;
        }
        tarjeta.classList.toggle("giro");
    });
});

const todasTarjetas= document.querySelectorAll(".contenedorGira");
document.addEventListener("click",function(evento){
    todasTarjetas.forEach(function(tarjeta){
        if (tarjeta.classList.contains("giro")) {
            if(!tarjeta.contains(evento.target)){
                tarjeta.classList.remove("giro");
            }
        }
    });
});
const btnEnviar=document.getElementById("enviar");
btnEnviar.addEventListener("click",function(){
    alert("Tus informacion han sido enviada, Gracias");
})