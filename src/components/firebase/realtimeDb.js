import { db } from './firebaseInit';
import { ref, get, child } from 'firebase/database';

export const getAllData = async () => {
  const dbRef = ref(db);
  const data = await (await get(child(dbRef, '/'))).val();
  console.log({ data });
  return data;
};
