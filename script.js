// 5- Realizar una web con un cronómetro, que tenga las opciones de iniciar, reset (volver el cronómetro a 0) y pausar.

//VARIABLES
const btn_iniciar = document.querySelector("#btn_iniciar");
const btn_pausar = document.querySelector("#btn_pausar");
const btn_resetear = document.querySelector("#btn_resetear");
const paragraph_chronometer = document.querySelector("#paragraph_chronometer");
let contador_horas = 0;
let contador_minutos = 0;
let contador_segundos = 0;
let contador;

//FUNCIONES
function iniciar(){
    contador = setInterval(()=>{
            
        if(contador_segundos == 59){
            contador_segundos = 0;
            contador_minutos++;
            contador_minutos = contador_minutos.toString().padStart(2,"0");            
        }
        
        if(contador_minutos == 60){
            contador_minutos = 0;
            contador_horas++;
            contador_horas = contador_horas.toString().padStart(2,"0");
            contador_minutos = contador_minutos.toString().padStart(2,"0");
            paragraph_chronometer.innerHTML = `${contador_horas}:${contador_minutos}:${contador_segundos}`;
        }

        if(contador_minutos <= 9){
            contador_minutos = contador_minutos.toString().padStart(2,"0");            
        }
        
        contador_segundos++;
        contador_segundos = contador_segundos.toString().padStart(2,"0");
        paragraph_chronometer.innerHTML = `00:${contador_minutos}:${contador_segundos}`;
    
        // //Obteniendo hora
        // let horas = tiempo.getHours().toString().padStart(2,"0");
        // //Obteniendo minutos
        // let minutos = tiempo.getMinutes().toString().padStart(2,"0");
        // //Obteniendo segundos
        // let segundos = tiempo.getSeconds().toString().padStart(2,"0");
    
        // paragraph_chronometer.innerHTML = `${horas}:${minutos}:${segundos}`;
    
    }, 1000);
}
function detener(){
    clearInterval(contador);
}
function resetear(){
    contador_horas = 0;
    contador_horas = contador_horas.toString().padStart(2,"0");
    contador_minutos = 0;
    contador_minutos = contador_minutos.toString().padStart(2,"0");
    contador_segundos = 0;
    contador_segundos = contador_segundos.toString().padStart(2,"0");
    paragraph_chronometer.innerHTML = `${contador_horas}:${contador_minutos}:${contador_segundos}`;
}

//EVENTOS
btn_iniciar.addEventListener("click",() =>{
    iniciar();
});
btn_pausar.addEventListener("click",()=>{
    detener();
});
btn_resetear.addEventListener("click",() =>{
    resetear();
});
