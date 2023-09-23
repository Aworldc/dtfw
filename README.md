# Dtfw
DeskTop FrameWork: A crappy wrapper around electron.js to provide an api similar to qt/gtk

## Install
### Npm
```bash
# do not use pnpm, it doesn't work, at least on my machine
$ npm i dtfw
```
### Manual
1. Clone this repo into the .dtfw folder
   ```bash
   $ git clone https://github.com/Aworldc/dtfw .dtfw
   ```
2. Add this line to your package.json dependencies field
   ```json
   "dtfw": "file:.dtfw"
   ```
## Usage
TODO
### Building your own components
Components in dtfw are just classes that take a window argument in the constructor, and implement a render method that returns some html. An example:
```typescript
// Router.ts
import { Window } from 'dtfw'

export class Router {
    private _host: Window
    private _page: string
    private _pages: any

    constructor(win) {
        this._host = win
        this._page = ""
        this._pages = {}
    }

    addPage(name, rootWidget) {
        this._pages[name] = rootWidget
    }

    setPage(name) {
        this._page = name
    }

    render() {
        return this._pages[this._page].render()
    }
}
```
**Rules:**
- All properties are private and their names start with an underscore.
- Widgets should all be in their own typescript file.
- The export class should be named whatever the widget would be
- The file needs to be named whatever the export class is named
## Roadmap
### Components built
- [x] Button
- [x] Card
- [x] Column
- [x] Row
- [x] Container
- [x] Text
- [x] Spinner
- [x] Options
- [ ] Input
- [ ] Progress
- [ ] Checkbox
- [ ] Radio
- [ ] Select
- [ ] Dialog
- [ ] Toast
- [ ] Menubar
- [ ] Tooltip
- [ ] Image
- [ ] Video
- [ ] Sound
- [ ] Icon
### Other
- [ ] Make file picker apis
- [ ] Ditch electron for something better
- [ ] Publish to npm
- [ ] Make notification apis (native and custom)
- [ ] Make a themeing api
- [ ] Add more typography options
- [ ] Make a cli (Running, scaffolding, bundling)
- [ ] Icons in all the places
