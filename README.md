# QWEL Business Calendar (Simple Booking System)
  
民宿の空室状況管理のための簡易システムとして開発。  

SQLiteで状態管理 → 自作APIからfetch → JSで自作カレンダー描画 と、  
PHP / Vanilla JS でフルスクラッチした作品。

▶ Sample DEMO: [https://qwel.design/tools/business-calendar/]

---

## 概要・機能 | Overview & Features

- 民宿の空室状況管理のための簡易システムとして開発した、営業日カレンダーです。
- コントロールから「編集」を選択してみてください。
- すると、カレンダーの日付ごとの色を変えることができます。
- SQLiteで状態管理 → 自作API → JSで自作カレンダー描画 と、PHP / Vanilla JS で全てスクラッチしました。

---

## 目的・背景 | Purpose & Background

- 民宿の空室状況を簡単なシステムで管理したいという要望があった
- これまで電話・メールでやり取りしていた連絡業務をシステムで可視化・効率化したい
- 老夫婦がクリック操作のみで簡単に扱える形態を希望
- 副業なので、部屋は1室のみで、1日1組の利用者限定 (農家民宿を想定)
- 繁忙期は、宿泊を受け入れるかどうか、判断が曖昧になることがある

---

## 設計・実装 | Design & Implementation

- SQLite で部屋の空き状況のデータ管理を行う
- API で上記データを取得し、JSでカレンダーを描画
- 編集モードに切り替え、カレンダーの日付をクリックするだけで、API 経由でデータを更新
- 繁忙期の予約は、従来の業務ルーティン通り、電話・メールで確認を行う
- 予め、月と曜日でデフォルトの状態を登録可能
- 実運用では、編集モードへの切り替えにパスワードを使用

---

## ライセンス | License

MIT License

このプロジェクトは, 民宿の空室状況管理のための簡易システム等の用途として自由に使用できることを目的としています。  
This project is intended to be freely used for purposes such as a simple system for managing vacancy availability at guesthouses.  

詳しくは LICENSE ファイルをご覧ください。  
See the LICENSE file for details.  

---

## 制作者 | Author

[QWEL.DESIGN](https://qwel.design)  
福井を拠点に活動するフロントエンド開発者  
Front-end developer based in Fukui, Japan  
