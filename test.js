let i = 0;

// const btn = document.getElementById("btn");
// btn.addEventListener("click", function () {
//   history.pushState({}, "", i++);
// });

// window.addEventListener("popstate", function () {
// 	  this.alert(window.location.pathname);
// });

document.body.addEventListener("click", function (event) {
 	const el = event.target.closest("[data-link]");
	if (el)
		console.log(el);
});
