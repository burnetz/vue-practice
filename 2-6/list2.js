var app = new Vue({
    el: '#app',
    data: {
	show: true
    },
    methods: {
	now1: function() {
	    return (new Date()).toLocaleString();
	}
    },
    computed: {
	now2: function(){
	    return (new Date()).toLocaleString();
	}
    }
});
