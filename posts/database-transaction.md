---
id: 63bc55848e392205482244ce
title: "Database Transaction ? Yok,   Kenalan"
feature_image: /content/images/wordpress/2020/09/dobule-or-nothing.jpg
description: "Assalamualaikum Warahmatullahi Wabarokatuh"
date: 2020-09-19
tags: posts
slug: database-transaction
layout: layouts/post.njk
---

<!--kg-card-begin: html-->
<p>Assalamualaikum Warahmatullahi Wabarokatuh</p>



<p>Pada dunia persilatan basis data, ada hal yang fundamental tapi terkadang suka dilewatkan oleh para punggawa teknologi ( biasanya punggawa baru yang lagi asik dengan gonta ganti bahasa pemrograman, <s>termasuk saya</s> ), yups dialah database transaction. </p>



<p class="has-text-align-left" style='padding-left: 38px'>Baca juga : <a href="https://coretanit.com/mengenal-basis-data/">Mari Mengenal Basis Data</a></p>



<p>Meski sifatnya fundamental, tapi asal diketahui saja hal ini merupakan salah satu ilmu yang <strong>wajib</strong> bagi punggawa teknologi, terlebih  database administrator dan developer.  </p>



<h2>Konsep Database Transaction</h2>



<p>Mungkin anda bertanya. kok thumbnail artikelnya gitu? Hmm&#8230; Apa hubunganya? Mirip mirip dengan konsep database transaction, di thumbnail tertulis &#8216;<em>double or nothing</em>&#8216;, yang jika diterjemahkan penuhi dua kali lipat (seluruh permintaan) atau tidak sama sekali. (<em> dan kita tau apa kelanjutannya.. duarrr&#8230; : v</em> )</p>



<p>Begitu juga dengan transaction, transaction memberikan kita ruang untuk mengeksekusi <em>statement &#8211; statement </em>kita secara penuh dan jika berhasil akan <code>di-commit</code> atau jika gagal, seluruh <em>statement</em> dianggap gagal, yang artinya kita akan dikembalika ke state awal atau <code>rollback</code></p>



<figure class="wp-block-image size-large"><img loading="lazy" width="921" height="144" src="/content/images/wordpress/2020/09/database-transaction.png" alt="Database Transaction Diagram" class="wp-image-1521" srcset="/content/images/wordpress/2020/09/database-transaction.png 921w, http://localhost:2368/content/images/wordpress/2020/09/database-transaction-300x47.png 300w, http://localhost:2368/content/images/wordpress/2020/09/database-transaction-768x120.png 768w" sizes="(max-width: 921px) 100vw, 921px" /></figure>



<p>Database akan menciptakan sebuah <code>consistent state</code>, misal <code>state1</code> kemudian mulai mengeksekusi transaksi dan diset ke <code>consistent state</code> baru, misal <code>state2</code> jika berhasil atau kembali ke <code>state1</code> jika gagal.</p>



<p>Jika belum jelas, kita ambil sebuah studi kasus, coba dibayangkan kita mempunyai sejumlah saldo di rekening bank ada dan berniat melakukan transfer ke rekening bank teman anda. Masing masing saldo diawal baik pengirim atau penerima berada pada situasi <code>consistent state</code>. Dan seharusnya bisa kita ambil statement atau langkah yang akan dijalankan sebagai berikut.</p>



<ol><li>Kirim uang, saldo anda berkurang ( pengirim )</li><li>Uang diterima, saldo bertambah ( penerima )</li></ol>



<p>Jika proses berjalan normal, maka akan dilakukan <code>commit</code> dan state akan berubah ke <code>consistent state</code> baru, yang artinya terjadi pengurangan saldo pada pengirim dan terjadi penambahan saldo pada penerima. </p>



<p>Tapi.. bagaimana jika proses bermasalah, transfer sudah dilakukan dan catatan saldo pengirm sudah dikurangi (<code>statement1</code>), sedangkan server mengalami masalah, server error, overload, masalah jaringan atau semacamnya yang mengakibatkan <code>statement2</code> gagal dieksekusi dan saldo penerima pun tidak bertambah. Hhmm&#8230; ngeri kan? Hilang dah duit..</p>



