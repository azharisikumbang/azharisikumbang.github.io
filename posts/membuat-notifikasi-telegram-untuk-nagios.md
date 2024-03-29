---
id: 63bc55848e392205482244cb
title: "Membuat Notifikasi Telegram untuk Nagios"
feature_image: /content/images/wordpress/2020/07/MS-Paint-Microsoft-Paint-Online8.png
description: "Assalamualaikum Warahmatullahi Wabarokatuh"
date: 2020-07-27
tags: posts
slug: membuat-notifikasi-telegram-untuk-nagios
layout: layouts/post.njk
---

<!--kg-card-begin: html-->
<p>Assalamualaikum Warahmatullahi Wabarokatuh</p>



<p>Postingan ini akan membahas tentang bagaimana membuat notikasi ke telegram. Membuat notifikasi telegram untuk nagios sebenarnya sudah banyak ditulis oleh para pegiat teknologi ( silahkan cek google ). Tapi, kebanyakan <em>mengharuskan </em>kita untuk mengkonfigurasi di sisi nagiosnya, seperti membuat config di direktori <em>/etc/nagios</em> dan sebagianya.</p>



<p>Sebenarnya hal itu sah sah saja dan sangat dianjurkan, tapi ( bagi saya ) yang baru kenalan dengan nagios dan kurang faham dengan konfignya atau bahkan tidak mempunyai hak akses untuk melakukan konfigurasi secara langsung ke sisi server akan dipaksa putar otak agar mempermudah pekerjaan hehe.</p>



<p>Nah, hasil mutar mutar di google ternyata nagios mempunyai <em><a href="https://id.wikipedia.org/wiki/Common_Gateway_Interface">CGI Service</a></em>  hhhhmm sebuah angin segar.</p>



<div class="wp-block-image"><figure class="aligncenter size-large"><img loading="lazy" width="545" height="100" src="/content/images/wordpress/2020/07/d2422f6b.png" alt="" class="wp-image-1435" srcset="/content/images/wordpress/2020/07/d2422f6b.png 545w, http://localhost:2368/content/images/wordpress/2020/07/d2422f6b-300x55.png 300w" sizes="(max-width: 545px) 100vw, 545px" /></figure></div>



<p>Service ini memungkinkan kita untuk mendapatkan data dari nagios secara real time. Untuk lebih mendetail bisa dicek di <a href="https://labs.nagios.com/2014/06/19/exploring-the-new-json-cgis-in-nagios-core-4-0-7-part-1/">https://labs.nagios.com/2014/06/19/exploring-the-new-json-cgis-in-nagios-core-4-0-7-part-1/</a> .</p>



<h2 id="nagiosurl">Medapatkan Data Nagios</h2>



<p>Berdasarkan artikel tersebut disebutkan bahwa terdapat tiga buah <em>cgi </em>yang bisa kita eksplor, yaitu</p>



<ul><li> objectjson.cgi&nbsp; (object configuration)</li><li> statusjson.cgi&nbsp; (status information)</li><li> archivejson.cgi (historical logs) </li></ul>



<p>Selanjutnya untuk menggunakan service tersebut silahkan buka, <code>http://&lt;ip server&gt;/nagios/jsonquery.html</code>, maka akan muncul halaman <em><strong>Json Query Generator</strong></em> yang akan mempermudah kita untuk mendapatkan informasi.</p>



<div class="wp-block-image"><figure class="aligncenter size-large"><img loading="lazy" width="750" height="198" src="/content/images/wordpress/2020/07/image-2.png" alt="" class="wp-image-1437" srcset="/content/images/wordpress/2020/07/image-2.png 750w, http://localhost:2368/content/images/wordpress/2020/07/image-2-300x79.png 300w" sizes="(max-width: 750px) 100vw, 750px" /></figure></div>



<p>Silahkan pilih pilihan pada CGI, dan untuk mendapatkan status up dan down dari hosts kita cukup berfokus pada <strong>Status Json CGI</strong>, silahkan dipilih.</p>



<p>Selanjutnya halaman akan memberikan pilihan <em><strong>Query</strong></em>, silahkan pilih <strong><em>hostslist</em></strong><em> </em>untuk mendapatkan data hosts nagios kita.</p>



<p>Selanjutnya akan muncul banyak filter, silahkan disesuaikan dengan kebutuhan. Untuk filter yang saya gunakan sebagai berikut, silahkan disesuaikan atau sesuai kemauan. </p>



<p>Sebagai contoh ingin mengecek status dari host grup yang dihandle, masukkan <strong>host grup</strong> dan centang <strong>True</strong> pada <strong>show details</strong>, kemudian pilih <strong>Send Query</strong>.</p>



