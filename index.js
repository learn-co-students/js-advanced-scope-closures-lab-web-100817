// function retailPriceMaker(manufacturePrice){
//   return function(marketMultiplier){
//     return marketMultiplier * manufacturePrice;
//   }
// }

function produceDrivingRange(blockRange){
  return function(block1,block2){
    let distance = parseInt(block2)-parseInt(block1)
    let difference = Math.abs(blockRange - distance)
    if (distance > blockRange){
      return `${difference} blocks out of range`
    } else {
      return `within range by ${difference}`
    }

  }
}

function produceTipCalculator(percent){
  return function(fare){
    return fare*percent
  }
}
