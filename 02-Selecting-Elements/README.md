# Pertemuan 2 — Selecting Elements (Menunjuk Elemen)

## 🎯 Tujuan Pembelajaran
- Bisa mengambil satu atau banyak elemen dari DOM menggunakan berbagai method
- Paham kapan pakai `querySelector` vs `querySelectorAll`
- Paham perbedaan hasil "satu elemen" vs "kumpulan elemen" (NodeList)

---

## 📖 Materi

### 2.1 Kenapa harus "menunjuk" dulu?

Sebelum mengubah apapun di DOM, JavaScript harus tahu dulu **elemen spesifik mana** yang dimaksud. Proses ini disebut *selecting* atau *querying*. Ini adalah langkah pertama di HAMPIR SEMUA interaksi DOM — tanpa ini, tidak ada yang bisa dilakukan ke elemen manapun.

### 2.2 Method modern (disarankan, pakai ini sebagai standar)

```js
document.querySelector(selector)     // ambil elemen PERTAMA yang cocok
document.querySelectorAll(selector)  // ambil SEMUA elemen yang cocok
```

`selector` di sini pakai syntax **CSS selector** — kalau kamu sudah bisa CSS, kamu otomatis sudah bisa ini:

```js
document.querySelector('#judul')        // by id
document.querySelector('.box')          // by class
document.querySelector('p')             // by tag name
document.querySelector('div.card')      // div DENGAN class card
document.querySelector('ul > li')       // li yang anak langsung dari ul
document.querySelector('input[type="email"]') // by atribut
```

### 2.3 Method lama (masih dipakai, perlu dikenali walau bukan prioritas)

```js
document.getElementById('judul')          // by id, hasilnya 1 elemen
document.getElementsByClassName('box')    // by class, hasilnya HTMLCollection
document.getElementsByTagName('p')        // by tag, hasilnya HTMLCollection
```

**Kenapa `querySelector` lebih disarankan?** Karena satu syntax bisa dipakai untuk semua jenis pencarian (id, class, tag, kombinasi kompleks), sedangkan method lama butuh method berbeda-beda untuk tiap jenis.

### 2.4 Perbedaan penting: elemen tunggal vs kumpulan elemen

```js
const satu = document.querySelector('.box');     // 1 objek elemen
const semua = document.querySelectorAll('.box'); // NodeList (mirip array)

satu.textContent = "Halo";       // langsung bisa diubah

semua.forEach(function (el) {    // harus di-loop dulu untuk ubah semuanya
  el.textContent = "Halo";
});
```

Kesalahan paling umum pemula: mencoba `semua.textContent = "Halo"` langsung — ini **tidak akan bekerja**, karena `semua` itu kumpulan (list), bukan satu elemen. Kamu harus loop satu-satu.

### 2.5 Kalau elemen tidak ditemukan

```js
const el = document.querySelector('.tidak-ada');
console.log(el); // hasilnya: null
```

Ini penting untuk diketahui, karena mencoba mengubah properti dari `null` (misal `el.textContent = "x"`) akan menghasilkan **error**: `Cannot set properties of null`. Ini error paling sering ditemui pemula — biasanya karena salah ketik nama class/id, atau script dijalankan sebelum elemen HTML-nya ada.

---

## 💻 Latihan

### Latihan 1 — Pemanasan
```html
<div id="container">
  <h2 class="judul">Belanjaan Hari Ini</h2>
  <p class="item">Apel</p>
  <p class="item">Roti</p>
  <p class="item">Susu</p>
</div>
```
Tulis kode JS untuk:
1. Ambil elemen `#container`, cetak ke console
2. Ambil elemen `.judul` (pakai `querySelector`), cetak `textContent`-nya
3. Ambil SEMUA `.item` (pakai `querySelectorAll`), cetak berapa jumlahnya (`.length`)

### Latihan 2 — Loop dan Ubah
Dari HTML yang sama, gunakan `querySelectorAll('.item')` lalu `forEach` untuk mengubah `textContent` setiap item jadi huruf besar semua (gunakan `.toUpperCase()` di JavaScript string). Hasil akhirnya harusnya "APEL", "ROTI", "SUSU".

### Latihan 3 — Debugging (penting!)
Sengaja tulis `document.querySelector('.tidak-ada-classnya')`, cetak hasilnya ke console. Lihat sendiri kenapa hasilnya `null`. Ini latihan supaya kamu TIDAK PANIK kalau nanti ketemu error serupa di project asli — kamu akan langsung tau harus cek nama selector-nya.

### Tantangan (Opsional)
Cari tahu (boleh googling): apa itu **NodeList** dan apa bedanya sama **Array** biasa di JavaScript? (Petunjuk: coba `Array.isArray(document.querySelectorAll('p'))` di console, lihat hasilnya)

---

## ✅ Checklist Sebelum Lanjut
- [ ] Saya bisa ambil 1 elemen pakai `querySelector` tanpa lihat contoh
- [ ] Saya bisa ambil banyak elemen pakai `querySelectorAll` dan me-loop-nya dengan `forEach`
- [ ] Saya paham kenapa `semua.textContent = "x"` itu salah
- [ ] Saya paham kenapa hasil `querySelector` yang tidak ketemu itu `null`, dan kenapa itu bisa bikin error

Kalau semua sudah dicentang → lanjut ke `03-Konten-dan-Gaya`.
