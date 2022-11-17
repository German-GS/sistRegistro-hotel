var getData = function(){
    persona=[]
   for (var i = 0; i <=4; i++){
        persona[i]=document.getElementById("persona"+(i+1)).value
    }
    validation(persona)
    persona.forEach(element => {
        console.log(element)
        
    });

    cleanForm(persona)
}

function cleanForm(persona){
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


