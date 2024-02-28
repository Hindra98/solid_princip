// import Human from "../classes/Human";
import AllTypeHumanInterface from "./AllTypeHumanInterface";
import Eleve from "../classes/Eleve";
import OneHuman from "./DTO/OneHuman";
import dataEleve from "./Eleves.json";
import DataMapper from "./DTO/DataMapper";

class GetElevesService implements AllTypeHumanInterface {
    allHuman: OneHuman[] = [];
    dataMapper: DataMapper = new DataMapper();


  getAllHuman() {
    for (const key in dataEleve) {
        const element = dataEleve[key]
        const eleve: Eleve = new Eleve(element.id, element.name, element.lastname, element.age, "Eleve de "+element.classe, element.points)
        this.allHuman.push(this.dataMapper.mapEleveToOneHuman(eleve));
    }
    return this.allHuman;
  }
}

export default GetElevesService;
