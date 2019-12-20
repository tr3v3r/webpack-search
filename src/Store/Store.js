export class Store {
    constructor() {
        this.data = [
            'join', 'reverse', 'sort', 'push', 'pop', 'shift', 'unshift',
            'splice', 'concat', 'slice', 'indexOf', 'lastIndexOf',
            'forEach', 'map', 'reduce', 'reduceRight', 'filter',
            'some', 'every'
          ]
        this.filterText = ''
        this.listeners = []
    }


    add(text) {
        this.data.push(text)
        this.trigger()
    }

    onChange(listener) {
        this.listeners.push(listener)
        this.trigger()
    }

    setFilterText(nextText) {
        this.filterText = nextText
        this.trigger()
    }

    trigger() {
        const filteredData = this.data
        .filter(text => text.includes(this.filterText))

        this.listeners.forEach(listener => listener(filteredData))
    }
}


