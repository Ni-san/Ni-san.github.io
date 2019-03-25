'use strict';

import {Component} from "./Component";

class Application extends Component {
    render() {
        this.content = require('application.pug')();

        return super.render();
    }
}

export {Application};
