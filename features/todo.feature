Feature: Arithmetic Operations
  As a user of Angular ToDo
  I would like to create my own ToDo item(s)
  So that I can manage my time easily

  Scenario: Add new ToDo
    Given AngularJS is opened
     When I add new ToDo
     Then I verify "write first protractor test" and num of items should equal 3

  Scenario: Cross out completed ToDo
    Given AngularJS is opened
     When I add new ToDo
     Then I mark "write first protractor test" as completed and num of items should equal 2
