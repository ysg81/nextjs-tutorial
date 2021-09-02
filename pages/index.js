import Head from "next/head";
import axios from "axios";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
	const API_URL =
		"http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

	const getData = async () => {
		await axios.get(API_URL).then((res) => {
			console.log(res.data);
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
		</div>
	);
}
