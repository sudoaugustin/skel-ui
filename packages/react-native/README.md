Skel UI resolves the challenges of implementing skeletons by eliminating the need to create dedicated loading screens and providing an easier way to manage skeleton states using React Context.

See the comparision [here](https://skel-ui.augustin.zip/#comparision).

## Get Started

### Add Skel Provider

Wrap your application with Skel UI provider.


```tsx
import * as Skel from "@skel-ui/react-native";

export default function App() {
  return <Skel.Provider> ... </Skel.Provider>;
}
```

### Implement Skel UI

Now it's time for you to craft your user interface to life!

```tsx
import * as Skel from "@skel-ui/react-native";
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
```

Now, not only have you designed the skeleton, but you have also done the actual UI. Additionally, the skeleton state for the entire UI is handled in a single place at the `<Skel.Root>` .

For full documentation, visit [skel-ui.augustin.zip](https://skel-ui.augustin.zip/)
