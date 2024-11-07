import Skel from "../../../src";
import { usePost } from "../../hooks";
import Image from "../Image";

type Props = {
  isLoading?: boolean;
};

export default function PostCard(props: Props) {
  const { post, isLoading } = usePost();

  return (
    <Skel.Root isLoading={props.isLoading !== undefined ? props.isLoading : isLoading} className="card">
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
