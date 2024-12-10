import { useUserById } from "commons-utils/hooks";
import * as Skel from "../../../src";
import Image from "../Image";
import PostCardList from "../PostCardList";

export default function PostCardNested() {
  const { user, isLoading } = useUserById(1);
  return (
    <Skel.Root isLoading={isLoading} className="w-full max-w-2xl">
      <div className="w-full bg-neutral-100 rounded-lg overflow-hidden mb-10">
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
        <PostCardList userId={user?.id} />
      </div>
    </Skel.Root>
  );
}
