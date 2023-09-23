import { Window } from "./Window"

export class Button {
    private _text: string
    private _style: 'primary' | 'secondary'
    private _message: string
    private _host: Window

    constructor(window: Window) {
        this._text = ''
        this._style = 'primary'
        this._host = window
    }

    text(text: string): void {
        this._text = text
    }

    style(style: 'primary' | 'secondary'): void {
        this._style = style
    }

    render(): string {
        return `
            <button${this._style == 'secondary' ? ' class="secondary"' : ''}${this._message == "" ? "" : ` onclick="window.message('${this._message}', '')"`}>${this._text}</button>
        `
    }

    click(callback: (event: any, data: any) => void) {
        this._message = this._host.requestMessage(callback)
    }
}
