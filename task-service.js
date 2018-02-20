(function () {

    function TaskService() {
        var taskList = [];
        return {
            setData: setData,
            getData: getData
        }
        function getData() {
            return taskList;
        }
        function setData(list) {
            taskList = list;
        }
    }
    angular
        .module("app")
        .factory("TaskService", TaskService);
})();