/**
 * Created by amit on 4/6/17.
 */
(function(){
    angular
        .module("volunteerX")
        .config(configuration);

    function configuration($routeProvider){
        $routeProvider
            .when("/home",{
                templateUrl:"views/home/home.view.html",
                controller:"HomeController"
            })
            .when("/createevent",{
                templateUrl:"views/createevent/createevent.view.html",
                controller:"CreateEventController",
                controllerAs:"model"
            })
            .when("/searchevent",{
                templateUrl:"views/searchevent/searchevent.view.html",
                controller:"SearchEventController",
                controllerAs:"model"
            })
            .otherwise({
                redirectTo:"/home"
            });
    }
})();