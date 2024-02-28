import Eleve from "../../classes/Eleve";
import TWorker from "../../classes/Worker";
import OneHuman from "./OneHuman";

export default class DataMapper {
    mapEleveToOneHuman(eleve: Eleve): OneHuman {
      return new OneHuman(
        eleve.id,
          eleve.name + " " +eleve.lastName,
          eleve.age,
          eleve.fonction,
          eleve.points,
        eleve.style
      );
    }
    mapWorkerToOneHuman(worker: TWorker): OneHuman {
      return new OneHuman(
        worker.id,
          worker.name + " " +worker.lastName,
          worker.age,
          worker.fonction,
          0,
        worker.style
      );
    }
}
