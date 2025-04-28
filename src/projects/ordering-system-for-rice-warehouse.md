---
title: "Rice Ordering System "
featured_image: "/rice-ordering-system/welcome-page.png"
summary: "The application built for manage the ordering for rice for a local warehouses. The warehouse needs to increase the productivity of selling and reporting by log the selling data with modern solutions to replace the old solutions using books."
date: 2025-01-01
tags: projects
stacks:
  - Laravel
  - TailwindCSS
  - AlpineJS
  - LaravelExcel
slug: travel-ticket-booking-system
layout: layouts/project.njk
github: "https://github.com/azharisikumbang/penjualan-beras"
youtube: "#"
live_demo: "https://demo-toko-beras.azharisaputra.web.id/"
---

The application built for manage the ordering for rice for a local warehouses. The warehouse needs to increase the productivity of selling and reporting by log the selling data with modern solutions to replace the old solutions using books.

The old workflow works start with record the daily orders in a single book. The administrator will recap the daily selling manually with calculator and write the result in the book. This process repeat every day, and the final recap is monthly report.

What wrong with this process? There is no significan wrong with these process, but there are many aspect can be improved to increase the productivities. For example, manual calculation can possibly generate wrong result, even with calculcator, because there are many human factors. Or when the products amount and variant are many, manually do the calculation potentionally generate wrong results.

So, what we proposed?

1. We designed and developed an ordering management system to decrease the possibility for human errors.
2. We decreased time spent for manually calculate the daily selling report..
3. We generate period-based reports to reduce the time and errors.
4. We also add continous users relationship by implementing semi-automated Whatsapp broadcast system to sending the promotions and coupons.

## Screenshoot

1. Welcome page
   Welcome page is using for authenticate before access the systems. A guest user should input username and password. Or if you are not registered yet, got to link _"Silahkan Daftar"_ to register an account.
   ![Welcome page](/media/rice-ordering-system/welcome-page.png)

2. Ordering page
   The ordering page will display all of the available rices and variants with the current stocks. You can added the product to cart and define how many (kg) you want to buy. Just click the _"Pilih"_ button and set the amount (kg). And then goto _"Pesan Sekarang"_ to continue the orders.
   ![Ordering page](/media/rice-ordering-system/ordering-page.png)
3. Cart and Discount
   This page is for re-confirmation your orders as you can see, all of your orders displayed with the amount you want to buy. You also can change your order amount with tombol _"Ubah"_ and change the amount (kg). Or you can just drop the item by click on button _"Hapus"_.

   You can also add a coupon promotion on the input on right side and hit _"Cek Coupon"_ to make sure and apply the coupon still valid. If it is valid, it will automatically re-calculate the final price.
   ![Ordering page](/media/rice-ordering-system/cart-discount-page.png)

4. Address Confirmation Page
   Just provide the address information to make it is easier when the administrator trying to send the order to you.
   ![Ordering page](/media/rice-ordering-system/address-confirmation-page.png)

5. Payment Page
   This page will be the final step, you will provide the transfer receipt to get confirmation by the administrator. You just can do it later if you dont have instant access to your payment.
   ![Ordering page](/media/rice-ordering-system/payment-page.png)

6. Order History Page
   After you did the payment (or not), you can see the order history on redirect or on menu _"Riwayat Pembelian"_. As you can see every fresh ordering needs admin confirmation before it is executed to send.
   ![Ordering page](/media/rice-ordering-system/order-history-page.png)
7. Admin Orders Page
   Every orders will be displayed on administrator page on menu _"Pesanan Masuk"_. We add rich filters to make it easier to display only what you needs. To see the order details just hit _"Lihat Detail"_ button.
   ![Admin Orders page](/media/rice-ordering-system/admin-incoming-orders-page.png)

8. Admin Single Order and Confirmation Page
   All of the order's information will be displayed here. You can download the payment receipt to make sure the payment is valid. To process the order just hit _"Konfirmasi Pembayaran"_ to confirm for sending the order or hit _"Tolak Pembayaran"_ to reject the order. Every action will be informed to the customer order window.
   ![Admin Orders page](/media/rice-ordering-system/admin-single-order-history-page.png)

9. Order Confirmed Page
   After the administrator confirmed the order, the customer can see the confirmation status in column _"Konfirmasi Pembayaran"_. There are many status, such as _"DITERIMA"_, _"DITOLAK"_, or _"PENDING"_.
   ![Admin Orders page](/media/rice-ordering-system/order-confirmed-page.png)

10. Promotion Page
    You can create a new promo here with auto-generated coupon code, expired date, minimum total price order and the amount or percent of discount (auto-converted).
    ![Admin Orders page](/media/rice-ordering-system/admin-promotion-page.png)

    Every members number will be displayed and you can check who ever want to receive the whatsapp message. Start with choose the coupon promo and re-check the coupon information. And then hit _"Kirim Pesan"_ to broadcast the promo to the selected numbers.

    ![Admin Broadcast page](/media/rice-ordering-system/admin-broadcast-promo-page.png)

> The whatsapp not working for demo purpose and already disabled cause the feature is not free.

And others, feel free to use the demo link.

## Tech Stack

Tech Stack we used in this projects are,

1. PHP 8.0 or newer
2. TailwindCSS v3
3. AlpineJS
4. DomPDF

## Give a Try

Demo Link : [https://demo-toko-beras.azharisaputra.web.id/](https://demo-toko-beras.azharisaputra.web.id/)

```txt
User Information:
- Administrator
  - username : admin
  - password : admin

- User
  - username : demouser
  - password : demouser
```
