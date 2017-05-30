var React = require('react');
var ReactDOM = require('react-dom');

var obj1 = {
  name: 'Fabian',
  location: 'Perú'
}

var obj2 = {
  age: 21,
  ...obj1
}

console.log(obj2);

ReactDOM.render(
  <h1>BoilerPlate application</h1>,
  document.getElementById('app')
  )