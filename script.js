// import { signUpHandler } from "./scripts/login.js";
// import { signInHandler } from "./scripts/register.js";
// import { navHandler } from "./scripts/nav.js";
// import { editProfile } from "./scripts/profile.js";

// export function handleLocationGlobal() {
//   async function loadPage(src, path) {
//     if (isLoggedIn.is) {
//       const responseNav = await fetch("views/nav.html");
//       const htmlNav = await responseNav.text();
//       const responseMain = await fetch(src);
//       const htmlMain = await responseMain.text();
//       document.body.innerHTML = htmlNav;
//       document.getElementById("content-wrapper").innerHTML = htmlMain;
//       navHandler();
//       if (path === "/Profile") editProfile();
//     } else {
//       const response = await fetch(src);
//       const html = await response.text();
//       document.body.innerHTML = html;
//       if (path === "/Register") signInHandler();
//       else signUpHandler();
//     }
//   }

//   const routesHome = {
//     404: "views/404.html",
//     "/": "views/home.html",
//     "/Profile": "views/profile.html",
//     "/Login": "views/home.html",
//     "/Register": "views/home.html",
//   };

//   const routesLogin = {
//     404: "views/404.html",
//     "/": "views/login.html",
//     "/Profile": "views/login.html",
//     "/Login": "views/login.html",
//     "/Register": "views/register.html",
//   };

//   function replaceUrl(path) {
//     if (isLoggedIn.is) {
//       if (path === "/Login" || path === "/Register") {
//         path = "/";
//         history.replaceState({}, "", path);
//       }
//     } else {
//       if (path === "/Profile" || path === "/") {
//         path = "/Login";
//         history.replaceState({}, "", path);
//       }
//     }
//   }

//   const handleLocation = async () => {
//     const path = window.location.pathname;
//     let src;
//     if (isLoggedIn.is) src = routesHome[path] || routesHome[404];
//     else src = routesLogin[path] || routesLogin[404];
//     await loadPage(src, path);
//     replaceUrl(path);
//   };

//   window.addEventListener("popstate", () => {
//     handleLocation();
//   });
//   handleLocation();
// }

// export let isLoggedIn;
// isLoggedIn = {is : false } // Do async API magic to check if the user is logged in

// handleLocationGlobal();

// ----------------------------------------------

import { pushHistoryAndGoTo, replaceHistoryAndGoTo } from "./scripts/router.js";
import { Nav } from "./scripts/nav.js";

async function checkLoginStatus() {
  return true; // do API magic to check if the user is logged in
}

window.addEventListener("popstate", () => {
  router();
});

document.addEventListener("DOMContentLoaded", async () => {
  setupNavigation();
  const isLoggedIn = await checkLoginStatus();
  if (!isLoggedIn) {
    replaceHistoryAndGoTo("/Login");
  } else {
    const navbar = new Nav();
    replaceHistoryAndGoTo("/");
  }
});

function setupNavigation() {
  document.body.addEventListener("click", (event) => {
    const targetElement = event.target.closest("[data-link]");

    if (targetElement) {
      event.preventDefault();
      pushHistoryAndGoTo(targetElement.getAttribute("href"));
    }
  });
}
