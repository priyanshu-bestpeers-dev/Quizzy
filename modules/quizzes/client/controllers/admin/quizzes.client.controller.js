(function () {
  'use strict';

  angular
    .module('quizzes.admin')
    .controller('QuizzesAdminController', QuizzesAdminController);

  QuizzesAdminController.$inject = ['$scope', '$state', '$window', 'quizResolve', 'Authentication', 'Notification', 'QuestionsService'];

  function QuizzesAdminController($scope, $state, $window, quiz, Authentication, Notification, QuestionsService) {
    var vm = this;

    vm.quiz = quiz;
    vm.authentication = Authentication;
    vm.form = {};
    vm.remove = remove;
    vm.save = save;
    $scope.example1model = [];
    vm.addQuestion = addQuestion ;
    vm.quiz.questions = [];

    $scope.example1data = QuestionsService.query();
    console.log($scope.example1data);

    $scope.exampleSettings = {displayProp: 'question', idProp: '_id'};

    function addQuestion(index){
      vm.questions.push(index);

    }

    // Remove existing Question
    function remove() {
      if ($window.confirm('Are you sure you want to delete?')) {
        vm.quiz.$remove(function () {
          $state.go('admin.quizzes.list');
          Notification.success({ message: '<i class="glyphicon glyphicon-ok"></i> Question deleted successfully!' });
        });
      }
    }

    // Save Question
    function save(isValid) {
      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'vm.form.quizForm');
        return false;
      }

      // Create a new quiz, or update the current instance
      vm.quiz.createOrUpdate()
        .then(successCallback)
        .catch(errorCallback);

      function successCallback(res) {
        $state.go('admin.quizzes.list'); // should we send the User to the list or the updated Question's view?
        Notification.success({ message: '<i class="glyphicon glyphicon-ok"></i> Question saved successfully!' });
      }

      function errorCallback(res) {
        Notification.error({ message: res.data.message, title: '<i class="glyphicon glyphicon-remove"></i> Question save error!' });
      }
    }
  }
}());
