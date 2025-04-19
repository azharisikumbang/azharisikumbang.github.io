---
id: 63bc55848e392205482244ac
title: "Apa itu Protokol TCP / IP ? Model Dan Pengertiannya"
description: "TCP/ IP atau Transmission Control Protocol / Internet Protocol, diawali oleh J.C.R Lick Lider dari MIT, pada Agustus 1962. Licklider…"
date: 2019-11-22
tags: posts
slug: apa-itu-protokol-tcp-ip-model-dan-pengertiannya
layout: layouts/post.njk
---

<!--kg-card-begin: html-->
<p>TCP/ IP atau Transmission Control Protocol / Internet Protocol, diawali oleh J.C.R Lick Lider dari MIT, pada Agustus 1962. Licklider membahasa bagaimana interaksi antar komputer dapat terjadi dalam jaringan.</p>



<p>Pembahasan ini, datang juga dari DoD (Departement of Defence) yang memerlukan komunikasi antar setiap komputer untuk para peneliti nya di setiap organisasi. </p>



<p>Baca Juga : <a href="https://coretanit.com/info/apa-sih-itu-mikrotik-pengertian-dan-penjelasan-mikrotik/">Apa Sih Itu Mikrotik ? Pengertian dan Penjelasan Mikrotik</a></p>



<p>Penelitian DoD ini di lakuakan pada tahun 1969, dengan maksud menciptakan protokol umum untuk semua jaringan, untuk efisiensi komnikasi, dioadukan dengan teknologi WAN, dan mempermudah konfigurasi.</p>



<p>Nah, sedikit mengutip sejarahnya, sekarang apa itu TCP / IP ? </p>



<h2> Apa itu TCP / IP ? </h2>



<p>TCP / IP merupakan kumpulan protokol yang menjadi standar komunikasi antar host dalam jaringan untuk saling bertukar data. Dapat kita katakan dengan TCP / IP setiap perangkat yang terhubung kejaringan dapt berkomunikasi dengan protokl ini. </p>



<p>Nah, sepenting itukah TCP / IP ? Jawabannya, YA. Kenapa ? Karena TCP / IP merupakan protokol yang telah diterapkan hampir di semua perangkat, software ataupun sistem operasi, dengan kata lain tidak ada kumpulan protokol yang begitu handal untuk bisa bekerja pada lapiasan perangkat keras, software atau sistem operasi. </p>



<p>Seperti Netware, FTP, HTTP, Telnet, Ms. Windows Client dan Server, Unix, Linux, dan BSD baik yang server atau workstation, Solaris, Macintosh dan lainnya. </p>



<p><em>Sedikit menyinggung seberapa pentingnya TCP / IP, mungkin bagi anda yang “ngakunya” hacker atau terobsesi dengan hacking tapi tidak tahu TCP / IP, mungkin anda tahu apa yang harus dilakuakn sekarang.</em></p>



<h2>Arsitektur TCP / IP Model</h2>



<p>Untuk arstektur penyusun TCP / IP sendiri dibedakan atas beberapa berikut.</p>



<div class="wp-block-image"><figure class="aligncenter size-large"><img loading="lazy" width="167" height="423" src="/media/wordpress/2019/11/images3.jpg" alt="Apa itu Protokol TCP / IP? Model Dan Pengertiannya - TCP / IP Model Images 1" class="wp-image-58" srcset="/media/wordpress/2019/11/images3.jpg 167w, http://localhost:2368/media/wordpress/2019/11/images3-118x300.jpg 118w" sizes="(max-width: 167px) 100vw, 167px" /></figure></div>



<ul><li><strong>Application layer</strong> : Layer yang menjadi interface antara user dan software applikasi, Aplication layer bukan lah tempat untuk software game, browser, word processor atau software lainnya, tapi layer ini digunakna untuk aplikasi berinteraksi dengan software software ini, contoh FTP, SMTP atau HTTP.</li></ul>



<ul><li><strong>Transport layer</strong> : Layer yang menjadi pengontrol pergiriman data, mengontrol bagaimana media penginrim bekomunikasi dengan media penerima, mulai dari membentuk koneksi, mengirim pesan error, dan sebagai penajmin tekirimnya data. <br><br>Tugas Layer Transport : &#8211; Flow Control (Pengontrol Arus Data), seperti kecepatan paket dan banyak nya paket yang mungkin bisa diterima. &#8211; Error Detection, untuk mengatur kesalahan pada pengiriman data, jika ada kesalahan maka data dengan kesalahan tadi akan dikirim ulang.</li></ul>



<ul><li><strong>Internet Layer</strong> : Layer yang berfungsi sbagai pengatur media addressing dan ruouting. Mudahnya, Layer ini akan mengatur ke tujuan mana paket ini akan di lempar. Dalam sebuah jaringan internet umumnya ada jutaan host, dan lapisan ini akan menjadi pemegang terwujudnya komunikasi ke tujuan. <br><br>Tugas Layer Internet : &#8211; Addressing (pengalamatan) – Routing (Penentuan Jalur)</li></ul>



