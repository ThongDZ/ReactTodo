import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { async } from 'q';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [],
		};
	}

 	async componentDidMount() {
		const {data} = await axios.get(`http://5d36d86c86300e0014b647c7.mockapi.io/todos`);
		this.setState({
			todos: data
		})
	}

	render() {
		return (
			<ul>
				{this.state.todos.map(todo => (
					<li key={todo.id}>
						<Link to={`index/${todo.id}`}>{todo.name}</Link>
					</li>
				))}
			</ul>
		);
	}
}
export default Home;
