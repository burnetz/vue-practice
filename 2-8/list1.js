var app = new Vue({
    el: '#app',
    data: {
	message: '',
	stock:10
    },
   
    methods: {
	onDeleteItem: function() {
	    this.stock--;
	}
    },

    watch: {
	stock: function(newStock, oldStock){
	    if(newStock == 0) {
		this.message = '売り切れ';
	    }
	}
    }

});
