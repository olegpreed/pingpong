import { Component } from "./component.js";

export class Home extends Component {
  constructor() {
    super(document.getElementById("content-wrapper"));
    this.render();
  }
  render() {
    const html = `
		<h1>Home</h1>
		`;
    this.parentDiv.innerHTML = html;
  }
}
