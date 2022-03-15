import React from "react";
import classes from "./CardBody.module.css";

const CardBody = () => {
	return (
		<div className={classes.cardBody}>
			<h1 className={classes.cardBodyTitle}>Shift the overall look and feel by adding these wonderful touches to furniture in your home</h1>
			<div className={classes.cardBodyText}>Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.</div>
		</div>
	);
};

export default CardBody;
