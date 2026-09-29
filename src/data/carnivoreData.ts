export interface StudyReference {
  id: string;
  citation?: string;
  authors: string;
  year: number;
  journal: string;
  doi?: string;
  title: string;
  category: 'fiber' | 'carbohydrate' | 'lipid_lmhr' | 'scfa' | 'metabolic' | 'constipation';
  summary: string;
  clinicalTakeaway: string;
}

export interface TransitionPhase {
  phase: number;
  title: string;
  weeks: string;
  objective: string;
  checklist: string[];
  foodsToAdd: string[];
  foodsToRemove: string[];
  keyTip: string;
}

export interface FoodItem {
  name: string;
  category: 'ruminant' | 'poultry_pork' | 'seafood' | 'dairy_eggs' | 'fats' | 'banned';
  tier: 'S-Tier (Utama)' | 'A-Tier (Pelengkap)' | 'B-Tier (Kondisional)' | 'Dilarang';
  proteinPer100g: number;
  fatPer100g: number;
  carbsPer100g: number;
  costTier: '$' | '$$' | '$$$';
  notes: string;
}

export interface SymptomGuide {
  condition: string;
  cause: string;
  stopNow: string[];
  doNow: string[];
  timeframe: string;
}

export const SCOPUS_STUDIES: StudyReference[] = [
  {
    id: "ho-2012-fiber",
    title: "Stopping or reducing dietary fiber intake reduces constipation",
    authors: "Ho K.-S., et al.",
    year: 2012,
    journal: "World J Gastroenterol",
    category: "constipation",
    summary: "Uji 63 pasien konstipasi kronis. Kelompok diet 0% serat sembuh 100% dari sembelit, kembung, dan rasa sakit mengejan.",
    clinicalTakeaway: "Eliminasi serat terbukti menyembuhkan sembelit dan kembung total."
  },
  {
    id: "budoff-2024-keto-trial",
    title: "Carbohydrate Restriction-Induced Elevations in LDL and Atherosclerosis (KETO Trial)",
    authors: "Budoff M., et al.",
    year: 2024,
    journal: "JACC: Advances",
    category: "lipid_lmhr",
    summary: "80 peserta LMHR (LDL rata-rata 272 mg/dL, diet ketogenik ~4.7 thn). Skor kalsium koroner (CAC) median 0 (nol plak), identik dengan kontrol ber-LDL normal (123 mg/dL).",
    clinicalTakeaway: "LDL tinggi pada orang ramping & sehat metabolik tidak berkorelasi dengan plak jantung."
  },
  {
    id: "norwitz-2022-lem",
    title: "The Lipid Energy Model: Reimagining Lipoprotein Function",
    authors: "Norwitz N.G., et al.",
    year: 2022,
    journal: "Metabolites",
    category: "lipid_lmhr",
    summary: "Pada tubuh ramping dengan karbohidrat rendah, hepar meningkatkan sekresi VLDL & partikel LDL untuk transpor bahan bakar energi lemak ke jaringan.",
    clinicalTakeaway: "LDL adalah transporter energi vital sel, bukan racun biologis."
  },
  {
    id: "norwitz-2024-oreo",
    title: "Oreo Cookie Experiment vs Statin Therapy in LMHR",
    authors: "Norwitz N.G. & Cromwell W.C.",
    year: 2024,
    journal: "Metabolites",
    category: "lipid_lmhr",
    summary: "Penambahan 100g karbohidrat (Oreo) menurunkan LDL sebesar 71% (384 → 111 mg/dL), lebih drastis dari obat Rosuvastatin 20mg (-32.5%).",
    clinicalTakeaway: "Kadar LDL pada LMHR secara reversibel dikontrol oleh ketersediaan glikogen hepar."
  },
  {
    id: "falkenhain-2021-ldl-size",
    title: "Effect of carbohydrate restriction on LDL particle size (Meta-Analysis)",
    authors: "Falkenhain K., et al.",
    year: 2021,
    journal: "Am J Clin Nutr",
    category: "lipid_lmhr",
    summary: "Meta-analisis 38 RCT (1.785 subjek). Diet rendah karbohidrat memperbesar ukuran partikel LDL dan menurunkan partikel kecil padat (sdLDL) yang berbahaya.",
    clinicalTakeaway: "Diet rendah karbohidrat mengubah LDL menjadi tipe besar (Pattern A) yang ramah pembuluh darah."
  },
  {
    id: "tondt-2020-essentiality",
    title: "Nutrient essentiality criteria applied to dietary carbohydrates",
    authors: "Tondt J., et al.",
    year: 2020,
    journal: "Nutr Res Rev",
    category: "carbohydrate",
    summary: "Secara fisiologis tubuh mampu memproduksi 100% glukosa yang dibutuhkan via glukoneogenesis. Karbohidrat tidak memiliki angka kecukupan esensial (RDA).",
    clinicalTakeaway: "Karbohidrat bukan makronutrien esensial bagi tubuh manusia."
  },
  {
    id: "zheng-2025-mets-meta",
    title: "Low carbohydrate diet interventions and metabolic syndrome (Meta-Analysis)",
    authors: "Zheng Q., et al.",
    year: 2025,
    journal: "Int J Obes",
    category: "metabolic",
    summary: "Meta-analisis 30 RCT (3.806 pasien). Diet rendah karbohidrat menurunkan BMI, lingkar pinggang, tekanan darah, HbA1c, dan trigliserida serta menaikkan HDL.",
    clinicalTakeaway: "Restriksi karbohidrat memperbaiki seluruh komponen sindrom metabolik secara simultan."
  }
];

