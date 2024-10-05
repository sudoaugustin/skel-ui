// [!code word:generatePlaceholder]

import Skel, { generatePlaceholder } from "../../../src";
import { usePosts } from "../../hooks";
import Image from "../Image";

export default function PostCardList() {
  const { posts = generatePlaceholder(4, "postId"), isLoading } = usePosts(1); // [!code highlight]

  return (
    <Skel.Root isLoading={isLoading} className="list">
      {posts.map((post) => (
        <div key={post.postId} className="card">
          <Skel.Item as={Image} src={post.image as string} radius="0.5rem" className="card-image" />

          <Skel.Item as="h1" width="65%" className="card-title">
            {post.title}
          </Skel.Item>

          <Skel.Item height="4rem" className="card-content">
            {post.description}
          </Skel.Item>

          <Skel.Item width="35%" className="card-detail">
            {post.viewsCount} Views • {post.likesCount} Likes
          </Skel.Item>
        </div>
      ))}
    </Skel.Root>
  );
}
