import $posts from "../data/posts.json";
import $users from "../data/users.json";
import useMockFetch from "./useMockFetch";

export function usePost() {
  const { state, isLoading } = useMockFetch($posts.find((post) => post.postId === 116));

  return { post: state, isLoading };
}

export function usePosts(userId?: number) {
  const { state, isLoading } = useMockFetch(userId ? $posts.filter((post) => post.userId === userId) : undefined);
  return { posts: state, isLoading };
}

export function useUsers() {
  const { state, isLoading } = useMockFetch($users);

  return { users: state, isLoading };
}

export function useUserById(id: number) {
  const { state, isLoading } = useMockFetch($users.find((user) => user.id === id));

  return { user: state, isLoading };
}
