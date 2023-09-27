import { StyleSheet, View } from "react-native";
import { Text, View as ThemedView } from "../Themed";

interface Props {
  category: string;
  title: string;
  comments: string;
  share: string;
  date: string;
  onPress: () => void;
}

const RecommandationPost = ({
  category,
  title,
  comments,
  share,
  date,
  onPress,
}: Props) => {
  return (
    <View>
      <Text>RecommandationPost</Text>
    </View>
  );
};

export default RecommandationPost;

const styles = StyleSheet.create({});
