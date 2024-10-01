// [!code word:generatePlaceholder]
import Skel, { generatePlaceholder } from "@skel-ui/react";
import useUsers from "./useUsers";

export default function List() {
  const { users = generatePlaceholder(6, "name"), isLoading } = useUsers(); // [!code highlight]

  return (
    <Skel.Root as="ul" isLoading={isLoading} className="w-full max-w-3xl grid grid-cols-2 gap-2.5">
      {users.map((user) => (
        <li key={user.name} className="p-5 bg-blue-100 space-y-1">
          <Skel.Item className="loading:max-w-60">{user.name}</Skel.Item>
          <Skel.Item className="loading:max-w-20">Age: {user.age}</Skel.Item>
        </li>
      ))}
    </Skel.Root>
  );
}
