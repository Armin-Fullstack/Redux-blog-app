import { useDispatch } from "react-redux";
import { reactionAdded } from "../../features/posts/postsSlice";

const reactionEmoji = {
  thumbsUp: "👍",
  hooray: "🎉",
  heart: "❤️",
  rocket: "🚀",
  eyes: "👀",
};
export default function ReactionButtons({ post }): JSX.Element {
  const dispatch = useDispatch();
  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button className="emojiRate" key={name} onClick={() => dispatch(reactionAdded({ postId: post.id, name }))}>
        <span className="emoji">{emoji}</span>
        <p className="number">{post.reactions[name]}</p>
      </button>
    );
  });
  console.log(reactionButtons);
  return <div className="emojiContainer">{reactionButtons}</div>;
}
