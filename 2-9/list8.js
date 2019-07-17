var app = new Vue({
    el: '#app',
    data: {
	category: []
    },
    computed: {
	selectedCategory: function() {
	    return this.category.length >= 1 ? this.category.join() : '';
	}
    },
});
