import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { SyntheticEvent, useState } from "react";
import { postEdited } from "../../features/posts/postsSlice";
import Button from "../Button/Button";
export default function EditPostForm(): JSX.Element {
  const { id } = useParams();
  const post = useSelector(state => state.posts.find(post => post.id === id));
  console.log(post);

  const [title , setTitle] = useState(post.title)
  const [content , setContent] = useState(post.content)

  const navigate = useNavigate()
  const dispatch = useDispatch()

function handleSubmit(e: SyntheticEvent) {
  e.preventDefault()
  console.log("edited");
  dispatch(postEdited(title , content , id))
  navigate(`/posts/${id}`)
}
  return(
    <div className="container">
    <form onSubmit={handleSubmit}>
      <h2>-- Edit Post --</h2>
      <div className="groupInput">
        <label>Post Title:</label>
        <input type="text" placeholder="What's in your mind?" value={title} onChange={e => setTitle(e.target.value)}/>
      </div>
      <div className="groupInput">
        <label>Content:</label>
        <textarea value={content} onChange={e => setContent(e.target.value)} />
      </div>
      <Button bgColor="#a5d8ff" width="11rem" textColor="white" textSize="1.7rem">Save Post</Button>
    </form>
    </div>
    
  )
}