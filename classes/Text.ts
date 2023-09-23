import { Window } from "./Window"

export class Text {
    private _style: 'h1' | 'h2' | 'h3' | 'p'
    private _host: Window
    private _text: string

    constructor(window: Window) {
        this._style = 'p'
        this._host = window
        this._text = ''
    }

    style(style: 'h1' | 'h2' | 'h3' | 'p'): void {
        this._style = style
    }

    text(text: string) {
        this._text = text
    }

    render(): string {
        return `
            <${this._style}>${this._text}</${this._style}>
        `
    }
}
