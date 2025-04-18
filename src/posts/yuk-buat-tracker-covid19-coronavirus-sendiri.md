---
id: 63bc55848e392205482244c7
title: "Yuk, Buat Tracker Covid19 Coronavirus Sendiri"
feature_image: /media/wordpress/2020/04/Screenshot_2020-04-04-Covid19-Coronavirus-Monitoring.png
description: "Assalamualaikum Warahmatullahi Wabarokatuh."
date: 2020-04-05
tags: posts
slug: yuk-buat-tracker-covid19-coronavirus-sendiri
layout: post.njk
---

<!--kg-card-begin: html-->
<p>Assalamualaikum Warahmatullahi Wabarokatuh.</p>



<p>Pandemi Covid19 atau lebih kita kenal dengan coronavirus mulai menyebar hampir keseluruh provinsi. Nah, kebutuhan akan informasi terupdate tentang corona ini sangat membludak, banyak orang butuh info terbaru.</p>



<p>Menyadari kebutuhan akan informasi ini, banyak teman teman di sosial media, utamanya grup facebook mencari sumber data nya atau teman teman developer kenal dengan sebutan API atau Application Programming Interfaces.</p>



<p>Nah, pada tutorial ini kita akan mencoba membuat sebuah web app untuk monitoring covid19 coronavirus. Sebagai hasilnya bisa dilihat di <a href="https://covid19.coretanit.com/">https://covid19.coretanit.com/</a></p>



<h2>Persiapan</h2>



<p>Dalam proses pembuatan aplikasi ini kita perlu menyiapkan beberapa hal berikut.</p>



<ul><li>Koneksi Internet untuk mengakses data source.</li><li>Browser (Firefox, Chrome, Opera, dan sebagainya)</li><li>Text Editor (Vim, Sublime Text, VSCode, Atom dan sebagainya)</li></ul>



<p>Sebagai tambahan untuk kepadatan informasi berikut datasource yang bisa dipakai untuk improve</p>



