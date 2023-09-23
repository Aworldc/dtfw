import { Window } from "./Window"

export class Tabs {
    private _layout: 'horizontal' | 'vertical'
    private _host: Window
    private _items: string[]
    private _index: number
    private _clickedmessage: string
    private _callback: (index, value) => void

    constructor(window: Window) {
        this._layout = 'horizontal'
        this._host = window
        this._items = []
        this._index = 0
        this._callback = ()=>{}

        this._clickedmessage = this._host.requestMessage((e, v) => {
            this._index = v
            this._callback(v, this._items[v])
            this._host.update()
        })
    }

    setLayout(layout: 'horizontal' | 'vertical') {
        this._layout = layout
    }

    setItems(items: string[]) {
        this._items = items
    }

    render() {
        let items = ""

        this._items.forEach((item, index) => {
            items = items + `<div class="tab${index == this._index ? " active" : ""}" onclick="window.message('${this._clickedmessage}', ${index})">${item}</div>`
        })

        return `
            <div class="tabs ${this._layout}" style="--num-items: ${this._items.length};">
                ${items}
                <div style"flex-grow: 1;"></div>
            </div>
        `
    }

    changed(callback: (index, value) => void) {
        this._callback = callback
    }
}
