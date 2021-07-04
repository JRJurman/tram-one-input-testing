import 'core-js/stable'
import 'regenerator-runtime/runtime'
import { registerHtml, start, useGlobalStore } from 'tram-one'
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
	useGlobalStore('text', {value: ''})

	return html`
		<main>
			<input-component />
			<input-component />
		</main>
	`
}

// start the app on a div with id="app"
start(home, '#app')
