var input = 'aaaaabbbbcccccccdaa'
input = input.split("")
console.log(input.length)

var arr = []
var arr1 = []
var arr2 = []
var arr3 = []
var arr4 = []


for(i=0; i<input.length; i++){
 if(input[i]== 'a' && arr.length < 5) {
   arr.push(input[i]);
   console.log(arr.length)
   }

 else if(input[i]== 'b'){
   arr1.push(input[i])
 }else if(input[i]== 'c'){
   arr2.push(input[i])
 }else if(input[i]== 'd'){
   arr3.push(input[i])
   console.log(arr3)
 }else{
   arr4.push(input[i]);
     console.log(arr4)
 }
 
}
console.log(`a${arr.length}b${arr1.length}c${arr2.length}${arr3}a${arr4.length}`)