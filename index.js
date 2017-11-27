function produceDrivingRange(range){
  return function(start,end){
    let diff= (parseInt(end) - parseInt(start));
     if (diff>range){
       return `${diff-range} blocks out of range`;
     }
     else {
       return `within range by ${Math.abs(diff-range)}`
     }

  }
}

function produceTipCalculator(percentage){
  return function(amount){
    return (amount * percentage)
  }
}
