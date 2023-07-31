import { parse } from 'csv-rex'
import Panzoom from '@panzoom/panzoom'
import Timeline from 'timeline/dist/timeline.esm.js'
import { delegate } from 'tippy.js'
import { Toggler } from 'ila_ui_elements/dist/ila-ui.esm.js'

/**
 * Add a Tippy popover with a Wikipedia summary for entries with a `data-wikipedia` attribute.
 * @param {string} elements
 */
class WikipediaPopover {
	
	constructor(selector) {
		const wrapInstance = this;
		
		const elements = document.getElementById("diagram").querySelectorAll(selector);
		for (const element of elements) {
			element.classList.add("entry-popover");
		}
		
		delegate(
			"#diagram",
			{
				target: selector,
				theme: "tl",
				content: 'Loading...',
				allowHTML: true,
				interactive: true,
				trigger: 'click',
				onShow(instance) {
				wrapInstance.getPopoverContents(instance.reference)
				.then(content => instance.setContent(content))
				.catch((e) => {
					console.log(`Error loading info for ${instance.reference.id}: ${e}`);
				});
			}
		});
	}
	
	async getPopoverContents(el) {
		console.log("Contents requested");
		const link = el.dataset.wikipedia;
		const title = link.substring(link.lastIndexOf("/")+1);
		const url =  `https://en.wikipedia.org/w/api.php?format=json&action=query&explaintext&prop=extracts|info|pageprops&exsentences=3&titles=${title}&origin=*`;
		return fetch(url)
			.then(response => response.json())
			.then(
				(data) => {
					const page = data["query"]["pages"][Object.keys(data.query.pages)[0]];
					return `<h3>${page.title}</h3>
							<p>${page.extract}</p>
							<p><a href="${link}" class="read-more">Read more on Wikipedia</a></p>`;
				})
	}
}

function processCsv(csv) {
	const data = parse(csv);
	for (const entry of data) {
		for(const p in entry) {
			if(entry[p] == "") {
				delete entry[p];
			}
		}
	}
	return data;
}

new Toggler(document.querySelector("[data-toggle-target]"));

Promise.all([
	fetch("parties.csv", {cache: "no-cache"}),
	fetch("events.csv", {cache: "no-cache"})
])
.then( (responses) => { 
	return Promise.all(responses.map( (response) => { return response.text() }) )
})
.then( (results) => {
	const parties = processCsv(results[0]);
	const events = processCsv(results[1]);

	const tl = new Timeline(
		"diagram",
		{
			yearStart: 1915,
			panzoom: Panzoom
		},
		parties,
		events
	);
	tl.create();
})

new WikipediaPopover("[data-wikipedia]");

