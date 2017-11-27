function produceDrivingRange(br) {
  return function(s, e) {
    s = Number.parseInt(s);
    e = Number.parseInt(e);
    tl = Math.abs(e-s);
    // debugger;
    return tl <= br ? `within range by ${br - tl}` : `${tl - br} blocks out of range`
  };
}


function produceTipCalculator(p) {
  return function (f) {
    return p * f;
  };
}
