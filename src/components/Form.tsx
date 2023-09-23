import { useState } from "react";
import Button from "./Button";
import styles from "./Form.module.css"
import { useDispatch } from "react-redux";
import { postAdded } from "../features/posts/postsSlice";
import { nanoid } from "@reduxjs/toolkit";

export default function Form():JSX.Element {
  const [title , setTitle] = useState<string>("")
  const [author , setAuthor] = useState<string>("Armin")
  const [content , setContent] = useState<string>("")

  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault()
    const newPost = {
      id: nanoid(),
      title,
      author,
      content,
      createdAt: new Date().toISOString()
    }
    if(!title || !content) return
    dispatch(postAdded(newPost))
    setTitle("")
    setContent("")
  }
  return(
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.formTitle}>Add a New Post</h2>
      <div className={styles.groupInput}>
        <label>Post Title:</label>
        <input type="text" placeholder="What's in your mind?" value={title} onChange={(e) => setTitle(e.target.value)}/>
      </div>
      <div className={styles.groupInput}>
        <label>Author:</label>
        <select className={styles.authorSelect} value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Armin">Armin</option>
          <option value="Arian">Arian</option>
          <option value="Hooshang">Hooshang</option>
        </select>
      </div>
      <div className={styles.groupInput}>
        <label>Content:</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      </div>
      <Button bgColor="#a5d8ff" width="11rem" textColor="white" textSize="1.7rem">Save Post</Button>
    </form>
  )
}