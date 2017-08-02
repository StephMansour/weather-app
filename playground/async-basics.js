console.log('Starting app');

setTimeout(() => {
  console.log('Inside the callback')
  setTimeout(() => {
    console.log('a')
    setTimeout(() => {
      console.log('b')
    }, 0)
  }, 1000)
}, 1000)

setTimeout(() => {
  console.log('Inside the callback #2')
  setTimeout(() => {
    console.log('c')
    setTimeout(() => {
      console.log('d')
    }, 0)
  }, 1000)
}, 1000)

console.log('Finishing up');
