import * as Skel from "@skel-ui/react-native/src";
import React from "react";
import { StyleSheet, Text } from "react-native";

export default function Button({ label }: { label: string }) {
  return (
    <Skel.Pressable style={styles.root}>
      <Text style={styles.text}>{label}</Text>
    </Skel.Pressable>
  );
}

const styles = StyleSheet.create({
  root: {
    height: 40,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0284c7",
    marginTop: 12,
  },
  text: { color: "#f0f9ff", fontSize: 16, fontWeight: 600, textAlign: "center" },
});
