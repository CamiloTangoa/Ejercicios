const Dog = {}

Dog.prototype = {
    numLegs: 4,
    eat: function () {
        console.log("yummy")
    },
    describe: function() {
        console.log("Fluffy")
    }
}