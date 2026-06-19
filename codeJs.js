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


const input=document.getElementById("buscarInp");
const tarjetasCoche=document.querySelectorAll(".contenedorGira");
input.addEventListener("keypress",function(event){
    if(event.key==="Enter"){
        Buscar();
    }
});
function Buscar(){
    let cont=0;
    const palabra=input.value.toLowerCase().trim();
    todasTarjetas.forEach(function(tarjeta){
        const modeloCoche=tarjeta.getAttribute("modelo").toLocaleLowerCase();
        if(palabra===""){
            tarjeta.style.display="block";
            cont++;
            Mover();
        }
        else if(modeloCoche.includes(palabra)){
            tarjeta.style.display="block";
            cont++;
            Mover();
        }
        else{
            tarjeta.style.display="none";
            Mover();
        }
        if(cont==0){
            document.getElementById("sinResultados").style.display="block";
        }
        else
            document.getElementById("sinResultados").style.display="none";
    });
}
