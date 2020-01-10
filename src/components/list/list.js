import React from "react";

import ListItem from "../list-item";

import "./list.css";

const List = ({ list, onDeleted, doneItem, importantItem }) => {
	let classNames = "list-group-item d-flex justify-content-between align-items-center";
	const elements = list.map((elem) => {
		return(
			<li className = { classNames } key={elem.id}>
				<ListItem { ...elem }
				doneItem = { () => doneItem(elem.id) }
				importantItem =  { () => importantItem(elem.id) }
				onDeleted = { () => onDeleted(elem.id) }/>
			</li>
		);
	});

	return(
		<ul className="list-group col">
			{elements}
		</ul>
	);
}

export default List;