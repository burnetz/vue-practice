var app = new Vue({
    el: '#app',
    data: {
	answer: '',

	options: [
	    {code: 'ans1', label: '初めて'},
	    {code: 'ans2', label: '週１回以上'},
	    {code: 'ans3', label: '週２回以上'},
	    {code: 'ans4', label: '半年に１回'},
	],
    }
});
