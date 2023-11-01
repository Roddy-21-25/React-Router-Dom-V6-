import { Link } from "react-router-dom";

const userId = 25;

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to={`/user/${userId}`}>Usuarios</Link>
    </div>
  );
}

export default HomePage;
