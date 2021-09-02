import {
	Button,
	Divider,
	Form,
	Header,
	List,
	TextArea,
} from "semantic-ui-react"

function About() {
	return (
		<div>
			<Header as="h3" style={{ paddingTop: 40 }} color="teal">
				회사 소개
			</Header>
			<Divider />
			<List>
				<List.Item>
					<List.Icon name="user circle" />
					<List.Content>Gons Company</List.Content>
				</List.Item>
				<List.Item>
					<List.Icon name="marker" />
					<List.Content>Korea, Seoul</List.Content>
				</List.Item>
				<List.Item>
					<List.Icon name="mail" />
					<List.Content>
						<a href="mailto:qpple@naver.com">qpple6@naver.com</a>
					</List.Content>
				</List.Item>
				<List.Item>
					<List.Icon name="github" />
					<List.Content>
						<a href="https://github.com/">Github</a>
					</List.Content>
				</List.Item>
			</List>
			<Header as="h3" style={{ paddingTop: 40 }} color="teal">
				문의 사항
			</Header>
			<Divider />
			<Form>
				<Form.Field>
					<label>제목</label>
					<input />
				</Form.Field>
				<Form.Field>
					<label>내용</label>
					<TextArea />
				</Form.Field>
				<Button color="green">보내기</Button>
			</Form>
		</div>
	)
}

export default About
