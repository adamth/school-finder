var React = require('react');
var ReactDOM = require('react-dom');
var SchoolList = require('./components/SchoolList.jsx');

var _schools = [{name:"Lovedale",tagline:"this is a wonderful school"},
                {name:"Bishop",tagline:"Another great school"}];

render = () => {
 ReactDOM.render(<SchoolList schools={_schools} />, document.getElementById('container'));
}

render();