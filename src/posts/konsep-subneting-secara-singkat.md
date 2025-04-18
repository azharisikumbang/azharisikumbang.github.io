---
id: 63bc55848e39220548224494
title: "Konsep Subneting Secara Singkat"
feature_image: /content/images/wordpress/2019/04/awd.png
description: "Subneting adalah suatu teknik dalam memecah network atau jaringan kedalam sub-sub network yang lebih kecil dan kompleks lagi. Keberadaan…"
date: 2019-04-08
tags: posts
slug: konsep-subneting-secara-singkat
layout: layouts/post.njk
---

<!--kg-card-begin: html--><p>Subneting adalah suatu teknik dalam memecah network atau jaringan kedalam sub-sub network yang lebih kecil dan kompleks lagi. Keberadaan subneting sangat diperlukan bagi jaringan. Tapi, sayangnya saat ini banyak sekali jaringan yang kurang menerapkan hal ini. Nah sebanarnya apasih guna subneting dan bagaimana cara kerjanya?</p>
<blockquote><p>Tidak mungkin memahami jaringan secara betul jika belum faham tentang subneting</p></blockquote>
<p>Membahas cara kerja tentang subneting, saya sangat suka tentang analogi dari Pak Romi Satria Wahono di situs pribadinya di <a href="http://romisatriawahono.net/">http://romisatriawahono.net/</a> yang diterbitkan tahun 2006 silam.</p>
<p>Disana beliau menerangkan bahwa subeting sepeti sebuah jalan, beliau menamainya Jl. Gatot Subroto, dimana disana terdapat nomor rumah 01 sampai 08. Jalan Gatot Subroto tersebut juga punya Ketua RT dengan nomor rumah 08 yang bertugas untuk memberikan informasi ke seluruh rumah di jalan tersebut.</p>
<p>Tapi, dikala rumah masih sangat sedikit manajemennya juga tidak terlalu sulit. Lain halnya jika rumah semakin banyak, untuk itu diadakan revisi lagi. Maka dibuatkanlah gang-gang baru, kemudian setiap gang diisi dengan rumah-rumah penduduk baru. Nah, setiap gang ini kemudian diberikan keleluasaaan atau hak untuk mengatur penduduknya masing-masing.</p>
<p>Dengan adanya penambahan gang-gang ini diharapkan akan mempermudah urusan para penghuni jalan Gatot Subroto, seperti administrasi, transportasi, ataupun dalam pengelolaan para warganya. Nah, konsep subenting kurang lebih juga seperti ini, silahkan dibaca ulang analogi dari Pak Romi Satria.</p>
<blockquote><p>Sebenarnya, subneting merupakan sebuah network yang dibagi kedalam sub network yang lebih kecil</p></blockquote>
<p>Saya bantu jelaskan, pertama kita bisa simpulkan bahwa jalan Gatot Subroto merupakan sebuah network address. Kenapa? Karena kita perlu fahami, bahwa network address berfungsi pengenal ataupun identitas sebuah jaringan.</p>
<p>Ini ibarat, jika anda adalah penghuni jalan Gatot Subroto dan seseorangpun bertanya ke anda. Ia bertanya, &#8220;Maaf rumah anda dimana ya?&#8221;. Anda akan secara spontan menjawab Jl. Gatot Subroto kemudian nomor rumah anda, tidak mungkin anda menjawab nomor rumah anda saja, atau jalan orang lain. Jalan Gatot Subroto akan anda butuhkan sebagai identitas utama dari alamat rumah anda.</p>
<p>Selain nama jalan sebagai network address, kita temui  nomor rumah sebagai alamat ip (ip address). Seperti yang dikatakan diatas, setiap rumah pasti punya nomor rumahnya masing-masing.</p>
<p>Sehingga jika ada orang yang ingin kerumah, ia tidak tersesat kerumah tetangga anda. Jadi, ip address difungsikan untuk memberikan idetitas khusus dan unik (tidak sama) untuk setiap <em>penghuni </em>dari jaringan.</p>
<p>Dan jika sebelum dipecah kedalam network yang lebih kecil, awalnya kita tahu bahwa rumah 08 adalah rumah pak RT atau, bisa kita sebut sebagai Broadcast Address.</p>
<p>Pak RT sendiri berfungsi untuk meneruskan informasi yang datang kepada nya kepada para warganya, seperti informasi/pengumuman dari walikota, gubernur ataupun warganya sendiri.</p>
<p>Berdasarkan analogi Pak RT, bisa kita simpulkan fungsi dari Broadcast Address untuk meneruskan paket-paket informasi atau data yang datang kepadanya untuk selanjutnya diteruskan keseluruh <em>penghuni </em>network tersebut. Jika ada ingat fitur broadcast pada BBM, kira-kira fungsinya seperti itu.</p>
<p>Nah, tapi kan tadi Jl. Gatot Subroto telah dipecah kedalam gang-gang, <strong>bukannya harusnya ada network (nama jalan), alamat IP / Host Address (nomor rumah), broadcast address (pak RT) yang baru ??</strong></p>
<p>Yaps, tepat sekali. Akan ada identitas baru, seperti nama jalan menjadi Jl. Gatot Subroto Gg. X, Jl. Gatot Subroto Gg. Y, Jl. Gatot Subroto Gg. Z,  dan sebagainya. Dan nomor rumah tentunya akan diawali dengan nomor 1 sebagai angka permulaan. Serta sebuah rumah yang menjadi Pak RT-nya.</p>
<p>Oleh sebab itu, jika anda punya network baru hasil subneting anda pasti akan mendapatkan sebuah network baru, alamat baru, dan broadcast address baru.</p>
<p>Sekian pejelasan singkat saya, dan terima kasih atas <a href="https://romisatriawahono.net/2006/02/10/memahami-konsep-subnetting-dengan-mudah/">blog Pak Romi Satria Wahono</a> atas ilmunya 13 tahum silam.</p>
<p>Semoga Bermanfaat.</p>
<!--kg-card-end: html-->
