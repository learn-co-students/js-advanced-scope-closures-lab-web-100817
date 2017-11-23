function produceDrivingRange(range) {
  return function BlockRange(block1, block2) {
    const blocks = Math.abs(parseInt(block1) - parseInt(block2))
    const result = range - blocks;
    if (result < 0) {
      return `${Math.abs(result)} blocks out of range`
    } else {
      return `within range by ${result}`
    }
  }
}

function produceTipCalculator(percentage) {
  return function calculateTip(bill) {
    return bill * percentage;
  }
}

function createDriver() {
  let driverIds = 0;
  return class Driver {
    constructor(name) {
      this.name = name
      this.id = ++driverIds;
    }
  }
}