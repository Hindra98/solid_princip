// import Human from "../classes/Human";
import AllTypeHumanInterface from "./AllTypeHumanInterface";
import Eleve from "../classes/Eleve";
import Worker from "../classes/Worker";
import OneHuman from "./DTO/OneHuman";
import dataEleve from "./Eleves.json";
import dataEtudiant from "./Etudiants.json";
import dataWorker from "./Workers.json";
import DataMapper from "./DTO/DataMapper";
import Etudiant from "../classes/Etudiant";

class GetElevesService implements AllTypeHumanInterface {
    allHuman: OneHuman[] = [];
    dataMapper: DataMapper = new DataMapper();


    getAllWorker() {
        for (const key in dataWorker) {
            const element = dataWorker[key]
            const worker: Worker = new Worker(element.id, element.name, element.lastname, parseInt(element.age), element.work)
            this.allHuman.push(this.dataMapper.mapWorkerToOneHuman(worker));
        }
        return this.allHuman;
      }
      getAllEleve() {
        for (const key in dataEleve) {
            const element = dataEleve[key]
            const eleve: Eleve = new Eleve(element.id, element.name, element.lastname, element.age, "Eleve de "+element.classe)
            this.allHuman.push(this.dataMapper.mapEleveToOneHuman(eleve));
        }
        return this.allHuman;
      }
      getAllEtudiant() {
        for (const key in dataEtudiant) {
            const element = dataEtudiant[key]
            const eleve: Etudiant = new Etudiant(element.id, element.name, element.lastname, parseInt(element.age), "Etudiant en "+element.filiere)
            this.allHuman.push(this.dataMapper.mapEtudiantToOneHuman(eleve));
        }
        return this.allHuman;
      }
      getAllHuman() {
        for (const key in dataEleve) {
            const element = dataEleve[key]
            const eleve: Eleve = new Eleve(element.id, element.name, element.lastname, element.age, "Eleve de "+element.classe)
            this.allHuman.push(this.dataMapper.mapEleveToOneHuman(eleve));
        }
        for (const key in dataEtudiant) {
            const element = dataEtudiant[key]
            const eleve: Etudiant = new Etudiant(element.id, element.name, element.lastname, parseInt(element.age), "Etudiant en "+element.filiere)
            this.allHuman.push(this.dataMapper.mapEtudiantToOneHuman(eleve));
        }
        for (const key in dataWorker) {
            const element = dataWorker[key]
            const worker: Worker = new Worker(element.id, element.name, element.lastname, parseInt(element.age), element.work)
            this.allHuman.push(this.dataMapper.mapWorkerToOneHuman(worker));
        }
        return this.allHuman;
      }
}

export default GetElevesService;
