const promise = new Promise((resolve, reject) => {
  if (false) {
    setTimeout(() => {
      resolve("I have succeded");
    }, 1000);
  }
  else{
      reject('I have failed');
  }
});

promise
  .then((resolvedValue) => console.log(resolvedValue))
  .catch((rejectedValue) => console.log(rejectedValue));
