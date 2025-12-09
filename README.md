# Mitigasi-Kelompok-2--Peta-interaktif-Banjir

Struktur Folder
css: Mengatur tampilan visual (layout & gaya).
js: Pusat logika dan interaksi aplikasi. Fokus pada efisiensi kode, penanganan error (error handling) saat memuat data, serta penggunaan struktur modular agar mudah dikelola.
data: Tempat penyimpanan dataset (JSON/CSV).
legend: Menyimpan aset visual untuk legenda peta/grafik.
webfonts: Menyimpan file tipografi.

Proyek ini adalah sebuah web statis satu-halaman yang dirancang untuk menampilkan dan memvisualisasikan data mitigasi secara interaktif di browser. Proyek ini menggabungkan HTML, CSS, dan JavaScript untuk menyediakan antarmuka yang ringkas namun informatif.

Segala hal yang terdapat di dalam repositori seperti folder data, css, js, legend, webfonts, dsb adalah hasil dari plugin QGIS

Fitur utama meliputi visualisasi berbasis data, antarmuka interaktif yang dioperasikan lewat JavaScript, dan struktur proyek yang sederhana sehingga mudah diperluas. Untuk menambahkan atau memperbarui data, cukup simpan berkas baru di folder dan sesuaikan pemanggilan datanya di skrip pada folder. Aplikasi dapat dijalankan langsung dengan membuka `index.html` atau melalui server lokal (mis. `python -m http.server`).