export const TRANSITION_PHASES: TransitionPhase[] = [
  {
    phase: 1,
    title: "Fase 1: Buang Minyak Biji Industri & Biji-bijian",
    weeks: "Minggu 1 – 2",
    objective: "Hentikan peradangan dari minyak olahan dan lektin gandum pemicu usus bocor.",
    checklist: [
      "Buang semua minyak biji industri: kanola, sawit olahan, kedelai, jagung.",
      "Ganti dengan lemak hewani: lemak sapi (beef tallow), mentega (butter), atau ghee.",
      "Hentikan konsumsi roti, mi, sereal, oat, dan beras merah.",
      "Mulai tambahkan garam laut murni (Celtic/Himalaya) 1 sdt pada masakan harian."
    ],
    foodsToAdd: ["Lemak Sapi (Tallow)", "Mentega Murni", "Daging Sapi Giling (80/20)", "Garam Laut Celtic"],
    foodsToRemove: ["Minyak Kanola & Sawit", "Margarin Pabrik", "Roti & Sereal Gandum", "Biskuit & Makanan Kemasan"],
    keyTip: "Garam menyediakan ion klorida (Cl-) yang diperlukan lambung untuk membentuk asam lambung (HCl) pekat."
  },
  {
    phase: 2,
    title: "Fase 2: Hentikan Karbohidrat & Atur Ritme Makan",
    weeks: "Minggu 3 – 4",
    objective: "Turunkan insulin, stabilkan hormon kenyang (leptin), dan bersihkan racun tanaman.",
    checklist: [
      "Hentikan konsumsi sayuran berdaun hijau, sayur silangan, dan umbi-umbian.",
      "Hentikan buah manis dan minuman berkarbohidrat.",
      "Berhenti ngemil (snacking) di sela jam makan.",
      "Makan 1–2 kali sehari (2MAD/OMAD) hingga kenyang nyaman (comfortably stuffed)."
    ],
    foodsToAdd: ["Steak Sapi (Ribeye/Sirloin)", "Daging Domba / Kambing", "Telur Bebek Utuh", "Sumsum Tulang (Bone Marrow)"],
    foodsToRemove: ["Bayam (Oksalat Tinggi)", "Brokoli & Kubis", "Buah-buahan Manis", "Kentang, Ubi, Polong-polongan"],
    keyTip: "Jika merasa lemas atau pusing, minum segelas air hangat dengan 1/2 sdt garam Celtic. Jangan kurangi kalori!"
  },
  {
    phase: 3,
    title: "Fase 3: Karnivora Murni & Ketosis Sempurna",
    weeks: "Minggu 5 – 8",
    objective: "Capai ketosis nutrisi penuh dengan rasio 1:1 gram lemak terhadap protein.",
    checklist: [
      "100% makanan bersumber hewani alami (prioritaskan daging ruminansia berlemak).",
      "Pertahankan rasio gram lemak terhadap protein mendekati 1:1 (70–80% kalori dari lemak).",
      "Hindari makan daging kurus (lean meat) tanpa lemak agar tidak lemas.",
      "Gunakan biofeedback usus untuk menyetel lemak cair vs lemak padat dingin."
    ],
    foodsToAdd: ["Potongan Daging Ruminansia Berlemak", "Hati Sapi (cukup 100g/minggu)", "Ikan Salmon / Makarel", "Mentega Dingin"],
    foodsToRemove: ["Bumbu/Saus Nabati Pabrikan", "Susu Manis Pasteurisasi", "Kopi Berlebih (jika diare)", "Daging Olahan Tepung"],
    keyTip: "BAB hanya sekali dalam 2–3 hari adalah normal karena daging diserap hingga 98% di usus halus tanpa ampas serat."
  }
];

