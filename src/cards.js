
function mostraDatos(persona, days){ 
    var days= days
    var cardsCliente =document.querySelector('.card-clients')// Puede tener ingresado una clase, id o tag de html
//=============================================================
    var gridCards=document.createElement('div')
    var card=document.createElement('div')
    var cardBody=document.createElement('div')
    gridCards.classList.add('col-sm-4')
    card.classList.add('card')
    cardBody.classList.add('card-body')
//=============================================================
    var tit_h5= document.createElement('h5')
    var text_p= document.createElement('p')
    tit_h5.classList.add('card-title')
    text_p.classList.add('card-text')
//============================================================
    var text_h5=document.createTextNode(persona[0] + " "+ persona[1])
    var cont_p=document.createTextNode("Datos contacto: " + persona[3] + " " + persona[2] + " se quedara "+ days + " noches")
//==========================================================
    tit_h5.appendChild(text_h5)
    text_p.appendChild(cont_p)
    cardBody.appendChild(tit_h5)
    cardBody.appendChild(text_p)
    card.appendChild(cardBody)
    gridCards.appendChild(card)
    cardsCliente.appendChild(gridCards)



        
}

export {mostraDatos}