---
id: 63bc55848e392205482244d4
title: "Cara Mudah Menggabungkan Beberapa Video Dengan VLC Media Player"
feature_image: /content/images/wordpress/2021/01/1.png
description: "Tutorial ini akan sedikit sederhana, dimana ada beberapa video yang ingin digabungkan menjadi satu video saja. Untuk melakukan itu, bisa…"
date: 2021-01-27
tags: posts
slug: cara-mudah-menggabungkan-beberapa-video-dengan-vlc-media-player
layout: layouts/post.njk
---

<!--kg-card-begin: html-->
<p>Tutorial ini akan sedikit sederhana, dimana ada beberapa video yang ingin digabungkan menjadi satu video saja. Untuk melakukan itu, bisa saja dengan software editor video yang sudah banyak bertebaran.<br>Tapi, berhubung laptop saya kentang dan saya internet speed yang mirip keong untuk download software editing video <em>(curhat)</em>, jadi sedikit putar otak dan saya baru tau juga bahwa vlc video player bisa digunakan untuk menggabungkan beberapa video menjadi satu video saja.</p>



<p>Caranya cukup mudah, cukup buka command line nya windows,</p>



<pre class="wp-block-preformatted">C:\Users\Win&gt;</pre>



<p>Kemudian masuk ke direktori lokasi video yang kita akan gabungkan, sebagai contoh video saya ada di <code>D:\Videos</code></p>



<pre class="wp-block-preformatted">C:\Users\Win&gt;D:<br>D:&gt;cd Videos<br>D:\Videos&gt;</pre>



<p>Untuk melakukan penggabungkan, pastikan sudah terinstall vlc media player, jika belum silahkan download dan install saja.</p>



<p>Baca Juga : <a href="https://coretanit.com/cara-membuat-loopback-interface-adapter-windows-7/" target="_blank" rel="noreferrer noopener">Cara Membuat Loopback Interface Adapter Windows 7</a></p>



<p>Secara default lokasi excutable vlc kita ada di <code>"%PROGRAMFILES%\VideoLAN\VLC\vlc.exe"</code>, jika berbeda silahkan disesuaikan</p>



<p>Disini terdapat 3 video, yaitu <code>pembukaan.mp4</code>, <code>isi.mp4</code>, <code>penutup.mp4</code> dan akan digabunggakan menjadi <code>final.mp4</code></p>



<pre class="wp-block-preformatted">D:\Videos>"%PROGRAMFILES%\VideoLAN\VLC\vlc.exe" -vv <span class="has-inline-color has-vivid-red-color">pembukaan.mp4 isi.mp4 penutup.mp4</span> --sout-keep -- sout=#gather:transcode{vcodec=h264,vb=1024,scale=1,acodec=mp4a,ab=192,channels=6}:standard{access=file,mux=ts,dst=<span class="has-inline-color has-vivid-red-color">final.mp4</span>}</pre>



<p>Saat kita eksekusi, seharusnya aplikasi vlc kita akan terbuka, dan proses penggabungan akan dijalankan, cukup tunggu saja, seduh kopi dan scroll tiktok.</p>



<p>Untuk pengertian setiap parameter dan config yang dimasukkan diabaikan saja, cukup perhatikan file yang akan digabunggkan, dan hasil pada parameter <code>dst=final.mp4</code></p>



<p>Untuk lebih lengkapnya silahkan cek <a href="https://wiki.videolan.org/" target="_blank" rel="noreferrer noopener">wiki </a>dan <a href="https://wiki.videolan.org/Documentation:Documentation" target="_blank" rel="noreferrer noopener">dokumentasi</a> dari vlc.</p>



<p>Selain mp4, penggabungan juga bisa dilakukan terhadap file mp4, mkv dan sebagainya, tinggal menyesuaikan transcode nya</p>



<p>Sekian, dan terima gaji.</p>
<!--kg-card-end: html-->
