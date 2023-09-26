import { useSelector } from "react-redux";

export default function Users(): JSX.Element {
  const users = useSelector((store) => store.users);

  return (
    <section className="">
      <div className="container">
        <h2>Users</h2>
        {users.map((user) => user)}
      </div>
    </section>
  );
}
