
// Quizzes service used to communicate Questions REST endpoints

(function () {
  'use strict';

  angular
    .module('quizzes.services')
    .factory('QuizzesService', QuizzesService);

  QuizzesService.$inject = ['$resource', '$log'];

  function QuizzesService($resource, $log) {
    var Quiz = $resource('api/quizzes/:quizId', {
      quizId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });

    angular.extend(Quiz.prototype, {
      createOrUpdate: function () {
        var quiz = this;
        return createOrUpdate(quiz);
      }
    });

    return Quiz;

    function createOrUpdate(quiz) {
      if (quiz._id) {
        return quiz.$update(onSuccess, onError);
      } else {
        return quiz.$save(onSuccess, onError);
      }

      // Handle successful response
      function onSuccess(quiz) {
        // Any required internal processing from inside the service, goes here.
      }

      // Handle error response
      function onError(errorResponse) {
        var error = errorResponse.data;
        // Handle error internally
        handleError(error);
      }
    }

    function handleError(error) {
      // Log error
      $log.error(error);
    }
  }
}());
