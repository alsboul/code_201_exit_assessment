'use strict';
var arr = [1,2,3,4,5,6,7,8,9];
function greaterThan(){
  if (2 > arr.length){
    return greaterThan();
  }
}
console.log(greaterThan);

var arrCaps = ['hello word','my name is mohammad','games'];
for (let i = 0; i < arrCaps.length; i++) {
  arrCaps[i].toUpperCase;
  console.log(arrCaps);
}


function myFunction() {
  for (var j = 0; j <= 5; j++){
    var x = document.createElement('ul');
    var y = document.createElement('li');
    document.getElementById('list').appendChild(y);
    console.log(x);
  }
}
myFunction();
