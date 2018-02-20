(function () {

    var taskList = {

        templateUrl: "templates/taskList.html",

        controller: function (TaskService) {

            var $ctrl = this;
            $ctrl.addTask = function (task) {

                if (task) {
                    $ctrl.taskList.push({name:task});
                    $ctrl.task = "";
                };

            }
            $ctrl.removeTask = function ($index) {
                $ctrl.taskList.splice($index, 1);
            };

            $ctrl.taskList = TaskService.getData();
        }
    }

    angular.module("app")
        .component("taskList", taskList);


}());