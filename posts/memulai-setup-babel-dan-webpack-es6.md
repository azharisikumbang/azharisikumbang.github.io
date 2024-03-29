---
id: 63bc55848e392205482244b1
title: "Memulai Setup Babel dan Webpack ES6"
feature_image: /content/images/wordpress/2019/11/babel-webpack.jpg
description: "Perkembangan dunia web development memang begitu pesat akhir akhir ini. Kemunculan node js dan ecmascript2015 menjadi faktor utama dibalik…"
date: 2019-11-24
tags: posts
slug: memulai-setup-babel-dan-webpack-es6
layout: layouts/post.njk
---

<!--kg-card-begin: html-->
<p>Perkembangan dunia web development memang begitu pesat akhir akhir ini. Kemunculan node js dan ecmascript2015 menjadi faktor utama dibalik perkembangan javascript. Banyak sekali kilauan teknologi baru bermuncul di web development.</p>



<p>Beberapa diantaranya adalah Babel dan Webpack. Kedua istilah ini biasanya dipakai untuk mengoptimasi kode-kode javascript kita agar lebih efisien untuk <em>production</em> nantinya.</p>



<p>Eh tunggu dulu, udah kenal babel belum? Atau webpack? Sedikit saya jelaskan, Babel sendiri merupakan sebuah kompiler untuk javascript untuk versi Ecmascript 2015+ atau es6 keatas agar bisa dijalankan di browser yang belum menyesuaikan dengan standart Es6 ini. Kata lainnya browsernya belum update.</p>



<p>Baca juga :  <a href="https://coretanit.com/berkenalan-dengan-ecmascript-6/">Berkenalan Dengan EcmaScript 6</a></p>



<p>Atau sengaja saya kutip dari <a href="https://en.wikipedia.org/wiki/Babel_(compiler)">wikipedia</a>, &#8220;Babel adalah kompiler JavaScript sumber terbuka dan gratis yang terutama digunakan untuk mengubah kode ECMAScript 2015+ menjadi versi JavaScript yang kompatibel dengan yang dapat dijalankan oleh mesin JavaScript yang lebih lama&#8221;.</p>



<p>Lalu apa lagi Webpack?</p>



<p>Kita <em>dongeng</em> sedikit, mungkin para developer javascript sedikit kesal jika saat development melihat banyak sekali file js yang berandakan. Belum lagi waktu upload ke production, syukur-syukur internet cepat, kalau lelet. Pusing sendiri.. Udah file banyak, internet lemot.. naik naikin emosi.. eh kok curhat.. </p>



<p>Nah, dari permasalahan ini lah kemudian webpack data memberi solusi.. Alhamdulillah&#8230; Jadi si webpack akan <em>membundle</em> seluruh kode javascript (dan file lainnya) kedalam satu file saja yang menjadi file productionnya. </p>



<p>Jadi jangan heran waktu <em>view source </em>kode web, kita kadang berjumpa hanya ada satu file javascript saja padahal fitur nya banyak.</p>



<p>Secara teoritis gini, Webpack merupakan sebuah module bundler berbasis javascript yang difungsikan untuk membundle seluruh file front-end (html, js, css, gambar) menjadi sebuah file static yang nantinya akan diupload ke production. </p>



<h2>Step Instalasi </h2>



<p>Langkah awal untuk memakai babel atau javascript, tentu harus punya node js dan npm. Pastikan keduanya sudah terinstall di komputer kalian.</p>



<p>Jika belum download dan install, silahkan cek di webnya langsung <a href="https://nodejs.org/en/download/">https://nodejs.org/en/download/</a> </p>



<p>Setelah diinstall silahkan buat folder tempat kita akan koding, silahkan terserah saja, disini saya memberi nama belajar-babel-webpack dan buka di text editor.</p>



<p>Selanjutnya silahkan buka terminal dan arahkan ke folder yang baru dibuat tadi dan inisialisasi projek kita. Step ini akan menghasilkan satu file baru bernama <code>package.json</code></p>



<pre class="wp-block-preformatted">npm init</pre>



<p>Dan berikut file <code>package.json</code> saya</p>



<pre class="wp-block-preformatted"> {
  "name": "belajar-babel-webpack",
  "version": "1.0.0",
  "description": "Belajar Babel Webpack Javascript Pemula",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" &amp;&amp; exit 1"
  },
  "author": "Azhari",
  "license": "ISC"
} </pre>



<p>Step selanjutnya adalah instalasi paket paket dari webpack dan babel. Paket paket nya yaitu <code>webpack webpack-cli webpack-dev-server</code> dan <code>@babel/core @babel/preset-env babel-loader</code></p>



