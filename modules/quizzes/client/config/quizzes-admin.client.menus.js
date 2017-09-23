(function () {
  'use strict';

  // Configuring the Articles Admin module
  angular
    .module('quizzes.admin')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(Menus) {
    Menus.addSubMenuItem('topbar', 'admin', {
      title: 'Manage Quizzes',
      state: 'admin.quizzes.list'
    });

    Menus.addSubMenuItem('topbar', 'admin', {
      title: 'Create Quizzes',
      state: 'admin.quizzes.create'
    });
  }
}());
