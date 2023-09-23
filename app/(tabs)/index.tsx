import { StyleSheet } from "react-native";

import { Text, View, ScrollView } from "../../components/Themed";

export default function TabOneScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
        <Text style={styles.title}>Home</Text>
        <Text style={styles.title}>Home</Text>
        <Text style={styles.title}>Home</Text>
        <Text style={styles.title}>Home</Text>
        <Text style={styles.title}>Home</Text>
        <Text style={styles.title}>Home</Text>
        <Text style={styles.title}>Home</Text>
        <Text style={styles.title}>Home</Text>
        <Text style={styles.title}>Home</Text>
        <Text style={styles.title}>Home</Text>
        <Text style={styles.title}>Home</Text>
        <Text style={styles.title}>Home</Text>
        <Text style={styles.title}>Home</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 100,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
