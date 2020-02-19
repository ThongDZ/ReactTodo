import React from 'react';
import axios from 'axios';
import TodoAdd from '../../component/TodoAdd';
import { Link } from 'react-router-dom';
import Delete from "../../component/Delete";

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todo: [],
		};
	}
	async componentDidMount() {
		const { data } = await axios.get(`http://5d36d86c86300e0014b647c7.mockapi.io/todos`);
		this.setState({
			todo: data,
		});
	};

	handleChange = (id) => {
		axios.delete(`http://5d36d86c86300e0014b647c7.mockapi.io/todos/${id}`)
			.then(res => {
				console.log(res);
				console.log(res.data);
			})
	};

	render() {
		return (
			<ul>
				<TodoAdd />
				<br />
				<br />
				{this.state.todo.map(todo => (
					<li key={todo.id}>
						<Link to={`index/${todo.id}`}>{todo.name}</Link>&ensp;&ensp;
						<Delete />
					</li>
				))}
			</ul>
		);
	}
}
export default Home;
