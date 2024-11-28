import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "react-native";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/profile-pic.jpg")}
        style={styles.profileImage}
      />
      <Text style={styles.title}>Welcome to My Portfolio</Text>
      <Link href="/projects" style={styles.link}>
        Projects
      </Link>
      <Link href="/skills" style={styles.link}>
        Skills
      </Link>
      <Link href="/contact" style={styles.link}>
        Contact
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 30,
    marginBottom: 20,
  },
  link: {
    fontSize: 18,
    color: "blue",
    marginVertical: 10,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
});
