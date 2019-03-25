import {Component} from "../Component";

class Header extends Component {
    render() {
        this.content = require('./header.pug')();

        return super.render();
    }
}

export {Header};
