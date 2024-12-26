import RN from "react-native";

export default function PostCard() {
  const { post, isLoading } = usePost();

  return isLoading ? (
    <Spinner />
  ) : (
    <RN.View style={styles.card}>
      <RN.Image src={post?.image} style={styles.cardImage} />
      <RN.Text sw="65%" style={styles.cardTitle}>
        {post?.title}
      </RN.Text>
      <RN.Text numberOfLines={3} style={styles.cardDescription}>
        {post?.description}
      </RN.Text>
    </RN.View>
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
