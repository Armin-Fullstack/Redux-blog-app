import Button from "./Button";
import styles from "./Posts.module.css"

const posts = [
  {
    id: crypto.randomUUID(),
    title: "quam numquam ut",
    author: "Abelardo Prosacco",
    content: "Rem nemo temporibus dolor quis maxime sit. Vero odio enim qui impedit. Incidunt et minima consequatu"
  },
  {
    id: crypto.randomUUID(),
    title: "quam numquam ut",
    author: "Abelardo Prosacco",
    content: "Rem nemo temporibus dolor quis maxime sit. Vero odio enim qui impedit. Incidunt et minima consequatu"
  },
  {
    id: crypto.randomUUID(),
    title: "quam numquam ut",
    author: "Abelardo Prosacco",
    content: "Rem nemo temporibus dolor quis maxime sit. Vero odio enim qui impedit. Incidunt et minima consequatu"
  }
]



export default function Posts():JSX.Element {
  
  return(
    <div className={styles.posts}>
      <h2 className={styles.postsTitle}>Posts</h2>
      <div className={styles.post}>
        <h3></h3>
        <p></p>
        <p></p>
        <div>
          <div>
            <span>👍</span><p>0</p>
          </div>
          <div>
            <span>🎉</span><p>0</p>
          </div>
          <div>
            <span>❤️</span><p>0</p>
          </div>
          <div>
            <span>🚀</span><p>0</p>
          </div>
          <div>
            <span>👀</span><p>0</p>
          </div>
        </div>
        <Button>View Post</Button>
      </div>
    </div>
  )
}