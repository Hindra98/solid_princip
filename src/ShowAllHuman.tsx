import axios from "axios";
import ShowHumanRow from "./ShowHumanRow";
import { useAppSelector } from "./app/hooks";

function ShowAllHuman() {

  const eleves = useAppSelector((state) => state.eleve);
  const etudiants = useAppSelector((state) => state.etudiant);
  const workers = useAppSelector((state) => state.worker);
  const testApi = async () => {
    console.log('Testing');
//   axios.get("https://pokeapi.co/api/v2/berry").then((res) => {
//     console.log(res.data.results);
//   });

  // Intercepted requests
  const instance = axios.create({
    baseURL: "https://pokeapi.co/api/v2/berry",
  })
  instance.interceptors.request.use((request) => {
    request.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    request.headers.Accept = 'application/json';
    console.log("Request Sent");
    return request;
  }, (err) => {
    console.log("Request Failed");
    return Promise.reject(err);
  });

  instance.interceptors.response.use((response) => {
    console.log("Response Sent", response);
    return response;
  }, (error) => {
    console.log("Response Failed", error);
    return Promise.reject(error);
  });
}
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
          <tr><td colSpan={6}><h1 className="font-bold text-3xl">Les eleves</h1></td></tr>
          {eleves.map((eleve) => {
            return (
                // <ShowHumanRow id={eleve.id} fullName={eleve.fullName} age={eleve.age} fonction={eleve.fonction}
                // points={eleve.points} style={eleve.style} key={key} />
                ShowHumanRow(eleve)
            );
          })}
          
          <tr><td colSpan={6}><h1 className="font-bold text-3xl">Les etudiants</h1></td></tr>
          {etudiants.map((etudiant) => {
            return (
                // <ShowHumanRow id={etudiant.id} fullName={etudiant.fullName} age={etudiant.age} fonction={etudiant.fonction}
                // points={etudiant.points} style={etudiant.style} key={key} />
                ShowHumanRow(etudiant)
            );
          })}
          
          <tr><td colSpan={6}><h1 className="font-bold text-3xl">Les workers</h1></td></tr>
          {workers.map((worker) => {
            return (
                // <ShowHumanRow id={worker.id} fullName={worker.fullName} age={worker.age} fonction={worker.fonction}
                // points={worker.points} style={worker.style} key={key} />
                ShowHumanRow(worker)
            );
          })}
        </tbody>
        <tfoot>
          <tr key={20000}>
            <td colSpan={6}>
              <button className="bg-blue-500" onClick={testApi}>Enregistrer</button>
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}

export default ShowAllHuman;
