
var getData = function(){ //Captura la informacion del formulario y la guarda en un array
    persona=[]
    for (var i = 0; i <=4; i++){
        persona[i]=document.getElementById("persona"+(i+1)).value
    }
    validation(persona)
    persona.forEach(element => {
        console.log(element)
        
    });
    mostraDatos(persona)

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

function mostraDatos(persona){ // Puede tener ingresado una clase, id o tag de html
    listaPersona=document.querySelector(".col-sm-4")
//==================================================
    card= document.createElement('div')
    card.classList.add('card')
    divCardBody= document.createElement('div')
    divCardBody.classList.add('card-body')
//===================================================
    titleCard=document.createElement('h5')
    titleCard.classList.add('card-title')
    textCont=document.createTextNode(persona[0]+ " "+ persona[1])
    titleCard.appendChild(textCont)
//==================================================
    contetCard=document.createElement('p')
    contetCard.classList.add('card-text')
    textContCard=document.createTextNode("Datos contacto: " + persona[3] + " " + persona[2] + " se quedara "+ persona[4]+ " noches")
    contetCard.appendChild(textContCard)
//=================================================
    divCardBody.appendChild(titleCard)
    divCardBody.appendChild(contetCard)
    card.appendChild(divCardBody)
    listaPersona.appendChild(card)


        
}



