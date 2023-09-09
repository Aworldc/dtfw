import { BrowserWindow, ipcMain } from '../electronEsm.js'
import { join } from 'path'
import { makeID } from '../util.js'

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
            title: "Dtfw window",
            webPrefrences: {
                preload: join(__dirname, 'node_modules', 'dtfw', 'preload.js')
            }
        })

        this._win.setMenu(null)
        this._win.loadFile(
            join(__dirname, 'node_modules', 'dtfw', 'web', 'shell.html')
        )
    }

    devtools(): void {
        this._win.webContents.openDevTools()
    }

    title(title: string): void {
        this._win.title = title
    }

    requestMessage(callback: (event: any, data: any) => void): string {
        let id = makeID(20)
        ipcMain.on(`contentMessage__${id}`, callback)
        return id
    }
}
