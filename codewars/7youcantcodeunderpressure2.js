class Counter {
    #count;
    
    constructor() {
        this.#count = 0
    }
    check() {
        return this.#count
    }
    
    increment() {
        this.#count++
    }
}