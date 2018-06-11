import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMessages from 'angular-messages';
import ngMaterial from 'angular-material';

import Common from './common/common';
import Components from './components/compon ents';
import AppComponent from './app.component';
import 'normalize.css';

angular.module('app', [
    uiRouter,
    ngMaterial,
    ngMessages,
    Common,
    Components
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);
