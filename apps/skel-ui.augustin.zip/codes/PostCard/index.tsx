import { usePost } from "commons-utils/hooks";
import * as Skel from "../../../src";
import Image from "../Image";

type Props = {
  isLoading?: boolean;
};

export default function PostCard(props: Props) {
  const { post, isLoading } = usePost();

  return (
    <Skel.Root isLoading={props.isLoading !== undefined ? props.isLoading : isLoading}>
      <div className="card">
        <Skel.Custom component={Image} src={post?.image} sr="0.5rem" className="card-image" />
        <Skel.h1 sw="65%" className="card-title">
          {post?.title}
        </Skel.h1>
        <Skel.p sh="4rem" className="card-content">
          {post?.description}
        </Skel.p>
        <Skel.div sw="35%" className="card-detail">
          {post?.viewsCount} Views • {post?.likesCount} Likes
        </Skel.div>
      </div>
    </Skel.Root>
  );
}
