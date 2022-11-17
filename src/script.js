
var getData = function(){ //Captura la informacion del formulario y la guarda en un array
    persona=[]
    for (var i = 0; i <=4; i++){
        persona[i]=document.getElementById("persona"+(i+1)).value
    }
    validation(persona)
    persona.forEach(element => {
        console.log(element)
        
    });
    llenarForm(persona)

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

function llenarForm(persona){
    const listaPersona=document.querySelector(".list-group")// Puede tener ingresado una clase, id o tag de html
    persona.forEach(elemento=>{
        const li=document.createElement('li')
        li.classList.add('list-group-item')
        li.textContent=elemento
        listaPersona.appendChild(li)
        
    })
}



