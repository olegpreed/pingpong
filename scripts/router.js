import { Home } from "./home.js";
import {Login} from "./login.js";
import {Profile} from "./profile.js";
import {Tournament} from "./tournament.js";
import {Register} from "./register.js";

const routes = [
	{ path: "/", view: Home },
	{ path: "/Login", view: Login },
	{ path: "/Register", view: Register },
	{ path: "/Profile", view: Profile },
	{ path: "/Tournament", view: Tournament },
];

function router() {
	const url = window.location.pathname;
	console.log(url);
	const route = routes.find((route) => route.path === url);
	const view = new route.view();

}

function pushHistoryAndGoTo(path) {
	history.pushState({}, "", path);
	router();
}

function replaceHistoryAndGoTo(path) {
	history.replaceState({}, "", path);
	router();
}

export { pushHistoryAndGoTo, replaceHistoryAndGoTo };