import { Component } from "./component.js";

export class Tournament extends Component {
  constructor() {
    super(document.getElementById("content-wrapper"));
    this.render();
  }
  render() {
    const html = `
		<h1>Tournament</h1>
		`;
    this.parentDiv.innerHTML = html;
  }
}
