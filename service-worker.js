if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/dist.bundle.js', {scope: 'gildedRose-v0.0.1'})
    .then(function (reg) {
      // registration worked
      // console.log('Registration succeeded. Scope is ' + reg.scope);
    })
    // .catch(function (error) {
    // // registration failed
    // // console.log('Registration failed with ' + error);
    // })
}
