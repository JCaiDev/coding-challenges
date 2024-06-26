//Re-open the class String and add the "myNewMethod" method.


String.prototype.myNewMethod = function () {
    return this.toUpperCase()
}


// another code

String.prototype.myNewMethod = String.prototype.toUpperCase
