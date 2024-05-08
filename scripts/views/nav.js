import { Component } from "../library/component.js";
import { setupDarkModeToggle } from "../utils/darkmode.js";

export class Nav extends Component {
  constructor() {
    super(document.getElementById("navigation-wrapper"));
    this.view = `
		<div class="container-lg">
			<a href="" class="navbar-brand">Ping Pong</a>
			<ul class="navbar-nav d-flex align-items-center">
				<div class="form-check form-switch fs-4">
					<input class="form-check-input bg-body-secondary border-0" type="checkbox" role="switch" id="modeSwitch" data-bs-theme-value>
				</div>
				<li class="nav-item"><a href="/" class="nav-link active" data-link>Home</a></li>
				<li class="nav-item"><a href="/Tournament" class="nav-link" data-link>Tournament</a></li>
				<li class="nav-item"><a href="/Chat" class="nav-link" data-link>Chat</a></li>
				<li class="nav-item"><a href="/Profile" class="nav-link" data-link><img src="assets/profile.png" alt="profile image"
							class="border border-3 border-success rounded-circle"
							width=50 height=50"></a></li>
			</ul>
		</div>
	`;
    this.render();
	this.setupEventListeners();
  }

  setupEventListeners() {
	setupDarkModeToggle();
  }
}
