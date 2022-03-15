import React from "react";
import classes from "./CardHeader.module.css";

const CardHeader = () => {
	return (
		<div className={classes.header}>
			<img className={classes.drawers} src="images/drawers.jpg" alt="" />
		</div>
	);
};

export default CardHeader;
