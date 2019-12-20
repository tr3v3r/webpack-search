import styles from './styles.css'

export class Form {
    constructor() {
        this.input = document.createElement('input')
        this.button = document.createElement('button')
        this.form = document.createElement('form')     
    }


    onChange(listener) {
        this.input.addEventListener('input', () => {
            listener(this.input.value)
        })  
    }

    onSubmit(listener) {
        this.form.addEventListener('submit', (event) => {
            event.preventDefault()
            listener(this.input.value)
        })
    }

    setButtonToAdd() {
        this.button.innerHTML = 'Add'
    }

    setButtonToSearch() {
        this.button.innerHTML = 'Search'
    }


    render() {        
        this.form.setAttribute('class', styles.container)
        this.input.setAttribute('class', styles.input)
        this.button.setAttribute('class', styles.button)    

        this.form.appendChild(this.input)
        this.form.appendChild(this.button)

        return this.form
    }
}