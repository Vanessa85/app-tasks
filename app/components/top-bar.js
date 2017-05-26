!function(angular) {
  'use strict';

  var topBar = {
    templateUrl: 'app/components/top-bar.html',
    controller: topBarCtrl
  };

  angular
    .module('app')
    .component('topBar', topBar);

  topBarCtrl.$inject = [];
  function topBarCtrl() {
    var vm = this;
  }

}(window.angular);
