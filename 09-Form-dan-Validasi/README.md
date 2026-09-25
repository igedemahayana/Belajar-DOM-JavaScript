# Pertemuan 9 — Form dan Validasi

## 🎯 Tujuan Pembelajaran
- Bisa mengambil semua data dari form menggunakan `FormData`
- Bisa membuat validasi manual di JavaScript (bukan cuma andalkan HTML)
- Bisa menampilkan pesan error/sukses secara dinamis ke user

---

## 📖 Materi

### 9.1 Membaca nilai input satu per satu

```js
const inputNama = document.querySelector('#nama');
console.log(inputNama.value); // isi input saat ini
inputNama.value = "";         // mengosongkan input
```

Untuk checkbox dan radio, gunakan `.checked` (bukan `.value`):
```js
const setuju = document.querySelector('#setuju');
console.log(setuju.checked); // true / false
```

### 9.2 Membaca semua data form sekaligus: `FormData`

Kalau form-nya punya banyak input, membaca satu-satu jadi tidak efisien. `FormData` membaca semuanya sekaligus berdasarkan atribut `name` di tiap input.

```html
<form id="formDaftar">
  <input type="text" name="username">
  <input type="email" name="email">
  <button type="submit">Daftar</button>
</form>
```
```js
const form = document.querySelector('#formDaftar');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // ingat Pertemuan 8, wajib supaya tidak reload

  const data = new FormData(form);
  console.log(data.get('username'));
  console.log(data.get('email'));
});
```

**Catatan penting:** `FormData` membaca berdasarkan atribut `name`, BUKAN `id`. Ini kesalahan umum pemula — kalau `name` tidak diisi di input HTML-nya, `data.get()` akan menghasilkan `null`.

### 9.3 Validasi bawaan HTML vs validasi JavaScript

HTML sudah punya validasi dasar lewat atribut: `required`, `minlength`, `maxlength`, `pattern`, `type="email"`. Ini bagus sebagai lapisan pertama, tapi **tidak cukup** untuk logika bisnis yang lebih kompleks (misal: "password harus sama dengan konfirmasi password", atau "username tidak boleh sudah dipakai"). Untuk kasus seperti itu, kamu butuh validasi manual di JavaScript.

### 9.4 Pola validasi manual

```js
form.addEventListener('submit', function (event) {
  event.preventDefault();

  const username = document.querySelector('#username').value;
  const errorEl = document.querySelector('#errorUsername');

  if (username.length < 3) {
    errorEl.textContent = "Username minimal 3 karakter";
    errorEl.classList.add('error');
    return; // hentikan proses, jangan lanjut kirim data
  }

  errorEl.textContent = ""; // bersihkan pesan error kalau valid
  console.log("Form valid, lanjutkan proses...");
});
```

Pola intinya: **cek kondisi → kalau tidak valid, tampilkan pesan dan `return` (hentikan) → kalau valid, lanjutkan proses dan bersihkan pesan error lama.**

---

## 💻 Latihan

### Latihan 1 — Baca Form Sederhana
```html
<form id="formProfil">
  <input type="text" name="nama" id="nama">
  <input type="number" name="umur" id="umur">
  <button type="submit">Simpan</button>
</form>
```
Pasang event `submit`, `preventDefault()`, lalu gunakan `FormData` untuk mencetak ke console dalam format: `"Nama: [nama], Umur: [umur]"`.

### Latihan 2 — Validasi Manual (Wajib)
```html
<form id="formDaftar">
  <input type="text" id="username" name="username">
  <p id="errorUsername"></p>
  <input type="email" id="email" name="email">
  <p id="errorEmail"></p>
  <button type="submit">Daftar</button>
</form>
```
Buat validasi:
1. Username minimal 3 karakter — kalau kurang, tampilkan pesan error di `#errorUsername`
2. Email harus mengandung karakter `@` (gunakan `.includes('@')`) — kalau tidak, tampilkan pesan error di `#errorEmail`
3. Kalau KEDUANYA valid, tampilkan `console.log("Pendaftaran berhasil!")` dan kosongkan semua pesan error

### Latihan 3 — Pesan Sukses Dinamis
Lanjutkan Latihan 2. Tambahkan `<p id="pesanSukses"></p>` di bawah tombol submit. Kalau validasi berhasil, isi `textContent`-nya dengan `"Selamat datang, [username]!"` dan beri class `.sukses` (buat CSS warna hijau). Kalau ada input baru yang diketik lagi setelah sukses (event `input` di username/email), kosongkan kembali pesan sukses itu.

### Tantangan (Opsional)
Tambahkan validasi tambahan: buat input `#password` dan `#konfirmasiPassword`. Validasi bahwa keduanya harus sama persis sebelum form dianggap valid. Kalau tidak sama, tampilkan pesan error yang jelas.

---

## ✅ Checklist Sebelum Lanjut
- [ ] Saya bisa membaca nilai input satu-satu dengan `.value`
- [ ] Saya bisa membaca semua data form sekaligus dengan `FormData`
- [ ] Saya paham pola validasi: cek → tampilkan error & `return` / lanjutkan & bersihkan error
- [ ] Saya berhasil menyelesaikan Latihan 2 dan Latihan 3

Kalau semua sudah dicentang → lanjut ke `10-Proyek-Akhir`, ini pertemuan terakhir yang menggabungkan SEMUA yang sudah dipelajari.
