import Form from "./Form";
import Posts from "./Posts";

export default function MainFeed(): JSX.Element {
  return (
    <main style={{padding: "3rem 0"}}>
      <div className="container">
        <Form />
        <Posts />
      </div>
    </main>
  );
}
