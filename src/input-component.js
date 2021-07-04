import { registerHtml, useGlobalStore } from 'tram-one'

const html = registerHtml()

export default (props, children) => {
	const workingText = useGlobalStore('text')

	const onEvent = (event) => {
		workingText.value = event.target.value
		console.log(workingText.value)
	}

	return html`
		<input class="input-component" type="text" value=${workingText.value} onkeyup=${onEvent} />
	`
}
