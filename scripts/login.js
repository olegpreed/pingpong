// import { signInHandler } from "./register.js";

// export function signUpHandler() {
//   const signUpLink = document.getElementById("signUpLink");

//   signUpLink.addEventListener("click", async function (event) {
//     event.preventDefault();
//     const response = await fetch("views/register.html");
//     const html = await response.text();
//     document.body.innerHTML = html;
//     document.title = "Sign Up";
//     signInHandler();
//     history.pushState({}, "", "/Register");
//   });
// }
// -------------------------------

import { Component } from "./component.js";

export class Login extends Component {
  constructor() {
    super(document.getElementById("content-wrapper"));
    this.render();
  }
  render() {
    const html = `
		<div id="login-page">
			<div class="min-vh-100 d-flex align-items-center justify-content-center">
				<div class="card text-bg-secondary rounded-5">
					<div class="card-header">
						<h1 class="mt-5 mx-4 d-flex justify-content-between">Sign in<span>🏓</span></h1>
					</div>
					<div class="card-body">
						<form action="" method="POST">
							<div class="form-floating mb-2">
								<input type="text" id="login-username" class="form-control rounded-pill ps-4"
									placeholder="username" required autocomplete="username" name="username">
								<label for="login-username" class="form-label text-black-50 ps-4">Username</label>
							</div>
							<div class="form-floating mb-3">
								<input type="password" id="login-password" class="form-control rounded-pill ps-4"
									placeholder="password" required autocomplete="new-password" name="password">
								<label for="login-password" class="form-label text-black-50 ps-4">Password</label>
							</div>
							<button class="btn btn-primary rounded-pill p-3 w-100 fw-bold">Sign in</button>
						</form>
						<div class="mt-3 mx-4 text-black-50">Don't have an account? <a href="/Register" class="link-dark fw-semibold"
							data-link>Sign up</a></div>
					</div>
				</div>
			</div>
		</div>
		`;
    this.parentDiv.innerHTML = html;
  }
}
