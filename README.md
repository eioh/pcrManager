# プリコネR キャラクター管理 (React版)

## 概要

ゲーム「プリンセスコネクト！Re:Dive」のキャラクター育成状況を管理するためのReactベースのWebアプリケーションです。データはブラウザのローカルストレージに保存されます。

## 主な機能

*   キャラクター情報の追加、編集、削除
*   管理項目: キャラ名、限界突破、星、Rank、専用装備1レベル、専用装備2レベル
*   レスポンシブデザイン
*   データはローカルストレージに永続化

## 技術スタック

*   React
*   CSS Modules

## ディレクトリ構造 (主要なもの)

```
/
├── public/
│   └── index.html  (メインHTMLファイル)
├── src/
│   ├── components/ (Reactコンポーネント)
│   │   ├── CharacterForm.js
│   │   ├── CharacterRow.js
│   │   └── CharacterTable.js
│   ├── App.js          (メインアプリケーションコンポーネント)
│   ├── App.module.css  (Appコンポーネント用スタイル)
│   ├── index.js        (Reactアプリケーションのエントリーポイント)
│   └── index.css       (グローバルスタイル)
├── package.json
└── README.md
```

## 利用方法 (ローカル開発)

1.  **リポジトリをクローン**: `git clone <repository-url>`
2.  **ディレクトリに移動**: `cd <repository-name>`
3.  **依存関係をインストール**: `npm install`
4.  **開発サーバーを起動**: `npm start`
    *   ブラウザで `http://localhost:3000` が自動的に開きます。

## 本番用ビルド

*   `npm run build` コマンドを実行すると、`build` ディレクトリに最適化された静的ファイルが生成されます。

## GitHub Pagesへのデプロイ

本アプリケーションはGitHub Pagesを利用して簡単にデプロイおよび公開することができます。

1.  **`package.json` の設定**:
    *   プロジェクトのルートにある `package.json` ファイルを開きます。
    *   `"homepage"` フィールドの値を、あなたのGitHub PagesのURLに正しく書き換えます。プレースホルダー `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME` を実際のユーザー名とリポジトリ名で置き換えてください。
        ```json
        "homepage": "https://your-username.github.io/your-repository-name"
        ```

2.  **変更のコミットとプッシュ**:
    *   `package.json` に加えた変更をコミットし、GitHubリポジトリにプッシュします。
        ```bash
        git add package.json
        git commit -m "Configure homepage for GitHub Pages"
        git push
        ```

3.  **デプロイコマンドの実行**:
    *   ターミナルで以下のコマンドを実行します。
        ```bash
        npm run deploy
        ```
    *   このコマンドは、まず `predeploy` スクリプト (`npm run build`) を実行してアプリケーションをビルドし、その後 `deploy` スクリプト (`gh-pages -d build`) が `build` ディレクトリの内容を `gh-pages` という名前のブランチにプッシュします。このブランチは自動的に作成または更新されます。

4.  **リポジトリ設定の確認**:
    *   GitHubリポジトリの **Settings** タブに移動し、左側のメニューから **Pages** を選択します。
    *   "Build and deployment" の下にある "Source" が **"Deploy from a branch"** になっていることを確認します。
    *   "Branch" が **`gh-pages`** で、フォルダが **`/(root)`** に設定されていることを確認します。通常、`npm run deploy` を初めて実行した後、これらの設定は自動的に構成されますが、念のため確認してください。もし設定が異なる場合は、手動で上記のように設定してください。

5.  **アクセス**:
    *   デプロイ処理が完了すると（数分かかることがあります）、`package.json` の `homepage` フィールドに指定したURLで、公開されたアプリケーションにアクセスできるようになります。

これで、あなたのキャラクター管理アプリケーションがGitHub Pagesで公開されます。
