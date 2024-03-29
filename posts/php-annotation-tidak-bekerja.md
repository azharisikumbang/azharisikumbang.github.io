---
id: 63bc55848e392205482244d3
title: "PHP : Annotation Tidak Bekerja"
feature_image: /content/images/wordpress/2020/12/Tutorial-MySQL-Memulai-dan-Konfigurasi-MySQL.jpg
description: "Annotation merupakan sebuah cara untuk menambahkan meta data atau tag pada kode. Annotation ini sering dipergunakan untuk class, property…"
date: 2020-12-30
tags: posts
slug: php-annotation-tidak-bekerja
layout: layouts/post.njk
---

<!--kg-card-begin: html-->
<p>Annotation merupakan sebuah cara untuk menambahkan meta data atau tag pada kode. Annotation ini sering dipergunakan untuk class, property ataupun method untuk mempengaruhi perilakunya. Pada PHP, fitur ini bisa kita gunakan, walaupun tidak datang secara built-ini di PHP. (<em>Lupakan sejenak <a href="https://coretanit.com/fitur-baru-php-8/" target="_blank" rel="noreferrer noopener">PHP 8</a> dengan attributes-nya)</em></p>



<p>Annotation biasanya ditandai dengan <strong>@</strong> kemudian diikuti oleh annotasinya. Annotation ditulis pada docblocknya php, sebagai contoh berikut ini dari <a href="https://en.wikipedia.org/wiki/Docblock#PHP" target="_blank" rel="noreferrer noopener">wikipedia</a>.</p>



<pre class="wp-block-preformatted">&lt;?php

/**
 * @method POST
 * This is a comment of documentation (Doc Block)
 **/
public function store(Request $request): void
{
    // Method actions here
}</pre>



<p>Nah, pada tutorial ini, saya akan sedikit membahas sebuah permasalahan yang sebenarnya sangat jarang terjadi, yaitu annotation yang kita buat ternyata tidak bekerja.</p>



<p>Memangnya seberapa fatal jika annotation tidak bekerja? hmm..sebagai informasi annotation banyak sekali diadopsi oleh php framework maupun library seperti Symfony, Laravel, Zend, Doctrine, PHPUnit dan sebagainya. Alhasil, jika annotation nya tidak bekerja, otomatis kita tidak akan bekerja sebagaimana mestinya.</p>



<p>Lalu, bagaimana mengatasinya? Akan kita bahas secara sederhana..</p>



<h2>Menganalisa Masalah</h2>



<p>Seperti yang sudah kita ketahui bersama bahwa annotation bekerja di bawah php docblock yang notabenenya adalah komentar pada PHP, secara tidak langsung bisa kita simpulkan bahwa jika annotation nya tidak bekerja itu berarti ada yang salah saat parsing komentar.</p>



<p>Mari kita coba..</p>



<p>Caranya mudah saja, kita cukup siapkan sebuah class dengan docblock nya kemudian kita gunakan php Reflection untuk mengambil doc nya.</p>



<p>Sebagai contoh, file <code>MyClassWithDockBlock.php</code></p>



<pre class="wp-block-preformatted">&lt;?php

/**
 * This is a docblock
 */
class MyClassWithDocBlock
{}

$ref = new ReflectionClass(MyClassWithDocBlock::class);

var_dump($ref-&gt;getDocComment());</pre>



<p>Seharusnya, jita komentar baik baik saja saat kita menjalankan kode program, maka akan menampilkan sebagai berikut.</p>



<pre id="block-af1358b2-7d73-4c4b-b969-c77d5d573bcc" class="wp-block-preformatted">string(29) "/** * This is a docblock */" </pre>



<p>tapi, saat ini pada kenyataanya komentar pada php kita tidak sedang baik baik saja, sehingga hasilnya yang keluar adalah <code>boolean</code>, dan tidak terdapat komentar yang kita maksud, alias dibuang.</p>



<pre class="wp-block-preformatted">bool(false) </pre>



<p>Ini lah yang menyebabkan annotation kita tidak bekerja sebagaimana semestinya, komentarnya saja tidak diparsing apalagi annotation nya 🙂</p>



<h2>Perbaikan</h2>



