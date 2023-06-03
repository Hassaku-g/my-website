---
title: "Portfolio"
type: "Next.js"
description: "ポートフォリオサイト"
date: "2023-05-16"
image: "/works_portfoilo.png"
url: "https://my-website-hassaku-g.vercel.app/"
code: "https://github.com/Hassaku-g/my-website"
---

## 概要

ポートフォリオサイトを作成しました。
SPA サイトを実装するためにフレームワークに Next.js を使用してサイトを構築しました。

- Framework: Next.js
- Styling: Tailwind CSS
- Deployment: Vercel

## 問題と改善

- **動的ファイルの読み込み**Next.js チュートリアルでは一つの動的コンテンツを取得していました。このサイトでは動的コンテンツが 2 つあるので、読み込みに苦戦しました。
  → チュートリアル内の動的コンテンツの表示に関わるファイルをすべてコピーし、独自のファイル名に変更してローカル環境で確認。エラーを修正していき、最終的にコンテンツ 2 つを表示することができました。

## 今後やってみたいこと

- .md ファイルから.mdx ファイルに変更。ファイル内に React コンポーネントを使用し、UI を改善させたい。
- /page ルーターから/app ルーターに移行。コンポーネントをクライアントサイドとサーバーサイドに分け、ページの読み込み速度をさらに高速にしたい。
