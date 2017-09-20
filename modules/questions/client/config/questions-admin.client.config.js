(function () {
  'use strict';

  // Configuring the Articles Admin module
  angular
    .module('questions.admin')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(Menus) {
    Menus.addSubMenuItem('topbar', 'admin', {
      title: 'Manage Questions',
      state: 'admin.questions.list'
    });

    Menus.addSubMenuItem('topbar', 'admin', {
      title: 'Create Questions',
      state: 'admin.questions.create'
    });
  }
}());
