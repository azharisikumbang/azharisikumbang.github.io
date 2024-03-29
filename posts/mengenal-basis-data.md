---
id: 63bc55848e392205482244b7
title: "Mari Mengenal Basis Data"
feature_image: /content/images/wordpress/2019/11/MARI-MENGENAL-BASIS-DATA.png
description: "Era sekarang sering kali kita mendengar pernyataan yang mengatakan bahwa data merupakan hal yang sangat penting bagi kehidupan manusia. Ya,…"
date: 2019-11-27
tags: posts
slug: mengenal-basis-data
layout: layouts/post.njk
---

<!--kg-card-begin: html-->
<p>Era sekarang sering kali kita mendengar pernyataan yang mengatakan bahwa data merupakan hal yang sangat penting bagi kehidupan manusia. Ya, memang betul hal ini sudah tidak bisa terbantahkan lagi. Setiap harinya kita menghasilkan data baru dari aktivitas kita dan sekaligus memerlukan data sebagai langkah merencanakan segala hal.</p>



<p>Tapi dalam dunia serba teknologi dimana kita sudah mengenal data sebagai ikon utamanya, ada baiknya kita berkenalan dengan istilah baru lagi yaitu basis data atau dikenal juga dengan database dalam bahasa Inggriss. </p>



<h2>PENGENALAN BASIS DATA</h2>



<p>Kita telaah dari kata penyusunnya, basis data  sendirir tersusun dari dua kata, yakni basis dan data. Basis bisa diartikan sebagai kumpulan atau sekumpulan yang tersusun, sedangkan data bisa diartikan sebagai hal-hal atau mentahan yang menjadi representasi dari fakta yang selanjutnya diolah sedemikian rupa menjadi informasi. </p>



<ul><li>Baca Juga : <a href="https://coretanit.com/desain-grafis/">Mari Mengenal Desain Grafis</a></li></ul>



<p>Sehingga berdasarkan pengertian dua kata penyusun basis data ditarik kesimpulan bahwa basis data adalah sekumpulan hal-hal yang masih mentahan yang menjadi representasi dari fakta yang tersusun secara terorganisir, berhubungan dan merupakan cikal bakal informasi.</p>



<p>Informasi ini yang selanjutnya akan kita jadikan baromenter dalam merencanakan atau melakukan suatu hal. </p>



<p>Sebagai contoh saya seorang mahasiswa, setiap hari senin saya masuk kuliah seharusnya pada jam 7.30. Rutinitas ini terjadi setiap hari senin, saya pergi kuliah dan disetiap saya masuk kelas saya selalu mencatat jam masuk saya, sehingga didapatkanlah jam saya masuk antara lain 7.20, 7.40, 7.30 dan lainnya. </p>



<p>Nah, dari kasus diatas harusnya bisa kita ambil beberapa data, yakni pertama ada seorang mahasiswa, kedua jam masuk 7.30 dan jam mahasiswa masuk ke dalam kelas. Ketiga data ini selanjutnya akan dibentuk dalam tebel, selanjutnya diberi label seperti pelaku, jam masuk, dan jam mahasiswa masuk. Label ini lah yang di basis data di sebut field. Selanjutnya kita pasti mendapatkan data baru setiap hari senin, yaitu pelaku tetap mahasiswa, jam masuk tetap 7.30 dan terjadi perubahan pada jam masuk mahasiswa yakni  7.20, 7.40, 7.30 dan lainnya.  Setiap baris data inilah yang selanjutnya di sebut record data pada database. Inilah beberapa istilah dasar pada database.</p>



<h2>Istilah – Istilah Dasar Dalam Basis Data</h2>



<p>Dalam dunia basis data dikenal beberapa istilah yang
akan dijumpai, beberapa istilah tersebut yakni sebagai berikut.</p>



<ul><li><strong>Entitas, </strong>merupakan sesuatu yang nyata bersifat individual dan dapat dibedakan dengan sesuatu yang lain.</li><li><strong>Field, </strong>merupakan entitas yang menjadi identitas satuan tercekil yang menjadi perwakilan data secara langsung.</li><li><strong>Record, </strong>merupakan kumpulan dari setiap elemen field dan isiannya dengan sifat saling berketerkaitan antar satu field dengan yang lain.</li><li><strong>Table,  </strong>merupakan sebuah entitas yang berisi kumpulan record secara keseluruhan.</li><li><strong>Data / Value, </strong>merupakan isian yang disimpan di field.</li><li><strong>Key, </strong>merupakan sebuah tanda untuk identifikasi yang sifatnya selalu unik dengan tujuan untuk mengenali entitas dari beberapa entitas.</li><li><strong>Relasi, </strong>merupakan hubungan antara satu entitas dengan entitas yang lainnya.</li><li><strong>Query, </strong>merupakan baris kode yang digunakan untuk mengirim permintaan ke basis data.</li><li><strong>Database Management System ( DBMS )</strong>,  merupkana sebuah sistem yang dirancang khusus untuk mengelola basis data dengan tujuan agar pengelolaan lebih mudah dan efektif. <br>Sistem yang dimaksud disini berupa perangkat lunak yang akan mengatur bagaimana data dimasukkan, data disimpan ataupun data diubah. Beberapa contoh DBMS yaitu, MySQL, MS SQL, Oracle, PostgreSQL, SQLite dan sebagainya</li></ul>



<h2>KELEBIHAN DAN KEKURANGAN BASIS DATA</h2>



