import { Window, Signal } from "./Window"

export class Input {
    private _value: string
    private _message: string
    private _host: Window
    private _update: Signal

    constructor(window: Window) {
        this._value = ''
        this._host = window
        this._message = this._host.requestMessage((_event, data) => {
            this._value = data
        })
        this._update = this._host.requestSignal()
    }

    set(text: string): void {
        this._value = text
        this._update.sender(text)
    }

    get(): string {
        return this._value
    }

    render(): string {
        return `
            <input
                type="text"
                id="meep${this._message}"
                value="${this._value}"
                onchange="window.message('${this._message}', document.querySelector('#meep${this._message}').value);"
            >
            <script>
                window.signalListen('${this._update.name}', (e, v) => {
                    document.querySelector('#meep${this._message}').value = v
                });
            </script>
        `
    }
}
