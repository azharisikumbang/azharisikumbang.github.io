---
id: 63bc55848e392205482244d7
title: "Symfony : Handling Exception pada API"
feature_image: /content/images/wordpress/2021/03/Symfony-handling-exception.png
description: "Assalamualaikum"
date: 2021-03-06
tags: posts
slug: symfony-handling-exception-pada-api
layout: layouts/post.njk
---

<!--kg-card-begin: html-->
<p>Assalamualaikum</p>



<p>Salah satu hal yang paling penting pada saat membangun aplikasi adalah bagaimana cara menghandle exception-nya. Sedikit informasi exception secara singkat adalah bagian dari program yang kita ingin berikan perlakukan khusus di situasi khusus pula. Kondisi ini mirip error, tapi bukan error hanya tidak sesuai dengan ekspektasi kita. Jadi kita perlu menghandle situasi seperti ini (secara istilah disebut <a href="https://en.wikipedia.org/wiki/Exception_handling" target="_blank" rel="noreferrer noopener">handling exception</a>).</p>



<p>Khusus untuk tulisan ini studi kasus yang dilakukan adalah handling exception pada API (Application Programming Interface) dengan menggunakan PHP sebagai bahasa dan Symfony sebagai framework. Sementara untuk exception yang akan kita handle satu saja sebagai contoh, meski pada prakteknya ada banyak exception yang harus dihandle, yakni Bad Request Exception.</p>



<p>Baca Juga : <a href="https://coretanit.com/php-annotation-tidak-bekerja/" target="_blank" rel="noreferrer noopener">PHP &#8211; Annotion Tidak Bekerja</a></p>



<p>Skenarionya sederhana, yaitu dikirimkan request beserta payload berupa umur:integer ke endpoint dimana terdapat invalid argument yang akan dikirim. Misalnya, argument yang akan diterima adalah argument yang hanya bernilai dibawah 50. Jika diluar ketentuan maka akan diberikan exception. Dengan contoh skenario inilah selanjutnya kita melakukan skenario yang lebih kompleks.</p>



<pre class="wp-block-preformatted">POST /api/number HTTP/1.1

...

value=51</pre>



<p>Sementara untuk response exception akan mengikuti pola yang umum digunakan yaitu terdapat error, code dan message.</p>



<pre class="wp-block-preformatted">{
    "errors" : "array",
    "code" : "integer",
    "message" : "string"
}</pre>



<p>Selanjutnya mari eksekusi ke project kita.</p>



<h2>Membuat Response Model</h2>



<p>Sesuai dengan skenario response yang sudah dirancang diatas, kita akan membuat response model. Untuk seluruh response model boleh ditaruh di folder Response di src, atau disesuaikan practice masing-masing. Sementara untuk nama file sendiri akan kita buat <code>ApiProblemResponse</code>.</p>



<pre class="wp-block-preformatted">&lt;?php

namespace App\Response;

class ApiProblemResponse
{
    public $code;

    public $message;

    public $errors = [];

    public function __construct($errors, $code, $message)
    {
        $this-&gt;errors = $errors; 
        $this-&gt;code = $code; 
        $this-&gt;message = $message; 
    }
}</pre>



<h2>Membuat Exception</h2>



<p>Pada source project kita di folder <code>src</code> silahkan buat folder Exception untuk meletakkan semua exception yang akan kita gunakan. Tahap pertama kita buat interface sebagai kontrak untuk exception kita, sebagai contoh beri saja nama <code>ApiExceptionInterface</code>.</p>



<pre class="wp-block-preformatted">&lt;?php

namespace App\Exception;

interface ApiExceptionInteraface extends \Throwable
{}</pre>



<p>Selanjutnya, sesuai dengan contoh kasus yang akan dibuat yaitu menghandle request untuk umur, maka perlu dibuat exception untuk umur. Tentu pada prakteknya exception bisa lebih kompleks.</p>



<p>Exception ini akan meng-extend class Exception dari built-in PHP dan sekaligus mengimplementasikan kontrak ApiExceptionInterface.</p>



<p>Sekedar informasi, selain exception kontrak yang manual kita buat, symfony juga telah menyediakan client-contracts yang telah datang bersamaan dengan symfony seperti <code>ClientExceptionInterface</code>, <code>HttpExceptionInterface</code> dan sebagainya. (cek dokumentasi atau repo untuk selengkapnya)</p>



<pre class="wp-block-preformatted">&lt;?php

namespace App\Exception;

use Symfony\Component\HttpFoundation\Response;

class AgeInvalidException extends \Exception implements ApiExceptionInterface
{
    private $statusCode;

    public function __construct(string $message = null, int $statusCode = null)
    {
        $this->statusCode = ($statusCode) ?? Response::HTTP_BAD_REQUEST;

        $message = ($message) ?? "Usia melebihi batas yang ditentukan.";
        parent::__construct($message, $this->statusCode);
    }

    public function getStatusCode()
    {
        return $this->statusCode;
    }
}</pre>



<h2>Event Listener</h2>



<p>Untuk menangkap exception kita sendiri akan menggunakan fitur event listener milik Symfony. Pertama, buat folder <code>EventListener</code> di source folder kita, dan untuk listener sebagai contoh kita buat dengan nama <code>ApiExceptionListener</code></p>



