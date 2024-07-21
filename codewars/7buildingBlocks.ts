class Block {
    width: number
    length: number
    height: number
    
    constructor(data: number[]) {
        [this.width, this.length, this.height] = data
    }

    getWidth() {
        return this.width
    }

    getLength() {
        return this.length
    }

    getHeight() {
        return this.height
    }

    getVolume() {
        let {width, length , height} = this
        return width * length * height
    }

    getSurfaceArea() {
        let {width, length , height} = this
        return 2* (width * length + width * height + height*length)
    }
}