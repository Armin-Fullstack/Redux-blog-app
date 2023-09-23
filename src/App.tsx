import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

export default function App(): JSX.Element {
  return (
    <>
    <Header />
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<p>main App</p>}/>
          <Route path="users" element={<p>Users</p>}/>
          <Route path="notifications" element={<p>notifications</p>}/>
          <Route path="posts" element={<p>Posts</p>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}