function countup(n) {
    if (n < 1) {
        return [];
    } else {
        let arrayResult = countup(n - 1);
        arrayResult.unshift(n);
        return arrayResult;
    }
  }
  console.log(countup(5));