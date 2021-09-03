import Head from "next/head"
import axios from "axios"
import ItemList from "../src/components/ItemList"
import { Divider, Header } from "semantic-ui-react"
// import styles from "../styles/Home.module.css";

export default function Home({ items, name }) {
	return (
		<div>
			<Head>
				<title>HOME | Gon</title>
				<meta name="description" content="Gons 페이지 홈입니다" />
			</Head>
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
		</div>
	)
}

export async function getStaticProps(context) {
	const apiUrl = process.env.apiUrl
	const res = await axios.get(apiUrl)
	const data = res.data

	return {
		props: {
			items: data,
			name: process.env.name,
		},
	}
}
