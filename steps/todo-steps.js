let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

let ToDoSteps = function() {
  let ToDoPage = require("../pages/todo-page");

  this.World = function MyWorld() {
    this.page = new ToDoPage();
  };

  this.Given('AngularJS is opened', function (callback) {
    this.page.goTo(this.page.url);
    callback();
  });

  this.When('I add new ToDo', function (callback) {
    this.page.addToDo();
    callback();
  });

  this.Then('I verify "$itemText" and num of items should equal $result', function (itemText, result, callback) {
    let count = this.page.toDoList.count();
    let text = this.page.toDoList.get(2).getText();
    expect(count).to.eventually.equal(parseInt(result));
    expect(text).to.eventually.equal(itemText).and.notify(callback);
  });

  this.Then('I mark "$itemText" as completed and num of items should equal $result', function (itemText, result, callback) {
    this.page.crossToDo();
    let count = this.page.completedAmount.count();
    expect(count).to.eventually.equal(parseInt(result)).and.notify(callback);
  });

};

module.exports = ToDoSteps;
