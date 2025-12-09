// Data informasi banjir untuk setiap kabupaten/kota di Sulawesi Tengah
// Langsung di-assign ke window.floodData agar bisa diakses global
window.floodData = {
  Banggai: {
    color: "rgba(57,94,240,1.0)",
    tingkatRisiko: "Sedang",
    frekuensiBanjir: "1-18 kali per 3 tahun",
    wilayahTerdampak: "Luwuk, Batui, Banggai Utara",
    korban: ["Korban Jiwa: 1 Orang", "Korban Luka-luka: Tidak Ada", "Korban Mengungsi: 3.631 Orang"],
    rumahRusak: ["Rumah Rusak Berat: 52 Rumah", "Rumah Rusak Sedang: 54 Rumah", "Rumah Rusak Ringan: 141 Rumah"],
    deskripsi:
      "Banjir sering terjadi di kawasan pesisir dan dataran rendah, terutama saat musim hujan panjang dan pasang laut tinggi.",
    mitigasi: "Normalisasi sungai, pembuatan tanggul, early warning system",
    imageUrl : "img/bangai.jpg"
  },
  "Banggai Kepulauan": {
    color: "rgba(217,112,71,1.0)",
    tingkatRisiko: "Rendah",
    frekuensiBanjir: "1-8 kali per 3 tahun",
    wilayahTerdampak: "Salakan, Labobo",
    korban: ["Korban Jiwa: Tidak Ada", "Korban Luka-luka: Tidak Ada", "Korban Mengungsi: 191"],
    rumahRusak: ["Rumah Rusak Berat: Tidak Ada", "Rumah Rusak Sedang: Tidak Ada", "Rumah Rusak Ringan: Tidak Ada"],
    deskripsi:
      "Banjir rob dan pasang laut tinggi sesekali menggenangi wilayah pesisir. Risiko banjir bandang sangat rendah karena topografi kepulauan.",
    mitigasi: "Tanaman mangrove, peninggian jalan pesisir, sistem drainase",
    imageUrl : "img/bangai_kepulauan.jpg"
  },
  "Banggai Laut": {
    color: "rgba(180,100,150,1.0)",
    tingkatRisiko: "Rendah",
    frekuensiBanjir: "0-3 kali per 3 tahun",
    wilayahTerdampak: "Banggai, Tinangkung",
    korban: ["Korban Jiwa: Tidak Ada", "Korban Luka-luka: Tidak Ada", "Korban Mengungsi: 4"],
    rumahRusak: ["Rumah Rusak Berat: Tidak Ada", "Rumah Rusak Sedang: Tidak Ada", "Rumah Rusak Ringan: Tidak Ada"],
    deskripsi:
      "Wilayah kepulauan dengan ancaman terbatas. Lebih rentan terhadap abrasi dan banjir rob daripada banjir sungai.",
    mitigasi: "Pemecah ombak, penanaman mangrove, sistem drainase pesisir",
    imageUrl : "img/bangai_laut.jpeg"
  },
  Buol: {
    tingkatRisiko: "Tinggi",
    frekuensiBanjir: "6-10 kali per 3 tahun",
    wilayahTerdampak: "Biau, Momunu, Lakea",
    korban: ["Korban Jiwa: 1", "Korban Luka-luka: 2", "Korban Mengungsi: 3.100"],
    rumahRusak: ["Rumah Rusak Berat: 15 Rumah", "Rumah Rusak Sedang: 20 Rumah", "Rumah Rusak Ringan: 250 Rumah"],
    deskripsi:
      "Banjir kiriman dari hulu akibat kerusakan hutan dan alih fungsi lahan perkebunan sawit, menyebabkan sungai Buol meluap ke pusat pemerintahan dan pemukiman.",
    mitigasi: "Restorasi ekosistem hutan hulu, pembangunan tanggul sungai, normalisasi sungai Buol.",
    imageUrl : "img/buol.jpg"
  },
  Donggala: {
    tingkatRisiko: "Sedang - Tinggi",
    frekuensiBanjir: "6-10 kali per 3 tahun",
    wilayahTerdampak: "Dampelas, Sojol, Banawa Selatan",
    korban: ["Korban Jiwa: 2", "Korban Luka-luka: 8", "Korban Mengungsi: 3.200"],
    rumahRusak: ["Rumah Rusak Berat: 15 Rumah", "Rumah Rusak Sedang: 30 Rumah", "Rumah Rusak Ringan: 150 Rumah"],
    imageUrl: "img/donggala.jpg",
    deskripsi:
      "Banjir sering terjadi di wilayah pesisir dan muara sungai. Akses jalan trans Sulawesi sering terputus akibat luapan air sungai saat hujan deras.",
    mitigasi:
      "Peninggian badan jalan, normalisasi muara sungai, penanaman mangrove di pesisir"
  },
  "Kota Palu": {
    color: "rgba(46,93,141,1.0)",
    tingkatRisiko: "Sangat Tinggi",
    frekuensiBanjir: "3-5 kali per 3 tahun",
    wilayahTerdampak: "Palu Barat, Palu Timur, Palu Utara, Tatanga, Tawaeli",
    korban: ["Korban Jiwa: Tidak ada", "Korban Luka-luka: Tidak Ada", "Korban Mengungsi: 7.500"],
    rumahRusak: ["Rumah Rusak Berat: Tidak Ada", "Rumah Rusak Sedang: Tidak Ada", "Rumah Rusak Ringan: Tidak Ada"],
    imageUrl: "img/palu.jpg",
    deskripsi:
      "Ibukota provinsi dengan intensitas banjir tertinggi. Sungai Palu yang meluap adalah penyebab utama, ditambah drainase kota yang kurang memadai dan perubahan tata guna lahan.",
    mitigasi:
      "Tanggul Sungai Palu 2.5 km, pompa air otomatis, 10 pos pemantauan, sistem peringatan dini SMS, normalisasi anak sungai"
  },
  Morowali: {
    tingkatRisiko: "Sedang",
    frekuensiBanjir: "1-8 kali per 3 tahun",
    wilayahTerdampak: "Bungku, Bahodopi, Petasia",
    korban: ["Korban Jiwa: Tidak ada", "Korban Luka-luka: 1 ", "Korban Mengungsi: 700"],
    rumahRusak: ["Rumah Rusak Berat: Tidak Ada", "Rumah Rusak Sedang: 7 Rumah", "Rumah Rusak Ringan: 16 Rumah"],
    deskripsi:
      "Daerah perbukitan dengan beberapa titik rawan longsor dan genangan. Banjir bandang dapat terjadi di lembah-lembah sungai saat hujan lebat.",
    mitigasi:
      "Reboisasi hutan lindung, pembangunan check dam, sistem peringatan dini longsor",
    imageUrl : "img/mororwali.jpg"
  },
  "Morowali Utara": {
    color: "rgba(80,150,200,1.0)",
    tingkatRisiko: "Rendah",
    frekuensiBanjir: "0-6 kali per 3 tahun",
    wilayahTerdampak: "Kolonodale, Petasia Timur",
    korban: ["Korban Jiwa: Tidak Ada", "Korban Luka-luka: Tidak Ada", "Korban Mengungsi: 11.537"],
    rumahRusak: ["Rumah Rusak Berat: Tidak Ada", "Rumah Rusak Sedang: Tidak Ada", "Rumah Rusak Ringan: 254 Rumah"],
    deskripsi:
      "Wilayah pesisir utara dengan topografi bergelombang. Risiko banjir relatif rendah namun perlu waspada saat hujan ekstrem berkepanjangan.",
    mitigasi: "Sistem drainase alami, pemantauan cuaca, jalur evakuasi",
    imageUrl : "img/morowali_utara.jpg"
  },
  "Parigi Moutong": {
    color: "rgba(43,182,168,1.0)",
    tingkatRisiko: "Sedang",
    frekuensiBanjir: "5-12 kali per 3 tahun",
    wilayahTerdampak: "Parigi, Kasimbar, Tinombo",
    korban: ["Korban Jiwa: 13 Orang", "Korban Luka-luka: Tidak Ada", "Korban Mengungsi: 17.598"],
    rumahRusak: ["Rumah Rusak Berat: 24 Rumah", "Rumah Rusak Sedang: 12 Rumah", "Rumah Rusak Ringan: 80 Rumah"],
    deskripsi:
      "Area pertanian dengan sistem irigasi yang perlu perbaikan. Berpotensi banjir saat hujan lebat berkepanjangan dan luapan sungai-sungai di DAS Parigi.",
    mitigasi:
      "Perbaikan sistem irigasi, waduk penampung, pos curah hujan otomatis",
    imageUrl : "img/parigi_moutong.jpeg"
  },
  Poso: {
    color: "rgba(34,136,95,1.0)",
    tingkatRisiko: "Sedang",
    frekuensiBanjir: "8-18 kali per 3 tahun",
    wilayahTerdampak: "Poso Kota, Lage, Pamona",
    korban: ["Korban Jiwa: Tidak Ada", "Korban Luka-luka: Tidak Ada", "Korban Mengungsi: 5.534"],
    rumahRusak: ["Rumah Rusak Berat: 3 Rumah", "Rumah Rusak Sedang: 4 Rumah", "Rumah Rusak Ringan: 150 Rumah"],
    deskripsi:
      "Wilayah sekitar Danau Poso dengan potensi luapan danau dan sungai. Topografi berbukit dengan beberapa area dataran rendah rawan genangan.",
    mitigasi:
      "Sistem pemantauan ketinggian Danau Poso, normalisasi outlet danau, early warning SMS",
    imageUrl : "img/poso.jpeg"
  },
  Sigi: {
    color: "rgba(164,100,73,1.0)",
    tingkatRisiko: "Sangat Tinggi",
    frekuensiBanjir: "10-12 kali per 3 tahun",
    wilayahTerdampak: "Kulawi, Gumbasa, Dolo Selatan",
    korban: ["Korban Jiwa: 5 Orang", "Korban Luka-luka: 12", "Korban Mengungsi: 5.400"],
    rumahRusak: ["Rumah Rusak Berat: 65 Rumah", "Rumah Rusak Sedang: 110 Rumah", "Rumah Rusak Ringan: 230 Rumah"],
    deskripsi:
      "Rawan banjir bandang (flash flood) yang membawa material lumpur dan kayu akibat kondisi hulu sungai yang labil pasca gempa dan curah hujan ekstrem di pegunungan.",
    mitigasi:
      "Pembangunan Sabo Dam, reboisasi hulu sungai, sistem peringatan dini (EWS) banjir bandang.",
    imageUrl: "img/kab_sigi.jpg"
  },
  "Tojo Una Una": {
    color: "rgba(45,107,133,1.0)",
    tingkatRisiko: "Sedang",
    frekuensiBanjir: "5-9 kali per 3 tahun",
    wilayahTerdampak: "Ampana Kota, Ulubongka, Ratolindo",
    korban: ["Korban Jiwa: 0 Orang", "Korban Luka-luka: 1", "Korban Mengungsi: 1.200 Orang"],
    rumahRusak: ["Rumah Rusak Berat: 5 Rumah", "Rumah Rusak Sedang: 10", "Rumah Rusak Ringan: 90"],
    deskripsi:
      "Banjir bandang skala kecil sering terjadi di wilayah yang dialiri sungai-sungai pendek namun curam dari pegunungan.
",
    mitigasi: "Bronjong penahan tebing, pembersihan rutin sedimen sungai, sosialisasi bahaya banjir bandang.",
    imageUrl : "img/banjir_tojo_una_una.jpg"
  },
  "Toli Toli": {
    color: "rgba(56,64,154,1.0)",
    tingkatRisiko: "Sedang",
    frekuensiBanjir: "2-10 kali per 3 tahun",
    wilayahTerdampak: "Tolitoli Kota, Baolan, Galang",
    korban: ["Korban Jiwa: TidaK Ada", "Korban Luka-luka: Tidak Ada", "Korban Mengungsi: 13.640"],
    rumahRusak: ["Rumah Rusak Berat: 15 Rumah", "Rumah Rusak Sedang: Tidak Ada", "Rumah Rusak Ringan: 17 Rumah"],
    deskripsi:
      "Wilayah pesisir utara dengan dataran rendah rawan genangan saat intensitas hujan tinggi dan pasang laut. Kombinasi banjir sungai dan rob memperbesar dampak.",
    mitigasi:
      "Tanggul pesisir, pompa air 50 m³/menit, normalisasi sungai, early warning",
    imageUrl : "img/toli-toli.jpg"
  },
};

// Fungsi untuk mendapatkan warna badge berdasarkan tingkat risiko
function getRiskColor(risk) {
  switch (risk.toLowerCase()) {
    case "sangat tinggi":
      return "#d32f2f";
    case "tinggi":
      return "#f57c00";
    case "sedang":
      return "#fbc02d";
    case "rendah":
      return "#388e3c";
    default:
      return "#757575";
  }
}

// Fungsi untuk mendapatkan emoji berdasarkan tingkat risiko
function getRiskEmoji(risk) {
  switch (risk.toLowerCase()) {
    case "sangat tinggi":
      return "🚨";
    case "tinggi":
      return "⚠️";
    case "sedang":
      return "⚡";
    case "rendah":
      return "✅";
    default:
      return "ℹ️";
  }
}
