function MockEvent() {

    this.mockEvent = function(event, handler) {
        setTimeout(function(){
            handler("some random string");
        }, 200);
    };
};

module.exports = new MockEvent();