<p>Tentu setiap produk ciptaaan punya plus dan minus nya masing masing. Berikut beberapa kelebihan dan kekurangan yang bisa saya rangkum untuk basis data</p>



<h3>Kelebihan Basis Data</h3>



<p>Banyak kelebihan yang dapat kita peroleh dengan
menggunakan basis data. Manfaat/kelebihan basis data diantaranya adalah :</p>



<h4>1. Kecepatan dan Kemudahan</h4>



<p>Tak bisa dipungkiri kehadiran basis data dan dbms menciptakan efisiensi dan keefektifan yang sangat terasa. Jika sebelumnya data data terarsip dalam bentuk berkas dan terkesan lamban, dengan database hal itu bisa dipangkas. </p>



<p>Dikarenakan basis data mempunyai kemampuan mengelompokkan data, mengurutkan, manipulasi dan penyajian yang tepat serta terkomputerisasi tentunya.</p>



<h4>2. Kontrol Data yang Terpusat</h4>



<p>Pada basis data terdapat banyak sekali
data yang akan diolah, sistem yang terpusat ini akan memudahkan si
administrator dalam mengolah dan manajemen data. </p>



<p>Misal, ada satu data mahasiswa terjadi kesalahan ketik pada umur. Jika masih memakai sistem berkas mungkin akan memakan waktu untuk mengubah seluruh umur untuk data yang mahasiswa tersebut. </p>



<p>Pada basis data dengan sistem terpusat, cukup mengubah umur pada pusat data saja secara otomatis keseluruhan tabel atauoun field yang menggunakan data umur akan ikut berubah. Dengan demikian keselarasan data akan terus terpelihara.</p>



<h4>3. Hak Akses dan Multi-User</h4>



<p>DBMS memberikan aturan hak akses yang berbeda-beda terhadap pengguna berdasarkan posisi atau tingkatannya pada sistem. Selain itu untuk menjamin keamanan pengaksesan basis data setiap pengguna akan diberikan hak unutk mengatur password..</p>



<h4>4. Ruang Penyimpanan Lebih Efisien</h4>



<p>Pada basis data memungkinkan untuk dipakai oleh lebih dari satu pengguna, tapi perlu digaris bawahi bahwa tidak perlu menyediakan basis data untuk masing-masing pengguna.</p>



<p>Cukup dengan satu basis data saja dan bisa dipakai secara bersama-sama oleh seluruh pengguna basis data. Hal ini tentu saja akan menghemat ruang penyimpanan pada media penyimpanan.</p>



<h3>Kekurangan Basis Data</h3>



<p>Sementara untuk beberapa kekurangan seperti berikut ini,</p>



<h4>1. Lebih Kompleks</h4>



<p>Jika dibandingkan dengan sistem data berkas, basis data memiliki sistem yang lebih kompleks yang menyebabkan kemungkinan kesalahan mudah terjadi</p>



<h4>2. Data Terpusat Beresiko</h4>



<p>Dibalik kelebihan data terpusat yang memudahkan pengelolaan disisi lain dengan data terpusat memungkinkan resiko kehilangan data besar. </p>



<h4>3. Mahal </h4>



<p>Dari segi pembiayaan DBMS bisa dikatakan mahal karena dari segi perangkat lunak yang berbayar, walaupun ada sebagian yang gratis. Selain itu juga memerlukan biaya untuk menyewa seorang spesialis.</p>



<h2>PENGGUNA BASIS DATA</h2>



<p>Berdasarkan posisi dan pekerjaan dalam sebuah basis data bisa dibedakan dengan beberapa contoh berikut.</p>



<ul><li><strong>System Engineer</strong>,
merupakan tenaga ahli yang mempunyai tanggung jawab terhadap perencanaan
pembangunan, pemasangan basis data, melakukan peningkatan dan melaporkan
kesalahan yang mungkin terjadi pada sistem.</li><li><strong>Database Administrator, </strong>merupakan tenaga ahli yang bertugas mengontrol
secara penuh keseluruhan basis data, mulai dari monitoring akses terhadap basis
data, monitoring data, memeriksa keamanan basis data, merencanakan kebutuhan
basis data, mencadangkan dan memulihkan basis data.</li><li><strong>Programmer, </strong>merupakan
pengguna yang jangkauan interaksinya memakai Data Manipulation Language dengan
cara menulisnya dalam bahasa pemrograman, seperti Java, C, PHP dan lain lain.</li><li><strong>End User, </strong>merupakan
pengguna yang hak akses terhadap basis data hanya berdasarkan permintaan dari
aplikasi yang telah siap pakai. Sebagai contoh jika alur dari aplikasi
mengatakan data hanya ditampilkan saja, maka pengguna hanya mendapati data
dalam bentuk tampilan saja atau jika aplikasi memberi wadah untuk menambah data
maka pengguna bisa menambah data tentu dengan ketentuan dari aplikasi.</li></ul>



<p>Bagaimana sudah mengenal basis data dong harusnya, tapi tunggu dulu jangan cepat puas dulu, itu hanya pembahasan secuil saja tentang basis data. Basis data masih punya banyak sub materi yang harus kita tau. Contoh tertera pada <a href="https://id.wikipedia.org/wiki/Pangkalan_data">wikipedia</a>. Perbanyak dan budayakan membaca..</p>



<p>Terima Kasih..</p>
<!--kg-card-end: html-->
