---
id: 63bc55848e39220548224496
title: "Membuat Format Penanggalan Ala Sosial Media Dengan PHP"
feature_image: /content/images/wordpress/2019/07/2.jpg
description: "Bagi kita yang sering menghabiskan waktu di dunia maya pasti sudah sering nih melihat versi penanggalan seperti ini. Menurut beberapa…"
date: 2019-07-29
tags: posts
slug: membuat-format-penanggalan-ala-sosial-media-dengan-php
layout: layouts/post.njk
---

<!--kg-card-begin: html-->
<p>Bagi kita yang sering menghabiskan waktu di dunia maya pasti sudah sering nih melihat versi penanggalan seperti ini. Menurut beberapa penjelajah internet, kehadiran penulisan tanggal seperti ini lebih mudah untuk dibaca, ketimbang penulisan yang selama ini kita lihat.</p>



<p>Jadi biasanya kita selalau dihadapkan dengan format penanggalan diinternet, berupa jam, menit, detik, tanggal, bulan ataupun tahun yang biasa tertulis dengan format pemisah slash (&#8220;/&#8221;) atau dash (&#8220;-&#8220;).</p>



<p>Sebenarnya format baru ini telah lama dipakai dibeberapa platform online, seperti facebook, twitter, instagram ataupun situs berita pada umumnya. Nah, yang jadi permasalah gimana sih cara membuatnya?</p>



<p>Akan kita bahas dengan menggunakan bahasa pemrograman PHP.</p>



<h3>Mari Merancang Alur</h3>



<p>Pertama, kita akan lebih sering bermain dengan waktu atau tepatnya fungsi time() pada PHP. Fungsi ini akan menjadi referensi untuk komponen-komponen selanjutnya. komponen ini berupa data yang disimpan dalam vatiabel. Tentu masih tau dong cara membuat variabel pada PHP 🙂</p>



<ul><li>$post_time, akan dipergunakan sebagai penampung tanggal posting instagram (atay artikel)</li><li>$now, sebagai penampung waktu sekarang atau satu dokumen diload</li><li>$time_diff, sebagai hasil selisih dari waktu sekarang dengan tanggal posting dan selanjutnya akan menjadi acuan untuk penentuan waktu posting</li><li>$seconds, merupakan variabel yang menampung detik dengan mereferensi dari $time_diff</li><li>$miuntes, $hours, $days, $weeks, $months, $years merupaka nreferensi dari setiap satuan waktu yang direpresentasekan dalam bentuk detik/second</li></ul>



<h3>Mari Koding</h3>



<p>Pertama silahkan buat fungsi agar lebih mempermudah, tentunya kita tau pemakaaian format tanggal ini akan berulang.</p>



<pre class="wp-block-code"><code>function igTime($time)
{ 

}</code></pre>



<p>Setelah membuat fungsi igTime($time), kita bisa lihat kita punya parameter $time. Parameter $time inilah yang akan menampung tanggal postingan nantinya.</p>



<pre class="wp-block-code"><code>function igTime($time)
{    
    $post_time = strtotime($time);
    $now = time();
    $time_diff = $now - $post_time;

    $seconds = $time_diff; 
    $minutes = round($seconds / 60); // 1m = 60 s
    $hours = round($seconds / 3600); // 1h = 3600 s
    $days = round($seconds / 86400); // 1d = 86400 s
    $weeks = round($seconds / 604800); // 1w = 604800 s
    $months = round($seconds / 2629440); // 1m = 2629440 s
    $years = round($seconds / 31553280); // 1y = 31553280 s
	
    if($seconds &lt;= 60) { // 60 detik = nilai maksimal untuk 1 menit
        return 'Baru Saja';
    } 
    elseif ($minutes &lt;= 60) { // 60 menit = nilai maksimal untuk 1 jam
		return $minutes . ' menit yang lalu';
    }
    elseif ($hours &lt;= 24) { // 24 jam = nilai maksimal untuk 1 hari
        return $hours . ' jam yang lalu';
    }
    elseif ($days &lt;= 7) { // 7 hari = nilai maksimal untuk 1 minggu
            return $days . ' hari yang lalu';
    }
    elseif ($weeks &lt;= 4.3) { // 4.3 winggu = nilai maksimal untuk 1 bulan
		return $weeks . ' minggu yang lalu';
    }
    elseif ($months &lt;= 12) { // 12 bulan = nilai maksimal untuk 1 tahun
		return $months . ' bulan yang lalu';
    }
    elseif ($years >= 1) { 
         return date("d/m/Y",  strtotime($time));
    }
}</code></pre>



<p>Lanjut, setelah membaut fungsi dan memahami variabel pada pejalasan diatas kita masuk ke alur logika.</p>



<p>Sebenarnya, tidak rumit, logikanya begini..</p>



<p>&#8221; Jika artikel diupload kutang dari satumenit, maka munculkan <strong>baru saja</strong>. Jika diupload kurang dari satu jam maka munculkan maka munculkan <strong>x menit yang lalu</strong>. Jika diupload kurang dari 1 minggu dan lebih dari 24 jam, maka munculkan <strong>kemaren</strong> dan begitu seterusnya.. &#8220;</p>



<p>Nah, unutk memunculkan pada halaman yang diinginkan, kita tinggal memanggil fungsi <strong>igTime($time), </strong>tentu dengan tidak mengosongkan parameter $time.</p>



<pre class="wp-block-code"><code>&lt;?php echo igTime('2019-07-29 15:43:00'); ?></code></pre>



<p>Maka, kode diatas harusnya memunculkan <strong> 6 menit yang lalu</strong> (per 2019-07-29 15:49:00)</p>



<p>Demikianlah cara untuk memunculkan format penanggalan yang sering kita jumpai disosial media. Silahkan bereksperimen</p>



<p>Sekian dan Terima kasih.</p>
<!--kg-card-end: html-->
