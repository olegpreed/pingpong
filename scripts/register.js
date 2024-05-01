import { signUpHandler } from "./login.js";
import { handleLocationGlobal } from "../script.js";
import { isLoggedIn } from "../script.js";

export function signInHandler() {
  const loginLink = document.getElementById("signInLink");

  loginLink.addEventListener("click", async function (event) {
    event.preventDefault();
    const response = await fetch("views/login.html");
    const html = await response.text();
    document.body.innerHTML = html;
    document.title = "Log In";
    signUpHandler();
    history.pushState({}, "", "/Login");
  });

  const registerForm = document.getElementById("registerForm");
  registerForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const requestBody = {
      username: document.getElementById("signup-username").value,
      password: document.getElementById("signup-password").value,
    };

    fetch("http://127.0.0.1:8000/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        isLoggedIn.is = true;
        handleLocationGlobal();
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  });
}
