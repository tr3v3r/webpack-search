import styles from './styles.css'

export class Box {
    constructor(text) {
        this.div = document.createElement('div')
        this.div.innerHTML = text
    }

    render() {
        this.div.setAttribute('class', styles.container)
        return this.div
    }
}