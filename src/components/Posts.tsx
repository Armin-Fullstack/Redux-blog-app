import Post from "./Post";
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
      {posts.map(post => <Post title={post.title} author={post.author} content={post.content} key={post.id}/>)}
    </div>
  )
}