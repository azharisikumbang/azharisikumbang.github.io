---
id: 63bc55848e39220548224483
title: "Konfigurasi FTP Server Dengan VSFTPD Di Ubuntu"
feature_image: /content/images/wordpress/2017/04/ftp-wordpress.jpg
description: "Konfigurasi FTP server dengan menggunakan vsftpd pada ubuntu sangatlah diperlukan dalam pembuatan website. FTP adalah singaktan dari File…"
date: 2017-04-09
tags: posts
slug: konfigurasi-ftp-server-dengan-vsftpd-di-ubuntu
layout: layouts/post.njk
---

<!--kg-card-begin: html--><p>Konfigurasi FTP server dengan menggunakan vsftpd pada ubuntu sangatlah diperlukan dalam pembuatan website. FTP adalah singaktan dari File Transfer Protokol<br />
<a name="more"></a>, yakni sebuah protokol yang menjembatani dua buah host untuk saling berbagi file atau file sharing.<br />
Nah, di ubuntu FTP Server yang sering digunakan adalah VSFTPD atauu Very Secure File Transfer Protocol Daemon. VSFTPD adalah software yang bekerja untuk sistem Linux termasuk di dalam nya ubuntu. VSFTPD sendiri didukung oleh IPv6 dan SSL dan memiliki liesnsi dibawa General Public License.</p>
<div style="clear: both; text-align: center;"><a style="margin-left: 1em; margin-right: 1em;" href="/content/images/wordpress/2017/04/ftp-wordpress.jpg"><img loading="lazy" src="/content/images/wordpress/2017/04/ftp-wordpress-300x200.jpg" width="320" height="213" border="0" /></a></div>
<p>Berikut langkah langkah konfigurasi ftp server dengan vsftpd ubuntu.</p>
<h3>Konfigurasi Dan Install VSFTPD</h3>
<p><b>Langkah 1 : </b>Sebagai persiapan awal, kita pelu memperbaharui sistem operasi ubuntu.</p>
<blockquote><p>sudo apt-get update</p></blockquote>
<p><b>Langkah 2 : </b>Install software VSFTPD nya</p>
<blockquote><p>sudo apt-get install vsftpd -y</p></blockquote>
<p><b>Langkah 3 : </b>Setelah install selesai , lakukan konfigurasi file /etc/vsftpd.cf</p>
<blockquote><p>sudo nano /etc/vsftpd.cf</p></blockquote>
<p><b>Langkah 4 : </b>Pastikan isian konfigurasi file vsftpd.cf seperti dibawah ini dan Simpan</p>
<blockquote><p>listen=yes<br />
anonymous_enable=NO<br />
local_enable=YES<br />
write_enable=YES<br />
chroot_local_user=YES</p></blockquote>
<div style="clear: both; text-align: center;"><a style="margin-left: 1em; margin-right: 1em;" href="/content/images/wordpress/2017/04/Untitled-3.png"><img loading="lazy" src="/content/images/wordpress/2017/04/Untitled-3-300x227.png" width="320" height="242" border="0" /></a></div>
<div style="clear: both; text-align: center;"><a style="margin-left: 1em; margin-right: 1em;" href="/content/images/wordpress/2017/04/Untitleds.png"><img loading="lazy" src="/content/images/wordpress/2017/04/Untitleds-300x224.png" width="320" height="238" border="0" /></a></div>
<p><b>Langkah 5 : </b>Tambah user baru sebagai user ftp contoh <i>ftp1 </i></p>
<blockquote><p>sudo adduser ftp1</p></blockquote>
<div style="clear: both; text-align: center;"><a style="margin-left: 1em; margin-right: 1em;" href="/content/images/wordpress/2017/04/Untitled-4.png"><img loading="lazy" src="/content/images/wordpress/2017/04/Untitled-4-300x224.png" width="320" height="238" border="0" /></a></div>
<p><b>Langkah 6 : </b>Setelah pembuatan user, selanjutnya pengaturan kepemilikan folder dari user ftp1 mejadi milirk root, agar tidak terjadi kesalahan upload.</p>
<blockquote><p>sudo chown root:root /home/ftp1</p></blockquote>
<p><b>Langkah 7 : </b>Membuat direktori upload untuk user ftp1 tadi, contoh direktori upload data website bernama<i> www</i></p>
<blockquote><p>sudo mkdir /home/ftp1/www</p></blockquote>
<p><b>Langkah 8 : </b>Membaut kepemilikan direktori folder <i>www </i>menjadi mulir user ftp1</p>
<blockquote><p>sudo chown ftp1:ftp1 /home/ftp1/www</p></blockquote>
<div style="clear: both; text-align: center;"><a style="margin-left: 1em; margin-right: 1em;" href="/content/images/wordpress/2017/04/awdaw.png"><img loading="lazy" src="/content/images/wordpress/2017/04/awdaw-300x225.png" width="320" height="240" border="0" /></a></div>
<p><b>Langkah 9</b> : Restart vsftpd anda</p>
<blockquote><p>sudo /etc/init.d/vsftpd restart<b><br />
</b></p></blockquote>
<p><b>Langkah 10 : </b>Untuk saat ini konfigurasi dan isntalasi telah selesai</p>
<h3>Pengecekan FTP Server Menggunakan WinsCP</h3>
<p>Disini saya menggunakan Winscp sebagai media pengetesan, anda juga bisa menggunakan aplikasi lain seperti FileZilla.Jika anda belum punya aplikasinya silahkan <a href="http://bit.ly/2nQ8uJZ" target="_blank" rel="noopener noreferrer">download</a>.<br />
Berikut langkah langkah pengetesannya.<br />
<b>Langkah 1 : </b>Masuk ke aplikasi Winscp<br />
<b>Langkah 2 : </b>Login menggunakan user ftp1 tadi dengan ip addres ubuntu anda dan port 21</p>
<div style="clear: both; text-align: center;"><a style="margin-left: 1em; margin-right: 1em;" href="/content/images/wordpress/2017/04/Untitled-5.png"><img loading="lazy" src="/content/images/wordpress/2017/04/Untitled-5-300x204.png" width="320" height="217" border="0" /></a></div>
<p><b>Langkah 3 : </b>Sekarang anda telah punya satu akun ftp dan folder www adalah milik anda sepenuhnya.</p>
<div style="clear: both; text-align: center;"><a style="margin-left: 1em; margin-right: 1em;" href="/content/images/wordpress/2017/04/Untitled-6.png"><img loading="lazy" src="/content/images/wordpress/2017/04/Untitled-6-300x193.png" width="320" height="206" border="0" /></a></div>
<p>Demikian lah dalam <b>Konfigurasi Server Dengan VSFTPD Di Ubuntu </b>semoga artikel kemi bisa ebrmanfaat bagi anda dan jangan lupa komentar dan bagikan.<br />
Terima kasihh</p>
<!--kg-card-end: html-->
