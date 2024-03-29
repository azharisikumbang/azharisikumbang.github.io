---
id: 63bc55848e392205482244d2
title: "Subnetting: Cara Cepat Menghitung IP Subnet"
feature_image: /content/images/wordpress/2020/12/Black-and-Red-Geometric-Technology-Keynote-Presentation.png
description: "Assalamualaikum."
date: 2020-12-15
tags: posts
slug: subnetting-cara-cepat-menghitung-subnet
layout: layouts/post.njk
---

<!--kg-card-begin: html-->
<p>Assalamualaikum.</p>



<p>Sekian lama tidak menulis tentang jaringan (<em>daku sudah lupa</em>) dan kebetulan lagi bahas binary di kampus, kali ini kita akan kembali membahas jaringan dan yang paling fundamental dan membosankan, yaitu <em>subnetting</em>.</p>



<p>Sedikit teori, subnetting merupakan metode yang digunakan untuk membagi-bagi jaringan kebagian bagian yang lebih kecil, jadi untuk manajemen lebih mudah dan terkontrol. </p>



<p>Baca : <a href="https://coretanit.com/konsep-subneting-secara-singkat/" target="_blank" rel="noreferrer noopener">Konsep Subneting Secara Singkat</a></p>



<p>Nah, dahulu kala <em>sebelum negara api menyerang</em>, biasanya cara subnetting dengan menggunakan bantuan CIDR ( <em>Classless Inter-Domain Routing</em> ) dan mengkonversikannya ke binary, dan jujur itu sangat melelahkan, tapi jangan khawatir dengan metode sakti ini kita tidak akan menyentuh binary, jadi tidak ada lagi angka 0101010 itu.</p>



<p>Tapi, tunggu dulu mungkin binary kita lupakan sedangkan CIDR tetap kita gunakan dan tetap pahami juga tentang kelas kelas IP, kelas A, kelas B dan kelas C, walaupun tidak akan secara spesifik disinggung di tutorial ini tetapi itu sangat diperlukan.</p>



<h2>Persiapan</h2>



<p>Sebelum mulai, perlu beberapa byte memori di otak kita untuk mengingat beberapa hal berikut.</p>



<h3>Tabel Bantu</h3>



<p>Tanpa mengurangi rasa hormat, izinkan saya menyuruh anda untuk mengetahui tabel berikut.</p>



<figure class="wp-block-table is-style-stripes"><table><tbody><tr><td class="has-text-align-center" data-align="center">Prefiks</td><td class="has-text-align-center" data-align="center">Kunci</td></tr><tr><td class="has-text-align-center" data-align="center">/32</td><td class="has-text-align-center" data-align="center">1</td></tr><tr><td class="has-text-align-center" data-align="center">/31</td><td class="has-text-align-center" data-align="center">2</td></tr><tr><td class="has-text-align-center" data-align="center">/30</td><td class="has-text-align-center" data-align="center">4</td></tr><tr><td class="has-text-align-center" data-align="center">/29</td><td class="has-text-align-center" data-align="center">8</td></tr><tr><td class="has-text-align-center" data-align="center">/28</td><td class="has-text-align-center" data-align="center">16</td></tr><tr><td class="has-text-align-center" data-align="center">/27</td><td class="has-text-align-center" data-align="center">32</td></tr><tr><td class="has-text-align-center" data-align="center">/26</td><td class="has-text-align-center" data-align="center">64</td></tr><tr><td class="has-text-align-center" data-align="center">/25</td><td class="has-text-align-center" data-align="center">128</td></tr></tbody></table></figure>



<p><em>Si Joni : Mudah apanya ngapal banyak gitu?</em></p>



<p>(<em>Protes mulu</em>). Memang banyak, tapi agar tidak menjadi kebingunan ini tabel darimana dan kenapa perlu dipahami. Jadi, kolom di sebelah kiri selanjutnya akan ita sebut prefiks, apa itu ? ( google it) . Sedangkan table sebelah kanan sebenarnya adalah representasi jumlah ip dari sebuah subnet yang selanjutnya akan kita gunkanan sebagai kunci.</p>



