---
title: "Sobolon"
type: "Sass"
description: "ウェブ制作学習サービス「デイトラ」でLPを作成致しました。"
date: "2023-05-24"
image: "/sobolon.png"
url: "https://hassaku-g.github.io/Sobolon/"
code: "https://github.com/Hassaku-g/Sobolon"
---

## 概要

ウェブ制作学習サービス「デイトラ」で用意された Sass の演習課題です。
Styling に Sass を使用し、デモサイトを構築しました。

- **Styling: Sass**

## 問題と改善

- **Sass が反映されない:**
  Sass が直接 style として反映されるものだと勘違いしており、.scss ファイルを読み込んでいることに気づいた。
  コンパイル設定を見直し、コンパイル後の.css ファイルを link で読み込むことで改善できた。
