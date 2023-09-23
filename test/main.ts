import {
    onOpen,
    enableQuitOnAllClose,
    Window,
    Button,
    Container,
    Column,
    Input
} from 'dtfw'

onOpen(() => {
    let win = new Window()
    win.title('My program')

    win.devtools()

    let con = new Container(win)
    let col = new Column(win)

    let somethingButton = new Button(win)
    somethingButton.text('Click me')

    let somethingInput = new Input(win)
    somethingInput.set('A value')

    somethingButton.click(() => {
        console.log(somethingInput.get())
        somethingInput.set('A new value')
    })

    col.insert(somethingButton)
    col.insert(somethingInput)

    con.setWidget(col)
    win.setWidget(con)

    win.update()
})

enableQuitOnAllClose()
