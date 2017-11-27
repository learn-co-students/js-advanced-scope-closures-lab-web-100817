function produceDrivingRange(blockRange){
    return function(block1, block2){
      let x = parseInt(block1);
      let y = parseInt(block2);
      let distance = Math.abs(x - y);
      if (distance > blockRange) {
        return `${distance - blockRange} blocks out of range`
      } else {
        return `within range by ${blockRange - distance}`
      }
    }
  }

function produceTipCalculator(tip_percetage){
    return function(cost){
      return cost * tip_percetage;
    }
  }

function createDriver() {
  let driverId = 0;

  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
