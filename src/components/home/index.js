import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './home-routes';
import HomeController from './home-controller';

export default angular.module('app.home', [uirouter])
  .config(routes)
  .controller('HomeController', HomeController)
  .name; 
