---
id: overview
title: 概要
---

4Dアプリケーション用にカスタムメニューを作成できます。 デスクトップアプリケーションではプルダウン形式のメニューが標準機能であるため、メニューを追加することでアプリケーションがより使いやすくなりユーザーに親しみやすいものになるでしょう。

![](../assets/en/Menus/menubar.png)

**メニューバー** とは、スクリーン上にまとめて表示されるメニューのグループです。 メニューバー上の各 **メニュー** はメニューコマンドを持ちます。またメニューコマンドは階層メニューと呼ばれるサブメニューを持つこともできます。 メニューやサブメニューコマンドをユーザーが選択すると、プロジェクトメソッドまたは標準アクションが呼び出されます。

各アプリケーションに対し、異なるメニューバーを複数作成することもできます。 たとえば、あるメニューバーには標準的なデータベース処理用のメニューを納め、別のメニューバーはレポート作成時にのみアクティブにすることができます。 また別のメニューバーには、レコード入力用のメニューコマンドを含むメニューを格納することも可能です。 入力フォームと一緒に表示されるメニューバーには同じメニューを格納しながらも、データ入力中は不要になるメニューコマンドを選択不可にすることができます。

あるメニューを複数のメニューバーで使用したり、どのメニューバーにも割り当てずにプログラムからのみ管理することもできます (独立メニューと呼びます)。

メニューを設計する際には以下の 2つのルールを覚えておいてください:
- メニューに適している機能に対しメニューを使用する: メニューコマンドは、レコードの追加や検索、レポートの印刷のような作業を実行しなければなりません。
- メニューコマンドを機能別にまとめる: たとえば、レポートの印刷をおこなうメニューコマンドはすべて同じメニュー内に置くべきです。 また別の例として、特定のテーブルに関するすべての操作を 1つのメニューに納めてもよいでしょう。

メニューやメニューバーを作成するには以下のいずれかを使用します:

- ツールボックスのメニューエディター
- "メニュー" テーマのランゲージコマンド
- 上 2つの組み合わせ


## メニューエディター
ツールボックスの **メニュー** ページを開くと、メニューエディターにアクセスできます。

![](../assets/en/Menus/editor1.png)

メニューおよびメニューバーは両方ともエディター左の階層リスト中に表示されます。 各メニューは、メニューバーあるいは別のメニューに添付できます。 後者の場合、そのメニューはサブメニューとなります。

4D はメニューバーに連番を割り当てます。メニューバー#1 が一番上に表示されます。 メニューバーの名前を変更することができますが、番号は変更できません。 この番号はランゲージコマンドで使用されます。
