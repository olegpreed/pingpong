export class Component {
	constructor(parentDiv) {
		this.parentDiv = parentDiv;
	}

	async render() {
		this.parentDiv.innerHTML = this.view;
	}
}