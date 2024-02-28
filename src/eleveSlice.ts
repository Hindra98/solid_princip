import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store/store";
import GetElevesService from "./data/AllEleves";

const allEleves = new GetElevesService().getAllHuman(); // Type OneHuman[]

const initialStates = () => {
  const tab = [];
  for (let index = 0; index < allEleves.length; index++) {
    const element = allEleves[index];
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

export const eleveSlice = createSlice({
  name: "eleve",
  initialState: initialStates,
  reducers: {
    increment: (state, action: { payload: { id: number } }) => {
      state.map((eleve) => eleve.id == action.payload.id && eleve.points++);
    },
    decrement: (state, action: { payload: { id: number } }) => {
      state.map((eleve) => eleve.id == action.payload.id && eleve.points--);
    },
    incrementByAmount: (
      state,
      action: { payload: { id: number; points: number } }
    ) => {
      const stateE = state[action.payload.id];
      stateE.points += action.payload.points;
      state.splice(action.payload.id, 1, stateE);
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
