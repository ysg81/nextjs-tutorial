import axios from "axios"
import { useRouter } from "next/dist/client/router"
import { useEffect, useState } from "react"
import { Item } from "semantic-ui-react"
import ItemDetail from "../../src/components/ItemDetail"
import Spinner from "../../src/components/Spinner"

const Post = () => {
	const [itemInfo, setItemInfo] = useState({})
	const [loading, setLoading] = useState(false)
	const router = useRouter()
	const { id } = router.query
	const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`

	const getData = async () => {
		setLoading(true)
		await axios.get(API_URL).then((res) => {
			setItemInfo(res.data)
		})
		setLoading(false)
	}

	useEffect(() => {
		if (id && id > 0) {
			getData()
		}
	}, [id])

	return (
		<>
			{loading && <Spinner />}
			{!loading && <ItemDetail itemInfo={itemInfo} />}
		</>
	)
}

export default Post
