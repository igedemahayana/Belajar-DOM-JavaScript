# Pertemuan 7 — Event Dasar

## 🎯 Tujuan Pembelajaran
- Paham konsep event-driven programming
- Bisa memasang `addEventListener` dan menggunakan objek `event`
- Hapal jenis-jenis event yang paling sering dipakai

---

## 📖 Materi

### 7.1 Apa itu Event?

Sejauh ini (Pertemuan 1-6), semua kode kamu dijalankan **langsung** begitu halaman dimuat. Tapi aplikasi web sungguhan harus **bereaksi terhadap aksi user** — klik, ketik, scroll — yang waktunya tidak bisa diprediksi. Event adalah mekanisme browser untuk "memberi tahu" JavaScript bahwa sesuatu telah terjadi, supaya JS bisa bereaksi saat itu juga.

Pendekatan ini disebut **event-driven programming**: kode tidak dijalankan berurutan dari atas ke bawah sekali jalan, melainkan "menunggu" dan bereaksi terhadap kejadian.

### 7.2 `addEventListener` — cara resmi memasang event

```js
const tombol = document.querySelector('#tombol');

tombol.addEventListener('click', function (event) {
  console.log('Tombol diklik!');
});
```

Struktur: `elemen.addEventListener('nama-event', fungsiYangDijalankan)`.

**Kenapa `addEventListener` lebih disarankan daripada `onclick` yang dipakai di pertemuan sebelumnya?**
1. Bisa memasang lebih dari satu listener ke elemen dan event yang sama (`onclick` hanya bisa satu, listener kedua akan menimpa yang pertama)
2. Bisa dilepas kembali dengan `removeEventListener` kalau perlu
3. Ini adalah cara standar yang dipakai di seluruh library dan framework modern

### 7.3 Objek `event`

Fungsi yang dijalankan oleh `addEventListener` otomatis menerima satu parameter — objek `event` — yang berisi informasi detail tentang kejadian itu.

```js
tombol.addEventListener('click', function (event) {
  console.log(event.type);    // "click"
  console.log(event.target);  // elemen SPESIFIK yang menerima aksi ini
});
```

`event.target` sangat penting, terutama nanti di Pertemuan 8 (Event Delegation) — dia memberitahu elemen persis mana yang memicu event tersebut.

### 7.4 Jenis-jenis event yang wajib dihafal

| Event | Terjadi kapan | Contoh pemakaian nyata |
|---|---|---|
| `click` | elemen diklik | tombol, kartu, menu |
| `dblclick` | diklik dua kali cepat | zoom gambar, expand item |
| `input` | isi input berubah (real-time, tiap ketikan) | search box, live counter |
| `change` | isi input berubah DAN kehilangan fokus | dropdown, checkbox |
| `submit` | form dikirim | form login, form kontak |
| `keydown` / `keyup` | tombol keyboard ditekan/dilepas | shortcut, game |
| `mouseover` / `mouseout` | kursor masuk/keluar area elemen | tooltip, hover effect |
| `focus` / `blur` | input mendapat/kehilangan fokus | validasi form real-time |
| `DOMContentLoaded` | seluruh HTML selesai dimuat (dipasang di `document`) | memastikan DOM siap sebelum script jalan |

### 7.5 Kenapa `DOMContentLoaded` penting

Kalau tag `<script>` kamu diletakkan di `<head>` (sebelum `<body>` selesai dimuat), kode kamu mungkin mencoba `querySelector` elemen yang **belum ada** saat itu, dan hasilnya `null`. Solusinya:

```js
document.addEventListener('DOMContentLoaded', function () {
  // semua kode DOM kamu taruh di sini, dijamin aman
  const tombol = document.querySelector('#tombol');
  // ...
});
```

*(Catatan: kalau `<script>` diletakkan di akhir `<body>`, sebelum tag penutup `</body>`, masalah ini biasanya tidak terjadi karena HTML di atasnya sudah pasti selesai dimuat lebih dulu — ini juga jadi kebiasaan yang baik untuk diikuti.)*

---

## 💻 Latihan

### Latihan 1 — Pemanasan
```html
<button id="btn">Klik Saya</button>
```
Pasang `addEventListener('click', ...)` yang mencetak `"Halo!"` ke console setiap tombol diklik.

### Latihan 2 — Penghitung Klik (Wajib)
```html
<button id="btnHitung">Klik Aku</button>
<p id="hasil">Sudah diklik: 0 kali</p>
```
Buat variabel `let jumlah = 0;`. Pasang `addEventListener('click', ...)` di tombol yang menambah `jumlah` sebanyak 1 setiap diklik, lalu update `textContent` dari `#hasil` menjadi `"Sudah diklik: " + jumlah + " kali"`.

### Latihan 3 — Live Character Counter
```html
<textarea id="pesan" maxlength="100"></textarea>
<p id="sisa">Sisa karakter: 100</p>
```
Pasang event `input` (BUKAN `click`) pada textarea. Setiap kali user mengetik, hitung `100 - panjang teks saat ini` (gunakan `event.target.value.length`), lalu update `#sisa`. Tambahan: kalau sisa kurang dari 10, tambahkan class `.peringatan` (buat CSS-nya sendiri, misal warna merah) ke `#sisa`.

### Latihan 4 — Multi Event di Elemen yang Sama
Pada tombol yang sama, pasang DUA `addEventListener('click', ...)` yang terpisah — satu mencetak `"Listener pertama"`, satu lagi mencetak `"Listener kedua"`. Klik tombolnya, buktikan sendiri bahwa KEDUANYA berjalan (ini membuktikan kelebihan `addEventListener` dibanding `onclick` yang hanya bisa satu).

### Tantangan (Opsional)
Cari tahu (boleh googling): kenapa event `input` lebih disarankan daripada `keyup` untuk mendeteksi perubahan teks secara real-time? (Petunjuk: pikirkan kasus user melakukan paste teks pakai mouse, tanpa menekan keyboard sama sekali)

---

## ✅ Checklist Sebelum Lanjut
- [ ] Saya paham konsep event-driven: kode "menunggu" kejadian, bukan jalan sekali dari atas ke bawah
- [ ] Saya bisa memasang `addEventListener` dan menggunakan `event.target` tanpa lihat contoh
- [ ] Saya hafal minimal 6 jenis event dari tabel di atas dan tahu kapan dipakai
- [ ] Saya berhasil menyelesaikan Latihan 2 dan Latihan 3

Kalau semua sudah dicentang → lanjut ke `08-Event-Lanjutan-dan-Delegation`.
