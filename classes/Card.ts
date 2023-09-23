import { Window } from './Window'

export class Card {
    private _host: Window
    private _child: any
    private _clickable: boolean
    private _message: string

    constructor(window: Window) {
        this._host = window
        this._clickable = false
    }

    render(): string {
        return `
            <div 
                class="card${this._clickable ? ' clickable' : ''}"
                ${
                    this._message == ''
                        ? ''
                        : ` onclick="window.message('${this._message}', '')"`
                }
            >
                ${this._child.render()}
            </div>
        `
    }

    setWidget(widget: any) {
        this._child = widget
    }

    click(callback: (event: any, data: any) => void) {
        this._clickable = true
        this._message = this._host.requestMessage(callback)
    }
}
