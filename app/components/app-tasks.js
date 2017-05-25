!function(angular) {
  'use strict';

  var appTasksComponent = {
    templateUrl: 'app/components/app-tasks.html',
    controller: appTasksCtrl
  };

  angular
    .module('app')
    .component('appTasks', appTasksComponent);

  appTasksCtrl.$inject = [];
  function appTasksCtrl() {
    var vm = this;

    vm.tasks = [];
    vm.addTask = addTask;
    vm.removeTask = removeTask;
    vm.moveTask = moveTask;
    vm.removeTasks = removeTasks;
    vm.moveTasks = moveTasks;

    //////////

    function addTask(task) {
      vm.tasks.push(task);
    }

    function removeTask(task) {
      vm.tasks.splice(vm.tasks.indexOf(task), 1);
    }

    function moveTask(task, status) {
      task.selected = false;
      task.status = getNewStatus(status);
    }

    function removeTasks(tasks) {
      vm.tasks = vm.tasks.filter(item => tasks.indexOf(item) === -1);
    }

    function moveTasks(status) {
      vm.tasks
        .filter(item => item.selected && item.status === status)
        .forEach(item => {
          item.status = getNewStatus(status);
          item.selected = false;
        });
    }

    function getNewStatus(status) {
      return status === 'PENDING'? 'COMPLETED' : 'PENDING';
    }


  }

}(window.angular);
