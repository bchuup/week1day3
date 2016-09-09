var object = {}

function countLetters(str){
  var arr = str.split(" ").join("");
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] in object){
    object[arr[i]].push(i+1);
    } else {
      object[arr[i]] = [i+1]
    }
  }
  console.log(object)
  return object;
}

console.log(object)
countLetters("lighthouse in the house");
// return Object
