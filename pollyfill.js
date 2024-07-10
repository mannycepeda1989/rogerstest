// Check if Array.prototype.includes is not available
if (!Array.prototype.includes) {
  // Add includes method to Array prototype
  Array.prototype.includes = function(searchElement, fromIndex) {
    // 'this' refers to the array on which the method is called
    // Convert 'this' to an object and assign it to 'O'
    var O = Object(this);
    
    // Get the length of the array and assign it to 'len'
    var len = parseInt(O.length, 10) || 0;
    
    // If the array length is 0, return false
    if (len === 0) {
      return false;
    }

    // Get the starting index (fromIndex) or default to 0
    var n = parseInt(fromIndex, 10) || 0;
    
    // If fromIndex is greater than or equal to the length of the array, return false
    if (n >= len) {
      return false;
    }

    // Calculate the k index to start the search from
    var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

    // Iterate through the array starting from index k
    while (k < len) {
      // Check if the current element is equal to the search element
      // using the SameValueZero comparison
      if (O[k] === searchElement || (searchElement !== searchElement && O[k] !== O[k])) {
        // If the element is found, return true
        return true;
      }
      // Increment k to check the next element
      k++;
    }

    // If the element is not found, return false
    return false;
  };
}
