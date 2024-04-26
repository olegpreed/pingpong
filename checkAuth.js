async function loadPage(src, title, path) {
  const response = await fetch(src);
  const html = await response.text();
  document.body.innerHTML = html;
  document.title = title;
  history.pushState({}, title, path);
}

function handleNavigation() {
  const isLoggedIn = false; // Do API magic to check if the user is logged in
  let indexSrc, title, path;

  if (isLoggedIn) {
    indexSrc = "nav.html";
    title = "Home";
    path = "/";
    window.removeEventListener("popstate", handleNavigation);
  } else {
    indexSrc = "login.html";
    title = "Login";
    path = "/login";
  }

  loadPage(indexSrc, title, path);
}

// Initial page load
handleNavigation();

// Handle back/forward navigation
window.addEventListener("popstate", handleNavigation);
