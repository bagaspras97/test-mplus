equalPreSuff = (input) => {
  var pInput = input.length;

  pInput = Math.floor((pInput /= 2));

  var nilai1 = [];
  var nilai2 = [];
  for (i = 0; i < input.length; i++) {
    if (pInput > i) {
      nilai1.push(input[i]);
    } else {
      nilai2.push(input[i]);
    }
  }
  // console.log(nilai1)
  // console.log(nilai2)
  var jumlah = "";
  for (i = 0; i < nilai1.length; i++) {
    if (nilai1[i] != nilai2[i]) {
      nilai2.shift();
    }
    if (nilai1[i] == nilai2[i]) {
      jumlah = nilai1.length;
    }
  }
  console.log(jumlah);
};

equalPreSuff("aabcdaabc");
equalPreSuff("abcab");
equalPreSuff("aaaa");
