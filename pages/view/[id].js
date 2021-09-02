import axios from "axios"
import Head from "next/head"
import ItemDetail from "../../src/components/ItemDetail"

const Post = ({ itemInfo }) => {
	return (
		<>
			{itemInfo && (
				<>
					<Head>
						<title>{itemInfo.name}</title>
						<meta name="description" content={itemInfo.description}></meta>
					</Head>
					<ItemDetail itemInfo={itemInfo} />
				</>
			)}
		</>
	)
}

export default Post

export async function getServerSideProps(context) {
	const id = context.params.id
	const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`
	const res = await axios.get(apiUrl)
	const data = res.data

	return {
		props: {
			itemInfo: data,
		},
	}
}
