import React, { Component } from "react";

import "./add-item.css";

export default class AddItem extends Component {

	state = {
		text: ""
	}
	
	onAddItem = (e) => {
		this.setState({
			text: e.target.value
		});
	};

	onSubmit = (e) => {
		e.preventDefault();

		this.props.onAddBtn(this.state.text);
		this.setState({
			text: ""
		});
	}

	render() {
		return(
			<form className="add-item form-inline"
				  onSubmit={this.onSubmit}>
				<input type="text"
					   className="form-control"
					   placeholder="type new task"
					   onChange={this.onAddItem} 
					   value={this.state.text}/>
				<button className="btn btn-outline-secondary">Add task</button>
			</form>
		); 
	}
}