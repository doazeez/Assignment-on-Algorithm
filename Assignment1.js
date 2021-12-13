//function that merges elements of at most two arrays and returns an array of the merged elements in sorted order.
function mergeArray(arr1, arr2){
    let res = [];
   for(let I = 0; I < arr1.lenght; I++){
     res.push(arr1[I]);
    }
  for(let j = 0; j < arr2.length; j++ ){
   if(!arr1.includes(arr2[j])){
      res.push(arr2[j]);
    }
      res.sort();
  }
    return res;
}
