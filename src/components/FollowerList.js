import React, { Component } from 'react';

import Follower from './Follower';

class FollowerList extends Component {
	render() {
		return (
			<div className="followers">
				<h2>FOLLOWERS:</h2>
				{this.props.followers.map((follower, idx) => {
					return (
						<Follower
							key={follower.id}
							name={follower.login}
							img={follower.avatar_url}
						/>
					);
				})}
			</div>
		);
	}
}

export default FollowerList;