<p><em>Sedikit informasi, setelah berdebat dengan si Joni, akhirnya kami memutuskan untuk mengurangi tabel menjadi tiga baris saja agar mudah diingat. </em></p>



<figure class="wp-block-table is-style-stripes"><table><tbody><tr><td class="has-text-align-center" data-align="center">/30</td><td class="has-text-align-center" data-align="center">4</td></tr><tr><td class="has-text-align-center" data-align="center">/28</td><td class="has-text-align-center" data-align="center">16</td></tr><tr><td class="has-text-align-center" data-align="center">/26</td><td class="has-text-align-center" data-align="center">64</td></tr></tbody></table></figure>



<p>Sekarang tinggal tiga baris, jadi akan lebih mudah untuk mengingat kunci. Tapi bagaimana untuk mengingat sisanya? Mudah saja, ambil satu kunci terdekat, jika prefiks angka nya lebih kecil maka kunci bagi 2 ( kunci / 2) dan jika lebih besar maka kalikan 2 ( kunci * 2). Misal, jika /28 kunci nya adalah 16, maka /29 kunci nya adalah 16 / 2 = 8</p>



<h3>Oktet </h3>



<p>Seperti kita ketahui ip address memiliki panjang 32 bit, dan dibagian ke dalam 4 oktet masing masing 8 bit ( 1 byte ).</p>



<pre class="wp-block-code"><code><span class="has-inline-color has-vivid-red-color">192</span>.<span class="has-inline-color has-luminous-vivid-amber-color">168</span>.<span class="has-inline-color has-vivid-green-cyan-color">100</span>.<span class="has-inline-color has-vivid-cyan-blue-color">1</span> ( decimal format )
<span class="has-inline-color has-vivid-red-color">11000000</span>.<span class="has-inline-color has-luminous-vivid-amber-color">10101000</span>.<span class="has-inline-color has-vivid-green-cyan-color">01100100</span>.<span class="has-inline-color has-vivid-cyan-blue-color">00000001</span> ( binary format )
    <span class="has-inline-color has-vivid-red-color">|</span>       <span class="has-inline-color has-luminous-vivid-amber-color">|</span>        <span class="has-inline-color has-vivid-green-cyan-color">|</span>        <span class="has-inline-color has-vivid-cyan-blue-color">|</span>
    <span class="has-inline-color has-vivid-red-color">|</span>       <span class="has-inline-color has-luminous-vivid-amber-color">|</span>        <span class="has-inline-color has-vivid-green-cyan-color">|</span>        <span class="has-inline-color has-vivid-cyan-blue-color">|</span>
 <span class="has-inline-color has-vivid-red-color">oktet4</span>   <span class="has-inline-color has-luminous-vivid-amber-color">oktet3   </span><span class="has-inline-color has-vivid-green-cyan-color">oktet2</span>   <span class="has-inline-color has-vivid-cyan-blue-color">oktet1</span>
</code></pre>



<p>Karya sederhana di atas akan selanjutnya menjadi patokan saat saat melakukan pengambilan oktet, kenapa? Karena ada beberapa versi dimana oktet pertama dimulai dari kiri seperti saat kita membaca bilangan desimal.</p>



<p>Setelah mengetahui oktet, ada beberapa aturan sederhana yang perlu diketahui:</p>



<ul><li>jika prefiks antara /1 &#8211; /8, maka kita beroperasi di <span class="has-inline-color has-vivid-red-color">oktet4</span></li><li>jika prefiks antara /9 &#8211; /16, maka kita beroperasi di <span class="has-inline-color has-luminous-vivid-amber-color">oktet3</span></li><li>jika prefiks antara /17 &#8211; /24, maka kita beroperasi di <span class="has-inline-color has-vivid-green-cyan-color">oktet2</span></li><li>jika prefiks antara /25 &#8211; /32, maka kita beroperasi di <span class="has-inline-color has-vivid-cyan-blue-color">oktet1</span></li></ul>



<p><em><s>*kok mirip simbol lg(b)t</s></em></p>



