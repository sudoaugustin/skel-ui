import Skel from "@skel-ui/react-native";
import { usePost } from "commons-utils/hooks";
import React from "react";
import { Image } from "react-native";

export default function IndexPage() {
  const { post, isLoading } = usePost();

  return (
    <Skel.Root isLoading={isLoading !== undefined ? isLoading : isLoading} className="card">
      <Skel.Item as={Image} src={post?.image as string} radius="0.5rem" className="card-image" />
      <Skel.Item sw="65%">{post?.title}</Skel.Item>
      <Skel.Item sh="4rem">{post?.description}</Skel.Item>
      <Skel.Item sw="35%">
        {post?.viewsCount} Views • {post?.likesCount} Likes
      </Skel.Item>
    </Skel.Root>
  );
}
