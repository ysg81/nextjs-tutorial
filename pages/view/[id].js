import axios from "axios"
import Head from "next/head"
import ItemDetail from "../../src/components/ItemDetail"

const Post = ({ itemInfo, name }) => {
	return (
		<>
			{itemInfo && (
				<>
					<Head>
						<title>{itemInfo.name}</title>
						<meta name="description" content={itemInfo.description}></meta>
					</Head>
					{name} 환경 입니다
					<ItemDetail itemInfo={itemInfo} />
				</>
			)}
		</>
	)
}

export default Post

export async function getStaticPaths() {
	const apiUrl = process.env.apiUrl
	const res = await axios.get(apiUrl)
	const { data } = res
	return {
		paths: data.slice(0, 9).map((item) => ({
			params: {
				id: item.id.toString(),
			},
		})),
		fallback: true,
	}
}

export async function getStaticProps(context) {
	const id = context.params.id
	const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`
	const res = await axios.get(apiUrl)
	const data = res.data

	return {
		props: {
			itemInfo: data,
			name: process.env.name,
		},
	}
}
