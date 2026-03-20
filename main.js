function repeatStringNumTimes(str, num) {
  if (num <= 0) return "";

  let result = "";

  for (let i = 0; i < num; i++) {
    result += str;
  }

  return result;
}

// Tests
console.log(repeatStringNumTimes("abc", 3));  // "abcabcabc"
console.log(repeatStringNumTimes("hi", 0));   // ""
console.log(repeatStringNumTimes("hi", -2));  // ""
