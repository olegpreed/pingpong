import { Component } from "../library/component.js";
import { Friends } from "./friends.js";
import { makeLinkActive } from "../utils/other.js";

export class Profile extends Component {
  constructor() {
    super(document.getElementById("content-wrapper"));
    this.view = `
		<div class="bg-body-tertiary rounded-top-5  d-flex flex-md-row flex-column">
			<div class="align-self-center">
				<img src="assets/profile.png" class="rounded-circle my-3 m-md-3" width="200" height="200" alt="">
			</div>
			<div class="w-100 p-md-3 pb-3 px-3 h-100 align-self-end d-flex flex-column">
				<div
					class="mb-2 d-flex flex-wrap flex-md-row flex-column align-items-md-end align-items-center justify-content-between">
					<div class="fs-3">@pelmeshkaa</div>
					<div class="d-flex gap-1 my-md-0 my-2">
						<div class="fs-3 border border-1 rounded-3 d-flex align-items-center p-2 gap-2">
							<div>Lvl</div>
							<div>10</div>
						</div>
						<div class="fs-3 border border-1 rounded-3 d-flex p-2 gap-2">
							<div>👍</div>
							<div class="d-flex flex-column">
								<div class="fs-6 text-secondary">Wins</div>
								<div class="text-success">42</div>
							</div>
						</div>
						<div class="fs-3 border border-1 rounded-3 d-flex p-2 gap-2">
							<div>👎</div>
							<div class="d-flex flex-column">
								<div class="fs-6 text-secondary">Losses</div>
								<div class="text-danger">21</div>
							</div>
						</div>
					</div>
				</div>
				<div class="progress" role="progressbar" aria-label="Warning example with label" aria-valuenow="75"
					aria-valuemin="0" aria-valuemax="100">
					<div class="progress-bar text-bg-dark w-75">75%</div>
				</div>
			</div>
		</div>
		<ul class="nav nav-underline d-flex justify-content-center mt-2" id="profileMenu">
			<li class="nav-item">
				<a href="/Profile" class="nav-link active" aria-current="page" data-link>Friends</a>
			</li>
			<li class="nav-item">
				<a href="/History" class="nav-link text-body-tertiary" data-link>Match History</a>
			</li>
			<li class="nav-item">
				<a href="/Settings" class="nav-link text-body-tertiary" data-link>Settings</a>
			</li>
		</ul>
		<div class="bg-body-tertiary rounded-bottom-5 mt-3 mb-3 p-4" id="profile-wrapper">
		</div>
	`;
    this.render();
    this.setupEventListeners();
  }

  render() {
    super.render();
    new Friends();
    makeLinkActive(document.getElementById("profileMenu"));
  }
}
