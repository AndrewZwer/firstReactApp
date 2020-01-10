import React from "react";

import "./list-item.css";

const ListItem = ( { text, onDeleted, doneItem, importantItem, important, done } ) => {

	let classNames = "list-group-item-label";

	if(done) {
		classNames += " done";
	}

	if(important) {
		classNames += " important";
	}

	return (
		<span className = "d-flex justify-content-between align-items-center w-100">	
			<span onClick = { doneItem } 
				  className = { classNames }>
				  { text }
			</span>
			<span className="badge badge-pill">
				<button onClick = { importantItem } 
					className="important-btn btn btn-outline-success btn-sm mx-2">
						<i className="fa fa-exclamation"></i>
				</button>
				<button onClick={onDeleted} 
						className="btn btn-outline-danger btn-sm">
						<i className="fa fa-trash"></i>
				</button>
			</span>	
		</span>
	)
}

export default ListItem;
