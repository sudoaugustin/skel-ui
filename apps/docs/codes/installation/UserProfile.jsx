import Skel from "@skel-ui/react";

function UserProfile() {
  const { user, isLoading } = useProfile();

  return (
    <Skel.Root isLoading={isLoading}>
      <Skel.Item style="user-email">{user.email}</Skel.Item>
    </Skel.Root>
  );
}
