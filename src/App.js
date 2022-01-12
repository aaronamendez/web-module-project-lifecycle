import axios from 'axios';
import React from 'react';

import User from '../src/components/User';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			input: '',
			user: {},
			userFollowers: [],
		};
	}

	fetchUser = (user) => {
		axios
			.get(`https://api.github.com/users/${user}`)
			.then((res) => {
				this.setState({
					...this.state,
					user: res.data,
				});
			})
			.catch((err) => {
				console.error(err);
			});
	};

	fetchFollowers = (user) => {
		axios.get(`https://api.github.com/users/${user}/followers`).then((res) => {
			this.setState({
				...this.state,
				userFollowers: res.data,
			});
		});
	};

	// componentDidUpdate() {
	// 	if (this.state.user) {
	// 		this.setState({
	// 			...this.state,
	// 			userExists: true,
	// 		});
	// 	}
	// }

	// Handlers
	onChange = (e) => {
		this.setState({
			...this.state,
			input: e.target.value,
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.fetchUser(this.state.input);
		this.fetchFollowers(this.state.input);
	};

	render() {
		return (
			<div className="form">
				<h1>Github Info</h1>
				<form onSubmit={this.onSubmit}>
					<input
						type="text"
						value={this.state.input}
						placeholder="Github Handle"
						onChange={this.onChange}
					/>
					<button>Search</button>

					<User
						name={this.state.user.name}
						handle={this.state.user.handle}
						repos={this.state.user.public_repos}
						totalFollowers={this.state.user.followers}
						followers={this.state.userFollowers}
					/>
				</form>
			</div>
		);
	}
}

export default App;
