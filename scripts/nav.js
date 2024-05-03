// import { editProfile } from "./profile.js";

// export function navHandler() {
//   async function changeView(event) {
//     event.preventDefault();
//     const src = event.currentTarget.href;
//     let title = event.currentTarget.innerText;
//     if (title === "") title = "Profile";
//     const url = title.split(" ").join("");
//     const response = await fetch(src);
//     const html = await response.text();
//     document.getElementById("content-wrapper").innerHTML = html;
//     document.title = title;
//     if (title === "Profile") editProfile();
//     history.pushState({}, "", url);
//   }

//   document.querySelectorAll(".nav-link").forEach((link) => {
//     link.addEventListener("click", (event) => {
//       changeView(event);
//     });
//   });
// }

import { Component } from "./component.js";

export class Nav extends Component
{
	constructor()
	{
		super(document.getElementById("navigation-wrapper"));
		this.render();
	}

	render()
	{
		const html = `
		<nav class="navbar navbar-expand sticky-top navbar-dark">
		<div class="container-md">
			<a href="" class="navbar-brand">Ping Pong</a>
			<ul class="navbar-nav d-flex align-items-center">
				<li class="nav-item"><a href="/" class="nav-link active" data-link>Home</a></li>
				<li class="nav-item"><a href="/Tournament" class="nav-link" data-link>Tournament</a></li>
				<li class="nav-item"><a href="/Chat" class="nav-link" data-link>Chat</a></li>
				<li class="nav-item"><a href="/Profile" class="nav-link" data-link><img src="assets/profile.png" alt="profile image"
							class="border border-3 border-success rounded-circle"
							style="width: 50px; height: 50px; object-fit: cover;"></a></li>
			</ul>
		</div>
	</nav>
	<div id="content-wrapper" class="container-md">
	</div>
	`;
		this.parentDiv.innerHTML = html;
	}
}
