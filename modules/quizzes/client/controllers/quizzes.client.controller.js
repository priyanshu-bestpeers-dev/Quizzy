(function () {
  'use strict';

  // Quizzes controller
  angular
    .module('quizzes')
    .controller('QuizzesController', QuizzesController);

  QuizzesController.$inject = ['$scope', '$state', '$window', 'Authentication', 'quizResolve'];

  function QuizzesController ($scope, $state, $window, Authentication, quiz) {
    var vm = this;

    vm.authentication = Authentication;
    vm.quiz = quiz;
    vm.error = null;
    vm.form = {};
    vm.remove = remove;
    vm.save = save;

    // Remove existing Quiz
    function remove() {
      if ($window.confirm('Are you sure you want to delete?')) {
        vm.quiz.$remove($state.go('quizzes.list'));
      }
    }

    // Save Quiz
    function save(isValid) {
      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'vm.form.quizForm');
        return false;
      }

      // TODO: move create/update logic to service
      if (vm.quiz._id) {
        vm.quiz.$update(successCallback, errorCallback);
      } else {
        vm.quiz.$save(successCallback, errorCallback);
      }

      function successCallback(res) {
        $state.go('quizzes.view', {
          quizId: res._id
        });
      }

      function errorCallback(res) {
        vm.error = res.data.message;
      }
    }
  }
}());