<h2>Let&#8217;s Go</h2>



<p>Setelah mengetahui hal di atas, mari kita selesaikan satu beberapa contoh kasus. </p>



<pre class="wp-block-code"><code>Misal IP =&gt; 192.168.88.99/26

Hitung : 
- Network 
- Broadcast
- Netmask
- Range Ip
- Jumlah Host</code></pre>



<h4>Mencari Kunci</h4>



<p>Langkah pertama kita butuh mengintip kembali ke table di atas, saya tau anda tidak ingat,<s> karena saya juga</s>, bahwa <code>prefiks /26</code> mempunya angka <code>kunci </code>sekaligus <code>jumlah ip</code> adalah <code>64</code>. <em>( *silahkan diingat )</em></p>



<pre class="wp-block-code"><code>Kunci =&gt; 64 ( prefiks /26 )</code></pre>



<h4>Mencari Letak Oktet</h4>



<p>Masih melibatkan prefiks, untuk mencari letak oktet silahkan cek lagi aturan oktet diatas, dimana prefiks /26 berada pada aturan antara /25 &#8211; /32 yang artinya berada pada oktet ke 1 (oktet1), yang artinya kita akan beroperasi di oktet ini.</p>



<p>Setelah mengetahui posisi oktet, kita perlu melihat lagi ke ip yang diberikan, dimana oktet ke 1 memiliki angka nya adalah <code>99</code>.</p>



<pre class="wp-block-code"><code>Ip : 192.168.88.99/26

angka operasi =&gt; 99 (oktet1)</code></pre>



<h4>Network</h4>



<p>Selanjutnya kita perlu mengetahui ip kita berada pada posisi subnet ke berapa pada kemungkinan subnet yang akan dibentuk, karena sesuai tujuan subneting membentuk jaringan menjadi bentuk yang lebih kecil.</p>



<p>Untuk mengetahui posisinya, kita memerlukakan <code>angka di oktet</code> yang telah kita dapatkan sebelumnya yaitu <code>99</code> kemudian <code>membagikannya </code>dengan <code>angka kunci</code>, yaitu <code>64</code>.</p>



<pre class="wp-block-code"><code>angkat oktet / angka kunci =&gt; 99 / 64 = 1,<em>xxx</em></code></pre>



<p>Dari hasil diatas kita tidak memerlukan angka dibelakang koma, kita hanya perlu angka di depan koma, silahkan diingat.</p>



<p>Untuk mengetahui <code>ip network</code> kita, angka hasil tadi angka hasil tadi dikalikan lagi dengan angka kunci.</p>



<pre class="wp-block-code"><code>1 * 64 = <span class="has-inline-color has-vivid-red-color">64</span>

Ip network didapatkan dengan menukar oktet yang menjadi operasi dengan angka hasil diatas


Ip : 192.168.88.<span class="has-inline-color has-vivid-red-color">99</span>/26
Network : 192.168.88.<span class="has-inline-color has-vivid-red-color">64</span>/26
 </code></pre>



<p><em>Sekedar tambahan, untuk mengetahui banyak nya subnet yang mungkin bisa dibuat dengan membagikan 256 ( total ip ) dengan angka kunci untuk oktet1, karena untuk oktet selanjutnya ada sedikit tambahan</em></p>



<h4>Broadcast</h4>



<p>Seperti teorinya ip broadcast merupakan ip terakhir dari sebuah subnet, karena jumlah ip pada prefiks /26 adalah 64, maka broadcast seharusnya adalah</p>



<pre class="wp-block-code"><code>64 + 64 - 1 = <span class="has-inline-color has-vivid-red-color">127</span>

Ip : 192.168.88.99/26
Network : 192.168.88.64/26
Broadcast : 192.168.88.<span class="has-inline-color has-vivid-red-color">127</span>/26

<em>*kenapa dikurang 1 karena perhitungan ip dimulai dari 0, dan jika tidak ditambahkan maka angka yang didapatkan adalah ip network dari subnet selanjutnya</em> (<em>jika tidak percaya coba saja pasti nggak konek</em>)</code></pre>



