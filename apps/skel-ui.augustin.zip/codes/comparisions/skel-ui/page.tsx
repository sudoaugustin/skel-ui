// "use client";
// import * as Skel from "@skel-ui/react";
// import Image from "next/image";
// import "@skel-ui/react/styles.css";
// import useProfile from "../useProfile";

// export default function Page() {
//   const { user, isLoading } = useProfile();

//   return (
//     <Skel.Root
//       isLoading
//       className="flex space-x-4 text-black bg-white border-neutral-50 w-full max-w-sm p-2.5 rounded-lg"
//     >
//       <Skel.Item as="div" className="size-20 rounded-full overflow-hidden relative loading:rounded-full">
//         <Image src={user?.avatar as string} alt="" fill className="object-cover" />
//       </Skel.Item>
//       <div className="flex-1 space-y-1.5">
//         <Skel.Item className="text-xl font-bold loading:w-1/2">{user?.name}</Skel.Item>
//         <Skel.Item className="text-sm font-medium loading:h-10">{user?.bio}</Skel.Item>
//       </div>
//     </Skel.Root>
//   );
// }
