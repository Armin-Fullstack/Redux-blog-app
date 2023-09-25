import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import MainFeed from "./components/MainFeed";
import SinglePostPage from "./components/Posts/SinglePostPage";
import EditPostForm from "./components/Posts/EditPostForm";


export default function App(): JSX.Element {
  return (
    <>
    <Header />
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainFeed />}/>
          <Route path="users" element={<p>Users</p>}/>
          <Route path="notifications" element={<p>notifications</p>}/>
          <Route path="posts/:id" element={<SinglePostPage />}/>
          <Route path="editPost/:id" element={<EditPostForm />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}