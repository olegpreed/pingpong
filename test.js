// history.pushState({}, '', '1')
// history.pushState({}, '', '2')

// document.querySelectorAll('a').forEach((el) => el.addEventListener('click', (ev) => {
//     ev.preventDefault();
//     history.pushState({}, '', el.innerText)}))

window.addEventListener('popstate', () => alert('popstate just popped!!!'))

const magicLink = document.getElementById('link');

magicLink.addEventListener('click', (ev)=>
{
    // ev.preventDefault();
    history.pushState({}, '', 'newpage')
})