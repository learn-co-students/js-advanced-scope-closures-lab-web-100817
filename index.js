function produceDrivingRange(blockRange) {
  return function(block1, block2) {
    let blockDiff = parseInt(block2)-parseInt(block1)
    let rangeDiff = Math.abs(blockRange - blockDiff)

    if (blockDiff > blockRange) {
      return `${rangeDiff} blocks out of range`
    } else {
      return `within range by ${rangeDiff}`
    }
  }
}

function produceTipCalculator(percent){
  return function(bill){
    return bill*percent
  }
}

function createDriver() {
  let driverId = 0
  return class Driver {
    constructor(name) {
      this.name = name
      this.id = ++driverId
    }
  }
}
