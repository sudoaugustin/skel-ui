import * as Skel from "@skel-ui/react-native/src";
import { Link, Slot, usePathname } from "expo-router";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";

const links = [
  { href: "/", label: "PostCard" },
  { href: "/list", label: "PostCardList" },
] as const;

export default function RootLayout() {
  const pathname = usePathname();

  return (
    <Skel.Provider
      skelUIPulse
      animation={{ component: <View style={{ width: "100%", height: "100%", backgroundColor: "red" }} /> }}
    >
      <View style={{ height: Dimensions.get("window").height + 48, position: "relative" }}>
        <ScrollView>
          <View style={{ padding: 20 }}>
            <Slot />
          </View>
        </ScrollView>
        <View style={styles.root}>
          <View style={styles.list}>
            {links.map(({ href, label }) => {
              const isActive = href === pathname;
              return (
                <Link key={href} href={href} style={{ ...styles.item, ...(isActive ? styles.active : {}) }}>
                  {label}
                </Link>
              );
            })}
          </View>
        </View>
      </View>
    </Skel.Provider>
  );
}

const styles = StyleSheet.create({
  root: {
    bottom: 100,
    position: "fixed",
    padding: 1,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: "#e0f2fe",
    borderRadius: 10,
    backgroundColor: "#f0f9ff",
  },
  list: {
    flexDirection: "row",
  },
  item: {
    flex: 1,
    height: 40,
    textAlign: "center",
    verticalAlign: "middle",
    fontSize: 16,
    fontWeight: 600,
    paddingHorizontal: 10,
  },
  active: {
    color: "#dbeafe",
    backgroundColor: "#0284c7",
    borderRadius: 8,
  },
});

export { ErrorBoundary } from "expo-router";
