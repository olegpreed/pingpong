// import { signUpHandler } from "./login.js";
// import { handleLocationGlobal } from "../script.js";
// import { isLoggedIn } from "../script.js";

// export function signInHandler() {
//   const loginLink = document.getElementById("signInLink");

//   loginLink.addEventListener("click", async function (event) {
//     event.preventDefault();
//     const response = await fetch("views/login.html");
//     const html = await response.text();
//     document.body.innerHTML = html;
//     document.title = "Log In";
//     signUpHandler();
//     history.pushState({}, "", "/Login");
//   });

//   const registerForm = document.getElementById("registerForm");
//   registerForm.addEventListener("submit", async function (event) {
//     event.preventDefault();

//     const requestBody = {
//       username: document.getElementById("signup-username").value,
//       password: document.getElementById("signup-password").value,
//     };

//     fetch("http://127.0.0.1:8000/user/register", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(requestBody),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log(data);
//         isLoggedIn.is = true;
//         handleLocationGlobal();
//       })
//       .catch((error) => {
//         console.error("There was a problem with the fetch operation:", error);
//       });
//   });
// }

import { Component } from "./component.js";

export class Register extends Component {
  constructor() {
    super(document.getElementById("content-wrapper"));
    this.render();
  }
  render() {
    const html = `
	<div id="registration-page">
		<div class="bg-dark vh-100 d-flex align-items-center justify-content-center">
			<div class="card text-bg-secondary rounded-5">
				<div class="card-header">
					<h1 class="mt-5 mx-4 d-flex justify-content-between">Sign up<span>🏓</span></h1>
				</div>
				<div class="card-body">
					<form id="registerForm">
						<div class="form-floating mb-2">
							<input type="text" id="signup-username" class="form-control rounded-pill ps-4"
								placeholder="username" required autocomplete="username" name="username">
							<label for="signup-username" class="form-label text-black-50 ps-4">Username</label>
						</div>
						<div class="form-floating mb-2">
							<input type="password" id="signup-password" class="form-control rounded-pill ps-4"
								placeholder="password" required autocomplete="new-password" name="password">
							<label for="signup-password" class="form-label text-black-50 ps-4">Password</label>
						</div>
						<div class="form-floating mb-3">
							<input type="password" id="signup-password-confirm" class="form-control rounded-pill ps-4"
								placeholder="confirm password" required autocomplete="new-password" name="passwordRepeated">
							<label for="signup-password-confirm" class="form-label text-black-50 ps-4">Confirm
								password</label>
						</div>
						<button class="btn btn-primary rounded-pill p-3 w-100 fw-bold">Sign in</button>
					</form>
					<div class="mt-3 mx-4 text-black-50">Already have an account? <a href="/Login" class="link-dark fw-semibold"
						data-link>Sign in</a></div>
				</div>
			</div>
		</div>
	</div>
		`;
    this.parentDiv.innerHTML = html;
  }
}
