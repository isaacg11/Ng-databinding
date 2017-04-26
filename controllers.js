var HomeController = (function () {
    function HomeController() {
    }
    HomeController.prototype.add = function () {
        var result = (parseInt(this.num1) + parseInt(this.num2));
        console.log(result); // prints out number value
    };
    return HomeController;
}());
angular.module('myapp').controller('HomeController', HomeController);
