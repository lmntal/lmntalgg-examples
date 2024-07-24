## LMNtalGG関連論文のWeb付録
LMNtalGGにおける型定義の例

### つかいかた
* 必要環境： node, npm, gulp
* `npm i` して `gulp` すれば `html/examples.html` ができる

### 公開のしかた
1. GitLabにプッシュする
2. 自動でGulpが走って `examples.html` を作成する
3. 自動でdanbobigoton上の `/home/yamamoto/public_html/lmntal_shapetype/` に `examples.html` を転送する
4. [公開ページが更新される](https://www.ueda.info.waseda.ac.jp/~yamamoto/lmntal_shapetype/examples.html)

### TODO
* 要素型のある例
* Threaded Tree
* 通過駅制約つきスキップリスト
* メッセージつきスタック
* a/3 アトムだけからなる 根がconst.本のグラフ