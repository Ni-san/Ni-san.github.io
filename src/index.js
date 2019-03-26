import 'style.sass';
import {Application} from "./Application";
import {Header} from "./components/Header";
import {Spy} from "./spy";

Spy();

const components = {
    Header,
};

const root = document.querySelector('#app');

const app = new Application(components);

root.innerHTML = app.render();
