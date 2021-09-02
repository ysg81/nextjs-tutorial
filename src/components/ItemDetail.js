import Link from "next/link";
import React from "react";
import { Grid } from "semantic-ui-react";
import classes from "./ItemDetail.module.css";

function ItemDetail({ item }) {
	return (
		<Grid.Column key={item.key}>
			
			<Link href={`/view/${item.id}`}>
				<div className={classes.wrap}>
					<img
						src={item.image_link}
						alt={item.name}
						className={classes.img_item}
					/>
					<strong className={classes.tit_item}>{item.name}</strong>
					<span className={classes.txt_info}>
						{item.category} {item.product_type}
					</span>
					<strong className={classes.num_price}>${item.price}</strong>
				</div>
			</Link>
		</Grid.Column>
	);
}

export default ItemDetail;
