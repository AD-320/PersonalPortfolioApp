import { useLocalSearchParams, Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function ProjectDetailPage() {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Project {id}</Text>
      <Text>Description of Project {id}...</Text>
      <Link href="/projects" style={styles.link}>
        Back to Projects
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
