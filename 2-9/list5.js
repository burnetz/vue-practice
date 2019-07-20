var app = new Vue({
    el: '#app',
    data: {
	answer: []
    },
    computed: {
	selection: function(){
	    return this.answer.join();
	}
    }
});
