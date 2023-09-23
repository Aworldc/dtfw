const { ipcRenderer, contextBridge } = require('electron')
import styles from './web/main.css'

function $css(css: string) {
    document.head.appendChild(document.createElement('style')).innerHTML = css
}

window.addEventListener('DOMContentLoaded', () => {
    ipcRenderer.on('setInnerHtml', (event: any, args: string) => {
        document.body.innerHTML = args
    })
})

contextBridge.exposeInMainWorld('message', (name: string, data: any) => {
    ipcRenderer.send(`contentMessage__${name}`, data)
})

contextBridge.exposeInMainWorld('signalListen', (name: string, callback: (event: any, data: any) => void) => {
    ipcRenderer.on(`contentSignal__${name}`, callback)
})

window.onload = () => {
    $css(styles)
}
