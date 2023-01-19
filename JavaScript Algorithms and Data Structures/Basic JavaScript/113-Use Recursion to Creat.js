function rangeOfNumbers(startNum, endNum) {
    if (startNum >= endNum) {
        return [];
    } else {
        let rangeArray = rangeOfNumbers(startNum + 1, endNum);
        rangeArray.push(startNum);
        return rangeArray;
    }
  };