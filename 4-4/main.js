// JSONPのURL（ここではlocalhostで試す）
var url='http://localhost/vue-practice/4-4/products.js';

//非同期通信でJSONPを読み込む
$.ajax({
    url : url, //通信先URL
    type : 'GET', //使用するHTTPメソッド
    dataType: 'jsonp', //レスポンスのデータタイプ
    jsonp : 'callback', //クエリパラメータの名前
    jsonpCallback: 'products' //コールバック関数の名前
})

    .done(function(data, textStatus, jqXHR) {
	console.log(data);
    })

    .fail(function(jqXHR, textStatus, errorThrown) {
	console.log('通信が失敗しました');
    });


