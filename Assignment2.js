//function that takes an array of integers, replaces each element of the array with the product of the other elements
 function find product(ar){
  let result = [];
  let prod = 1;
 for(let j = 0; j < ar.length; j++){
    prod *= ar[j];
  }
  for(let j = 0; j < ar.length; j++){
     ar[j] = prod/ar[j];
    result.push(ar[j]);
  }
  return result;
 }
