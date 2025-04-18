---
id: 63bc55848e392205482244c6
title: "Codeigniter 4 Error : Class 'Kint\\Kint' not found"
feature_image: /content/images/wordpress/2020/03/Screenshot_2020-03-30-codeigniter4logo-png-PNG-Image-200---200-pixels1.png
description: "Walau banyak yang pesimis dengan rilis nya Codeigniter 4, tapi tim developer Codeigniter 4 berhasil rilis pada 24 February kemaren.…"
date: 2020-03-31
tags: posts
slug: codeigniter-4-error-class-kintkint-not-found
layout: layouts/post.njk
---

<!--kg-card-begin: html-->
<p><amp-fit-text layout="fixed-height" min-font-size="6" max-font-size="72" height="80">Walau banyak yang pesimis dengan rilis nya Codeigniter 4, tapi tim developer Codeigniter 4 berhasil rilis pada 24 February kemaren. (<a href="https://forum.codeigniter.com/thread-75581.html">https://forum.codeigniter.com/thread-75581.html</a>). Walau udah rilis sebulan, tapi baru bisa nyicip sekarang hehe. Yaps, saat proses icip icip, tiba tiba di &#8216;suapan&#8217; pertama saya langsung bertemu error. Waduhh&#8230;.</amp-fit-text></p>



<p>Sebagai informasi, untuk mendownload Codeigniter bisa di link berikut <a href="http://codeigniter.com/">http://codeigniter.com/</a> dan dokumentasi dan githubnya bisa di <a href="https://codeigniter4.github.io/userguide/index.html">https://codeigniter4.github.io/userguide/index.html</a></p>



<p>Gausah basa basi, bentuk error nya seperti berikut..</p>



<pre class="wp-block-code"><code>$ php spark serve
An uncaught Exception was encountered

Type:        Error
Message:     Class 'Kint\Kint' not found
Filename:    /var/www/html/learnci4/system/ThirdParty/Kint/init.php
Line Number: 46</code></pre>



<p> Yaps, ada class yang tidak ditemukan yakni class Kint. </p>



<p>Kemudian saya coba trace lokasi file yang disebutkan yaitu <code>init.php</code> untuk mencoba menyelesaikan masalah. </p>



<p>Dan betul saja perkiraan saya, error ini juga yang menjadi alasan kenapa saya koding selalu pake linux, (sebenarnya karena server rata rata linux si hehe). </p>



<p>Terdapat &#8216;kekhilafan&#8217; pada penamaan file <code>kind.php</code>, sebagaimana kita tau bahwa pana Unix-Base OS huruf besar dan kecil itu beda, atau dikenal istilah case-sensitive.</p>



<p>Jadi, bisa kita tarik kesimpulan untuk ngesolve ini problem cukup dengan mengganti nama file menjadi <code>Kind.php</code> dan <em>run your app 😀</em></p>



<p>Cara running app agak beda dengan biasa di codeigniter3 (saya pikir semua udah tau wkwk) dan agak mirip dengan laravel.</p>



<p>Di Codeigniter terdapat tools yang bernama <code>spark</code> (mirip artisan di laravel) </p>



<pre class="wp-block-code"><code>$ php spark serve</code></pre>



<figure class="wp-block-image size-large"><img loading="lazy" width="916" height="1024" src="/content/images/wordpress/2020/03/image-916x1024.png" alt="" class="wp-image-1338" srcset="/content/images/wordpress/2020/03/image-916x1024.png 916w, http://localhost:2368/content/images/wordpress/2020/03/image-268x300.png 268w, http://localhost:2368/content/images/wordpress/2020/03/image-768x858.png 768w, http://localhost:2368/content/images/wordpress/2020/03/image.png 1354w" sizes="(max-width: 916px) 100vw, 916px" /></figure>



<p>Nah, bisa sebagai informasi juga karena Codeigniter 4 masih terbilang banyak &#8216;kekhilafan&#8217;, mungkin akan berjumpa dengan case yang mirip-mirip. Semoga cepat stabil.</p>



<h4>Update</h4>



<p>Dan setelah crosscheck ke github codeigniter (<a href="https://github.com/codeigniter4/CodeIgniter4">https://github.com/codeigniter4/CodeIgniter4</a> ) tepatnya di branch develop sudah &#8216;kekhihlfan&#8217; ini sudah fixed, jadi sudah tidak perlu khawatir.</p>
<!--kg-card-end: html-->