<div class="wp-block-image"><figure class="aligncenter size-large"><img loading="lazy" width="681" height="1024" src="/content/images/wordpress/2020/07/MS-Paint-Microsoft-Paint-Online1-681x1024.png" alt="" class="wp-image-1440" srcset="/content/images/wordpress/2020/07/MS-Paint-Microsoft-Paint-Online1-681x1024.png 681w, http://localhost:2368/content/images/wordpress/2020/07/MS-Paint-Microsoft-Paint-Online1-200x300.png 200w, http://localhost:2368/content/images/wordpress/2020/07/MS-Paint-Microsoft-Paint-Online1-768x1154.png 768w, http://localhost:2368/content/images/wordpress/2020/07/MS-Paint-Microsoft-Paint-Online1.png 785w" sizes="(max-width: 681px) 100vw, 681px" /></figure></div>



<p>Kemudian, server akan memberikan response kepada kita berupa data data dari hosts, jangan terlalu dipusingkan untuk hasil yang ditampilkan cukup berfokus pada dua hal, yaitu status dan <strong>URL </strong>yang dihasilkan.</p>



<p>Untuk status dari host diwakilkan dengan angka yakni, <code>2</code> untuk <code>Ok</code> sisanya dianggap bermasalah.</p>



<p>Sedangkan untuk URL yang dihasilkan silahkan dicopy dan disimpan karena akan kita gunakan lagi, <em><code>http://&lt;ip server>/nagios/cgi-bin/statusjson.cgi?query=hostlist&amp;details=true&amp;hostgroup=sesuainamagrup</code></em></p>



<div class="wp-block-image"><figure class="aligncenter size-large"><img loading="lazy" width="746" height="164" src="/content/images/wordpress/2020/07/MS-Paint-Microsoft-Paint-Online2.png" alt="" class="wp-image-1441" srcset="/content/images/wordpress/2020/07/MS-Paint-Microsoft-Paint-Online2.png 746w, http://localhost:2368/content/images/wordpress/2020/07/MS-Paint-Microsoft-Paint-Online2-300x66.png 300w" sizes="(max-width: 746px) 100vw, 746px" /></figure></div>



<p></p>



<h2 id="csvfile">Membuat Daftar Host / Site</h2>



<p>Jika kita perhatikan data json hasil query kita pada <em>Json Query Generator</em> pada bagian hostslist, result json kita mempunyai <code>key</code> sesuai nama host yang terdaftar di nagios. Hal ini membuat kita sedikit kesulitan dalam memastikan <code>key</code> yang akan kita gunakan untuk mendapatkan data, yaa karena tiap host beda beda. </p>



<p>Selain untuk mengatasi hal diatas, pendaftaran host ini juga berguna jikalau kita hanya memerlukan status dari beberapa site saja, seperti contoh dari total 100 hosts, kita hanya perlu 10 saja, karena akan tidak efektif lagi jika kita mendapatkan data dari host yang tidak kita handle.</p>



<p>Berdasarkan script yang dibuat, host ini di daftarkan di file <code>locations.csv</code> dengan pola</p>



<pre class="wp-block-code"><code>NAMA LOKASI, IP DEVICE</code></pre>



<p>Contohnya, *<em>pastikan tidak ada line kosong pada bari paling bawah</em></p>


<p>https://gist.github.com/azharisikumbang/2ee74e5ce37ddc04ff039d4320166234</p>



<h2>Membuat Bot Telegram</h2>



<p>Silahkan login ke akun telegram masing masing dan untuk membuat bot bisa dengan menggunakan <code>botFather</code> telegram di <code><a href="https://t.me/botfather">https://t.me/botfather</a></code>. </p>



<ul><li>Pada botFather, ketikkan <code>/start</code> dan kemudian <code>/newbot</code></li><li>Selanjutnya, masukkan nama bot ( misal, saya pake telnagiosbot )</li><li>Setelah nama, masukkan username dengan embel-embel <code>bot</code> diujung username ( misal, telnagiosbot )</li><li>Jika muncul pesan balasan seperti berikut, berarti kita berhasil membuat bot kita sendiri</li></ul>



<div class="wp-block-image"><figure class="aligncenter size-large"><img loading="lazy" width="695" height="311" src="/content/images/wordpress/2020/07/MS-Paint-Microsoft-Paint-Online3.png" alt="" class="wp-image-1453" srcset="/content/images/wordpress/2020/07/MS-Paint-Microsoft-Paint-Online3.png 695w, http://localhost:2368/content/images/wordpress/2020/07/MS-Paint-Microsoft-Paint-Online3-300x134.png 300w" sizes="(max-width: 695px) 100vw, 695px" /></figure></div>



