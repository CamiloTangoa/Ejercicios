function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for (let index  = 0; index < arr.length; index++) {
        for(let subindex = 0; subindex< arr[index].length; subindex++) {
            product *= arr[index][subindex];
        }
    }
    // Only change code above this line
    return product;
  }
  
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);