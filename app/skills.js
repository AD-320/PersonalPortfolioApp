import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function SkillsPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Skills</Text>
      <Text>- React Native</Text>
      <Text>- JavaScript</Text>
      <Text>- CSS</Text>
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
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  link: {
    fontSize: 18,
    color: "blue",
    marginTop: 20,
  },
});
