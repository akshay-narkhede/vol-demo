/**
 * Created by amit on 4/6/17.
 */
(function(){
    angular
        .module("volunteerX")
        .controller("SearchEventController", SearchEventController);

    function SearchEventController(){
        vm = this;
        vm.searchEvent = searchEvent;

        function searchEvent(){
            console.log("Searching event");
        }
    };
})();