import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import styles from "./SinglePostPage.module.css";
import { selectUserById } from "../../features/users/usersSlice";
import TimeAgo from "./TimeAgo";

export default function SinglePostPage(): JSX.Element {
  const { id } = useParams();
  const { title, userId, content, createdAt } = useSelector((state) => state.posts.find((post) => post.id === id));
  const { name } = useSelector((store) => selectUserById(store, userId));

  return (
    <section className={styles.singlePostPage}>
      <div className="container">
        <div className="post">
          <h3 className="postTitle">{title}</h3>
          <p className="postAuthor">
            by {name} about <TimeAgo timestamp={createdAt} />
          </p>
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
          <Link to={`/editPost/${id}`} className={styles.editPostBtn}>
            Edit
          </Link>
        </div>
      </div>
    </section>
  );
}
