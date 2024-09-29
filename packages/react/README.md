# 🚧 This package is highly under development. 🛠️

```JSX
const { user, isLoading } = useProfile();

// Legacy Way
if(isLoading){
  return <ProfileSkeleton/>
}

// Current Way
{isLoading ? (
  <Skeleton circle />
) : (
  <Avatar src={user.image} name={user.name} />
)}
<h1>{user.name || <Skeleton />}</h1>


// Skel's Way ✨
<Skel.Root isLoading={isLoading}>
  <Skel.Item as={Avatar} src={user.image} />
  <Skel.Item as="h1">{user.name}</Skel.Item>
</Skel.Root>
```
