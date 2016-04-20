import angular from 'angular';
import Config from './config';
import uirouter from 'angular-ui-router';
import home from './components/home';

angular.module('App', [uirouter, home])
    .config(Config);
