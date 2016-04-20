import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './home-routes';
import HomeController from './home-controller';
import things from './homeService';

export default angular.module('app.home', [uirouter, things])
  .config(routes)
  .controller('HomeController', HomeController)
  .name;
