---
id: 63bc55848e392205482244d9
title: "Cara Install PHP Composer"
description: "Composer merupakan salah satu dependency manager untuk bahasa pemrograman php, sekaligus yang paling populer saat ini. Composer sendiri…"
date: 2021-05-03
tags: posts
slug: cara-install-php-composer
layout: layouts/post.njk
---

<!--kg-card-begin: html-->
<p>Composer merupakan salah satu dependency manager untuk bahasa pemrograman php, sekaligus yang paling populer saat ini. Composer sendiri hingga saat artikel ini dibuat sudah masuk versi <code>2.0.13 (latest)</code>. Sekedar informasi tambahan, composer bersifat open source dan dimaintain oleh Nils Adermann, Jordi Boggiano dan beberapa kontributor di komunitas PHP. Source code bisa di cek <a href="https://github.com/composer/composer/" target="_blank" rel="noreferrer noopener">di sini</a>.</p>



<blockquote class="wp-block-quote"><p>Baca Juga : <a href="https://coretanit.com/menambahkan-path-variabel-pada-windows/" target="_blank" rel="noreferrer noopener">Menambahkan Path Variabel Pada Windows</a></p></blockquote>



<h2>Instalasi (GUI)</h2>



<p>Untuk pengguna windows, instalasi composer cukup mudah, cukup download file executable yang telah disediakan di link berikut (<a href="https://getcomposer.org/Composer-Setup.exe">https://getcomposer.org/Composer-Setup.exe</a>)</p>



<p>Setelah file didownload, langsung saja dijalankan, maka akan masuk ke jendela Composer Setup, langsung saja <strong>next</strong></p>



<figure class="wp-block-image size-large"><img loading="lazy" width="646" height="478" src="/content/images/wordpress/2021/05/image-3.png" alt="composer install welcome step" class="wp-image-1760" srcset="/content/images/wordpress/2021/05/image-3.png 646w, http://localhost:2368/content/images/wordpress/2021/05/image-3-300x222.png 300w" sizes="(max-width: 646px) 100vw, 646px" /></figure>



<p>Kemudian , secara otomatis jendelat setup akan mengarahkan kita untuk mencari lokasi executable dari php, seperti contoh di komputer saya sebagai berikut.</p>



<figure class="wp-block-image size-large"><img loading="lazy" width="652" height="479" src="/content/images/wordpress/2021/05/image-4.png" alt="composer install pemilihan php path" class="wp-image-1761" srcset="/content/images/wordpress/2021/05/image-4.png 652w, http://localhost:2368/content/images/wordpress/2021/05/image-4-300x220.png 300w" sizes="(max-width: 652px) 100vw, 652px" /></figure>



<p> Setelah di <strong>next</strong>, akan diminta memasukkan proxy, jika tidak ada lansung saja di <strong>next</strong></p>



<figure class="wp-block-image size-large"><img loading="lazy" width="650" height="485" src="/content/images/wordpress/2021/05/image-5.png" alt="composer install proxy" class="wp-image-1762" srcset="/content/images/wordpress/2021/05/image-5.png 650w, http://localhost:2368/content/images/wordpress/2021/05/image-5-300x224.png 300w" sizes="(max-width: 650px) 100vw, 650px" /></figure>



<p>Kemudia pilih <strong>Install</strong></p>



<figure class="wp-block-image size-large"><img loading="lazy" width="647" height="470" src="/content/images/wordpress/2021/05/image-6.png" alt="composer install step" class="wp-image-1763" srcset="/content/images/wordpress/2021/05/image-6.png 647w, http://localhost:2368/content/images/wordpress/2021/05/image-6-300x218.png 300w" sizes="(max-width: 647px) 100vw, 647px" /></figure>



<p>Dan terakhir akan muncul jendala pemberitahuan instalasi selesai.</p>



<figure class="wp-block-image size-large"><img loading="lazy" width="649" height="482" src="/content/images/wordpress/2021/05/image-7.png" alt="composer install finish" class="wp-image-1764" srcset="/content/images/wordpress/2021/05/image-7.png 649w, http://localhost:2368/content/images/wordpress/2021/05/image-7-300x223.png 300w" sizes="(max-width: 649px) 100vw, 649px" /></figure>



<h2>Instalasi (CLI)</h2>



<p>Cara lain untuk menginstall composer adalah dengan menggunakan terminal. Jika cara gui hanya bekerja pada sistem operasi windows, maka cara ini akan cocok bagi kalian pengguna sistem operasi linux-base ataupun unix-base.</p>



<p>Pertama, silahkan buka terminal dan download installer dari composer</p>



<pre class="wp-block-code"><code>php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"</code></pre>



<p>Kemudian, untuk menjaga integritas installer yang kita download, kita perlu memverifikasi intaller yang kita buat (boleh diskip)</p>



<pre class="wp-block-preformatted">php -r "if (hash_file('sha384', 'composer-setup.php') === '756890a4488ce9024fc62c56153228907f1545c228516cbf63f885e036d37e9a59d27d63f46af1d4d07ee0f76181c7d3') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"</pre>



<p>Lalu jalankan file intaller composer-setup.php</p>



<pre class="wp-block-code"><code>php composer-setup.php</code></pre>



<p>Dikarekan composer sudah terinstall dan installer tidak diperlukan lagi, untuk menghapusnya bisa dengan perintah</p>



<pre class="wp-block-code"><code>php -r "unlink('composer-setup.php');"</code></pre>



<h2>Validasi</h2>



<p>Untuk validasi apakah composer sudah terinstall dengan betul, cukup dengan membuka terminal dan ketikan</p>



<pre class="wp-block-code"><code>composer --version</code></pre>



<figure class="wp-block-image size-large"><img loading="lazy" width="667" height="166" src="/content/images/wordpress/2021/05/image-9.png" alt="composer version" class="wp-image-1766" srcset="/content/images/wordpress/2021/05/image-9.png 667w, http://localhost:2368/content/images/wordpress/2021/05/image-9-300x75.png 300w" sizes="(max-width: 667px) 100vw, 667px" /></figure>



<p>Dan seharusnya, composer akan mengeluarkan versii dari composer yang baru saja kita install</p>
<!--kg-card-end: html-->
