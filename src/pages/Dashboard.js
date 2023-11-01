import { useNavigate, Route, Routes, Link, Outlet } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const handlerClick = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handlerClick}>Logout</button>

      <button>
        <Link to="welcome">Welcome Enlace</Link>
      </button>

      <Routes>
        <Route path="welcome" element={<div><h1>Welcome</h1></div>}/>
      </Routes>

      <Outlet/>
    </div>
  );
}

export default Dashboard;
