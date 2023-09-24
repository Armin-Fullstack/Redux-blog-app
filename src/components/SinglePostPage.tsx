import { useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import styles from "./SinglePostPage.module.css"

export default function SinglePostPage(): JSX.Element {
  const {id} = useParams()
  const posts = useSelector(state => state.posts.find((post) => post.id === id))
  
  return(
    <section className={styles.singlePostPage}>
    <div className="container">
     <div className="post">
        <h3 className="postTitle">{posts.title}</h3>
        <p className="postAuthor">by {posts.author} about </p>
        <p className="postContent">{posts.content}</p>
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
      <button className={styles.editPostBtn}>Edit</button>
      </div>
    </div>
    </section>
  )
}