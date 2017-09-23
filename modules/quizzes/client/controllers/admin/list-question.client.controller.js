(function () {
  'use strict';

  angular
    .module('quizzes.admin')
    .controller('QuizzesAdminListController', QuizzesAdminListController);

  QuizzesAdminListController.$inject = ['QuizzesService'];

  function QuizzesAdminListController(QuizzesService) {
    var vm = this;

    vm.quizzes = QuizzesService.query();
  }
}());
