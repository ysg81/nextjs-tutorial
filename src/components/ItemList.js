import React from "react";
import { Grid } from "semantic-ui-react";
import Item from "./Item";

function ItemList({ items }) {
	return (
		<div>
			<Grid columns={3}>
				<Grid.Row>
					{items.map((item) => (
						<Item item={item} key={item.id} />
					))}
				</Grid.Row>
			</Grid>
		</div>
	);
}

export default ItemList;
