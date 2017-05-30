var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('./components/Greeter.jsx');



var name = 'Fabian';

ReactDOM.render(
  <Greeter name={name}/>,
  document.getElementById('app')
  )