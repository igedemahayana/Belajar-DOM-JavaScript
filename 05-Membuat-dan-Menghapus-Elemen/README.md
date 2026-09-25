# Pertemuan 5 — Membuat dan Menghapus Elemen

## 🎯 Tujuan Pembelajaran
- Bisa membuat elemen HTML baru sepenuhnya lewat JavaScript
- Bisa menempatkan elemen baru itu di posisi yang tepat dalam DOM
- Bisa menghapus elemen dari halaman

---

## 📖 Materi

### 5.1 Kenapa ini penting?

Sampai pertemuan sebelumnya, kamu hanya mengubah elemen yang **sudah ada** di HTML. Tapi kebanyakan aplikasi nyata (to-do list, chat, feed sosial media, daftar produk) butuh elemen yang jumlahnya **tidak pasti** — dibuat sesuai data, sesuai aksi user. Untuk itu, elemen harus dibuat langsung lewat JavaScript.

### 5.2 Proses 3 langkah membuat elemen

```js
// 1. Buat elemennya (masih "melayang", belum tampil di halaman)
const li = document.createElement('li');

// 2. Isi kontennya
li.textContent = "Item baru";
li.classList.add('item-baru'); // bisa juga diatur class-nya sebelum ditempel

// 3. Tempelkan ke DOM supaya muncul di halaman
document.querySelector('#daftar').appendChild(li);
```

Elemen yang dibuat lewat `createElement` tapi belum ditempel dengan `appendChild` (atau sejenisnya) **tidak akan muncul** di halaman — ini kesalahan yang sering bikin pemula bingung ("kok kodenya jalan tapi nggak ada perubahan di layar?").

### 5.3 Variasi method menempatkan elemen

```js
induk.appendChild(elemenBaru);  // tempel di posisi PALING AKHIR
induk.prepend(elemenBaru);      // tempel di posisi PALING AWAL
induk.append(elemenBaru);       // mirip appendChild, tapi bisa terima teks biasa juga
elemenLama.before(elemenBaru);  // tempel SEBELUM elemen tertentu
elemenLama.after(elemenBaru);   // tempel SESUDAH elemen tertentu
```

### 5.4 Menghapus elemen

```js
elemen.remove(); // cara modern, paling simpel — cukup panggil dari elemennya sendiri
```

Cara lama (masih sering ditemui di kode orang lain, perlu dikenali):
```js
elemenInduk.removeChild(elemenAnak);
```

### 5.5 Pola yang sering dipakai: bikin banyak elemen dari data (array)

```js
const daftarBuah = ["Apel", "Jeruk", "Mangga"];
const ul = document.querySelector('#daftarBuah');

daftarBuah.forEach(function (buah) {
  const li = document.createElement('li');
  li.textContent = buah;
  ul.appendChild(li);
});
```

Pola "loop data → buat elemen → tempel" ini adalah pola **paling penting** di seluruh materi DOM — hampir semua aplikasi nyata (daftar produk, komentar, notifikasi) memakai pola ini.

---

## 💻 Latihan

### Latihan 1 — Pemanasan
```html
<ul id="daftar"></ul>
```
Buat 3 elemen `<li>` secara manual (bukan lewat loop, tulis 3x `createElement` terpisah), isi teksnya "Item 1", "Item 2", "Item 3", lalu tempelkan satu-satu ke `#daftar` menggunakan `appendChild`.

### Latihan 2 — Dari Array (Wajib, ini pola paling penting)
```js
const tugasHarian = ["Belajar DOM", "Olahraga", "Baca Buku"];
```
Buat `<ul id="daftarTugas"></ul>` di HTML. Tulis kode JS yang meng-loop array `tugasHarian` menggunakan `forEach`, membuat `<li>` untuk tiap item, lalu menempelkannya ke `#daftarTugas`. Ini harus jadi refleks di tangan kamu — coba ulangi latihan ini besok tanpa lihat contoh.

### Latihan 3 — Tambah dan Hapus Dinamis
```html
<input id="inputTugas" placeholder="Tulis tugas baru">
<button id="btnTambah">Tambah</button>
<ul id="daftarTugas"></ul>
```
1. Setiap tombol "Tambah" diklik (`onclick` dulu, event resmi di Pertemuan 7): ambil nilai `input.value`, buat `<li>` baru isinya teks itu, tempelkan ke `<ul>`, lalu kosongkan kembali `input.value = ""`.
2. Di dalam tiap `<li>`, tambahkan tombol kecil "❌" (`li.innerHTML = teks + ' <button class="hapus">❌</button>'`). Pasang aksi supaya waktu tombol ❌ itu diklik, `<li>` induknya ikut terhapus (petunjuk: gunakan `.closest('li').remove()` dari tombol yang diklik).

### Tantangan (Opsional)
Modifikasi Latihan 2: sebelum menambahkan tugas baru, cek dulu apakah `input.value` kosong (`""`). Kalau kosong, jangan tambahkan apapun — tampilkan `alert("Tugas tidak boleh kosong!")` sebagai gantinya.

---

## ✅ Checklist Sebelum Lanjut
- [ ] Saya paham 3 langkah membuat elemen: create → isi → tempel
- [ ] Saya bisa membuat banyak elemen dari array menggunakan `forEach` tanpa lihat contoh
- [ ] Saya bisa menghapus elemen menggunakan `.remove()`
- [ ] Saya berhasil menyelesaikan Latihan 3 (tambah & hapus dinamis)

Kalau semua sudah dicentang → lanjut ke `06-Traversing-DOM`.
