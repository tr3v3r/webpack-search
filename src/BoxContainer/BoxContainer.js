import styles from './styles.css'

export class BoxContainer {
    constructor() {
        this.div = document.createElement('div')
    }

    clear() {
        this.div.innerHTML = '' 
    }

    appendChild(child) {
        this.div.appendChild(child)
    }

    render() {
        this.div.setAttribute('class', styles.container)
        return this.div
    }
}