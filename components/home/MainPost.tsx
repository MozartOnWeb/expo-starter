import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { SvgXml } from "react-native-svg";

interface MainPostProps {
  from: string;
  image: any;
  title: string;
  comments: string;
  share: string;
  date: string;
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
}: MainPostProps) => {
  return (
    <View style={styles.container}>
      <Image
        contentFit="cover"
        transition={1000}
        source={{
          uri: "https://i.pinimg.com/564x/01/45/bd/0145bd7a6cfb956bdef62cb2ea60276f.jpg",
        }}
        style={styles.image}
        placeholder={blurhash}
      />
      <View style={styles.infosWrapper}>
        <View style={styles.fromContainer}>
          <Text style={styles.fromText}>{from}</Text>
          <SvgXml xml={VerifyIcon} width={24} height={24} />
        </View>

        <Text style={styles.title}>{title}</Text>

        <View style={styles.infosBottom}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <SvgXml xml={CommentIcon} width={18} height={18} />
              <Text style={styles.infosBottomText}>{comments}</Text>
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <SvgXml xml={ShareIcon} width={18} height={18} />
              <Text style={styles.infosBottomText}>{share}</Text>
            </View>
          </View>
          <Text style={styles.infosBottomText}>Il y'a {date}</Text>
        </View>
      </View>
    </View>
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
    zIndex: -1,
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
    marginBottom: 10,
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