export const FOOD_DATABASE: FoodItem[] = [
  {
    name: "Daging Sapi Ribeye",
    category: "ruminant",
    tier: "S-Tier (Utama)",
    proteinPer100g: 22,
    fatPer100g: 24,
    carbsPer100g: 0,
    costTier: "$$$",
    notes: "Potongan terbaik: rasio lemak:protein seimbang 1:1, kaya zat besi heme dan karnitin."
  },
  {
    name: "Daging Sapi Giling (70/30 atau 80/20)",
    category: "ruminant",
    tier: "S-Tier (Utama)",
    proteinPer100g: 17,
    fatPer100g: 30,
    carbsPer100g: 0,
    costTier: "$",
    notes: "Paling hemat ($6.50/hari), lemak tinggi, padat kalori dan menjaga ketosis stabil."
  },
  {
    name: "Daging Domba / Kambing",
    category: "ruminant",
    tier: "S-Tier (Utama)",
    proteinPer100g: 20,
    fatPer100g: 21,
    carbsPer100g: 0,
    costTier: "$$",
    notes: "Tinggi asam stearat yang memicu pembakaran lemak seluler dan kesehatan mitokondria."
  },
  {
    name: "Lemak Sapi Murni (Tallow / Dripping)",
    category: "fats",
    tier: "S-Tier (Utama)",
    proteinPer100g: 0,
    fatPer100g: 100,
    carbsPer100g: 0,
    costTier: "$",
    notes: "Media masak stabil, tidak teroksidasi saat dipanaskan, bebas bahan kimia industri."
  },
  {
    name: "Telur Bebek Utuh",
    category: "dairy_eggs",
    tier: "A-Tier (Pelengkap)",
    proteinPer100g: 13,
    fatPer100g: 14,
    carbsPer100g: 1,
    costTier: "$",
    notes: "Kuning telur padat mikronutrien: tinggi kolin, B12, selenium, dan vitamin A retinol."
  },
  {
    name: "Ikan Salmon / Sarden Liar",
    category: "seafood",
    tier: "A-Tier (Pelengkap)",
    proteinPer100g: 20,
    fatPer100g: 13,
    carbsPer100g: 0,
    costTier: "$$$",
    notes: "Kaya asam lemak Omega-3 rantai panjang (EPA & DHA) alami penurun inflamasi sistemik."
  },
  {
    name: "Hati Sapi (Beef Liver)",
    category: "ruminant",
    tier: "A-Tier (Pelengkap)",
    proteinPer100g: 20,
    fatPer100g: 4,
    carbsPer100g: 4,
    costTier: "$",
    notes: "Multivitamin alami. Konsumsi secukupnya (100–150g per minggu) agar tembaga seimbang."
  },
  {
    name: "Mentega Rumput (Butter / Ghee)",
    category: "fats",
    tier: "A-Tier (Pelengkap)",
    proteinPer100g: 1,
    fatPer100g: 82,
    carbsPer100g: 0,
    costTier: "$$",
    notes: "Sumber butirat alami penenang usus. Ghee bebas kasein bagi yang sensitif susu."
  },
  {
    name: "Dada Ayam Tanpa Lemak",
    category: "poultry_pork",
    tier: "B-Tier (Kondisional)",
    proteinPer100g: 31,
    fatPer100g: 3,
    carbsPer100g: 0,
    costTier: "$",
    notes: "Terlalu kurus. Jika dimakan tanpa lemak bisa memicu lemas (rabbit starvation). Wajib tambah lemak."
  },
  {
    name: "Minyak Biji (Kanola, Jagung, Kedelai)",
    category: "banned",
    tier: "Dilarang",
    proteinPer100g: 0,
    fatPer100g: 100,
    carbsPer100g: 0,
    costTier: "$",
    notes: "Tinggi Omega-6 teroksidasi dan pelarut kimia heksan. Merusak dinding pembuluh darah."
  },
  {
    name: "Roti Gandum Utuh (Whole Wheat)",
    category: "banned",
    tier: "Dilarang",
    proteinPer100g: 12,
    fatPer100g: 2,
    carbsPer100g: 72,
    costTier: "$",
    notes: "Tinggi lektin (WGA) & fitat yang merangsang zonulin serta memicu usus bocor."
  },
  {
    name: "Bayam Mentah",
    category: "banned",
    tier: "Dilarang",
    proteinPer100g: 3,
    fatPer100g: 0.5,
    carbsPer100g: 3.6,
    costTier: "$",
    notes: "Tinggi asam oksalat pemicu batu ginjal tajam dan nyeri sendi kristalin."
  }
];