<p>Sesuai dokumentasi symfony, listener akan mengeksekusi secara default sebuah method bernama <code>onKernelException</code> dan seluruh logic exception kita akan diletakkan disini.</p>



<pre class="wp-block-preformatted">&lt;?php

namespace App\EventListener;

use App\Exception\ApiExceptionInterface;
use App\Response\ApiProblemResponse;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Event\ExceptionEvent;

class ApiExceptionListener     
{
    public function onKernelException(ExceptionEvent $event) 
    {

        if (!$event-&gt;getThrowable() instanceof ApiExceptionInterface) {
            return;
        }

        $exception = $event-&gt;getThrowable();

        $response = new JsonResponse(); 
        $response-&gt;setStatusCode($exception-&gt;getStatusCode());

        $content = $this-&gt;createApiResponse($exception);
        $response-&gt;setContent(
            json_encode($content)
        );

        $event-&gt;setResponse($response);
    }

    private function createApiResponse(\Throwable $exception)
    {
        return new ApiProblemResponse(
            $exception-&gt;getMessage(), 
            $exception-&gt;getStatusCode(), 
            Response::$statusTexts[$exception-&gt;getStatusCode()]
        );
    }
}</pre>



<p>Untuk dapat menggunakan Event Listener yang baru kita buat, kita perlu mendaftarkan listener kita agar dikenali oleh symfony. Pada <code>services.yaml</code> di folder config, cukup tambahkan konfigurasi berikut.</p>



<pre class="wp-block-preformatted">services:

    # konfigurasi lain 

    App\EventListener\ApiExceptionListener:
        tags:
            - { name: kernel.event_listener, event: kernel.exception }

    # konfigurasi lain</pre>



<p>Untuk memastikan listener kita terdaftar, bisa memakai debugger symfony <code>php bin/console debug:event-dispatcher</code> maka seharusnya pada part kernel.exception listener kita sudah terdaftar.</p>



<h2>Implementasi</h2>



<p>Untuk penggunaan sederhana saja, cukup throw konkrit class dari exception yang telah kita buat, yaitu <code>AgeInvalidException</code>. Sesuai skenario sederhana diatas, kita akan memunculkan exception jika value dari age lebih dari 50.</p>



<p>Sebagai contoh implementasi pada sebuah controller yaitu <code>Api\AgeController</code> dan method <code>index</code> yang menghandle sebuah route.</p>



<pre class="wp-block-preformatted">&lt;?php

namespace App\Controller\Api;

use App\Exception\AgeInvalidException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AgeController extends AbstractController
{
    /**
     * @Route("/api/age", name="api_age", methods={"POST"})
     */
    public function index(Request $request): Response
    {
        $age = $request-&gt;toArray()["age"];

        if ($age &gt;= 50) {
            throw new AgeInvalidException(); // di-throw jika kondisi tidak meenuhi
        }

        return $this-&gt;json([
            "age" =&gt; $age
        ]);
    }
}</pre>



<p>Untuk implementasi yang lebih kompleks bisa saja dilakukan di layer logic seperti di service dan bisa dikombinasikan dengan library validator seperti symfony validator, tinggal set rule-nya.</p>



<h2>Demo</h2>



<p>Untuk pengetesan punya dua skenario, yaitu skenario pertaman dengan usia yang memenuhi kriteria, misal 20 tahun, sedangkan skenario kedua dengan usia 60 tahun.</p>



<p>Request 1:</p>



<pre class="wp-block-preformatted">$ curl -i -H POST http://localhost:8000/api/age -H 'Content-Type: application/json' -d '{"age":20}'
HTTP/1.1 200 OK
Cache-Control: no-cache, private
Content-Type: application/json
Date: Fri, 05 Mar 2021 11:15:13 GMT
X-Powered-By: PHP/7.3.0
X-Robots-Tag: noindex
Content-Length: 10

{"age":20}</pre>



<p>Request 2:</p>



<pre class="wp-block-preformatted">$ curl -i -H POST http://localhost:8000/api/age -H 'Content-Type: application/json' -d '{"age":60}'
HTTP/1.1 400 Bad Request
Cache-Control: no-cache, private
Content-Type: application/json
Date: Fri, 05 Mar 2021 11:18:36 GMT
X-Powered-By: PHP/7.3.0
X-Robots-Tag: noindex
Content-Length: 86

{"code":400,"message":"Bad Request","errors":["Usia melebihi batas yang ditentukan."]}</pre>



<p>Jika kita lihat payload response yang kita dapatkan sudah seperti yang kita inginkan, dimana setiap ada request <code>age</code> yang melebihi kriteria (&gt;50) maka akan exception akan ditampilkan beserta struktur json response nya.</p>



<pre class="wp-block-preformatted">{
    "code": 400,
    "message": "Bad Request",
    "errors": [
        "Usia melebihi batas yang ditentukan."
    ]
}</pre>



<p>Semoga bermanfaat, terima kasih</p>



<p>Catatan : versi symfony yang digunakan yaitu symfony5, akan sedikit berbeda dengan symfony4</p>
<!--kg-card-end: html-->
