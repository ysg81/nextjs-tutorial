import { Button, Header } from "semantic-ui-react"
import classes from "./ItemDetail.module.css"

function ItemDetail({ itemInfo }) {
	const {
		name,
		image_link,
		price,
		description,
		updated_at,
		category,
		product_type,
		product_link,
	} = itemInfo

	return (
		<>
			<div className={classes.wrap}>
				<div className={classes.img_item}>
					<img src={image_link} alt={name} />
				</div>
				<div className={classes.info_item}>
					<strong className={classes.tit_item}>{name}</strong>
					<strong className={classes.num_price}>${price}</strong>
					<span className={classes.txt_info}>
						{category ? `${category}/` : ""}
						{product_type}
					</span>
					<Button color="orange">구매하기</Button>
				</div>
			</div>

			<Header as="h3">Description</Header>
			<p style={{ paddingBottom: 20, fontSize: 18 }}>{description}</p>
		</>
	)
}

export default ItemDetail