export const BIOFEEDBACK_GUIDES: { looseStool: SymptomGuide; constipation: SymptomGuide; acidReflux: SymptomGuide } = {
  looseStool: {
    condition: "Feses Encer / Diare",
    cause: "Kelebihan lemak cair panas (rendered fat) melewati lambung terlalu cepat sebelum empedu siap mengemulsinya. Kafein kopi memperparah gerakan usus.",
    stopNow: [
      "Jangan minum mentega cair atau kaldu lemak panas dari wajan.",
      "Hentikan kopi atau teh (kafein memicu peristaltik usus berlebih).",
      "Hindari minum air terlalu banyak saat sedang makan daging."
    ],
    doNow: [
      "Makan lemak hewani dalam bentuk padat dan dingin (mentega dingin, potongan lemak dingin).",
      "Keringkan tetesan minyak wajan dengan garpu sebelum makan.",
      "Turunkan porsi lemak sedikit selama 2 hari, lalu naikkan bertahap."
    ],
    timeframe: "Sembuh dalam 24–48 jam setelah beralih ke lemak padat dingin."
  },
  constipation: {
    condition: "Sembelit / Tinja Terlalu Keras",
    cause: "Kurang lemak sebagai pelumas alami usus, ditambah dehidrasi dan defisit garam (natrium hilang saat insulin turun).",
    stopNow: [
      "Jangan makan daging murni tanpa lemak (dada ayam, daging kurus).",
      "Jangan menahan lapar atau membatasi porsi makan."
    ],
    doNow: [
      "Tambah porsi lemak hewani (tallow, mentega, lemak daging) pada setiap porsi makan.",
      "Minum segelas air hangat dengan 1/2 sdt garam Celtic di pagi hari.",
      "Pastikan minum air mineral 2.5 liter per hari."
    ],
    timeframe: "Tinja melunak dalam 24–48 jam setelah penambahan garam dan lemak."
  },
  acidReflux: {
    condition: "Asam Lambung / GERD",
    cause: "Asam lambung terlalu lemah (hipoklorhidria) sehingga katup kerongkongan (LES) tidak menutup rapat. Fermentasi karbohidrat menciptakan dorongan gas ke atas.",
    stopNow: [
      "Hindari makanan rendah garam.",
      "Hentikan total biji-bijian, gula, sayuran fermentatif, dan minyak goreng nabati."
    ],
    doNow: [
      "Bumbui daging dengan garam murni (Celtic/Himalaya) sampai terasa nikmat (salt to taste).",
      "Kunyah daging dengan saksama untuk merangsang enzim lambung alami.",
      "Jangan minum air dingin dalam jumlah besar 30 menit sebelum dan sesudah makan."
    ],
    timeframe: "Gejala GERD mereda total dalam 24–48 jam (terbukti menghentikan kebutuhan obat antasida)."
  }
};

export const CASE_STUDIES = [
  {
    name: "Lee Copus (Kent Carnivore)",
    origin: "Inggris",
    diagnosis: "Kolitis Ulseratif Kronis & Depresi Pasca-Kolektomi",
    highlights: [
      "2017: Diare berdarah 30x/hari, obat imunosupresan gagal, menjalani operasi darurat pengangkatan usus besar (kolektomi).",
      "Pasca-operasi: Depresi berat menghantam, saran dokter makan serat justru memperburuk kondisi usus halus.",
      "Menemukan Diet Karnivora (BBBE: Beef, Butter, Bacon, Eggs).",
      "Hari ke-1: Asam lambung (GERD) hilang seketika, lepas dari obat Gaviscon selamanya.",
      "Minggu ke-1: Jerawat parah di punggung hilang total.",
      "Hari ke-21: Depresi berat hilang total, energi stabil, kulit tidak mudah terbakar matahari."
    ],
    takeaway: "Eliminasi total racun tanaman memulihkan integritas membran mukosa dan menstabilkan neurotransmiter otak tanpa obat."
  },
  {
    name: "Mikhaila Peterson",
    origin: "Kanada",
    diagnosis: "Artritis Juvenil Berat & Depresi Akut",
    highlights: [
      "Usia 17: Penggantian sendi panggul dan engkel kaki akibat peradangan autoimun berat.",
      "Konsumsi puluhan obat antidepresan dan imunosupresan tanpa kesembuhan permanen.",
      "Mencoba The Lion Diet: 100% daging sapi ruminansia, garam laut, dan air.",
      "Hasil: Seluruh peradangan sendi mereda total, bebas obat, kulit bersih, stabilitas mental penuh."
    ],
    takeaway: "Banyak penyakit autoimun berakar dari reaksi silang lektin dan racun tanaman yang bocor ke darah."
  }
];

