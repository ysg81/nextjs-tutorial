import { Header } from "semantic-ui-react"
import Gnb from "./Gnb"

function Top() {
	return (
		<div>
			<div style={{ display: "flex", paddingTop: 20 }}>
				<div style={{ flex: "100px 0 0" }}>
					<img
						src="/images/gon.jpg"
						alt="logo"
						style={{ display: "block", width: 80, borderRadius: "50%" }}
					/>
				</div>
				<Header as="h1">Gon2</Header>
			</div>
			<Gnb />
		</div>
	)
}

export default Top
