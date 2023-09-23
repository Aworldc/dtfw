const { app, BrowserWindow, ipcMain, protocol } =  await import('electron')
import path from 'path'
import { fileURLToPath } from 'url'

global.__filename = fileURLToPath(import.meta.url)
global.__dirname = path.dirname(__filename)

export {
    app,
    BrowserWindow,
    ipcMain,
    protocol
}