<ul><li><strong>Network Layer</strong> : Layer yang menjadi pengatur hubungan komunikasi data, umumnya sambungan media dalam suatu jaringan</li></ul>



<h2>TCP / IP dan OSI Model</h2>



<p>Perhatikan gambar berikut ini untuk bisa membandingkan antara kedua model tersebut.</p>



<figure class="wp-block-image size-large"><img loading="lazy" width="700" height="453" src="/media/wordpress/2019/11/images2-1.jpg" alt="Apa itu Protokol TCP / IP? Model Dan Pengertiannya - TCP / IP Model dan Mode OSI Images 1" class="wp-image-57" srcset="/media/wordpress/2019/11/images2-1.jpg 700w, http://localhost:2368/media/wordpress/2019/11/images2-1-300x194.jpg 300w" sizes="(max-width: 700px) 100vw, 700px" /></figure>



<p>Dari gambar diatas kita sedikit bisa memberi gambaran sebagai berikut</p>



<ul><li>Application Layer => Application, Presentation, Dan Session</li><li>Transport Layer => Transport</li><li>Internet Layer => Network Layer</li><li>Network Interface Layer => Data Link Layer dan Physical Layer </li></ul>



<h2> Bagaimana Untuk Sistem Kerja TCP / IP ? </h2>



<p>Sebenarnya untuk memahami sistem kerja TCP IP membutuhkan pemahaman yang cukup menguras kerja otak. Banyak orang yang telah mengakui bahwa untuk memahami topik yang satu ini agak kewalahan.</p>



<p>Tapi, berikut sedikit penjalasan singkat tentang sistem kerja TCP / IP. Untuk lebih detailnya silahkan cek di wikipedia tentang <a href="https://id.wikipedia.org/wiki/Paket_protokol_internet">TCP / IP</a>.</p>



<p>Untuk sistem kerja TCP / IP adalah terpisah, yaitu TCP dan IP. Keduanya memiliki tugas masing masing, tapi masih dalam satu konteks kerja yang sejalan. Untuk tugasnya keduanya yaitu, </p>



<ul><li> TCP : dengan dasar Conection-Oriented, tcp mengharuskan kedua host yang berkomunikasi harus terhubung terlebih dahulu sebelum proses pertukaran benar benar diproses. <br>TCP juga betugas untuk meyakinkan bahwa data yang dikirim adak benar benar samapi ke tujuan. Dan jika data tidak bisa dimuat dalam satu datagram, artinya terlalu besar, maka data akan dimuat alam beberapa unit datagram.<br>Sementara untuk kesalahnya, TCP akan memelihara dan mengirimkan error tersebut ke lapisan atas jiga terjadi gagal koneksi.</li></ul>



<ul><li>IP : setelah hubungan terjadi, selanjunya tugas IP, tugasnya melakukan routing data dalam jaringan. Dalam hal ini, IP akan mencari jalur terbaik, untuk pengiriman dari data tadi. <br>Perlu diketahui, IP tidak mau tahu apabila data tidak sampai ke tujuan sebagaimana mestinya, ia hanya akan mengirimkan error lewat protokol ICMP. Hal ini karena IP tidak tahu tentang informasi data yang ia kirimkan.</li></ul>



<p>Agar lebih menambah wawasan, sebagai percontohan TCP / IP, misalkan ada sebuah pesan chat yang aka dikirim ke teman anda, nah tentunya pesan email ini akan berisi, data anda sebagai pengirim, data tujuan, isi pesan, atau mingkin juga data tanggal, nah setelah data ada dan valid. Kemudian dilanjutkan dengan bagaimana pesan email tadi bisa terkirim ke tujuan yang benar, dalam hal ini teman email anda.</p>



<p>Dari dasar contoh diatas bisa kita simpulkan, TCP / IP hanya sebagai media perantara dan penghubung suatu host dengan hst lain untuk saling betukar data.</p>



<p>Oke, demikian lah tentang Protokol TCP / IP, jika ada kesalahan mohon koreksinya di kolom komentar karena jujur saya juga belum terlalu faham tentang TCP / IP. Semoga bermanfaat, </p>



<p>Terima Kasih. Referensi :</p>



<p>Referensi : <br>&#8211;  <a href="https://id.wikipedia.org/wiki/Paket_protokol_internet">https://id.wikipedia.org/wiki/Paket_protokol_internet</a> <br>&#8211;  <a href="http://mikrotik.co.id/artikel_lihat.php?id=62">http://mikrotik.co.id/artikel_lihat.php?id=62</a> <br>&#8211;  <a href="http://mikrotik.co.id/artikel_lihat.php?id=59">http://mikrotik.co.id/artikel_lihat.php?id=59</a> <br></p>
<!--kg-card-end: html-->
