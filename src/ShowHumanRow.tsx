import { useState } from "react";
import OneHuman from "./data/DTO/OneHuman";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { increment, initial, remplir, selectAllEleves } from "./eleveSlice";

function ShowHumanRow(oneHuman: OneHuman) {
  const [points, setPoints] = useState(oneHuman.getOneTypeHuman().points);

  const dispatch = useAppDispatch();
//   const eleve = useAppSelector((state) => initial(
//     {
//       id: key,
//       name: oneHuman.getOneTypeHuman().fullName,
//       age: oneHuman.getOneTypeHuman().age,
//       classe: oneHuman.getOneTypeHuman().fonction,
//       points: oneHuman.getOneTypeHuman().points,
//     })
//   );
//   console.log(eleve);

const eleve = useAppSelector(state=>state.eleves)

const initializer = () => {
    if (oneHuman.getOneTypeHuman().id < 2)
    dispatch(initial(
      {
        id: oneHuman.getOneTypeHuman().id,
        name: oneHuman.getOneTypeHuman().fullName,
        age: oneHuman.getOneTypeHuman().age,
        classe: oneHuman.getOneTypeHuman().fonction,
        points: oneHuman.getOneTypeHuman().points,
      })
    );
    else dispatch(remplir(
        {
          id: oneHuman.getOneTypeHuman().id,
          name: oneHuman.getOneTypeHuman().fullName,
          age: oneHuman.getOneTypeHuman().age,
          classe: oneHuman.getOneTypeHuman().fonction,
          points: oneHuman.getOneTypeHuman().points,
        }
        ));
}

initializer();

  return (
    <>
    <tr className={oneHuman.getOneTypeHuman().style} key={oneHuman.getOneTypeHuman().id}>
      <td>{oneHuman.getOneTypeHuman().id}</td>
      <td>{oneHuman.getOneTypeHuman().fullName}</td>
      <td>{oneHuman.getOneTypeHuman().age} ans</td> {/* Age */}
      <td>{oneHuman.getOneTypeHuman().fonction}</td> {/* fonction */}
      <td>
        {oneHuman.getOneTypeHuman().points > 0 ? points : "Sans points"}
      </td>{" "}
      {/* points */}
      <td className="bg-white">
        {oneHuman.getOneTypeHuman().points > 0 ? (
          <>
            <button onClick={() => dispatch(increment({id:oneHuman.getOneTypeHuman().id}))}>+</button>
            <button
              onClick={() => {
                points > 0 && setPoints(points - 1);
              }}
            >
              -
            </button>
          </>
        ) : (
          "Aucune action requise"
        )}
      </td>
    </tr>
      {/* <tr className={oneHuman.getOneTypeHuman().style} key={oneHuman.getOneTypeHuman().id}>
        <td>{oneHuman.getOneTypeHuman().id}</td>
        <td>{oneHuman.getOneTypeHuman().fullName}</td>
        <td>{oneHuman.getOneTypeHuman().age} ans</td> 
        <td>{oneHuman.getOneTypeHuman().fonction}</td> 
        <td>
          {oneHuman.getOneTypeHuman().points > 0 ? points : "Sans points"}
        </td>{" "}
        <td className="bg-white">
          {oneHuman.getOneTypeHuman().points > 0 ? (
            <>
              <button onClick={() => dispatch(increment({id:oneHuman.getOneTypeHuman().id}))}>+</button>
              <button
                onClick={() => {
                  points > 0 && setPoints(points - 1);
                }}
              >
                -
              </button>
            </>
          ) : (
            "Aucune action requise"
          )}
        </td>
      </tr> */}
    </>
  );
}

export default ShowHumanRow;
