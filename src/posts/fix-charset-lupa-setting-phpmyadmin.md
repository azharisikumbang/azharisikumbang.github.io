---
title: "Fix: Ganti Charset Di MySQL"
description: "Kesalahan penggunaan chartset dapat menyebabkan karakter yang ditampilkan tidak sesaui keinginan, bahkan terkadang memunculkan karakter lain seperti latin, simbol dan sebagainya."
date: 2025-01-05
tags: posts
slug: fix-mysql-incorrect-charset
layout: layouts/post.njk
---

Salah satu hal yang paling menjengkelkan dan sering lupa ketika import basis data adalah lupa set charset, apalagi databse sudah diimport dan ukurannya lumayan. Berikut beberapa step yang dapat ditempuh.

1. Jangan lupa selalu backup database (Penting)
2. Set charset database
```sql
ALTER DATABASE db_name CHARACTER SET utf8 COLLATE utf8_general_ci;
```
3. Set charset untuk setiap tabel
```sql
SELECT CONCAT('ALTER TABLE `', table_name, '` CONVERT TO CHARACTER SET utf8mb4;') AS sql_statement FROM information_schema.tables WHERE table_schema = 'db_name' AND table_type = 'BASE TABLE';
```
Hasil query dari perintah ini silahkan di-copy dan dirunning.

> Jangan lupa ganti database pada db_name

