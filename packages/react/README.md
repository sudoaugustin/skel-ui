Skel UI resolves the challenges of implementing skeletons by eliminating the need to create dedicated loading screens and providing an easier way to manage skeleton states using React Context.

See the comparision [here](https://skel-ui.augustin.zip/#comparision).

## Get Started

### Import CSS

Import the CSS file into the root of your application.

```ts
import "@skel-ui/react/styles.css";
```

### Implement Skel UI

Now it's time for you to craft your user interface to life!

```tsx
import * as Skel from "@skel-ui/react";
import Image from "@ui/image";

export default function PostCard() {
  const { post, isLoading } = usePost();

  return (
    <Skel.Root isLoading={isLoading}>
      <div className="group w-full max-w-80 p-2.5 bg-white border border-slate-200 rounded-lg overflow-hidden duration-300">
        <Skel.Item
          as={Image}
          src={post?.image}
          className="rounded aspect-[800/530] duration-150 loaded:group-hover:scale-110"
        />
        <Skel.h1 className="text-xl font-bold mt-4 loading:max-w-48">{post?.title}</Skel.h1>
        <Skel.p className="text-sm my-2 loading:h-[3.75rem]">{post?.description}</Skel.p>
      </div>
    </Skel.Root>
  );
}
```

Now, not only have you designed the skeleton, but you have also done the actual UI. Additionally, the skeleton state for the entire UI is handled in a single place at the `<Skel.Root>` .



For full documentation, visit [skel-ui.augustin.zip](https://skel-ui.augustin.zip/)
