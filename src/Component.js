class Component {
    constructor(components) {
        this.components = components;
    }

    render() {
        const regexp = /Component:(\w+)/g;

        const renderer = str => str.replace(regexp, (originalString, componentName) => (
            (this.components && this.components[componentName])
                ? new this.components[componentName](this.components).render()
                : originalString
        ));

        return renderer(this.content || '');
    }
}

export {Component};
