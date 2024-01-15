String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase()
}

let greet = function(name) {
    return `Hello ${name.capitalize()}!`
}