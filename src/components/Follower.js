import React, { Component } from 'react';

class Follower extends Component {
	render() {
		return (
			<div className="follower">
				{/* Pass props to below src */}
				<img src={this.props.img} />
				<h3>{this.props.name}</h3>
			</div>
		);
	}
}

export default Follower;
