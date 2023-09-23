import { Button } from './classes/Button'
import { Card } from './classes/Card'
import { Column } from './classes/Column'
import { Input } from './classes/Input'
import { Row } from './classes/Row'
import { Spinner } from './classes/Spinner'
import { Tabs } from './classes/Tabs'
import { Text } from './classes/Text'

import { Window } from './classes/Window'

type Widget =
    | Button
    | Card
    | Column
    | Input
    | Row
    | Spinner
    | Tabs
    | Text

export {
    Button,
    Card,
    Column,
    Input,
    Row,
    Spinner,
    Tabs,
    Text,
    Widget,
    Window
}
