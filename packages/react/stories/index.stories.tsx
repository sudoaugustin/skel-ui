import type { Meta } from "@storybook/react";
import { usePost, usePosts, useUserById } from "hooks";
import React from "react";
import Skel, { generatePlaceholder } from "../src";
import "../src/styles.css";

export default {
  title: "Skel",
  component: Skel.Root,
} satisfies Meta<typeof Skel.Root>;

function Image(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  return <img {...props} alt="" />;
}

function List({ userId }: { userId?: number }) {
  const { posts = generatePlaceholder(4, "postId"), isLoading } = usePosts(userId);
  return (
    <Skel.Root isLoading={isLoading} className="grid grid-cols-2 gap-5 w-full max-w-2xl">
      {posts.map(({ postId, image, title, description, viewsCount, likesCount }) => (
        <div key={postId} className="w-full max-w-80 flex flex-col rounded-lg border border-slate-200 p-2.5">
          <Skel.Item as={Image} src={image} width={800} height={530} className="aspect-[800/530] rounded-lg" />
          <Skel.Item as="h1" className="text-lg font-semibold mt-5 loading:max-w-48">
            {title}
          </Skel.Item>
          <Skel.Item className="text-sm my-1.5 line-clamp-4 loading:h-20">{description}</Skel.Item>
          <Skel.Item className="text-xs loading:max-w-32">
            {viewsCount} Views • {likesCount} Likes
          </Skel.Item>
        </div>
      ))}
    </Skel.Root>
  );
}

export const PostCard = () => {
  const { post, isLoading } = usePost();

  return (
    <Skel.Root isLoading={isLoading} className="w-full max-w-80 flex flex-col rounded-lg border border-slate-200 p-2.5">
      <Skel.Item as={Image} src={post?.image} width={800} height={530} className="aspect-[800/530] rounded-lg" />
      <Skel.Item as="h1" className="text-lg font-semibold mt-5 loading:max-w-48">
        {post?.title}
      </Skel.Item>
      <Skel.Item className="text-sm my-1.5 loading:h-20">{post?.description}</Skel.Item>
      <Skel.Item className="text-xs loading:max-w-32">
        {post?.viewsCount} Views • {post?.likesCount} Likes
      </Skel.Item>
    </Skel.Root>
  );
};

export const PostCards = () => {
  return <List userId={1} />;
};

export const UserPostCards = () => {
  const { user, isLoading } = useUserById(1);
  return (
    <Skel.Root isLoading={isLoading} className="w-full max-w-2xl">
      <div className="w-full bg-slate-100 rounded-lg overflow-hidden mb-10">
        <div className="bg-gradient-to-tr from-sky-400 to-blue-600 h-40 w-full" />
        <div className="p-5 pt-0 -mt-12">
          <Skel.Item
            as={Image}
            src={user?.avatar}
            width={100}
            height={100}
            radius="50%"
            className="size-24 rounded-full loaded:ring ring-white object-cover"
          />
          <Skel.Item className="text-lg font-bold mt-5 mb-1 loading:max-w-60">{user?.name}</Skel.Item>
          <Skel.Item className="text-sm font-medium loading:max-w-32">{user?.email}</Skel.Item>
        </div>
      </div>
      <div>
        <Skel.Item className="mb-2.5 w-20 text-lg font-bold">Posts</Skel.Item>
        <List userId={user?.id} />
      </div>
    </Skel.Root>
  );
};
