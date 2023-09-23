import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";
import { SvgXml } from "react-native-svg";

import Colors from "../../constants/Colors";

//import types
import { IconProps, SavedIcon } from "../../assets/icons";

//import icons
import { HomeIcon } from "../../assets/icons";

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

const navigationTabs: {
  title: string;
  screenName: string;
  icon: string;
}[] = [
  {
    title: "Home",
    screenName: "index",
    icon: HomeIcon,
  },
  {
    title: "Tab Two",
    screenName: "two",
    icon: SavedIcon,
  },
];

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarShowLabel: false,
      }}
    >
      {navigationTabs.map(({ title, screenName, icon }) => (
        <Tabs.Screen
          key={screenName}
          name={screenName}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => (
              <SvgXml xml={icon} width={size} height={size} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
