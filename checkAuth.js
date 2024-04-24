async function loadFirstPage(src)
{
    const response = await fetch(src);
    const html = await response.text();
    document.body.innerHTML = html;
    document.title = title;
    history.pushState({}, title, path);
}

const isLoggedIn = false; // do api magic to check if you are logged in
let indexSrc;

if (isLoggedIn) {
    indexSrc = 'nav.html'
    title = 'Home'
    path = '/'    
}
else{
    indexSrc = 'login.html'
    title = 'Login'
    path = '/Login'
}

loadFirstPage(indexSrc, title, path)