<h4>Netmask</h4>



<p>Untuk mengetahui ip netmask mudah saja, sesuai teori seluruh bit dijadikan 1, kecuali host id atau dibelakang prefiks, tapi sesuai janji di atas tidak dalam perhitungan kita akan membuang jauh jauh biner, maka langsung saja, ubah seluruh ip menjadi <code>255</code>, kecuali oktet yang dioperasikan ( sampe ke belakang, jika ada )</p>



<pre class="wp-block-code"><code>Ip : 192.168.88.99/26
Network : 192.168.88.64/26
Broadcast : Network : 192.168.88.127/26
Netmask : 255.255.255.<span class="has-inline-color has-vivid-red-color">xxx</span></code></pre>



<p>Nah, untuk xxx kita isi dengan apa? Mudah saja, cukup dengan <em>mengurangkan </em><code>256 </code>( jumlah ip ) dengan <code>angka kunci</code></p>



<pre class="wp-block-code"><code>256 - 64 = <span class="has-inline-color has-vivid-red-color">192</span>

Ip : 192.168.88.99/26
Network : 192.168.88.64/26
Broadcast : Network : 192.168.88.127/26
Netmask : 255.255.255.<span class="has-inline-color has-vivid-red-color">192</span></code></pre>



<h4>Range Ip</h4>



<p>Untuk mencari ip yang mungkin digunakan oleh client ataupun gateway, mudah saja, range ip yaitu <code>seluruh angka diantara</code> <code>ip network</code> dan <code>ip broadcacst</code></p>



<pre class="wp-block-code"><code>Ip : 192.168.88.99/26
Network : 192.168.88.64/26
Broadcast : 192.168.88.127/26
Netmask : 255.255.255.192
Range Ip : 192.168.88.65/26
 - 192.168.88.126/26</code></pre>



<h4>Jumlah Host</h4>



<p>Yang ini favorit saya, caranya dengan mengurangkan angka kunci dengan 2 atau menghitung range ip tadi, silahkan dipilih mana paling mudah :v</p>



<pre class="wp-block-code"><code>62 - 2 = 62

<em>*kenapa dikurang 2, yaa simpel saja karena 2 ip telah dipakai oleh network dan broadcast</em>

Ip : 192.168.88.99/26
Network : 192.168.88.64/26
Broadcast : 192.168.88.127/26
Netmask : 255.255.255.192
Range Ip : 192.168.88.65/26
 - 192.168.88.126/26
Jumlah Host : 62 </code></pre>



<p>Setelah semua nya didapatkan, kita perlu&#8230;.</p>



<h2>Memvalidasi Hasil</h2>



<p>Untuk mengetahui hasil subneting kita betul sebenarnya mudah saja, langsung di test saja, jika konek berarti Ok jika tidak berarti yaa nggak.. Atau cara paling mudah lewat ip calculator, cepat, akurat, dan ga perlu ngapal tabel bantu.. hhmm..</p>



<div class="wp-block-image"><figure class="aligncenter size-large is-resized mx-auto"><img loading="lazy" src="/content/images/wordpress/2020/12/image.png" alt="Subnetting - Cara Cepat Megnhitung Subnet  -  Ip Calculator Result by jodies.de/ipcalc" class="wp-image-1620" width="574" height="281" srcset="/content/images/wordpress/2020/12/image.png 757w, http://localhost:2368/content/images/wordpress/2020/12/image-300x147.png 300w" sizes="(max-width: 574px) 100vw, 574px" /></figure></div>



<p>Dari hasilnya sih valid.. Gimana? Mudahkan (<em> pake ip calculator</em> ) ? Makanya, next nya pake ip calculator saja..</p>



<p> Mungkin cukup sekian, semoga bermanfaat dan semoga bisa membantu dalam mengurangi beban pikiran.. Terima kasih..</p>



<p><em>*Eittsss.. bentar, itukan pake IP Kelas C, kalo IP Kelas B sama kelas A gimana? Silahkan ditunggu kapan gabut lagi..</em></p>
<!--kg-card-end: html-->
