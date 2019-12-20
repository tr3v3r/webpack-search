import { Box } from './Box'
import { BoxContainer } from './BoxContainer'
import { Form } from './Form'
import { Store } from './Store'

const boxContainer = new BoxContainer()
const form = new Form()
const store = new Store()

form.onChange(text => {
    store.setFilterText(text)
})

form.onSubmit(text => {
    store.add(text)
})

store.onChange(filteredData => {
    if(filteredData.length) {
        form.setButtonToSearch()
    } else {
        form.setButtonToAdd()
    }

    boxContainer.clear()
    filteredData.forEach(text => {
        const box = new Box(text).render()
        boxContainer.appendChild(box)
    })
})

document.body.appendChild(form.render())
document.body.appendChild(boxContainer.render())

