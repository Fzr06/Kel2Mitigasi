// Data informasi banjir untuk setiap kabupaten/kota di Sulawesi Tengah
// Langsung di-assign ke window.floodData agar bisa diakses global
window.floodData = {
 "Banggai": {
    color: "rgba(57,94,240,1.0)",
    tingkatRisiko: "sedang-tinggi",
    frekuensiBanjir: "8-15 kali per 3 tahun",
    wilayahTerdampak: "Luwuk, Luwuk Timur, Luwuk Selatan, Toili, Batui, Bunta",
    korban: ["Korban Jiwa: 5 Orang", "Korban Luka-luka: 0-3 orang", "Korban Mengungsi: 6.500 Orang","warga terdampak: 12.000 jiwa"],
    rumahRusak: ["Rumah Rusak Berat: 35 Rumah", "Rumah Rusak Sedang: 52 Rumah", "Rumah Rusak Ringan: 145 Rumah", "rumah terendam: 980"],
    deskripsi:
      "Banjir dipicu curah hujan tinggi, luapan sungai, penyempitan alur sungai, serta sistem drainase yang kurang memadai di wilayah permukiman dan pertanian.",
    mitigasi: "Normalisasi sungai, pembangunan tanggul, waduk penampung, drainase terpadu, dan pemasangan alat pemantau tinggi muka air.",
    imageUrl : "img/bangai.jpg"
  },
  "Banggai Kepulauan": {
    color: "rgba(217,112,71,1.0)",
    tingkatRisiko: "sedang",
    frekuensiBanjir: "4-9 kali per 3 tahun",
    wilayahTerdampak: "Tinangkung, Tinangkung Selatan, Tinangkung Utara, Totikum, Totikum Selatan, Buko",
    korban: ["Korban Jiwa: 2 orang", "Korban Luka-luka: 0-2 orang", "Korban Mengungsi: 2.100 jiwa","warga terdampak: 4.500 jiwa"],
    rumahRusak: ["Rumah Rusak Berat: 18 rumah", "Rumah Rusak Sedang: 27 rumah", "Rumah Rusak Ringan: 73 rumah","rumah terendam: 510 rumah"],
    deskripsi:
      "Banjir terjadi akibat hujan intensitas tinggi, luapan sungai kecil, dan keterbatasan drainase di wilayah pesisir dan dataran rendah.",
    mitigasi: "Normalisasi aliran sungai kecil, perbaikan drainase, pembangunan tanggul pesisir, kolam retensi, dan sistem peringatan dini banjir.",
    imageUrl : "img/bangai_kepulauan.jpg"
  },
 "Banggai Laut": {
    color: "rgba(180,100,150,1.0)",
    tingkatRisiko: "sedang",
    frekuensiBanjir: "4-8 kali per 3 tahun",
    wilayahTerdampak: "Kec. Banggai, Banggai Selatan, Banggai Tengah",
    korban: ["Korban Jiwa: Tidak Ada", "Korban Luka-luka: Tidak Ada", "Korban Mengungsi: 68 jiwa","warga terdampak: 322 kk"],
    rumahRusak: ["Rumah Rusak Berat: Tidak Ada", "Rumah Rusak Sedang: Tidak Ada", "Rumah Rusak Ringan: Tidak Ada"],
    deskripsi:
      "Wilayah kepulauan dengan ancaman terbatas. Lebih rentan terhadap abrasi dan banjir rob daripada banjir sungai.",
    mitigasi: "Normalisasi sungai, perbaikan drainase, pembangunan kolam retensi, pemasangan alat pemantau curah hujan.",
    imageUrl : "img/bangai_laut.jpeg"
  },
  "Buol": {
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
  "Donggala": {
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
  "Morowali": {
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
      "Perbaikan dan normalisasi sistem irigasi, terutama pada area pertanian yang sering tergenang dan di sepanjang DAS Parigi yang mengalami pendangkalan.",
    imageUrl : "img/parigi_moutong.jpeg"
  },
  "Poso": {
    color: "rgba(34,136,95,1.0)",
    tingkatRisiko: "Sedang - Tinggi",
    frekuensiBanjir: "7-12 kali per 3 tahun",
    wilayahTerdampak: "Poso Kota, Poso Pesisir, Lore Utara, Lage, Pamona",
    korban: ["Korban Jiwa: Tidak Ada", "Korban Luka-luka: 4 Orang", "Korban Mengungsi: 2.500"],
    rumahRusak: ["Rumah Rusak Berat: 12 Rumah", "Rumah Rusak Sedang: 25   Rumah", "Rumah Rusak Ringan: 180 Rumah"],
    deskripsi:
      "Luapan Sungai Poso dan anak sungainya. Wilayah dataran rendah di sekitar Danau Poso juga memiliki risiko genangan saat musim hujan berkepanjangan.",
    mitigasi:
      "Pemeliharaan bendung irigasi, penghijauan daerah tangkapan air (catchment area), tata kelola pintu air Danau Poso.",
    imageUrl : "img/poso.jpeg"
  },
  "Sigi": {
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
      "Banjir bandang skala kecil sering terjadi di wilayah yang dialiri sungai-sungai pendek namun curam dari pegunungan.",
    mitigasi: 
      "Bronjong penahan tebing, pembersihan rutin sedimen sungai, sosialisasi bahaya banjir bandang.",
    imageUrl : "img/banjir_tojo_una_una.jpg"
  },
  "Toli Toli": {
    color: "rgba(56,64,154,1.0)",
    tingkatRisiko: "Sangat Tinggi",
    frekuensiBanjir: "12-18 kali per 3 tahun",
    wilayahTerdampak: "Tolitoli Kota, Baolan, Galang, Lampasio",
    korban: ["Korban Jiwa: 3 Orang", "Korban Luka-luka: 10 Orang", "Korban Mengungsi: 8.000"],
    rumahRusak: ["Rumah Rusak Berat: 40 Rumah", "Rumah Rusak Sedang: 85 Rumah", "Rumah Rusak Ringan: 1.200 Rumah"],
    deskripsi:
      "Memiliki topografi cekungan yang menerima aliran air dari pegunungan sekitarnya. Sangat rentan banjir besar jika terjadi hujan ekstrem dengan durasi lama.",
    mitigasi:
      "Kanalisasi pengendali banjir, normalisasi sungai Tuweley dan Lempe, relokasi hunian bantaran sungai.",
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
