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

    computed: {
	statusMessage: function(){
	    if(this.stock == 0) {
		return '売り切れ';
	    }
	    return '';
	}
    },

    watch: {
	statusMessage: function() {
	    console.log('商品のステータスが変化しました。');
	}
    }

});
