var app = new Vue({
    el: '#app',
    data: {
	stock:10
    },
   
    methods: {
	onDeleteItem: function() {
	    this.stock--;
	}
    }

});