<ul><li>Silahkan di copy dan disimpan <code id="bottoken">token</code> dari si telegram bot </li><li>Kemudian silahkan <code>/start</code> dan kirim pesan sembarang ke bot kita, dengan masuk ke <code><a href="https://t.me/usernamebotmasingmasing">https://t.me/<strong>usernamebotmasingmasing</strong></a></code></li></ul>



<div class="wp-block-image"><figure class="aligncenter size-large"><img loading="lazy" width="690" height="361" src="/content/images/wordpress/2020/07/image-3.png" alt="" class="wp-image-1457" srcset="/content/images/wordpress/2020/07/image-3.png 690w, http://localhost:2368/content/images/wordpress/2020/07/image-3-300x157.png 300w" sizes="(max-width: 690px) 100vw, 690px" /></figure></div>



<ul><li>Selanjutnya adalah mendapatkan <code id="chatid">telegram chat id</code> atau <code>message id</code>, silahkan masuk ke <code><a href="https://api.telegram.org/botTOKEN/getUpdates">https://api.telegram.org/botTOKEN/getUpdates</a></code> ( * ganti kata TOKEN dengan token masing &#8211; masing )</li></ul>



<p></p>



<figure class="wp-block-image size-large"><img loading="lazy" width="1024" height="565" src="/content/images/wordpress/2020/07/MS-Paint-Microsoft-Paint-Online51-1024x565.png" alt="" class="wp-image-1475" srcset="/content/images/wordpress/2020/07/MS-Paint-Microsoft-Paint-Online51-1024x565.png 1024w, http://localhost:2368/content/images/wordpress/2020/07/MS-Paint-Microsoft-Paint-Online51-300x165.png 300w, http://localhost:2368/content/images/wordpress/2020/07/MS-Paint-Microsoft-Paint-Online51-768x424.png 768w, http://localhost:2368/content/images/wordpress/2020/07/MS-Paint-Microsoft-Paint-Online51.png 1028w" sizes="(max-width: 1024px) 100vw, 1024px" /></figure>



<ul><li><strong>chat</strong> &#8211; <strong>id</strong> adalah <code>message_id</code> kita ( kotak biru ) , silahkan di copy dan disimpan</li><li>Jika tidak menghasilkan seperti gambar diatas, silahkan dikirim ulang pesan ke bot dan diakses lagi</li></ul>



<h2>Mari Koding</h2>



<p>Untuk script telah diupload di gist github, script ditulis memakai PHP 7.2 ( update : dan tersedia juga dalam python3 di <a href="https://gist.github.com/azharisikumbang/ec1fc6db9ba9d51be16d52d75d57eb91">https://gist.github.com/azharisikumbang/ec1fc6db9ba9d51be16d52d75d57eb91</a>)</p>



<p>Beberapa parameter berikut silahkan disesuaikan masing masing</p>



<ul><li><a href="#csvfile">$CSV_FILE</a>, disikan dengan lokasi file csv yang telah kita buat tadi</li><li><a href="#messageid">$TELEGRAM_CHAT_ID</a>, disesuaikan dengan telegram chat id</li><li><a href="#bottoken">$TELEGRAM_TOKEN</a>, sesuai bot token masing masing</li><li>$NAGIOS_USERNAME</li><li>$NAGIOS_PASSWORD</li><li>$<a href="#nagiosurl">NAGIOS_URL</a>, sesuai yang telah ktia generate diawal</li></ul>


<p>https://gist.github.com/azharisikumbang/b7c3f78e0fc5b967a993c96779a6a062</p>



<h2>Yok dicoba!</h2>



<p>Untuk melakukan pengujian awal, kita menggunakan komputer masing masing, dan pastikan telah terinstall PHP (update: atau python3).</p>



<p>Berikut hasil uji coba.</p>



<pre class="wp-block-code"><code>$ php telenagios.php</code></pre>



<div class="wp-block-image"><figure class="aligncenter size-large"><img src="/content/images/wordpress/2020/07/MS-Paint-Microsoft-Paint-Online7-507x1024.png" alt="" class="wp-image-1468" width="320px" srcset="/content/images/wordpress/2020/07/MS-Paint-Microsoft-Paint-Online7-507x1024.png 507w, http://localhost:2368/content/images/wordpress/2020/07/MS-Paint-Microsoft-Paint-Online7-149x300.png 149w, http://localhost:2368/content/images/wordpress/2020/07/MS-Paint-Microsoft-Paint-Online7.png 599w" sizes="(max-width: 507px) 100vw, 507px" /></figure></div>



<p>Yeayy, notifikasi telegram sederhana berhasil dibuat, tapi.. masih banyak kekurangan,, untuk selanjutnya akan diupdate berupa pemberian notifikasi secara otomatis dan berkala ( misal per satu jam ) ke hp, atau penambahan atribute lain seperti kontak client di lokasi perangkat kita berada.. </p>



<p>Sekian,</p>
<!--kg-card-end: html-->
