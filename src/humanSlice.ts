import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store/store";
import GetElevesService from "./data/AllEleves";
import OneHuman from "./data/DTO/OneHuman";

const allEleves = new GetElevesService().getAllEleve(); // Type OneHuman[]
const allEtudiants = new GetElevesService().getAllEtudiant(); // Type OneHuman[]
const allWorkers = new GetElevesService().getAllWorker(); // Type OneHuman[]

const allHuman = (allHuman: OneHuman[]) => {
  const tab = [];
  for (let index = 0; index < allHuman.length; index++) {
    const element = allHuman[index];
    tab.push({
      id: element.id,
      fullName: element.fullName,
      age: element.age,
      fonction: element.fonction,
      points: element.points,
      style: element.style,
    });
  }
  return tab;
};

const initialStates = {
    eleve: allHuman(allEleves),
    etudiant: allHuman(allEtudiants),
    worker: allHuman(allWorkers)
}

export const eleveSlice = createSlice({
  name: "eleve",
  initialState: initialStates,
  reducers: {
    increment: (state, action: { payload: { id: number } }) => {
      state.eleve.map((eleve) => eleve.id == action.payload.id && eleve.points++);
    },
    decrement: (state, action: { payload: { id: number } }) => {
      state.eleve.map((eleve) => eleve.id == action.payload.id && eleve.points--);
    },
    incrementByAmount: (
      state,
      action: { payload: { id: number; points: number } }
    ) => {
      const stateE = state.eleve[action.payload.id];
      stateE.points += action.payload.points;
      state.eleve.splice(action.payload.id, 1, stateE);
    },
    remplir: (state) => {
      state;
    },
    initial: (state) => {
      state;
    },
  },
});

export const { increment, decrement, incrementByAmount, initial, remplir } =
  eleveSlice.actions;

export const selectAllEleves = (state: RootState) => state;

const com = eleveSlice.reducer;
export default com;
