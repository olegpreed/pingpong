async function loadPage(src, path) {
    if (isLoggedIn)
    {
        const responseNav = await fetch('nav.html');
        const htmlNav = await responseNav.text();
        if (path === 'Login' || path === 'Register')
            path = '/'
        const responseMain = await fetch(src);
        const htmlMain = await responseMain.text();
        document.body.innerHTML = htmlNav;
        document.body.insertAdjacentHTML('beforeend', htmlMain);
        document.title = 'Ping Pong';
    }
    else 
    {
        if (path === 'About' || path === '/')
            path = 'Login'
        const response = await fetch(src);
        const html = await response.text();
        document.body.innerHTML = html;
        document.title = 'Ping Pong';
    }
    history.pushState({}, '', path);
}

const routesHome = {
    404: "404.html",
    '/' : "home.html",
    'About': "about.html",
    'Login': "home.html",
    'Register': "home.html"
}

const routesLogin = { 
    404: "404.html",
    '/' : "login.html",
    'About': "login.html",
    'Login': "login.html",
    'Register': "register.html"
}

// const route = (event) => {
//     event = event || window.event;
//     event.preventDefault();
//     window.history.pushState({}, "", event.target.href);
//     handleLocation();
// };

const handleLocation = async () => {
    const path = window.location.pathname;
    let src;
    if (isLoggedIn)
        src = routesHome[path] || routesHome[404];
    else
        src = routesLogin[path] || routesLogin[404];
    loadPage(src, path)
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
// window.route = route;

const isLoggedIn = false; // Do async API magic to check if the user is logged in
handleLocation();

// function handleNavigation() {
//   const isLoggedIn = false; // Do API magic to check if the user is logged in
//   let indexSrc, title, path;

//   if (isLoggedIn) {
//     indexSrc = "nav.html";
//     title = "Home";
//     path = "/";
//   } else {
//     indexSrc = "login.html";
//     title = "Login";
//     path = "/login";
//   }

//   loadPage(indexSrc, title, path);
// }

// Initial page load
// handleNavigation();

