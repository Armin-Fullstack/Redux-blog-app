import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import styles from "./SinglePostPage.module.css";
import { selectUserById } from "../../features/users/usersSlice";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "../Button/ReactionButtons";

export default function SinglePostPage(): JSX.Element {
  const { id } = useParams();
  const post = useSelector((state) => state.posts.find((post) => post.id === id));
  const { name } = useSelector((store) => selectUserById(store, post.userId));

  return (
    <section className={styles.singlePostPage}>
      <div className="container">
        <div className="post">
          <h3 className="postTitle">{post.title}</h3>
          <p className="postAuthor">
            by {name} about <TimeAgo timestamp={post.createdAt} />
          </p>
          <p className="postContent">{post.content}</p>

          {<ReactionButtons post={post} />}
          <Link to={`/editPost/${id}`} className={styles.editPostBtn}>
            Edit
          </Link>
        </div>
      </div>
    </section>
  );
}
