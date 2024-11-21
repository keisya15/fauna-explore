import React, { useState } from "react";
import { FlatList, StyleSheet, TextInput, SafeAreaView } from "react-native";
import TeamCard from "../../components/TeamCard"; // Pastikan TeamCard diperbarui sesuai format berikut

const DATA = [
  {
    id: "1",
    title: "Kucing",
    poster:
      "https://th.bing.com/th/id/OIP.RPV3WZdjjutdwNPxHf3U2wHaFb?rs=1&pid=ImgDetMain.png",
  },
  {
    id: "2",
    title: "Anjing",
    poster:
      "https://th.bing.com/th/id/OIP.d3rm4ukuxALfz9r0grdXuQHaE6?rs=1&pid=ImgDetMain.png",
  },
  {
    id: "3",
    title: "Kelinci",
    poster:
      "https://th.bing.com/th/id/OIP._SN7bQ1fBe0sQNjHiFmQOgHaEo?rs=1&pid=ImgDetMain.png",
  },
  {
    id: "4",
    title: "Harimau",
    poster:
      "https://th.bing.com/th/id/OIP.tnKajlhw-d9yN2vb3g8P7wHaFj?rs=1&pid=ImgDetMainL.png",
  },
  {
    id: "5",
    title: "Singa",
    poster:
      "https://th.bing.com/th/id/R.4cffc3171b06b35c6d31edce2c56ef4b?rik=VA9Do7ZwCuMa9g&riu=http%3a%2f%2f4.bp.blogspot.com%2f-zpkK-dieS_A%2fTmB3G2oeI-I%2fAAAAAAAADDs%2fFXCyKSKvwR0%2fs1600%2flion0.jpg&ehk=wXfUAQucdGxANTT6cH7EdNLy3pz3W2jEDAqbeoakwR4%3d&risl=&pid=ImgRaw&r=0.png",
  },
  {
    id: "6",
    title: "Serigala",
    poster:
      "https://th.bing.com/th/id/R.ec03761ef3cf923f64fc188fe9d52879?rik=jcliKpm8gz7i%2bQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f_g3IvWv6IIX4%2fTUsu-fINpeI%2fAAAAAAAACh8%2fPTyAt7dQHWY%2fs1600%2fMexican%25252BGray%25252BWolf%25252B11-06%25252B2%25252BTG.jpg&ehk=7PA7AMghy7cM1QRMrvb7R4tlwdOWJGEj6I0MR5CIL6A%3d&risl=&pid=ImgRaw&r=0.png",
  },
  {
    id: "7",
    title: "Gajah",
    poster:
      "https://th.bing.com/th/id/OIP.fck9bVSIO-RRcjGHuaUSyAHaFj?rs=1&pid=ImgDetMain.png",
  },
  {
    id: "8",
    title: "Jerapah",
    poster:
      "https://th.bing.com/th/id/OIP.2L_m2hErwA-Cr5fm4Qd2XQHaE7?rs=1&pid=ImgDetMain.png",
  },
  {
    id: "9",
    title: "Hiu",
    poster:
      "https://th.bing.com/th/id/R.1933e0cd674d92ab97b9d1cd5e50ca44?rik=MyY0Pwj6hXzh5Q&riu=http%3a%2f%2fwww.pemburuombak.com%2fmedia%2fk2%2fitems%2fcache%2fc48f224888efd83a470a9b3f11aa38d6_XL.jpg&ehk=GLcsaq14HtD3XTN53wZMNadppjDcCqYcKWtRBIw%2fzuI%3d&risl=&pid=ImgRaw&r=0.png",
  },
  {
    id: "10",
    title: "Koi ",
    poster:
      "https://th.bing.com/th/id/OIP.9Pj7frgmxtJ1ViDu8D--8gHaFe?rs=1&pid=ImgDetMain.png",
  },
  {
    id: "11",
    title: "Capybara",
    poster:
      "https://th.bing.com/th/id/OIP.EYF5Zua-xckqyHbayw5ibQHaD3?rs=1&pid=ImgDetMain.png",
  },
  {
    id: "12",
    title: "Bebek",
    poster:
      "https://th.bing.com/th/id/OIP.3H7fxrSYUZxCIoumOYrk3gHaE8?rs=1&pid=ImgDetMain.png",
  },
  {
    id: "13",
    title: "Love bird",
    poster:
      "https://th.bing.com/th/id/OIP.OMLt0ox8JHRPEqHuB8MYdgHaE8?rs=1&pid=ImgDetMain.png",
  },
  {
    id: "14",
    title: "Kakatua",
    poster:
      "https://th.bing.com/th/id/R.556e3f16b8ed99a0e1912948b278327d?rik=PjQQRZ9UbICT6w&riu=http%3a%2f%2f1.bp.blogspot.com%2f-DUv1wpEAA9E%2fUTCAheceEmI%2fAAAAAAAAAd8%2fA5om9yE6J28%2fs1600%2fkakatua%2bputih.jpeg&ehk=doXaDiZ34LvWOQUV2WF8%2bldTbd614zDB3f3vOjh7TkM%3d&risl=&pid=ImgRaw&r=0.png",
  },
  {
    id: "15",
    title: "Beo",
    poster:
      "https://th.bing.com/th/id/R.8f070759746b54ad12fc792746ee481b?rik=Sq4FH21MLXa4Ig&riu=http%3a%2f%2fwww.sheffieldhistory.co.uk%2fforums%2fuploads%2fmonthly_12_2012%2fpost-822-0-15687800-1356903592.jpg&ehk=13lC5XniXwgXpVlFvIwKbyyFqBNzTiy4BOmNbHvfeLA%3d&risl=&pid=ImgRaw&r=06.png",
  },
  {
    id: "16",
    title: "Sapi",
    poster:
      "https://th.bing.com/th/id/OIP.z_6gooB6PEdFYQUxq1kyVwHaF2?w=1024&h=808&rs=1&pid=ImgDetMain.png",
  },
  {
    id: "17",
    title: "Kambing",
    poster:
      "https://th.bing.com/th/id/OIP.tM1Zlspoz2vqvYfOdDpqyQHaFa?rs=1&pid=ImgDetMain.png",
  },
  {
    id: "18",
    title: "Orca",
    poster:
      "https://th.bing.com/th/id/OIP.y-gh2K5CYKVJtDk_e0uXeQHaHa?w=1080&h=1080&rs=1&pid=ImgDetMain.png",
  },
  {
    id: "19",
    title: "Buaya",
    poster:
      "https://4.bp.blogspot.com/-C2bPbfssdNs/UmD7tGa71CI/AAAAAAAAAGc/qTN8jhg_6io/s1600/gambar+buaya++6.jpg.png",
  },
  {
    id: "20",
    title: "Rusa",
    poster:
      "https://th.bing.com/th/id/OIP.DDKy5-1JStPOP_1IimirSAHaFR?rs=1&pid=ImgDetMain.png",
  },
];

