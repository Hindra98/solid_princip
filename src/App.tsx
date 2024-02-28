import "./App.css";
import ShowAllHuman from "./ShowAllHuman";
import { useAppSelector } from "./app/hooks";
import { selectAllEleves } from "./eleveSlice";

function App() {
  const allEl = useAppSelector((state) => state);

  return (
    <div className="container mx-auto w-11/12 py-5">
      <h1 className="font-bold text-center">
        Liste des humains de Sims version Hindra98
        <button
          className="btn btn-success"
          onClick={() => console.log(selectAllEleves(allEl))}
        >
          View changes
        </button>
      </h1>
      <ShowAllHuman />
    </div>
  );
}

export default App;