<p>Oleh karena nya kita membutuhkan database transaction untuk mencegah hal hal demikian. Transaction akan secara otomatis membatalkan semua statement tadi, dan kembali ke <code>consistent state</code> awal tadi, dan saldo pun balik lagi 🙂</p>



<h2>Let&#8217;s Try !</h2>



<p>Ehh bentar, sebelum itu perlu disiapkan PHP dan MySQL karena akan bereksperimen pada keduanya, pertama hanya menggunakan MySQL dan kedua menggunakan keduanya. Jika belum punya, silahkan didownload dan install.</p>



<p>Perlu diketahui dan dipahami agar mudah dalam penerapannya, database transaction umum nya memiliki pattern berikut.</p>



<ol><li>Inisialisasi atau Start Transaction</li><li>Eksekusi Statement atau Query</li><li>Melakukan Commit</li><li>Melakukan Rollback jika gagal</li></ol>



<h4>Mysql</h4>



<p>Masih dengan kasus yang sama pada contoh diatas, yakni proses transfer pada bank, dan silahkan login ke MySQL.</p>



<pre class="wp-block-code"><code>mysql -u &lt;username> -p</code></pre>



<p>Dan buat database denga nama <code>transaction</code></p>



<pre class="wp-block-code"><code>mysql> create database transaction;
mysql> use transaction;</code></pre>



<p>Kemudian buat table dengan nama <code>balance_tbl</code> dan struktur berikut, jangan lupa enginenya kita pakai InnoDB ( seharusnya default ) karena support transaction.</p>



<pre class="wp-block-code"><code>mysql> create table `balance_tbl` (
`id` int unsigned primary key auto_increment,
`name` varchar(255),
`balance` decimal(12, 2) default 0
) engine=InnoDB ;</code></pre>



<p>Selanjutnya kita coba masukkan data sample, misal 3 data saja</p>



<pre class="wp-block-code"><code>mysql> insert into `balance_tbl` values (null, 'Mipan', 1500000), (null, 'Zuzu', 2000000), (null, 'Yakakus', 1000000);</code></pre>



<p>Harusnya data kita sebagai berikut</p>



<pre class="wp-block-code"><code>mysql> select * from balance_tbl;
+----+---------+------------+
| id | name    | balance    |
+----+---------+------------+
|  1 | Mipan   | 1500000.00 |
|  2 | Zuzu    | 2000000.00 |
|  3 | Yakakus | 1000000.00 |
+----+---------+------------+
3 rows in set (0.00 sec)</code></pre>



<p>Masih dengan kasus transfer diatas, misal kita melakukan transfer dari Mipan (id: 1) ke Zuzu (id: 2) sebesar Rp. 500.000 dan seharusnya Mipan mempunyai saldo baru senilai Rp, 1.000.000 dan Zuzu mempunyai saldo baru Rp. 2.500.000. ( <code>new consistent state</code> )</p>



<p>Secara query sebagai berikut. </p>



<pre class="wp-block-code"><code>mysql> start transaction; # inisialisasi
mysql> update balance_tbl set balance = balance - 500000 where id = 1; # statemtnt 1
mysql> update balance_tbl set balance = balance + 500000 where id = 2; # statement 2
mysql> commit; # commit</code></pre>



<p>Silahkan dicek lagi dan seharusnya data kita persis seperti yang kita inginkan. Tapi.. transaction nya mana? rollback nya mana? Mungkin terbesit dipikiran, karena memang kita tidak akan diberikan notifikasi khusus dari <em>mantan</em>, eh mysql maksudnya tentang transaction ini.</p>



<p>Lah.. truss.. taunya dari mana? Oke.. yok lebih intim.. ( dengan mysql )</p>



<p>Untuk dapat mengetahui nya kita butuh dua sesi yang berbeda, walaupaun  dengan mesin dan username yang sama. Silahkan buka sesi baru di command-line masing masing. Jadi, bayangan kita seharusnya database sedang diakses dari dau mesin yang berbeda.</p>



<p><em>* Sepakat sesi pertama disebut <code>sesi1</code> dan sesi baru disebut <code>sesi2</code></em></p>



<p>Pada kedua sesi baik <code>sesi1</code> maupun <code>sesi2</code> silahkan select seluruh datanya, dan data tersebut harusnya sama dan ini lah <code>consistent state</code> nya.</p>



