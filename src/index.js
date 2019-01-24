import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyList from './MyList';
import * as serviceWorker from './serviceWorker';

var toDos = ["Buy ice cream", "Eat ice cream", "Go to the gym", "Understand EJS routing", "Understand React"]

ReactDOM.render(
	<MyList theList={toDos} />, 
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
