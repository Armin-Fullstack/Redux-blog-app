import { Link } from "react-router-dom";
import styles from "./Post.module.css"

export default function Post({title , author , content, id}): JSX.Element {
  return(
    <div className="post">
        <h3 className="postTitle">{title}</h3>
        <p className="postAuthor">by {author} about </p>
        <p className="postContent">{content}</p>
        <div className="emojiContainer">
          <div className="emojiRate">
            <span className="emoji">👍</span><p className="number">0</p>
          </div>
          <div className="emojiRate">
            <span className="emoji">🎉</span><p className="number">0</p>
          </div>
          <div className="emojiRate">
            <span className="emoji">❤️</span><p className="number">0</p>
          </div>
          <div className="emojiRate">
            <span className="emoji">🚀</span><p className="number">0</p>
          </div>
          <div className="emojiRate">
            <span className="emoji">👀</span><p className="number">0</p>
          </div>
        </div>
        <Link className={styles.viewPostBtn} to={`/posts/${id}`}>View Post</Link>
      </div>
  )
}