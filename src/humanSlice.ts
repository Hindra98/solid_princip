import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store/store";
import GetElevesService from "./data/AllEleves";
import OneHuman from "./data/DTO/OneHuman";
import { INFO, createLogger, stdSerializers } from "browser-bunyan";
import { ConsoleFormattedStream } from '@browser-bunyan/console-formatted-stream';
import { produce } from "immer";

const allEleves = new GetElevesService().getAllEleve(); // Type OneHuman[]
const allEtudiants = new GetElevesService().getAllEtudiant(); // Type OneHuman[]
const allWorkers = new GetElevesService().getAllWorker(); // Type OneHuman[]

const logger = createLogger({
    name: "logger_human",
    streams: [
        {
            level: INFO,
            stream: new ConsoleFormattedStream({ logByLevel: true }),
        }
    ],
    serializers: stdSerializers,
    src: true
});


const allHuman = (allHuman: OneHuman[], key: string) => {
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
      key: key,
    });
  }
  return tab;
};

const initialStates = {
    eleve: allHuman(allEleves, 'EL'),
    etudiant: allHuman(allEtudiants, 'ET'),
    worker: allHuman(allWorkers, 'WO'),
}

export const eleveSlice = createSlice({
  name: "eleve",
  initialState: initialStates,
  reducers: {
    increment: (state, action: { payload: { id: number, key:string } }) => {
        switch (action.payload.key) {
            case 'EL':
                logger.info("Eleve: " + state.eleve[action.payload.id-1].fullName + " a maintenant: " + (state.eleve[action.payload.id-1].points+1) + " points")
                return produce(state, (draftState) => {
                    draftState.eleve.map(eleve => eleve.id == action.payload.id && eleve.points++)
                })
            case 'ET':
                logger.info("Etudiant: " + state.etudiant[action.payload.id-1].fullName + " a maintenant: " + (state.etudiant[action.payload.id-1].points+1) + " points")
                return produce(state, (draftState) => {
                    draftState.etudiant.map(etudiant => etudiant.id == action.payload.id && etudiant.points++)
                })
            case 'WO':
                logger.info("Worker: " + state.worker[action.payload.id-1].fullName + " a maintenant: " + (state.worker[action.payload.id-1].points+1) + " points")
                return produce(state, (draftState) => {
                    draftState.worker.map(worker => worker.id == action.payload.id && worker.points++)
                })
            default: return state;
        }
    },
    decrement: (state, action: { payload: { id: number, key:string } }) => {
        switch (action.payload.key) {
            case 'EL':
                (state.eleve[action.payload.id-1].points > 10) ?
                logger.warn("Eleve: " + state.eleve[action.payload.id-1].fullName + " a maintenant: " + (state.eleve[action.payload.id-1].points-1) + " points") :
                logger.fatal("Eleve: " + state.eleve[action.payload.id-1].fullName + ", vous etes en dessous des 10points et avez " + (state.eleve[action.payload.id-1].points-1) + " points. Faites gaffe")
                return produce(state, (draftState) => {
                    draftState.eleve.map(eleve => eleve.id == action.payload.id && eleve.points--)
                })
            case 'ET':
                (state.eleve[action.payload.id-1].points > 10) ?
                logger.warn("Etudiant: " + state.etudiant[action.payload.id-1].fullName + " a maintenant: " + (state.etudiant[action.payload.id-1].points-1) + " points") :
                logger.fatal("Etudiant: " + state.etudiant[action.payload.id-1].fullName + ", vous etes en dessous des 10points et avez " + (state.etudiant[action.payload.id-1].points-1) + " points. Faites gaffe")
                return produce(state, (draftState) => {
                    draftState.etudiant.map(etudiant => etudiant.id == action.payload.id && etudiant.points--)
                })
            case 'WO':
                (state.eleve[action.payload.id-1].points > 10) ?
                logger.warn("Worker: " + state.worker[action.payload.id-1].fullName + " a maintenant: " + (state.worker[action.payload.id-1].points-1) + " points") :
                logger.warn("Worker: " + state.worker[action.payload.id-1].fullName + ", vous etes en dessous des 10points et avez " + (state.worker[action.payload.id-1].points-1) + " points. Faites gaffe")
                return produce(state, (draftState) => {
                    draftState.worker.map(worker => worker.id == action.payload.id && worker.points--)
                })
            default: return state;
        }
    },
  },
});

export const { increment, decrement } =
  eleveSlice.actions;

export const selectAllEleves = (state: RootState) => state;

const com = eleveSlice.reducer;
export default com;
