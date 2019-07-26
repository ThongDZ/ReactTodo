import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './containers/HomeSceen';
import Detail from './containers/DetialSceen';
import TodoItem from './component/TodoItem';

class App extends React.Component {
	render() {
		return (
			<Router>
			<TodoItem />
				<Route exact path="/" component={Home} />
				<Route path="/index/:id" component={Detail} />
			</Router>
		);
	}
}
export default App;
