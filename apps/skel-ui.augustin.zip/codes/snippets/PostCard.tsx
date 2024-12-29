// [!code word:generatePlaceholder]
import * as Skel from "@skel-ui/react";
import Image from "@ui/image";

export default function PostCard() {
  const { post, isLoading } = usePost();

  return (
    <Skel.Root isLoading={isLoading}>
      <div className="group w-full max-w-80 p-2.5 bg-white border border-slate-200 rounded-lg overflow-hidden duration-300">
        <Skel.Item
          as={Image}
          src={post?.image}
          className="rounded aspect-[800/530] duration-150 loaded:group-hover:scale-110"
        />
        <Skel.h1 className="text-xl font-bold mt-4 loading:max-w-36">{post?.title}</Skel.h1>
        <Skel.p className="text-sm my-2 loading:h-[3.75rem]">{post?.description}</Skel.p>
      </div>
    </Skel.Root>
  );
}


