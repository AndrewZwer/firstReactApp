import React, { Component } from "react";

import Header from "../header";
import Counter from "../counter";
import Search from "../search";
import SearchBtns from "../search-btns";
import List from "../list";
import AddItem from "../add-item";

export default class App extends Component {
	itemIndex = 1;

	state = {
		liData: [
			this.createItem("Learn React"),
			this.createItem("Drink coffee")
		],
		tmp: "",
		status: ""
	} 

	createItem(text) {
		return {
				text,
				id: this.itemIndex++,
				important: false,
				done: false,
				hidden: false
		}
	}

	deleteItem = (id) => {
		this.setState( ({liData}) => {
			let index = liData.findIndex((elem) => elem.id === id);

			const newState = [...liData.slice(0, index),
							  ...liData.slice(index + 1)];

			return {
				liData: newState
			}
		})
	}

	toggleProp(arr, id, prop ) {
			let index = arr.findIndex((elem) => elem.id === id);

			const oldItem = arr[index];
			const newItem = { ...oldItem, [prop]: !oldItem[prop] }

			return [
				...arr.slice(0, index),
				newItem,
				...arr.slice(index + 1)
			];
	}

	addItem = (text) => {
		this.setState( ({ liData }) => {
			const newItem = this.createItem(text);

			const newState = [...liData, newItem];

			return {
				liData: newState
			}
		})
	}

	doneItem = (id) => {
		this.setState( ({ liData } ) => {
			return {
				liData: this.toggleProp(liData, id, "done")
			};
		});
	}; 

	importantItem = (id) => {
		this.setState( ( { liData } ) => {
			return {
				liData: this.toggleProp(liData, id, "important")
			};
		});	
	};

	search (arr, tmp) {
		if(tmp.length === 0) {
			return arr;
		}
		return arr.filter((item) => {
			return item.text.toLowerCase().indexOf(tmp.toLowerCase()) > -1;
		})
	}

	filter (arr, status) {
		switch(status) {
			case("all"):
				return arr;
			case("active"):
				return arr.filter((item) => !item.done);
			case("done"):
				return arr.filter((item) => item.done);
			default:
				return arr;		
		}
	}

	onSearchChange = (tmp) => {
		this.setState({tmp});
	}

	onFilterChange = (status) => {
		this.setState({status});
	}

	render() {
		const { liData, tmp, status } = this.state;

		const visibleData = this.filter(this.search(liData, tmp), status);

		let doneCounter = liData.filter((elem) => elem.done).length;
		let inWorkCounter = liData.length - doneCounter;

		return (
			<div className="container to-do-component">
				<div className="row align-items-end mb-2">
					<Header />
					<Counter done = {doneCounter} inWork = {inWorkCounter} />
				</div>
				<div className="row mb-3">
					<Search onSearchChange={this.onSearchChange} />
					<SearchBtns status={status} onFilterChange={this.onFilterChange} />
				</div>
				<div className="row">	
					<List list = {visibleData}
						doneItem = {this.doneItem}
						importantItem = {this.importantItem} 
						onDeleted = {this.deleteItem}/>
				</div>
				<div className="row mt-2">
					<AddItem onAddBtn = {this.addItem}/>
				</div>		
			</div>
		);
	}
};




