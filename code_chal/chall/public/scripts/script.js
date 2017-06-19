console.log('js');
var myApp = angular.module('myApp', []);

myApp.controller('DefaultController', function(SockService) {
    var vm = this;
     console.log('inside of controller');

     vm.sendMessage = function() {
         console.log('inside of button');
         console.log(vm.nameInput);
         console.log(vm.messageInput);

         data = {
             name:vm.nameInput,
             message:vm.messageInput
         };//end data object
         console.log(data);
         SockService.postSocks(data);
          vm.seeMessage();
     };//end sendMessage

     vm.seeMessage = function() {
         console.log('in messages');
         SockService.checkSocks().then(function() {
             console.log('inside of then');
             vm.data = SockService.data;
             console.log(vm.data);
         });
     };//end see Message

});
