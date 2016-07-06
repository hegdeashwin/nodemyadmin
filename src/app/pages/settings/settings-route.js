'use strict';

import SettingsTpl from './settings-tpl.html';

export default function routing($stateProvider) {

  $stateProvider
    .state('settings', {
      url: '/settings',
      templateUrl: SettingsTpl,
      controller: 'SettingsCtrl',
      controllerAs: 'settings'
    });
};
