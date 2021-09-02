import { useRouter } from "next/dist/client/router";

const Post = () => {
	const router = useRouter();
	const { id } = router.query;

	return <p>POST: {id}</p>;
};

export default Post;
