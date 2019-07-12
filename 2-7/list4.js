var app = new Vue({
    el: '#app',
    data: {
	point: {x: 0, y: 0}
    },
    created: function(){
	addEventListener('mousemove', this.mousemoveHandler);
    },
    beforeDestroy: function(){
	removeEventListner('mousemove', this.mousemoveHandler);
    },
    methods: {
	mousemoveHandler: function($event) {
	    this.point.x = $event.clientX;
	    this.point.y = $event.clientY;
	}
    }

});
