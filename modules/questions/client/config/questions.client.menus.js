(function () {
  'use strict';

  angular
    .module('questions')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    menuService.addMenuItem('topbar', {
      title: 'Questions',
      state: 'questions',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    menuService.addSubMenuItem('topbar', 'questions', {
      title: 'List Questions',
      state: 'questions.list',
      roles: ['*']
    });
     menuService.addSubMenuItem('topbar', 'questions', {
      title: 'Create Questions',
      state: 'questions.create',
      roles: ['*']
    });
  }
}());
