import {
    onOpen,
    enableQuitOnAllClose,
    Window,
    Tabs,
    Row,
    Card,
    Column,
    Text
} from 'dtfw'
import { Router } from './Router'

let changePage

function nav(win) {
    let mytabs = new Tabs(win)
    mytabs.setItems(["Home", "Meep", "Settings"])
    mytabs.setLayout("vertical")

    mytabs.changed((i, v) => {
        changePage(v)
    })

    return mytabs
}

function getPage(win, page) {
    let col = new Column(win)
    let header = new Text(win)
    let text = new Text(win)
    
    header.style("h1")
    header.text(page)
    text.style("p")
    text.text(`This is the ${page.toLowerCase()} page`)

    if (page == "Home") {
        header.text("Hello!")
    } else if (page == "Meep") {
        text.text("This is another page")
    }

    col.insert(header)
    col.insert(text)

    return col
}

function main(win) {
    let mycard = new Card(win)
    mycard.sheet(true)

    let appRouter = new Router(win)
    appRouter.setPage("Home")
    changePage = appRouter.setPage.bind(appRouter)

    appRouter.addPage("Home", getPage(win, "Home"))
    appRouter.addPage("Meep", getPage(win, "Meep"))
    appRouter.addPage("Settings", getPage(win, "Settings"))

    mycard.setWidget(appRouter)

    return mycard
}

onOpen(() => {
    let win = new Window()

    win.title('My program')
    win.devtools()

    let row = new Row(win)

    row.insert(nav(win))
    row.insert(main(win))

    win.setWidget(row)

    win.update()
})

enableQuitOnAllClose()
