import { db } from "./firebaseInit";
import { ref, get, child, set } from "firebase/database";

export const getAllData = async () => {
    const dbRef = ref(db);
    const data = await (await get(child(dbRef, "/"))).val();
    console.log({ data });
    return data;
};

export const isUserAlreadyInDb = async (uid) => {
    const dbRef = ref(db);
    const data = await (await get(child(dbRef, `registrants/${uid}`))).val();
    console.log({ dataFromHere: data });
    return data;
};

export const createNewUser = async (data) => {
    const dbRef = ref(db);
    const res = await set(child(dbRef, `registrants/${data.uid}`), data);
    console.log("inside createNewUser", res);
    return res;
};

export const CoreTeamDetails = async () => {
    const dbRef = ref(db);
    const res = await (await get(child(dbRef, `core-teams-details/`))).val();
    console.log(">> Firebase | Fetched Core Team Details \n", res);
    return res;
};
