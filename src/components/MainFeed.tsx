import Form from "./Form";
import Posts from "./Posts";

export default function MainFeed(): JSX.Element {
  return (
    <main>
      <div className="container">
        <Form />
        <Posts />
      </div>
    </main>
  );
}
