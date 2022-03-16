import React, { useState } from "react";
import classes from "./CardFooter.module.css";

const CardFooter = () => {
	const [buttonIsClicked, setButtonIsClicked] = useState(false);

	return (
		<div>
			{buttonIsClicked ? (
				<div className={`${classes.cardFooter} ${classes.footerClicked}`}>
					<p>SHARE</p>
					<div className={classes.socialIcons}>
						<img src="images/icon-facebook.svg" alt="" />
						<img src="images/icon-twitter.svg" alt="" />
						<img src="images/icon-pinterest.svg" alt="" />
					</div>
					<button className={classes.shareBtn} onClick={() => setButtonIsClicked(!buttonIsClicked)}>
						<img className={classes.shareClicked} src="images/icon-share.svg" alt="" />
					</button>
				</div>
			) : (
				<div className={classes.cardFooter}>
					<img className={classes.avatar} src="images/avatar-michelle.jpg" alt="" />
					<div className={classes.nameDate}>
						<p>Michelle Appleton</p>
						<p>28 Jun 2020</p>
					</div>
					<button className={classes.shareBtn} onClick={() => setButtonIsClicked(!buttonIsClicked)}>
						<img src="images/icon-share.svg" alt="" />
					</button>
				</div>
			)}
		</div>
	);
};

export default CardFooter;
