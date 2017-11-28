
function produceDrivingRange(blockRange) {
  return function(startB, endB) {
    let start = (parseInt(startB))
    let end = (parseInt(endB))
      let blocks = end - start;
      let distance = blockRange - blocks;
      if (distance < 0) {
        return `${Math.abs(distance)} blocks out of range`
      } else {
        return `within range by ${distance}`;
      }
  }
}

function produceTipCalculator(num) {
  return function(fare) {
    return fare * num
  };

}
