// [!code word:generatePlaceholder]

import { usePosts } from "commons-utils/hooks";
import * as Skel from "../../src";
import { generatePlaceholder } from "../../src/utils";
import Image from "./Image";

// For React Native, use "@skel-ui/react-native"

export default function PostCardList() {
  const { posts = generatePlaceholder(4, "postId"), isLoading } = usePosts(1); // [!code highlight]

  return (
    <Skel.Root isLoading={isLoading}>
      <section className="grid md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <div
            key={post.postId}
            className="group w-full max-w-80 p-2.5 bg-white border border-slate-200 rounded-lg overflow-hidden duration-300"
          >
            <Skel.Item
              as={Image}
              src={post.image}
              className="rounded aspect-[800/530] duration-150 loaded:group-hover:scale-110"
            />
            <Skel.h1 sw="65%" className="text-xl font-semibold mt-4">
              {post.title}
            </Skel.h1>
            <Skel.p sh="4rem" className="text-sm my-2">
              {post.description}
            </Skel.p>
          </div>
        ))}
      </section>
    </Skel.Root>
  );
}
