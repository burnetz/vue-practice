//数値を通貨書式「#.###.###」に変換するフィルター
Vue.filter('number_format', function(val){
    return val.toLocaleString();
});

var app = new Vue({
    el: '#app',
    data: {
	//表示中の商品数
	count: 0,
	//「セール対象」のチェック状態
	showSaleItem: false,
	//「送料無料」のチェック状態
	showDelvFree: false,
	//「並び替え」の選択肢（1:標準　2:価格が安い順）
	sortOrder: 1,
	//商品リスト
	products: [
	    { name: 'Michael<br>スマホケース', price: 1580, image: '../images-chap3/01.jpg', delv: 0, isSale: true},
	    { name: 'Raphael<br>スマホケース', price: 1580, image: '../images-chap3/02.jpg', delv: 0, isSale: true},
	    { name: 'Gabriel<br>スマホケース', price: 1580, image: '../images-chap3/03.jpg', delv: 240, isSale: true},
	    { name: 'Uriel<br>スマホケース', price: 980, image: '../images-chap3/04.jpg', delv: 0, isSale: true},
	    { name: 'Ariel<br>スマホケース', price: 980, image: '../images-chap3/05.jpg', delv: 0, isSale: false},
	    { name: 'Azrael<br>スマホケース', price: 1580, image: '../images-chap3/06.jpg', delv: 0, isSale: false}
	]
    },
    computed: {
	//絞り込み後の商品リストを返す算出プロパティ
	filteredList: function() {
	    //絞り込み後の商品リストを格納する新しい配列
	    var newList = [];
	    for(var i = 0; i < this.products.length; i++){
		//表示対象かどうかを判定するフラグ
		var isShow = true;
		//i番目の商品が表示対象かどうかを判定する
		if(this.showSaleItem && !this.products[i].isSale) {
		    //「セール対象」チェック有りで、セール対象商品ではない場合
		    isShow = false; //この商品は表示しない
		}
		if(this.showDelvFree && this.products[i].delv > 0){
		    //「送料無料」チェック有りで、送料有りの商品の場合
		    isShow = false; //この商品は表示しない
		}
		//表示対象の商品だけを新しい配列に追加する
		if(isShow){
		    newList.push(this.products[i]);
		}
	    }
	    //絞り込み後の商品リストを返す
	    return newList;
	}
    },
    
    watch: {
	//「セール対象」チェックボックスの状態を監視するウォッチャ
	showSaleItem: function(newVal, oldVal){
	    //ここでproductの配列を書き換える
	    console.log('showSaleItemウォッチャが呼び出されました。');
	},
	//「送料無料」チェックボックスの状態を監視するウォッチャ
	showDelvFree: function(newVal, oldVal){
	    //ここでproductsの配列を書き換える
	    console.log('showDelvFreeウォッチャが呼び出されました。');
	}
    }
});
