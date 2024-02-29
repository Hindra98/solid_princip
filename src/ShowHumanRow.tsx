import { useAppDispatch } from "./app/hooks";
import { decrement, increment } from "./humanSlice";

function ShowHumanRow(human: {
  id: number,
  fullName: string,
  age: number,
  fonction: string,
  points: number,
  style: string,
  key: string
}) {
  const dispatch = useAppDispatch();
  return (
    <>
      <tr className={human.style}>
        <td>{human.id}</td>
        <td>{human.fullName}</td>
        <td>{human.age} ans</td>
        <td>{human.fonction}</td>
        <td>{human.points > 0 ? human.points : "Sans points"}</td>
        <td className="bg-white">
          {human.points > 0 ? (
            <>
              <button onClick={() => dispatch(increment({ id: human.id, key: human.key }))}>+</button>
              <button onClick={() => dispatch(decrement({ id: human.id, key: human.key }))}>-</button>
            </>
          ) : (
            "Aucune action requise"
          )}
        </td>
      </tr>
    </>
  );
}

export default ShowHumanRow;
