import { View, Text, Image } from "react-native";
import React from "react";
import { Link, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import TeamCard from "../../components/teamcard2";

const DATA = [
  {
    id: "1",
    title: "Kucing",
    poster:
      "https://th.bing.com/th/id/OIP.RPV3WZdjjutdwNPxHf3U2wHaFb?rs=1&pid=ImgDetMain.png",
      description:
      "Kucing, disebut juga sebagai kucing domestik atau kucing rumah (nama ilmiah: Felis silvestris catus atau Felis catus), adalah sejenis mamalia karnivora dari keluarga Felidae. Kata kucing biasanya merujuk kepada kucing yang telah dijinakkan,tetapi bisa juga bisa merujuk kepada kucing besar seperti singa dan harimau yang juga termasuk jenis kucing.",

  },
  {
    id: "2",
    title: "Anjing",
    poster:
      "https://th.bing.com/th/id/OIP.d3rm4ukuxALfz9r0grdXuQHaE6?rs=1&pid=ImgDetMain.png",
      description:
      "Anjing domestik atau anjing (Canis lupus familiaris) adalah hewan mamalia yang telah mengalami domestikasi dari serigala sejak 15.000 tahun yang lalu, bahkan kemungkinan sudah sejak 100.000 tahun yang lalu berdasarkan bukti genetik berupa penemuan fosil dan tes DNA.Penelitian lain mengungkap sejarah domestikasi anjing yang belum begitu lama.",
  },
  {
    id: "3",
    title: "Kelinci",
    poster:
      "https://th.bing.com/th/id/OIP._SN7bQ1fBe0sQNjHiFmQOgHaEo?rs=1&pid=ImgDetMain.png",
      description:
      "Kelinci (disebut juga , lutuk , kucing tapai, sibringin atau karil) adalah hewan mamalia dari famili Leporidae, yang dapat ditemukan di banyak bagian bumi. Kelinci berkembang biak dengan cara beranak yang disebut vivipar. Dulunya, hewan ini adalah hewan liar yang hidup di Afrika hingga ke daratan Eropa. Pada perkembangannya, tahun 1912, kelinci diklasifikasikan dalam ordo Lagomorpha. Ordo ini dibedakan menjadi dua famili, yakni Ochtonidae (jenis pika yang pandai bersiul) dan Leporidae (termasuk jenis kelinci terwelu). Asal kata 'kelinci' berasal dari bahasa Belanda, yaitu konijntje yang berarti anak kelinci. Hal ini menunjukkan bahwa masyarakat Nusantara mulai mengenali kelinci saat masa kolonial, padahal di Pulau Sumatra ada satu spesies asli kelinci sumatera (Nesolagus netscheri) yang baru ditemukan pada tahun 1972.",
  },
  {
    id: "4",
    title: "Harimau",
    poster:
      "https://th.bing.com/th/id/OIP.tnKajlhw-d9yN2vb3g8P7wHaFj?rs=1&pid=ImgDetMainL.png",
      description:
      "Harimau (Panthera tigris) adalah spesies kucing terbesar yang masih hidup dari genus Panthera. Harimau memiliki ciri loreng yang khas pada bulunya, berupa garis-garis vertikal gelap pada bulu oranye, dengan bulu bagian bawah berwarna putih. Harimau adalah pemangsa puncak, mereka terutama memangsa ungulata seperti kijang dan babi celeng. Harimau adalah hewan teritorial dan umumnya merupakan pemangsa soliter yang penyendiri, tetapi tetap memiliki sisi sosial. Mereka tetap tinggal di area-area yang berdekatan, untuk mendukung kebutuhan makanan dan membesarkan keturunannya. Anak harimau tinggal bersama ibu mereka selama sekitar dua tahun, kemudian akan hidup mandiri dan meninggalkan daerah jelajah ibu mereka untuk membangun rumah mereka sendiri.",
  },
  {
    id: "5",
    title: "Singa",
    poster:
      "https://th.bing.com/th/id/R.4cffc3171b06b35c6d31edce2c56ef4b?rik=VA9Do7ZwCuMa9g&riu=http%3a%2f%2f4.bp.blogspot.com%2f-zpkK-dieS_A%2fTmB3G2oeI-I%2fAAAAAAAADDs%2fFXCyKSKvwR0%2fs1600%2flion0.jpg&ehk=wXfUAQucdGxANTT6cH7EdNLy3pz3W2jEDAqbeoakwR4%3d&risl=&pid=ImgRaw&r=0.png",
      description:
      "Singa (Sanskerta: Siṃha, atau nama ilmiahnya Panthera leo) adalah spesies hewan dari keluarga felidae atau keluarga kucing. Singa berada di benua Afrika dan sebagian di wilayah India. Singa merupakan hewan yang hidup berkelompok. Biasanya terdiri dari seekor jantan & banyak betina. Kelompok ini menjaga daerah kekuasaannya. Umur singa antara 10 sampai 15 tahun di alam bebas, tetapi dalam penangkaran memungkinkan lebih dari 20 tahun. Singa yang lebih muda akan merebut kepemimpinan dari singa yang lebih tua. Kebanyakan singa yang lebih muda akan memakan anak singa dari pemimpin sebelumnya.",
  },
  {
    id: "6",
    title: "Serigala",
    poster:
      "https://th.bing.com/th/id/R.ec03761ef3cf923f64fc188fe9d52879?rik=jcliKpm8gz7i%2bQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f_g3IvWv6IIX4%2fTUsu-fINpeI%2fAAAAAAAACh8%2fPTyAt7dQHWY%2fs1600%2fMexican%25252BGray%25252BWolf%25252B11-06%25252B2%25252BTG.jpg&ehk=7PA7AMghy7cM1QRMrvb7R4tlwdOWJGEj6I0MR5CIL6A%3d&risl=&pid=ImgRaw&r=0.png",
      description:
      "Serigala (Canis lupus) juga dikenal sebagai serigala abu-abu atau serigala kelabu , adalah anjing besar asli Eurasia dan Amerika Utara . Lebih dari tiga puluh subspesies Canis lupus telah dikenali, termasuk anjing dan dingo , meskipun serigala, seperti yang dipahami secara umum, hanya merupakan subspesies liar yang hidup secara alami.",
  },
  {
    id: "7",
    title: "Gajah",
    poster:
      "https://th.bing.com/th/id/OIP.fck9bVSIO-RRcjGHuaUSyAHaFj?rs=1&pid=ImgDetMain.png",
      description:
      "Gajah (dari Sanskerta: gaja), liman, atau biram adalah mamalia besar dari famili Elephantidae dan ordo Proboscidea. Secara tradisional, terdapat dua spesies yang diakui, yaitu gajah afrika (Loxodonta africana) dan gajah asia (Elephas maximus), walaupun beberapa bukti menunjukkan bahwa gajah semak afrika dan gajah hutan afrika adalah spesies yang berbeda (L. africana dan L. cyclotis). Gajah tersebar di seluruh Afrika sub-Sahara, Asia Selatan, dan Asia Tenggara. Elephantidae adalah satu-satunya famili dari ordo Proboscidea yang masih ada; famili lain yang kini sudah punah termasuk mamut dan mastodon. Gajah afrika jantan merupakan hewan darat terbesar dengan tinggi hingga 4 m dan massa yang juga dapat mencapai 7.000 kg. Gajah memiliki ciri-ciri khusus, dan yang paling mencolok adalah belalai atau proboscis yang digunakan untuk banyak hal, terutama untuk bernapas, mengisap air, dan mengambil benda",
  },
  {
    id: "8",
    title: "Jerapah",
    poster:
      "https://th.bing.com/th/id/OIP.2L_m2hErwA-Cr5fm4Qd2XQHaE7?rs=1&pid=ImgDetMain.png",
      description:
      "Jerapah adalah mamalia berkuku besar Afrika yang termasuk dalam genus Giraffa. Ini adalah hewan darat tertinggi yang masih hidup dan pemamah biak terbesar di Bumi. Secara tradisional, jerapah dianggap sebagai satu spesies , Giraffa camelopardalis , dengan sembilan subspesies . Baru-baru ini, para peneliti mengusulkan untuk membagi mereka menjadi delapan spesies yang masih ada karena penelitian baru terhadap DNA mitokondria dan inti mereka , serta pengukuran morfologi. Tujuh spesies jerapah lainnya yang punah diketahui dari catatan fosil.",
  },
  {
    id: "9",
    title: "Hiu",
    poster:
      "https://th.bing.com/th/id/R.1933e0cd674d92ab97b9d1cd5e50ca44?rik=MyY0Pwj6hXzh5Q&riu=http%3a%2f%2fwww.pemburuombak.com%2fmedia%2fk2%2fitems%2fcache%2fc48f224888efd83a470a9b3f11aa38d6_XL.jpg&ehk=GLcsaq14HtD3XTN53wZMNadppjDcCqYcKWtRBIw%2fzuI%3d&risl=&pid=ImgRaw&r=0.png",
      description:
      "Hiu atau cucut (superordo atau subdivisi[butuh rujukan] Selachimorpha) adalah sekelompok ikan dengan kerangka tulang rawan yang lengkap, dan tubuh yang kokoh. Mereka bernapas dengan menggunakan lima hingga tujuh liang insang (tergantung pada spesiesnya). Letak insang tersebut ada di samping, atau dimulai sedikit di belakang, kepalanya. Hiu mempunyai tubuh yang dilapisi kulit dermal denticles untuk melindungi kulit mereka dari kerusakan, dari parasit, dan untuk menambah dinamika air.Mereka mempunyai beberapa deret gigi yang dapat digantikan.",
  },
  {
    id: "10",
    title: "Koi ",
    poster:
      "https://th.bing.com/th/id/OIP.9Pj7frgmxtJ1ViDu8D--8gHaFe?rs=1&pid=ImgDetMain.png",
      description:
      "Koi atau secara spesifiknya koi berasal dari bahasa Jepang yang berarti ikan karpet. Lebih spesifik lagi merujuk pada nishikigoi (錦鯉), yang kurang lebih bermakna ikan karpet yang bersulam emas atau perak. Di Jepang, koi menjadi semacam simbol cinta dan persahabatan. Ini karena koi merupakan homofon untuk kata lain yang juga bermakna kasih sayang atau cinta. Ikan Koi adalah sejenis ikan yang termasuk carp amur (Cyprinus rubrofuscus) yang mempunyai ornamen yang menarik dan jinak.",
  },
  {
    id: "11",
    title: "Capybara",
    poster:
      "https://th.bing.com/th/id/OIP.EYF5Zua-xckqyHbayw5ibQHaD3?rs=1&pid=ImgDetMain.png",
      description:
      "Kapibara atau kapibara besar (Hydrochoerus hydrochaeris) merupakan jenis hewan pengerat terbesar asli Amerika Selatan. Hewan ini adalah hewan pengerat terbesar yang masih hidup, dan anggota genus (Hydrochoerus). Satu-satunya anggota yang masih ada adalah kapibara kecil (Hydrochoerus isthmius). Kerabat dekatnya termasuk marmut dan marmut batu, dan lebih jauh hubungannya dengan agouti, chinchilla, dan nutria. Satu-satunya anggota yang masih ada adalah kapibara kecil (Hydrochoerus isthmius). Kerabat dekatnya termasuk marmut dan marmut batu, dan lebih jauh hubungannya dengan agouti, chinchilla, dan nutria. yang merupakan anggota genus Hydrochoerus. ",
  },
  {
    id: "12",
    title: "Bebek",
    poster:
      "https://th.bing.com/th/id/OIP.3H7fxrSYUZxCIoumOYrk3gHaE8?rs=1&pid=ImgDetMain.png",
      description:
      "Bebek atau itik adalah nama umum untuk beberapa spesies burung dalam famili Anatidae. Itik umumnya berukuran lebih kecil dan berleher lebih pendek dibandingkan soang dan angsa, yang merupakan anggota satu keluarga. Terbagi menjadi beberapa subfamili, mereka merupakan bentuk takson; mereka tidak mewakili kelompok monofiletik (kelompok yang terdiri dari semua keturunan dari satu spesies nenek moyang yang sama), karena angsa dan soang tidak dianggap bebek. Bebek sebagian besar adalah burung air, dan dapat ditemukan di air tawar dan air laut.",
  },
  {
    id: "13",
    title: "Love bird",
    poster:
      "https://th.bing.com/th/id/OIP.OMLt0ox8JHRPEqHuB8MYdgHaE8?rs=1&pid=ImgDetMain.png",
      description:
      "Burung cinta atau Lovebird adalah satu dari sembilan burung jenis spesies genus Agapornis (dari bahasa Yunani agape yang berarti cinta dan ornis yang berarti burung). Mereka adalah burung yang berukuran kecil, antara 13 sampai 17 cm dengan berat 40 hingga 60 gram, dan bersifat sosial. Delapan dari spesies ini berasal dari Afrika, sementara spesies burung cinta kepala abu-abu berasal dari Madagaskar. Nama mereka berasal dari kelakuan yang umum diamati bahwa sepasang burung cinta akan duduk berdekatan dan saling menyayangi satu sama lain. Sifat pasangan burung cinta adalah monogami di alam bebas. Umur hidup rata-rata mereka adalah 10 sampai 15 tahun.[1] Di Indonesia, paling banyak ditemukan di Papua dan ditemukan juga di Sumatera Utara.",
  },
  {
    id: "14",
    title: "Kakatua",
    poster:
      "https://th.bing.com/th/id/R.556e3f16b8ed99a0e1912948b278327d?rik=PjQQRZ9UbICT6w&riu=http%3a%2f%2f1.bp.blogspot.com%2f-DUv1wpEAA9E%2fUTCAheceEmI%2fAAAAAAAAAd8%2fA5om9yE6J28%2fs1600%2fkakatua%2bputih.jpeg&ehk=doXaDiZ34LvWOQUV2WF8%2bldTbd614zDB3f3vOjh7TkM%3d&risl=&pid=ImgRaw&r=0.png",
      description:
      "Kakatua (suku Cacatuidae) adalah jenis burung hias yang memiliki bulu yang indah dengan lengkingan suara yang cukup nyaring. Spesies ini termasuk salah satu burung dengan kecerdasan yang cukup bagus, sehingga sering digunakan untuk acara-acara hiburan di kebun binatang atau tempat hiburan lainnya.",
  },
  {
    id: "15",
    title: "Beo",
    poster:
      "https://th.bing.com/th/id/R.8f070759746b54ad12fc792746ee481b?rik=Sq4FH21MLXa4Ig&riu=http%3a%2f%2fwww.sheffieldhistory.co.uk%2fforums%2fuploads%2fmonthly_12_2012%2fpost-822-0-15687800-1356903592.jpg&ehk=13lC5XniXwgXpVlFvIwKbyyFqBNzTiy4BOmNbHvfeLA%3d&risl=&pid=ImgRaw&r=06.png",
      description:
      "Beo, mamiang, atau tiong emas (Gracula) adalah sejenis burung anggota suku Sturnidae (jalak dan kerabatnya). Wilayah persebaran alaminya adalah mulai dari Sri Lanka, India, Himalaya, Asia Tenggara. Burung ini dapat ditemukan di dataran rendah hingga dataran tinggi lebih dari 2000m. Karena kemampuannya menirukan bahasa manusia, burung ini menjadi hewan peliharaan populer.",
  },
  {
    id: "16",
    title: "Sapi",
    poster:
      "https://th.bing.com/th/id/OIP.z_6gooB6PEdFYQUxq1kyVwHaF2?w=1024&h=808&rs=1&pid=ImgDetMain.png",
      description:
      "Sapi, jawi atau lembu adalah hewan ternak anggota famili Bovidae dan subfamili Bovinae. Sapi dipelihara terutama untuk dimanfaatkan susu dan dagingnya sebagai pangan manusia. Hasil sampingannya seperti kulit, jeroan, tanduk, dan kotorannya juga dimanfaatkan untuk berbagai keperluan manusia. Di sejumlah tempat sapi juga dipakai sebagai penggerak alat transportasi, pengolahan lahan tanam (bajak), dan alat industri lain (seperti peremas tebu). Karena banyak kegunaan ini, sapi telah menjadi bagian dari berbagai kebudayaan manusia sejak lama. Bahkan, kegiatan kebudayaan yang menggunakan sapi pun masih banyak.",
  },
  {
    id: "17",
    title: "Kambing",
    poster:
      "https://th.bing.com/th/id/OIP.tM1Zlspoz2vqvYfOdDpqyQHaFa?rs=1&pid=ImgDetMain.png",
      description:
      "Kambing ternak (Capra aegagrus hircus) merupakan salah satu subspesies yang dipelihara atau dijinakkan dari kambing liar Asia Barat Daya dan Eropa Timur. Kambing merupakan anggota dari keluarga Bovidae dan bersaudara dengan biri-biri karena keduanya tergolong dalam sub famili Caprinae. Terdapat lebih 300 jenis kambing yang berbeda-beda.[1] Kambing adalah salah satu di antara spesies yang paling lama diternakkan, yaitu untuk susu, daging, bulu, dan kulit di seluruh dunia.Pada tahun 2011, populasi kambing yang hidup di seluruh dunia mencapai 924 juta menurut Organisasi Pangan dan Pertanian Perserikatan Bangsa-Bangsa.",
  },
  {
    id: "18",
    title: "Orca",
    poster:
      "https://th.bing.com/th/id/OIP.y-gh2K5CYKVJtDk_e0uXeQHaHa?w=1080&h=1080&rs=1&pid=ImgDetMain.png",
      description:
      "Seguni atau paus pembunuh (Orcinus orca) (bahasa Inggris: killer whale, orca) adalah spesies mamalia air bergigi dari keluarga lumba-lumba dan merupakan anggota terbesar dalam kelompok lumba-lumba. Hewan ini memiliki kulit berwarna hitam dengan bagian bawah berwarna putih dan bercak putih di dekat setiap mata. Seguni memiliki makanan yang beragam, meskipun beberapa populasi sering kali mengkhususkan diri pada jenis mangsa tertentu. Beberapa memakan ikan secara eksklusif, sementara yang lain berburu mamalia laut seperti anjing laut dan spesies lumba-lumba lainnya. Mereka diketahui menyerang anak paus balin, dan bahkan paus dewasa. Seguni adalah pemangsa puncak, karena tidak ada hewan lain yang memangsa mereka.",
  },
  {
    id: "19",
    title: "Buaya",
    poster:
      "https://4.bp.blogspot.com/-C2bPbfssdNs/UmD7tGa71CI/AAAAAAAAAGc/qTN8jhg_6io/s1600/gambar+buaya++6.jpg.png",
      description:
      "Buaya adalah reptil bertubuh besar yang hidup di air. Secara ilmiah, buaya meliputi seluruh spesies anggota famili Crocodylidae, termasuk pula buaya sepit (Tomistoma schlegelii). Meski demikian nama ini dapat pula dikenakan secara longgar untuk menyebut ‘buaya’ aligator, kaiman dan gavial; yakni kerabat-kerabat buaya yang berlainan suku.",
  },
  {
    id: "20",
    title: "Rusa",
    poster:
      "https://th.bing.com/th/id/OIP.DDKy5-1JStPOP_1IimirSAHaFR?rs=1&pid=ImgDetMain.png",
      description:
      "Rusa, sambar, atau menjangan (bahasa Inggris: deer) adalah hewan mamalia pemamah biak (ruminan) yang termasuk famili Cervidae. Salah satu ciri khas rusa adalah adanya ranggah dan bukan tanduk, yang merupakan pertumbuhan tulang yang berkembang setiap tahun (biasanya pada musim panas) terutama pada rusa jantan (walaupun ada beberapa pengecualian). Rusa jantan dari hampir semua spesies (kecuali rusa air ), serta rusa betina, tumbuh dan melepaskan ranggah baru setiap tahun. Ada sekitar 34 spesies rusa di seluruh dunia yang terbagi menjadi dua kelompok besar: kelompok rusa dunia lama yang termasuk subfamilia Muntiacinae dan Cervinae; serta kelompok rusa dunia baru, Hydropotinae dan Odocoilinae.",
  },
];

const TeamDetail = () => {
  
  const { team } = useLocalSearchParams();
  const selectedTeam = DATA.filter(function (item) {
    return item.id === team;
  });

  console.log(selectedTeam);

  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        flex: 1,
        // flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TeamCard item={selectedTeam[0]} />
    </SafeAreaView>
  );
};

export default TeamDetail;