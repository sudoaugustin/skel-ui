import type { Meta } from "@storybook/react";
import Skel, { generatePlaceholder } from "../src";
import "../src/styles.css";
import { Image, PostCard, PostCardList } from "./components";
import { usePosts } from "./hooks";

export default {
  title: "Skel",
  component: Skel.Root,
} satisfies Meta<typeof Skel.Root>;

// export const UserPostCards = () => {
//   const { user, isLoading } = useUserById(1);
//   return (
//     <Skel.Root isLoading={isLoading} className="w-full max-w-2xl">
//       <div className="w-full bg-neutral-100 rounded-lg overflow-hidden mb-10">
//         <div className="bg-gradient-to-tr from-sky-400 to-blue-600 h-40 w-full" />
//         <div className="p-5 pt-0 -mt-12">
//           <Skel.Item
//             as={Image}
//             src={user?.avatar}
//             width={100}
//             height={100}
//             radius="50%"
//             className="size-24 rounded-full loaded:ring ring-white object-cover"
//           />
//           <Skel.Item className="text-lg font-bold mt-5 mb-1 loading:max-w-60">{user?.name}</Skel.Item>
//           <Skel.Item className="text-sm font-medium loading:max-w-32">{user?.email}</Skel.Item>
//         </div>
//       </div>
//       <div>
//         <Skel.Item className="mb-2.5 w-20 text-lg font-bold">Posts</Skel.Item>
//         <List userId={user?.id} />
//       </div>
//     </Skel.Root>
//   );
// };

export { PostCard, PostCardList };
