import React, { Component } from "react";

import "./search-btns.css";

export default class SearchBtns extends Component {
	buttons = [
		{ role: "all", text: "All"},
		{ role: "active", text: "Active"},
		{ role: "done", text: "Done"}
	];

	render() {
		const { status, onFilterChange } = this.props;

		const buttons = this.buttons.map(({ role, text }) => {
			const isActive = status === role;

			const activeClass = isActive ? "active" : "";
			return(
				<button type="button" className={`btn btn-outline-secondary ${activeClass}`} 
				 onClick={() => onFilterChange(role)}
				 key={role}>{text}</button>
			)
		});

		return (
			<div className="btn-group col-auto" role="group" aria-label="Group of search buttons">
				{buttons}
			</div>
		)
	}
	
}
