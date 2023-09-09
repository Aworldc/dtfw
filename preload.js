import { ipcRenderer, contextBridge } from 'electron'

ipcRenderer.on('setInnerHtml', (event, args) => {
    document.body.innerHTML = args
})

contextBridge.exposeInMainWorld('message', (name, data) => {
    ipcRenderer.send(`contentMessage__${name}`, data)
})
