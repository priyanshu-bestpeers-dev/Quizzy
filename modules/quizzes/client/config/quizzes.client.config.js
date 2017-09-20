(function () {
  'use strict';

  angular
    .module('quizzes')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    // Set top bar menu items
    menuService.addMenuItem('topbar', {
      title: 'Quizzes',
      state: 'quizzes',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    menuService.addSubMenuItem('topbar', 'quizzes', {
      title: 'List Quizzes',
      state: 'quizzes.list'
    });

    // Add the dropdown create item
    menuService.addSubMenuItem('topbar', 'quizzes', {
      title: 'Create Quiz',
      state: 'quizzes.create',
      roles: ['user']
    });
  }
}());
