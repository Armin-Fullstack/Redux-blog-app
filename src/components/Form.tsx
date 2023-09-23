import Button from "./Button";
import styles from "./Form.module.css"
export default function Form():JSX.Element {
  return(
    <form className={styles.form}>
      <h2 className={styles.formTitle}>Add a New Post</h2>
      <div className={styles.groupInput}>
        <label>Post Title:</label>
        <input type="text" placeholder="What's in your mind?"/>
      </div>
      <div className={styles.groupInput}>
        <label>Author:</label>
        <select className={styles.authorSelect}>
          <option value=""></option>
        </select>
      </div>
      <div className={styles.groupInput}>
        <label>Content:</label>
        <textarea></textarea>
      </div>
      <Button bgColor="#a5d8ff" width="11rem" textColor="white" textSize="1.7rem">Save Post</Button>
    </form>
  )
}