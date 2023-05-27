---
title: "Next.js Tutorial"
type: "Next.js"
description: "Next.js公式サイトのチュートリアル"
date: "2023-05-24"
image: ""
url: "https://nextjs-tutorial-ten-neon.vercel.app/"
---

react チュートリアルで三目並べゲームを作成しました。

# This is an H1

## This is an H2

###### This is an H6

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.