<p>Untuk menyelesaikan masalah ini, mudah saja, kita sudah mengetahui biang keladi nya adalah komentar atau doc block tidak diparsing. Kenapa ini bisa terjadi? Sebenarnya ini bukan kesalahan, hal ini adalah lumrah, karena terkadang dengan tujuan untuk mengoptimasi kode komentar tidak diikutsertakan ke dalam opcode cache. Apa itu opcode? Singkatnya, hasil compile dari script php sebelum dieksekusi. Jadi, caching nya hanya murni kode tidak ada komentar, alhasil kode sedikit tereduksi.</p>



<p>Nah, untuk mengikutsertakan komentar ke opcode, kita perlu mengobok obok file settingan php, yaitu <code>php.ini</code>. Dimana di file ini seluruh setingan php disimpan.</p>



<p>Nah, sejak kedatangan php5.5 hingga sekarang untuk urusan caching opcode ini dihandle oleh sebuah ektensi yang bernama <code>PHP OpCache</code>.  Dan di setingan ekstensi ini lah yang akan kita obok obok di <code>php.ini</code></p>



<pre class="wp-block-preformatted">php -i | grep "opcache"</pre>



<p>Dengan perintah diatas, seluruh setingan <code>opcache</code> di <code>php.ini</code> akan  ditampilkan. <em>(Jika memakai windows, gunakan findstr atau cari manual di phpinfo()</em> )</p>



<pre class="wp-block-preformatted">/etc/php/7.4/cli/conf.d/10-opcache.ini,
opcache.blacklist_filename =&gt; no value =&gt; no value
opcache.consistency_checks =&gt; 0 =&gt; 0
opcache.dups_fix =&gt; Off =&gt; Off
opcache.enable =&gt; On =&gt; On
opcache.enable_cli =&gt; Off =&gt; Off
opcache.enable_file_override =&gt; Off =&gt; Off
opcache.error_log =&gt; no value =&gt; no value
opcache.file_cache =&gt; no value =&gt; no value
opcache.file_cache_consistency_checks =&gt; On =&gt; On
opcache.file_cache_only =&gt; Off =&gt; Off
opcache.file_update_protection =&gt; 2 =&gt; 2
opcache.force_restart_timeout =&gt; 180 =&gt; 180
opcache.huge_code_pages =&gt; Off =&gt; Off
opcache.interned_strings_buffer =&gt; 8 =&gt; 8
opcache.lockfile_path =&gt; /tmp =&gt; /tmp
opcache.log_verbosity_level =&gt; 1 =&gt; 1
opcache.max_accelerated_files =&gt; 10000 =&gt; 10000
opcache.max_file_size =&gt; 0 =&gt; 0
opcache.max_wasted_percentage =&gt; 5 =&gt; 5
opcache.memory_consumption =&gt; 128 =&gt; 128
opcache.opt_debug_level =&gt; 0 =&gt; 0
opcache.optimization_level =&gt; 0x7FFEBFFF =&gt; 0x7FFEBFFF
opcache.preferred_memory_model =&gt; no value =&gt; no value
opcache.preload =&gt; no value =&gt; no value
opcache.preload_user =&gt; no value =&gt; no value
opcache.protect_memory =&gt; Off =&gt; Off
opcache.restrict_api =&gt; no value =&gt; no value
opcache.revalidate_freq =&gt; 2 =&gt; 2
opcache.revalidate_path =&gt; Off =&gt; Off
opcache.save_comments =&gt; Off =&gt; Off
opcache.use_cwd =&gt; On =&gt; On
opcache.validate_permission =&gt; Off =&gt; Off
opcache.validate_root =&gt; Off =&gt; Off
opcache.validate_timestamps =&gt; On =&gt; On</pre>



<p>Buset,, banyak.. jangan khawatir setingan itu diabaikan saja, kita cukup berfokus ke setingan komentar dan karena php tidak menggunakan bahasa Indonesia tetapi bahass Inggris, jadi kita cari <em>comment</em> saja.</p>



<pre class="wp-block-preformatted">php -i | grep "opcache" | grep "comment"</pre>



<p>Dan seharusnya di layar menampilkan nilai</p>



<pre class="wp-block-preformatted">opcache.save_comments =&gt; Off =&gt; Off</pre>



<p>Yaaps, sesuai perkiraan di awal, komentar tidak dimasukkan ke cache karena status nya di-Off-kan.</p>