<pre class="wp-block-code"><code># lakukan pada masing masing sesi
mysql> select * from balance_tbl;
+----+---------+------------+
| id | name    | balance    |
+----+---------+------------+
|  1 | Mipan   | 1000000.00 |
|  2 | Zuzu    | 2500000.00 |
|  3 | Yakakus | 1000000.00 |
+----+---------+------------+
3 rows in set (0.00 sec)
</code></pre>



<p>Oke.. pertama kita mulai dengan tanpa mendefenisikan transaction.</p>



<pre class="wp-block-code"><code># Sesi1
mysql> update balance_tbl set balance = balance - 500000 where id = 1;
mysql> update balance_tbl set balance = balance + 500000 where id = 2;</code></pre>



<p>Seharusnya, jika kita select pada masing masing sesi hasilnya sama sama barubah. ( kita sepakati sebagai <code>hasil1</code> )</p>



<pre class="wp-block-code"><code>mysql> select * from balance_tbl;
+----+---------+------------+
| id | name    | balance    |
+----+---------+------------+
|  1 | Mipan   |  500000.00 |
|  2 | Zuzu    | 3000000.00 |
|  3 | Yakakus | 1000000.00 |
+----+---------+------------+
3 rows in set (0.00 sec)</code></pre>



<p>Kembali ke terminal <code>sesi1</code> kita coba melakukan query dengan transaction, <strong>tapi tanpa commit</strong> untuk bisa melihat perbedaannya.</p>



<pre class="wp-block-code"><code># sesi1, sesi2 tidak perlu
mysql> start transaction;
mysql> update balance_tbl set balance = balance - 500000 where id = 1; 
mysql> update balance_tbl set balance = balance + 500000 where id = 2;  </code></pre>



<p>Kemudian lakukan select data lagi pada masing masing sesi, <code>sesi1</code> dan <code>sesi2</code>, sudah ketauan perbedaannya ? ( kita tandai sebagai <code>hasil2</code> )</p>



<pre class="wp-block-code"><code># sesi1
mysql> select * from balance_tbl;
+----+---------+------------+
| id | name    | balance    |
+----+---------+------------+
|  1 | Mipan   |       0.00 |
|  2 | Zuzu    | 3500000.00 |
|  3 | Yakakus | 1000000.00 |
+----+---------+------------+
3 rows in set (0.00 sec)</code></pre>



<pre class="wp-block-code"><code># sesi 2
mysql> select * from balance_tbl;
+----+---------+------------+
| id | name    | balance    |
+----+---------+------------+
|  1 | Mipan   |  500000.00 |
|  2 | Zuzu    | 3000000.00 |
|  3 | Yakakus | 1000000.00 |
+----+---------+------------+
3 rows in set (0.03 sec)
</code></pre>



<p>Oke.. sekarang coba pada <code>sesi1</code> ketikkan perintah <code>commit</code> dan select data pada masing masing sesi.</p>



<pre class="wp-block-code"><code># sesi 1
mysql> commit;</code></pre>



<p>Dann.. seharusnya efek query kita baru terasa pada sesi lainnya apabila commit sudah eksekusi yang artinya menciptakan <code>consistent state</code> baru. Nah, hal ini lah yang terjadi pada transaction, terjadi isolasi pada sebuah transaction sampai proses tersebut betul betul selesai.</p>



<p>Tapi.. tapi rollbacknya mana? Mudah saja, jalankan kembali transaction nya tapi ganti commit dengan rollback lalu lihat state kedua sesi. </p>



<p>Emm.. emm.. tanya satu lagi om.. Disitu Yakakus gunanya apa ? Gatau.. Gabut.. -_-</p>



<h4>PHP + MySQL</h4>



<p>Kita coba implementasi ke bahasa pemrograman, disini saya contohkan pake PHP karena mudah dipahami., silahkan disesuaikan dengan bahasa lainnya. </p>



<p style="padding-left: 38px">Baca juga : <a href="https://coretanit.com/fitur-baru-php-8/" target="_blank" rel="noreferrer noopener">Fitur Baru Pada PHP 8 Yang Bisa Sangat Bermanfaat</a></p>



