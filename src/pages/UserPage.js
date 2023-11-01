import { useParams } from "react-router-dom";

function UserPage() {
  // Esto devuelve un JSON con la key del nombre del param en el Routes
  const {id} = useParams();
  return (
    <div>
      user <h1>{id}</h1>
    </div>
  );
}

export default UserPage;
