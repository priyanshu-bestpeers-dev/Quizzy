(function() {
  'use strict';

  angular
    .module('questions.admin')
    .controller('QuestionsAdminController', QuestionsAdminController);

  QuestionsAdminController.$inject = ['$scope', '$state', '$window', 'questionResolve', 'Authentication', 'Notification'];

  function QuestionsAdminController($scope, $state, $window, question, Authentication, Notification) {
    var vm = this;

    vm.question = question;
    vm.authentication = Authentication;
    vm.form = {};
    vm.remove = remove;
    vm.save = save;

    // difficulty level array

    vm.difficultyLevel = [{
        'difficulty_level': 'advanced'
      },
      {
        'difficulty_level': 'intermediate'
      },
      {
        'difficulty_level': 'beginner'
      }
    ]

    vm.categories = [{
        'category': 'sports'
      },
      {
        'category': 'general knowledge'
      },
      {
        'category': 'film'
      },
      {
        'category': 'music'
      },
      {
        'category': 'food and drink'
      },
      {
        'category': 'television'
      },
      {
        'category': 'animals'
      },
      {
        'category': 'science'
      },
      {
        'category': 'history'
      },
      {
        'category': 'human body'
      },
      {
        'category': 'politics'
      },
      {
        'category': 'news'
      },
      {
        'category': 'art'
      },
      {
        'category': 'books'
      },
      {
        'category': 'famous people'
      },
      {
        'category': 'religion'
      },
      {
        'category': 'travel'
      },
      {
        'category': 'countries'
      },
      {
        'category': 'quotes from films'
      },
      {
        'category': 'olympics'
      },
      {
        'category': 'festivals'
      },
      {
        'category': 'engineering'
      }
    ]

    // Remove existing Question
    function remove() {
      if ($window.confirm('Are you sure you want to delete?')) {
        vm.question.$remove(function() {
          $state.go('admin.questions.list');
          Notification.success({
            message: '<i class="glyphicon glyphicon-ok"></i> Question deleted successfully!'
          });
        });
      }
    }

    // Save Question
    function save(isValid) {
      vm.question.options = [];
      vm.question.options.push(vm.option1, vm.option2, vm.option3, vm.option4);
      console.log(vm.question.options);
      vm.question.difficulty = vm.selected_difficulty_level.difficulty_level;
      vm.question.category = vm.selected_category.category;
      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'vm.form.questionForm');
        return false;
      }

      // Create a new question, or update the current instance
      vm.question.createOrUpdate()
        .then(successCallback)
        .catch(errorCallback);

      function successCallback(res) {
        $state.go('admin.questions.list'); // should we send the User to the list or the updated Question's view?
        Notification.success({
          message: '<i class="glyphicon glyphicon-ok"></i> Question saved successfully!'
        });
      }

      function errorCallback(res) {
        Notification.error({
          message: res.data.message,
          title: '<i class="glyphicon glyphicon-remove"></i> Question save error!'
        });
      }
    }
  }
}());
