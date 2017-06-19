myApp.service("SockService", function($http) {
    var sv = this;
    console.log('in socks service');
    sv.checkSocks = function() {
        console.log('in get Services');
        return $http.get('/message').then( function(res) {
            console.log('back from the server with', res);
            return sv.data = res.data;
        });//end http

    };//end checkSocks


    sv.postSocks = function(data) {
        $http.post('/message', data).then( function(res) {
            console.log('back from the server with', res);
        });//end http
    };


});
