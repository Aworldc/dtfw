import {
    onOpen,
    enableQuitOnAllClose,
    Window,
    Tabs,
    Row,
    Card,
    Column
} from 'dtfw'

onOpen(() => {
    let win = new Window()

    win.title('My program')
    win.devtools()

    let row = new Row(win)

    let mytabs = new Tabs(win)
    mytabs.setItems(["Home", "Meep", "Settings"])
    mytabs.setLayout("vertical")

    let mycard = new Card(win)
    mycard.sheet(true)

    let cardlayout = new Column(win)



    mycard.setWidget(cardlayout)

    row.insert(mytabs)
    row.insert(mycard)

    win.setWidget(row)

    win.update()
})

enableQuitOnAllClose()
