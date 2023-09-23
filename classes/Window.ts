import { BrowserWindow, ipcMain } from '../electron'
import { join } from 'path'
import { makeID } from '../share'
import htmlShell from '../web/shell.html'

export interface Signal {
    name: string,
    sender: (data: any) => void
}

export class Window {
    private _width: number
    private _height: number
    private _win: any
    private _child: any

    constructor() {
        this._width = 800
        this._height = 600
        this._win = new BrowserWindow({
            width: this._width,
            height: this._height,
            title: "Dtfw window",
            webPreferences: {
                preload: join(__dirname, 'preload.js')
            }
        })

        this._win.setMenu(null)
        this._win.loadURL(htmlShell)
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

    requestSignal(): Signal {
        let id = makeID(20)

        return {
            name: id,
            sender: (data) => {
                this._win.webContents.send(`contentSignal__${id}`, data)
            }
        }
    }

    setWidget(widget: any) {
        this._child = widget
    }

    update() {
        this._win.webContents.send('setInnerHtml', this._child.render())
    }
}
