import React, { Component } from "react";

import "./search.css";

export default class Search extends Component {
	state = {
		tmp: ""
	}

	onSearchChange = (e) => {
		let tmp = e.target.value;
		this.setState({tmp});
		this.props.onSearchChange(tmp);
	}
	
	render() {
		return(
			<input value={ this.state.tmp } 
				   className="col form-control" 
				   type="text" 
				   placeholder="type to search" 
				   onChange={this.onSearchChange}/>
		);
	};
};
