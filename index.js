function produceDrivingRange(range){
  return function(tripStart, tripEnd){
    const distance = Math.abs(tripStart.replace(/\D/g,'') - tripEnd.replace(/\D/g,''))
    if (distance > range){
      return `${distance - range} blocks out of range`
    }
    else {
      return `within range by ${range - distance}`
    }
  }
}


function produceTipCalculator(tip){
  return function(total){
    return tip * total
  }

}
