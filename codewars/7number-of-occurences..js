Array.prototype.numberOfOccurrences = function(search) {
    return this.filter( function(num){ return search === num } ).length;
}