# 薄片に関する extra imageビューワーの仕様

* 薄片画像とは別の追加の画像がある場合、その画像を表示する
  * その場合はビューワー表示用のボタンを表示し、そのボタンを押すことでビュワーを表示したり隠したりする
* 複数枚の画像がある場合の切替方法
  * 左右方向のスワイプまたは、マウスドラッグ
  * キーボードの left key および right key

## Extra image のデータ構造

* 薄片画像パッケージ内に `extra_photo_viewer.json` を配置する
* 薄片画像パッケージ内に 画像を配置する

`extra_images.json` の例は下記。
例は[このパッケージのファイル](/example_image_package_root/packages/Q27_quartz/extra_images.json)を参照のこと。

```
{
    extra_images: [
        {
            "image_path": "path/to/photo_1.jpeg",
            "description": {
                "ja": "画像1の説明",
                "en": "Explanation for the photo No.1"
            }
        },
        {
            "image_path": "path/to/photo_2.jpeg",
            "description": {
                "ja": "画像2の説明",
                "en": "Explanation for the photo No.2"
            }
        },
    ]
}
```
