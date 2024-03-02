// import axios from "axios";
// import { useState } from "react";
import ShowHumanRow from "./ShowHumanRow";
import { useAppSelector } from "./app/hooks";

function ShowAllHuman() {

  const eleves = useAppSelector((state) => state.eleve);
  const etudiants = useAppSelector((state) => state.etudiant);
  const workers = useAppSelector((state) => state.worker);

// const [pokemon, setPokemon] = useState("Pikachu");
  
//   const instance = axios.create({
//     baseURL: "https://pokeapi.co/api/v2/berry",
//   })
//   const testApi = async () => {
//     console.log('Testing');
//     const response = await instance.get('/3');
//     console.log(response.data.item);
//     // setPokemon(response.data.item.name);
//   // Intercepted requests
//   instance.interceptors.request.use((request) => {
//     request.headers['Authorization'] = `Bearer`;
//     // request.headers.Accept = 'application/json';
//     console.log("Request Sent");
//     console.log(request.data);
//     setPokemon(request.data);
//     return request;
//   }, (err) => {
//     const { response: config } = err;
//     config.statusCode = config.statusCode || 200;
//     instance(config);
//     console.log("Request Failed", err);
//     return Promise.reject(err);
//   });

//   instance.interceptors.response.use((response) => {
//     console.log("Response Sent");
//     console.log(response.data);
//     return response;
//   }, (error) => {
//     console.log("Response Failed", error);
//     return Promise.reject(error);
//   });
// }

  return (
    <>

    {/* <h1>{pokemon}</h1>
    <button className="btn border-l-purple-700" onClick={testApi}>Change Pokemon</button> */}




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
              {/* <button className="bg-blue-500" onClick={testApi}>Enregistrer</button> */}
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}

export default ShowAllHuman;
