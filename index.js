function produceDrivingRange (blockRange) {
  return function (start, end) {
    let startBlock = parseInt(start)
    let endBlock = parseInt(end)
    let distance = Math.abs(startBlock - endBlock)
    let withinRange = blockRange - distance
    if (withinRange >= 0) {
      return `within range by ${withinRange}`
    } else {
      return `${Math.abs(withinRange)} blocks out of range`
    }
  }
}

function produceTipCalculator (tipPercent) {
  return function (billAmt) {
    let tipAmt = billAmt * tipPercent
    return tipAmt
  }
}
