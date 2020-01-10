import React from "react";

import "./counter.css";

const Counter = ({inWork, done}) => {
	return <p className="to-do-counter col-6 text-muted mb-0">{inWork} more to do, {done} done</p>;
}

export default Counter;