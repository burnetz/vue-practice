var app = new Vue({
    el: '#app',
    data: {
	width: window.innerWidth,
	height: window.innerHeight
    },
    created: function(){
	addEventListener('resize', this.resizeHandler);
    },
    beforeDestroy: function(){
	removeEventListner('resize', this.resizeHandler);
    },
    methods: {
	resizeHandler: function($event) {
	    this.width = $event.target.innerWidth;
	    this.height = $event.target.innerHeight;
	}
    }

});
