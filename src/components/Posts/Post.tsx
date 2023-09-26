import { Link } from "react-router-dom";
import styles from "./Post.module.css";
import { useSelector } from "react-redux";
import { selectUserById } from "../../features/users/usersSlice";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "../Button/ReactionButtons";

export default function Post({ title, userId, content, id, createdAt }): JSX.Element {
  const { name } = useSelector((store) => selectUserById(store, userId));
  const post = useSelector((store) => store.posts.find((post) => post.id === id));
  return (
    <div className="post">
      <h3 className="postTitle">{title}</h3>
      <p className="postAuthor">
        by {name} <TimeAgo timestamp={createdAt} />{" "}
      </p>
      <p className="postContent">{content}</p>

      {<ReactionButtons post={post} />}

      <Link className={styles.viewPostBtn} to={`/posts/${id}`}>
        View Post
      </Link>
    </div>
  );
}
