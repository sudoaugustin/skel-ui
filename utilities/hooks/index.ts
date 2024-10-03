import $posts from "@repo/data/posts.json";
import $users from "@repo/data/users.json";
import useMockFetch from "./useMockFetch";

export function usePosts(userId?: number) {
  const { state, isLoading } = useMockFetch(userId ? $posts.filter((post) => post.userId === userId) : undefined);
  return { posts: state, isLoading };
}

export function usePostById(postId: number) {
  const { state, isLoading } = useMockFetch($posts.find((post) => post.postId === postId));

  return { post: state, isLoading };
}

export function useUsers() {
  const { state, isLoading } = useMockFetch($users);

  return { users: state, isLoading };
}

export function useUserById(id: number) {
  const { state, isLoading } = useMockFetch($users.find((user) => user.id === id));

  return { user: state, isLoading };
}
