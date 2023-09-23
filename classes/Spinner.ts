import { Window } from "./Window"

export class Spinner {
    private _size: 'small' | 'normal' | 'large'
    private _host: Window

    constructor(window: Window) {
        this._size = 'normal'
        this._host = window
    }

    size(size: 'small' | 'normal' | 'large'): void {
        this._size = size
    }

    render(): string {
        return `
            <div class="${this._size == 'normal' ? 'spinner' : `spinner ${this._size}`}"></div>
        `
    }
}
