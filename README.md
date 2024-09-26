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


// React Skeleto's Way ✨
<Skeleto.Root isLoading={isLoading}>
  <Skeleto.Item as={Image} src={user.image} />
  <Skeleto.Item as="h1">{user.name}</Skeleto.Item>
</Skeleto.Root>
```
