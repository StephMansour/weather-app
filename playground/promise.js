// var somePromise = new Promise ((resolve, reject) => {
//   // resolve('it worked');
//   reject('it failed');
// });

// somePromise.then((message) => {
//   console.log(message);
// }, (error) => {
//   console.log(error);
// });

var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      }else{
        console.log('Arguments must be numbers');
      }
    }, 1500);
  });
};

asyncAdd(5, 2).then((res) => {
  console.log(res);
  return asyncAdd(res, 100)
}).then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
});
