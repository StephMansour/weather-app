var getUser = (id, callback) => {
  var user = {
    id: 1,
    name: 'bob'
  };

  setTimeout(() => {
    callback(user);
  }, 3000);

};

getUser(1, (userObject) => {
  console.log(userObject)
});