<h4> Menginstal Webpack</h4>



<pre class="wp-block-preformatted">npm install --save-dev webpack webpack-cli webpack-dev-server</pre>



<p>Perintah diatas akan menginstal webpack yang berisi kode-kode bundler, webpack-cli untuk menjalankan webpack lewat command line, dan webpack dev server akan membaggun sebuah mini server untuk kebutuhan kita di development nanti.</p>



<h4> Menginstal Babel </h4>



<pre class="wp-block-preformatted">npm install --save-dev @babel/core @babel/preset-env babel-loader </pre>



<p>Sedikit informasi untuk babel 7 agak berbeda dengan versi sebelumnya, dimana untuk pake babel diganti dengan prefix <code>@babel/</code> untuk setiap paketnya. Jika sebelumnya di untuk install babel core dengan <code>babel-core</code> . Untuk lebih memahami silahkan cek <a href="https://babeljs.io/docs/en/v7-migration">dokumentasi babel</a>.</p>



<p>Paket pertama dari kode diatas adalah @babel/core yang merupakan paket utama kompiler. Untuk @babel/preset-env sendiri untuk secara otomatis akan mengatur penggunaan versi javascript terbaru dan menyesuaikan akan disesuaikan dengan environment si target. Sementara babel-loader sediri merupakan plugin babel untuk menjembatani nya dengan config webpack saat budling.</p>



<h4>Membuat File Config</h4>



<p>Setelah mengistall paket-paket babel dan webpack selanjutnya adalah membuat file config,</p>



<p>Untuk file config di babel silahkan buat file baru di root folder bernama <code>.babelrc</code> dan isinya sebagai berikut</p>



<pre class="wp-block-preformatted">{
    "presets" : ["@babel/preset-env"]
} </pre>



<p>Untuk config webpack silahkan buat file baru lagi dan di root folder juga dengan nama <code>webpack.config.js</code></p>



<pre class="wp-block-preformatted">const path = require('path');

module.exports = {
    mode : "development",
    entry : {
        app : './src/index.js'
    },
    output : {
        path : path.resolve(__dirname, "dist"),
        filename : "app.bundle.js"
    },
    module: {
        rules : [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ["@babel/preset-env"]
                }
            }
        ]
    }
} </pre>



<p>Tidak usah pusingkan seluruh isi konfigurasi diatas, karena masih tahap awal. Tapi jika ingin mendalami silahkan saja cek dokumentasi dari webpack di  <a href="https://webpack.js.org/configuration/">https://webpack.js.org/configuration/</a>.  </p>



<p>Tapi untuk saat ini cukup kita perhatikan dua config saja, yaitu <em>entry &#8211; app</em> dan <em>output</em>. </p>



<p>Untuk entri-app terdapat file <code>index.js</code> pada folder src. Di file inilah yang menjadi <em>start </em>utama dan akan di kompile menjadi sebuah file nantinya. </p>



<p>Hasil dari file dari kompile ini akan muncul sesuai dengan output di config kita. Di output ada dua poin, yaitu <code>path</code> dan <code>filename</code>. Path merupakan lokasi folder dari hasil kompilenya, sedangkan filename adalah nama file nya. Jadi bisa kita simpulkan setelah kompile akan terdapat file baru bernama <code>app.bundle.js</code> di folder dist.</p>



<h4>Membuat File src/index.js</h4>



<p>Realisasi dari file config tadi, silahkan buat di root folder berupa folder baru dengan nama src dan kemudian buat juga file baru dengan nama index.js</p>



<p>Untuk isian index.js sementara isi saja console sederhana.</p>



<pre class="wp-block-preformatted">let app = () => {
    console.log("Selamat belajar Javascript");
}

app(); </pre>



<h4>Membuat File index.html</h4>



<p>Pada root folder projek silahkan buat file baru dengan nama index.html. Tentu anda sudah faham apa gunanya, file index.html akan menjadi tampilan home page dari projek kita. Dan disini juga file bundle kita akan diload.</p>



<p>Berikut isi dari file index.html</p>



<pre class="wp-block-preformatted"> &lt;!DOCTYPE html>
&lt;html lang="en">
&lt;head>
    &lt;title>Belajar Babel Webpack Javascript&lt;/title>
&lt;/head>
&lt;body>
    &lt;h1>Yok belajar....&lt;/h1>

    &lt;script src="./dist/app.bundle.js">&lt;/script>
&lt;/body>
&lt;/html> </pre>



<h4>Saatnya bundling</h4>



