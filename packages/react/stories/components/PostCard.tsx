import { usePost } from "commons-utils/hooks";
import * as Skel from "../../src";
import Image from "./Image";

type Props = {
  isLoading?: boolean;
};

export default function PostCard(props: Props) {
  const { post, isLoading } = usePost();

  return (
    <Skel.Root isLoading={props.isLoading !== undefined ? props.isLoading : isLoading}>
      <div className="group w-full max-w-80 p-2.5 bg-white border border-slate-200 rounded-lg overflow-hidden duration-300">
        <Skel.Custom
          as={Image}
          src={post?.image}
          className="rounded aspect-[800/530] duration-150 loaded:group-hover:scale-110"
        />
        <Skel.h1 sw="65%" className="text-xl font-semibold mt-4">
          {post?.title}
        </Skel.h1>
        <Skel.p sh="4rem" data-ok="true" className="text-sm my-2">
          {post?.description}
        </Skel.p>
      </div>
    </Skel.Root>
  );
}
