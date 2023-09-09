import './dirNamePolyfill.js'
import { Window } from './classes/Window.js'
import { app, BrowserWindow } from './electronEsm.js'

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
    enableQuitOnAllClose,
    Window
}
