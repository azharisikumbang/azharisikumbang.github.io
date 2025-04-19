---
id: 63bc55848e3922054822448b
title: "Kumpulan Chain Pada Firewall Mangle Mikrotik"
feature_image: /content/images/wordpress/2017/05/firewall-helen-turvey.jpg
description: "Kumpulan chain pada firewall mangle mikrotik. Apa sih firewall? Firewall adalah satu fitur yang difungsikan sebagai batas pemisah antara…"
date: 2017-05-20
tags: posts
slug: kumpulan-chain-pada-firewall-mangle-mikrotik
layout: layouts/post.njk
---

<!--kg-card-begin: html--><p>Kumpulan chain pada firewall mangle mikrotik. Apa sih firewall? Firewall adalah satu fitur yang difungsikan sebagai batas pemisah antara jaringan mana yang dizinkan dan mana yang tidak.<br />
<a name="more"></a>Sesuai bahasanya, firewall berarti dinding api. Coba anda bayangkan sebuah dinding api didepan anda, tentu anda tidak akan mudah untuk menembus dinding itu. Begitu juga dengan firewall pada jaringan. Firewall di gunakan sebagai penghalang jaringan anda dari serangan yang bisa merugikan anda.</p>
<div style="clear: both; text-align: center;"><a style="margin-left: 1em; margin-right: 1em;" href="/content/images/wordpress/2017/05/firewall-helen-turvey.jpg"><img loading="lazy" src="/content/images/wordpress/2017/05/firewall-helen-turvey-300x187.jpg" width="320" height="199" border="0" /></a></div>
<p>Pada firewall tentu kita mengenal chain, ada 5 chain utama pada firewall dan ditambah 1 chain custom. Berikut penjelasan nya&#8230;</p>
<div style="clear: both; text-align: center;"><a style="margin-left: 1em; margin-right: 1em;" href="/content/images/wordpress/2017/05/Untitled.png"><img loading="lazy" src="/content/images/wordpress/2017/05/Untitled-300x240.png" width="320" height="256" border="0" /></a></div>
<h3><b>Forward :</b></h3>
<div>Menandai setiap paket yang melewati router, baik dari Jaringan Local ke Public atau sebaliknya, dengan catatan paket hanya sekedar lewat dari router tanpa ada interaksi dengan router.</p>
<h3><b>Input : </b></h3>
</div>
<div>Menandai setipa paket yang masuk kerouter dari interface router dan proses itu hanya terehenti pada router itu saja untuk di proses (<i>sesuai settingan</i>) dan tidak di lanjutkan lagi keluar router.</p>
<h3><b>Output : </b></h3>
</div>
<div>Menandai setiap paket yang keluar dari router, baik ke public atau ke LAN. Paket ini sendiri adalah request dari router ke luar dirinya.</p>
<h3><b>Prerouting : </b></h3>
<p>Menandai setiap paket yang masuk ke router dan disertai proses selanjutnya (<i>sesuai settingan</i>).</p>
<h3><b>Postrouting : </b></h3>
</div>
<div>Menandai paket yang keluar dari router setelah ada proses di tubuh router itu sendiri.</p>
</div>
<h3>Custom Chain :</h3>
<div>Chain yang dibuat dengan keperluan si networker tentunya untuk tujuan tertentu pula.</div>
<div></div>
<div>Itulah sedikit penjelasan tentang <b>Kumpulan Chain Pada Firewall Mangle Mikrotik </b>, walau sedikit semoga bermanfaat bagi anda, karena saya jgua lagi malasa ngetik wkwkwkw udah malam soalnya 😀</div>
<div>Sekian dan Terima Kasih</div>
<!--kg-card-end: html-->
