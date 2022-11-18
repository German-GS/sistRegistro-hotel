var getData = function(){ //Captura la informacion del formulario y la guarda en un array
    persona=[]
    for (var i = 0; i <=5; i++){
        persona[i]=document.getElementById("persona"+(i+1)).value
    }
    validation(persona)
    persona.forEach(element => {
        console.log(element)
        
    });

    var days=calcDays(persona)
    console.log(days)
    mostraDatos(persona)

    cleanForm(persona)
}

function calcDays(persona){
    dateCheckIn = new Date(persona[4])
    dateChechOut = new Date(persona[5])
    difDays = dateChechOut.getTime()- dateCheckIn.getTime()
    return Math.round(difDays / (1000*60*60*24))
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

function mostraDatos(persona){ 

    cardsCliente =document.querySelector('.card-clients')// Puede tener ingresado una clase, id o tag de html
//=============================================================
    gridCards=document.createElement('div')
    card=document.createElement('div')
    cardBody=document.createElement('div')
    gridCards.classList.add('col-sm-4')
    card.classList.add('card')
    cardBody.classList.add('card-body')
//=============================================================
    tit_h5= document.createElement('h5')
    text_p= document.createElement('p')
    tit_h5.classList.add('card-title')
    text_p.classList.add('card-text')
//============================================================
    text_h5=document.createTextNode(persona[0] + " "+ persona[1])
    cont_p=document.createTextNode("Datos contacto: " + persona[3] + " " + persona[2] + " se quedara "+ persona[4]+ " noches")
//==========================================================
    tit_h5.appendChild(text_h5)
    text_p.appendChild(cont_p)
    cardBody.appendChild(tit_h5)
    cardBody.appendChild(text_p)
    card.appendChild(cardBody)
    gridCards.appendChild(card)
    cardsCliente.appendChild(gridCards)



        
}