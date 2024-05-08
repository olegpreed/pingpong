import { Component } from "../library/component.js";

export class Friends extends Component {
  constructor() {
    super(document.getElementById("profile-wrapper"));
    this.view = `
		<div>Friends</div>
		`;
    this.render();
	this.setupEventListeners();
  }

  setupEventListeners() {
	
}
}