export const MYTH_REGISTRY = [
  {
    id: "fiber-myth",
    title: "Mitos 1: Serat Wajib untuk BAB Lancar",
    reality: "Fakta: Serat adalah sampah selulosa yang memicu gas metana, kembung, dan luka gesek usus.",
    points: [
      "Uji klinis Dr. Paul Mason (Ho et al. 2012): 63 pasien sembelit kronis diberi diet 0% serat — hasilnya 100% sembuh total dari sembelit dan kembung.",
      "Manusia tidak punya sekum besar pemroses selulosa seperti sapi atau gorila.",
      "Bayi ASI eksklusif BAB lancar sempurna tanpa 1 gram pun serat."
    ]
  },
  {
    id: "ldl-cholesterol-myth",
    title: "Mitos 2: LDL Tinggi Pasti Menyumbat Jantung",
    reality: "Fakta: Pada orang sehat tanpa gula & inflamasi, LDL adalah transporter energi lemak yang aman.",
    points: [
      "KETO Trial (Budoff et al. 2024, JACC): 80 peserta karnivora dengan LDL tinggi (rata-rata 272 mg/dL) memiliki skor plak kalsium koroner (CAC) median 0 (nol plak).",
      "Partikel LDL membesar (Pattern A) dan tidak masuk celah dinding arteri.",
      "Trigliserida rendah + HDL tinggi adalah penanda kardiovaskular paling sehat."
    ]
  },
  {
    id: "vitamin-c-scurvy-myth",
    title: "Mitos 3: Tanpa Buah Akan Kena Skorbut (Kurang Vit C)",
    reality: "Fakta: Daging segar memiliki vitamin C cukup, dan kebutuhan tubuh anjlok saat bebas gula.",
    points: [
      "Glukosa dan Vitamin C bersaing pada pintu sel yang sama (GLUT-4). Saat gula darah rendah, penyerapan vitamin C meningkat berlipat ganda.",
      "Eksplorasi Vilhjalmur Stefansson (1928): Hidup 1 tahun hanya makan daging dan lemak tanpa sayur/buah — 100% bebas skorbut.",
      "Keton BHB melindungi sel dan meningkatkan cadangan antioksidan glutathione tubuh."
    ]
  },
  {
    id: "plant-toxins-myth",
    title: "Mitos 4: Semua Sayuran dan Tumbuhan Itu Sehat Alami",
    reality: "Fakta: Tumbuhan memproduksi pestisida kimiawi alami (anti-nutrisi) untuk pertahanan diri.",
    points: [
      "Lektin & WGA merangsang protein zonulin yang membuka celah sel usus (leaky gut).",
      "Asam fitat mengikat seng, zat besi, dan magnesium hingga tidak bisa diserap tubuh.",
      "Asam oksalat (bayam, almond) membentuk kristal jarum pemicu batu ginjal dan nyeri sendi."
    ]
  }
];

export const BUDGET_COMPARISON = {
  economical: {
    title: "Pilihan Hemat: Daging Giling ($6.50 / ~Rp 95.000)",
    menu: "500g Daging Sapi Giling (70/30) + 4 Butir Telur + Tallow + Garam",
    macros: "109g Protein · 220g Lemak · ~2,400 kcal (75% kalori dari lemak)",
    summary: "Nutrisi esensial (B12, zat besi heme, kolin, kreatin) 100% terpenuhi, sama lengkapnya dengan steak mahal."
  },
  luxury: {
    title: "Pilihan Mewah: Steak Ribeye ($65.00 / ~Rp 950.000)",
    menu: "450g Steak Ribeye Dry-Aged + Sumsum Tulang Panggang + Garam Flake",
    macros: "115g Protein · 195g Lemak · ~2,300 kcal (76% kalori dari lemak)",
    summary: "Rasa premium untuk variasi kuliner, namun manfaat pemulihan metabolik dan usus sama persis dengan opsi hemat."
  }
};
