import { BrowserWindow } from '../electronEsm.js'
import { join } from 'path'

export class Window {
    width: number
    height: number
    protected _win: any

    constructor() {
        this.width = 800
        this.height = 600
        this._win = new BrowserWindow({
            width: this.width,
            height: this.height,
        })

        this._win.setMenu(null)
        this._win.loadFile(
            join(__dirname, 'node_modules', 'dtfw', 'web', 'shell.html')
        )
    }

    devtools(): void {
        this._win.webContents.openDevTools()
    }
}
