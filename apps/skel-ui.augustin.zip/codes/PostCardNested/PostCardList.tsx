import { usePosts } from "commons-utils/hooks";
import Skel, { generatePlaceholder } from "../../../src";
import Image from "../Image";

type Props = {
  userId: number;
};

export default function PostCardList({ userId }: Props) {
  const { posts = generatePlaceholder(4, "postId"), isLoading } = usePosts(userId);

  return (
    <Skel.Root isLoading={isLoading} className="list">
      {posts.map((post) => (
        <div key={post.postId} className="card">
          <Skel.Item as={Image} src={post.image as string} radius="0.5rem" className="card-image" />

          <Skel.Item as="h1" sw="65%" className="card-title">
            {post.title}
          </Skel.Item>

          <Skel.Item sh="4rem" className="card-content">
            {post.description}
          </Skel.Item>

          <Skel.Item sw="35%" className="card-detail">
            {post.viewsCount} Views • {post.likesCount} Likes
          </Skel.Item>
        </div>
      ))}
    </Skel.Root>
  );
}
