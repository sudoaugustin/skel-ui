import type { Meta } from "@storybook/react";
import React from "react";
import useSWR from "swr";
import Skel from "../src/index";
import "../src/index.css";
import { fetcher } from "../utils";

export default {
  title: "Skel",
  component: Skel.Root,
} satisfies Meta<typeof Skel.Root>;

function Button({ link, label, className, ...rest }: { link: string; label: string; className: string }) {
  return (
    <button
      {...rest}
      type="button"
      className={`${className} rounded-md text-md font-semibold h-12 flex-1 flex justify-center items-center`}
    >
      {label}
    </button>
  );
}

export const Default = () => {
  const { data: post = {}, isLoading } = useSWR("posts/1", fetcher);

  return (
    <div className="w-full max-w-md shadow hover:shadow-lg antialiased rounded-md border border-gray-100 p-4">
      <Skel.Root isLoading>
        <Skel.Item as="h1" className="text-2xl font-bold loading:h-8 line-clamp-1 max-w-60">
          {post.title}
        </Skel.Item>
        <Skel.Item className="text-sm line-clamp-4 text-justify loading:h-20 loading:w-full mt-2.5 mb-5">
          {post.content}
        </Skel.Item>
        <div className="flex space-x-2">
          <Skel.Item as={Button} link="" label="Upvote" className="bg-blue-800 text-white" />
          <Skel.Item as={Button} link="" label="Comment" className="bg-blue-50 text-blue-800" />
        </div>
      </Skel.Root>
    </div>
  );
};

export const CustomSkeln = () => {
  return (
    <Skel.Root isLoading>
      <Skel.Item color="#1e293b" radius="50%" className="text-2xl h-60 w-60">
        Hello World
      </Skel.Item>
    </Skel.Root>
  );
};
