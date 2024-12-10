// [!code word:generatePlaceholder]

import { usePosts } from "commons-utils/hooks";
import * as Skel from "../../../src";
import { generatePlaceholder } from "../../../src/utils";
import Image from "../Image";

export default function PostCardList() {
  const { posts = generatePlaceholder(4, "postId"), isLoading } = usePosts(1); // [!code highlight]

  return (
    <Skel.Root isLoading={isLoading}>
      <section className="list">
        {posts.map((post) => (
          <div key={post.postId} className="card">
            <Skel.Custom component={Image} src={post?.image} sr="0.5rem" className="card-image" />
            <Skel.h1 sw="65%" className="card-title">
              {post.title}
            </Skel.h1>
            <Skel.p sh="4rem" className="card-content">
              {post.description}
            </Skel.p>
            <Skel.p sw="35%" className="card-detail">
              {post.viewsCount} Views • {post.likesCount} Likes
            </Skel.p>
          </div>
        ))}
      </section>
    </Skel.Root>
  );
}
