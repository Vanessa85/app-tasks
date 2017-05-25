!function(angular) {
  'use strict';

  var addItem = {
    bindings: {
      onAdd: '&'
    },
    templateUrl: '/app/components/add-item.html',
    controller: addItemCtrl
  };

  angular
    .module('app')
    .component('addItem', addItem);

  addItemCtrl.$inject = [];
  function addItemCtrl() {
    var vm = this;

    vm.$onInit = onInit;
    vm.submit = submit;

    //////////

    function onInit() {
      vm.name = '';
    }

    function submit(e) {
      e.preventDefault();
      var task = {
        name: vm.name,
        selected: false,
        status: 'PENDING'
      };

      vm.onAdd({ task: task });
      vm.name = '';
    }

  }

}(window.angular);
