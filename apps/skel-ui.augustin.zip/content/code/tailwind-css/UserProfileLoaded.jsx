// [!code word:loaded\:border-2 loaded\:hover\:bg-blue-600]
import Skel from "@skel-ui/react";

function UserProfile() {
  const { user, isLoading } = useProfile();

  return (
    <Skel.Root isLoading={isLoading}>
      <Skel.Item style="text-lg loaded:border-2 loaded:hover:bg-blue-600">
        {user.email}
      </Skel.Item>
    </Skel.Root>
  );
}
