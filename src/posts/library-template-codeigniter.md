---
id: 63bc55848e392205482244a3
title: "Library Template Codeigniter"
feature_image: /content/images/wordpress/2019/10/1.jpg
description: "Teknologi templating adalah hal yang sangat lumrah saat design maupun pembuatan template."
date: 2019-10-09
tags: posts
slug: library-template-codeigniter
layout: layouts/post.njk
---

<!--kg-card-begin: html--><p>Teknologi templating adalah hal yang sangat lumrah saat design maupun pembuatan template.</p>
<p>Hal ini sering dipergunakan untuk membuat menghindari hal hal yang berulang. Dengan template kita tidak harus menulis kode, mendesain hal yang sebenarnya sama. Kenapa? Karena capek..</p>
<p>Oke, berikut codenya dan</p>
<pre>&lt;?php
class Template {
    public $template_data = [];

    function set($name, $value){
        $this-&gt;template_data[$name] = $value;
    }

    function load($template = '', $view = '', $data = [], $return = FALSE){
        $this-&gt;CI =&amp; get_instance();
        $this-&gt;set('contents', $this-&gt;CI-&gt;load-&gt;view($view, $data, TRUE));
        return $this-&gt;CI-&gt;load-&gt;view($template, $this-&gt;template_data, $return);
    }
}

?&gt;</pre>
<h3>Instalasi Template</h3>
<p>Pertama, pastikan anda sudah menginstall Codeigniter di projek anda.. (yaiyalah)</p>
<p>Kemudian tambahkan file <strong>Template.php&nbsp;</strong>pada folder&nbsp;<em>application/libraries&#8230;</em></p>
<p>Silahkan ketik ulang (atau copas) kode diatas dan simpan..</p>
<h3>Loading Template</h3>
<p>Selanjutnya, pada buka file&nbsp;<em>application/config/autoload.php&nbsp;</em>kemudian pada <em>libraries</em> tambahkan &#8220;template&#8221;</p>
<pre>$autoload['libraries'] = array("template");</pre>
<h3>Membuat File View Template</h3>
<p>File view ini nantinya akan menjadi main view dari template, dimana file ini akan menyediakan satu area khusus ($contents) yang menjadi view utama dari web kita.</p>
<p>Jadi sifat file ini akan sama saja dan hanya mengalami perubahan pada $contents nya saja.</p>
<p>Silahkan tambhakan file viwe baru pada folder&nbsp;<em>application/view/template.php</em></p>
<pre>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Templating CI&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;!-- Bagian Header (Pembuka) dari template --&gt;
    &lt;h1&gt;Selamat Datang&lt;/h1&gt;

    &lt;!-- Bagian pembuka file view (yang akan dinamis) --&gt;
    &lt;?php echo $contents ?&gt;
    &lt;!-- Bagian penitup file view --&gt;

    &lt;!-- Bagian Footer (Penutup) dari template --&gt;
    &lt;div&gt;
        Copyright azharisaputra.com
    &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>
<h3>Membuat File View</h3>
<p>Nah, untuk konten view akan kita coba dua file view (view1.php dan view2.php)</p>
<p><strong>applivation/view/view1.php</strong></p>
<pre>&lt;p&gt;Ini halaman 1&lt;/p&gt;</pre>
<p><strong>applivation/view/view2.php</strong></p>
<pre>&lt;p&gt;Ini halaman 2&lt;/p&gt;</pre>
<p>Seharusnya bisa ktia tebak dari kasus diatas harusnya baginan&nbsp;<strong>Selamat Datang&nbsp;</strong>dan <strong>Copyright azharisaputra.com&nbsp;</strong>harusnya tetap tidak berubah, sementara untuk bagian ditengahnya (view) akan berubah sesua konten viwenya.</p>
<h3>Membuat Controller</h3>
<p>Untuk melakukan penujian silahkan buat sebuah controller sample, misal kita buat <strong>controller Blog</strong></p>
<p>Untuk menggunakna template pada controller dengan sintaks berikut</p>
<pre>$this-&gt;template-&gt;load($template, $view, $data)</pre>
<ul>
<li>$template, berisi file template yang akan diload</li>
<li>$view, berupa file view yang akan diload di file template</li>
<li>$data, bisa digunakan untuk parsing data ke file view lewat parameter ini</li>
</ul>
<p>Tambahkan file baru di <em>application/controller/Blog.php&nbsp;</em>dan ketikkan kode berikut</p>
<pre>&lt;?php
class Blog extends CI_Controller{

    public function satu(){
      $this-&gt;template-&gt;load('<strong>template</strong>','<strong>view1</strong>');
    }

    public function dua(){
        $this-&gt;template-&gt;load('<strong>template</strong>','<strong>view2</strong>');

    }

}</pre>
<p>Kemudian simpan.</p>
<p>Hasilnya silahkan cek dibrowser anda masing masing (url sesuaikan)</p>
<p><em>http://localhost/ci/index.php/blog/satu&nbsp;</em>untuk mengakses view satu</p>
<p><em>http://localhost/ci/index.php/blog/dua</em> untuk mengakses view yang kedua</p>
<p>&#8212;</p>
<p>Sekian, Semoga bermanfaat..</p>
<!--kg-card-end: html-->
