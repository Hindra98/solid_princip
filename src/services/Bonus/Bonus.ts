import dataBonus from "./data/Bonus.json";

abstract class Bonus {
    getBonus(id: number): number {
        for(const key in dataBonus) {
            if(dataBonus[key].id === id) {
                return dataBonus[key].points;
            }
        }
        return 0;
    }
}

export default Bonus;