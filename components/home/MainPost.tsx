import { StyleSheet, Text, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { SvgXml } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";

interface MainPostProps {
  from: string;
  image: any;
  title: string;
  comments: string;
  share: string;
  date: string;
  onPress: () => void;
}

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

import { VerifyIcon, CommentIcon, ShareIcon } from "../../assets/icons";

const MainPost = ({
  comments,
  from,
  image,
  share,
  title,
  date,
  onPress,
}: MainPostProps) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image
        contentFit="cover"
        transition={1000}
        source={image}
        style={styles.image}
        placeholder={blurhash}
      />
      <LinearGradient
        // Background Linear Gradient
        colors={["transparent", "rgba(0,0,0,0.85)"]}
        style={styles.background}
      />
      <View style={styles.infosWrapper}>
        <View style={styles.fromContainer}>
          <Text style={styles.fromText}>{from}</Text>
          <SvgXml xml={VerifyIcon} width={22} height={22} />
        </View>

        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>

        <View style={styles.infosBottom}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <SvgXml xml={CommentIcon} width={16} height={16} />
              <Text style={styles.infosBottomText}>{comments}</Text>
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <SvgXml xml={ShareIcon} width={16} height={16} />
              <Text style={styles.infosBottomText}>{share}</Text>
            </View>
          </View>
          <Text style={styles.infosBottomText}>Il y'a {date}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default MainPost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 20,
    position: "relative",
    height: 340,
    width: 330,
    overflow: "hidden",
    marginRight: 20,
    justifyContent: "flex-end",
  },
  background: {
    flex: 1,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    objectFit: "cover",
    zIndex: -1,
  },
  image: {
    flex: 1,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    objectFit: "cover",
    zIndex: -2,
  },
  infosWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  fromContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    gap: 5,
  },
  fromText: {
    color: "white",
    fontFamily: "manrope_semibold",
    fontSize: 16,
  },
  title: {
    color: "white",
    fontFamily: "manrope_bold",
    fontSize: 20,
    marginBottom: 15,
  },
  infosBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infosBottomText: {
    color: "white",
    fontFamily: "manrope_regular",
    fontSize: 14,
  },
});
