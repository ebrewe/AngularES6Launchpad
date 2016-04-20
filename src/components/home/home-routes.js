routes.$inject = ['$stateProvider'];

export default function routes($stateProvider){
  $stateProvider
    .state('home', {
      url:'/',
      templateUrl:'public/dist/views/home/home.html',
      controller: 'HomeController',
      controllerAs: 'homeCtrl'
    });
}
