import { db } from "./firebaseInit";
import { ref, get, child, set, onValue } from "firebase/database";

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

export const GetDetailsOfEndPoint = async (endpoint) => {
    const dbRef = ref(db);
    const res = await (await get(child(dbRef, endpoint))).val();
    console.log(">> Firebase | Fetched data with endpoint: " + endpoint + "\n", res);
    return res;
};

export const GetDetailsOfEndPointSnapshot = async (endpoint, callback) => {
    const dbRef = ref(db, endpoint);
    onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
        console.log(">> Snapshot", data);
        callback(data);
    });
};
