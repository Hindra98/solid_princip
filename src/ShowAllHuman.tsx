import { useAppDispatch, useAppSelector } from "./app/hooks";
import { decrement, increment } from "./eleveSlice";

function ShowAllHuman() {

  const eleves = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  return (
    <>
      <table className="table table-fixed px-2 py-1 text-center w-full my-5 border-separate border-spacing-2">
        <thead>
          <tr>
            <th scope="col">N*</th>
            <th scope="col">Noms</th>
            <th scope="col">Age</th>
            <th scope="col">Fonction</th>
            <th scope="col">Points</th>
            <th scope="col">Option</th>
          </tr>
        </thead>
        <tbody>
          {eleves.map((eleve, key) => {
            return (
              <tr className={eleve.style} key={key}>
                <td>{eleve.id}</td>
                <td>{eleve.fullName}</td>
                <td>{eleve.age} ans</td>
                <td>{eleve.fonction}</td>
                <td>
                  {eleve.points > 0
                    ? eleve.points
                    : "Sans points"}
                </td>
                <td className="bg-white">
                  <button onClick={() => dispatch(increment({ id: eleve.id }))}>
                    +
                  </button>
                  <button onClick={() => dispatch(decrement({ id: eleve.id }))}>
                    -
                  </button>

                  {/* {eleve.getOneTypeHuman().points > 0 ? (
          <>
            <button onClick={() => dispatch(increment({id:eleve.getOneTypeHuman().id}))}>+</button>
            <button onClick={() => dispatch(increment({id:eleve.getOneTypeHuman().id}))}>-</button>
          </>
        ) : (
          "Aucune action requise"
        )} */}
        
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr key={20000}>
            <td colSpan={6}>
              <button className="bg-blue-500">Enregistrer</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}

export default ShowAllHuman;
