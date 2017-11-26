function produceDrivingRange(blockRange){
  return function(start, stop){
    let begin = start.slice(0,-2)
    let end = stop.slice(0,-2)
    let trip = Math.abs(begin - end)
    if (trip > blockRange){
      return `${Math.abs(blockRange - trip)} blocks out of range`;
    } else {
      return `within range by ${Math.abs(trip - blockRange)}`;
    }
  }
}

function produceTipCalculator(percent){
  return function(fare){
    return fare * percent;
  }
}

function createDriver(){
  let driverId = 0
  return class {
    constructor(name){
      this.name = name
      this.id = ++driverId;
    }

  }
}

const Driver = createDriver()
