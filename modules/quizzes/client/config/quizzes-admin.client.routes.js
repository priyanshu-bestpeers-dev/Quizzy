(function () {
  'use strict';

  angular
    .module('quizzes.admin.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('admin.quizzes', {
        abstract: true,
        url: '/quizzes',
        template: '<ui-view/>'
      })
      .state('admin.quizzes.list', {
        url: '',
        templateUrl: '/modules/quizzes/client/views/admin/list-quizzes.client.view.html',
        controller: 'QuizzesAdminListController',
        controllerAs: 'vm',
        data: {
          roles: ['admin']
        }
      })
      .state('admin.quizzes.create', {
        url: '/create',
        templateUrl: '/modules/quizzes/client/views/admin/form-quiz.client.view.html',
        controller: 'QuizzesAdminController',
        controllerAs: 'vm',
        data: {
          roles: ['admin']
        },
        resolve: {
          quizResolve: newQuiz
        }
      })
      .state('admin.quizzes.edit', {
        url: '/:quizId/edit',
        templateUrl: '/modules/quizzes/client/views/admin/form-quiz.client.view.html',
        controller: 'QuizzesAdminController',
        controllerAs: 'vm',
        data: {
          roles: ['admin'],
          pageTitle: '{{ quizResolve.title }}'
        },
        resolve: {
          quizResolve: getQuiz
        }
      });
  }

  getQuiz.$inject = ['$stateParams', 'QuizzesService'];

  function getQuiz($stateParams, QuizzesService) {
    return QuizzesService.get({
      quizId: $stateParams.quizId
    }).$promise;
  }

  newQuiz.$inject = ['QuizzesService'];

  function newQuiz(QuizzesService) {
    return new QuizzesService();
  }
}());
