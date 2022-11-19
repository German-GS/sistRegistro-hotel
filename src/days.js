function calcDays(persona){
    var dateCheckIn = new Date(persona[4])
    var dateChechOut = new Date(persona[5])
    var difDays = dateChechOut.getTime()- dateCheckIn.getTime()
    return Math.round((difDays - 1) / (1000*60*60*24))
}

export {calcDays}