---
id: 63bc55848e3922054822448f
title: "Install Dan konfigurasi Samba File Server Ubuntu"
feature_image: /content/images/wordpress/2019/03/sambar.jpg
description: "Samba File Server atau sering juga disebut file sharing, merupakan salah satu fitur/aplikasi untuk saling berbagi file, perangkat dan…"
date: 2019-03-29
tags: posts
slug: install-dan-konfigurasi-samba-file-server-ubuntu
layout: layouts/post.njk
---

<!--kg-card-begin: html-->
<p>Samba File Server atau sering juga disebut file sharing, merupakan salah satu fitur/aplikasi untuk saling berbagi file, perangkat dan sebagainya. Kinerjnya sendiri hampir sama dengan FTP server, jika anda pernah mendegar, perbedaan nya hanya skala pemakaiannya saja.</p>



<p>Kasusnya seperti ini, misalkan kita sedang ada di sebuah pertemuan besar, mungkin 100 peserta dengan masing-msing komputer. Si boss pertemuan kemudian punya sebuah file penting, dimana setiap peserta harus punya file itu. </p>



<p>Nah, bagaimana aga itu file bisa sampai ke tangan si peserta?? Sebenarnya mudah saja, tinggal colok flashdisk. Tapi, tidak semudah itu, dengan flshdisk resiko terlalu tinggi. Apalgi hanya ada sedkiti flashdisk, pasti akan repot.</p>



<p>Nah, disinilah kita butuh sebuah file server untuk shring data. Dimana setiap komputer peserta hanya perlu mengakses komputer si boss dan tinggal download.</p>



<h3>1. Instalasi Samba</h3>



<p>Sebelum install, ada baiknya silahkan update terlebih dahulu untuk mendapatkan versi terbaru, silahkan ikuti perintah berikut.</p>



<pre class="wp-block-preformatted"><strong>azhari@ubuntu:~$ </strong>sudo apt-get update
<strong>azhari@ubuntu:~$ </strong>sudo apt-get upgrade
<strong>azhari@ubuntu:~$ </strong>sudo apt-get install samba -y</pre>



<h3>2. Konfigurasi Samba</h3>



<p>Konfigurasi pertama yang harus dilakukan adalah membuat folder sebgai wadah untuk file-file yang akan kita bagi nantinya.</p>



<pre class="wp-block-preformatted"><strong>azhari@ubuntu:~$ </strong>mkdir /home/&lt;username&gt;/berbagi
<strong>azhari@ubuntu:~$ </strong>sudo chmod 777 /home/&lt;username&gt;/berbagi</pre>



<p>Selanjutnya, silahkan msuk ke direktori tadi dan buat sebuah file, contoh sharing.txt.</p>



<pre class="wp-block-preformatted"><strong>azhari@ubuntu:~$ </strong>cd /home/&lt;username&gt;/berbagi
<strong>azhari@ubuntu:~$ </strong>sudo nano sharing.txt</pre>



<p>Silahkan Ketikkan teks apa saja, contoh &#8220;ini adalah hasil file server&#8221; dan simpan.</p>



<p>Masuk ke file <strong>/etc/samba/smb.conf&nbsp;</strong>untuk konfigurasi file smb.conf.</p>



<pre class="wp-block-preformatted"><strong>azhari@ubuntu:~$&nbsp;</strong>sudo nano /etc/samba/smb.conf</pre>



<p>kemudian pada baris paling bawah silahkan ketikkan baris berikut.</p>



<pre class="wp-block-preformatted">[berbagi]
    comment = Samba File Server
    path = /home/&lt;username&gt;/berbagi
    read only = no
    browsable = yes
    guest ok = yes</pre>



<p>Simpan CTRL + X.</p>



<ul><li>[berbagi] : Merupakan nama yang akan menjadi alias atau display dari folder yang akan dibagikan</li><li>comment : Sebuah deskropsi untuk mempermudah saja.</li><li>path : path direktori yang ingin dibagikan.</li><li>read only : Merupakan izin untuk hanya bisa membaca file, tanpa bisa memodifiksinya</li><li>browsable : Yes, untuk menemtukan apakah folder bisa dicari atau tidak.</li><li>guest ok : Yes, masudnya mngizinan user guset untuk bisa mengakses folder tanpa perlu otentikasi</li></ul>



<p>Dan, langkah&nbsp; terakhir adalah rstart samba.</p>



<pre class="wp-block-preformatted"><strong>azhari@ubuntu:~$ </strong>sudo /etc/init.d/samba restart</pre>



<h3>3. Pengecekan</h3>



<p>Untuk pengcekan, sialhkan buka window explorer, kemudin pad search bar ketikan \\alamat_ip_dari_linux dan anda akan meliha folder berbgi tadi.</p>



<pre class="wp-block-preformatted">\\192.168.200.200</pre>



<figure class="wp-block-image"><img src="undefined" alt="" class="wp-image-168"/></figure>



<p>Sekin dan semoga bermanfaat.</p>
<!--kg-card-end: html-->
