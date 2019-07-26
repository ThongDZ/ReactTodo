import React from 'react';
import axios from 'axios';

class TodoItem extends React.Component {
	state = {
		name: '',
	};

	handleChange = event => {
		this.setState({ name: event.target.value });
	};

	handleSubmit = event => {
		event.preventDefault();

		const name = {
			name: this.state.name,
			complete: true,
		};

		axios.post(`http://5d36d86c86300e0014b647c7.mockapi.io/todos`, name).then(res => {
			console.log(res);
			console.log(res.data);
		});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>
						Name:
						<input type="text" name="" onChange={this.handleChange} />
					</label>
					<button type="submit">Add</button>
				</form>
			</div>
		);
	}
}
export default TodoItem;
