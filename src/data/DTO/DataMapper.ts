import Eleve from "../../classes/Eleve";
import Etudiant from "../../classes/Etudiant";
import TWorker from "../../classes/Worker";
import Bonus from "../../services/Bonus/Bonus";
import OneHuman from "./OneHuman";

export default class DataMapper {
     bonus: Bonus = new Bonus();
    mapEleveToOneHuman(eleve: Eleve): OneHuman {
      return new OneHuman(
        eleve.id,
          eleve.name + " " +eleve.lastName,
          eleve.age,
          eleve.fonction,
          this.bonus.getBonus(eleve.id),
        eleve.style
      );
    }
    mapWorkerToOneHuman(worker: TWorker): OneHuman {
        return new OneHuman(
          worker.id,
            worker.name + " " +worker.lastName,
            worker.age,
            worker.fonction,
            this.bonus.getBonus(worker.id),
          worker.style
        );
      }
      mapEtudiantToOneHuman(etudiant: Etudiant): OneHuman {
          return new OneHuman(
            etudiant.id,
              etudiant.name + " " +etudiant.lastName,
              etudiant.age,
              etudiant.fonction,
              this.bonus.getBonus(etudiant.id),
            etudiant.style
          );
        }
}
