import { StyleSheet } from "react-native";
import { Image } from "expo-image";

import { Text, View, SafeAreaView, ScrollView } from "../../components/Themed";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* HOME HEADER SECTION */}
        <View style={styles.header}>
          <View style={styles.profile}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require("../../assets/images/profile.png")}
                placeholder={blurhash}
                contentFit="cover"
                transition={1000}
              />
            </View>
            <Text style={styles.title}>Yacouba Dama</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  profile: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  imageContainer: {
    backgroundColor: "#FB6A01",
    borderRadius: 100,
    width: 40,
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 38,
    height: 38,
    borderRadius: 100,
    objectFit: "cover",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "space_mono_regular",
  },
});
