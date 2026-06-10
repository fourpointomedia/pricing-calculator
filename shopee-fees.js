/* ============================================================================
   Shopee Fee Dataset — untuk fitur "AI Insight" di Pricing Calculator
   ----------------------------------------------------------------------------
   Sumber resmi Shopee Seller Centre:
     - Biaya Administrasi / Layanan per kategori  (efektif 25-02-2026)
     - Biaya Gratis Ongkir XTRA per kategori       (efektif 02-05-2026)
     - Biaya Promo XTRA                            (flat 4,5%, 31-12-2025)

   Tiap entri:
     c    = kategori utama
     s    = sub kategori (yang muncul sebagai hasil)
     adm  = Biaya Layanan Non-Star / Star+ (%)
     mall = Biaya Layanan Shopee Mall (%)
     ox   = kode tier Ongkir XTRA (A–H) → lihat SHOPEE_OX
     k    = kata kunci pencarian (jenis produk + sinonim umum)

   Promo XTRA = flat 4,5% untuk semua tipe penjual (cap Rp60.000/kuantitas).
   Ongkir XTRA per kode: [Ukuran Biasa %, Ukuran Khusus %] (cap Rp40.000/Rp60.000).
   ========================================================================== */

window.SHOPEE_PROMO_XTRA = 4.5;

window.SHOPEE_OX = {
  A: [1,   2.5],
  B: [2,   3.5],
  C: [3.5, 5],
  D: [5.5, 7],
  E: [6,   7.5],
  F: [6.5, 8],
  G: [7.5, 9],
  H: [8,   9.5]
};

// Sinonim / istilah sehari-hari → kata baku yang dipakai di keyword.
window.SHOPEE_SYNONYMS = {
  "cover": "sarung", "case": "casing", "casan": "charger", "cas": "charger",
  "hp": "handphone", "henpon": "handphone", "tv": "televisi", "kulkas": "kulkas",
  "softlens": "lensa kontak", "softlense": "lensa kontak", "make up": "kosmetik",
  "makeup": "kosmetik", "skincare": "perawatan wajah", "parfum": "parfum",
  "headset": "headphone", "earphone": "earphone", "speaker": "speaker",
  "laptop": "laptop", "powerbank": "powerbank", "kabel data": "kabel handphone",
  "popok bayi": "popok", "diapers": "popok", "sufor": "susu formula",
  "vitamin": "suplemen", "obat": "obat", "masker wajah": "masker wajah",
  "masker medis": "masker", "sajadah": "sajadah", "mukena": "mukena",
  "hijab": "hijab", "jilbab": "hijab", "kerudung": "hijab",
  "sepatu": "sepatu", "sandal": "sandal", "tas": "tas", "dompet": "dompet",
  "jam": "jam tangan", "kacamata": "kacamata", "cincin": "cincin",
  "emas": "logam mulia", "perhiasan": "perhiasan", "ban": "ban",
  "oli": "oli", "helm": "helm", "velg": "velg", "aki": "aki",
  "sarung jok": "jok", "karpet mobil": "karpet mobil", "parfum mobil": "parfum mobil",
  "kopi": "kopi", "teh": "teh", "snack": "makanan ringan", "cemilan": "makanan ringan",
  "beras": "beras", "minyak goreng": "minyak", "gula": "gula", "tepung": "tepung",
  "kosmetik": "kosmetik", "lipstik": "lipstik", "bedak": "bedak",
  "mainan": "mainan", "boneka": "boneka", "buku": "buku",
  "galon": "dispenser", "rice cooker": "penanak nasi", "magic com": "penanak nasi",
  "kipas": "kipas angin", "ac": "ac", "setrika": "setrika", "blender": "blender",
  "kamera": "kamera", "drone": "drone", "cctv": "kamera keamanan",
  "keyboard": "keyboard", "mouse": "mouse", "monitor": "monitor", "printer": "printer",
  "flashdisk": "flashdisk", "ssd": "ssd", "harddisk": "hard disk",
  "kursi": "kursi", "meja": "meja", "lemari": "lemari", "sofa": "sofa", "kasur": "matras",
  "lampu": "lampu", "gorden": "tirai", "karpet": "karpet", "jam dinding": "jam dinding"
};

