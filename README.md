![Skel UI Banner](.github/assets/logo.png)

Skel UI resolves the challenges of implementing skeletons by eliminating the need to create dedicated loading screens and providing an easier way to manage skeleton states using React Context.

## Ideology

Modern applications often use skeleton screens to enhance user experience during data loading. However, managing these screens manually can be time-consuming and repetitive. When the UI changes, the skeleton must also be updated to avoid UI mismatches.

Current libraries require developers to handle the skeleton loading logic in multiple places. For instance, if you have a card with a title and a description, you'll need to implement the skeleton rendering logic twice. This is frustrating and compromises the overall developer experience.

So, many developers end up just using spinners which pisses the CEOs and clients.

The goal is to make skeletons a fundamental feature of applications instead of a time-consuming task by solving the above problems. The developers should focus on building features rather than managing loading states.

## Code Overview

```tsx
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
        <Skel.h1 className="text-xl font-bold mt-4 loading:max-w-48">{post?.title}</Skel.h1>
        <Skel.p className="text-sm my-2 loading:h-[3.75rem]">{post?.description}</Skel.p>
      </div>
    </Skel.Root>
  );
}
```

## Documentation

For official documentation, please visit [skel-ui.augustin.zip](https://skel-ui.augustin.zip/)

## Comaprision with React Loading Skeleton

| Description                               | Skel UI | React Loading Skeleton |
| ----------------------------------------- | ------- | ---------------------- |
| Has multiline support                     | No      | Yes 🏆                 |
| Sync User Interface                       | Yes 🤝  | Yes                    |
| Automatic correct sizing                  | Yes 🤝  | Yes                    |
| Loading logic in one place                | Yes 🏆  | No                     |
| Require prop drilling for loading state   | No 🏆   | Yes                    |
| Number of animations                      | 2 🏆    | 1                      |
| Customize animation timing                | Yes 🤝  | Yes                    |
| Custom animation                          | Yes 🏆  | No                     |
| First-class support for Tailwind          | Yes 🏆  | No                     |
