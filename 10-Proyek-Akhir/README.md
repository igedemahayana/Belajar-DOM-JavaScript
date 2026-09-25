# Pertemuan 10 — Proyek Akhir (Capstone)

## 🎯 Tujuan Pembelajaran
Menggabungkan SELURUH materi Pertemuan 1-9 dalam satu aplikasi nyata: **To-Do List App**, tanpa framework, murni HTML + CSS + JavaScript. Kalau kamu bisa menyelesaikan ini sendiri, itu artinya fondasi DOM & Event kamu sudah benar-benar solid.

---

## 📖 Spesifikasi Proyek: "To-Do List App"

### Fitur yang harus ada:
1. **Tambah tugas** — input + tombol tambah *(Pertemuan 5, 7)*
2. **Tugas tidak boleh kosong** saat ditambahkan — validasi manual *(Pertemuan 9)*
3. **Tandai selesai** — klik tugas untuk mencoret teksnya *(Pertemuan 3, 8)*
4. **Hapus tugas** — tombol hapus di tiap item, gunakan event delegation *(Pertemuan 6, 8)*
5. **Hitung sisa tugas** — otomatis update "3 tugas belum selesai" setiap ada perubahan *(Pertemuan 2, 3)*
6. **Filter tampilan** — 3 tombol: "Semua", "Belum Selesai", "Selesai" *(Pertemuan 3, 6, 7)*
7. **Pesan kosong** — kalau tidak ada tugas sama sekali, tampilkan "Belum ada tugas!" *(Pertemuan 3, 5)*

### Struktur HTML awal (silakan dikembangkan sendiri)
```html
<div id="app">
  <h1>To-Do List</h1>
  <form id="formTugas">
    <input type="text" id="inputTugas" placeholder="Tulis tugas baru...">
    <button type="submit">Tambah</button>
  </form>
  <p id="errorPesan"></p>

  <div id="filterTombol">
    <button data-filter="semua" class="filter aktif">Semua</button>
    <button data-filter="belum" class="filter">Belum Selesai</button>
    <button data-filter="selesai" class="filter">Selesai</button>
  </div>

  <ul id="daftarTugas"></ul>
  <p id="pesanKosong" style="display: none;">Belum ada tugas!</p>
  <p id="sisaTugas">0 tugas belum selesai</p>
</div>
```

### Petunjuk arsitektur (bukan jawaban langsung, arah berpikirnya saja)

1. **Simpan data di array JavaScript**, bukan cuma di DOM langsung. Contoh struktur satu tugas:
   ```js
   { id: 1, teks: "Belajar DOM", selesai: false }
   ```
   Ini pola penting: **DOM adalah cerminan dari data, bukan sumber data itu sendiri.** Setiap kali array berubah, panggil satu fungsi `render()` yang menggambar ulang seluruh `<ul>` berdasarkan isi array terbaru. Pola ini adalah fondasi cara berpikir React nantinya — jadi latihan ini sekaligus mempersiapkan kamu ke tahap berikutnya.

2. **Fungsi `render()`** — kosongkan dulu isi `<ul>` (`ul.innerHTML = ""`), lalu loop ulang array data dan `createElement` untuk tiap item (ingat Pertemuan 5).

3. **Event delegation** di `<ul>` untuk toggle selesai dan hapus (ingat Pertemuan 8) — tapi karena sekarang render ulang dari array, aksi klik itu sebaiknya **mengubah data array dulu**, baru panggil `render()` lagi, bukan langsung mengubah elemen HTML-nya.

4. **Filter** — simpan filter aktif di sebuah variabel (misal `let filterAktif = "semua"`), dan di dalam `render()`, sebelum menggambar, saring dulu array sesuai `filterAktif` sebelum di-loop.

---

## 💻 Langkah Pengerjaan (Kerjakan Berurutan)

### Tahap 1 — Tambah & Tampilkan (tanpa fitur lain dulu)
Buat bisa menambah tugas dan menampilkannya di layar. Pastikan pola array + `render()` sudah dipakai sejak awal, jangan langsung manipulasi DOM tanpa lewat array.

### Tahap 2 — Toggle Selesai & Hapus
Tambahkan kemampuan klik untuk toggle status selesai, dan tombol hapus per item. Semua lewat event delegation di `<ul>`.

### Tahap 3 — Validasi & Pesan Kosong
Tambahkan validasi input kosong, dan pesan "Belum ada tugas!" yang muncul otomatis kalau array datanya kosong.

### Tahap 4 — Hitung Sisa & Filter
Tambahkan penghitung otomatis, dan logika filter 3 tombol.

### Tahap 5 (Bonus) — Simpan ke `localStorage`
Supaya data tidak hilang saat halaman di-refresh, gunakan:
```js
localStorage.setItem('tugas', JSON.stringify(dataTugas));
const data = JSON.parse(localStorage.getItem('tugas')) || [];
```
Panggil `localStorage.setItem` setiap kali data berubah, dan baca datanya sekali di awal saat halaman dimuat.

---

## ✅ Checklist Kelulusan Proyek

- [ ] Bisa menambah tugas baru, dan tugas kosong ditolak dengan pesan error
- [ ] Bisa menandai tugas selesai/belum dengan klik (tercoret saat selesai)
- [ ] Bisa menghapus tugas lewat tombol, pakai event delegation (bukan listener satu-satu)
- [ ] Penghitung "sisa tugas" update otomatis setiap ada perubahan
- [ ] Filter "Semua / Belum Selesai / Selesai" berfungsi dengan benar
- [ ] Pesan "Belum ada tugas!" muncul otomatis saat array kosong
- [ ] **(Mandiri)** Kamu bisa menjelaskan ke orang lain kenapa polanya "data di array dulu, DOM cuma cerminannya" — bukan sekadar tempel kode yang jalan

---

## 🎓 Kalau Proyek Ini Sudah Selesai

Kamu sudah menyelesaikan seluruh fondasi DOM & Event JavaScript. Langkah berikutnya yang disarankan:

1. **Async JavaScript** (Promise, `async/await`, `fetch`) — supaya to-do list kamu bisa terhubung ke server sungguhan, bukan cuma `localStorage`
2. **GSAP** — tambahkan animasi ke to-do list ini (tugas baru muncul dengan animasi, tugas dihapus dengan fade-out)
3. **React** — begitu kamu coba bikin ulang to-do list yang SAMA persis di React, kamu akan langsung sadar bahwa pola "data → render ulang" yang kamu praktikkan di proyek ini adalah persis konsep inti React (`state` → re-render), cuma React yang menangani bagian `render()`-nya secara otomatis untuk kamu.

Selamat, kamu sudah menyelesaikan seluruh silabus ini. 🎉