<p>Nah, jika kalian ingat diatas kita kan install <code>webpack-dev-server</code>, sebenarnya tanpa plugin ini pun kita tetap bisa menjalankan webpack kita, tapi saya sarankan untuk memakai plugin ini karena sangat membantu untuk development.</p>



<p>Untuk memakainya silahkan buka folder <code>package.json</code> dan sedikit modifikasi dengan menambahkan baris kode berikut tepat dibagian <strong>script.</strong></p>



<pre class="wp-block-preformatted">"start": "webpack-dev-server,
"build": "webpack"</pre>



<p>Sehingga file package.json harusnya seperti berikut ini. (<em> * jangan lupa komanya karena format json&#8221;</em></p>



<pre class="wp-block-preformatted"> {
  "name": "belajar-babel-webpack",
  "version": "1.0.0",
  "description": "Belajar Babel Webpack Javascript Pemula",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" &amp;&amp; exit 1",
    <strong style="color:red">"start": "webpack-dev-server",</strong>
    <strong style="color:red">"build": "webpack"</strong>
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.7.4",
    "@babel/preset-env": "^7.7.4",
    "babel-loader": "^8.0.6",
    "webpack": "^4.41.2",
    "webpack-cli": "^3.3.10",
    "webpack-dev-server": "^3.9.0"
  }
}</pre>



<p>Setelah konfig tadi, waktunya mengkompile, silakan buka terminal dan posisi di root folder projek kita.</p>



<p>Untuk kompiling kita gunakan npm sebagai berikut</p>



<pre class="wp-block-preformatted">npm run build</pre>



<p>Perintah diatas seharusnya menghasilkan sebuah folder baru bernama dist dan sebuah file di folder tersebut dengan nama app.bundle.js.</p>



<h4>Menjalankan Di Browser</h4>



<p>Dari hasil kompiling seharusnya kita memiliki struktur folder dan file sebagai berikut.</p>



<pre class="wp-block-preformatted"> - /
    - node_modules/
    - dist/
        - app.bundle.js
    - src/
        - index.js
    - .babelrc
    - index.html
    - package-lock.json
    - package.json
    - webpack.config.json </pre>



<p>Untuk melihat hasilnya silahkan kembali ke terminal dan kali ini kita gunakan webpack-dev-server dengan command npm run start</p>



<pre class="wp-block-preformatted">npm run start </pre>



<p>Seharusnya akan menghasilkan seperti berikut</p>



<figure class="wp-block-image size-large"><img loading="lazy" width="1024" height="531" src="/content/images/wordpress/2019/11/webpack-1024x531.png" alt="" class="wp-image-949" srcset="/content/images/wordpress/2019/11/webpack-1024x531.png 1024w, http://localhost:2368/content/images/wordpress/2019/11/webpack-300x156.png 300w, http://localhost:2368/content/images/wordpress/2019/11/webpack-768x398.png 768w, http://localhost:2368/content/images/wordpress/2019/11/webpack.png 1095w" sizes="(max-width: 1024px) 100vw, 1024px" /></figure>



<p>Perhatikan pada baris <code>Project is running at http://localhost:8080/</code> dan untuk melihat hasil silahkan buka browser dan ketikkan <code>http://localhost:8080/</code></p>



<p>Dan seharusnya tampil sebagai berikut.. dan silahkan buka console dari browser dan lihat hasil kompiling dari index.js</p>



<figure class="wp-block-image size-large"><img loading="lazy" width="1024" height="537" src="/content/images/wordpress/2019/11/webpack2-1024x537.png" alt="" class="wp-image-952" srcset="/content/images/wordpress/2019/11/webpack2-1024x537.png 1024w, http://localhost:2368/content/images/wordpress/2019/11/webpack2-300x157.png 300w, http://localhost:2368/content/images/wordpress/2019/11/webpack2-768x403.png 768w, http://localhost:2368/content/images/wordpress/2019/11/webpack2.png 1357w" sizes="(max-width: 1024px) 100vw, 1024px" /></figure>



<p>Untuk lebih mendetail tentang hasil kompiling silahkan view source dan klik link  <em>./dist/app.bundle.js </em>maka anda akan menemukan kode kompiling.</p>



<p>&#8212;</p>



<p>Mungkin cukup sekian untuk kali ini, untuk perkembangan selanjutnya silahkan pantau saja. Jika bertemu error silahkan komen dibawah..</p>



<p>Terima kasih..</p>



<p>Soure files on github :  <a href="https://github.com/azharisikumbang/belajar-babel-webpack">https://github.com/azharisikumbang/belajar-babel-webpack</a> </p>
<!--kg-card-end: html-->
