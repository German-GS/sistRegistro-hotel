var getData = function(){
    persona=[]
    persona.forEach(element => {
        persona=element
        
    });
    
    const name= document.getElementById("name").value 
    const last_name=document.getElementById("last_name").value 
    const number_nights=document.getElementById("num_Nights").value
    const email=document.getElementById("email").value
    const numCel = document.getElementById("num_celular").value
    validation()
    console.log("La persona ", name)
    cleanForm()
}

function cleanForm(){
    document.getElementById("name").value =""
    document.getElementById("last_name").value ="" 
    document.getElementById("num_Nights").value =""
}
/* 
function llenarPersona(name, last_Name, num_Nights, email, numCel){

    persona=[name, last_Name, num_Nights, email, numCel]
    return persona[0]
} */


function validation(){
    if (name == ""){
        document.getElementById("name").focus()

    }else if(last_Name == ""){
        document.getElementById("last_name").focus()

    }else if (num_Nights == 0){
        document.getElementById("num_Nights").focus() 
    }else{
        cleanForm()
    }
    
}

const list_clients=document.querySelector("ul")
const li=document.createElement('li')
li.textContent= llenarPersona()
list_clients.appendChild(li)

