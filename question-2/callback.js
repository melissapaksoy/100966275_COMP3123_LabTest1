// Create a method that resolves after 500ms
const resolvedPromise = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ message: 'delayed success!' });
      }, 500);
    });
  };
  
  
  // Create a method that rejects after 500ms
  const rejectedPromise = () => {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject({ error: 'delayed exception!' });
      }, 500);
    });
  };



  
  // Call both promises and handle the output
 resolvedPromise()
  .then((r) => console.log("Resolved:", r))
  .catch((e) => console.error("Resolved handler error:", e));

rejectedPromise()
  .then((r) => console.log("Rejected (unexpected):", r))
  .catch((e) => console.error("Rejected:", e));
  