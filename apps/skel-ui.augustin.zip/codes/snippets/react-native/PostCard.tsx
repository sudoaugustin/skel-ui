import * as Skel from "@skel-ui/react-native/src";
import RN from "react-native";

export default function PostCard() {
  const { post, isLoading } = usePost();

  return (
    <Skel.Root isLoading={isLoading}>
      <RN.View style={styles.card}>
        <Skel.Image src={post?.image} style={styles.cardImage} />
        <Skel.Text sw="65%" style={styles.cardTitle}>
          {post?.title}
        </Skel.Text>
        <Skel.Text numberOfLines={3} style={styles.cardDescription}>
          {post?.description}
        </Skel.Text>
      </RN.View>
    </Skel.Root>
  );
}

const styles = RN.StyleSheet.create({
  card: {
    width: 320,
    padding: 10,
    marginHorizontal: "auto",
    borderWidth: 1,
    borderColor: "#e2e8f0",
    borderRadius: 8,
  },
  cardImage: {
    borderRadius: 4,
    aspectRatio: 800 / 530,
  },
  cardTitle: {
    marginTop: 16,
    marginBottom: 8,
    fontSize: 24,
    lineHeight: 28,
    fontWeight: 800,
  },
  cardDescription: {
    fontSize: 14,
    lineHeight: 20,
  },
});
