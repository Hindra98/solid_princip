import TWorker from "../../../../classes/Worker";
import OneHuman from "../../../../data/DTO/OneHuman";
import Bonus from "../../Bonus";


export default class BonusDataMapper {
    mapWorkerToOneHuman(worker: TWorker, bonus1: Bonus): OneHuman {
      return new OneHuman(
        worker.id,
          worker.name + " " +worker.lastName,
          worker.age,
          worker.fonction,
          bonus1.getBonus(worker.id),
        worker.style
      );
    }
}