export default function HomeScreen() {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(DATA);

  const handleSearch = (text) => {
    setSearchText(text);
    if (text.trim() === "") {
      setFilteredData(DATA);
    } else {
      const filtered = DATA.filter((item) =>
        item.title.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Input untuk filter */}
      <TextInput
        style={styles.searchInput}
        placeholder="Cari hewan apa..."
        value={searchText}
        onChangeText={handleSearch}
      />
      {/* FlatList dengan data yang telah difilter */}
      <FlatList
        data={filteredData}
        numColumns={2}
        renderItem={({ item }) => <TeamCard item={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchInput: {
    height: 40,
    borderColor: "#5072A7",
    borderWidth: 1,
    borderRadius: 8,
    margin: 10,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  cardContainer: {
    flex: 1,
    margin: 15,
    padding: 10,
    backgroundColor: "#5072A7",
    borderRadius: 50,  
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardImage: {
    width:120,
    height: 120,
    borderRadius: 30,
    resizeMode: "cover",
    marginBottom: 10, 
  }, 
  cardTitle: {
    fontSize: 16,  
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    marginBottom: 5,  
  },
  cardDescription: {
    fontSize: 12,  
    textAlign: "center",
    color: "#fff",
    paddingHorizontal: 10,
    marginBottom: 10,  
  },
});