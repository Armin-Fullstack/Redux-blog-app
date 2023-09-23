import Button from "./Button";
import styles from "./Post.module.css"

export default function Post({title , author , content}): JSX.Element {
  return(
    <div className={styles.post}>
        <h3>{title}</h3>
        <p>by {author} about </p>
        <p>{content}</p>
        <div className={styles.emojiContainer}>
          <div className={styles.emojiRate}>
            <span className={styles.emoji}>👍</span><p className={styles.number}>0</p>
          </div>
          <div className={styles.emojiRate}>
            <span className={styles.emoji}>🎉</span><p className={styles.number}>0</p>
          </div>
          <div className={styles.emojiRate}>
            <span className={styles.emoji}>❤️</span><p className={styles.number}>0</p>
          </div>
          <div className={styles.emojiRate}>
            <span className={styles.emoji}>🚀</span><p className={styles.number}>0</p>
          </div>
          <div className={styles.emojiRate}>
            <span className={styles.emoji}>👀</span><p className={styles.number}>0</p>
          </div>
        </div>
        <Button>View Post</Button>
      </div>
  )
}