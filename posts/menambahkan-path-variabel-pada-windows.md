---
id: 63bc55848e392205482244d6
title: "Menambahkan Path Variabel Pada Windows"
feature_image: /content/images/wordpress/2021/02/Black-and-Red-Geometric-Technology-Keynote-Presentation-1.jpg
description: "Bagi para developer, penggunaan command line (cli) atau terminal menjadi hal yang sangat sering dilakukan. Hampir setiap memulai proses…"
date: 2021-02-20
tags: posts
slug: menambahkan-path-variabel-pada-windows
layout: layouts/post.njk
---

<!--kg-card-begin: html-->
<p>Bagi para developer, penggunaan <em>command line</em> (cli) atau terminal menjadi hal yang sangat sering dilakukan. Hampir setiap memulai proses development pasti melibatkan <em>command-line</em>, karena memang lebih cepat dan praktis. Dan hampir setiap teknologi pasti menyediakan file executable yang bisa dijalankan di <em>command-line</em>. </p>



<p>Tapi, terkadang saat kita selesai menginstal sebuah tools di komputer kita, dan kita ingin menggunakannya pada command line, justru tools tersebut tidak dikenali. </p>



<p>Tenang saja, hal itu terjadi bukan karena ada kesalahan saat instalasi tapi karena memang terdapat beberapa teknologi yang mengharuskan kita mengenalkan tools tersebut ke command-line.</p>



<h2>Mengenal Variabel</h2>



<p>Di semua sistem operasi, umumnya pasti terdapat sistem variabel atau lebih dikenal dengan <em><a href="https://en.wikipedia.org/wiki/Environment_variable" target="_blank" rel="noreferrer noopener">environment variable</a></em>. Hal ini digunakan untuk mempermudah sistem operasi menyimpan data-data yang selanjutnya akan digunakan lagi. Contohnya, seperti menyimpan data sistem operasi, direktori home user, lokasi instalasi software dan sebagainya.</p>



<p>Pada environmetn variabel, khususnya di Windows terdapat dua jenis yaitu, </p>



