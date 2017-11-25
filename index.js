function produceDrivingRange(maxLength) {
  return function(startBlock, endBlock) {
    startBlock = parseInt(startBlock.replace("th", ""))
    endBlock = parseInt(endBlock.replace("th", ""))
    let distance = Math.abs(startBlock - endBlock)

    if (distance < maxLength) {
      return `within range by ${Math.abs(distance - maxLength)}`
    }
    else {
      return `${Math.abs(distance - maxLength)} blocks out of range`
    }
  }
}

function produceTipCalculator(tipAmount) {
  return function(total) {
    return total * tipAmount;
  }
}
