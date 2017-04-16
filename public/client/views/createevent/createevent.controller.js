/**
 * Created by amit on 4/6/17.
 */
(function(){
    angular
        .module("volunteerX")
        .controller("CreateEventController", CreateEventController);

    function CreateEventController(){
        vm = this;
        vm.createEvent = createEvent;

        function createEvent(){
            console.log("Creating new event");
            
        }
    };
})();