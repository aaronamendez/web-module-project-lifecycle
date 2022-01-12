import React, { Component } from 'react';

import FollowerList from './FollowerList';

class User extends Component {
	render() {
		return (
			<div className="profile">
				<h2>{this.props.name}</h2>
				<p>{this.props.handle}</p>
				<h4>TOTAL REPOS: {this.props.repos}</h4>
				<h4>TOTAL FOLLOWERS: {this.props.totalFollowers}</h4>
				<FollowerList followers={this.props.followers} />
			</div>
		);
	}
}

export default User;
