import { Link, useRouter } from "expo-router";
import { View, Text, StyleSheet, Button } from "react-native";

export default function ProjectsPage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Projects</Text>
      <Button
        title="View Project 1"
        onPress={() => router.push("/projects/1")}
      />
      <Button
        title="Replace with Project 2"
        onPress={() => router.replace("/projects/2")}
      />
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
