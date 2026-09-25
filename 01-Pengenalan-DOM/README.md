# Pertemuan 1 — Pengenalan DOM

## 🎯 Tujuan Pembelajaran
Setelah pertemuan ini, kamu harus bisa:
- Menjelaskan dengan kata-kata sendiri apa itu DOM
- Menjelaskan kenapa DOM dibutuhkan (bukan cuma "karena disuruh")
- Membuka dan membaca objek `document` lewat console browser

---

## 📖 Materi

### 1.1 Masalah yang DOM selesaikan

File HTML itu sifatnya **statis** — begitu ditulis, isinya tetap sama terus, seperti surat yang sudah dicetak. Tapi hampir semua web modern itu **dinamis**: tombol bisa diklik, konten bisa berubah tanpa reload, data bisa update real-time.

Pertanyaannya: kalau HTML itu statis, gimana caranya bisa berubah-ubah? Jawabannya: browser tidak langsung "membaca" file HTML setiap saat. Begitu halaman dibuka, browser membangun sebuah **representasi objek** dari HTML itu di dalam memori — representasi inilah yang disebut **DOM (Document Object Model)**. JavaScript berinteraksi dengan representasi ini, bukan dengan file HTML aslinya.

### 1.2 Alur kerja browser

```
1. Browser download file HTML
2. Browser parsing HTML → membangun DOM tree (struktur pohon)
3. Browser render DOM tree → jadi tampilan visual di layar
4. JavaScript bisa membaca & mengubah DOM tree
5. Setiap perubahan pada DOM tree → browser render ulang bagian yang berubah
```

Poin paling penting: **langkah 4 dan 5 bisa terjadi berkali-kali, kapan saja, tanpa reload halaman.** Inilah yang membuat web terasa "hidup".

### 1.3 DOM sebagai struktur pohon (tree)

DOM merepresentasikan HTML sebagai hierarki objek — setiap tag jadi satu "node", dan node-node ini punya hubungan induk-anak-saudara, persis seperti pohon keluarga.

```html
<body>
  <h1>Judul</h1>
  <p>Paragraf</p>
</body>
```

Direpresentasikan sebagai:
```
body
├── h1
└── p
```

Pemahaman struktur pohon ini penting nanti di Pertemuan 6 (Traversing DOM).

### 1.4 Objek `document`

`document` adalah **pintu masuk utama** ke seluruh DOM dari JavaScript. Semua interaksi dengan DOM dimulai dari objek ini.

```js
console.log(document);       // seluruh dokumen
console.log(document.title); // judul tab browser
console.log(document.body);  // elemen <body>
console.log(document.URL);   // alamat halaman saat ini
```

---

## 💻 Latihan

### Latihan 1 — Eksplorasi Console (Wajib)
1. Buka halaman web apa saja (boleh Google, boleh halaman kamu sendiri)
2. Buka DevTools (klik kanan → Inspect), pindah ke tab **Console**
3. Jalankan satu per satu, amati hasilnya:
   ```js
   document
   document.title
   document.body
   document.documentElement
   ```
4. Tulis di catatan kamu (boleh comment di file `.js`): apa bedanya `document.body` dengan `document.documentElement`? (Petunjuk: coba `console.log` keduanya dan bandingkan)

### Latihan 2 — Membuat File Percobaan
Buat file `percobaan.html` sederhana:
```html
<!DOCTYPE html>
<html>
<head><title>Latihan DOM</title></head>
<body>
  <h1>Halo DOM</h1>
  <p>Ini paragraf latihan</p>
  <script>
    // tulis kode kamu di sini
  </script>
</body>
</html>
```
Di dalam tag `<script>`, tulis kode untuk mencetak (`console.log`) jumlah total elemen anak langsung dari `<body>` menggunakan `document.body.children.length`. Buka file ini di browser, cek hasilnya di Console — harusnya keluar angka `2` (karena ada `<h1>` dan `<p>`).

### Tantangan (Opsional)
Cari tahu sendiri (boleh googling "document.readyState MDN"): apa itu `document.readyState`, dan kenapa itu penting untuk dicek sebelum menjalankan kode yang mengutak-atik DOM?

---

## ✅ Checklist Sebelum Lanjut
- [ ] Saya bisa jelaskan beda HTML (file) dan DOM (representasi di memori) pakai kata-kata sendiri
- [ ] Saya berhasil menjalankan `document` di console dan melihat hasilnya
- [ ] Saya berhasil menyelesaikan Latihan 2 dan dapat angka `2`
- [ ] Saya paham DOM itu berbentuk struktur pohon (tree)

Kalau semua sudah dicentang → lanjut ke `02-Selecting-Elements`.
