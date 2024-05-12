import diaries from '../../data/diaries';
import { NonSensitiveDiaryEntry, DiaryEntry,NewDiaryEntry } from '../types';

const getDiaries=():DiaryEntry[]=>{
  return diaries;
};

const getNonSensitiveDiaryEntry=():NonSensitiveDiaryEntry[]=>{
 return diaries.map(({id,date,weather,visibility})=>({
  id,
  date,
  weather,
  visibility
 }));
};
//since find return object we assert return type to be DiaryEntry and not DiaryEntry[] 
const findById=(id:number):DiaryEntry | undefined =>{
 return diaries.find(d=>d.id===id);
};

const addDiaries=(diary:NewDiaryEntry):DiaryEntry=>{
  const newDiaryEntry={
    id:Math.max(...diaries.map(d=>d.id))+1,
    ...diary
  };
  diaries.push(newDiaryEntry);
  return newDiaryEntry;
};

export default {
  getDiaries,
  addDiaries,
  getNonSensitiveDiaryEntry,
  findById
};