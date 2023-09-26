import { Link } from "react-router-dom";
import styles from "./Post.module.css";
import { useSelector } from "react-redux";
import { selectUserById } from "../../features/users/usersSlice";
import TimeAgo from "./TimeAgo";

export default function Post({ title, userId, content, id , createdAt}): JSX.Element {
  const { name } = useSelector((store) => selectUserById(store, userId));
  return (
    <div className="post">
      <h3 className="postTitle">{title}</h3>
      <p className="postAuthor">by {name} <TimeAgo  timestamp={createdAt}/> </p>
      <p className="postContent">{content}</p>
      <div className="emojiContainer">
        <div className="emojiRate">
          <span className="emoji">👍</span>
          <p className="number">0</p>
        </div>
        <div className="emojiRate">
          <span className="emoji">🎉</span>
          <p className="number">0</p>
        </div>
        <div className="emojiRate">
          <span className="emoji">❤️</span>
          <p className="number">0</p>
        </div>
        <div className="emojiRate">
          <span className="emoji">🚀</span>
          <p className="number">0</p>
        </div>
        <div className="emojiRate">
          <span className="emoji">👀</span>
          <p className="number">0</p>
        </div>
      </div>
      <Link className={styles.viewPostBtn} to={`/posts/${id}`}>
        View Post
      </Link>
    </div>
  );
}