<p>Oke, pada cerpen yang sudah dijelaskan diatas, sebenarnya ada satu hal ayng tidak saya sebutkan bahkan singgung, saya simpan agar tidak memecah konsentrasi, yaa karena lebih cocok disinggung di case kedua. hehe.. 🙂</p>



<p><strong>&#8220;Setiap statement atau query sebenarnya sudah menerapkan transaction saat dieksekusi&#8221; </strong></p>



<p>Jangan pusing, maksudnya pada setiap statement yang kita eksekusi sudah mengandung transaction, karena secara default sudah diaktifkan oleh mysql. Hal ini dikenal dengan fitur <code>autocommit</code>, hal ini bisa kita cek pada mysql kita dengan perintah.</p>



<pre class="wp-block-code"><code>mysql> select @@autocommit;
+--------------+
| @@autocommit |
+--------------+
|            1 |
+--------------+
1 row in set (0.06 sec)

# atau

mysql> show variables where variable_name='autocommit';
+---------------+-------+
| Variable_name | Value |
+---------------+-------+
| autocommit    | ON    |
+---------------+-------+
1 row in set (0.01 sec)</code></pre>



<p>Okey, status nya aktif, tapi maksudnya? Balik lagi ke konsep bagaimana transaction bekerja, yaitu jika sql berhasil maka commit dijalankan, dan sql statement terjadi error maka akan di-rollback ke kondisi terakhir. </p>



<p>Truss.. bedanya pada pembahasan part MySQL di atas ?</p>



<p>Oke kita bahas pada contoh berikut sekalian implementasi dengan bahasa PHP. Tapi.. terlebih dahulu coba bayangkan ada 100 ribu baris data yang akan dimasukkan ke database pada satu waktu ( batch ). </p>



<p>Yaa..tinggal masukkan.</p>



<p>Bukan itu.. jika kita memakai sql query yang menggunakan autocommit, bukan dengan transaction yang kita defenisikan secara manual ( grouping ), maka pada setiap sql statement yang dieksekusi akan menjalankan transaction masing masing, artinya 100 baris menjalankan 100 ribu transaction.</p>



<p>Bandingkan dengan, jika kita mendefenisikan transaction pada awal statement, yupps.. diluar menjaga <code>consistent state</code>, kita juga menjaga efisiensi, karena hanya perlu mengeksekusi satu kali transaction. </p>



<p>Perbedaan akan sangat terlihat pada execution time.</p>



<p>Selanjut kita masuk ke script php, silahkan buat file <code>index.php</code> dan isikan seperti berikut ini. ( jangan lupa ganti username dan password )</p>



<pre class="wp-block-code"><code>&lt;?php
    
$dsn = "mysql:dbname=transaction;host:127.0.0.1";

try {
    $dbh = new \PDO($dsn, 'yourdbusername', 'yourdbpassword');	
} catch (\Exception $e) {
    throw new \Exception("Error : " . $e->getMessage(), 1);
}


try {

    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // init trasasction
    $dbh->beginTransaction();

    // statement
    for ($i=0; $i &lt; 100000; $i++) { 
        $dbh->exec(
            "insert into balance_tbl (name, balance) values ('" . rand_string() . "', " . rand(100000, 999999999). " )"
        );	
    }

    // commit
    $dbh->commit();

} catch (Exception $e) {

    // rollback jika gagal
    $dbh->rollback();

    echo "Error : " . $e->getMessage();
}

function rand_string() {
    $string = random_bytes(8);
    return bin2hex($string);
}

echo "done..";</code></pre>



<p>Sekarang mari jalankan <code>index.php</code> di command line, pastikan berada di direktori yang sama.</p>



<pre class="wp-block-code"><code>$ php index.php</code></pre>



<p>Selanjutnya, setelah muncul tulisan <em>done</em>, masuk ke mysql cli lagi dan cek seharusnya telah ada 100 ribuan data disana.</p>



<p>Jika penasaran silahkan lakukan percobaan dengan tanpa menggunakan transaction dan lihat pebedaan pada waktu ekseskusi nya ( <em>gunakan microtime()</em> )</p>



<p>Okee.. dari segi efisiensi kita telah sepakat bahwa harus menggunakan transaction secara manual unggul jauh.</p>



