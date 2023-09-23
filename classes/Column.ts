import { Window } from "./Window"

export class Column {
    private _host: Window
    private _children: any[]

    constructor(window: Window) {
        this._children = []
        this._host = window
    }

    render(): string {
        let dicks = ""
        this._children.forEach((widget) => {
            dicks = dicks + widget.render()
        })

        return `
            <div class="column">${dicks}</div>
        `
    }

    insert(widget: any) {
        this._children.push(widget)
    }
}
