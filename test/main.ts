import { onOpen, enableQuitOnAllClose, Window, Button, Container, Column, Input } from "dtfw";

onOpen(() => {
    let win = new Window()
    win.title("My program")

    win.devtools()

    let con = new Container(win)
    let col = new Column(win)

    let somethingButton = new Button(win)
    somethingButton.text("Click me")

    let somethingInput = new Input(win)
    somethingInput.set("A value")

    somethingButton.click(() => {
        let value = somethingInput.get()
        console.log(value)
        somethingInput.set("Juicycock")
    })

    col.insert(somethingButton)
    col.insert(somethingInput)

    con.setWidget(col)
    win.setWidget(con)

    win.update()
})

enableQuitOnAllClose()
