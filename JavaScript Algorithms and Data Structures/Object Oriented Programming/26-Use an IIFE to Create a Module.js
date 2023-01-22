let funModule = function () {
    return {
        isCuteMixin: function (obj) {
            obj.isCute = function () {
                console.log("hola");
            }
        },
        singMixin: function (obj) {
            obj.sing = function() {
                console.log("adios")
            }
        }
    }
}()