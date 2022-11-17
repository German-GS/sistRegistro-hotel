var getData = function(){
    persona=[]
    for (var i = 0; i <=4; i++){
        persona[i]=document.getElementById("persona"+(i+1)).value
    }

    persona.forEach(element => {
        console.log(element)
        
    });
}


