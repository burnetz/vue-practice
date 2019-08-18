<?php
//定数定義：データベースの識別情報、ユーザ名、パスワード
define('DSN', 'mysql:host=localhost;dbname=sample_shop');
define('DB_USER', 'sample_shop_api');
define('DB_PASSWORD', 'hogehoge');

//エラー通知レベル
error_reporting(E_ALL & ~E_NOTICE);

//データベースに接続する
$pdo = new PDO(DSN, DB_USER, DB_PASSWORD);

//商品リストを取得
$stmt = $pdo->prepare("SELECT * FROM product");
$stmt->execute();

//商品レコードをphpの配列に積み込む
$products = array();
while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
   $products[] = array(
      'id' => (int)$row['id'],
      'name' => $row['name'],
      'price' => (int)$row['price'],
      'image' => $row['image'],
      'delv' => (int)$row['delv'],
      'isSale' => (boolean)$row['isSale']
   );

}

//PHPの配列をJSONに変換
$json = json_encode($products, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE );

//JSONを出力
header("Content-Type: application/json");
echo $json;
?>