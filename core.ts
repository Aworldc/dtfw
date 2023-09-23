import { app, BrowserWindow } from './electron'
import { normalize } from 'path'

function onOpen(callback: () => void): void {
    app.whenReady().then(() => {
        callback()

        app.on('activate', () => {
            if (BrowserWindow.getAllWindows().length === 0) {
                callback()
            }
        })
    })
}

function enableQuitOnAllClose(): void {
    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit()
        }
    })
}

export {
    onOpen,
    enableQuitOnAllClose
}
