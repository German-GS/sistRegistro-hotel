var getData = function(){
    
    const name= document.getElementById("name").value 
    const last_name=document.getElementById("last_name").value 
    const number_nights=document.getElementById("num_Nights").value
    validation()
    console.log(name, " ", last_name)
    cleanForm()

}

function cleanForm(){
    document.getElementById("name").value =""
    document.getElementById("last_name").value ="" 
    document.getElementById("num_Nights").value =""
}


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

