<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      function hasil() {
        var val = 1;

        var arr = [];
        for (val; val < 5000; val++) {
          val = val.toString();
          var length = val.length;
          if (length == 1) {
            cek1();
          } else if (length == 2) {
            cek2();
          } else if (length == 3) {
            cek3();
          } else {
            cek4();
          }
        }

        function cek1() {
          var newVal = parseInt(val) + parseInt(val);
          arr.push(newVal);
          return arr;
        }

        function cek2() {
          var newVal = parseInt(val) + parseInt(val[0]) + parseInt(val[1]);
          arr.push(newVal);
          return arr;
        }

        function cek3() {
          var newVal =
            parseInt(val) +
            parseInt(val[0]) +
            parseInt(val[1]) +
            parseInt(val[2]);
          arr.push(newVal);
          return arr;
        }

        function cek4() {
          var newVal =
            parseInt(val) +
            parseInt(val[0]) +
            parseInt(val[1]) +
            parseInt(val[2]) +
            parseInt(val[3]);
          arr.push(newVal);
          return val;
        }
        return arr;
      }

      //console.log(
      //  hasil().sort((a, b) => {
      //    return a - b;
      //  })
      //);

      var newArr = [];
      var final = 0;
      //   console.log(hasil().includes(2));
      for (i = 1; i < hasil().length; i++) {
        if (hasil().includes(i)) {
        } else {
          newArr.push(i);
        }
      }
      //   console.log(newArr);

      for (i = 0; i < newArr.length; i++) {
        final += newArr[i];
      }
      console.log(final);
    </script>
  </body>
</html>

