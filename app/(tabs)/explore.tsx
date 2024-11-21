import { View, Text, StyleSheet } from "react-native";
import React from "react";

const About = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Fauna pedia</Text>
        <Text style={styles.description}>
        Fauna Pedia adalah aplikasi edukasi interaktif yang dirancang untuk memberikan informasi lengkap dan menarik tentang berbagai jenis hewan di seluruh dunia. Dengan antarmuka yang ramah pengguna, aplikasi ini menyajikan fakta-fakta unik, klasifikasi ilmiah, habitat, perilaku, hingga status konservasi setiap hewan. Fauna Pedia juga dilengkapi dengan fitur pencarian canggih, kuis interaktif untuk menguji pengetahuan pengguna, serta galeri foto dan suara hewan yang memukau. Cocok untuk pelajar, pecinta hewan, dan siapa saja yang ingin mengeksplorasi keanekaragaman fauna secara mudah dan menyenangkan.
        </Text>
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5072A7", 
    padding: 20,
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "90%",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#black ",
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "#333333",
    lineHeight: 24,
  },
})
