import { Window } from "./Window"

export class Container {
    private _host: Window
    private _child: any

    constructor(window: Window) {
        this._host = window
    }

    render(): string {
        return `
            <div class="container">${this._child.render()}</div>
        `
    }

    setWidget(widget: any) {
        this._child = widget
    }
}
