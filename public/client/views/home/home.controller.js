/**
 * Created by amit on 4/6/17.
 */
(function(){
    angular
        .module("volunteerX")
        .controller("HomeController", HomeController);

    function HomeController(){

        function init(){
            console.log("Hello World");
        }

        init();
    };
})();