<p>Untuk meng-On-kan nya kita perlu mengubah settingan ini pada file <code>php.ini</code>. </p>



<p>Sebelumnya telah kita ketahui bahwa settingan ini ada pada <code>opcache.save_comments</code> dengan nilai nya adalah <code>Off</code> atau <code>0</code> dalam binary format. Sehingga, untuk mengaktifkannya kita perlu menggantinya ke On atau 1, dengan (<em>*terkadang butuh permission)</em></p>



<pre class="wp-block-preformatted">sed -i 's,opcache.save_comments\=0,opcache.save_comments\=1,' /path/to/your/php/php.ini</pre>



<p>Dan seharusnya jika kita cek settingan php.ini sudah berubah</p>



<pre id="block-37771d43-1af6-461b-aa35-4ed503726704" class="wp-block-preformatted">php -i | grep "opcache.save_comments"</pre>



<p>Sekarang harusnya sudah menghasilkan nilai On</p>



<pre class="wp-block-preformatted">opcache.save_comments =&gt; On =&gt; On</pre>



<p>Dan, sekarang coba jalankan kembali file <code>MyClassWithDockBlock.php</code> dan seharusnya sudah menampilkan komentar yang kita maksud.</p>



<h2>Tes Annotation</h2>



<p>Seharusnya, sampain pada part sebelumnya annotation sudah bekerja dengan normal, dan aplikasi sudah bisa berjalan. Tapi, untuk lebih meyakinkan dan kebutuhan eksperimen, kita akan mencoba annotation dengan contoh yang sederhana.</p>



<p>Untuk contoh ini, kita akan menggunakan library annotation dari doctrine, silahkan setup project dan install</p>



<pre class="wp-block-preformatted">mkdir test-annotation
cd test-annotation
composer init</pre>



<p>Kemudian langsun saja diinstall annotationnya</p>



<pre class="wp-block-preformatted">composer require doctrine/annotations</pre>



<p>Untuk pengujian, pertama kita buat class annotationnya, contoh <code>SomeAnnotation.php</code></p>



<pre class="wp-block-preformatted">&lt;?php

/**
 * @Annotation
 */
class SomeAnnotation
{
    public $someProperty; 
}</pre>



<p>Kemudia kita buat class yang akan meload annotation kita, sekaligus memberi nilai property nya, contoh <code>MyClass.php</code> dengan nilai string <code>Hello, Annotation!</code></p>



<pre class="wp-block-preformatted">&lt;?php

/**
* @SomeAnnotation(someProperty="Hello, Annotation!")
*/
class MyClass
{}
</pre>



<p>Nah, untuk sebagai entry point, kita buat file <code>index.php</code> dan kita load seluruh class untuk diuji, juga annotation reader dari doctrine agar bisa dikenali.</p>



<pre class="wp-block-preformatted">&lt;?php

require __DIR__ . "/vendor/autoload.php";

require __DIR__ . "/SomeAnnotation.php";
require __DIR__ . "/MyClass.php";

use Doctrine\Common\Annotations\AnnotationReader;

$reader = new AnnotationReader();

$refClass = new ReflectionClass(MyClass::class);
$classAnnotation = $reader-&gt;getClassAnnotations($refClass); // array

var_dump($classAnnotation[0]-&gt;someProperty); // ?string</pre>



<p>Untuk menguji kode diatas, silahkan dijalankan. Dan masih kita ingat diatas pada part perbaikan, kita sudah mengaktifkan komentar dan annotation bekerja sepert biasa dan menghasilkan ekspektasi kita, yaitu <code>Hello, Annotation!</code>. </p>



<p>Dan jika, <code>opcache.save_comments</code> kita set jadi <code>0</code>, maka harusnya hasil yang kita dapat bernilai false, disertai notice karena comment tidak diload, </p>



<pre class="wp-block-preformatted">PHP Notice: Undefined offset: 0
PHP Notice: Trying to get property 'someProperty' of non-object</pre>



<p>Dari percobaan sederhana ini, kita paham bahwa annotationnya tidak diload dengan semestinya.</p>



<p>Demikian tentang penyelesaian tentang annotation yang tidak bekerja, jangan lupa tetap improve lebih dalam dan semoga bermanfaat..</p>
<!--kg-card-end: html-->
