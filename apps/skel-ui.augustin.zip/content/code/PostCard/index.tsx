import Skel from "@skel-ui/react";
import { usePost } from "hooks";
import Image from "@ui/Image";

export default function PostCard() {
  const { post, isLoading } = usePost();

  return (
    <Skel.Root isLoading={isLoading} className="card">
      <Skel.Item as={Image} src={post?.image as string} radius="0.5rem" className="card-image" />

      <Skel.Item as="h1" sw="65%" className="card-title">
        {post?.title}
      </Skel.Item>

      <Skel.Item sh="4rem" className="card-content">
        {post?.description}
      </Skel.Item>

      <Skel.Item sw="35%" className="card-detail">
        {post?.viewsCount} Views • {post?.likesCount} Likes
      </Skel.Item>
    </Skel.Root>
  );
}
