import { useRouter } from "next/dist/client/router"
import React, { useState } from "react"
import { Menu } from "semantic-ui-react"

function Gnb() {
	const router = useRouter()
	let activeItem
	if (router.pathname === "/") {
		activeItem = "home"
	} else if (router.pathname === "/about") {
		activeItem = "about"
	}
	const goLink = (e, data) => {
		if (data.name === "home") {
			router.push("/")
			activeItem = "home"
		} else if (data.name === "about") {
			router.push("/about")
			activeItem = "about"
		}
	}

	return (
		<Menu inverted>
			<Menu.Item name="home" active={activeItem === "home"} onClick={goLink} />
			<Menu.Item
				name="about"
				active={activeItem === "about"}
				onClick={goLink}
			/>
		</Menu>
	)
}

export default Gnb
