# Pertemuan 3 — Mengubah Konten dan Gaya

## 🎯 Tujuan Pembelajaran
- Bisa membaca dan mengubah isi teks sebuah elemen
- Paham beda `textContent` dan `innerHTML`, serta risiko keamanan `innerHTML`
- Bisa mengubah tampilan elemen lewat `classList` dan `style`

---

## 📖 Materi

### 3.1 Mengubah teks: `textContent` vs `innerHTML`

```js
const judul = document.querySelector('#judul');

judul.textContent;              // baca isi teks (tanpa HTML)
judul.textContent = "Teks baru"; // ubah isi teks (aman, selalu dianggap teks polos)

judul.innerHTML;                       // baca isi termasuk tag HTML di dalamnya
judul.innerHTML = "Teks <b>tebal</b>"; // ubah isi, BISA masukin tag HTML baru
```

**Aturan praktis:** pakai `textContent` sebagai default. Pakai `innerHTML` HANYA kalau kamu memang sengaja butuh menyisipkan tag HTML baru.

**⚠️ Peringatan keamanan penting:** jangan pernah masukkan `innerHTML` langsung dari input user tanpa disaring, karena ini membuka celah serangan bernama **XSS (Cross-Site Scripting)** — user bisa menyisipkan `<script>` jahat lewat input form. Ini konsep yang akan kamu pelajari lebih dalam di materi keamanan web, tapi penting untuk mulai disadari dari sekarang.

### 3.2 Mengubah class: `classList`

Ini cara **yang paling disarankan** untuk mengubah tampilan elemen, karena kamu memisahkan "logika" (JS) dari "tampilan" (CSS) — kamu cukup tambah/hapus nama class, styling detailnya tetap diatur di file CSS.

```js
const kotak = document.querySelector('#kotak');

kotak.classList.add('aktif');       // tambah class
kotak.classList.remove('aktif');    // hapus class
kotak.classList.toggle('aktif');    // ada → dihapus, tidak ada → ditambah
kotak.classList.contains('aktif');  // cek: true / false
```

`classList.toggle()` adalah method yang paling sering dipakai di kasus nyata — dark mode, menu buka-tutup, highlight aktif, semuanya biasanya pakai ini.

### 3.3 Mengubah style langsung (dipakai secukupnya)

```js
kotak.style.backgroundColor = "yellow";
kotak.style.display = "none";
kotak.style.fontSize = "20px"; // perhatikan: HARUS pakai satuan (px, %, dst)
```

Catatan penting: nama properti CSS yang punya tanda strip (`background-color`) ditulis dalam **camelCase** di JavaScript (`backgroundColor`).

**Kapan pakai `.style` vs `.classList`?**
- `.classList` → default, dipakai kalau tampilannya sudah bisa ditentukan di awal lewat CSS (Layer 1, dipakai 90% kasus)
- `.style` → dipakai kalau nilainya benar-benar dinamis dan dihitung saat runtime, misal posisi berdasarkan hasil kalkulasi (`element.style.left = posisi + "px"`)

---

## 💻 Latihan

### Latihan 1 — Update Teks
```html
<h1 id="sapaan">Halo</h1>
<button id="btnUbah">Ganti Sapaan</button>
```
Pasang `onclick` ke tombol (boleh pakai cara `btnUbah.onclick = function(){...}` dulu, event resmi ada di Pertemuan 7) yang mengubah `textContent` dari `#sapaan` menjadi "Selamat Datang!".

### Latihan 2 — Toggle Class (Wajib, paling penting di pertemuan ini)
```html
<style>
  .aktif { background: black; color: white; }
</style>
<p id="teks">Klik tombol di bawah untuk highlight teks ini</p>
<button id="btnToggle">Toggle Highlight</button>
```
Pasang aksi ke tombol yang menjalankan `classList.toggle('aktif')` pada elemen `#teks`. Klik berkali-kali, amati warnanya berubah bolak-balik.

### Latihan 3 — Kombinasi
Buat sebuah "kartu peringatan" (`<div id="kartu">`) yang defaultnya tersembunyi (`style="display: none;"` di HTML). Buat tombol "Tampilkan Peringatan" yang saat diklik, mengubah `kartu.style.display` menjadi `"block"` DAN mengubah `textContent` kartu itu menjadi "⚠️ Ini adalah peringatan!".

### Tantangan (Opsional)
Coba jelaskan dengan kata-kata sendiri: kenapa `innerHTML` berpotensi bahaya sedangkan `textContent` tidak? (Petunjuk: coba pikirkan, apa yang terjadi kalau isi variabel yang kamu masukkan ke `innerHTML` itu ternyata teks `<img src=x onerror="alert('hack')">` yang dikirim oleh user jahat lewat form)

---

## ✅ Checklist Sebelum Lanjut
- [ ] Saya paham kapan pakai `textContent` vs `innerHTML`, dan tau risiko keamanan `innerHTML`
- [ ] Saya bisa pakai `classList.add/remove/toggle` tanpa lihat contoh
- [ ] Saya paham kenapa nama CSS `background-color` ditulis `backgroundColor` di JS
- [ ] Saya paham kapan sebaiknya pakai `.style` vs `.classList`

Kalau semua sudah dicentang → lanjut ke `04-Atribut-dan-Dataset`.
