
class HomeController {
  public num1
  public num2

  public add() {
    let result = (parseInt(this.num1) + parseInt(this.num2));
    console.log(result); // prints out number value
  }
}

angular.module('myapp').controller('HomeController', HomeController);
