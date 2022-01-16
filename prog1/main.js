// Add your code here
const menu = document.querySelector(".menu");
const btnStop = document.getElementById("btnStop");
let verificador = true

//array de los elementos
const elements = [document.getElementById('elem1'),document.getElementById('elem2'),document.getElementById('elem3')];
const className = ["Elem1","Elem2","Elem3"];

//evento que inicia el programa
document.getElementById("btnClick").addEventListener("click", ()=>{
     
     for(let i = 0; i< elements.length; i++){
        elements[i].classList.add(className[i])

        if(menu.children[i].getAttribute("id")!== "btnClick"){
            menu.children[i].classList.remove("invisible");
        }
     }
     btnClick.classList.add("invisible");     
})




//funciones del evento que pausa
const active = ()=>{
    for(let i = 0; i< elements.length; i++){
        elements[i].style.animation = ""
     }
    btnStop.value = "pausar";

    btnStop.removeEventListener("click",active)
    btnStop.addEventListener("click",stop);
    verificador = true  
}

const stop = ()=>{
    for(let i = 0; i< elements.length; i++){
        elements[i].style.animation = "paused"
     }
    btnStop.value = "reanudar";
    
    btnStop.removeEventListener("click",stop)
    btnStop.addEventListener("click",active)
    value = false
}

//evento que pausa la animacion
btnStop.addEventListener("click", stop)





//evento que reinicia el programa
document.getElementById("btnReload").addEventListener("click",()=>{
     
    for(let i = 0; i< elements.length; i++){
        elements[i].classList.remove(className[i])

        if(menu.children[i].getAttribute("id")!== "btnClick"){
            menu.children[i].classList.add("invisible");
        }
     }

     if(verificador === true){
         active();
     }
     btnClick.classList.remove("invisible");  
})




