function largestBinaryGap(num) {
  
    var bin = Math.abs(num).toString(2),
        finalMax = 0,
        currentMax;
      // console.log(bin)
    if(bin.lastIndexOf(1)){
    for (var i = 0; i < bin.length; i++) {
      currentMax = 0;
      while (bin[i] === "0") {
        ++currentMax && ++i;
      }
      finalMax = Math.max(finalMax, currentMax);
    }
    return finalMax;
  }
  return 0
}
  
  console.log(largestBinaryGap(1)); 
  console.log(largestBinaryGap(2)); 
  console.log(largestBinaryGap(147)); 
  console.log(largestBinaryGap(483)); 
  console.log(largestBinaryGap(647)); 
