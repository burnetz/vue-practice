var app = new Vue({
    el: '#app',
    data: {
	year: (new Date()).getFullYear()
    },
    computed: {
	//今年がうるう年かどうかを判定する算出プロパティ
	isUrudoshi: function(){
	    if ((this.year % 4 == 0) && (this.year % 100 != 0) || (this.year % 400 == 0)) {
		return true;
	    }
	    else {
		return false;
	    }
	}
    }
});
