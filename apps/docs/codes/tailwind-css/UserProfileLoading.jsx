// [!code word:loading\:w-32 loading\:h-8]
import Skel from "@skel-ui/react";

function UserProfile() {
  const { user, isLoading } = useProfile();

  return (
    <Skel.Root isLoading={isLoading}>
      <Skel.Item style="text-lg loading:w-32 loading:h-8">
        {user.email}
      </Skel.Item>
    </Skel.Root>
  );
}