window.SHOPEE_FEES = [
  /* ===================== ELEKTRONIK ===================== */
  // Audio (OX semua D)
  { c:"Audio", s:"Earphone, Headphone, & Headset", adm:6.75, mall:7.2, ox:"D", k:["earphone","headphone","headset","earbuds","tws","handsfree"] },
  { c:"Audio", s:"Perangkat Audio & Speaker", adm:9.0, mall:7.2, ox:"D", k:["speaker","home theater","karaoke","av receiver","soundbar","sound system"] },
  { c:"Audio", s:"Mikrofon & Aksesoris", adm:9.0, mall:7.2, ox:"D", k:["mikrofon","mic","microphone","clip on"] },
  { c:"Audio", s:"Amplifier & Mixer", adm:9.0, mall:7.2, ox:"D", k:["amplifier","mixer","power amplifier"] },
  { c:"Audio", s:"Kabel & Konverter Audio & Video", adm:9.0, mall:9.95, ox:"D", k:["kabel audio","konverter","hdmi","kabel video","aux"] },
  { c:"Audio", s:"Media Player", adm:9.5, mall:7.7, ox:"D", k:["mp3","mp4","media player","cd player","dvd player","radio","tape","voice recorder"] },

  // Elektronik (rumah tangga & listrik)
  { c:"Elektronik", s:"Kelistrikan", adm:10.0, mall:10.2, ox:"F", k:["stop kontak","kabel listrik","saklar","bel","alarm","anti petir","penghemat listrik","terminal listrik"] },
  { c:"Elektronik", s:"Baterai", adm:9.5, mall:7.7, ox:"D", k:["baterai","battery","aa","aaa","baterai abc"] },
  { c:"Elektronik", s:"Perangkat Dapur (Elektronik)", adm:6.5, mall:7.2, ox:"D", k:["dispenser","kompor","kompor listrik","blender","mixer","air fryer","microwave","oven","penanak nasi","rice cooker","magic com","juicer","mesin kopi","kulkas","freezer","kompor gas","food processor","slow cooker"] },
  { c:"Elektronik", s:"Peralatan Listrik Besar (AC, Mesin Cuci)", adm:6.5, mall:7.2, ox:"D", k:["ac","air conditioner","mesin cuci","pengering pakaian","kipas angin","pendingin ruangan"] },
  { c:"Elektronik", s:"Peralatan Listrik Besar (Water Heater)", adm:9.5, mall:7.2, ox:"D", k:["water heater","pemanas air","penghangat ruangan","pengering sepatu"] },
  { c:"Elektronik", s:"Peralatan Listrik Kecil", adm:6.5, mall:7.2, ox:"D", k:["setrika","mesin uap","purifier","air purifier","dehumidifier","penyedot debu","vacuum","mesin jahit","telepon"] },
  { c:"Elektronik", s:"Peralatan Listrik Kecil (Flosser)", adm:9.0, mall:7.2, ox:"E", k:["flosser elektrik","water flosser"] },
  { c:"Elektronik", s:"TV & Aksesoris", adm:6.5, mall:7.2, ox:"D", k:["tv","televisi","antena tv","bracket tv","tv box","receiver tv","smart tv"] },
  { c:"Elektronik", s:"Proyektor & Aksesoris", adm:5.25, mall:4.2, ox:"C", k:["proyektor","projector","layar proyektor","pointer"] },
  { c:"Elektronik", s:"Remot Kontrol", adm:9.0, mall:7.2, ox:"D", k:["remot","remote","remot tv","remote control"] },
  { c:"Elektronik", s:"Rokok Elektronik & Shisha", adm:9.0, mall:7.2, ox:"D", k:["vape","rokok elektronik","pods","liquid","shisha","mod","hookah"] },

  // Gaming & Konsol (OX D)
  { c:"Gaming & Konsol", s:"Konsol Game", adm:9.5, mall:7.7, ox:"D", k:["playstation","ps4","ps5","xbox","nintendo","switch","psp","konsol game","wii"] },
  { c:"Gaming & Konsol", s:"Video Game", adm:9.5, mall:7.7, ox:"D", k:["video game","kaset game","game pc","game ps"] },
  { c:"Gaming & Konsol", s:"Aksesoris Konsol", adm:9.0, mall:7.2, ox:"D", k:["stik ps","controller","joystick","aksesoris konsol","stik game"] },

  // Handphone & Aksesoris
  { c:"Handphone & Aksesoris", s:"Handphone", adm:5.25, mall:4.7, ox:"A", k:["handphone","hp","smartphone","ponsel","iphone","samsung","xiaomi","oppo","vivo"] },
  { c:"Handphone & Aksesoris", s:"Tablet", adm:5.25, mall:4.7, ox:"A", k:["tablet","ipad","tab"] },
  { c:"Handphone & Aksesoris", s:"Aksesoris Handphone", adm:10.0, mall:10.2, ox:"D", k:["casing","case","softcase","charger","casan","kabel data","powerbank","anti gores","tempered glass","pelindung layar","phone holder","tongsis","pouch hp","kepala charger","kabel charger"] },
  { c:"Handphone & Aksesoris", s:"Perangkat Wearable", adm:9.5, mall:7.7, ox:"D", k:["smartwatch","jam pintar","fitness tracker","perangkat vr","pelacak gps","gps tracker"] },
  { c:"Handphone & Aksesoris", s:"Kartu Perdana", adm:9.5, mall:7.7, ox:"D", k:["kartu perdana","perdana","sim card","kartu sim"] },
  { c:"Handphone & Aksesoris", s:"Walkie Talkie", adm:9.5, mall:7.7, ox:"D", k:["walkie talkie","ht","handy talky"] },

  // Kamera & Drone (OX D)
  { c:"Kamera & Drone", s:"Kamera", adm:6.5, mall:7.2, ox:"D", k:["kamera","dslr","mirrorless","kamera pocket","action cam","gopro","kamera analog","kamera instan","camcorder"] },
  { c:"Kamera & Drone", s:"Lensa", adm:6.5, mall:7.2, ox:"D", k:["lensa","lens","lensa kamera"] },
  { c:"Kamera & Drone", s:"Drone", adm:6.5, mall:7.2, ox:"D", k:["drone","quadcopter"] },
  { c:"Kamera & Drone", s:"Kamera Keamanan", adm:9.5, mall:7.7, ox:"D", k:["cctv","kamera cctv","dvr","kamera keamanan","kamera pengintai","ip camera"] },
  { c:"Kamera & Drone", s:"Aksesoris Kamera", adm:9.5, mall:10.2, ox:"D", k:["tripod","gimbal","stabilizer","flash kamera","tas kamera","memori kamera","aksesoris kamera"] },
  { c:"Kamera & Drone", s:"Aksesoris Lensa", adm:9.5, mall:7.2, ox:"D", k:["filter lensa","hood lensa","cap lensa","adaptor lensa"] },
  { c:"Kamera & Drone", s:"Perawatan Kamera", adm:9.5, mall:7.2, ox:"D", k:["dry box","cleaning kit kamera","silica gel","blower","lenspen"] },

  // Komputer & Aksesoris
  { c:"Komputer & Aksesoris", s:"Laptop", adm:5.25, mall:4.7, ox:"A", k:["laptop","notebook","macbook","ultrabook"] },
  { c:"Komputer & Aksesoris", s:"Desktop / PC", adm:5.25, mall:4.7, ox:"A", k:["pc","desktop","komputer","cpu","pc rakitan","all in one","mini pc"] },
  { c:"Komputer & Aksesoris", s:"Monitor", adm:5.25, mall:4.7, ox:"A", k:["monitor","layar komputer","lcd monitor"] },
  { c:"Komputer & Aksesoris", s:"Komponen Desktop & Laptop", adm:5.25, mall:4.2, ox:"B", k:["processor","motherboard","vga","ram","power supply","psu","casing pc","heatsink","memory ram","ssd komponen","fan pc"] },
  { c:"Komputer & Aksesoris", s:"Penyimpanan Data", adm:6.75, mall:7.2, ox:"C", k:["ssd","hard disk","hardisk","flashdisk","usb drive","nas","penyimpanan"] },
  { c:"Komputer & Aksesoris", s:"Printer & Scanner", adm:6.75, mall:7.7, ox:"B", k:["printer","scanner","tinta printer","mesin fotokopi","printer thermal","3d printer"] },
  { c:"Komputer & Aksesoris", s:"Keyboard & Mouse", adm:6.75, mall:7.2, ox:"D", k:["keyboard","mouse","drawing tablet","keyboard gaming","mouse gaming"] },
  { c:"Komputer & Aksesoris", s:"Komponen Network", adm:6.75, mall:7.7, ox:"D", k:["router","modem","wifi","repeater","switch network","kabel lan","access point"] },
  { c:"Komputer & Aksesoris", s:"Aksesoris Desktop & Laptop", adm:6.75, mall:10.2, ox:"D", k:["mouse pad","cooling pad","webcam","usb hub","stand laptop","charger laptop","tas laptop"] },
  { c:"Komputer & Aksesoris", s:"Peralatan Kantor", adm:6.75, mall:7.2, ox:"C", k:["mesin absensi","penghancur kertas","mesin hitung uang","mesin ketik"] },
  { c:"Komputer & Aksesoris", s:"Software", adm:6.75, mall:7.2, ox:"D", k:["software","aplikasi","windows","antivirus"] },

  /* ===================== FASHION ===================== */
  // Aksesoris Fashion
  { c:"Aksesoris Fashion", s:"Logam Mulia", adm:4.25, mall:3.2, ox:"B", k:["emas","logam mulia","perak","platinum","berlian","permata","emas batangan"] },
  { c:"Aksesoris Fashion", s:"Perhiasan Berharga", adm:4.25, mall:3.2, ox:"B", k:["perhiasan","kalung emas","cincin emas","gelang emas","anting emas","liontin"] },
  { c:"Aksesoris Fashion", s:"Aksesoris Tambahan (Masker)", adm:8.25, mall:10.45, ox:"G", k:["masker kain","masker"] },
  { c:"Aksesoris Fashion", s:"Aksesoris Rambut", adm:9.0, mall:10.2, ox:"H", k:["bando","ikat rambut","jepit rambut","scrunchie","hairclip","rambut palsu","wig"] },
  { c:"Aksesoris Fashion", s:"Kacamata & Aksesoris", adm:9.0, mall:10.2, ox:"H", k:["kacamata","kacamata hitam","sunglasses","frame kacamata","lensa kacamata"] },
  { c:"Aksesoris Fashion", s:"Topi", adm:9.0, mall:10.2, ox:"H", k:["topi","topi baseball","bucket hat","beanie"] },
  { c:"Aksesoris Fashion", s:"Ikat Pinggang", adm:9.0, mall:10.2, ox:"H", k:["ikat pinggang","sabuk","gesper"] },
  { c:"Aksesoris Fashion", s:"Anting / Cincin / Kalung / Gelang (Fashion)", adm:9.0, mall:10.2, ox:"H", k:["anting","cincin","kalung","gelang","aksesoris fashion","perhiasan imitasi","bangle"] },
  { c:"Aksesoris Fashion", s:"Dasi", adm:9.0, mall:10.2, ox:"H", k:["dasi","dasi kupu","bow tie"] },
  { c:"Aksesoris Fashion", s:"Sarung Tangan", adm:9.0, mall:10.2, ox:"H", k:["sarung tangan","gloves"] },
  { c:"Aksesoris Fashion", s:"Syal & Selendang", adm:9.0, mall:10.2, ox:"H", k:["syal","selendang","scarf","pashmina"] },

  // Fashion Bayi & Anak (OX D, perhiasan B, jas hujan H)
  { c:"Fashion Bayi & Anak", s:"Pakaian Anak Laki-Laki", adm:9.0, mall:10.2, ox:"D", k:["baju anak laki","kaos anak","kemeja anak","celana anak","jaket anak"] },
  { c:"Fashion Bayi & Anak", s:"Pakaian Anak Perempuan", adm:9.0, mall:10.2, ox:"D", k:["baju anak perempuan","dress anak","rok anak","kaos anak perempuan"] },
  { c:"Fashion Bayi & Anak", s:"Pakaian Bayi", adm:9.0, mall:9.95, ox:"D", k:["baju bayi","jumper bayi","bodysuit","romper bayi","set bayi"] },
  { c:"Fashion Bayi & Anak", s:"Sepatu Anak", adm:9.0, mall:10.2, ox:"D", k:["sepatu anak","sandal anak","sneaker anak","sepatu bayi"] },
  { c:"Fashion Bayi & Anak", s:"Aksesoris Bayi & Anak", adm:9.0, mall:10.2, ox:"D", k:["tas anak","topi anak","kaos kaki anak","ransel anak","aksesoris anak"] },

  // Fashion Muslim (OX G, baju olahraga/renang H)
  { c:"Fashion Muslim", s:"Mukena & Perlengkapan Sholat", adm:8.25, mall:9.95, ox:"G", k:["mukena","sajadah","peci","songkok","kopiah","perlengkapan sholat","mukena travel"] },
  { c:"Fashion Muslim", s:"Pakaian Muslim Wanita", adm:10.0, mall:9.95, ox:"G", k:["hijab","jilbab","kerudung","gamis","abaya","khimar","pashmina","tunik","baju muslim wanita","kaftan"] },
  { c:"Fashion Muslim", s:"Pakaian Muslim Pria", adm:8.25, mall:9.95, ox:"G", k:["baju koko","gamis pria","sarung","baju melayu","baju muslim pria","sarung tenun"] },
  { c:"Fashion Muslim", s:"Pakaian Muslim Anak", adm:8.25, mall:9.95, ox:"G", k:["baju muslim anak","gamis anak","hijab anak","koko anak"] },
  { c:"Fashion Muslim", s:"Outerwear Muslim", adm:8.25, mall:9.95, ox:"G", k:["cardigan muslim","outer muslim","jaket muslim","rompi"] },

  // Jam Tangan (OX H)
  { c:"Jam Tangan", s:"Jam Tangan Pria", adm:9.0, mall:10.2, ox:"H", k:["jam tangan pria","jam tangan","arloji"] },
  { c:"Jam Tangan", s:"Jam Tangan Wanita", adm:9.0, mall:10.2, ox:"H", k:["jam tangan wanita","jam tangan cewek"] },
  { c:"Jam Tangan", s:"Jam Tangan Couple", adm:9.0, mall:10.2, ox:"H", k:["jam couple","jam tangan pasangan"] },
  { c:"Jam Tangan", s:"Aksesoris Jam Tangan", adm:9.0, mall:10.2, ox:"H", k:["strap jam","tali jam","baterai jam","kotak jam"] },

  // Koper & Tas Travel
  { c:"Koper & Tas Travel", s:"Koper", adm:10.0, mall:11.7, ox:"G", k:["koper","luggage","koper kabin","travel bag"] },
  { c:"Koper & Tas Travel", s:"Tas Travel", adm:10.0, mall:10.2, ox:"G", k:["tas travel","tas duffel","tas lipat","tas serut"] },
  { c:"Koper & Tas Travel", s:"Aksesoris Travel", adm:9.0, mall:10.2, ox:"G", k:["passport cover","organizer travel","gembok koper","timbangan koper","bantal leher","tag koper"] },

  // Pakaian Pria (OX F)
  { c:"Pakaian Pria", s:"Atasan Pria", adm:8.25, mall:9.95, ox:"F", k:["kaos pria","kemeja pria","kaos polo","baju pria","tanktop","atasan pria"] },
  { c:"Pakaian Pria", s:"Celana Panjang Pria", adm:8.25, mall:9.95, ox:"F", k:["celana panjang pria","cargo","jogger","chino"] },
  { c:"Pakaian Pria", s:"Celana Jeans Pria", adm:8.25, mall:9.95, ox:"F", k:["celana jeans pria","jeans pria"] },
  { c:"Pakaian Pria", s:"Celana Pendek Pria", adm:8.25, mall:9.95, ox:"F", k:["celana pendek pria","celana kolor"] },
  { c:"Pakaian Pria", s:"Jaket, Mantel, & Rompi Pria", adm:8.25, mall:9.95, ox:"F", k:["jaket pria","mantel","rompi pria","jaket kulit"] },
  { c:"Pakaian Pria", s:"Hoodie & Sweatshirt Pria", adm:8.25, mall:9.95, ox:"F", k:["hoodie pria","sweatshirt","sweater pria"] },
  { c:"Pakaian Pria", s:"Pakaian Dalam Pria", adm:8.25, mall:9.95, ox:"F", k:["celana dalam pria","boxer","kaos dalam pria","singlet"] },
  { c:"Pakaian Pria", s:"Kaos Kaki Pria", adm:10.0, mall:10.2, ox:"F", k:["kaos kaki pria","kaos kaki"] },

  // Pakaian Wanita (OX G; kaos kaki & stocking F)
  { c:"Pakaian Wanita", s:"Atasan Wanita", adm:8.25, mall:9.95, ox:"G", k:["atasan wanita","kaos wanita","kemeja wanita","blouse","blus","tanktop wanita","bodysuit"] },
  { c:"Pakaian Wanita", s:"Dress", adm:8.25, mall:9.95, ox:"G", k:["dress","gaun","terusan"] },
  { c:"Pakaian Wanita", s:"Rok", adm:8.25, mall:9.95, ox:"G", k:["rok","rok mini","rok panjang"] },
  { c:"Pakaian Wanita", s:"Celana & Legging Wanita", adm:8.25, mall:9.95, ox:"G", k:["celana wanita","legging","celana panjang wanita","kulot"] },
  { c:"Pakaian Wanita", s:"Celana Jeans Wanita", adm:8.25, mall:9.95, ox:"G", k:["jeans wanita","celana jeans wanita"] },
  { c:"Pakaian Wanita", s:"Pakaian Dalam Wanita", adm:8.25, mall:9.95, ox:"G", k:["bra","celana dalam wanita","lingerie","korset","pakaian dalam wanita","bh"] },
  { c:"Pakaian Wanita", s:"Baju Hamil & Menyusui", adm:8.25, mall:9.95, ox:"G", k:["baju hamil","baju menyusui","dress hamil","bra menyusui"] },
  { c:"Pakaian Wanita", s:"Pakaian Tidur & Piyama Wanita", adm:8.25, mall:9.95, ox:"G", k:["piyama","daster","baju tidur","kimono"] },
  { c:"Pakaian Wanita", s:"Hijab & Set (lihat Fashion Muslim)", adm:8.25, mall:9.95, ox:"G", k:["set wanita","setelan wanita","jumpsuit","wedding dress"] },
  { c:"Pakaian Wanita", s:"Kaos Kaki & Stocking", adm:10.0, mall:10.2, ox:"F", k:["kaos kaki wanita","stocking"] },

  // Sepatu Pria (OX F)
  { c:"Sepatu Pria", s:"Sneakers Pria", adm:9.0, mall:10.2, ox:"F", k:["sepatu pria","sneakers pria","sepatu kets pria"] },
  { c:"Sepatu Pria", s:"Sandal Pria", adm:9.0, mall:10.2, ox:"F", k:["sandal pria","sandal jepit","sandal gunung"] },
  { c:"Sepatu Pria", s:"Sepatu Formal Pria", adm:9.0, mall:10.2, ox:"F", k:["sepatu formal pria","pantofel","oxford","loafer pria"] },
  { c:"Sepatu Pria", s:"Boot Pria", adm:9.0, mall:10.2, ox:"F", k:["sepatu boot pria","safety boot","boots"] },
  { c:"Sepatu Pria", s:"Aksesoris & Perawatan Sepatu", adm:9.0, mall:10.2, ox:"F", k:["tali sepatu","semir sepatu","insole","perawatan sepatu","parfum sepatu"] },

  // Sepatu Wanita (OX F)
  { c:"Sepatu Wanita", s:"Sneakers Wanita", adm:9.0, mall:10.2, ox:"F", k:["sepatu wanita","sneakers wanita","sepatu kets wanita"] },
  { c:"Sepatu Wanita", s:"Heels", adm:9.0, mall:10.2, ox:"F", k:["heels","high heels","sepatu hak","wedges"] },
  { c:"Sepatu Wanita", s:"Sepatu Flat Wanita", adm:9.0, mall:10.2, ox:"F", k:["flat shoes","sepatu flat","ballerina","loafer wanita"] },
  { c:"Sepatu Wanita", s:"Sandal Wanita", adm:9.0, mall:10.2, ox:"F", k:["sandal wanita","sandal flat","sandal jepit wanita"] },

  // Tas Pria (OX G)
  { c:"Tas Pria", s:"Ransel Pria", adm:9.0, mall:10.2, ox:"G", k:["ransel pria","tas ransel","backpack pria"] },
  { c:"Tas Pria", s:"Tas Selempang & Bahu Pria", adm:9.0, mall:10.2, ox:"G", k:["tas selempang pria","sling bag","tas bahu pria"] },
  { c:"Tas Pria", s:"Dompet Pria", adm:9.0, mall:10.2, ox:"G", k:["dompet pria","dompet kartu","dompet lipat"] },
  { c:"Tas Pria", s:"Tas Kerja & Laptop Pria", adm:9.0, mall:10.2, ox:"G", k:["tas kerja","tas laptop pria","tas kantor"] },

  // Tas Wanita (OX G)
  { c:"Tas Wanita", s:"Ransel Wanita", adm:9.0, mall:10.2, ox:"G", k:["ransel wanita","tas ransel wanita","backpack wanita"] },
  { c:"Tas Wanita", s:"Tas Selempang & Bahu Wanita", adm:9.0, mall:10.2, ox:"G", k:["tas selempang wanita","sling bag wanita","tas bahu wanita","tas tangan"] },
  { c:"Tas Wanita", s:"Tote Bag", adm:9.0, mall:10.2, ox:"G", k:["tote bag","tas jinjing"] },
  { c:"Tas Wanita", s:"Dompet Wanita", adm:9.0, mall:10.2, ox:"G", k:["dompet wanita","dompet panjang"] },
  { c:"Tas Wanita", s:"Aksesoris Tas", adm:9.0, mall:10.2, ox:"G", k:["tali tas","gantungan tas","organizer tas"] },

  /* ===================== FMCG ===================== */
  // Ibu & Bayi (OX D; mainan H)
  { c:"Ibu & Bayi", s:"Susu Formula & Makanan Bayi", adm:6.75, mall:7.2, ox:"D", k:["susu formula","sufor","bubur bayi","sereal bayi","camilan bayi","makanan bayi"] },
  { c:"Ibu & Bayi", s:"Popok & Pispot", adm:9.0, mall:9.95, ox:"D", k:["popok","diapers","pampers","popok kain","pispot","perlak"] },
  { c:"Ibu & Bayi", s:"Perlengkapan Makan Bayi", adm:8.25, mall:7.7, ox:"D", k:["botol susu","dot bayi","pompa asi","sterilizer","kursi makan bayi","peralatan makan bayi"] },
  { c:"Ibu & Bayi", s:"Perlengkapan Mandi Bayi", adm:8.25, mall:7.7, ox:"D", k:["sabun bayi","shampo bayi","bak mandi bayi","handuk bayi","parfum bayi"] },
  { c:"Ibu & Bayi", s:"Kesehatan Bayi", adm:8.25, mall:7.2, ox:"D", k:["minyak telon","bedak bayi","baby lotion","vitamin bayi","perawatan bayi"] },
  { c:"Ibu & Bayi", s:"Kamar Bayi", adm:8.25, mall:10.2, ox:"D", k:["box bayi","ayunan bayi","baby walker","bedong","selimut bayi","kasur bayi"] },
  { c:"Ibu & Bayi", s:"Perlengkapan Travelling Bayi", adm:9.0, mall:10.2, ox:"D", k:["stroller","gendongan bayi","car seat","kereta bayi","tas bayi"] },
  { c:"Ibu & Bayi", s:"Kehamilan & Ibu Hamil", adm:9.0, mall:10.2, ox:"D", k:["susu ibu hamil","vitamin ibu hamil","bantal hamil","penyangga perut"] },
  { c:"Ibu & Bayi", s:"Mainan Bayi & Anak", adm:9.0, mall:7.7, ox:"H", k:["mainan","mainan bayi","mainan edukasi","boneka","puzzle","mainan anak","lego","slime"] },

  // Kesehatan
  { c:"Kesehatan", s:"Obat-obatan & Alat Kesehatan", adm:9.5, mall:7.2, ox:"E", k:["obat","obat warung","p3k","plester","perban","termometer","tensimeter","alat tes gula darah","kursi roda","masker medis","sarung tangan medis"] },
  { c:"Kesehatan", s:"Suplemen Makanan", adm:9.0, mall:7.2, ox:"E", k:["vitamin","suplemen","multivitamin","kolagen","suplemen diet","madu"] },
  { c:"Kesehatan", s:"Perawatan Diri", adm:9.0, mall:7.2, ox:"E", k:["sikat gigi","pasta gigi","obat kumur","pembalut","anti nyamuk","perawatan gigi"] },
  { c:"Kesehatan", s:"Kesehatan Seksual", adm:9.0, mall:7.7, ox:"D", k:["kondom","pelumas","alat bantu"] },
  { c:"Kesehatan", s:"Lensa Kontak", adm:9.0, mall:8.0, ox:"H", k:["softlens","lensa kontak","contact lens","cairan softlens"] },

  // Makanan & Minuman (OX E)
  { c:"Makanan & Minuman", s:"Makanan Ringan", adm:10.0, mall:10.2, ox:"E", k:["snack","makanan ringan","keripik","biskuit","wafer","kerupuk","permen","cokelat","kacang","cemilan","dendeng","abon"] },
  { c:"Makanan & Minuman", s:"Minuman", adm:9.0, mall:10.2, ox:"E", k:["kopi","teh","minuman","sirup","jus","susu non dairy","minuman serbuk","minuman energi"] },
  { c:"Makanan & Minuman", s:"Bahan Pokok / Sembako", adm:6.75, mall:6.2, ox:"E", k:["beras","mie","pasta","makanan kaleng","bahan pokok","sembako","seafood kering","biji-bijian"] },
  { c:"Makanan & Minuman", s:"Kebutuhan Memasak / Bumbu", adm:6.75, mall:7.2, ox:"E", k:["minyak goreng","garam","gula","kecap","saus","sambal","bumbu masak","tepung bumbu","lada","rempah"] },
  { c:"Makanan & Minuman", s:"Bahan Baking", adm:6.75, mall:6.2, ox:"E", k:["tepung","tepung terigu","baking powder","pewarna makanan","bahan kue","penyedap kue","soda kue"] },
  { c:"Makanan & Minuman", s:"Makanan Instan", adm:9.0, mall:7.2, ox:"E", k:["mie instan","makanan instan","makanan siap saji","bubur instan","hotpot instan"] },
  { c:"Makanan & Minuman", s:"Susu & Olahan", adm:8.25, mall:9.95, ox:"E", k:["susu","susu uht","susu bubuk","keju","yogurt","mentega","margarin","krimer","es krim"] },
  { c:"Makanan & Minuman", s:"Telur", adm:6.5, mall:7.2, ox:"E", k:["telur","telur ayam","telur bebek"] },
  { c:"Makanan & Minuman", s:"Roti & Kue", adm:9.0, mall:10.2, ox:"E", k:["roti","kue","pastry","pie","bakery"] },
  { c:"Makanan & Minuman", s:"Menu Sarapan", adm:8.25, mall:10.2, ox:"E", k:["madu","selai","sereal","granola","oat"] },
  { c:"Makanan & Minuman", s:"Makanan Segar & Beku", adm:6.75, mall:9.95, ox:"E", k:["daging","ayam","ikan","udang","sayur","buah","frozen food","makanan beku","seafood"] },

  // Perawatan & Kecantikan (OX D)
  { c:"Perawatan & Kecantikan", s:"Perawatan Wajah / Skincare", adm:8.25, mall:9.95, ox:"D", k:["skincare","perawatan wajah","serum","toner","pelembab","sunscreen","masker wajah","facial wash","moisturizer","cleanser"] },
  { c:"Perawatan & Kecantikan", s:"Kosmetik / Make Up", adm:8.25, mall:9.95, ox:"D", k:["kosmetik","make up","lipstik","bedak","foundation","maskara","eyeliner","blush on","concealer","eyeshadow"] },
  { c:"Perawatan & Kecantikan", s:"Perawatan Tubuh", adm:8.25, mall:9.95, ox:"D", k:["sabun mandi","body lotion","deodoran","body scrub","lulur","handbody","sunscreen tubuh"] },
  { c:"Perawatan & Kecantikan", s:"Perawatan Rambut", adm:8.25, mall:9.95, ox:"D", k:["shampo","conditioner","vitamin rambut","cat rambut","hair tonic","masker rambut"] },
  { c:"Perawatan & Kecantikan", s:"Parfum & Wewangian", adm:8.25, mall:9.95, ox:"D", k:["parfum","minyak wangi","body mist","cologne","eau de toilette"] },
  { c:"Perawatan & Kecantikan", s:"Alat Kecantikan", adm:8.25, mall:9.95, ox:"D", k:["alat make up","kuas make up","beauty blender","hair dryer","catokan","alat kecantikan","cermin"] },
  { c:"Perawatan & Kecantikan", s:"Perawatan Tangan, Kaki & Kuku", adm:8.25, mall:9.95, ox:"D", k:["kutek","cat kuku","kuku palsu","nail art","perawatan kuku","hand cream"] },
  { c:"Perawatan & Kecantikan", s:"Perawatan Pria (Grooming)", adm:8.25, mall:9.95, ox:"D", k:["alat cukur","pisau cukur","pomade","grooming pria","perawatan pria"] },

  /* ===================== LIFESTYLE ===================== */
  // Buku & Alat Tulis
  { c:"Buku & Alat Tulis", s:"Alat Tulis", adm:9.0, mall:7.2, ox:"D", k:["pulpen","pensil","spidol","penghapus","tipe x","highlighter","alat tulis","atk"] },
  { c:"Buku & Alat Tulis", s:"Perlengkapan Sekolah & Kantor", adm:9.0, mall:7.2, ox:"D", k:["kalkulator","gunting","lem","stapler","selotip","penggaris","tempat pensil","papan tulis"] },
  { c:"Buku & Alat Tulis", s:"Perlengkapan Menggambar", adm:10.0, mall:11.7, ox:"D", k:["pensil warna","crayon","cat air","cat akrilik","kuas lukis","kanvas","buku gambar"] },
  { c:"Buku & Alat Tulis", s:"Buku Tulis & Kertas", adm:9.0, mall:9.95, ox:"E", k:["buku tulis","kertas","kertas hvs","notebook","sticky notes","label","stiker"] },
  { c:"Buku & Alat Tulis", s:"Pembungkus Kado & Kemasan", adm:9.5, mall:7.7, ox:"G", k:["kertas kado","kardus","bubble wrap","kotak kado","pita kado","tas kado","packaging"] },

  // Buku & Majalah
  { c:"Buku & Majalah", s:"Buku Bacaan", adm:9.0, mall:7.2, ox:"E", k:["buku","novel","buku pelajaran","buku anak","buku resep","komik","buku agama"] },
  { c:"Buku & Majalah", s:"Majalah & Koran", adm:10.0, mall:11.7, ox:"D", k:["majalah","koran","tabloid"] },
  { c:"Buku & Majalah", s:"E-Book", adm:9.0, mall:7.7, ox:"D", k:["ebook","e-book","buku digital"] },

  // Hewan Peliharaan
  { c:"Hewan Peliharaan", s:"Makanan Hewan", adm:9.5, mall:7.7, ox:"H", k:["makanan kucing","makanan anjing","pakan hewan","snack kucing","cat food","dog food","pakan burung"] },
  { c:"Hewan Peliharaan", s:"Aksesoris Hewan Peliharaan", adm:9.5, mall:7.7, ox:"H", k:["kandang","mainan kucing","tempat makan hewan","kalung hewan","aquarium","tempat tidur hewan"] },
  { c:"Hewan Peliharaan", s:"Litter & Toilet Hewan", adm:9.5, mall:7.7, ox:"H", k:["pasir kucing","litter box","popok hewan","training pad"] },
  { c:"Hewan Peliharaan", s:"Grooming Hewan", adm:9.5, mall:7.7, ox:"G", k:["shampo hewan","grooming","perawatan hewan","sisir hewan"] },
  { c:"Hewan Peliharaan", s:"Perawatan Kesehatan Hewan", adm:9.5, mall:7.7, ox:"G", k:["vitamin hewan","obat kutu","obat hewan","suplemen hewan"] },
  { c:"Hewan Peliharaan", s:"Pakaian & Aksesoris Hewan", adm:9.5, mall:7.7, ox:"G", k:["baju hewan","baju kucing","baju anjing","aksesoris hewan"] },

  // Hobi & Koleksi
  { c:"Hobi & Koleksi", s:"Alat & Aksesoris Musik", adm:9.5, mall:7.7, ox:"E", k:["gitar","keyboard musik","piano","ukulele","alat musik","drum","biola"] },
  { c:"Hobi & Koleksi", s:"Koleksi (Action Figure, dll)", adm:9.5, mall:7.7, ox:"H", k:["action figure","koleksi","diecast","figure","patung","koin","koleksi anime"] },
  { c:"Hobi & Koleksi", s:"Mainan & Games (Hobi)", adm:9.5, mall:7.7, ox:"H", k:["board game","kartu","rubik","yoyo","kartu remi","mainan dewasa"] },
  { c:"Hobi & Koleksi", s:"Souvenir & Hadiah", adm:9.0, mall:10.45, ox:"G", k:["souvenir","gantungan kunci","celengan","magnet kulkas","kipas tangan","hampers"] },
  { c:"Hobi & Koleksi", s:"Perlengkapan Menjahit", adm:9.5, mall:7.7, ox:"F", k:["benang","jarum jahit","perlengkapan menjahit","kain flanel"] },

  // Mobil (OX G; Mobil utuh 2,5%)
  { c:"Mobil", s:"Aksesoris Eksterior Mobil", adm:8.25, mall:10.45, ox:"G", k:["sarung mobil","cover mobil","spion mobil","talang air","stiker mobil","emblem mobil","klakson","antena mobil","karpet lumpur","plat nomor"] },
  { c:"Mobil", s:"Aksesoris Interior Mobil", adm:8.25, mall:10.45, ox:"G", k:["jok mobil","sarung jok","karpet mobil","parfum mobil","setir mobil","holder hp mobil","kamera parkir","head unit"] },
  { c:"Mobil", s:"Suku Cadang Mobil", adm:9.5, mall:10.45, ox:"G", k:["sparepart mobil","ban mobil","velg mobil","aki mobil","busi","lampu mobil","filter oli","kampas rem","shockbreaker"] },
  { c:"Mobil", s:"Oli & Pelumas Kendaraan", adm:9.0, mall:10.45, ox:"G", k:["oli mobil","oli mesin","pelumas","coolant","minyak rem"] },
  { c:"Mobil", s:"Perawatan Kendaraan", adm:8.25, mall:10.45, ox:"G", k:["sabun mobil","wax mobil","poles mobil","pembersih kaca mobil","perawatan mobil"] },

  // Sepeda Motor (OX G; motor utuh 2,5%)
  { c:"Sepeda Motor", s:"Suku Cadang Motor", adm:8.25, mall:10.45, ox:"G", k:["sparepart motor","ban motor","velg motor","aki motor","busi motor","kampas rem motor","rantai motor","gir","cdi","knalpot motor","lampu motor"] },
  { c:"Sepeda Motor", s:"Aksesoris Sepeda Motor", adm:8.25, mall:10.45, ox:"G", k:["aksesoris motor","spion motor","jok motor","box motor","sarung motor","karpet motor","stiker motor"] },
  { c:"Sepeda Motor", s:"Helm & Aksesoris Pengendara", adm:8.25, mall:10.45, ox:"G", k:["helm","helm motor","helm full face","kaca helm","sarung tangan motor"] },

  // Olahraga & Outdoor
  { c:"Olahraga & Outdoor", s:"Alat Rekreasi Olahraga & Outdoor", adm:10.0, mall:11.7, ox:"H", k:["sepeda","tenda","alat fitness","raket","bola","matras yoga","dumbbell","alat pancing","helm sepeda","skateboard","camping"] },
  { c:"Olahraga & Outdoor", s:"Pakaian Olahraga", adm:10.0, mall:11.7, ox:"H", k:["baju olahraga","jersey","baju renang","legging olahraga","sports bra","celana olahraga"] },
  { c:"Olahraga & Outdoor", s:"Sepatu Olahraga", adm:10.0, mall:11.7, ox:"H", k:["sepatu olahraga","sepatu lari","sepatu futsal","sepatu basket","sepatu hiking"] },
  { c:"Olahraga & Outdoor", s:"Aksesoris Olahraga & Outdoor", adm:10.0, mall:11.7, ox:"H", k:["payung","tas olahraga","alat training","pelindung gym","stopwatch","topi olahraga"] },

  // Perlengkapan Rumah
  { c:"Perlengkapan Rumah", s:"Perlengkapan Dapur", adm:10.0, mall:11.7, ox:"D", k:["panci","wajan","penggorengan","pisau dapur","talenan","spatula","rak dapur","wadah makanan","tupperware","saringan"] },
  { c:"Perlengkapan Rumah", s:"Peralatan Makan", adm:10.0, mall:11.7, ox:"D", k:["piring","gelas","mangkuk","sendok","garpu","botol minum","tumbler","cangkir","mug"] },
  { c:"Perlengkapan Rumah", s:"Pengharum Ruangan & Aromaterapi", adm:10.0, mall:11.7, ox:"D", k:["pengharum ruangan","diffuser","aromaterapi","minyak esensial","lilin aroma"] },
  { c:"Perlengkapan Rumah", s:"Furniture", adm:10.0, mall:11.7, ox:"F", k:["kursi","meja","lemari","sofa","rak","meja tulis","bangku","lemari pakaian","kabinet"] },
  { c:"Perlengkapan Rumah", s:"Kamar Tidur (Kasur, Sprei)", adm:10.0, mall:11.7, ox:"F", k:["kasur","matras","sprei","bantal","guling","selimut","sarung bantal","bed cover"] },
  { c:"Perlengkapan Rumah", s:"Lampu", adm:9.5, mall:7.7, ox:"F", k:["lampu","lampu led","bohlam","lampu hias","lampu tidur"] },
  { c:"Perlengkapan Rumah", s:"Dekorasi Rumah", adm:10.0, mall:10.45, ox:"H", k:["dekorasi","bingkai foto","jam dinding","cermin","wallpaper","stiker dinding","vas","karpet","tirai","gorden","keset"] },
  { c:"Perlengkapan Rumah", s:"Organizer Rumah", adm:10.0, mall:11.7, ox:"H", k:["organizer","box penyimpanan","keranjang","gantungan","rak sepatu","tempat tisu","laundry bag"] },
  { c:"Perlengkapan Rumah", s:"Perawatan Rumah (Pembersih)", adm:10.0, mall:11.7, ox:"H", k:["sapu","pel","detergen","pembersih","tisu","tisu toilet","kemoceng","tempat sampah","pewangi pakaian","pelembut"] },
  { c:"Perlengkapan Rumah", s:"Alat Pertukangan & Renovasi", adm:10.0, mall:11.7, ox:"G", k:["bor","obeng","palu","tang","kunci pas","cat tembok","gergaji","gerinda","tool box","paku","amplas","tangga"] },
  { c:"Perlengkapan Rumah", s:"Kamar Mandi", adm:10.0, mall:11.7, ox:"G", k:["kloset","shower","handuk","gayung","ember","tirai kamar mandi","rak kamar mandi","wastafel"] },
  { c:"Perlengkapan Rumah", s:"Taman & Berkebun", adm:10.0, mall:11.7, ox:"G", k:["tanaman","pot","pupuk","bibit","media tanam","alat berkebun","selang air","mesin potong rumput"] },
  { c:"Perlengkapan Rumah", s:"Alat Pengaman", adm:10.0, mall:11.7, ox:"G", k:["brankas","gembok","cctv rumah","pemadam api","kunci pintu","alat pengaman"] },
  { c:"Perlengkapan Rumah", s:"Perlengkapan Pesta", adm:10.0, mall:11.7, ox:"G", k:["balon","dekorasi pesta","backdrop","kartu ucapan","topi pesta","perlengkapan ulang tahun"] },
  { c:"Perlengkapan Rumah", s:"Perlengkapan Keagamaan", adm:10.0, mall:11.7, ox:"D", k:["perlengkapan keagamaan","tasbih","alkitab","dupa","peralatan ibadah"] },

  /* ===================== TIKET, VOUCHER & LAYANAN ===================== */
  { c:"Tiket, Voucher & Layanan", s:"Pulsa & Data", adm:9.5, mall:7.7, ox:"D", k:["pulsa","paket data","kuota","token listrik","telco"] },
  { c:"Tiket, Voucher & Layanan", s:"Voucher Gaming", adm:9.0, mall:7.7, ox:"D", k:["voucher game","top up game","diamond","gaming voucher"] },
  { c:"Tiket, Voucher & Layanan", s:"E-Money", adm:8.25, mall:7.2, ox:"G", k:["e-money","saldo","top up e-wallet","gopay","ovo","dana"] },
  { c:"Tiket, Voucher & Layanan", s:"Tiket Event & Travel", adm:9.5, mall:7.7, ox:"D", k:["tiket event","tiket konser","voucher hotel","tiket pesawat","paket tour","streaming"] }
];
