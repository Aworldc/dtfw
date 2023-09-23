import { Window } from "./Window"

export class Input {
    private _value: string
    private _message: string
    private _host: Window
    private _update: import("C:/Users/Phill-Al/Desktop/Projects/dtfw/.dtfw/classes/Window").Signal

    constructor(window: Window) {
        this._value = ''
        this._host = window
        this._message = this._host.requestMessage((_event, data) => {
            this._value = data
        })
        this._update = this._host.requestSignal()
    }

    set(text: string): void {
        this._update.sender(text)
    }

    get(): string {
        return this._value
    }

    render(): string {
        return `
            <input
                type="text"
                id="${this._message}"
                value="${this._value}"
            >
            <script>
                let el_${this._message} = document.querySelector('#${this._message}');

                el_${this._message}.addEventListener('input', () => {
                    window.message('${this._message}', el_${this._message}.value);
                });

                window.signalListen('${this._update.name}', (_e, value) => {
                    el_${this._message}.value = value;
                });
            </script>
        `
    }
}
