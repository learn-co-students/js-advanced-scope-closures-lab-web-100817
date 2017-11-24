
function produceDrivingRange(blockRange) {
  return function(pointA, pointB) {
    pointA = parseInt(pointA)
    pointB = parseInt(pointB)
    if ((pointB-pointA) > blockRange) {
      return `${pointB - pointA - blockRange} blocks out of range`
    } else {
      return `within range by ${blockRange - (pointB-pointA)}`
    }
  }
}

// produceTipCalculator() - Returns a function that then calculates a tip. For example, produceTipCalculator(.10) returns a function that calculates ten percent tip on a fare. produceTipCalculator(.20) returns a function that calculates twenty percent tip on a fare.

function produceTipCalculator(tip) {
  return function(fare) {
    return fare * tip
  }
}
