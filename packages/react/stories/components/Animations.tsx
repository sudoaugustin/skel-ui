import PostCard from "./PostCard";

export default function Animations() {
  return (
    <div className="flex w-full max-w-4xl mx-auto justify-between">
      <div className="skel-ui-shimmer flex flex-center">
        <PostCard isLoading />
      </div>
      <div className="skel-ui-pulse flex flex-center">
        <PostCard isLoading />
      </div>
    </div>
  );
}
