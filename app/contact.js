import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { Linking } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function ContactPage() {
  const handleGithubPress = () => {
    Linking.openURL("https://github.com/NahomAlemu");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Me</Text>
      <Text>Email: contactnahom@email.com</Text>

      <TouchableOpacity
        onPress={handleGithubPress}
        style={styles.githubContainer}
      >
        <FontAwesome
          name="github"
          size={24}
          color="black"
          style={styles.githubIcon}
        />
        <Text style={styles.githubLink}>GitHub: NahomAlemu</Text>
      </TouchableOpacity>

      <Link href="/" style={styles.link}>
        Back to Home
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  githubContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  githubIcon: {
    marginRight: 8,
  },
  githubLink: {
    fontSize: 18,
    color: "blue",
    textDecorationLine: "underline",
  },
  link: {
    fontSize: 18,
    color: "blue",
    marginTop: 20,
  },
});
