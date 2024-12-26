import Button from "@/component/Button";
import * as Skel from "@skel-ui/react-native/src";
import { generatePlaceholder } from "@skel-ui/react-native/src/utils";
import { usePosts } from "commons-utils/hooks";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function IndexPage() {
  const { posts = generatePlaceholder(4, "postId"), isLoading } = usePosts(1);

  return (
    <Skel.Root isLoading={true}>
      <View style={{ gap: 20, paddingBottom: 80 }}>
        {posts.map((post, index) => (
          <View key={post.postId} style={styles.card}>
            <Skel.Image src={post.image} style={styles.cardImage} />
            <Skel.Text sw="65%" style={styles.cardTitle}>
              {post.title}
            </Skel.Text>
            <Skel.Text numberOfLines={3} style={styles.cardDescription}>
              {post.description}
            </Skel.Text>
            <Button label="Like" />
          </View>
        ))}
      </View>
    </Skel.Root>
  );
}

const styles = StyleSheet.create({
  card: { width: 320, padding: 10, marginHorizontal: "auto", borderWidth: 1, borderColor: "#e2e8f0", borderRadius: 8 },
  cardImage: { borderRadius: 4, aspectRatio: 800 / 530 },
  cardTitle: { marginTop: 16, marginBottom: 8, fontSize: 24, lineHeight: 28, fontWeight: 800 },
  cardDescription: { fontSize: 14, lineHeight: 20 },
});
