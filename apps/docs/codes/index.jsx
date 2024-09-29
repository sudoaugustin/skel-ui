function OnlineStatus({ userId }) {
  const { isOnline, isLoading } = useOnlineStatus(userId);
  return <Skel.Root isLoading={isLoading}>{/* Render the status UI using isOnline */}</Skel.Root>;
}

function UserProfileCard() {
  const { user, isLoading } = useUserProfile();
  return (
    <Skel.Root isLoading={isLoading}>
      <Skel.Item>{user.name}</Skel.Item>
      <OnlineStatus userId={user.id} />
    </Skel.Root>
  );
}
