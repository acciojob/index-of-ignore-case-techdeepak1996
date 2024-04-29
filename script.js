function indexOfIgnoreCase(s1, s2) {
  // Convert both strings to lowercase for case-insensitive comparison
  const lowerCaseS1 = s1.toLowerCase();
  const lowerCaseS2 = s2.toLowerCase();

  // Find the index of the substring in the lowercase string
  const index = lowerCaseS1.indexOf(lowerCaseS2);

  // Return the index or -1 if not found
  return index;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
