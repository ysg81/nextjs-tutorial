import Head from "next/head";
import axios from "axios";
import { useEffect, useState } from "react";
import ItemList from "../src/components/ItemList";
import { Divider, Header } from "semantic-ui-react";
import Spinner from "../src/components/Spinner";
// import styles from "../styles/Home.module.css";

export default function Home() {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(false);
	const API_URL =
		"http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

	const getData = async () => {
		setLoading(true);
		await axios.get(API_URL).then((res) => {
			// console.log(res.data);
			setItems(res.data);
			setLoading(false);
		});
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div>
			<Head>
				<title>HOME | Gon</title>
			</Head>
			{loading && <Spinner />}
			{!loading && (
				<>
					<Header as="h3" style={{ paddingTop: 40 }}>
						신상품
					</Header>
					<Divider />
					<ItemList items={items.slice(0, 9)} />
					<Header as="h3" style={{ paddingTop: 40 }}>
						베스트 상품
					</Header>
					<Divider />
					<ItemList items={items.slice(9)} />
				</>
			)}
		</div>
	);
}
