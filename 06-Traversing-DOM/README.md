# Pertemuan 6 — Traversing DOM (Navigasi Antar Elemen)

## 🎯 Tujuan Pembelajaran
- Bisa "berjalan" dari satu elemen ke induk, anak, atau saudaranya
- Bisa menggunakan `closest()` untuk mencari elemen leluhur terdekat
- Paham kapan traversing lebih tepat dipakai dibanding `querySelector` ulang

---

## 📖 Materi

### 6.1 Kenapa butuh traversing?

Kadang kamu sudah "pegang" satu elemen (misal dari sebuah event, akan dibahas di Pertemuan 7), tapi elemen yang sebenarnya ingin kamu ubah adalah **tetangganya** — induknya, anaknya, atau saudaranya. Daripada melakukan `querySelector` baru dari awal, kamu bisa "berjalan" langsung dari elemen yang sudah kamu pegang. Ingat kembali Pertemuan 1: DOM berbentuk struktur pohon — traversing adalah cara berjalan di sepanjang pohon itu.

### 6.2 Method traversing utama

```html
<div id="kotak">
  <p>Anak 1</p>
  <p id="tengah">Anak 2</p>
  <p>Anak 3</p>
</div>
```

```js
const tengah = document.querySelector('#tengah');

tengah.parentElement;           // → <div id="kotak"> (naik ke induk)
tengah.children;                // anak-anak dari elemen ini (kalau elemen tengah punya anak)
tengah.nextElementSibling;      // → <p>Anak 3</p> (geser ke saudara berikutnya)
tengah.previousElementSibling;  // → <p>Anak 1</p> (geser ke saudara sebelumnya)
```

### 6.3 `closest()` — pencarian leluhur terdekat

Ini method yang sangat berguna, terutama nanti dipakai bersama event delegation di Pertemuan 8:

```js
tengah.closest('#kotak');  // cari ke ATAS sampai ketemu elemen dengan id="kotak"
tengah.closest('div');     // cari ke ATAS sampai ketemu elemen <div> terdekat
```

`closest()` berbeda dari `parentElement` karena dia bisa "meloncati" beberapa level ke atas sekaligus sampai ketemu yang cocok — sangat berguna kalau struktur HTML-nya berlapis-lapis dan kamu tidak yakin persis berapa level ke atas elemen yang kamu cari.

### 6.4 Kapan traversing lebih baik daripada `querySelector` ulang?

Bayangkan kasus: kamu punya 10 kartu produk yang strukturnya sama, dan setiap kartu punya tombol "Hapus". Ketika salah satu tombol diklik, kamu butuh menghapus **kartu yang mengandung tombol itu saja**, bukan kartu lain. Traversing (`closest()`) adalah cara paling bersih menyelesaikan ini — kamu tidak perlu tahu "kartu keberapa" ini, cukup bilang "cari kartu terdekat dari tombol yang diklik".

---

## 💻 Latihan

### Latihan 1 — Pemanasan
```html
<ul id="daftar">
  <li>Item A</li>
  <li id="target">Item B</li>
  <li>Item C</li>
</ul>
```
Ambil elemen `#target`, lalu cetak ke console: induknya, saudara sebelumnya, dan saudara sesudahnya. Pastikan hasilnya sesuai (`<ul>`, `Item A`, `Item C`).

### Latihan 2 — Highlight Baris Tabel
```html
<table id="tabel">
  <tr><td>Baris 1</td></tr>
  <tr><td>Baris 2</td></tr>
  <tr><td>Baris 3</td></tr>
</table>
```
Ambil SEMUA `<tr>`, loop pakai `forEach`, dan pasang `onclick` di tiap baris (event resmi di Pertemuan 7, ini pemanasan dulu) yang:
1. Menghapus class `.aktif` dari SEMUA baris (loop lagi menggunakan `classList.remove`)
2. Menambahkan class `.aktif` HANYA ke baris yang baru diklik

Ini latihan penting karena polanya ("hapus dari semua dulu, baru tambahkan ke satu") sangat sering dipakai di UI nyata (tab aktif, menu terpilih, dll).

### Latihan 3 — `closest()` dalam Aksi
```html
<div class="kartu" data-produk="Sepatu">
  <p>Sepatu Lari</p>
  <button class="hapus">Hapus Kartu Ini</button>
</div>
<div class="kartu" data-produk="Tas">
  <p>Tas Ransel</p>
  <button class="hapus">Hapus Kartu Ini</button>
</div>
```
Ambil semua tombol `.hapus`, loop, pasang `onclick` yang menggunakan `event.target.closest('.kartu').remove()` untuk menghapus HANYA kartu yang tombolnya diklik.

### Tantangan (Opsional)
Cari tahu sendiri: apa bedanya `children` (yang dipakai di materi ini) dengan `childNodes`? Kenapa untuk kebutuhan sehari-hari `children` lebih disarankan? (Petunjuk: coba `console.log` keduanya pada elemen yang di HTML-nya ada baris kosong/spasi antar tag)

---

## ✅ Checklist Sebelum Lanjut
- [ ] Saya bisa navigasi ke parent, children, dan sibling tanpa lihat contoh
- [ ] Saya paham fungsi `closest()` dan bedanya dengan `parentElement`
- [ ] Saya berhasil menyelesaikan Latihan 2 (pola hapus-dari-semua, tambah-ke-satu)
- [ ] Saya paham kenapa traversing kadang lebih baik dari `querySelector` ulang

Kalau semua sudah dicentang → lanjut ke `07-Event-Dasar`. Ini pertemuan yang paling penting di seluruh materi DOM — siapkan waktu lebih untuk pertemuan berikutnya.
