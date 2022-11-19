import { mostraDatos } from "./cards.js";
import { calcDays } from "./days.js";

const button = document.querySelector(".btn") 
button.addEventListener('click', getData)

function getData(){
    var persona=[]
    for (var i = 0; i <=5; i++){
        persona[i]=document.getElementById("persona"+(i+1)).value
    }
   /*  validation(persona)
    persona.forEach(element => {
        console.log(element)
        
    }); */
    var days= calcDays(persona)
    mostraDatos(persona, days)
    cleanForm(persona)
}



function cleanForm(persona){ // Limpia el formulario 
    for(var i=0; i<persona.length; i++){
        document.getElementById("persona"+(i+1)).value = ""
    }
}

function validation(persona){
    
    for (var i=0; i<persona.length; i++){
        if(persona[i] ==""){
            document.getElementById("persona"+(i+1)).focus()
        }
    }

}
