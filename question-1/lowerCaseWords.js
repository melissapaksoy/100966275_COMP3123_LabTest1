function lowerCaseWords(mixedArray) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(mixedArray)) {
      return reject(new Error("Input is not an array"));
    }
    const filteredArray = mixedArray
      .filter((item) => typeof item === "string")
      .map((s) => s.toLowerCase());
    resolve(filteredArray);
  });
}

// demonstration of the function
const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];
lowerCaseWords(mixedArray)
  .then((res) => console.log(res))
  .catch((err) => console.error(err.message || err));

  
  