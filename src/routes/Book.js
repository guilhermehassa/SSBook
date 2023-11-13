
import { useParams } from "react-router-dom";

function App() {
  const {id} = useParams();
  return (
    <div className="SSBook">
      book {id}
    </div>
  );
}

export default App;
