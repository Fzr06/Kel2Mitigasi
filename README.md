# Mitigasi-Kelompok-2--Peta-interaktif-Banjir

Struktur Folder
css: Mengatur tampilan visual (layout & gaya). Pastikan kode terorganisir, responsif, dan gunakan teknik minifikasi atau modularisasi untuk performa yang lebih baik.
js: Pusat logika dan interaksi aplikasi. Fokus pada efisiensi kode, penanganan error (error handling) saat memuat data, serta penggunaan struktur modular agar mudah dikelola.
data: Tempat penyimpanan dataset (JSON/CSV). Pastikan format data konsisten, aman dari informasi sensitif, dan validasi tipe data agar tidak merusak UI.
legend: Menyimpan aset visual untuk legenda peta/grafik. Prioritaskan format SVG agar fleksibel dan pertimbangkan pembuatan legenda secara dinamis via JS agar selalu sinkron dengan data.
webfonts: Menyimpan file tipografi. Gunakan format modern (WOFF2) untuk ukuran lebih kecil dan pastikan lisensi font mengizinkan distribusi publik.

Proyek ini adalah sebuah web statis satu-halaman yang dirancang untuk menampilkan dan memvisualisasikan data mitigasi secara interaktif di browser. Proyek ini menggabungkan HTML, CSS, dan JavaScript untuk menyediakan antarmuka yang ringkas namun informatif.

Segala hal yang terdapat di dalam repositori seperti folder data, css, js, legend, webfonts, dsb adalah hasil dari plugin QGIS

Fitur utama meliputi visualisasi berbasis data, antarmuka interaktif yang dioperasikan lewat JavaScript, dan struktur proyek yang sederhana sehingga mudah diperluas. Untuk menambahkan atau memperbarui data, cukup simpan berkas baru di folder dan sesuaikan pemanggilan datanya di skrip pada folder. Aplikasi dapat dijalankan langsung dengan membuka `index.html` atau melalui server lokal (mis. `python -m http.server`).
