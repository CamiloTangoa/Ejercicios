function titleCase(str) {
    let newStr = str.split(" ");
    let updatedStr = [];
    for (let string in newStr) {
        updatedStr[string] = newStr[string][0].toUpperCase() + newStr[string].slice(1).toLowerCase();
    }
    return updatedStr.join(" ");
  }
  
  titleCase("I'm a little tea pot");