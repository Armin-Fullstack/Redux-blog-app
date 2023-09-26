import { useSelector } from "react-redux";
import styles from "./Posts.module.css";
import Post from "./Post";

export default function Posts(): JSX.Element {
  const posts = useSelector((store) => store.posts);
  return (
    <div className={styles.posts}>
      <h2 className={styles.postsTitle}>Posts</h2>
      {posts.map((post) => (
        <Post title={post.title} userId={post.userId} content={post.content} createdAt={post.createdAt} id={post.id} key={post.id} />
      ))}
    </div>
  );
}
