import 'core-js/stable'
import 'regenerator-runtime/runtime'
import { registerHtml, start, useGlobalStore, useEffect } from 'tram-one'
import inputComponent from './input-component'
import './styles.css'

/**
 * The entry point of the app, and where we mount the app on the DOM.
 * Read more about it here: https://tram-one.io/#components
 */

const html = registerHtml({
	'input-component': inputComponent
})

const home = () => {
	// setup the text default value to empty string (this is used by the inputs)
	const workingText = useGlobalStore('text', {value: ''})

	useEffect(() => {
		console.log(`re-rendering main component`, workingText.value)
		return () => { console.log(`removing main component`) }
	})

	const onEvent = (event) => {
		workingText.value = event.target.value
	}

	return html`
		<main>
			<input id="0" class="main input-component" type="text" value=${workingText.value} onkeyup=${onEvent} />
			<input-component id="1" />
			<input-component id="2" />
		</main>
	`
}

// start the app on a div with id="app"
start(home, '#app')
