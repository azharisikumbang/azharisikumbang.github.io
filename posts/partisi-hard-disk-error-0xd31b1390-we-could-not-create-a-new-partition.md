---
id: 63bc55848e392205482244aa
title: "Partisi Hard Disk Error [0xd31b1390] : \"We could not create a new partition\""
feature_image: /content/images/wordpress/2019/11/image1-1.jpg
description: "Partisi Hard Disk Error [0xd31b1390] : “We could not create a new partition” ini saya temukan saat instalasi Windows 10 pada step membagi…"
date: 2019-11-19
tags: posts
slug: partisi-hard-disk-error-0xd31b1390-we-could-not-create-a-new-partition
layout: layouts/post.njk
---

<!--kg-card-begin: html--><p>Partisi Hard Disk Error [0xd31b1390] : &#8220;We could not create a new partition&#8221; ini saya temukan saat instalasi Windows 10 pada step membagi partisi. Sebelumnya ada 3 buah partisi karena kebutuhan instalasi dan owner lapop minta semua hardisk di clean saja, maka saya hapus seluruh partisi tapi malangnya nasib saya bertemu dengan error dengan kode <strong>0xd31b1390.</strong></p>
<p>Pesan error yang diterima yaitu &#8220;We could not create a new partition&#8221; atau si windwos tidak bisa membuat partisi baru untuk hardisk kita.</p>
<p>Setelah bantuan browsing internet berikut solusi yang saya temukan, yaitu dengan <strong>Disk Part Windows.</strong></p>
<h3>1. Masuk Ke Windows Repair</h3>
<p>Cara masuk ke windows repair akan ditemukan saat instalasi windows pada sisi pojok kiri bawah. <strong>&#8220;repair tour computer&#8221;</strong></p>
<p><img loading="lazy" class="size-medium wp-image-671" src="/content/images/wordpress/2019/11/install-1-1-300x222.png" alt="Partisi Hard Disk Error [0xd31b1390] : “We could not create a new partition - images 1" width="300" height="222" srcset="/content/images/wordpress/2019/11/install-1-1-300x222.png 300w, http://localhost:2368/content/images/wordpress/2019/11/install-1-1.png 509w" sizes="(max-width: 300px) 100vw, 300px" /></p>
<h3>2. Masuk Ke Command Prompt</h3>
<p>Untuk masuk ke <strong>Disk Part</strong> anda perlu masuk terlebih dahulu ke <strong>Command Prompt. </strong>Di windows repair command prompt ada pada menu <strong>Troubleshoots </strong>&#8211; <strong>Advanced Options </strong>&#8211; <strong>Command Prompt.</strong></p>
<h3>3. Masuk Ke Disk Part</h3>
<p>Setelah jendela cmd atau command prompt muncul, kemudian masuk ke Disk Part berikut caranya,</p>
<pre>DISKPART</pre>
<p>Maka akan masuk ke prompt <strong>DISKPART</strong></p>
<p><img loading="lazy" class="alignnone size-medium wp-image-670" src="/content/images/wordpress/2019/11/install-10-300x150.png" alt="Partisi Hard Disk Error [0xd31b1390] : “We could not create a new partition - images 2" width="300" height="150" srcset="/content/images/wordpress/2019/11/install-10-300x150.png 300w, http://localhost:2368/content/images/wordpress/2019/11/install-10.png 672w" sizes="(max-width: 300px) 100vw, 300px" /></p>
<p>Selanjutnya adalah melihat isi disk dari hard disk kita, peritahnya berikut</p>
<pre>DISK PART&gt; list disk</pre>
<p>Jika kita perhatikan gambar diatas kita akan menjumpai ada <strong>Disk 0, </strong>artinya di laptop atau komputer kita hanya terdapat 1 disk saja.</p>
<p><em>(*penulisan artikel dilakukan bukan saat booting repair windows, melainkan melalui cmd pada windows yang biasa dipakai, sehingga hanya menampilkan 1 disk saja, jika saat repair terdapat flashdisk tercolok sebagai media instalasi, seharusnya ada dua disk tercantum)</em></p>
<p>Selanjutnya adalah memilih harddisk, perintahnya berikut.</p>
<pre>DISK PART&gt; select disk 0</pre>
<p>Jika terdapat dua disk pastikan memilih disk yang tepat, silahkan cek berdasarkan kapasitas disk, pada kasus ini disk saya adalah <strong>disk 0.</strong></p>
<p>Kemudian <strong>clean </strong>atau membersihkan seluruh isi disk, silahkan ketikkan perintah berikut.</p>
<pre>DISK PART&gt; clean</pre>
<p>Setelah membersihkan, lanjut dengan membuat satu partisi saja, tapi terserah jika ingin membuat lebih dari satu silahkan. Tapi , untuk mempersingkat waktu saya sarankan satu saja, untuk selebihnya anda bisa buat saat step partisi disk di instalasi nanti.</p>
<pre>DISK PART&gt; create partition primary
DISK PART&gt; active
DISK PART&gt; format fs=ntfs quick
DISK PART&gt; assign</pre>
<p>Seharusnya dengan prosedur demikian sudah tidak ditemukan lagi error yang sama. Untuk menlanjukan instalasi silahkan keluar dari command prommpt dan masuk ke instalasi seperti biasa.</p>
<p>Terima Kasih.</p>
<!--kg-card-end: html-->
