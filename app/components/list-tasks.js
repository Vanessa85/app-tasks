!function(angular) {
  'use strict';

  var listTasks = {
    bindings: {
      data: '<',
      status: '@',
      onRemove: '&',
      onMove: '&',
      onRemoveTasks: '&',
      onMoveTasks: '&'
    },
    templateUrl: 'app/components/list-tasks.html',
    controller: listTasksCtrl
  };

  angular
    .module('app')
    .component('listTasks', listTasks);

  listTasksCtrl.$inject = [];
  function listTasksCtrl() {
    var vm = this;

    vm.selectedAll = false;
    vm.removeTask = removeTask;
    vm.moveTask = moveTask;
    vm.getTotal = getTotal;
    vm.getSelectedTasks = getSelectedTasks;
    vm.removeSelectedTasks = removeSelectedTasks;
    vm.moveSelectedTasks = moveSelectedTasks;
    vm.onChangeAll = changeAll;
    vm.isChecked = isChecked;

    //////////

    function removeTask(e, item) {
      e.preventDefault();
      vm.onRemove({ task: item });
    }

    function moveTask(e, item) {
      e.preventDefault();
      vm.onMove({ task: item, status: vm.status });
    }

    function getTotal() {
      return vm.data.filter(item => item.status === vm.status).length;
    }

    function getSelectedTasks() {
      return vm.data.filter(item => item.selected && item.status === vm.status).length;
    }

    function removeSelectedTasks() {
      vm.onRemoveTasks({ status: vm.status });
    }

    function moveSelectedTasks() {
      vm.onMoveTasks({ status: vm.status });
    }

    function changeAll() {
      vm.data
        .filter(item => item.status === vm.status)
        .forEach(item => item.selected = vm.selectedAll);
    }

    function isChecked() {
      var tasks = vm.data.filter(item => item.status === vm.status);
      vm.selectedAll = tasks.length > 0 && tasks.every(item => item.selected);
      return vm.selectedAll;
    }

  }

}(window.angular);
