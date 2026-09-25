# Pertemuan 4 — Atribut dan Dataset

## 🎯 Tujuan Pembelajaran
- Bisa membaca dan mengubah atribut HTML standar (`src`, `href`, dll) lewat JS
- Bisa menyimpan dan membaca data custom di elemen menggunakan `data-*` dan `dataset`

---

## 📖 Materi

### 4.1 Atribut standar

Hampir semua atribut HTML bisa dibaca/diubah lewat JavaScript dengan dua cara:

**Cara 1 — Properti langsung (lebih umum dipakai):**
```js
const gambar = document.querySelector('#foto');
gambar.src;              // baca
gambar.src = "baru.jpg"; // ubah
```

**Cara 2 — Method `getAttribute`/`setAttribute` (lebih eksplisit, dipakai untuk atribut yang tidak punya properti langsung):**
```js
gambar.getAttribute('src');
gambar.setAttribute('src', 'baru.jpg');
gambar.removeAttribute('src');
```

### 4.2 Atribut custom: `data-*` dan `dataset`

HTML mengizinkan kamu menambahkan atribut buatan sendiri asal diawali `data-`. Ini cara **resmi** untuk menyimpan data tambahan langsung di elemen HTML, tanpa mengganggu atribut standar.

```html
<div id="produk" data-id="102" data-nama="Sepatu Lari" data-harga="250000"></div>
```

```js
const produk = document.querySelector('#produk');

produk.dataset.id;      // → "102"
produk.dataset.nama;    // → "Sepatu Lari"
produk.dataset.harga;   // → "250000"

produk.dataset.harga = "200000"; // bisa diubah juga
```

**Aturan penulisan:** atribut HTML `data-nama-produk` otomatis diakses di JS sebagai `dataset.namaProduk` (kebab-case di HTML → camelCase di JS, sama seperti aturan CSS di style).

**⚠️ Penting:** semua nilai dari `dataset` itu bertipe **string**, walaupun angka. Kalau kamu butuh operasi matematika, harus dikonversi dulu:
```js
const harga = Number(produk.dataset.harga); // sekarang baru bisa dihitung
```

### 4.3 Kapan pakai atribut biasa vs dataset?

- Atribut standar (`src`, `href`, `value`, `checked`) → sudah punya "makna" bawaan di HTML, browser tahu cara memprosesnya
- `data-*` → dipakai untuk info yang HANYA kamu (developer) yang butuh, browser tidak memprosesnya secara khusus — biasanya dipakai untuk menyimpan ID, status, atau kategori yang akan dipakai ulang oleh JavaScript kamu sendiri

---

## 💻 Latihan

### Latihan 1 — Baca Atribut
```html
<img id="fotoProfil" src="avatar1.jpg" alt="Foto Profil">
```
Cetak ke console: nilai `src` dan `alt` dari elemen itu, pakai dua cara berbeda (properti langsung, dan `getAttribute`).

### Latihan 2 — Data Custom (Wajib)
```html
<div class="kartu-film" data-judul="Inception" data-tahun="2010" data-rating="8.8"></div>
<div class="kartu-film" data-judul="Interstellar" data-tahun="2014" data-rating="8.6"></div>
```
Ambil SEMUA `.kartu-film` (ingat Pertemuan 2), loop pakai `forEach`, dan untuk tiap kartu, cetak ke console dalam format:
```
Inception (2010) - Rating: 8.8
Interstellar (2014) - Rating: 8.6
```
Gunakan `dataset` untuk ambil semua datanya.

### Latihan 3 — Konversi Tipe Data
Dari `data-rating` di Latihan 2, cek dulu tipe datanya pakai `typeof kartu.dataset.rating` — harusnya `"string"`. Konversi ke `Number`, lalu buat kode yang mencetak "Film bagus!" kalau rating di atas 8.

### Tantangan (Opsional)
Buat elemen `<button data-warna="merah">Klik</button>`. Pasang aksi klik (boleh `onclick` dulu) yang membaca `dataset.warna`, lalu mengubah `style.backgroundColor` tombol itu sesuai nilai dataset-nya.

---

## ✅ Checklist Sebelum Lanjut
- [ ] Saya bisa baca/ubah atribut standar dengan properti langsung DAN `getAttribute`/`setAttribute`
- [ ] Saya bisa simpan dan baca data custom pakai `data-*` dan `dataset`
- [ ] Saya paham kenapa `dataset.harga` harus di-`Number()`-kan dulu sebelum dihitung
- [ ] Saya paham aturan penamaan kebab-case (HTML) → camelCase (JS)

Kalau semua sudah dicentang → lanjut ke `05-Membuat-dan-Menghapus-Elemen`.