<ul><li>Sistem Environment Variables, dan</li><li>Account (User&#8217;s) Environment Variables</li></ul>



<p>Perebedaannya cukup mudah diingat, untuk sistem, seluruh variabel akan  digunakan secara global, sedangkan untuk account, hanya dikhususkan pada ruang lingkup sebuah akun saja.</p>



<h2>Mengenal Path Variabel</h2>



<p>Pada environment variabel, terdapat salah satu jenisnya, yaitu path variable. Path variable sendiri merupakan sebuah metode untuk memberitahukan sistem operasi bahwa terdapat file yang bisa dieksekusi pada path yang dimaksudkan.</p>



<p>Jika anda pernah menggunakan menu Run pada Windows <code>(Start + R)</code> , nah seluruh setingan yang terdapat pada path akan bisa dieksekusi di sana.</p>



<h2>Menyeting Path Variabel</h2>



<p>Untuk mulai menyeting <a href="https://en.wikipedia.org/wiki/PATH_(variable)" target="_blank" rel="noreferrer noopener">path variabel</a>, caranya ada dua cara, yaitu menggunakan window dari Windows (GUI) atau menggunakan fasilitas command promt Windows (CLI). Efeknya sama saja, tidak ada perbedaan, tergantung kesukaan.</p>



<p>Pada tutorial ini, akan diberikan contoh kasus menyeting untuk account variabel, untuk mencegah isu keamanan.</p>



<p>Untuk tools yang akan kita masukkan ke path variabel, contoh nya adalah php dan mysql (karena memang baru instal juga, jadi sekalian saja 😀 ). Untuk software sendiri saya memakai php dan mysql yang didistribusikan bundle  lewat XAMPP, jadi pastikan anda sudah mendownload dan menginstalnya di perangkat masing masing.</p>



<p>Baca juga : <a href="https://coretanit.com/mengatasi-xampp-gagal-berjalan-saat-pindah-direktori-utama-xampp/" target="_blank" rel="noreferrer noopener">Mengatasi Xampp Gagal Berjalan Saat Pindah Direktori Utama Xampp</a></p>



<p>Sebelum menyeting, bisa dipastikan terlebih dahulu apakah php dan mysql tidak dikenali oleh sistem operasi. </p>



<p>Silahkan buka command promt dan ketikkan</p>



<pre class="wp-block-preformatted">php</pre>



<p>dan</p>



<pre class="wp-block-preformatted">mysql</pre>



<p>Seharusnya akan mengeluarkan pesan berikut, yang artinya perintah tersebut tidak dikenali.</p>



<figure class="wp-block-image size-large"><img loading="lazy" width="670" height="208" src="/content/images/wordpress/2021/02/image.png" alt="Path Variabel Pada Windows - Perintah Error" class="wp-image-1696" srcset="/content/images/wordpress/2021/02/image.png 670w, http://localhost:2368/content/images/wordpress/2021/02/image-300x93.png 300w" sizes="(max-width: 670px) 100vw, 670px" /></figure>



<p></p>



<h3>Setting Path Variabel lewat Command Prompt</h3>



<p>Cara pertama dan termudah untuk menambahkan path variabel adalah dengan menggunakan command prompt dari Windows. Silahkan buka command prompt (cmd).</p>



<p>Untuk sintaks bisa mengikuti format berikut,</p>



<pre class="wp-block-preformatted">setx path "%path%;C:\directoryPath"</pre>



<p>Contohnya, path sesuai contoh software yang akan ditambahkan ke path variabel, yaitu xampp yang terinstall di <code>C:\Users\KUM\Development\xampp</code> sedangkan php pada xampp berada pada direktori <code>C:\Users\KUM\Development\xampp\php</code> dan mysql di <code>C:\Users\KUM\Development\xampp\mysql\bin</code></p>



<figure class="wp-block-image size-large"><img loading="lazy" width="678" height="201" src="/content/images/wordpress/2021/02/image-1.png" alt="Path Variabel Pada Windows - Variabele tersimpan" class="wp-image-1699" srcset="/content/images/wordpress/2021/02/image-1.png 678w, http://localhost:2368/content/images/wordpress/2021/02/image-1-300x89.png 300w" sizes="(max-width: 678px) 100vw, 678px" /></figure>



<p>Seharusnya, setelah muncul pesan SUCCESS, path telah dikenali dan perintah <code>php </code>dan <code>mysql </code>sudah bisa dikenali sistem operasi. Untuk mengecek, terlebih dahulu tutup command prompt, dan buka command prompt baru, kemudian coba saja</p>



<figure class="wp-block-image size-large"><img loading="lazy" width="669" height="233" src="/content/images/wordpress/2021/02/image-2.png" alt="Path Variabel Pada Windows - Perintah Berhasil" class="wp-image-1700" srcset="/content/images/wordpress/2021/02/image-2.png 669w, http://localhost:2368/content/images/wordpress/2021/02/image-2-300x104.png 300w" sizes="(max-width: 669px) 100vw, 669px" /></figure>



<p>Pada php, php berhasil dieksekusi begitu juga dengan mysql, dibuktikan dengan kedaunya sama sama mengeluarkan respon yang berbeda dari sebelumnya.</p>



<h3>Setting Path Variabel lewat Environment Window (GUI)</h3>



<p>Untuk menyeting path melalui gui, cara ini lebih disarankan bagi pemula dikarenakan lebih user-friendly. </p>



<p>Pertama, silahkan buka menu <em>Start </em>dan ketikkan <code>env</code></p>



<figure class="wp-block-image size-large"><img loading="lazy" width="404" height="511" src="/content/images/wordpress/2021/02/image-3.png" alt="Path Variabel Pada Windows - Start Menu" class="wp-image-1702" srcset="/content/images/wordpress/2021/02/image-3.png 404w, http://localhost:2368/content/images/wordpress/2021/02/image-3-237x300.png 237w" sizes="(max-width: 404px) 100vw, 404px" /></figure>



<p>Terdapat 2 opsi, pada tutorial ini kita memilih <em>Edit environment variables for yout account</em> (silahkan saya dicoba untuk system). Seharusnya muncul jendela berikut.</p>



<figure class="wp-block-image size-large"><img loading="lazy" width="391" height="437" src="/content/images/wordpress/2021/02/image-4.png" alt="Path Variabel Pada Windows - User environment window" class="wp-image-1703" srcset="/content/images/wordpress/2021/02/image-4.png 391w, http://localhost:2368/content/images/wordpress/2021/02/image-4-268x300.png 268w" sizes="(max-width: 391px) 100vw, 391px" /></figure>



<p>Yang lain abaikan saja, kita cukup berfokus pada Path, klik pada baris <code>Path </code>dan pilih <em>Edit</em>. Lalu akan muncul jendela baru untuk mengedit variabel</p>



<figure class="wp-block-image size-large"><img loading="lazy" width="392" height="436" src="/content/images/wordpress/2021/02/image-5.png" alt="Path Variabel Pada Windows - Edit env path" class="wp-image-1704" srcset="/content/images/wordpress/2021/02/image-5.png 392w, http://localhost:2368/content/images/wordpress/2021/02/image-5-270x300.png 270w" sizes="(max-width: 392px) 100vw, 392px" /></figure>



<p>Jangan lupa, untuk setiap direktori dipisahkan dengan titik kome, misal <code>C:\dir1<strong>;</strong>C:\dir2</code></p>



<p>Sama seperti direktori atau path php dan mysql pada contoh menggunakan command prompt, langsung di-copy-paste-kan saja ke Variable Value <strong>tanpa </strong>menghapus nilai yang sudah terdapat disana.</p>



<pre class="wp-block-preformatted">pathyangsudahada<strong>;</strong>C:\Users\KUM\Development\xampp\php<strong>;</strong>C:\Users\KUM\Development\xampp\mysql\bin</pre>



<p>Setelah itu silahkan di Ok kan saja semua nya, dan coba ditest di command prompt perintah php dan mysql</p>



<figure class="wp-block-image size-large"><img loading="lazy" width="666" height="330" src="/content/images/wordpress/2021/02/image-6.png" alt="Path Variabel Pada Windows - GUI testing success" class="wp-image-1706" srcset="/content/images/wordpress/2021/02/image-6.png 666w, http://localhost:2368/content/images/wordpress/2021/02/image-6-300x149.png 300w" sizes="(max-width: 666px) 100vw, 666px" /></figure>



<p>Selain path variabel masih banyak lagi hal yang bisa dimanfaatkan dengan adanya environment variable, silahkan diekplose lebih dalam.</p>



<p>Terima kasih</p>
<!--kg-card-end: html-->