<ul><li>KawalCorona.com (<a href="https://api.kawalcorona.com">https://api.kawalcorona.com</a>) [yang akan kita pakai]</li><li>MathDroid (<a href="https://covid19.mathdro.id/api">https://covid19.mathdro.id/api</a>)</li><li>Johns Hopkins CSSE (<a href="https://github.com/CSSEGISandData/COVID-19">https://github.com/CSSEGISandData/COVID-19</a>)</li></ul>



<h2>Memulai</h2>



<p>Sebelum memulai coding bahasa pemrograman yang akan kita pakai adalah Javascript. Kenapa ? Agar coding yang akan kita buat bisa dipakai oleh orang lain hehe. Jadi diharapkan sudah punya basic bahasa JS. </p>



<p>Berikut Strukdur folder dan file yang akan kita buat.</p>



<pre class="wp-block-preformatted">- covid19-js
    script.js
    index.html</pre>



<p>Berikut penjelasan folder dan file diatas dan silahkan didownload beberapa file yang dibutuhkan.</p>



<p>Silahkan buat folder project <strong>covid19-js</strong> di text editor masing masing, dan silahkan disesuaikan seperti struktur folder dan file diatas (atau bisa disesuaikan)</p>



<h3>Membuat File index.html</h3>



<p>File <em>index.html</em> merupakan halaman utama yang akan kita iskan sebagai berikut.</p>



<pre class="wp-block-code"><code>&lt;!DOCTYPE html>
&lt;html lang="id">
    &lt;head>
        &lt;meta charset="UTF-8">
        &lt;title>Covid19 Corovirus Monitoring&lt;/title>
    &lt;/head>
    &lt;body>
        &lt;div id="app">&lt;/div>
        &lt;script src="./script.js">&lt;/script>
    &lt;/body>
&lt;/html></code></pre>



<p>Diatas adalah script HTML kita untuk halaman utama, berikut penjelasan dan kegunaan masing masing elemen.</p>



<pre class="wp-block-code"><code>&lt;div id="app">&lt;/div></code></pre>



<p>Elemen dengan <code>#app</code> merupakan elemen utama, dimana setiap hasil render kode akan ditampilkan. </p>



<pre class="wp-block-code"><code>&lt;script src="./js/script.js">&lt;/script></code></pre>



<p>Pada kode diatas tempat kita memanggil setiap script javascript kita, urutan harus sesuai dan <code>script.js</code> harus berada pada bagian terbawah agar tidak terjadi error code.</p>



<h2>Saatnya Membuat Script</h2>



<p>Tahap selanjutnya adalah silahkan ke file <code>src/script.js</code> dan buka pada text editor, dan pastikan halaman masi kosong. </p>



<p>Pertama kita defenisikan terlebih dahulu base url API kita yaitu di (<a href="https://api.kawalcorona.com/">https://api.kawalcorona.com/</a>)</p>



<pre class="wp-block-code"><code>const apiUrl = "https://api.kawalcorona.com";</code></pre>



<p>Selanjutnya kita defenisikan juga untuk function request data ke API yang telah kita buat diatas.</p>



<pre class="wp-block-code"><code>async function request(url){
    const response = await fetch(url);
    const json = await response.json();
    return await json;
}</code></pre>



<p>Pada function request diatas akan mengembalikan sebuah promise dan jika request berhasil akan mengembalikan data yang akan kita olah nantinya.</p>



<p>Sebagai percobaan kita coba untuk mendapatkan update seputar data dunia tentang covid di URL API utamanya (<code>apiUrl</code>) sebagai percobaan dan akan kita keluarkan di console browser. </p>



<p>Silahkan tambahkan kode berikut</p>



<pre class="wp-block-code"><code>(function(){
    request(apiUrl)
        .then(res => console.log(res))
})();</code></pre>



<p>Untuk melihat hasil silahkan buka folder project dibrowser dan arahkan ke file index.html. Kemudian buka console browser dengan cara klik kanan &#8211; pilih inspect element.</p>



<figure class="wp-block-image size-large"><img loading="lazy" width="1024" height="456" src="/content/images/wordpress/2020/03/image-2-1024x456.png" alt="" class="wp-image-1350" srcset="/content/images/wordpress/2020/03/image-2-1024x456.png 1024w, http://localhost:2368/content/images/wordpress/2020/03/image-2-300x134.png 300w, http://localhost:2368/content/images/wordpress/2020/03/image-2-768x342.png 768w, http://localhost:2368/content/images/wordpress/2020/03/image-2.png 1365w" sizes="(max-width: 1024px) 100vw, 1024px" /></figure>



<p>Nah, seperti yang kita liat bersama data yang diberikan berupa array dan tentu akan berbeda beda tiap endpoint yang kita tuju, atau bisa juga berupa object.</p>



<p>Setelah mengetahui struktur object, untuk bisa mengambil secara keseluruhan Javascript menyediakan sebuah built in function yang sangat powerful, atau dikenal dengan high-order function. Tidak lain <em>high-order function </em>javascript adalah <code>map</code> dipergunakna untuk mapping atau looping setiap data pada array. </p>



<p>Kembali ke file <code>script.js</code> dan untuk percobaan saja untuk melihat strukt dari data yang akan kita olah silahkan <span style="color:red">tambahkan</span> baris berikut.</p>



<pre class="wp-block-preformatted">(function(){
    request(apiUrl)
    .then(res =&gt; <span style="color:red">{
        res.map(data =&gt; console.log(data))
    }</span>)
})();</pre>



<p>Silahkan buka kembali console browser kalian, seharusnya akan tampil data berikut ini.</p>



<figure class="wp-block-image size-large"><img loading="lazy" width="939" height="602" src="/content/images/wordpress/2020/04/image.png" alt="" class="wp-image-1354" srcset="/content/images/wordpress/2020/04/image.png 939w, http://localhost:2368/content/images/wordpress/2020/04/image-300x192.png 300w, http://localhost:2368/content/images/wordpress/2020/04/image-768x492.png 768w" sizes="(max-width: 939px) 100vw, 939px" /></figure>



<p>Selanjutnya kita perlu mengetahui secara detail data apa saja yang akan kita tampilkan, jika ditinjau dari data hasil <em>looping</em> yang kita dapatkan dihasilkan object seperti berikut.</p>



<pre class="wp-block-code"><code>{
  "attributes": {
    "OBJECTID": 18,
    "Country_Region": "US",
    "Last_Update": 1586013989000,
    "Lat": 40,
    "Long_": -100,
    "Confirmed": 278942,
    "Deaths": 7174,
    "Recovered": 9920,
    "Active": 0
  }
}</code></pre>



<p>Data diatas merupakan data object, dimana kita membutuhkan <em>key</em> dari object untuk bisa menampilkan data.</p>



<p>Setelah mendapatkan data kita bisa menampilkannya ke browser, tentu setiap orang punya cara masing masing, sebagai contoh saya menampilkan dalam bentuk tabel.</p>



<p>Pertama tambahkan function untuk menampilkan table. Function ini akan otomatis menge-generate table dan tampilannya bisa disesuaikan. Tapi simplenya seperti berikut.</p>



<p>Masih di file <code>script.js</code> silahkan di tambahkan kode berikut tepat sebelum kode yang sudah ada , silahkan di custom.</p>



<pre class="wp-block-code"><code>function generateTable(data){
    let table, tableValue;

    table = document.createElement("table");
    table.setAttribute("border", "1");
    
    const tableCaptionWrapper = table.createCaption();
    tableCaptionWrapper.innerHTML = "Data Covid19 Dunia";

    let tableBody, tableBodyCell;

    data.map((d, index) => {
        tableBody = table.insertRow();
        tableBodyCell = tableBody.insertCell();
        tableBodyCell.innerHTML = (index + 1);

        tableBodyCell = tableBody.insertCell();
        tableBodyCell.innerHTML = d.attributes.Country_Region;

        tableBodyCell = tableBody.insertCell();
        tableBodyCell.innerHTML = d.attributes.Confirmed;

        tableBodyCell = tableBody.insertCell();
        tableBodyCell.innerHTML = d.attributes.Recovered;

        tableBodyCell = tableBody.insertCell();
        tableBodyCell.innerHTML = d.attributes.Deaths;
    });

    const tableHeader = table.createTHead();
    const tableRow = tableHeader.insertRow(0);

    const tableCellTitle = &#91;"No", "Negara", "Positif", "Sembuh", "Meninggal"];
    let tableCell;

    tableCellTitle.map(title => {
        tableCell = tableRow.insertCell();
        tableCell.innerHTML = title;
    });

    return table;
}</code></pre>



<p>Tentu jika disimpan dan dijalankan tidak akan kelihatan perubahan apa apa, perlu kita <span style="color:red">tambahkan kode</span> berikut masih <code>script.js</code></p>



<pre class="wp-block-preformatted">(function(){
      <span style="color:red">const app = document.getElementById("app");</span>
      request(apiUrl)
          .then(res =&gt; {
              <span style="color:red">app.innerHTML = generateTable(res).outerHTML</span>
          })
  })();</pre>



<p><code>app</code> merupakan elemen yang kita dapat dari dom id <code>#app</code> pada kode html kita. Elemen ini lah yang nantinya menjadi tempat kode html kiita dirender.</p>



<p>Silahkan disimpan dan seharusnya hasilnya sebagai berikut.</p>



<figure class="wp-block-image size-large"><img loading="lazy" width="1024" height="467" src="/content/images/wordpress/2020/04/image-2-1024x467.png" alt="" class="wp-image-1364" srcset="/content/images/wordpress/2020/04/image-2-1024x467.png 1024w, http://localhost:2368/content/images/wordpress/2020/04/image-2-300x137.png 300w, http://localhost:2368/content/images/wordpress/2020/04/image-2-768x351.png 768w, http://localhost:2368/content/images/wordpress/2020/04/image-2.png 1354w" sizes="(max-width: 1024px) 100vw, 1024px" /></figure>



<p>Pada tutorial ini kita cukup ambil dari satu endpoint API saja silahkan diimprove untuk endpoint lainnya, bisa dicek di <a href="https://kawalcorona.com/api">https://kawalcorona.com/api</a>. </p>



<p>Sebagai hasil jadi dari tutorial ini bisa di cek di <a href="https://covid19.coretanit.com/">https://covid19.coretanit.com/</a> dan source codenya di <a href="https://github.com/azharisikumbang/covid19-js">https://github.com/azharisikumbang/covid19-js</a></p>



<p>Sekian Terima Kasih.</p>



<p>Usefull Links :</p>



<ul><li><a href="https://api.kawalcorona.com">https://api.kawalcorona.com</a></li><li><a href="https://developer.mozilla.org/id/docs/Web/JavaScript/Reference/Global_Objects/Promise">https://developer.mozilla.org/id/docs/Web/JavaScript/Reference/Global_Objects/Promise</a></li><li><a href="https://www.w3schools.com/jsref/default.asp">https://www.w3schools.com/jsref/default.asp</a></li></ul>
<!--kg-card-end: html-->
