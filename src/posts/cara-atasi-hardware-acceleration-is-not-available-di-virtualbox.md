---
id: 63bc55848e392205482244ca
title: "Cara Atasi \"Hardware acceleration is not available\" di VirtualBox"
description: "Virtualbox merupakan sebuah software yang sangat penting untuk anak SMK khususnya untuk jurusan TKJ, emangnya apasih gunanya virtualbox…"
date: 2020-07-18
tags: posts
slug: cara-atasi-hardware-acceleration-is-not-available-di-virtualbox
layout: layouts/post.njk
---

<!--kg-card-begin: html-->
<p><a rel="noreferrer noopener" aria-label="Virtualbox  (opens in a new tab)" href="https://www.virtualbox.org/" target="_blank">Virtualbox </a>merupakan sebuah software yang sangat penting untuk anak SMK khususnya untuk jurusan TKJ, emangnya apasih gunanya virtualbox ini?, ok kita bahas sedikit tentang aplikasi ini. VirtualBox sendiri merupakan salah satu aplikasi untuk memvirtualisasikan semua hampir semua sistem operasi, mulai dari Windows , Linux, sampai sistem operasi untuk networking seperti RouterOS. Jadi kalian bisa mengisntal komputer di dalam komputer. Tanpa khawatir sistem operasi utama kalian terganggu.</p>



<p>Tapi pernah gak sih kalian mengalami error seperti &#8220;<strong>Hardware acceleration is not available</strong>&#8220;,<strong> </strong>hal ini sepertinya sangat menjengkelkan, tapi kenapa sih ini bisa terjadi?, hal ini biasanya terjadi karena pada <strong>Processor</strong> <strong><em>PC</em></strong> fitur virtualisasi processor kalian dalam keadaan disable, hal ini sering terjadi pada processor AMD, namun jangan takut dulu, hal ini bisa di  atasi kok caranya mudah banget lansung saja :</p>



<ol><li><strong>Masuk kedalam bios</strong>, untuk masuk kesini kalian harus restart terlebih dahulu pc kalian, dan setelah itu tekan tombol bios sesuai motherboard yang kalian pakai biasanya tombol <strong>Del, </strong>atau <strong>F2 </strong></li><li>Setelah masuk kalian masuk ke tab <strong>advanced</strong> lalu pilih <strong>CPU Configuration</strong>.</li><li>Setelah masuk kalian pilih <strong>Enable </strong>pada <strong>Secure Virtual Machine</strong>, Atau <strong>SVM Mode </strong> </li></ol>



<figure class="wp-block-image size-large"><img loading="lazy" width="1024" height="768" src="/media/wordpress/2020/07/WhatsApp-Image-2020-07-19-at-00.12.11-1024x768.jpeg" alt="" class="wp-image-1431" srcset="/media/wordpress/2020/07/WhatsApp-Image-2020-07-19-at-00.12.11-1024x768.jpeg 1024w, http://localhost:2368/media/wordpress/2020/07/WhatsApp-Image-2020-07-19-at-00.12.11-300x225.jpeg 300w, http://localhost:2368/media/wordpress/2020/07/WhatsApp-Image-2020-07-19-at-00.12.11-768x576.jpeg 768w, http://localhost:2368/media/wordpress/2020/07/WhatsApp-Image-2020-07-19-at-00.12.11.jpeg 1280w" sizes="(max-width: 1024px) 100vw, 1024px" /><figcaption>Tampilan Pada Motherboard Asus Prime A320 M-K</figcaption></figure>



<p>dan VirtualBox Kalian telah bisa digunakan</p>



<p></p>



<figure class="wp-block-embed-youtube wp-block-embed is-type-video is-provider-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">
<iframe loading="lazy" title="SSH SG.GS Account Creator" width="640" height="360" src="https://www.youtube.com/embed/cdEZBUaokTs?feature=oembed" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div></figure>
<!--kg-card-end: html-->
