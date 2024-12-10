import PostCard from "./PostCard";

export default function Animations() {
  return (
    <div className="flex w-full max-w-2xl mx-auto justify-between">
      <div className="skel-ui-pulse flex flex-1 flex-center">
        <PostCard isLoading />
      </div>
      <div className="skel-ui-shimmer flex flex-1 flex-center">
        <PostCard isLoading />
      </div>
    </div>
  );
}