<p>Nah.. muncul pertanyaan baru.. konsistensi datanya nya gimana? Kan ada 100 ribu data tuh, seandainya kita test dengan menggunakan sesi seperti di part pembahasan MySQL hasilnya gimana? Silahkan dijawab sendiri.. karena harusnya sudah mengetahui jawabannya..</p>



<p>Pertanyaan lain.. seperti diterangkan pada part konsep transaction, kan saat proses pemasukan 100 ribu data ada waktu eksekusi yang memungkinkan adanya error yang terjadi seperti server error, jaringan bermasalah, kabel power server kesenggol kucing atau apalah yang memungkinkan statement kita tidak berhasil mencapai commit atau dieksekusi secara keseluruhan, misal dari 100 ribu row yang akan dimasukkan, hanya dicapai sampai 500. Nah, itu bagaimana?</p>



<p>Akan kita buktikan kesaktian trasaction..</p>



<p>Terlebih dahulu silahkan perhatikan total row yang ada pada table <code>balance</code> saat ini, kita anggap sebagai <code>consistent state</code>, atau untuk mempermudah bisa dikosongkan, terserah saja.</p>



<p>Selanjutnya eksekusi kembali script <code>index.php</code> di terminal,</p>



<pre class="wp-block-code"><code>$ php index.php</code></pre>



<p>Dan, sebelum script 100% sukses dieksekusi, silahkan stop service mysql dengan command line atau bagi pengguna xampp silahkan dengan tombol stop. ( <em>*sambil berangan angan ini adalah kondisi urgent yang mangakibatkan server database nya bermasalah</em> )</p>



<pre class="wp-block-code"><code>$ sudo service mysql stop</code></pre>



<p>Harusnya, pada command line akan memunculkan pesan error berikut,</p>



<pre class="wp-block-code"><code>$ php index.php
Error : SQLSTATE&#91;HY000]: General error: 2006 MySQL server has gone awaydone..</code></pre>



<p>Yang artinya, jika dengan transaction maka seharusnya transaction kita <em>tidak</em> mencapai <code>commit</code> dan statenya harus <code>di-rollback</code>, tabel kita kembali ke keadaan semula.</p>



<p>Jika rajin, silahkan coba tanpa menggunakan transaction dan kill service mysql di saat proses query script ke database sedang berjalan. </p>



<p>Dan cek, apa yang terjadi pada tabel serta temukan perbedaan.</p>



<p>Betul&#8230; seharusnya ada sebagian data yang berhasil masuk dan masalahnya anda akan dipusingkan dengan  mulai sibuk memisahkan data yang telah masuk dengan data yang belum masuk.. nambah kerjaan dan itu tidak keren.. 🙂</p>



<p>Mulai tergambarkan apa itu database transaction ? Jika belum, sing sabar&#8230;</p>



<p>Terima kasih..</p>



<p></p>



<p>Referensi : </p>



<ul><li><a href="https://en.wikipedia.org/wiki/Database_transaction" target="_blank" rel="noreferrer noopener">https://en.wikipedia.org/wiki/Database_transaction</a></li><li><a href="https://software.endy.muhardin.com/java/database-transaction/" target="_blank" rel="noreferrer noopener">https://software.endy.muhardin.com/java/database-transaction/</a></li><li><a href="https://medium.com/gits-apps-insight/mengenal-konsep-database-transaction-bagian-1-54e66789f75e" target="_blank" rel="noreferrer noopener">https://medium.com/gits-apps-insight/mengenal-konsep-database-transaction-bagian-1-54e66789f75e</a></li><li><a href="https://dev.mysql.com/doc/refman/5.6/en/innodb-autocommit-commit-rollback.html" target="_blank" rel="noreferrer noopener">https://dev.mysql.com/doc/refman/5.6/en/innodb-autocommit-commit-rollback.html</a></li><li><a href="https://medium.com/@acep.abdurohman90/apa-itu-transactional-database-1891d44363d2" target="_blank" rel="noreferrer noopener">https://medium.com/@acep.abdurohman90/apa-itu-transactional-database-1891d44363d2</a></li><li>Diagram dibuat di <a href="https://app.diagrams.net/" target="_blank" rel="noreferrer noopener">https://app.diagrams.net/</a></li></ul>
<!--kg-card-end: html-->
