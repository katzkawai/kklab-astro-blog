# ハナちゃん日記

フレンチ・ブルドッグのハナちゃん（1歳・女の子）の日記ブログです。
[Astro](https://astro.build/) で作成し、GitHub Pages で公開しています。

- 公開URL: https://katzkawai.org/kklab-astro-blog/
- 投稿ガイド: [`docs/guide/posting-guide.pdf`](docs/guide/posting-guide.pdf)（ソース: `docs/guide/posting-guide.tex`）

## 記事の追加

`src/content/blog/` に Markdown ファイルを追加し、`main` ブランチへプッシュすると
GitHub Actions が自動でビルド・公開します。詳しくは投稿ガイドを参照してください。

## コマンド

| コマンド | 内容 |
| :-- | :-- |
| `npm install` | 依存パッケージのインストール |
| `npm run dev` | 開発サーバーを起動（http://localhost:4321/kklab-astro-blog/） |
| `npm run build` | `./dist/` に本番用サイトをビルド |
| `npm run preview` | ビルド結果をローカルで確認 |

## 著者

河合勝彦（名古屋市立大学大学院経済学研究科）
kkawai@econ.nagoya-cu.ac.jp
