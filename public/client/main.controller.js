/**
 * Created by amit on 4/6/17.
 */
(function(){
    angular
        .module("volunteerX")
        .controller("MainController", MainController);

    function MainController($location,$scope){
        $scope.$location = $location;
    }
})();