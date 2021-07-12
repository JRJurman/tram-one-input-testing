import { registerHtml, useEffect, useGlobalStore } from 'tram-one'

const html = registerHtml()

export default (props, children) => {
	const workingText = useGlobalStore('text')

	useEffect(() => {
		console.log(`re-rendering input component #${props.id}`, workingText.value)
		return () => { console.log(`removing input component #${props.id}`) }
	})

	const onEvent = (event) => {
		workingText.value = event.target.value
		console.log('workingText.value', workingText.value)
	}

	return html`
		<input id=${props.id} class="input-component" type="text" value=${workingText.value} onkeyup=${onEvent} />
	`
}
