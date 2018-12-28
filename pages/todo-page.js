
let ToDoPage = function () {
  this.url = 'https://angularjs.org';
  this.toDoInput = element(by.model('todoList.todoText'));
  this.addButton = element(by.css('[value="add"]'));
  this.toDoList = element.all(by.repeater('todo in todoList.todos'));
  this.completedAmount = element.all(by.css('.done-true'));

  this.goTo = function (url) {
    browser.get(url);
  };

  this.addToDo = function () {
    this.toDoInput.sendKeys('write first protractor test');
    this.addButton.click();
  };

  this.crossToDo = function () {
    element.all(by.repeater('todo in todoList.todos')).get(2).$('input').click();
  };
};

module.exports = ToDoPage;
