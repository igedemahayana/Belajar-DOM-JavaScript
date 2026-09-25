# Pertemuan 8 — Event Lanjutan & Event Delegation

## 🎯 Tujuan Pembelajaran
- Paham konsep event bubbling
- Bisa menerapkan event delegation untuk elemen dinamis
- Bisa menggunakan `preventDefault()` dan `stopPropagation()` dengan tepat

---

## 📖 Materi

### 8.1 Event Bubbling

Ketika sebuah event terjadi pada suatu elemen, event itu tidak berhenti di elemen tersebut saja — dia **"menggelembung" (bubble) naik** ke elemen induknya, lalu ke induk dari induknya, terus sampai ke `document`.

```html
<div id="luar">
  <button id="dalam">Klik</button>
</div>
```
```js
document.querySelector('#luar').addEventListener('click', function () {
  console.log('Diterima oleh DIV luar');
});
document.querySelector('#dalam').addEventListener('click', function () {
  console.log('Diterima oleh BUTTON dalam');
});
```
Kalau tombol di dalam diklik, urutan yang tercetak di console adalah:
```
Diterima oleh BUTTON dalam
Diterima oleh DIV luar
```
Event dari tombol "menggelembung" ke `div` di luarnya. Fenomena inilah dasar dari **event delegation**.

### 8.2 Event Delegation — memanfaatkan bubbling

**Masalah:** kalau kamu punya banyak elemen (atau elemen yang dibuat dinamis lewat `createElement` di Pertemuan 5), memasang `addEventListener` satu-satu ke setiap elemen itu tidak efisien — dan elemen yang dibuat SETELAH listener dipasang **tidak akan otomatis memilikinya**.

**Solusi:** pasang SATU listener saja di elemen induk (yang sudah pasti ada sejak awal), lalu manfaatkan `event.target` untuk mengetahui elemen anak mana yang sebenarnya memicu klik.

```js
const daftar = document.querySelector('#daftar'); // induk, sudah ada sejak awal

daftar.addEventListener('click', function (event) {
  if (event.target.tagName === 'LI') {
    console.log('Yang diklik:', event.target.textContent);
  }
});
```

Cara yang lebih fleksibel menggunakan `closest()` (dari Pertemuan 6), berguna kalau struktur elemen di dalam `<li>` lebih rumit:
```js
daftar.addEventListener('click', function (event) {
  const li = event.target.closest('li');
  if (li) {
    console.log('Yang diklik:', li.textContent);
  }
});
```

Keuntungan event delegation:
1. Performa lebih baik (1 listener vs ratusan listener)
2. Elemen baru yang ditambahkan belakangan tetap otomatis "kena" listener ini
3. Kode lebih ringkas

### 8.3 `preventDefault()` — mencegah perilaku bawaan browser

Beberapa elemen HTML punya perilaku default. Contoh: tombol submit form membuat halaman reload; tautan `<a>` membuat browser pindah halaman. `preventDefault()` menghentikan perilaku itu supaya kamu bisa mengambil alih dengan JavaScript.

```js
form.addEventListener('submit', function (event) {
  event.preventDefault(); // halaman tidak akan reload
  console.log('Form ditangani lewat JS');
});
```

### 8.4 `stopPropagation()` — menghentikan bubbling

Kadang kamu TIDAK ingin event "menggelembung" ke induknya. Contoh kasus: sebuah kartu yang seluruhnya bisa diklik untuk membuka detail, tapi ada tombol "Favorit" kecil di dalamnya yang seharusnya tidak ikut membuka detail saat diklik.

```js
tombolFavorit.addEventListener('click', function (event) {
  event.stopPropagation(); // event ini tidak akan "naik" ke kartu induknya
  console.log('Favorit diklik, kartu TIDAK ikut kebuka');
});
```

**Peringatan:** jangan gunakan `stopPropagation()` sebagai kebiasaan default — ini bisa membuat event delegation di induk jadi tidak berjalan sama sekali kalau dipakai sembarangan. Gunakan hanya ketika memang ada konflik nyata seperti contoh di atas.

---

## 💻 Latihan

### Latihan 1 — Membuktikan Bubbling
Buat struktur `<div id="luar"><button id="dalam">Klik</button></div>` seperti contoh materi 8.1. Pasang listener di kedua elemen, buktikan sendiri urutan yang tercetak di console.

### Latihan 2 — Event Delegation dari Nol (Wajib)
```html
<ul id="daftarBelanja"></ul>
<input id="inputItem" placeholder="Nama barang">
<button id="btnTambah">Tambah</button>
```
1. Setiap "Tambah" diklik: buat `<li>` baru (ingat pola Pertemuan 5) isinya nilai input, tempelkan ke `<ul>`.
2. Pasang **SATU** `addEventListener('click', ...)` pada `<ul>`-nya SAJA (bukan di tiap `<li>`). Ketika sebuah `<li>` diklik, toggle class `.selesai` pada `<li>` itu (buat CSS `.selesai { text-decoration: line-through; }`).
3. Buktikan: coba tambahkan beberapa item baru, lalu klik item yang BARU DITAMBAHKAN itu — harus tetap bisa di-toggle walau `<li>`-nya dibuat setelah listener dipasang.

### Latihan 3 — Kombinasi `closest()` + Delegation + Hapus
Lanjutkan Latihan 2. Ubah tiap `<li>` supaya isinya jadi `teks barang + tombol kecil "❌"` (gunakan `innerHTML`, ingat peringatan keamanan di Pertemuan 3 — di sini aman karena teksnya bukan dari sumber luar berbahaya). Di dalam listener yang SAMA di `<ul>`, tambahkan pengecekan: kalau yang diklik adalah tombol ❌ (`event.target.tagName === 'BUTTON'`), maka `event.target.closest('li').remove()` — hapus `<li>`-nya. Kalau BUKAN tombol ❌ yang diklik (berarti klik di teksnya), jalankan toggle `.selesai` seperti Latihan 2.

### Latihan 4 — `preventDefault` di Form
```html
<form id="formCari">
  <input type="text" id="katakunci">
  <button type="submit">Cari</button>
</form>
```
Pasang event `submit`, panggil `preventDefault()`, lalu cetak ke console `"Mencari: " + nilai input`, TANPA halaman reload sama sekali.

---

## ✅ Checklist Sebelum Lanjut
- [ ] Saya paham konsep event bubbling dan bisa membuktikannya sendiri
- [ ] Saya bisa menerapkan event delegation dari nol tanpa lihat contoh
- [ ] Saya paham beda `preventDefault()` (stop perilaku bawaan) dan `stopPropagation()` (stop bubbling)
- [ ] Saya berhasil menyelesaikan Latihan 3 (kombinasi delegation + closest + hapus)

Kalau semua sudah dicentang → lanjut ke `09-Form-dan-Validasi`.
