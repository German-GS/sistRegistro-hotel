
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
    var text_h5=document.createTextNode(persona[0])
    var cont_p=document.createTextNode("Datos contacto: " + persona[2] + " " + persona[1] + " se quedara "+ days + " noches. "+ valiRoom(persona))
//========================================================== btn
    var divBtn=document.createElement('div')
    divBtn.classList.add('d-grid')
    divBtn.classList.add('gap-2')
    divBtn.classList.add('d-md-block')
    var btnCheckIn =document.createElement("button")
    btnCheckIn.type="button"
    btnCheckIn.classList.add("btn", "btn-success", "btn-sm")
    btnCheckIn.innerHTML = "Check In"
    var btnCheckOut =document.createElement("button")
    btnCheckOut.type="button"
    btnCheckOut.classList.add("btn","btn-warning", "btn-sm")
    btnCheckOut.innerHTML = "Check Out" 
    var btnBorrar =document.createElement("button")
    btnBorrar.type="button"
    btnBorrar.classList.add("btn", "btn-danger", "btn-sm")
    btnBorrar.innerHTML = "Borrar" 
    divBtn.appendChild(btnCheckIn)
    divBtn.appendChild(btnCheckOut)
    divBtn.appendChild(btnBorrar)
//==========================================================
    tit_h5.appendChild(text_h5)
    text_p.appendChild(cont_p)
    cardBody.appendChild(tit_h5)
    cardBody.appendChild(text_p)
    card.appendChild(cardBody)
    card.appendChild(divBtn)
    gridCards.appendChild(card)
    cardsCliente.appendChild(gridCards)

        
}

//====================validacion de tipo de habitacion====

function valiRoom(persona){
    var val=persona[3]
    if(val == 0){
        val = "Habitacion sencilla"
    }else{
        val= "Habitacion doble"
    }
    return val
}


/* function createBtn(card){
    var classBtn=["btn-succes", "btn-danger", "btn-warning"]
    var namesBtn=["Chec In", "Chec Out", "Borrar"]
    var btn =document.createElement("button")
    btn.type="button"
    btn.classList.add("btn")
    for (var i=0; i<=2; i++) {
        btn.classList.add(classBtn[i])
        btn.innerHTML=namesBtn[i]
        classBtn.forEach(element =>{
            card.appendChild(btn)

        })
        
        console.log(btn)
    }
}
 */
export {mostraDatos}